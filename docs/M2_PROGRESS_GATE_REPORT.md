# M2 Progress Gate Report

## Summary

M2 is active and progressing well, but it is not complete yet.

M1 is effectively complete: metadata validation and Docusaurus build have passed repeatedly, the local wiki has 32 markdown pages, and pages remain draft/private with conservative source-review language.

M2 has met the source registry threshold and has established a repeatable manual extraction workflow. The remaining gap is coverage: only four solution pages currently have `Source-Backed Draft Notes`, while the roadmap success criterion calls for at least 10 draft wiki pages created from sources.

## Roadmap Position

Current roadmap position: M2 - Source Registry + Manual Extraction.

Do not start M3 AI Extraction Prototype yet. Do not start M4 AI Q&A yet.

M2 should continue until source-backed draft coverage, document-level validation workflow, and source references are strong enough for a later AI extraction prototype.

## M1 Completion Check

| M1 Criterion | Status | Evidence |
|---|---|---|
| Local wiki runs/builds | Passed | `docs/M1_QUALITY_GATE_REPORT.md`; latest Batch reports also show successful builds. |
| Markdown/MDX content structure exists | Passed | 32 wiki pages exist under `content/wiki`. |
| Navigation sections exist | Passed | Solutions, capabilities, patterns, comparisons, and tender sections exist. |
| Metadata validation passes | Passed | Latest validation confirms 32 wiki pages. |
| Basic draft/private lifecycle exists | Passed | Scoped wiki pages are `status: draft` and `visibility: private`. |
| No M1 scope creep | Passed | No public portal, AI Q&A, backend, CRM, or SaaS scope detected in M1 gate. |

Assessment: M1 is complete enough for M2 continuation.

## M2 Success Criteria Check

| M2 Criterion | Status | Notes |
|---|---|---|
| At least 10 real sources registered | Met | `registry/sources-apm-iiot.yaml` has 11 real APM/IIoT source entries plus the APM/IIoT domain source. |
| Source metadata template / registry structure | Met | Registry includes IDs, titles, types, URLs, Drive IDs, confidentiality, priorities, statuses, related pages, notes, and document-level entries. |
| Manual import/extraction workflow | In progress | Batch 1, EtaPRO validation, EtaPRO inventory, Canary audit, and Canary validation reports show the workflow is established. |
| At least 10 draft wiki pages created from sources | Partially met | 26 scoped pages preserve non-empty `source_refs`, but only 4 pages currently have source-backed extraction notes. |
| Source references preserved | Met | Source refs are present on solution, capability, pattern, comparison, and tender pages; Batch 1.5 added `SRC-CANARY-DOC-0001` to Canary. |
| No restricted/commercial extraction | Met so far | Reports confirm pricing, licensing, discounts, proposal terms, and commercial content were excluded. |

Assessment: M2 is not complete; it needs focused extraction coverage work before M3.

## Source Registry Status

Registered located APM/IIoT sources:

- 1 source domain: `SRC-DOMAIN-APM-IIOT`.
- 11 real source entries: `SRC-APM-IIOT-0001` through `SRC-APM-IIOT-0011`.
- 22 confirmed document-level sources:
  - 10 EtaPRO document sources: `SRC-ETAPRO-DOC-0001` through `SRC-ETAPRO-DOC-0010`.
  - 12 Canary document sources: `SRC-CANARY-DOC-0001` through `SRC-CANARY-DOC-0012`.

IBM MAS registry status:

- `SRC-PORTFOLIO-IBM-MAS` exists as a source-domain stub.
- `SRC-IBM-MAS-PENDING-0001` is a placeholder only and should not count as a real source until exact source locations are known.

Restricted source status:

- `SRC-APM-IIOT-0002` remains restricted and deferred.
- Pricing/commercial material remains excluded from M2 wiki extraction.

## Manual Extraction Workflow Status

Workflow established:

1. Use `SRC-APM-IIOT-0001` Google Sheet for initial concise Batch 1 draft facts.
2. Audit product-specific source folders.
3. Promote exact documents to document-level source IDs only when titles, URLs, and Drive IDs are known.
4. Validate or refine Batch 1 draft facts using document-level sources.
5. Keep pages draft/private/low confidence.
6. Record validation and build results in batch reports.

Completed workflow examples:

- Batch 1: initial source-backed draft notes for IDBoxRT, Canary, AVEVA PI, and EtaPRO.
- Batch 1.2: EtaPRO document-level validation pilot using `SRC-ETAPRO-DOC-0001`.
- Batch 1.3: EtaPRO document inventory.
- Batch 1.4: Canary document audit.
- Batch 1.5: Canary document-level validation using `SRC-CANARY-DOC-0001`.

## Product Validation Status

| Product | Current Status | Next M2 Need |
|---|---|---|
| IDBoxRT | Batch 1 draft facts exist from `SRC-APM-IIOT-0001`; product folder audit still pending. | Audit source folder, create confirmed document-level sources, validate draft facts. |
| Canary | Batch 1 draft facts plus Batch 1.5 document-level validation from `SRC-CANARY-DOC-0001`. | Validate virtual views, collectors, integrations, limitations, and use cases from focused Canary documents. |
| AVEVA PI | Batch 1 draft facts exist from `SRC-APM-IIOT-0001`; document audit still pending. | Audit source folder, register exact document sources, validate product/component facts. |
| EtaPRO | Batch 1 draft facts, document-level pilot validation, and document inventory completed. | Continue validation using EtaPRO overview, technology, platform, and module documents. |
| AVEVA APM | Registered and stubbed in wiki, but no source-backed extraction notes yet. | Defer or include in a later M2 coverage batch after priority four products. |
| Litmus Edge | Registered and stubbed in wiki, but no source-backed extraction notes yet. | Defer or include in a later M2 coverage batch after priority four products. |
| AI PlantOps | Registered and stubbed in wiki, but no source-backed extraction notes yet. | Defer or include in a later M2 coverage batch after priority four products. |
| IBM MAS | Source-domain stub exists, exact real sources not registered. | Register exact source folders/documents before comparison validation. |

