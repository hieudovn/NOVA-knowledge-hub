# Foundation Consistency And MVP Lane Review Report

## Current Framing Note

This report captured an earlier "MVP lane" framing. The current strategic language is refined in `docs/12_DATA_ENRICHMENT_STRATEGY.md` and `docs/DATA_ENRICHMENT_STRATEGY_UPDATE_REPORT.md`: the goal is a Minimum Viable Intelligence Loop for continuous reusable data enrichment, not one fixed product MVP.

## Summary

The foundation is aligned with the current controlled MVP lane.

Knowledge Hub remains the validated knowledge foundation. GTM Intelligence is now described as the business application layer that uses validated knowledge plus reviewed customer, plant, tender, market signal, evidence, solution fit, and Opportunity records.

No crawler, CRM workflow, dashboard, graph database, backend/API, authentication, SaaS feature, chatbot, public portal, or agent orchestration was implemented.

## Foundation Consistency Findings

- README and core docs now preserve Knowledge Hub as the foundation rather than treating it as erased or legacy.
- Opportunity remains the central convergence object.
- Intelligence Inbox is the required first landing zone for imported or researched external data.
- Raw data, AI output, and imported records remain candidates/evidence, not truth.
- NOVA remains a system of work that may exchange data through APIs or import/export contracts later, without tight database coupling.
- Current data enrichment lane is file-based and manual/semi-manual.

## Docs Updated

- `README.md`
- `docs/00_VISION.md`
- `docs/05_OPPORTUNITY_MODEL.md`
- `docs/06_INTELLIGENCE_PIPELINE.md`
- `docs/08_EXECUTION_RULES.md`
- `docs/ARCHITECTURE.md`
- `docs/AI_WORKFLOW.md`
- `docs/DATA_MODEL.md`
- `docs/ROADMAP.md`

## Current Execution Lane Created

Created:

- `docs/11_CURRENT_EXECUTION_LANE.md`

It defines:

- current product shape;
- current execution lane;
- what is being built now;
- what is not being built now;
- next 3 implementation batches;
- definition of done;
- scope creep warning signs;
- decision gate before automation;
- relationship to existing wiki work.

## Template Review

Reviewed and updated:

- `templates/import/customer_import_template.json`
- `templates/import/plant_import_template.json`
- `templates/import/contact_import_template.json`
- `templates/import/tender_import_template.json`
- `templates/import/market_signal_import_template.json`
- `templates/import/opportunity_import_template.json`

Findings:

- Source fields are present.
- Status and human review fields are explicit.
- Opportunity template separates evidence, assumptions, risks, and recommended next actions.
- Opportunity template includes owner and scoring placeholders.
- Pricing/commercial data is not treated as general knowledge. Tender budget signal remains a sourced signal, not pricing knowledge.

## Script Review

Reviewed:

- `scripts/intelligence/import_customer_data.js`
- `scripts/intelligence/import_plant_data.js`
- `scripts/intelligence/import_contact_data.js`
- `scripts/intelligence/import_tender_data.js`
- `scripts/intelligence/import_market_signals.js`
- `scripts/intelligence/import_opportunity_data.js`
- `scripts/intelligence/validate_intelligence_records.js`
- `scripts/intelligence/generate_opportunity_candidates.js`
- `scripts/intelligence/score_opportunities.js`
- `scripts/intelligence/agents.js`

Findings:

- Import scripts write to `data/intelligence/inbox/`.
- Imported records are forced to `status: "unverified"` and `human_review_status: "needs_review"`.
- Validation checks source fields, duplicate records, Opportunity evidence, evidence item source fields, and promotion state.
- Opportunity candidates are written to inbox, not verified/promoted.
- Scoring is heuristic and includes review notes.
- Agent classes are placeholders that write structured records to the inbox and do not crawl.

Change made:

- Opportunity generation now requires source records to be in the verified store and have `status: "verified"` plus `human_review_status: "approved"`.
- Opportunity records now require `owner`.

## Sample Records Review

Added safe sample-only records for:

- Customer
- Plant
- Contact
- Tender
- Market Signal
- Source
- Evidence Item
- Opportunity Candidate
- Opportunity Evidence Link
- Solution Fit
- Human Review

Sample data is fictional, marked sample-only through IDs and source names, and contains no confidential pricing or commercial terms.

Generated candidate Opportunities remain in the inbox with `status: "needs_review"` and `human_review_status: "needs_review"`.

## Validation/Test Results

Commands run successfully:

- `npm.cmd test`
- `npm.cmd run validate_intelligence_records`
- `npm.cmd run generate_opportunity_candidates`
- `npm.cmd run score_opportunities`
- `cd apps/wiki; npm.cmd run validate:metadata`
- `cd apps/wiki; npm.cmd run build`

Results:

- Intelligence tests: 7 passed, 0 failed.
- Intelligence validation: passed.
- Opportunity generation: generated 2 candidates from verified sample tender and market signal records.
- Opportunity scoring: scored 3 inbox Opportunity records.
- Wiki metadata validation: 33 pages validated.
- Wiki build: succeeded.

Note:

- `npm.cmd` was used because the Windows PowerShell `npm.ps1` shim is blocked by local execution policy.

## Scope Risks Found

- Some roadmap language mentioned dashboards and later API/orchestration work. This is acceptable as later-stage direction, but `docs/11_CURRENT_EXECUTION_LANE.md` now clearly states those are not part of the current MVP lane.
- Parallel execution of generation and scoring can overwrite generated candidates if both scripts write the inbox at the same time. Current usage should run these commands sequentially. A later batch can add simple file locking or command sequencing if needed.

## Recommended Next Batch

Record/template/schema consistency review.

Recommended work:

- add a small JSON schema or schema-like validator for each import template;
- align field names between templates, docs, and generated candidates;
- add tests for generated Opportunity owner/status/review fields;
- add a sequential helper command that runs validation, generation, scoring, and validation again.

## Open Questions For Human Review

- Which roles are allowed to mark records as verified or promoted?
- Should `budget_signal` remain in tender records as sourced procurement intelligence, or be moved into a more restricted field group?
- What is the minimum acceptable `reliability_score` before a verified record can feed Opportunity generation?
- Should Opportunity candidates require at least one `SolutionFit` record before promotion?
- What is the preferred stale-data threshold for market signals and tender records?
