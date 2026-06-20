# Manual Extraction Batch 1.12 LUCA BDS Scope and Document Audit Report

## Summary

Audited `SRC-APM-IIOT-0004` for LUCA BDS scope fit and document-level source availability.

LUCA BDS is in scope for the M2 Tech Knowledge Base as a business intelligence, data integration, and analytics solution related to the APM & IIoT portfolio. Full product enrichment is deferred because the current audit found one primary overview document that mixes product/technical material with AI, reference, resource, and commercial-signaling sections.

This batch stayed within M2. It did not add backend, API service, database, authentication implementation, crawler, AI Q&A, CRM/NOVA integration, public portal, landing page generator, Knowledge Graph, Modes, Skills, AI orchestration, comparison updates, or commercial content.

## Scope Fit Decision

Decision: `in_scope_but_defer_full_enrichment`.

Rationale:

- `docs/TECH_KNOWLEDGE_BASE_SCOPE.md` lists Luca BDS in the initial APM & IIoT source domain.
- `SRC-LUCA-BDS-DOC-0001` supports LUCA BDS as a business intelligence / data integration / analytics solution.
- The source material is relevant to data access, data integration, dashboards, reports, real-time analysis, and industrial/utility use cases.
- The evidence is not yet sufficient for a full enriched product page because no dedicated architecture/security/connector technical document was found in this audit.

## Source Folder Audited

Parent source:

- Source ID: `SRC-APM-IIOT-0004`
- Title: Luca BDS
- Folder URL: `https://drive.google.com/drive/folders/1LNdeA2uNC6dp0IA63m1V5UV0_6Vv8mkg`
- Drive ID: `1LNdeA2uNC6dp0IA63m1V5UV0_6Vv8mkg`

Observed folder structure:

- `00_Extracted Data`
- `01_Vendor and Reference Materials`
- `02_Sales-Presales Materials`
- `03_Pricing Structure`
- `04_Technical Materials`
- `05_Technical Proposal Templates`

Audit notes:

- `04_Technical Materials` was accessible but empty during this audit.
- `01_Vendor and Reference Materials / 02_Reference Materials` contained one exact primary document.
- Sales, FAQ, pricing, BOM, proposal, and pricing-reference folders were either empty or not used for normal wiki evidence.

## Documents Found

Confirmed exact primary document candidate:

| Candidate | File Type | Audit Decision |
|---|---|---|
| `LUCABDS_2026 [EN].pdf` | pdf | Registered as primary source for scope-fit decision and future validation planning |

No additional product/technical files were found in the audited technical folder.

## Documents Registered

Added to `registry/sources-apm-iiot.yaml`:

- `SRC-LUCA-BDS-DOC-0001` — `LUCABDS_2026 [EN].pdf`

The entry includes exact title, type, URL, Drive ID, confidentiality, extraction priority, extraction status, related pages, validation focus, pricing risk, restricted-content policy, and notes.

## Derived Sources Reviewed

Existing derived sources were reviewed at metadata level only:

- `SRC-LUCA-BDS-EXTRACT-FOLDER-0001`
- `SRC-LUCA-BDS-EXTRACT-0001`
- `SRC-LUCA-BDS-EXTRACT-0002`
- `SRC-LUCA-BDS-EXTRACT-0003`
- `SRC-LUCA-BDS-EXTRACT-0004`

NotebookLM-derived files remain review aids only and were not used to approve wiki claims.

## Documents Deferred or Excluded

Deferred:

- Any future sales or reference material not found during this audit.
- Any future architecture, data-flow, connector, deployment, security, or user-guide documents that may be added later.
- Case-study claims and quantified benefit statements.
- AI/LLM-related product statements beyond scope-fit context.

Excluded from normal wiki evidence:

- Pricing structure folders.
- BOM template folders.
- Proposal template and reference proposal folders.
- Commercial calls to action, quote language, commercial packaging, and business-model material.
- `SRC-LUCA-BDS-EXTRACT-0004`, because it has high pricing/BOM risk.

## Pricing / Commercial Risk Review

No pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added to wiki knowledge.

`SRC-LUCA-BDS-DOC-0001` was registered with `pricing_risk: possible` because it is a mixed product overview that includes technical/product content alongside commercial-signaling sections.

`SRC-LUCA-BDS-EXTRACT-0004` remains restricted and excluded from wiki enrichment.

## Recommended Validation Focus by Document

| Source ID | Recommended Validation Focus |
|---|---|
| `SRC-LUCA-BDS-DOC-0001` | official product positioning, relationship to APM & IIoT scope, architecture and data flow, integration with source systems, business data service capabilities, deployment model, security/access control, analytics/dashboard capabilities, BI/data-platform relationship, limitations and product boundaries |

## LUCA BDS Claims Needing Primary Evidence

- Official product positioning.
- Relationship to APM & IIoT scope.
- Architecture and data flow.
- Supported data sources and connectors.
- Data service / business data service capabilities.
- Deployment model.
- Security and access control.
- Analytics and dashboard capabilities.
- Relationship to historian, data platform, and BI-layer categories.
- AI/LLM-related product claims and boundaries.
- Limitations and product boundaries.

## Registry Updates

Updated `registry/sources-apm-iiot.yaml`:

- Set `SRC-APM-IIOT-0004` `document_inventory_status` to `document_audit_completed_batch_1_12`.
- Added validation target and related pages for `content/wiki/solutions/luca-bds.md`.
- Added `SRC-LUCA-BDS-DOC-0001`.
- Preserved existing LUCA BDS source IDs and Drive URLs.
- Preserved existing LUCA BDS derived source entries.
- Did not create fake document entries.

## Wiki Page Decision

Created a minimal draft page because scope fit is confirmed but full enrichment is deferred.

Page decision: create `content/wiki/solutions/luca-bds.md` as a scope-fit and validation-preparation page only.

## Page Updates if Any

Created `content/wiki/solutions/luca-bds.md` with:

- Scope Decision
- Evidence Sources
- Open Questions
- Excluded Content
- Next Validation Tasks
- Review Notes

The page remains:

- `status: draft`
- `visibility: private`
- `confidence: low`

No full product sections, comparison conclusions, or unvalidated claims were added.

## Validation Result

Passed.

- `npm.cmd run validate:metadata`
- Validated metadata for 33 wiki pages.

## Build Result

Passed.

- `npm.cmd run build`
- Docusaurus production build completed successfully.

## Docker Preview Result

Passed.

- `docker compose down`
- `docker compose up -d --build nova-wiki`
- `docker compose ps` shows `nova-wiki` running on `0.0.0.0:3100->3000/tcp`.
- `curl.exe -I http://localhost:3100/solutions/luca-bds` returned HTTP 200.
- Docker-served LUCA BDS page includes `in_scope_but_defer_full_enrichment`, `SRC-LUCA-BDS-DOC-0001`, clickable `Open source` evidence links, and the restricted-source notice for `SRC-LUCA-BDS-EXTRACT-0004`.

## Next Recommended Batch

Manual Extraction Batch 1.13 should validate LUCA BDS using `SRC-LUCA-BDS-DOC-0001` only as an initial primary overview source:

1. Validate product positioning and data-flow claims.
2. Identify whether additional primary technical sources exist.
3. Decide whether to move from minimal page to full solution enrichment.
4. Keep AI/LLM-related material conservative and product-specific.
5. Keep comparison, pricing, BOM, proposal, and commercial material excluded.
