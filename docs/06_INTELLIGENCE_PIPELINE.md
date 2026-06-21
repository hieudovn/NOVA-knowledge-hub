# Intelligence Pipeline

## Preferred Flow

```text
Collect -> Filter -> Store as Unverified Intelligence -> Verify -> Normalize -> Structure -> Link -> Enrich -> Reuse
```

The pipeline is a Minimum Viable Intelligence Loop, not only an Opportunity-generation pipeline. Opportunity is one high-value output of enriched data. Other outputs include tender documents, proposal inputs, sales strategy, product strategy, account plans, market maps, solution briefs, and management decision support.

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

## 1.5 Filter And Store As Unverified Intelligence

Filtering decides whether incoming material is worth keeping, what domain it belongs to, and what review path it needs.

Filter by:

- relevance to Avenue industrial GTM work;
- source presence and reliability;
- domain: solution, capability, customer, plant, contact, tender, market signal, case study, competitor, partner, or opportunity;
- confidentiality and commercial sensitivity;
- expected downstream reuse.

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

## 3.5 Structure

Convert useful material into structured records or reviewed wiki knowledge.

Structured outputs may include:

- solution and capability pages;
- customer, plant, contact, tender, signal, evidence, and Opportunity records;
- case-study and reference records;
- partner and competitor notes;
- reusable offer maps and proposal inputs.

## 4. Link

Connect records through explicit relationships:

- customer to plant;
- plant to industry and production process;
- tender to buyer, plant, requirements, and opportunity;
- signal to customer, plant, trigger, and opportunity candidate;
- solution to capability, partner, case study, and requirement;
- opportunity to all supporting branches.

Links are useful even when they do not create an Opportunity immediately. A validated solution-to-capability link, tender-to-requirement link, or customer-to-plant link is reusable data.

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

## 5. Enrich And Score

Enrichment adds reusable structure and context:

- summaries with source references;
- capability mappings;
- requirement mappings;
- industry and process context;
- assumptions and validation needs;
- risks and constraints;
- reusable snippets for tenders, proposals, strategy, and offer maps.

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

## 9. Reuse

Reuse enriched knowledge for:

- tender compliance matrices;
- bid and proposal drafts;
- sales and presales solution briefs;
- customer-specific proposal packs;
- account plans;
- APM and IIoT offer maps;
- product and solution strategy;
- market maps;
- Opportunity scorecards;
- management decision briefs;
- approved public-ready content.

## Opportunity Candidate Generation

Current command:

- `npm run generate_opportunity_candidates`

The command reads only verified customer, tender, and market signal records. It writes Opportunity candidates to the inbox with `status: "needs_review"` and `human_review_status: "needs_review"`.

It does not create verified or promoted Opportunities automatically.
