# Manual Extraction Batch 1.3 EtaPRO Document Inventory Report

## Summary

Manual Extraction Batch 1.3 completed a metadata-only inventory of the EtaPRO source folder `SRC-APM-IIOT-0007`.

This batch did not extract new technical claims, update comparison pages, or copy raw source content into the repository. It formalized confirmed, non-commercial EtaPRO document-level sources that can support the next validation batch.

## Source Folder Audited

| Source ID | Title | Drive Folder | Inventory Result |
|---|---|---|---|
| `SRC-APM-IIOT-0007` | EtaPRO | `https://drive.google.com/drive/folders/1ePyS23Vwv1KjJ_TaB2U5JArxVyOH7YJE` | Inventory completed for root folder and visible non-pricing subfolders. |

Top-level folders reviewed by metadata:

- `01_Vendor and Reference Materials`
- `02_Sales-Presales Materials`
- `04_Technical Materials`
- `05_Technical Proposal Templates`

The `03_Pricing Structure` folder was excluded from review.

## Documents Confirmed

| Source ID | Document Title | Type | Extraction Status |
|---|---|---|---|
| `SRC-ETAPRO-DOC-0001` | Master_EtaPRO_Knowledge | Google Doc | `in_progress` |
| `SRC-ETAPRO-DOC-0002` | Toshiba EtaPRO APM Introduction for Customer_r1.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0003` | EtaPRO Overview (New March 2025).pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0004` | EtaPRO technology.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0005` | EtaPRO-Platform-Flysht-2.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0006` | Brochure-EtaPRO-VirtualPlant-_22.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0007` | EtaPRO-APR-Flysht-1.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0008` | EtaPRO-Predictor-Flysht-1.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0009` | EtaPROMonitorDiagnBrochure-2.pdf | PDF | `not_started` |
| `SRC-ETAPRO-DOC-0010` | EtaPRO-FDM-PASS-Product-Info-Sheet-11-_2024.pdf | PDF | `not_started` |

## Documents Deferred or Excluded

- Pricing folder and pricing-named PDFs were excluded.
- Proposal and indicative proposal files were deferred because they may contain proposal terms or commercial context.
- Sales and marketing decks were deferred unless later needed for positioning review.
- Partnership material was deferred until product-authoritative sources are exhausted.
- Customer survey material was deferred because it is not a product validation source.
- Duplicate copies of the same product brochures or flysheets were not promoted to document sources.
- `04_Technical Materials` was visible but empty at this audit depth.
- `05_Technical Proposal Templates` was treated as proposal-adjacent and not promoted for extraction.

## Suggested Validation Focus by Document

| Source ID | Suggested Validation Focus |
|---|---|
| `SRC-ETAPRO-DOC-0001` | Pilot validation context, Avenue packaging, module map, open questions. |
| `SRC-ETAPRO-DOC-0002` | Vendor product scope, customer-facing positioning, use cases, module boundaries. |
| `SRC-ETAPRO-DOC-0003` | Product overview, platform positioning, module boundaries, use cases. |
| `SRC-ETAPRO-DOC-0004` | Product architecture, technology model, integration claims, deployment evidence. |
| `SRC-ETAPRO-DOC-0005` | Platform scope, core capabilities, module boundaries, limitations to check. |
| `SRC-ETAPRO-DOC-0006` | Virtual Plant module, thermodynamic modeling, performance monitoring, use cases. |
| `SRC-ETAPRO-DOC-0007` | APR module, anomaly detection, condition monitoring, early warning claims. |
| `SRC-ETAPRO-DOC-0008` | Predictor module, rotating equipment diagnostics, condition monitoring, module boundaries. |
| `SRC-ETAPRO-DOC-0009` | Monitoring and diagnostics, condition monitoring scope, asset health claims, use cases. |
| `SRC-ETAPRO-DOC-0010` | Module-specific product info, product boundaries, limitations to check, terminology. |

## EtaPRO Facts Still Needing Evidence

- Official module names and product boundaries.
- Deployment model, including any on-premises or cloud claims.
- Architecture and data flow.
- Protocol-specific integrations, including OPC UA, Modbus, PI, and Bently Nevada 3500.
- Limitations, prerequisites, system requirements, and assumptions.
- Use-case coverage beyond the power-generation examples already refined in Batch 1.2.
- Outage reporting and availability-reporting details.
- Which modules are standard, optional, or configuration-dependent.

## Restricted Content Check

- No pricing, licensing, discounts, proposal terms, or commercial content was extracted.
- No public websites were scraped.
- No Reference URLs from the Batch 1 Google Sheet were used as extraction sources.
- No raw confidential documents were copied into the repository.
- Excluded pricing and proposal-adjacent materials should remain outside wiki extraction unless explicitly approved for internal-only handling.

## Registry Updates

Updated `registry/sources-apm-iiot.yaml`:

- Set `SRC-APM-IIOT-0007` `document_inventory_status` to `batch_1_3_inventory_completed`.
- Preserved `SRC-ETAPRO-DOC-0001`.
- Added `SRC-ETAPRO-DOC-0002` through `SRC-ETAPRO-DOC-0010`.
- Added `validation_focus` fields for EtaPRO document-level sources.
- Kept all new document-level sources at `extraction_status: not_started`.

## Validation Result

Command:

```powershell
cd apps\wiki
npm.cmd run validate:metadata
```

Result: Passed.

Validated metadata for 32 wiki pages.

## Build Result

Command:

```powershell
cd apps\wiki
npm.cmd run build
```

Result: Passed.

Docusaurus production build completed successfully with no broken-link failures.

## Next Recommended Batch

Manual Extraction Batch 1.4 - EtaPRO evidence validation from confirmed documents.

Recommended scope:

- Validate official module boundaries using `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005`, `SRC-ETAPRO-DOC-0007`, `SRC-ETAPRO-DOC-0008`, and `SRC-ETAPRO-DOC-0009`.
- Validate architecture, integration, and deployment evidence using `SRC-ETAPRO-DOC-0004`.
- Validate Virtual Plant-specific performance monitoring facts using `SRC-ETAPRO-DOC-0006`.
- Keep proposal, pricing, and commercial materials excluded.
- Keep EtaPRO page `draft`, `private`, and `confidence: low`.
