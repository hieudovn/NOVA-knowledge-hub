# NOVA Knowledge Hub

NOVA Knowledge Hub is a personal-first, organization-ready knowledge platform for collecting, distilling, validating, querying, and publishing solution knowledge.

It starts as a personal knowledge operating system for Hieu Do, then can evolve into a team knowledge system for Avenue JSC or be moved to another organization without losing the core knowledge architecture.

## Core Idea

Knowledge Hub is not just a website or a chatbot. It is a structured knowledge layer that can serve:

- Personal research and decision support
- Sales and presales knowledge capture
- Technical solution knowledge management
- Tender and proposal intelligence
- Internal wiki and later public landing pages
- Future integration with NOVA as a system of work

## Initial Focus

Phase 1 focuses on the wiki and knowledge pipeline:

```text
Raw Sources
  -> Ingestion
  -> AI Extraction
  -> Draft Wiki
  -> Human Review
  -> Approved Knowledge
  -> Search / AI Query / Future Publishing
```

Landing pages will be built later from selected, approved wiki content.

## Documentation

Start with:

- `docs/PROJECT_CONSTITUTION.md`
- `docs/ARCHITECTURE.md`
- `docs/ROADMAP.md`
- `docs/CONTENT_MODEL.md`
- `docs/DATA_MODEL.md`
- `docs/AI_WORKFLOW.md`
- `docs/SECURITY_AND_ACCESS.md`
- `docs/DECISION_LOG.md`

## M1 Wiki

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
docker compose up --build wiki
```

Then open `http://localhost:3000`.

Each wiki page must include metadata front matter for `type`, `status`, `visibility`, `tags`, and `source_refs`. Run `npm run validate:metadata` inside `apps/wiki` to check this before building.

## Guiding Principle

Human owns direction. AI owns acceleration. Human owns the final decision.
