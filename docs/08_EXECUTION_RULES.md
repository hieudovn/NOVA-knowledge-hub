# Execution Rules For Future Codex And AI Work

## Purpose

These rules keep future implementation aligned with the continuous data enrichment strategy and prevent premature automation.

## Strategic Rules

1. Keep Knowledge Hub as the validated reusable knowledge foundation.
2. Treat GTM Intelligence as one major application layer built on that foundation.
3. Treat Opportunity as an important convergence/output object, not the only purpose.
4. Connect customer, plant, market signal, tender, solution, partner, competitor, case-study, and internal knowledge branches for many reusable outputs.
5. Preserve the enrichment loop: Collect -> Filter -> Verify -> Normalize -> Structure -> Link -> Enrich -> Reuse.

## Implementation Rules

1. Start with structured records and manual/semi-manual enrichment.
2. Do not build web crawlers before source governance and verification rules are implemented.
3. Store raw ingestion output as unverified intelligence.
4. Do not let AI or crawler output directly update verified/promoted records or approved Opportunity records.
5. Add fields and templates before adding orchestration complexity.
6. Prefer clear markdown documentation, templates, and schemas over heavy infrastructure until the model stabilizes.
7. Keep integrations modular and API-based.
8. Avoid tight coupling between NOVA and Knowledge Hub databases.

## Data Rules

1. Every external claim needs a source.
2. Evidence and assumptions must be separate.
3. Confidence must be explicit.
4. Source timestamp and last verified date must be tracked.
5. Verified human-entered data must not be overwritten by unverified extracted data.
6. Customer, plant, tender, and opportunity deduplication must be considered before creating new records.
7. Keep audit trail for important changes.

## Agent Rules

1. Agents communicate through structured records, events, and shared state.
2. Agents create candidates, recommendations, and review tasks unless a human approval gate promotes the result.
3. Market Intelligence Agent must not write final Opportunity records directly.
4. Verification / Governance Agent must be part of any automated promotion workflow.
5. Human defines goals, rules, and approval gates.

## Documentation Rules

When changing the platform direction, update these files together when relevant:

- `docs/00_VISION.md`
- `docs/01_DOMAIN_MODEL.md`
- `docs/02_ROADMAP.md`
- `docs/03_AGENT_ARCHITECTURE.md`
- `docs/04_DATA_GOVERNANCE.md`
- `docs/05_OPPORTUNITY_MODEL.md`
- `docs/06_INTELLIGENCE_PIPELINE.md`
- `docs/07_USE_CASES.md`
- `docs/08_EXECUTION_RULES.md`
- `docs/09_DATA_IMPORT_AND_VERIFICATION.md`
- `docs/10_AGENT_TASKS.md`
- `docs/11_CURRENT_EXECUTION_LANE.md`
- `docs/12_DATA_ENRICHMENT_STRATEGY.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/ROADMAP.md`
- `docs/AI_WORKFLOW.md`
- `templates/*-record-template.md`

## Anti-Patterns

Avoid:

- uncontrolled crawling;
- treating raw crawled content as truth;
- long unstructured summaries replacing structured records;
- treating Opportunity generation as the only valuable output;
- Opportunity records without evidence or confidence;
- strategy recommendations without assumptions and risks;
- automation that bypasses human approval;
- over-engineering implementation before manual enrichment is valuable and repeatable.
