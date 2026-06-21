const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../..');
const DATA_ROOT = path.join(REPO_ROOT, 'data/intelligence');

const STATUSES = new Set(['unverified', 'verified', 'rejected', 'needs_review', 'promoted']);
const REVIEW_STATUSES = new Set(['unreviewed', 'needs_review', 'approved', 'rejected', 'promoted']);

const ENTITY_CONFIG = {
  customers: {
    idField: 'customer_id',
    labelFields: ['name', 'legal_name', 'display_name'],
    duplicateKey: (record) => normalize(record.name || record.legal_name || record.display_name || record.customer_id),
  },
  sources: {
    idField: 'source_id',
    labelFields: ['source_name', 'source_url'],
    duplicateKey: (record) => normalize(record.source_url || record.source_name || record.source_id),
  },
  plants: {
    idField: 'plant_id',
    labelFields: ['name'],
    duplicateKey: (record) => `${normalize(record.customer_id)}::${normalize(record.name || record.plant_id)}`,
  },
  contacts: {
    idField: 'contact_id',
    labelFields: ['name'],
    duplicateKey: (record) => `${normalize(record.customer_id)}::${normalize(record.name || record.contact_id)}::${normalize(record.role)}`,
  },
  tenders: {
    idField: 'tender_id',
    labelFields: ['title'],
    duplicateKey: (record) => normalize(record.tender_id || `${record.title || ''}::${record.issuing_organization || ''}`),
  },
  market_signals: {
    idField: 'signal_id',
    labelFields: ['title'],
    duplicateKey: (record) => normalize(record.signal_id || `${record.title || ''}::${record.source_url || ''}`),
  },
  opportunities: {
    idField: 'opportunity_id',
    labelFields: ['title'],
    duplicateKey: (record) => normalize(record.opportunity_id || `${record.customer_id || ''}::${record.tender_id || ''}::${record.title || ''}`),
  },
  evidence_items: {
    idField: 'evidence_id',
    labelFields: ['evidence_summary'],
    duplicateKey: (record) => normalize(record.evidence_id || `${record.source_id || record.source_url || ''}::${record.evidence_summary || ''}`),
  },
  opportunity_evidence_links: {
    idField: 'link_id',
    labelFields: ['opportunity_id'],
    duplicateKey: (record) => normalize(record.link_id || `${record.opportunity_id || ''}::${record.evidence_id || ''}`),
  },
  solution_fits: {
    idField: 'solution_fit_id',
    labelFields: ['solution_name', 'opportunity_id'],
    duplicateKey: (record) => normalize(record.solution_fit_id || `${record.opportunity_id || ''}::${record.solution_name || ''}`),
  },
  human_reviews: {
    idField: 'review_id',
    labelFields: ['record_id'],
    duplicateKey: (record) => normalize(record.review_id || `${record.record_type || ''}::${record.record_id || ''}::${record.reviewed_at || ''}`),
  },
};

const SOURCE_FIELDS = [
  'source_url',
  'source_name',
  'source_type',
  'collected_at',
  'last_verified_at',
  'reliability_score',
  'evidence_summary',
];

