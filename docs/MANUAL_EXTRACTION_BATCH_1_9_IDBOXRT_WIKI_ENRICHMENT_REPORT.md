# Manual Extraction Batch 1.9 IDBoxRT Wiki Enrichment Report

## Summary

Enriched `content/wiki/solutions/idboxrt.md` into a readable draft technical solution page following the EtaPRO and Canary enrichment pattern.

The update stayed within M2 Source Registry + Manual Extraction. It did not add backend, API, database, authentication, crawler, AI Q&A, CRM, public portal, landing page generator, Knowledge Graph, Modes, Skills, AI orchestration, comparison-page updates, or commercial content.

## Page Updated

- `content/wiki/solutions/idboxrt.md`

The page remains:

- `status: draft`
- `visibility: private`
- `confidence: low`

## Source IDs Used

Primary / registered source context:

- `SRC-APM-IIOT-0011`
- `SRC-APM-IIOT-0001`

`SRC-APM-IIOT-0001` is the only source used as source-backed draft evidence for retained IDBoxRT facts in this enrichment pass. `SRC-APM-IIOT-0011` is the registered IDBoxRT source folder and validation target; its document-level audit remains pending.

## Derived Sources Used as Review Aids

- `SRC-IDBOXRT-EXTRACT-0001`
- `SRC-IDBOXRT-EXTRACT-0002`
- `SRC-IDBOXRT-EXTRACT-0003`

These were treated only as derived review aids. They do not independently approve wiki claims.

`SRC-IDBOXRT-EXTRACT-0004` was not used for enrichment because it has high pricing/BOM risk.

## Sections Added

- Executive Summary
- Product Positioning
- Architecture Overview
- Core Components
- Integration Notes
- Deployment Notes
- Typical Use Cases
- Evidence Sources
- Source-Backed Draft Notes
- Open Questions
- Excluded Content
- Related Capability Pages
- Related Pattern Pages
- Review Notes

## Mermaid / Visual Content Added

Added a conceptual Mermaid diagram showing the draft IDBoxRT data-flow position:

- plant and equipment data sources;
- IDBoxRT data acquisition / connectors;
- operational data hub / standardization layer;
- contextualization, preprocessing, and KPI calculation;
- dashboards, reporting, analytics, and user groups;
- ERP / BI / enterprise systems.

The diagram is source-backed only at a high conceptual level by `SRC-APM-IIOT-0001`. Product component names, supported source systems, connector details, deployment topology, and external-system interfaces remain marked as still to validate.

## Claims Added

Source-backed draft claims from `SRC-APM-IIOT-0001`:

- IDBoxRT is positioned as a real-time operational data monitoring and analysis platform.
- IDBoxRT is currently treated in this wiki as a candidate IIoT / operational intelligence / industrial data hub solution.
- Candidate capability areas include heterogeneous data collection, operational data standardization, signal contextualization, preprocessing, KPI calculation, and interactive reporting.
- Candidate use cases include plant operations visibility, energy and asset data consolidation, operational KPI calculation, and interactive reporting.
- IDBoxRT should not yet be treated as an approved historian replacement or full APM platform.

## Claims Still To Validate

- Authoritative IDBoxRT product documents and document-level source IDs.
- Vendor legal identity, current product ownership, and current naming.
- Official architecture and module/component names.
- Supported protocols, APIs, connectors, and source-system interfaces.
- Whether IDBoxRT stores time-series data, consumes historian data, complements historian systems, or overlaps historian use cases.
- Dashboard, reporting, analytics, KPI, and calculation product boundaries.
- On-premises, cloud, hybrid, and edge-to-center deployment details.
- Infrastructure, sizing, network, security, user access, backup, and operational requirements.
- Limitations for retention, analytics, integration, scale, and enterprise reporting.
- Any IDBoxRT-vs-historian comparison claims.

## Excluded Pricing / Commercial Content

- No pricing, licensing, discounts, quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.
- `SRC-IDBOXRT-EXTRACT-0004` was explicitly excluded from enrichment except as a restricted content reminder.
- Case-study benefits and quantified outcomes remain deferred until primary case-study sources are reviewed and commercial content is excluded.

## Validation Result

Passed.

- `npm.cmd run validate:metadata`
- Validated metadata for 32 wiki pages.

## Build Result

Passed.

- `npm.cmd run build`
- Docusaurus production build completed successfully.

## Docker Preview Result

Passed.

- `docker compose up -d --build nova-wiki`
- `docker compose ps` shows `nova-wiki` running on `0.0.0.0:3100->3000/tcp`.
- `curl.exe -I http://localhost:3100/solutions/idboxrt` returned HTTP 200.
- Docker-served IDBoxRT page includes `Executive Summary`, clickable `Open source` evidence links, Google Sheet / Google Drive links, and the restricted-source notice for `SRC-IDBOXRT-EXTRACT-0004`.
- Docker-served HTML includes Mermaid SVG output, confirming the diagram is processed by the configured Mermaid renderer.

## Next Recommended Batch

Continue M2 with a focused IDBoxRT source-folder audit:

1. Identify exact IDBoxRT product documents inside `SRC-APM-IIOT-0011`.
2. Register confirmed document-level sources using the existing source registry structure.
3. Validate architecture, integration, deployment, and limitation claims against primary documents.
4. Keep IDBoxRT-vs-historian comparison conclusions deferred until source-backed validation is complete.
