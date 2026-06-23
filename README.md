# Avenue Industrial GTM Intelligence Platform

This repository is evolving from NOVA Knowledge Hub into an Industrial GTM Intelligence Platform for Avenue JSC.

Knowledge Hub remains the validated, structured, reusable knowledge and data foundation. The GTM Intelligence layer is one major business application of that foundation, helping Avenue discover, qualify, prioritize, and act on industrial business opportunities.

## Core Principle

Continuous enrichment is the core productive loop.

The repository should continuously collect, filter, verify, structure, link, enrich, and reuse valuable industrial GTM knowledge and intelligence. Data enrichment itself is a valuable outcome because the same validated knowledge can support tenders, proposals, sales strategy, product strategy, market maps, customer planning, and management decisions.

Opportunity is a high-value convergence object.

An Opportunity connects customer context, plant and site context, market signals, procurement activity, tender requirements, Avenue solution capability, past references, partner capability, risks, and recommended sales/presales/tender strategy.

The platform is not only an Opportunity engine, not only a CRM, not only a document knowledge base, and not only a tender management tool. It is a reusable intelligence foundation that can produce many downstream outputs.

## Operating Model

```text
Collect -> Filter -> Verify -> Normalize -> Structure -> Link -> Enrich -> Reuse
```

Start with structured records and manual/semi-manual enrichment. Add controlled ingestion and agentic automation only after governance, source traceability, and human review gates are clear.

## NOVA Core Alignment

This project follows the NOVA Core operating model:

```text
Signal -> Insight -> Decision -> Action -> Feedback -> Knowledge Asset -> Better Signal / Better Action
```

Core modules:

- NOVA Signal
- NOVA Action
- NOVA Knowledge Governance

Before AI-assisted development, read:

- `docs/00_NOVA_CORE_DESIGN_PRINCIPLES.md`
- `docs/00_AI_STARTUP_PROMPT.md`

## Documentation

Start with:

- `docs/00_NOVA_CORE_DESIGN_PRINCIPLES.md`
- `docs/00_AI_STARTUP_PROMPT.md`
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
- `docs/13_ARTIFACT_TAXONOMY.md`

Existing foundation docs remain useful:

- `docs/PROJECT_CONSTITUTION.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/AI_WORKFLOW.md`
- `docs/CONTENT_MODEL.md`
- `docs/CONTENT_WORKFLOW.md`

Artifact templates and draft artifacts live in:

- `templates/artifacts/`
- `artifacts/`

## Current Data Enrichment Lane

The current lane is deliberately small and data-first:

- file-based structured records;
- manual JSON import templates;
- Intelligence Inbox for unverified records;
- validation scripts;
- sample verified records;
- reusable solution/customer/tender/market enrichment;
- opportunity candidate generation from verified records;
- heuristic scoring;
- human review status.

Not now: crawlers, CRM workflow, dashboards, graph database, backend/API service, authentication, SaaS features, chatbot, public portal, or agent orchestration.

## Current App

The Docusaurus wiki lives in `apps/wiki` and reads markdown/MDX knowledge pages from `content/wiki`.

Local development:

```bash
cd apps/wiki
npm install
npm run start
```

Production build:

```bash
cd apps/wiki
npm run build
```

Docker:

```bash
docker compose --env-file .env.example build nova-wiki
docker compose --env-file .env.example up -d nova-wiki
```

Then open `http://localhost:3100`. See `docs/DOCKER_LOCAL_PREVIEW.md` for port override and troubleshooting commands.

Each wiki page must include metadata front matter for `type`, `status`, `visibility`, `tags`, and `source_refs`. Run `npm run validate:metadata` inside `apps/wiki` to check this before building.

## Guiding Rule

Raw data is evidence, not truth. AI can accelerate research and drafting, but human review decides what becomes official intelligence and what action Avenue should take.
