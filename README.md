# Avenue Industrial GTM Intelligence Platform

This repository is evolving from a pure Knowledge Hub into an Industrial GTM Intelligence Platform for Avenue JSC.

The platform still stores and retrieves validated internal knowledge, but its strategic purpose is broader: help Avenue discover, qualify, prioritize, and act on industrial business opportunities.

## Core Principle

Opportunity is the central convergence point.

An Opportunity connects customer context, plant and site context, market signals, procurement activity, tender requirements, Avenue solution capability, past references, partner capability, risks, and recommended sales/presales/tender strategy.

The platform is not only a CRM, not only a document knowledge base, and not only a tender management tool. It is an intelligence system that turns knowledge and evidence into actionable opportunities.

## Operating Model

```text
Collect -> Verify -> Normalize -> Link -> Score -> Strategize -> Human Review -> Act
```

Start with structured records and manual intelligence workflow. Add controlled ingestion and agentic automation only after governance, source traceability, and human review gates are clear.

## Documentation

Start with:

- `docs/00_VISION.md`
- `docs/01_DOMAIN_MODEL.md`
- `docs/02_ROADMAP.md`
- `docs/03_AGENT_ARCHITECTURE.md`
- `docs/04_DATA_GOVERNANCE.md`
- `docs/05_OPPORTUNITY_MODEL.md`
- `docs/06_INTELLIGENCE_PIPELINE.md`
- `docs/07_USE_CASES.md`
- `docs/08_EXECUTION_RULES.md`

Existing foundation docs remain useful:

- `docs/PROJECT_CONSTITUTION.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/AI_WORKFLOW.md`
- `docs/CONTENT_MODEL.md`
- `docs/CONTENT_WORKFLOW.md`

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
