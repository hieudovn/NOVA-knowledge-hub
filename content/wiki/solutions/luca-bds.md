---
title: LUCA BDS
type: solution
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - luca-bds
  - business-intelligence
  - data-integration
  - analytics
source_refs:
  - source_id: SRC-APM-IIOT-0004
    title: Luca BDS
  - source_id: SRC-LUCA-BDS-DOC-0001
    title: LUCABDS_2026 [EN].pdf
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# LUCA BDS

## Scope Decision

Decision: `in_scope_but_defer_full_enrichment`.

LUCA BDS fits the current M2 Tech Knowledge Base as a business intelligence, data integration, and analytics solution related to the APM & IIoT portfolio. `SRC-LUCA-BDS-DOC-0001` supports the product-level framing around data access, integration, analysis, dashboards, reports, and centralized views of data from multiple systems.

Full wiki enrichment is deferred because the current audit found only one primary overview document, and that document mixes product/technical content with AI, reference, resource, and commercial-signaling sections. Stronger technical claims should wait for primary validation focused on architecture, connectors, deployment, security, and product boundaries.

## Evidence Sources

| Source ID | Title | Link | Evidence Role | Review Status |
|---|---|---|---|---|
| `SRC-APM-IIOT-0004` | Luca BDS source folder | [Open source](<https://drive.google.com/drive/folders/1LNdeA2uNC6dp0IA63m1V5UV0_6Vv8mkg>) | Parent LUCA BDS source folder | Batch 1.12 document audit completed |
| `SRC-LUCA-BDS-DOC-0001` | LUCABDS_2026 [EN].pdf | [Open source](<https://drive.google.com/file/d/1EUZX1O0heO_sdI99S-aFxv6Qz6_Ejpzd/view?usp=drivesdk>) | Primary source for scope-fit decision and future validation planning | Not started |
| `SRC-LUCA-BDS-EXTRACT-0001` | 01_LUCA BDS Extracted Keys.md | [Open source](<https://drive.google.com/file/d/12SuBJobJFDC0wvbB7QmJDOp7xYJRBCQq/view?usp=drivesdk>) | Derived review aid only; candidate topic discovery | Not evidence for final claims |
| `SRC-LUCA-BDS-EXTRACT-0002` | 02_LUCA BDS Business Sector.md | [Open source](<https://drive.google.com/file/d/1UA2vwL0W3b-FOBWYkLFw_Z59XlTyDlz2/view?usp=drivesdk>) | Derived review aid only; candidate business/use-case framing | Not evidence for final claims |
| `SRC-LUCA-BDS-EXTRACT-0003` | 03_LUCA BDS Technical Sector.md | [Open source](<https://drive.google.com/file/d/1REsPLGzGkoUTCRCxRvL3VNIrJ9TuuzwI/view?usp=drivesdk>) | Derived review aid only; candidate technical validation checklist support | Not evidence for final claims |
| `SRC-LUCA-BDS-EXTRACT-0004` | 04_LUCA BDS Case studies, BOM, Deployment.md | No wiki evidence link; restricted pricing-risk source | Excluded from wiki enrichment except to identify restricted content | Restricted / not used |

## Open Questions

- Which LUCA BDS document should be treated as authoritative for architecture and data flow?
- Which connectors and source-system interfaces are officially supported?
- What is the validated deployment model, including on-premises and local analysis boundaries?
- What security and access-control model is supported?
- Which analytics and dashboard capabilities are product features versus implementation examples?
- How should LUCA BDS be positioned relative to IIoT platform, historian, operational data platform, and BI-layer categories?
- Which AI/LLM-related statements are product facts, and which should remain out of the wiki until human review?
- What limitations should be documented for data storage, query behavior, data ownership, and performance?

## Excluded Content

- Pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, and commercial terms are excluded from this wiki page.
- `SRC-LUCA-BDS-EXTRACT-0004` is a high-pricing-risk derived source and was not used for wiki enrichment.
- Commercial calls to action, quote language, commercial packaging, and business-model notes from mixed sources are excluded from wiki knowledge.
- Case-study claims and quantified benefits remain deferred until selected primary case-study sources are reviewed and commercial content is excluded.
- NotebookLM-derived content is not treated as approved knowledge and cannot independently support wiki claims.
- AI/LLM-related product material is treated only as source-review context; it does not expand NOVA Knowledge Hub scope into AI chat, AI orchestration, Knowledge Graph, Modes, or Skills.

## Next Validation Tasks

- Review `SRC-LUCA-BDS-DOC-0001` for product positioning, architecture/data flow, integration, deployment, security, analytics, and product-boundary claims.
- Identify whether additional LUCA BDS technical documents exist outside the currently empty `04_Technical Materials` folder.
- Validate any connector, data-flow, and dashboard claims against primary technical sources before full page enrichment.
- Keep comparison claims with IDBoxRT, Canary, AVEVA PI, EtaPRO, or historian products deferred.
- Keep all pricing, BOM, proposal, and commercial material out of the wiki.

## Review Notes

- Keep this page `draft`, `private`, and `confidence: low`.
- Treat this page as a scope-fit and validation-preparation page, not a fully enriched product page.
- Do not move LUCA BDS claims beyond draft until primary technical validation and human review are complete.
