const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const {
  generateOpportunityCandidates,
  importRecords,
  promoteOpportunity,
  validateAll,
  validateRecord,
  writeStore,
  readStore,
} = require('../scripts/intelligence/core');

function tempRoot() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'avenue-intel-'));
}

function sourceFields(overrides = {}) {
  return {
    source_url: 'https://example.com/source',
    source_name: 'Example Source',
    source_type: 'public_web',
    collected_at: '2026-06-21T00:00:00.000Z',
    last_verified_at: '',
    reliability_score: 0.8,
    evidence_summary: 'Example source-backed evidence.',
    ...overrides,
  };
}

function verifiedCustomer(overrides = {}) {
  return {
    customer_id: 'CUST-1',
    name: 'Example Customer',
    status: 'verified',
    human_review_status: 'approved',
    human_verified: true,
    ...sourceFields(),
    ...overrides,
  };
}

test('missing source is rejected by validation and cannot be promoted', () => {
  const opportunity = {
    opportunity_id: 'OPP-1',
    title: 'Unsupported opportunity',
    customer_id: 'CUST-1',
    owner: 'Test Owner',
    evidence_items: [{ evidence_summary: 'No source fields.' }],
    assumptions: [],
    risks: [],
    recommended_next_actions: [],
    status: 'verified',
    human_review_status: 'approved',
  };

  const errors = validateRecord('opportunities', opportunity);
  assert(errors.some((error) => error.includes('verified/promoted record requires source fields')));
  assert(errors.some((error) => error.includes('invalid evidence item')));
  assert.throws(() => promoteOpportunity(opportunity), /cannot be promoted/);
});

test('duplicate customer is flagged in the Intelligence Inbox', () => {
  const root = tempRoot();
  const records = [
    {
      customer_id: 'CUST-1',
      name: 'Example Customer',
      ...sourceFields(),
    },
    {
      customer_id: 'CUST-2',
      name: 'Example Customer',
      ...sourceFields({ source_url: 'https://example.com/source-2' }),
    },
  ];

  importRecords('customers', records, { root });
  const issues = validateAll({ root });
  assert(issues.some((issue) => issue.entityType === 'customers' && issue.error.includes('duplicate customers')));
});

test('duplicate tender is flagged in the Intelligence Inbox', () => {
  const root = tempRoot();
  const records = [
    {
      tender_id: 'TDR-1',
      title: 'APM Tender',
      issuing_organization: 'Example Buyer',
      ...sourceFields(),
    },
    {
      tender_id: 'TDR-1',
      title: 'APM Tender Copy',
      issuing_organization: 'Example Buyer',
      ...sourceFields({ source_url: 'https://example.com/tender-copy' }),
    },
  ];

  importRecords('tenders', records, { root });
  const issues = validateAll({ root });
  assert(issues.some((issue) => issue.entityType === 'tenders' && issue.error.includes('duplicate tenders')));
});

test('unverified tender data cannot become an opportunity automatically', () => {
  const root = tempRoot();
  writeStore('verified', 'customers', [verifiedCustomer()], root);
  writeStore('inbox', 'tenders', [
    {
      tender_id: 'TDR-1',
      title: 'APM Tender',
      customer_id: 'CUST-1',
      scope: 'APM',
      status: 'unverified',
      human_review_status: 'needs_review',
      ...sourceFields(),
    },
  ], root);

  const candidates = generateOpportunityCandidates({ root });
  assert.equal(candidates.length, 0);
  assert.deepEqual(readStore('inbox', 'opportunities', root), []);
});

test('opportunity requires evidence', () => {
  const errors = validateRecord('opportunities', {
    opportunity_id: 'OPP-1',
    title: 'No evidence opportunity',
    customer_id: 'CUST-1',
    owner: 'Test Owner',
    evidence_items: [],
    assumptions: [],
    risks: [],
    recommended_next_actions: [],
    status: 'needs_review',
    human_review_status: 'needs_review',
  });

  assert(errors.includes('opportunity requires at least one evidence item'));
});

test('verified human customer data is not overwritten by unverified import', () => {
  const root = tempRoot();
  writeStore('verified', 'customers', [verifiedCustomer({ known_systems: ['Verified DCS'] })], root);

  const result = importRecords('customers', [
    {
      customer_id: 'CUST-EXT',
      name: 'Example Customer',
      known_systems: ['Unverified SCADA'],
      ...sourceFields({ source_url: 'https://example.com/new-source' }),
    },
  ], { root });

  const verified = readStore('verified', 'customers', root);
  const inbox = readStore('inbox', 'customers', root);

  assert.equal(result.imported.length, 1);
  assert.deepEqual(verified[0].known_systems, ['Verified DCS']);
  assert.deepEqual(inbox[0].known_systems, ['Unverified SCADA']);
  assert(inbox[0].conflict_flags.includes('requires_human_review:matches_verified_record'));
});

test('verified records can generate needs_review opportunity candidates with scores', () => {
  const root = tempRoot();
  writeStore('verified', 'customers', [verifiedCustomer()], root);
  writeStore('verified', 'tenders', [
    {
      tender_id: 'TDR-1',
      title: 'APM Tender',
      customer_id: 'CUST-1',
      scope: 'Asset performance management',
      relevant_solutions: ['IBM MAS'],
      status: 'verified',
      human_review_status: 'approved',
      ...sourceFields({ source_type: 'tender_portal' }),
    },
  ], root);

  const candidates = generateOpportunityCandidates({ root });
  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].status, 'needs_review');
  assert.equal(candidates[0].human_review_status, 'needs_review');
  assert.equal(candidates[0].generated_from_unverified, false);
  assert(candidates[0].confidence_score > 0);
  assert(candidates[0].evidence_items.length > 0);
});
