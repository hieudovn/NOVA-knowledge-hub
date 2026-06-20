# Manual Extraction Batch 1.5 Canary Validation Report

## Summary

Manual Extraction Batch 1.5 validated and refined Canary Batch 1 draft facts using `SRC-CANARY-DOC-0001`, `Canary System Brochure.pdf`, as the first document-level Canary source.

This batch did not update comparison pages, AVEVA PI pages, public web references, backend scope, or commercial content.

## Document Reviewed

| Source ID | Title | Parent Source | Review Scope |
|---|---|---|---|
| `SRC-CANARY-DOC-0001` | Canary System Brochure.pdf | `SRC-APM-IIOT-0010` | Product overview, historian positioning, core capabilities, deployment positioning, and product boundaries. |

Secondary documents `SRC-CANARY-DOC-0002` and `SRC-CANARY-DOC-0003` remain deferred for later validation scope.

## Registry Updates

- Set `SRC-CANARY-DOC-0001` `extraction_status` to `in_progress`.
- Kept `SRC-CANARY-DOC-0002` and `SRC-CANARY-DOC-0003` at `not_started`.
- Preserved existing source IDs, Drive URLs, Drive IDs, and related pages.

## Canary Page Updates

- Added `SRC-CANARY-DOC-0001` to `content/wiki/solutions/canary.md` `source_refs`.
- Added `Document-Level Validation Notes` with document coverage, validated/refined draft facts, open questions, and deferred items.
- Kept the page `status: draft`, `visibility: private`, and `confidence: low`.

## Facts Validated

- Canary is positioned as a data historian.
- Canary is positioned for industrial automation.
- The brochure supports historian-centered collection, storage, visualization, and operational decision support at a high level.

## Facts Refined

- Core capability notes were refined to the brochure-supported terms: collection and storage, virtual views, asset modeling, calculation server, event monitoring, Axiom visualization, and general data connectors.
- Deployment notes were narrowed to edge, site, enterprise, and cloud positioning, with detailed architecture still unresolved.
- Integration notes were narrowed to general connector relevance, collection from edge and IIoT devices, Axiom visualization, and calculation support.

## Facts Still To Validate

- Vendor legal identity and country.
- Exact supported collectors, protocols, and interface list.
- Excel access and API-style access.
- Retention behavior, compression behavior, and performance figures.
- Detailed deployment architecture and hosting constraints.
- Product limits, prerequisites, sizing assumptions, and security model.
- Any Canary vs AVEVA PI comparison conclusion.

## Excluded / Restricted Content

- No pricing, licensing, discounts, proposal terms, or commercial content was added.
- No public websites or Reference URLs were used as extraction sources.
- No long raw document content was copied into the repository.
- Secondary Canary documents were not deeply extracted in this batch.

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

## Lessons for Next Product Validation

- Image-only PDFs may require visual inspection rather than text extraction.
- Keep brochure evidence at the product-overview level and defer detailed architecture, interfaces, and limitations to technical documents.
- Secondary documents should be used in a separate focused batch to avoid over-expanding validation scope.

## Next Recommended Batch

Manual Extraction Batch 1.6 - Canary secondary document validation.

Recommended scope:

- Use `SRC-CANARY-DOC-0003` to validate virtual views, contextualization, asset modeling, and namespace-related claims.
- Use a collector-focused document such as `SRC-CANARY-DOC-0004` to validate data collection and integration details.
- Keep AVEVA PI comparison conclusions deferred until AVEVA PI document sources are audited and reviewed.
