# Manual Extraction Batch 1 Report

## Summary

Manual Extraction Batch 1 extracted and refined concise draft knowledge from `SRC-APM-IIOT-0001` into the four high-priority solution pages: IDBoxRT, Canary, AVEVA PI, and EtaPRO.

The Google Sheet was used as the main source of truth for this batch. Reference URLs were not used as extraction sources. No website content was scraped or copied.

## Source Used

| Source ID | Title | Source Type | Extraction Status |
|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | Google Sheet | `batch_1_draft_extracted` |

Google Sheet:

`https://docs.google.com/spreadsheets/d/1OKfe48zNwTjB1196QU45f8jqNyT8OyszAwLQ-D1gdEw`

Relevant extraction columns:

- IDBoxRT
- EtaPRO APM
- Canary
- AVEVA PI System

## Pages Updated

Solution pages:

- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/aveva-pi.md`
- `content/wiki/solutions/etapro.md`

Deliverable report:

- `docs/MANUAL_EXTRACTION_BATCH_1_REPORT.md`

Optional related pages were not expanded in this pass. Existing comparison pages remain conservative and use `To validate` where evidence is incomplete.

## Extracted Topics

Extracted into each target solution page under `Source-Backed Draft Notes`:

- General concept
- Vendor
- Problems solved
- Core capabilities
- Typical use cases where present in the sheet
- Integration relevance where present in the sheet
- Deployment model where present in the sheet, marked for validation
- APM / IIoT / Historian positioning
- Open questions
- Extraction TODO

Every extracted draft note references `SRC-APM-IIOT-0001`.

## Claims Requiring Validation

All extracted notes remain draft and require validation against detailed source documents or vendor-confirmed material.

Priority validation areas:

- Product scope and official naming.
- Architecture and deployment model.
- Integration protocols and supported interfaces.
- Supported use cases by industry.
- Limitations and assumptions.
- Comparison criteria between Canary and AVEVA PI.
- Comparison criteria between IDBoxRT and historian solutions.
- Comparison criteria between EtaPRO and IBM MAS APM.

## Deferred Items

- No final comparison conclusions were added.
- No optional capability-page expansion was added in this pass.
- No target page was moved beyond `draft`.
- Product-specific source folders remain separate and should still be reviewed:
  - `SRC-APM-IIOT-0011` - IDBoxRT
  - `SRC-APM-IIOT-0010` - Canary
  - `SRC-APM-IIOT-0008` - AVEVA PI
  - `SRC-APM-IIOT-0007` - EtaPRO
- IBM MAS comparison content remains deferred until exact IBM MAS source documents are registered and reviewed.

## Restricted Content Check

No pricing, licensing, or commercial terms were added.

The pricing row in the source sheet was not extracted into wiki pages. Mentions of pricing or commercial terms in edited pages are exclusion rules only, not extracted commercial content.

No raw confidential documents were copied into the repository.

`SRC-APM-IIOT-0002` remains restricted and outside this extraction batch.

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

Recommended next batch: Manual Extraction Batch 1.1.

Suggested scope:

- Review the product-specific source folders for IDBoxRT, Canary, AVEVA PI, and EtaPRO.
- Validate the draft facts extracted from `SRC-APM-IIOT-0001`.
- Add document-level registry entries if exact source documents are identified.
- Keep comparison pages conservative until both sides of each comparison have reviewed evidence.
- Keep all edited pages `draft`, `private`, and `confidence: low` until human review.
