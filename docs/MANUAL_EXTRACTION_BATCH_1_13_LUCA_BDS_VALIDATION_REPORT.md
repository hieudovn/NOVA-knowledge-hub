# Manual Extraction Batch 1.13 LUCA BDS Validation Report

## Summary

Batch 1.13 moved LUCA BDS from a minimal scope-fit page to a controlled draft solution page.

The page remains in M2 only: source-backed manual extraction, validation preparation, and conservative draft enrichment. No backend, API, database, authentication, crawler, AI Q&A, CRM/NOVA integration, public portal, landing page generator, Knowledge Graph, Modes, Skills, AI orchestration, comparison page, or commercial content was added.

## Sources Used

| Source ID | Source Type | Use in Batch |
|---|---|---|
| `SRC-APM-IIOT-0004` | Internal source folder | Parent LUCA BDS source folder |
| `SRC-LUCA-BDS-DOC-0001` | Internal primary PDF | Primary overview evidence for controlled draft enrichment |
| `SRC-LUCA-BDS-EXTRACT-0001` | NotebookLM markdown | Derived review aid only |
| `SRC-LUCA-BDS-EXTRACT-0002` | NotebookLM markdown | Derived review aid only |
| `SRC-LUCA-BDS-EXTRACT-0003` | NotebookLM markdown | Derived review aid only |
| `SRC-LUCA-BDS-WEB-0001` | Official website public reference | Registered for reviewer traceability and future terminology review |

## Primary Source Reviewed

`SRC-LUCA-BDS-DOC-0001` - `LUCABDS_2026 [EN].pdf`

Reviewed as the primary internal source for:

- official product positioning
- relationship to APM & IIoT scope
- business intelligence / analytics positioning
- data integration and access concepts
- high-level data flow
- dashboards, reports, charts, forms, and app-like views
- candidate industrial and utility use cases
- deployment and local-control themes requiring further validation
- AI/LLM material requiring conservative handling

## Derived Sources Used as Review Aids

The following sources were treated only as NotebookLM-derived review aids:

- `SRC-LUCA-BDS-EXTRACT-0001`
- `SRC-LUCA-BDS-EXTRACT-0002`
- `SRC-LUCA-BDS-EXTRACT-0003`

They were not used to approve final wiki claims. `SRC-LUCA-BDS-EXTRACT-0004` was not used for enrichment because it is high pricing/BOM risk.

## Website Reference Used

Registered:

- `SRC-LUCA-BDS-WEB-0001` - Official LUCA BDS Website
- URL: `https://www.luca-bds.com/`
- Access date recorded: `2026-06-20`

The website is registered as a public supporting reference. Local shell access to the site was unavailable during this batch, so wiki claims remain grounded primarily in `SRC-LUCA-BDS-DOC-0001`. The website should be rechecked by a human reviewer before stronger public-positioning or terminology claims are added.

## Scope Decision After Validation

Decision: `in_scope_for_m2_solution_page`, with controlled overview enrichment only.

LUCA BDS fits the current M2 Tech Knowledge Base as a business intelligence, data integration, and analytics solution related to the APM & IIoT portfolio.

It is not yet validated as:

- an IIoT platform
- a historian
- an APM system
- an AI platform
- a replacement for any other product

## Page Updated

Updated:

- `content/wiki/solutions/luca-bds.md`

The page remains:

- `status: draft`
- `visibility: private`
- `confidence: low`

## Validated Claims

Source-backed by `SRC-LUCA-BDS-DOC-0001`:

- LUCA BDS can be described as a business intelligence / data integration / analytics solution in this wiki.
- LUCA BDS addresses access to and analysis of data from multiple systems.
- Dashboards, charts/graphs, and reports are supported output patterns.
- Query-driven organization of dashboards, reports, graphs, forms, navigation trees, and app-like views is supported by the primary overview.
- LUCA BDS has candidate industrial and utility use-case relevance.

## Refined Claims

The following claims were kept but weakened:

- Real-time BI is retained as source-backed positioning, but the technical meaning remains to validate.
- Live-query / no-copy behavior is retained as source-backed positioning, but architecture, connector behavior, and performance boundaries remain to validate.
- On-premises/local-control positioning is retained, but deployment topology and security controls remain to validate.
- AI/LLM material is acknowledged only as LUCA BDS product-review context, not as NOVA AI functionality or project scope.

## Claims Still To Validate

- Exact supported connectors and source-system interfaces.
- Deployment model and infrastructure boundaries.
- Security, access control, and governance model.
- Whether and how data is stored, cached, replicated, or queried live.
- Technical meaning of real-time BI.
- Data volume, refresh-rate, and performance limitations.
- Product boundaries relative to historian, IIoT platform, APM, operational data platform, and BI-layer categories.
- Safe handling of AI/LLM-related product statements.

## Claims Excluded

Excluded from wiki knowledge:

- pricing, licensing, discounts, quotes, proposal prices, budgetary prices, BOM prices, fees, and commercial terms
- commercial calls to action, contact/sales form language, procurement language, and package language
- quantified case-study benefits
- comparison claims against IDBoxRT, Canary, AVEVA PI, EtaPRO, IBM MAS, or historian products
- broad AI platform or NOVA AI claims

## Pricing / Commercial Content Check

Passed.

No pricing, licensing, discount, commercial quote, proposal price, budgetary price, BOM price, service fee, support fee, training fee, or commercial term was added to the wiki page.

`SRC-LUCA-BDS-EXTRACT-0004` remains restricted and excluded from wiki enrichment.

## AI / LLM Claim Handling

AI/LLM-related source material was handled conservatively:

- acknowledged only as product-specific review context
- not used to expand NOVA Knowledge Hub scope
- not described as AI Q&A, AI orchestration, Knowledge Graph, Modes, or Skills
- left as `Still to validate` for implementation, security, and product-boundary review

## Mermaid / Visual Content Changes

Added a conceptual Mermaid data-flow diagram to `content/wiki/solutions/luca-bds.md`.

The diagram is intentionally high level and based on `SRC-LUCA-BDS-DOC-0001` concepts:

- business / operational data sources
- LUCA BDS queries / connectors
- data integration / business data service layer
- reports, graphs, dashboards, forms, and navigation trees
- LUCA apps / shared workspaces
- business / operational users

No vendor images or binary assets were copied.

## Evidence Link Check

The LUCA BDS Evidence Sources table includes clickable links for:

- parent source folder
- primary PDF
- official website public reference
- derived review aids `0001`, `0002`, and `0003`

`SRC-LUCA-BDS-EXTRACT-0004` is listed without a wiki evidence link because it is restricted/high pricing-risk.

## Registry Updates

Updated `registry/sources-apm-iiot.yaml`:

- Set `SRC-LUCA-BDS-DOC-0001` `extraction_status` to `in_progress`.
- Added `SRC-LUCA-BDS-WEB-0001` under `public_reference_sources`.
- Preserved existing source IDs, Drive URLs, and derived source entries.
- Did not mark validation complete.

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
- `curl.exe -I http://localhost:3100/solutions/luca-bds` returned HTTP 200.

## Next Recommended Batch

Manual Extraction Batch 1.14 should validate LUCA BDS technical boundaries:

1. Find or request architecture, connector, deployment, and security documents.
2. Validate live-query/no-copy behavior and any data storage/caching assumptions.
3. Validate AI/LLM-related product claims only if product-specific technical sources are available.
4. Keep commercial, BOM, proposal, and pricing content excluded.
5. Defer comparison with IDBoxRT, Canary, AVEVA PI, EtaPRO, IBM MAS, and historians.
