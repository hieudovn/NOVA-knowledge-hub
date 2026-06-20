# AI Context Handoff

Use this file at the beginning of any new ChatGPT/Codex/AI development thread for NOVA Knowledge Hub.

Its purpose is to preserve project context, vision, roadmap, constitution, and execution boundaries so future AI sessions do not drift away from the agreed direction.

---

## 1. Project Identity

Project name: NOVA Knowledge Hub

Repository: `hieudovn/NOVA-knowledge-hub`

Current stage: M1 — Tech Knowledge Base Wiki Skeleton

Primary user: Hieu Do

Initial purpose: personal-first technical knowledge base for APM, IIoT, Historian, and IBM Maximo Application Suite solution knowledge.

Future purpose: organization-ready Knowledge Hub and long-term AI OS foundation.

---

## 2. Core Positioning

NOVA Knowledge Hub is NOT merely a document repository or chatbot.

It is a knowledge infrastructure project.

Short-term:

```text
Raw Sources
  -> Source Registry
  -> Draft Wiki
  -> Human Review
  -> Approved Technical Knowledge
```

Long-term:

```text
Knowledge Repository
  -> Business Memory
  -> Canonical Business Model
  -> Knowledge Graph
  -> Modes
  -> Skills
  -> AI Orchestration
```

---

## 3. Relationship With NOVA

NOVA and Knowledge Hub are separate but integrable products.

NOVA = System of Work

- take notes
- capture sales/presales context
- track opportunities/actions
- operational frontend

Knowledge Hub = System of Knowledge

- curate knowledge
- validate knowledge
- store reusable technical/business knowledge
- provide search/query/publishing layer

Integration must happen through APIs, not shared database coupling.

---

## 4. Current M1 Scope

M1 objective:

Build a usable Docusaurus-based technical wiki skeleton.

M1 includes:

- Docusaurus wiki in `apps/wiki`
- Markdown/MDX pages in `content/wiki`
- sections:
  - Solutions
  - Capabilities
  - Patterns
  - Comparisons
  - Tender
- local search
- Docker-ready wiki build
- metadata validation for wiki pages
- initial draft pages for Tech Knowledge Base

Primary Tech Knowledge Base domain:

- APM
- IIoT
- Industrial Historian
- IBM MAS / Maximo Application Suite

Initial solution focus:

- IDBoxRT
- Canary
- AVEVA PI
- EtaPRO
- IBM MAS

---

## 5. Explicitly Out of Scope for M1

Do NOT implement in M1:

- CRM
- public portal
- landing pages
- user registration
- guest Q&A
- lead capture
- AI chat assistant
- Knowledge Graph
- Modes execution
- Skills execution
- AI Orchestration
- complex backend
- multi-tenant SaaS

These are future phases.

If asked to implement any of the above during M1, first explain that it is out of scope and propose how it can be scheduled later.

---

## 6. Source Domains

Current registered source domain:

- Google Drive folder: APM & IIoT Solutions
- Registry file: `registry/sources-apm-iiot.yaml`

This source domain contains solution materials for:

- IDBoxRT
- EtaPRO
- Canary
- AVEVA PI
- AI PlantOps
- Retina360
- LUCA BDS
- AVEVA APM
- Litmus Edge

IBM MAS / Maximo Application Suite knowledge will be added as another source domain.

Business Knowledge will be added later.

---

## 7. Knowledge Rules

1. Raw sources are evidence.
2. Draft wiki pages are not official knowledge.
3. Approved wiki pages are operational knowledge.
4. AI output is draft until reviewed.
5. Pricing and tender-sensitive materials are restricted by default.
6. Landing pages must be generated from approved/public knowledge, not written as separate source of truth.

### Pricing and Commercial Information Handling

- Do not put pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki knowledge pages, even if pages are private/internal.
- Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.
- Non-pricing case study benefits may be used when source-backed, including avoided cost, savings, ROI, efficiency improvement, downtime reduction, production gain, or maintenance cost avoidance.
- Do not include specific vendor pricing, license fees, discounts, proposal prices, or commercial terms in wiki pages.
- If a source mixes pricing and technical knowledge, extract only the technical knowledge and mark pricing sections as excluded/restricted.
- Pricing sources remain restricted and must not be used for public/internal wiki knowledge enrichment.

---

## 8. Development Rules

When developing this project:

1. Read constitution and roadmap first.
2. Preserve personal-first architecture.
3. Do not hard-code Avenue as the only organization.
4. Do not hard-code one AI provider.
5. Keep markdown-first content structure.
6. Avoid premature backend complexity.
7. Avoid adding public-facing features before approved knowledge exists.
8. Keep each phase small and testable.

---

## 9. Required Reading Order for New AI Session

Before making architecture or code changes, read:

1. `README.md`
2. `docs/PROJECT_CONSTITUTION.md`
3. `docs/VISION_UPDATE_AI_OS.md`
4. `docs/ARCHITECTURE.md`
5. `docs/ROADMAP.md`
6. `docs/M1_IMPLEMENTATION_PLAN.md`
7. `docs/TECH_KNOWLEDGE_BASE_SCOPE.md`
8. `docs/CONTENT_MODEL.md`
9. `docs/DATA_MODEL.md`
10. `docs/AI_WORKFLOW.md`
11. `docs/DECISION_LOG.md`

For current implementation details, also inspect:

- `apps/wiki`
- `content/wiki`
- `registry/sources-apm-iiot.yaml`

---

## 10. New Chat Starter Prompt

Use this prompt in a new ChatGPT/Codex thread:

```text
You are assisting with the repository `hieudovn/NOVA-knowledge-hub`.

Before proposing or coding anything, read:
- README.md
- docs/AI_CONTEXT_HANDOFF.md
- docs/PROJECT_CONSTITUTION.md
- docs/VISION_UPDATE_AI_OS.md
- docs/ARCHITECTURE.md
- docs/ROADMAP.md
- docs/M1_IMPLEMENTATION_PLAN.md
- docs/TECH_KNOWLEDGE_BASE_SCOPE.md
- docs/DECISION_LOG.md

Current phase is M1: Tech Knowledge Base Wiki Skeleton.

Do not expand scope into CRM, public portal, landing page, AI chat, Knowledge Graph, Modes, Skills, or AI Orchestration unless explicitly requested and documented as a future phase.

Your job is to continue M1 safely: improve the Docusaurus wiki, metadata validation, content structure, and initial technical knowledge pages for APM, IIoT, Historian, and IBM MAS.
```

---

## 11. Current Next Steps

Recommended next steps after M1 skeleton:

1. Verify local build:
   - `cd apps/wiki`
   - `npm install`
   - `npm run validate:metadata`
   - `npm run build`

2. Fix broken links or metadata errors.

3. Populate core solution pages:
   - IDBoxRT
   - Canary
   - AVEVA PI
   - EtaPRO
   - IBM MAS

4. Populate capability pages:
   - APM
   - IIoT Platform
   - Industrial Historian
   - Condition Monitoring
   - Predictive Maintenance

5. Keep all new content as `status: draft` until reviewed.
