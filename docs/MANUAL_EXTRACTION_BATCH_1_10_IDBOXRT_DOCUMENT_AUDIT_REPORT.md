# Manual Extraction Batch 1.10 IDBoxRT Document Audit Report

## Summary

Audited the registered IDBoxRT source folder `SRC-APM-IIOT-0011` to identify primary document-level sources for later validation of the enriched IDBoxRT wiki page.

This batch stayed within M2 Source Registry + Manual Extraction. It registered exact document-level source entries and updated only source traceability on the IDBoxRT page. It did not extract new product claims, update comparison pages, add backend/API/database/auth/crawler/AI Q&A/CRM/public portal scope, or add pricing/commercial content.

## Source Folder Audited

Parent source:

- Source ID: `SRC-APM-IIOT-0011`
- Title: IDBoxRT
- Folder URL: `https://drive.google.com/drive/folders/17Q2yiUSr7GmIlhvRyclGZ4whhPsezzov`
- Drive ID: `17Q2yiUSr7GmIlhvRyclGZ4whhPsezzov`

Observed folder structure:

- `00_Extracted Data`
- `01_Vendor and Reference Materials`
- `02_Sales-Presales Materials`
- `03_Pricing Structure`
- `04_Technical Materials`
- `05_Technical Proposal Templates`

Audit notes:

- `04_Technical Materials` was accessible but empty during this audit.
- `01_Vendor and Reference Materials / 02_Reference Materials` contained the strongest exact product and technical candidates.
- Sales, proposal, pricing, BOM, and comparison-oriented folders were treated cautiously and not used for wiki enrichment.

## Documents Found

Confirmed exact product or technical source candidates:

| Candidate | File Type | Audit Decision |
|---|---|---|
| `IDboxRT description and technical architecture.docx` | docx | Registered as primary validation source |
| `IDboxRT documentation.pdf` | pdf | Registered as primary validation source |
| `IDbox User Manual.pdf` | pdf | Registered as primary validation source |
| `IDboxRT connectors.pdf` | pdf | Registered as primary validation source |
| `IDBoxRT General Presentation - 06.05.2024.pptx` | pptx | Registered with possible pricing/sales-language risk |
| `Dashboards.pdf` | pdf | Registered as primary validation source |
| `IDboxRT synoptic examples.pdf` | pdf | Registered as UI/visualization validation source |
| `IDboxRT mobile app EN.pdf` | pdf | Registered as mobile/workflow validation source |
| `Installation Review - Avenue.docx` | docx | Registered with possible project-context risk |
| `Guía Instalación IDbox 3 en Windows desde Cero (IDboxRT)_en.pdf` | pdf | Registered as deployment validation source |
| `Guía Instalación Keycloak en Windows (IDboxRT)_en.pdf` | pdf | Registered as access-control/deployment validation source |
| `IDBoxRT as new Historian Solution for Power Generation Customers.docx` | docx | Registered as historian-positioning validation source |
| `IDboxRT migration pathv2.pdf` | pdf | Registered as migration/coexistence validation source |

Other exact files were observed but deferred, including industry decks, case/reference PDFs, duplicate or alternate-format presentations, business-model material, proposal templates, and pricing/BOM-related folders.

## Documents Registered

New document-level source entries added to `registry/sources-apm-iiot.yaml`:

- `SRC-IDBOXRT-DOC-0001` — `IDboxRT description and technical architecture.docx`
- `SRC-IDBOXRT-DOC-0002` — `IDboxRT documentation.pdf`
- `SRC-IDBOXRT-DOC-0003` — `IDbox User Manual.pdf`
- `SRC-IDBOXRT-DOC-0004` — `IDboxRT connectors.pdf`
- `SRC-IDBOXRT-DOC-0005` — `IDBoxRT General Presentation - 06.05.2024.pptx`
- `SRC-IDBOXRT-DOC-0006` — `Dashboards.pdf`
- `SRC-IDBOXRT-DOC-0007` — `IDboxRT synoptic examples.pdf`
- `SRC-IDBOXRT-DOC-0008` — `IDboxRT mobile app EN.pdf`
- `SRC-IDBOXRT-DOC-0009` — `Installation Review - Avenue.docx`
- `SRC-IDBOXRT-DOC-0010` — `Guía Instalación IDbox 3 en Windows desde Cero (IDboxRT)_en.pdf`
- `SRC-IDBOXRT-DOC-0011` — `Guía Instalación Keycloak en Windows (IDboxRT)_en.pdf`
- `SRC-IDBOXRT-DOC-0012` — `IDBoxRT as new Historian Solution for Power Generation Customers.docx`
- `SRC-IDBOXRT-DOC-0013` — `IDboxRT migration pathv2.pdf`

All registered entries include exact titles, type, URL, Drive ID, confidentiality, extraction priority, extraction status, related pages, validation focus, pricing risk, restricted-content policy, and notes.

## Documents Deferred or Excluded

Deferred:

- Industry decks and PDFs such as cement, oil and gas, water utilities, renewables, power distribution, and energy-efficiency case/reference material.
- Duplicate or alternate-format presentations where a PDF and PPTX version appeared to cover similar material.
- UI example files that may contain screenshots or visual assets beyond the registered minimal set.
- `IDboxRT vs Aveva PI.pdf`, because comparison conclusions are out of scope for this batch.
- Business-model material, because it may contain commercial, partnership, or licensing context.