function normalize(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function nowIso() {
  return new Date().toISOString();
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(filePath, fallback = []) {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }
  const raw = fs.readFileSync(filePath, 'utf8').trim();
  if (!raw) {
    return fallback;
  }
  return JSON.parse(raw);
}

function writeJson(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function storePath(store, entityType, root = DATA_ROOT) {
  return path.join(root, store, `${entityType}.json`);
}

function readStore(store, entityType, root = DATA_ROOT) {
  return readJson(storePath(store, entityType, root), []);
}

function writeStore(store, entityType, records, root = DATA_ROOT) {
  writeJson(storePath(store, entityType, root), records);
}

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const item = argv[index];
    if (item.startsWith('--')) {
      const key = item.slice(2);
      const next = argv[index + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        index += 1;
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

function readInputRecords(inputPath) {
  if (!inputPath) {
    throw new Error('Missing --file <path> argument.');
  }
  const absolutePath = path.resolve(process.cwd(), inputPath);
  const records = readJson(absolutePath, null);
  if (!Array.isArray(records)) {
    throw new Error(`Import file must contain a JSON array: ${absolutePath}`);
  }
  return records;
}

function hasSource(record) {
  return Boolean(
    record.source_name &&
    record.source_type &&
    record.collected_at &&
    record.evidence_summary &&
    record.reliability_score !== undefined &&
    record.reliability_score !== null &&
    record.reliability_score !== ''
  );
}

function sourceErrors(record) {
  const errors = [];
  for (const field of SOURCE_FIELDS) {
    if (field === 'source_url' || field === 'last_verified_at') {
      continue;
    }
    if (record[field] === undefined || record[field] === null || record[field] === '') {
      errors.push(`missing source field "${field}"`);
    }
  }
  if (record.reliability_score !== undefined) {
    const score = Number(record.reliability_score);
    if (!Number.isFinite(score) || score < 0 || score > 1) {
      errors.push('reliability_score must be a number from 0 to 1');
    }
  }
  return errors;
}

function normalizeImportedRecord(entityType, record) {
  const config = ENTITY_CONFIG[entityType];
  if (!config) {
    throw new Error(`Unknown entity type: ${entityType}`);
  }

  const id = record[config.idField] || `${entityType.toUpperCase()}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return {
    ...record,
    [config.idField]: id,
    status: 'unverified',
    human_review_status: 'needs_review',
    intelligence_store: 'inbox',
    collected_at: record.collected_at || nowIso(),
    created_at: record.created_at || nowIso(),
    updated_at: nowIso(),
    conflict_flags: Array.isArray(record.conflict_flags) ? record.conflict_flags : [],
  };
}

function requiredFieldErrors(entityType, record) {
  const config = ENTITY_CONFIG[entityType];
  const errors = [];
  if (!record[config.idField]) {
    errors.push(`missing id field "${config.idField}"`);
  }

  const hasLabel = config.labelFields.some((field) => Boolean(record[field]));
  if (!hasLabel) {
    errors.push(`missing label field, expected one of: ${config.labelFields.join(', ')}`);
  }

  if (record.status && !STATUSES.has(record.status)) {
    errors.push(`invalid status "${record.status}"`);
  }

  if (record.human_review_status && !REVIEW_STATUSES.has(record.human_review_status)) {
    errors.push(`invalid human_review_status "${record.human_review_status}"`);
  }

  if (entityType === 'opportunities') {
    if (!Array.isArray(record.evidence_items) || record.evidence_items.length === 0) {
      errors.push('opportunity requires at least one evidence item');
    }
    if (!record.customer_id) {
      errors.push('opportunity requires customer_id');
    }
    if (!Array.isArray(record.assumptions)) {
      errors.push('opportunity assumptions must be an array');
    }
    if (!Array.isArray(record.risks)) {
      errors.push('opportunity risks must be an array');
    }
    if (!Array.isArray(record.recommended_next_actions)) {
      errors.push('opportunity recommended_next_actions must be an array');
    }
  }

  if (entityType === 'opportunity_evidence_links') {
    if (!record.opportunity_id) {
      errors.push('opportunity_evidence_link requires opportunity_id');
    }
    if (!record.evidence_id) {
      errors.push('opportunity_evidence_link requires evidence_id');
    }
  }

  if (entityType === 'solution_fits') {
    if (!record.opportunity_id) {
      errors.push('solution_fit requires opportunity_id');
    }
    if (!record.solution_name && !record.solution_id) {
      errors.push('solution_fit requires solution_name or solution_id');
    }
  }

  if (entityType === 'human_reviews') {
    if (!record.record_type || !record.record_id) {
      errors.push('human_review requires record_type and record_id');
    }
    if (!record.decision) {
      errors.push('human_review requires decision');
    }
  }

  return errors;
}

function findDuplicates(entityType, candidate, stores) {
  const config = ENTITY_CONFIG[entityType];
  const candidateId = candidate[config.idField];
  const candidateKey = config.duplicateKey(candidate);
  const duplicates = [];

  for (const [storeName, records] of Object.entries(stores)) {
    for (const record of records) {
      const sameId = candidateId && record[config.idField] === candidateId;
      const sameKey = candidateKey && config.duplicateKey(record) === candidateKey;
      if (sameId || sameKey) {
        duplicates.push({
          store: storeName,
          id: record[config.idField],
          status: record.status,
          human_verified: Boolean(record.human_verified),
        });
      }
    }
  }

  return duplicates;
}

function importRecords(entityType, records, options = {}) {
  const root = options.root || DATA_ROOT;
  const inbox = readStore('inbox', entityType, root);
  const verified = readStore('verified', entityType, root);
  const imported = [];
  const errors = [];

  for (const rawRecord of records) {
    const record = normalizeImportedRecord(entityType, rawRecord);
    const recordErrors = [...requiredFieldErrors(entityType, record), ...sourceErrors(record)];
    const duplicates = findDuplicates(entityType, record, { inbox, verified });

    if (duplicates.length > 0) {
      record.conflict_flags = [
        ...record.conflict_flags,
        ...duplicates.map((duplicate) => `possible_duplicate:${duplicate.store}:${duplicate.id}`),
      ];
      if (duplicates.some((duplicate) => duplicate.store === 'verified')) {
        record.conflict_flags.push('requires_human_review:matches_verified_record');
      }
    }

    if (recordErrors.length > 0) {
      errors.push({ id: record[ENTITY_CONFIG[entityType].idField], errors: recordErrors });
      continue;
    }

    inbox.push(record);
    imported.push(record);
  }

  writeStore('inbox', entityType, inbox, root);
  return { imported, errors };
}

function validateRecord(entityType, record, context = {}) {
  const errors = [...requiredFieldErrors(entityType, record)];

  if ((record.status === 'verified' || record.status === 'promoted') && !hasSource(record)) {
    errors.push('verified/promoted record requires source fields');
  }

  if (record.status === 'promoted' && record.human_review_status !== 'promoted') {
    errors.push('promoted record requires human_review_status "promoted"');
  }

  if (entityType === 'opportunities') {
    const evidenceItems = Array.isArray(record.evidence_items) ? record.evidence_items : [];
    for (const evidence of evidenceItems) {
      const evidenceRecord = evidence.source_name ? evidence : { ...record, ...evidence };
      const evidenceErrors = sourceErrors(evidenceRecord);
      if (evidenceErrors.length > 0) {
        errors.push(`invalid evidence item: ${evidenceErrors.join(', ')}`);
      }
    }
    if (record.status === 'verified' && record.generated_from_unverified) {
      errors.push('unverified data cannot become opportunity automatically');
    }
  }

  if (context.now) {
    const collectedAt = Date.parse(record.collected_at || '');
    const now = Date.parse(context.now);
    const maxAgeDays = context.maxAgeDays || 365;
    if (Number.isFinite(collectedAt)) {
      const ageDays = (now - collectedAt) / (1000 * 60 * 60 * 24);
      if (ageDays > maxAgeDays) {
        errors.push(`outdated data: collected_at is older than ${maxAgeDays} days`);
      }
    }
  }

  return errors;
}

function validateAll(options = {}) {
  const root = options.root || DATA_ROOT;
  const issues = [];

  for (const entityType of Object.keys(ENTITY_CONFIG)) {
    for (const store of ['inbox', 'verified']) {
      const records = readStore(store, entityType, root);
      const seenKeys = new Map();
      for (const record of records) {
        const errors = validateRecord(entityType, record, options);
        for (const error of errors) {
          issues.push({ store, entityType, id: record[ENTITY_CONFIG[entityType].idField], error });
        }

        const key = ENTITY_CONFIG[entityType].duplicateKey(record);
        if (key && seenKeys.has(key)) {
          issues.push({
            store,
            entityType,
            id: record[ENTITY_CONFIG[entityType].idField],
            error: `duplicate ${entityType} record also matches ${seenKeys.get(key)}`,
          });
        } else {
          seenKeys.set(key, record[ENTITY_CONFIG[entityType].idField]);
        }
      }
    }
  }

  return issues;
}

function evidenceFromRecord(record, evidenceType) {
  return {
    evidence_id: `${evidenceType.toUpperCase()}-${record.tender_id || record.signal_id || Date.now()}`,
    evidence_type: evidenceType,
    source_url: record.source_url || '',
    source_name: record.source_name,
    source_type: record.source_type,
    collected_at: record.collected_at,
    last_verified_at: record.last_verified_at || '',
    reliability_score: Number(record.reliability_score || 0),
    evidence_summary: record.evidence_summary,
    linked_record_id: record.tender_id || record.signal_id || '',
  };
}

function generateOpportunityCandidates(options = {}) {
  const root = options.root || DATA_ROOT;
  const verifiedCustomers = readStore('verified', 'customers', root);
  const verifiedTenders = readStore('verified', 'tenders', root);
  const verifiedSignals = readStore('verified', 'market_signals', root);
  const inboxOpportunities = readStore('inbox', 'opportunities', root);
  const candidates = [];

  const customerIds = new Set(verifiedCustomers.map((customer) => customer.customer_id));

  for (const tender of verifiedTenders) {
    if (!tender.customer_id || !customerIds.has(tender.customer_id)) {
      continue;
    }
    const opportunity = {
      opportunity_id: `OPP-TDR-${tender.tender_id}`,
      title: tender.title,
      customer_id: tender.customer_id,
      plant_id: tender.plant_id || '',
      pain_points: tender.pain_points || [],
      triggers: ['tender'],
      tender_id: tender.tender_id,
      procurement_signal: tender.scope || tender.title,
      relevant_solutions: tender.relevant_solutions || [],
      evidence_items: [evidenceFromRecord(tender, 'tender')],
      assumptions: ['Tender requirements need presales validation before action.'],
      risks: tender.risks || [],
      recommended_next_actions: ['Verify stakeholder map.', 'Map requirements to Avenue solution capabilities.'],
      status: 'needs_review',
      human_review_status: 'needs_review',
      generated_from_unverified: false,
      created_at: nowIso(),
      updated_at: nowIso(),
    };
    candidates.push(scoreOpportunity(opportunity));
  }

  for (const signal of verifiedSignals) {
    if (!signal.customer_id || !customerIds.has(signal.customer_id)) {
      continue;
    }
    const opportunity = {
      opportunity_id: `OPP-SIG-${signal.signal_id}`,
      title: signal.title,
      customer_id: signal.customer_id,
      plant_id: signal.plant_id || '',
      pain_points: [signal.pain_point].filter(Boolean),
      triggers: [signal.trigger || signal.signal_type].filter(Boolean),
      tender_id: '',
      procurement_signal: '',
      relevant_solutions: signal.relevant_solutions || [],
      evidence_items: [evidenceFromRecord(signal, 'market_signal')],
      assumptions: ['Market signal requires direct customer validation before action.'],
      risks: signal.risks || [],
      recommended_next_actions: ['Validate signal with Sales.', 'Research plant and stakeholder context.'],
      status: 'needs_review',
      human_review_status: 'needs_review',
      generated_from_unverified: false,
      created_at: nowIso(),
      updated_at: nowIso(),
    };
    candidates.push(scoreOpportunity(opportunity));
  }

  const existingIds = new Set(inboxOpportunities.map((record) => record.opportunity_id));
  const newCandidates = candidates.filter((candidate) => !existingIds.has(candidate.opportunity_id));
  writeStore('inbox', 'opportunities', [...inboxOpportunities, ...newCandidates], root);

  return newCandidates;
}

function clampScore(value) {
  if (!Number.isFinite(value)) {
    return 0;
  }
  return Math.max(0, Math.min(100, Math.round(value)));
}

function scoreOpportunity(opportunity) {
  const evidenceItems = Array.isArray(opportunity.evidence_items) ? opportunity.evidence_items : [];
  const reliabilityAverage = evidenceItems.length
    ? evidenceItems.reduce((sum, item) => sum + Number(item.reliability_score || 0), 0) / evidenceItems.length
    : 0;
  const hasTender = Boolean(opportunity.tender_id || opportunity.procurement_signal);
  const hasSolutions = Array.isArray(opportunity.relevant_solutions) && opportunity.relevant_solutions.length > 0;
  const hasActions = Array.isArray(opportunity.recommended_next_actions) && opportunity.recommended_next_actions.length > 0;
  const hasRelationship = Array.isArray(opportunity.key_contacts) && opportunity.key_contacts.length > 0;
  const hasValueSignal = Boolean(opportunity.estimated_value || opportunity.budget_signal);

  return {
    ...opportunity,
    solution_fit_score: clampScore((hasSolutions ? 65 : 35) + (hasTender ? 10 : 0)),
    urgency_score: clampScore(hasTender ? 75 : 45),
    confidence_score: clampScore(reliabilityAverage * 100),
    strategic_fit_score: clampScore((hasSolutions ? 60 : 35) + (hasActions ? 15 : 0)),
    relationship_score: clampScore(hasRelationship ? 70 : 25),
    estimated_value_score: clampScore(hasValueSignal ? 65 : 30),
    scoring_notes: [
      'Scores are heuristic placeholders for Phase 1.',
      'Human review is required before promotion or action.',
    ],
    updated_at: nowIso(),
  };
}

function scoreOpportunities(options = {}) {
  const root = options.root || DATA_ROOT;
  const opportunities = readStore('inbox', 'opportunities', root);
  const scored = opportunities.map(scoreOpportunity);
  writeStore('inbox', 'opportunities', scored, root);
  return scored;
}

function promoteOpportunity(opportunity, options = {}) {
  if (opportunity.status !== 'verified' || opportunity.human_review_status !== 'approved') {
    throw new Error('Opportunity must be verified and approved before promotion.');
  }
  const errors = validateRecord('opportunities', opportunity);
  if (errors.length > 0) {
    throw new Error(`Opportunity cannot be promoted: ${errors.join('; ')}`);
  }
  return {
    ...opportunity,
    status: 'promoted',
    human_review_status: 'promoted',
    promoted_at: nowIso(),
  };
}

module.exports = {
  DATA_ROOT,
  ENTITY_CONFIG,
  SOURCE_FIELDS,
  STATUSES,
  REVIEW_STATUSES,
  evidenceFromRecord,
  findDuplicates,
  generateOpportunityCandidates,
  hasSource,
  importRecords,
  normalize,
  parseArgs,
  promoteOpportunity,
  readInputRecords,
  readStore,
  scoreOpportunities,
  scoreOpportunity,
  sourceErrors,
  storePath,
  validateAll,
  validateRecord,
  writeStore,
};
