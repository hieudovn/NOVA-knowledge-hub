# NotebookLM Extracted Data Usage Guide

## Purpose

NotebookLM Extracted Data folders are allowed in M2 as derived review aids.

They are intended to speed manual extraction by pointing reviewers toward candidate topics, open questions, and possible source-document mappings. They are not primary evidence and must not be treated as approved knowledge.

## Source Type Definition

`notebooklm_markdown` means:

- The file is generated or summarized by NotebookLM.
- The file may combine, compress, omit, or reinterpret source material.
- The file can help plan extraction work.
- The file cannot independently validate a wiki claim.

Use `derived_sources` in the registry for these files so they remain separate from primary documents in `document_sources`.

Each registered NotebookLM file should include:

- `source_kind: derived_source`;
- `type: notebooklm_markdown`;
- `validation_status: needs_source_validation`;
- `pricing_risk`;
- `restricted_content_policy`;
- exact Drive URL and Drive ID.

Folder entries may be registered as `type: notebooklm_extracted_data_folder` for audit traceability, but wiki enrichment should reference file-level entries only after primary-source validation planning.

## How Extracted Data Fits the M2 Roadmap

M2 remains a manual source-backed extraction phase.

NotebookLM Extracted Data can support M2 by:

- identifying candidate facts to verify;
- grouping business, technical, use-case, and deployment themes;
- helping reviewers choose which primary document to inspect next;
- creating validation checklists.

NotebookLM Extracted Data must not move the project into M3 AI Extraction Prototype.

For multi-solution registration, keep the workflow narrow:

1. Locate the registered product source folder.
2. Locate the `00_Extracted Data` or equivalent extracted-data folder.
3. Register only exact markdown files that are visible in Drive.
4. Do not create placeholder file entries.
5. Do not modify wiki pages during registration-only batches.
6. Defer claim extraction until a product-specific validation batch.

## What Can Be Used

Allowed uses:

- Candidate topic discovery.
- Draft extraction planning.
- Open-question generation.
- Mapping candidate claims to primary source documents.
- Identifying likely areas for solution, capability, tender, or comparison review.

## What Must Not Be Used

Do not use NotebookLM Extracted Data to:

- make final vendor claims;
- replace primary source review;
- validate architecture, integration, deployment, limitation, or comparison claims on its own;
- copy long raw content into wiki pages;
- add pricing, licensing, discounts, proposal terms, commercial terms, or roadmap commitments into wiki pages;
- update comparison pages with final conclusions;
- trigger backend, API, crawler, AI Q&A, Knowledge Graph, CRM, public portal, or M3 work.

## How To Map Extracted Data Into Wiki Pages

Recommended workflow:

1. Read the derived source only to identify candidate topics.
2. Link each candidate topic to one or more primary `document_sources`.
3. Validate the topic against the primary source.
4. Add only concise paraphrased notes to wiki pages.
5. Cite both the primary source and, where useful, the derived source as a review aid.
6. Mark unresolved items as `Still to validate`.

Do not add wiki content directly from a derived source without source validation.

## Evidence Labeling Rules

Use conservative labels:

- `Candidate from derived source`
- `Validated by primary source`
- `Refined after primary source review`
- `Still to validate`
- `Not supported by reviewed primary source`

Do not use labels such as `Approved`, `Confirmed`, or `Final` for NotebookLM-derived notes.

## Review Rules

- Every derived source must have `validation_status: needs_source_validation` until primary source review is complete.
- Each retained wiki fact must reference a primary source ID.
- Derived sources may be referenced only as extraction aids.
- Human review is required before moving any page beyond `draft`.
- Keep all edited wiki pages `visibility: private` and `confidence: low` during M2.

## Commercial / Pricing Handling

Commercial material remains excluded from wiki extraction.

Do not extract:

- pricing;
- licensing;
- discounts;
- commercial quotes;
- proposal prices;
- budgetary prices;
- BOM prices;
- service fees;
- support fees;
- training fees;
- commercial terms;
- commercial BOM details;
- commercial roadmap commitments;
- sales commitments or contractual language.

Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.

Case study information about general benefits, avoided cost, savings, ROI, efficiency improvement, downtime reduction, production gain, or maintenance cost avoidance may be used only if it does not disclose specific vendor pricing, license fees, discounts, proposal prices, or commercial terms.

If a derived source mentions BOM, roadmap, proposal, pricing, or commercial topics, record only that those topics are restricted or deferred.

If a source contains pricing and technical knowledge together, extract only the technical knowledge into wiki pages and mark the pricing section as excluded/restricted.

Any pricing source remains restricted and must not be used for public/internal wiki knowledge enrichment.

## Pricing Risk Classification

Use `pricing_risk` to flag how carefully a derived source must be handled:

- `high`: filename or reviewed content mentions BOM, pricing, license, budget, proposal, fee, quote, support fee, training fee, or commercial terms.
- `possible`: filename or reviewed content includes deployment, project scope, implementation, proposal, or roadmap content where commercial detail may appear.
- `none`: file appears to be technical, capability, extracted-key, or business-summary material without commercial indicators.

When risk is uncertain, use the stricter classification. `pricing_risk` does not approve or reject a file; it controls review caution and exclusion handling.

## Recommended Enrichment Order

For the current M2 derived-source registration set, use this conservative order:

1. EtaPRO technical file, because the EtaPRO validation workflow already exists.
2. Canary product overview / historian positioning.
3. IDBoxRT technical or business summary.
4. LUCA BDS only after confirming whether it belongs in M1/M2 wiki scope.

## Acceptance Criteria

A NotebookLM Extracted Data batch is acceptable when:

- derived sources are registered separately from primary sources;
- exact Drive IDs and URLs are preserved where available;
- no long raw content is copied into the repository;
- no wiki content is updated directly from derived summaries;
- no pricing, licensing, discounts, proposal terms, or commercial details are added;
- all derived sources remain `needs_source_validation`;
- metadata validation passes;
- Docusaurus build passes.