Excluded from normal wiki evidence:

- Pricing folders and pricing-structure material.
- BOM template folders.
- Proposal template and reference proposal folders unless a future review confirms a technical-only subsection that can be safely restricted and separated.
- `SRC-IDBOXRT-EXTRACT-0004`, because it is a high pricing/BOM risk derived source.

## Pricing / Commercial Risk Review

No pricing, licensing, discounts, quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added to wiki pages.

Registered risk handling:

- `pricing_risk: none` for technical, connector, documentation, manual, dashboard, mobile, and installation-guide files where titles do not indicate commercial content.
- `pricing_risk: possible` for general presentation, installation review, historian-positioning, and migration-path sources because they may include sales, project, customer, proposal, comparison, or decision-context material.
- Pricing/BOM/proposal folders were not registered as normal wiki evidence sources.

## Recommended Validation Focus by Document

| Source ID | Recommended Validation Focus |
|---|---|
| `SRC-IDBOXRT-DOC-0001` | official product positioning, architecture/modules, connectors, protocols/API support, contextualization, KPI/calculation model, product boundaries |
| `SRC-IDBOXRT-DOC-0002` | documentation, deployment model, storage/retention, security/access control, connectors, limitations |
| `SRC-IDBOXRT-DOC-0003` | functional capabilities, user workflows, dashboards/reporting, access control |
| `SRC-IDBOXRT-DOC-0004` | supported data sources/connectors, protocols/API support, SCADA/historian relationship, integration limits |
| `SRC-IDBOXRT-DOC-0005` | product positioning, vendor/legal identity, capability overview, use cases; review for sales/commercial language |
| `SRC-IDBOXRT-DOC-0006` | dashboard/reporting capabilities, UI scope, user workflows |
| `SRC-IDBOXRT-DOC-0007` | synoptic/operator visualization examples; avoid copying images into wiki |
| `SRC-IDBOXRT-DOC-0008` | mobile access, workflows, security/access-control implications |
| `SRC-IDBOXRT-DOC-0009` | deployment model, infrastructure requirements, security/access control; review for project-specific context |
| `SRC-IDBOXRT-DOC-0010` | Windows installation, system requirements, deployment assumptions |
| `SRC-IDBOXRT-DOC-0011` | Keycloak/access-control deployment, authentication-adjacent architecture, system requirements |
| `SRC-IDBOXRT-DOC-0012` | historian positioning, power-generation context, storage/retention assumptions |
| `SRC-IDBOXRT-DOC-0013` | migration/coexistence questions, historian relationship, assumptions and limitations |

## IDBoxRT Claims Needing Primary Evidence

- Official product positioning.
- Vendor/legal identity.
- Architecture and modules.
- Supported data sources/connectors.
- SCADA/historian relationship.
- Protocols/API support.
- Deployment models.
- Security/access control.
- Data storage and retention.
- Contextualization/preprocessing.
- KPI/calculation model.
- Dashboard/reporting capabilities.
- Mobile access scope.
- Limitations and product boundaries.
- Historian migration or replacement assumptions.
- Any comparison with AVEVA PI or other historian products.

## Registry Updates

Updated `registry/sources-apm-iiot.yaml`:

- Set `SRC-APM-IIOT-0011` `document_inventory_status` to `document_audit_completed_batch_1_10`.
- Added `SRC-IDBOXRT-DOC-0001` through `SRC-IDBOXRT-DOC-0013`.
- Preserved existing source IDs and Drive URLs.
- Preserved existing derived source entries.
- Did not register fake document entries.

## Minimal Page Updates

Updated `content/wiki/solutions/idboxrt.md` only for source traceability:

- Added newly registered primary document source IDs to `source_refs`.
- Added clickable Evidence Sources links for `SRC-IDBOXRT-DOC-0001` through `SRC-IDBOXRT-DOC-0013`.
- Updated the parent folder review status from pending audit to Batch 1.10 document audit completed.
- Did not add new product claims.
- Kept the page `draft`, `private`, and `confidence: low`.

## Validation Result

Passed.

- `npm.cmd run validate:metadata`
- Validated metadata for 32 wiki pages.

## Build Result

Passed.

- `npm.cmd run build`
- Docusaurus production build completed successfully.

## Docker Preview Result

Passed.

- `docker compose down`
- `docker compose up -d --build nova-wiki`
- `docker compose ps` shows `nova-wiki` running on `0.0.0.0:3100->3000/tcp`.
- `curl.exe -I http://localhost:3100/solutions/idboxrt` returned HTTP 200.
- Docker-served IDBoxRT page includes `SRC-IDBOXRT-DOC-0001`, `SRC-IDBOXRT-DOC-0013`, clickable `Open source` evidence links, and the restricted-source notice.

## Next Recommended Batch

Manual Extraction Batch 1.11 should validate IDBoxRT architecture and integration claims using a narrow primary-source set:

1. `SRC-IDBOXRT-DOC-0001` for architecture, modules, contextualization, and KPI model.
2. `SRC-IDBOXRT-DOC-0004` for connectors, protocols, and SCADA/historian relationships.
3. `SRC-IDBOXRT-DOC-0002` for deployment, storage, security, and limitations.
4. Keep historian comparison and migration conclusions deferred until a separate comparison-focused batch.
