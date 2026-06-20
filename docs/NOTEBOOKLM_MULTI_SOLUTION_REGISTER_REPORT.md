# NotebookLM Multi-Solution Register Report

## Summary

Registered NotebookLM-generated Extracted Data as derived sources for EtaPRO, IDBoxRT, Canary, and LUCA BDS.

These sources are review aids only. They are not primary vendor/raw sources, do not approve wiki claims, and must be validated against original source documents before any wiki enrichment.

No wiki content was modified in this batch.

## Solutions Covered

| Solution | Parent Source ID | Registry Status |
|---|---|---|
| EtaPRO | `SRC-APM-IIOT-0007` | Extracted Data folder and four markdown files registered |
| IDBoxRT | `SRC-APM-IIOT-0011` | Extracted Data folder and four markdown files registered |
| Canary | `SRC-APM-IIOT-0010` | Extracted Data folder and four markdown files registered |
| LUCA BDS | `SRC-APM-IIOT-0004` | Extracted Data folder and four markdown files registered; no wiki page yet |

## Extracted Data Folders Found

| Solution | Folder Title | Folder ID | Registered ID |
|---|---|---|---|
| EtaPRO | `00_Extracted Data` | `18FAWinREsJ-2435b1JxfdzwHWlkjmPEs` | `SRC-ETAPRO-EXTRACT-FOLDER-0001` |
| IDBoxRT | `00_Extracted Data` | `1UdrkknVr3aqhFgALeCh1LTMdWGgaTbzL` | `SRC-IDBOXRT-EXTRACT-FOLDER-0001` |
| Canary | `00_Extracted Data` | `1IrhAb1EC6H4r2CdPG32Ihrx_yT8r1ZQD` | `SRC-CANARY-EXTRACT-FOLDER-0001` |
| LUCA BDS | `00_Extracted Data` | `1Qb-zJ2_SxazvQ2YToNy9ZtnETuMc8m58` | `SRC-LUCA-BDS-EXTRACT-FOLDER-0001` |

## Files Registered by Solution

### EtaPRO

| Source ID | File | Pricing Risk |
|---|---|---|
| `SRC-ETAPRO-EXTRACT-0001` | `01_EtaPRO Extracted Keys.md` | `none` |
| `SRC-ETAPRO-EXTRACT-0002` | `02_EtaPRO Business Section.md` | `none` |
| `SRC-ETAPRO-EXTRACT-0003` | `03_EtaPRO Technical Section.md` | `none` |
| `SRC-ETAPRO-EXTRACT-0004` | `04_EtaPRO Usecases, deployment, BOM, roadmap.md` | `high` |

### IDBoxRT

| Source ID | File | Pricing Risk |
|---|---|---|
| `SRC-IDBOXRT-EXTRACT-0001` | `01_IDBoxRT Extracted Keys.md` | `none` |
| `SRC-IDBOXRT-EXTRACT-0002` | `02_IDBoxRT Business Section.md` | `none` |
| `SRC-IDBOXRT-EXTRACT-0003` | `03_IDBoxRT Technical Section.md` | `none` |
| `SRC-IDBOXRT-EXTRACT-0004` | `04_IDBoxRT Use cases, Deployment and BOM.md` | `high` |

### Canary

| Source ID | File | Pricing Risk |
|---|---|---|
| `SRC-CANARY-EXTRACT-0001` | `01_Canary Extracted Keys.md` | `none` |
| `SRC-CANARY-EXTRACT-0002` | `02_Canary Business Section.md` | `none` |
| `SRC-CANARY-EXTRACT-0003` | `03_Canary Technical Section.md` | `none` |
| `SRC-CANARY-EXTRACT-0004` | `04_Canary Use cases, BOM and Deployment.md` | `high` |

### LUCA BDS

| Source ID | File | Pricing Risk |
|---|---|---|
| `SRC-LUCA-BDS-EXTRACT-0001` | `01_LUCA BDS Extracted Keys.md` | `none` |
| `SRC-LUCA-BDS-EXTRACT-0002` | `02_LUCA BDS Business Sector.md` | `none` |
| `SRC-LUCA-BDS-EXTRACT-0003` | `03_LUCA BDS Technical Sector.md` | `none` |
| `SRC-LUCA-BDS-EXTRACT-0004` | `04_LUCA BDS Case studies, BOM, Deployment.md` | `high` |

## Files Not Registered and Why

No visible markdown files in the four audited Extracted Data folders were skipped.

No placeholder or fake entries were created.

## Pricing / Commercial Risk Classification

Files with `BOM` in the title were classified as `pricing_risk: high` and marked with restricted-content policies that prohibit extracting pricing, licensing, discounts, quotes, proposal prices, budgetary prices, BOM prices, fees, or commercial terms into wiki pages.

Files without filename indicators for pricing, licensing, BOM, proposal, fee, quote, budget, or commercial terms were classified as `pricing_risk: none` based on file metadata only. This is not approval; each file still requires source validation and human review.

Folder entries containing any high-risk file were classified as `pricing_risk: high`.

## Potential Wiki Uses by File

| File Type | Potential Use | Required Constraint |
|---|---|---|
| Extracted Keys | Candidate fact list, validation checklist, tender/comparison prompts | Must be checked against primary source documents |
| Business Section | Candidate positioning, non-pricing benefits, use-case framing | Do not use as approved knowledge or commercial source |
| Technical Section | Candidate architecture, capability, integration, and product-boundary review | Validate against primary technical documents |
| Use cases / Deployment / BOM / Roadmap | Non-commercial use-case and deployment planning; restricted commercial reference only | Exclude pricing/commercial/BOM price content from wiki |

LUCA BDS derived sources should not drive wiki page creation until LUCA BDS scope fit is confirmed.

## Validation Requirements

- Keep all NotebookLM files as `source_kind: derived_source`.
- Keep all NotebookLM files as `validation_status: needs_source_validation`.
- Validate candidate facts against original source documents before wiki updates.
- Do not copy long raw NotebookLM content into the repository.
- Do not treat NotebookLM summaries as approved knowledge.
- Do not add pricing, licensing, discount, proposal, budgetary, BOM price, fee, quote, or commercial terms into wiki pages.
- Allow case-study benefits only when source-backed and non-pricing.

## Recommended Enrichment Order

1. EtaPRO technical file, because the EtaPRO validation workflow already exists.
2. Canary product overview / historian positioning.
3. IDBoxRT technical/business summary.
4. LUCA BDS only after confirming whether it belongs in M1 scope.

## Validation Result

Passed. `npm.cmd run validate:metadata` validated metadata for 32 wiki pages.

## Build Result

Passed. `npm.cmd run build` completed the Docusaurus production build and generated static files in `apps/wiki/build`.

## Next Recommended Batch

Manual Extraction Batch 1.6 should use `SRC-ETAPRO-EXTRACT-0003` only as a derived review aid to prepare a narrow EtaPRO technical validation checklist against existing primary EtaPRO document sources.
