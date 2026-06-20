# Manual Extraction Batch 1.4 Canary Document Audit Report

## Summary

Manual Extraction Batch 1.4 completed a metadata-only audit of the Canary source folder `SRC-APM-IIOT-0010`.

This batch did not extract new technical claims, update wiki content, update comparison pages, use public websites, or use Reference URLs from the Batch 1 Google Sheet. It only identified exact Canary document-level sources that can support a later validation batch.

## Source Folder Audited

| Source ID | Title | Drive Folder | Audit Result |
|---|---|---|---|
| `SRC-APM-IIOT-0010` | Canary | `https://drive.google.com/drive/folders/1HFjWEw-kl8ExbDkf3hoMXsaBmBAUMdUk` | Metadata audit completed for root folder and visible non-pricing subfolders. |

Folders reviewed by metadata:

- `01_Vendor and Reference Materials`
- `02_Sales-Presales Materials`
- `04_Technical Materials`
- `05_Technical Proposal Templates`

The `03_Pricing Structure` folder was excluded.

## Documents Confirmed

| Source ID | Document Title | Type | Extraction Status |
|---|---|---|---|
| `SRC-CANARY-DOC-0001` | Canary System Brochure.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0002` | Canary.docx | DOCX | `not_started` |
| `SRC-CANARY-DOC-0003` | Virtualize Your World.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0004` | Cygnet Collector Whitepaper.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0005` | Canary + Seeq Better Together Whitepaper.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0006` | 21 CFR Part 11 Compliance Whitepaper.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0007` | Migration Guide Aveva Pi to Canarylabs.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0008` | Canary & Aveva PI Comparison.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0009` | East West Power Case Study.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0010` | CanaryMurphyOilCaseStudy.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0011` | Boca Raton Case Study.pdf | PDF | `not_started` |
| `SRC-CANARY-DOC-0012` | Center for Breakthrough Case Study.pdf | PDF | `not_started` |

## Documents Deferred or Excluded

- The `03_Pricing Structure` folder was excluded.
- Proposal templates, BOM templates, and reference proposal folders were deferred.
- Sales and marketing decks were deferred because this batch prioritizes source-backed validation documents.
- The `01_Vendor Information` subfolder was visible but empty at this audit depth.
- The `04_Technical Materials` folder was visible but empty at this audit depth.
- Additional case studies were not promoted in this pass to keep the next validation batch focused.
- Public website content was not used.

## Suggested Validation Focus by Document

| Source ID | Suggested Validation Focus |
|---|---|
| `SRC-CANARY-DOC-0001` | Product overview, historian positioning, core capabilities, product boundaries. |
| `SRC-CANARY-DOC-0002` | Internal source summary, product scope, Batch 1 draft-fact crosscheck, open questions. |
| `SRC-CANARY-DOC-0003` | Virtual Views, contextualization, asset modeling, namespace strategy. |
| `SRC-CANARY-DOC-0004` | Data collection, collector architecture, integration claims, oil and gas source systems. |
| `SRC-CANARY-DOC-0005` | Downstream analytics, data access, ecosystem integration, analytics workflows. |
| `SRC-CANARY-DOC-0006` | Compliance context, regulated-industry use, historian controls, limitations to check. |
| `SRC-CANARY-DOC-0007` | Migration considerations, coexistence questions, comparison inputs, assumptions to check. |
| `SRC-CANARY-DOC-0008` | Comparison inputs, historian criteria, assumptions to check, claims requiring AVEVA sources. |
| `SRC-CANARY-DOC-0009` | Power and utilities use case, enterprise historian context, remote-site data, customer example. |
| `SRC-CANARY-DOC-0010` | Oil and gas use case, remote asset data, tag normalization, customer example. |
| `SRC-CANARY-DOC-0011` | Water/wastewater use case, operational trending, historian retrieval, customer example. |
| `SRC-CANARY-DOC-0012` | Life sciences use case, regulated-industry context, data access controls, customer example. |

## Canary Draft Facts Still Needing Evidence

- General concept and official product positioning as an industrial historian.
- Vendor naming and product naming.
- Historian storage model, retention behavior, and retrieval performance.
- Data collection architecture and supported collectors.
- Contextualization, asset modeling, and namespace capabilities.
- Visualization, calculations, Excel access, API, and downstream analytics access.
- Deployment model, including site historian, enterprise historian, local-to-central patterns, on-premises, and cloud claims.
- Product limits, prerequisites, and operational assumptions.
- Case-study use cases across manufacturing, oil and gas, power and utilities, water/wastewater, and life sciences.
- Comparison or migration claims against AVEVA PI, deferred until AVEVA PI document sources are also reviewed.

## Restricted Content Check

- No pricing, licensing, discounts, proposal terms, or commercial content was extracted.
- No raw confidential documents were copied into the repository.
- No public websites were scraped.
- No Reference URLs from the Batch 1 Google Sheet were used as extraction sources.
- Pricing, proposal, BOM, and sales-deck materials remain outside this validation batch.

## Registry Updates

Updated `registry/sources-apm-iiot.yaml`:

- Set `SRC-APM-IIOT-0010` `document_inventory_status` to `batch_1_4_document_audit_completed`.
- Added `SRC-CANARY-DOC-0001` through `SRC-CANARY-DOC-0012`.
- Added `validation_focus` fields for each Canary document-level source.
- Kept all Canary document-level sources at `extraction_status: not_started`.
- Preserved the parent source `SRC-APM-IIOT-0010` and its existing Drive URL and Drive ID.

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

Manual Extraction Batch 1.5 - Canary document-level draft fact validation.

Recommended scope:

- Validate Canary product overview and historian positioning using `SRC-CANARY-DOC-0001`.
- Validate contextualization and namespace claims using `SRC-CANARY-DOC-0003`.
- Validate collection and integration claims using `SRC-CANARY-DOC-0004`.
- Validate downstream analytics and data access claims using `SRC-CANARY-DOC-0005`.
- Validate use-case coverage using selected case studies.
- Keep AVEVA PI comparison conclusions deferred until AVEVA PI source documents are inventoried and reviewed.
