# Intelligence Pipeline

## Preferred Flow

```text
Collect -> Store as Unverified Intelligence -> Verify -> Normalize -> Link -> Score -> Human Review -> Promote to Knowledge Hub
```

## 1. Collect

Collect structured records and evidence from:

- manual user entry;
- internal notes;
- approved source registries;
- tender documents;
- public announcements;
- customer or plant research;
- Avenue internal knowledge.

Do not start with uncontrolled crawling.

Collection must write to the Intelligence Inbox first. Import scripts and future agents must not write directly to verified or promoted records.

Current manual import commands:

- `npm run import_customer_data -- --file templates/import/customer_import_template.json`
- `npm run import_plant_data -- --file templates/import/plant_import_template.json`
- `npm run import_contact_data -- --file templates/import/contact_import_template.json`
- `npm run import_tender_data -- --file templates/import/tender_import_template.json`
- `npm run import_market_signals -- --file templates/import/market_signal_import_template.json`
- `npm run import_opportunity_data -- --file templates/import/opportunity_import_template.json`

## 1.5 Store As Unverified Intelligence

All external records enter:

```text
data/intelligence/inbox/
```

Inbox records use:

- `status: "unverified"` for raw imported records;
- `human_review_status: "needs_review"` for records awaiting human review.

Verified records live in:

```text
data/intelligence/verified/
```

Promoted Knowledge Hub outputs live in:

```text
data/intelligence/promoted/
```

## 2. Verify

Check whether collected data is source-backed, current, relevant, and safe to use.

Verification must identify:

- source;
- timestamp;
- reliability;
- data owner;
- conflicts;
- sensitive fields;
- review status.

Verification commands:

- `npm run validate_intelligence_records`

Verification rules:

- Never promote data without source.
- Never overwrite human-verified data with unverified external data.
- Separate evidence from assumption.
- Flag conflicting sources.
- Flag outdated data.
- Require human review before promotion.

## 3. Normalize

Convert raw or semi-structured information into consistent records.

Normalize:

- customer names and aliases;
- plant names and locations;
- industries and segments;
- tender IDs and package names;
- solution names;
- contact and stakeholder roles;
- source and evidence metadata.

## 4. Link

Connect records through explicit relationships:

- customer to plant;
- plant to industry and production process;
- tender to buyer, plant, requirements, and opportunity;
- signal to customer, plant, trigger, and opportunity candidate;
- solution to capability, partner, case study, and requirement;
- opportunity to all supporting branches.

Opportunity-centered links must include:

- customer;
- plant or facility;
- pain point;
- trigger;
- tender or procurement signal;
- relevant Avenue solution;
- evidence items;
- assumptions;
- risks;
- recommended next actions.

## 5. Score

Score opportunities using visible criteria:

- confidence;
- strategic fit;
- urgency;
- relationship strength;
- estimated value signal;
- risk level.

Scoring should be explainable and reviewable.

Current scoring command:

- `npm run score_opportunities`

Current score fields:

- solution_fit_score;
- urgency_score;
- confidence_score;
- strategic_fit_score;
- relationship_score;
- estimated_value_score.

These are Phase 1 heuristic scores. Human review is required before action.

## 6. Strategize

Generate recommended action:

- sales entry point;
- presales preparation;
- tender strategy;
- executive approach;
- solution bundle;
- partner involvement;
- proof points and references;
- risks and objections.

## 7. Human Review

Human reviewers decide whether to:

- approve for action;
- request more research;
- merge duplicate records;
- reject unsupported claims;
- archive stale information.

Human review is the gate between inbox records and verified or promoted records.

Future UI/API work should treat review as a first-class action, not an implicit status edit.

## 8. Act

Action should be assigned to roles:

- Sales;
- Presales;
- Technical;
- Management;
- Partner manager if relevant.

Actions should have owner, priority, due date, and status.

## Opportunity Candidate Generation

Current command:

- `npm run generate_opportunity_candidates`

The command reads only verified customer, tender, and market signal records. It writes Opportunity candidates to the inbox with `status: "needs_review"` and `human_review_status: "needs_review"`.

It does not create verified or promoted Opportunities automatically.
