# Manual Workflow: APM & IIoT Offer Map

## Purpose

This workflow defines the first manual artifact path for building an Avenue APM & IIoT Offer Map from existing Knowledge Hub solution knowledge.

The workflow is documentation-first and human-reviewed. It does not implement runtime skills, agents, crawlers, dashboards, CRM workflow, backend/API services, or automated promotion.

## Operating Principle

Use enriched, source-aware knowledge to create reusable artifacts in a controlled sequence:

Source Pack -> Offer Map -> Strategy Brief -> Sales Playbook -> Presales Checklist -> Governance Review

Codex can create source packs and structured artifacts. ChatGPT, Gemini, or Claude should be used for high-quality strategy narrative and rewrite where useful. Human reviewers own final approval.

## Workflow Summary

| Stage | Skill | Primary Role | Inputs | Output |
|---|---|---|---|---|
| Source Pack | `build_source_pack` | Data Governance Reviewer + Product Owner | EtaPRO, Canary, IDBoxRT, LUCA BDS, future IBM MAS/AVEVA PI solution pages | `artifacts/source-packs/apm-iiot-source-pack-v0.md` |
| Offer Map | `build_offer_map` | Product Owner | Source Pack | `artifacts/offer-maps/apm-iiot-offer-map-v1.md` |
| Strategy Brief | `define_product_strategy` | Product Owner + Executive Reviewer | Offer Map | `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md` |
| Sales Playbook | `build_sales_playbook` | Sales Strategist | Strategy Brief + Offer Map | `artifacts/sales-playbooks/apm-iiot-sales-playbook-v1.md` |
| Presales Checklist | `build_presales_checklist` | Presales Consultant | Offer Map + solution pages | `artifacts/presales-checklists/apm-iiot-presales-checklist-v1.md` |
| Review | `review_claims_and_evidence` | Data Governance Reviewer | All artifacts above | Review notes and readiness status |

## Stage 1: Source Pack

Skill: `build_source_pack`

Role: Data Governance Reviewer + Product Owner

Input:

- `content/wiki/solutions/etapro.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/luca-bds.md`
- Future IBM MAS source pages or reviewed records when available
- Future AVEVA PI source pages or reviewed records when available

Output:

- `artifacts/source-packs/apm-iiot-source-pack-v0.md`

Review requirement:

- Confirm all claims are tied to source pages or clearly marked as assumptions.
- Do not make final product strategy, packaging, pricing, or market-positioning decisions in this artifact.

## Stage 2: Offer Map

Skill: `build_offer_map`

Role: Product Owner

Input:

- `artifacts/source-packs/apm-iiot-source-pack-v0.md`

Output:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`

Review requirement:

- Show candidate offer themes, capability groups, evidence basis, assumptions, gaps, and decision points.
- Keep offer themes draft until reviewed by the product owner and Avenue leadership.

## Stage 3: Strategy Brief

Skill: `define_product_strategy`

Role: Product Owner + Executive Reviewer

Input:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`

Output:

- `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md`

Review requirement:

- Use this artifact for strategy options, trade-offs, target segments, priorities, and roadmap direction.
- ChatGPT, Gemini, or Claude may help refine executive narrative, but the reviewed evidence and assumptions remain the source of truth.
- Human approval is required before strategy recommendations become direction.

## Stage 4: Sales Playbook

Skill: `build_sales_playbook`

Role: Sales Strategist

Input:

- `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md`
- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`

Output:

- `artifacts/sales-playbooks/apm-iiot-sales-playbook-v1.md`

Review requirement:

- Translate strategy into target accounts, buyer triggers, message angles, qualification cues, and next actions.
- Avoid source IDs in the main sales narrative, but preserve evidence traceability in support sections.

## Stage 5: Presales Checklist

Skill: `build_presales_checklist`

Role: Presales Consultant

Input:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`
- EtaPRO, Canary, IDBoxRT, LUCA BDS solution pages
- Future IBM MAS and AVEVA PI pages or reviewed records when available

Output:

- `artifacts/presales-checklists/apm-iiot-presales-checklist-v1.md`

Review requirement:

- Focus on qualification questions, fit/gap checks, required customer inputs, integration assumptions, and risks.
- Do not add unsupported product capabilities or pricing/commercial terms.

## Stage 6: Review

Skill: `review_claims_and_evidence`

Role: Data Governance Reviewer

Input:

- Source Pack
- Offer Map
- Strategy Brief
- Sales Playbook
- Presales Checklist

Output:

- Review notes
- Readiness status
- Restricted-content flags
- Open questions
- Human approval or revision request

Review requirement:

- Confirm source-backed claims.
- Confirm assumptions are labeled.
- Confirm restricted and pricing-sensitive content is excluded from general knowledge artifacts.
- Confirm public-facing content, if any, is explicitly marked public-safe before use.

## Human Approval Boundary

Codex can assemble structured artifacts, compare sources, identify gaps, and draft review-ready content.

ChatGPT, Gemini, or Claude can help improve narrative quality, executive framing, and communication polish when provided with reviewed inputs.

Human reviewers own final approval, strategy decisions, external use, tender commitments, and promotion of any content into validated Knowledge Hub records.

## Not In Scope

- Web crawling
- Runtime agents
- Executable skills
- CRM workflow
- Dashboard UI
- Backend/API service
- Graph database
- Authentication
- SaaS or multi-tenant features
- Chatbot or public portal
- Automatic promotion from AI-generated content to verified knowledge