## Pages With Source-Backed Draft Notes

Pages with `## Source-Backed Draft Notes`:

- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/aveva-pi.md`
- `content/wiki/solutions/etapro.md`

Pages with `## Document-Level Validation Notes`:

- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/etapro.md`

Pages with non-empty `source_refs` in the scoped wiki sections: 26.

Scoped wiki pages reviewed: 31.

Total wiki pages: 32.

## Pages Still Only Stub/Draft Without Source-Backed Content

Solution pages:

- `content/wiki/solutions/ai-plantops.md`
- `content/wiki/solutions/aveva-apm.md`
- `content/wiki/solutions/ibm-mas.md`
- `content/wiki/solutions/litmus-edge.md`

Capability pages:

- `content/wiki/capabilities/apm.md`
- `content/wiki/capabilities/condition-monitoring.md`
- `content/wiki/capabilities/iiot-platform.md`
- `content/wiki/capabilities/industrial-historian.md`
- `content/wiki/capabilities/predictive-maintenance.md`

Pattern pages:

- `content/wiki/patterns/edge-to-center.md`
- `content/wiki/patterns/historian-to-apm.md`
- `content/wiki/patterns/maximo-integration.md`
- `content/wiki/patterns/mqtt-sparkplug.md`
- `content/wiki/patterns/opc-ua-integration.md`
- `content/wiki/patterns/scada-dcs-data-ingestion.md`

Comparison pages:

- `content/wiki/comparisons/apm-solution-landscape.md`
- `content/wiki/comparisons/canary-vs-aveva-pi.md`
- `content/wiki/comparisons/etapro-vs-mas-apm.md`
- `content/wiki/comparisons/idboxrt-vs-historian.md`

Tender pages:

- `content/wiki/tender/apm-iiot-compliance-notes.md`
- `content/wiki/tender/apm-requirement-mapping.md`
- `content/wiki/tender/historian-requirement-mapping.md`

Index pages intentionally remain lightweight navigation pages and are not counted as extraction targets.

## Gaps Blocking M2 Completion

- Only 4 pages have source-backed draft extraction notes; M2 needs at least 10 source-created draft pages by the roadmap criterion.
- IDBoxRT still needs product-specific source folder audit and document-level validation.
- AVEVA PI still needs product-specific source folder audit and document-level validation.
- Canary needs additional validation from secondary documents before architecture, integration, limitations, and comparison inputs are reliable.
- EtaPRO has inventory coverage but still needs technical validation from the confirmed documents.
- IBM MAS has only a placeholder; exact IBM MAS sources are needed before EtaPRO vs IBM MAS comparison validation.
- Comparison and tender pages remain mostly structured draft pages with `To validate` language; this is correct, but not yet M2-complete evidence coverage.

## What Should Not Be Done Yet

Do not start:

- M3 AI Extraction Prototype.
- M4 AI Q&A.
- Backend, API, database, authentication, crawler, or SaaS scope.
- Public portal or landing page.
- CRM or NOVA integration.
- Knowledge Graph, Modes, Skills execution, or AI Orchestration.
- Public web enrichment or scraping.
- Pricing, licensing, discounts, proposal terms, or commercial extraction.

## Recommended Remaining M2 Batches

Smallest focused M2 path before M3:

1. IDBoxRT document audit and validation.
   - Audit `SRC-APM-IIOT-0011`.
   - Register exact document-level sources only when confirmed.
   - Validate `content/wiki/solutions/idboxrt.md`.

2. AVEVA PI document audit and validation.
   - Audit `SRC-APM-IIOT-0008`.
   - Register exact document-level sources only when confirmed.
   - Validate `content/wiki/solutions/aveva-pi.md`.

3. Canary focused follow-up validation.
   - Use `SRC-CANARY-DOC-0003` for virtual views/contextualization.
   - Use collector/integration documents for collection and interface claims.
   - Keep AVEVA PI comparison conclusions deferred.

4. EtaPRO technical validation.
   - Use the confirmed EtaPRO documents for module boundaries, architecture, integration, deployment, and limitations.

5. Add source-backed notes to selected neutral pages only after solution evidence supports them.
   - Candidate pages: `industrial-historian.md`, `iiot-platform.md`, `apm.md`, `historian-requirement-mapping.md`, `scada-dcs-data-ingestion.md`, and `apm-solution-landscape.md`.
   - Keep all notes conservative and source-referenced.

6. Register exact IBM MAS sources or explicitly defer MAS comparison.
   - Do not validate `etapro-vs-mas-apm.md` until exact IBM MAS sources exist.

## Decision: Continue M2 or Start M3 Later

Decision: continue M2.

M2 is healthy and nearly through the workflow-design risk, but it is still incomplete on source-backed page coverage. Start M3 later only after at least 10 source-backed draft pages exist, IDBoxRT and AVEVA PI have document-level validation paths, and the remaining high-priority comparison/tender pages have enough source references to avoid unsupported extraction automation.
