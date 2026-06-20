# Manual Extraction Batch 1.14 Sales Presales Rewrite Report

## Summary

Batch 1.14 normalized the top-layer writing style for the currently enriched solution pages so they are easier to read for sales and presales use while preserving M2 source traceability.

The batch stayed within M2 Source Registry + Manual Extraction. It did not add backend, API service, database, authentication implementation, crawler, AI Q&A, CRM/NOVA integration, public portal, landing page generator, Knowledge Graph, Modes, Skills, AI orchestration, comparison-page updates, or commercial content.

## Writing Guide Created

Created:

- `docs/SALES_PRESALES_WIKI_WRITING_GUIDE.md`

The guide defines:

- two-layer page model
- recommended solution page structure
- sales/presales tone rules
- evidence placement rules
- confidence labels
- draft/still-to-validate handling
- pricing/commercial exclusions
- before/after example
- acceptance checklist

## Pages Updated

Updated solution pages:

- `content/wiki/solutions/etapro.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/luca-bds.md`

All pages remain:

- `status: draft`
- `visibility: private`
- `confidence: low`

## Style Changes Made

- Rewrote executive summaries to explain the solution in customer-oriented language.
- Added or strengthened `Where It Fits`, `Customer Problems It Addresses`, `What It Does`, and `Validation Status` sections.
- Added `Presales Qualification Notes` and `What To Validate With Customer` sections where missing.
- Reduced source-ID density in opening paragraphs.
- Kept detailed source IDs, links, validation results, and open questions in evidence/validation sections.
- Added clearer Mermaid diagram captions.

## Evidence Preserved

Preserved:

- clickable Evidence Sources links
- source-backed draft notes
- document-level validation notes
- derived-source review-aid labels
- open questions
- excluded/restricted content notices
- review notes

No evidence layer was removed.

## Claims Reworded

Reworded for readability without changing claim strength:

- EtaPRO: power-generation performance and condition monitoring; Archive, VirtualPlant, APR, Predictor, monitoring/reporting utilities.
- Canary: industrial historian / time-series data foundation; collect, store, contextualize, visualize, and reuse plant data.
- IDBoxRT: operational intelligence / industrial data hub; connectors, preprocessing, assets/signals, dashboards, API-style exposure.
- LUCA BDS: BI / data integration / analytics layer; data access, query/data-flow organization, dashboards/reports/forms/navigation, shared analysis context.

## Claims Kept as Open Questions

Kept unresolved:

- EtaPRO deployment, protocol/API completeness, cybersecurity, system requirements, limitations, and IBM MAS comparison.
- Canary supported collectors/protocols, retention/compression, sizing, security, store-and-forward, API/Excel access, operational limits, and AVEVA PI comparison.
- IDBoxRT historian replacement, migration, AVEVA PI comparison, connector limits, API limits, deployment sizing, retention scale, and production operations.
- LUCA BDS connector details, deployment topology, security/access control, storage/caching behavior, performance limits, AI/LLM boundaries, and historian/APM/IIoT-platform positioning.

## Pricing / Commercial Content Check

Passed at content-review level.

No pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.

Existing restricted-source notices and commercial-exclusion language were preserved.

## Mermaid / Visual Caption Changes

Updated diagram captions on:

- EtaPRO
- Canary
- IDBoxRT
- LUCA BDS

Each caption now states what the diagram shows, which source evidence supports it, and what remains to validate.

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

## Next Recommended Batch

Continue M2 with one of the following focused validation batches:

1. Canary secondary validation using `SRC-CANARY-DOC-0002` and `SRC-CANARY-DOC-0003`.
2. IDBoxRT deployment/security follow-up using installation and Keycloak/access-control documents.
3. LUCA BDS technical-boundary validation if additional architecture, connector, deployment, or security documents are available.
4. AVEVA PI enrichment only after source audit and document-level evidence are ready.
