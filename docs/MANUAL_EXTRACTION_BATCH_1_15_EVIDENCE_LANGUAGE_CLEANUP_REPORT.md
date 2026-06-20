# Manual Extraction Batch 1.15 Evidence Language Cleanup Report

## Summary

Batch 1.15 cleaned evidence-first writing from the sales/presales sections of the four enriched solution pages.

The readable top layer now explains each solution first, then leaves source IDs, document references, and detailed validation notes in the lower evidence layer. The batch did not change page metadata, introduce new product scope, add comparison conclusions, or add pricing/commercial content.

## Pages Reviewed

- `content/wiki/solutions/etapro.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/luca-bds.md`

## Sections Rewritten

Updated top-layer sections across the pages:

- Executive Summary wording
- Where It Fits wording
- Product Positioning
- Architecture Overview
- Core Modules / Core Components / Core Capabilities
- Integration Notes
- Deployment Notes
- Typical Use Cases
- Mermaid diagram captions
- Selected Presales Qualification Notes and What To Validate With Customer wording

## Evidence Language Removed From Top Layer

Removed or reduced wording such as:

- direct `SRC-...` citations in readable sections
- "current source-backed draft architecture"
- paragraph-level evidence statements
- repeated review-status wording
- Batch labels in the opening layer
- source-ID-heavy tables before `Evidence Sources`

The pre-`Evidence Sources` scan now returns no matches for the targeted evidence-first terms.

## Evidence Preserved

Preserved:

- front matter `source_refs`
- clickable `Evidence Sources` tables
- `Source-Backed Draft Notes`
- `Document-Level Validation Notes`
- `Open Questions`
- `Excluded Content`
- `Review Notes`
- derived-source review-aid labels
- restricted pricing/BOM source notices

## Claims Not Changed

No new product claims were introduced.

The cleanup reworded existing supported content into customer-readable language while keeping unresolved topics in validation sections:

- EtaPRO: power-generation APM/performance/condition monitoring; Maximo handoff remains an implementation validation topic.
- Canary: industrial historian/time-series data foundation; AVEVA PI comparison remains deferred.
- IDBoxRT: operational intelligence / industrial data hub; historian replacement and migration remain deferred.
- LUCA BDS: BI / data integration / analytics layer; historian/APM/IIoT/AI-platform positioning remains conservative.

## Pricing / Commercial Content Check

Passed at content-review level.

No pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.

Existing exclusion language and restricted-source notices were preserved.

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
- `curl.exe -I http://localhost:3100/solutions/etapro` returned HTTP 200.
- `curl.exe -I http://localhost:3100/solutions/canary` returned HTTP 200.
- `curl.exe -I http://localhost:3100/solutions/idboxrt` returned HTTP 200.
- `curl.exe -I http://localhost:3100/solutions/luca-bds` returned HTTP 200.

## Manual Browser Review Notes

Not manually opened in a browser during this batch.

Recommended browser review focus:

- Confirm the first screen of each page reads like a solution brief, not an evidence note.
- Confirm source IDs are concentrated in evidence/validation sections.
- Confirm Mermaid diagrams still render.
- Confirm no comparison or commercial claims appear in the readable layer.

## Next Recommended Batch

Continue M2 with focused validation, not new platform scope:

1. Canary secondary validation using remaining Canary documents.
2. IDBoxRT deployment/security follow-up.
3. LUCA BDS technical-boundary validation if new documents are available.
4. AVEVA PI source audit and controlled enrichment.
