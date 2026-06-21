# Skills Catalog And Role-Skill Mapping Report

## Summary

Created the documentation-level skills layer for the Avenue Knowledge Hub / Industrial GTM Intelligence Platform.

Skills are defined as repeatable task patterns that roles can use to transform records and artifacts into other artifacts. No runtime skills, agents, orchestration, crawlers, UI, backend, CRM workflow, graph database, authentication, SaaS features, chatbot, or public portal were implemented.

## Skills Catalog Created

Created `docs/15_SKILLS_CATALOG.md`.

The catalog defines:

- skill model and metadata standard;
- relationship between roles, skills, artifacts, records, and quality rubric;
- skill lifecycle;
- human review gates;
- evidence, assumption, and commercial-sensitivity rules;
- future automation boundary.

## Skill Categories Defined

The catalog defines these categories:

- Enrichment Skills
- Strategy Skills
- Sales Skills
- Presales Skills
- Tender Skills
- Technical / Architecture Skills
- Marketing / Communication Skills
- Customer Intelligence Skills
- Governance / Review Skills
- Management Decision Skills

## Core Skills Defined

Defined 52 core skills across the requested categories, including first-wave skills such as:

- `build_source_pack`
- `build_offer_map`
- `define_product_strategy`
- `build_sales_playbook`
- `build_presales_checklist`
- `draft_proposal_outline`
- `analyze_tender_requirements`
- `build_compliance_matrix`
- `write_solution_brief`
- `review_claims_and_evidence`
- `create_management_brief`
- `create_opportunity_scorecard`

## Skill Prompt Snippets Created

Created `templates/artifacts/skill-prompt-snippets.md`.

The snippets are copy-paste-ready prompts for manual execution of the first-wave skills. Each snippet includes:

- skill instruction;
- primary role;
- required input artifacts;
- expected output artifact;
- quality rubric focus;
- do / avoid guidance;
- review requirement.

## Artifact Templates Updated

Updated artifact templates under `templates/artifacts/` with plausible `related_skills` defaults.

Examples:

- Source Pack: `build_source_pack`, `review_claims_and_evidence`
- Offer Map: `build_offer_map`, `define_product_strategy`
- Strategy Brief: `define_product_strategy`, `prioritize_market_segments`, `create_management_brief`
- Opportunity Scorecard: `create_opportunity_scorecard`, `score_opportunity_fit`
- Public Content Brief: `write_website_copy`, `review_public_safety`

## Manual APM & IIoT Workflow Created

Created `docs/16_MANUAL_WORKFLOW_APM_IIOT_OFFER_MAP.md`.

The workflow defines a conservative manual path:

Source Pack -> Offer Map -> Strategy Brief -> Sales Playbook -> Presales Checklist -> Governance Review

It explicitly keeps Codex focused on structured artifacts, allows ChatGPT/Gemini/Claude to assist with high-quality strategy narrative and rewrite where useful, and keeps final approval with human reviewers.

## Scope Preserved

No runtime modes, executable skills, agents, web crawlers, CRM workflow, graph database, dashboard UI, backend/API service, authentication, SaaS/multi-tenant features, chatbot, or public portal were implemented.

No pricing/licensing/commercial terms were added into general wiki knowledge.

No unverified claim was promoted as final truth.

## Validation Results

Passed:

- `npm.cmd test`
- `cd apps/wiki`; `npm.cmd run validate:metadata`
- `cd apps/wiki`; `npm.cmd run build`

The wiki metadata check validated 33 wiki pages, and the Docusaurus production build completed successfully.

## Recommended Next Batch

Use the documented skills manually to create the first APM & IIoT artifact chain:

1. Review and strengthen `artifacts/source-packs/apm-iiot-source-pack-v0.md`.
2. Create `artifacts/offer-maps/apm-iiot-offer-map-v1.md` from the source pack.
3. Create `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md`.
4. Create first sales and presales artifacts from the reviewed strategy.
5. Run a governance review across the artifact chain.

## Open Questions For Human Review

- Which Avenue owner should approve the first APM & IIoT Offer Map?
- Should IBM MAS and AVEVA PI be added as reviewed solution pages before the first Offer Map, or kept as future placeholders?
- Which output should be prioritized after the Offer Map: sales playbook, presales checklist, management brief, or public-ready solution brief?
- What sensitivity level should apply to internal partner-capability comparisons?
