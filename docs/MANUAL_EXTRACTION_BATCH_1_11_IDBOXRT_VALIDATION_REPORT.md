# Manual Extraction Batch 1.11 IDBoxRT Validation Report

## Summary

Validated and refined a narrow set of IDBoxRT architecture, connector, deployment, security, and product-boundary claims using selected primary document-level sources.

This batch stayed within M2 Source Registry + Manual Extraction. It did not add backend, API service, database, authentication implementation, crawler, AI Q&A, CRM/NOVA integration, public portal, landing page generator, Knowledge Graph, Modes, Skills, AI orchestration, comparison-page updates, AVEVA PI updates, Canary updates, EtaPRO updates, or commercial content.

## Primary Sources Reviewed

Reviewed primary sources:

- `SRC-IDBOXRT-DOC-0001` — `IDboxRT description and technical architecture.docx`
- `SRC-IDBOXRT-DOC-0004` — `IDboxRT connectors.pdf`
- `SRC-IDBOXRT-DOC-0002` — `IDboxRT documentation.pdf`

Optional supporting source not reviewed in this batch:

- `SRC-IDBOXRT-DOC-0003` — `IDbox User Manual.pdf`

Not used for claim validation:

- NotebookLM-derived sources.
- `SRC-IDBOXRT-EXTRACT-0004`.
- Pricing/BOM/proposal/commercial folders.
- IDBoxRT comparison, migration-path, or historian-positioning documents.

## Page Updated

- `content/wiki/solutions/idboxrt.md`

The page remains:

- `status: draft`
- `visibility: private`
- `confidence: low`

Registry traceability:

- Set `SRC-IDBOXRT-DOC-0001`, `SRC-IDBOXRT-DOC-0002`, and `SRC-IDBOXRT-DOC-0004` extraction status to `in_progress`.

## Validated Claims

Validated by selected primary sources:

- IDBoxRT is positioned as an operational intelligence platform and information data hub.
- IDBoxRT integrates, processes, analyzes, and visualizes historical and real-time operational data.
- IDBoxRT can acquire data from industrial, control, operational, corporate, file, database, IoT, and service-oriented source categories.
- IDBoxRT has connector categories for industrial standards, proprietary protocols, protections, SCADA/other systems, IoT connectors, external services, and other connectors.
- Representative connector areas include Modbus, OPC, IEC/DNP3/ICCP, Siemens, Rockwell/CIP, MQTT, RabbitMQ, BACnet/IP, PI/PI-AF, IP21, Wonderware, Citect, WinCC, PCS7, Maximo, SAP PM, SQL Server, Oracle, MySQL, ArcGIS, Excel, SharePoint, file readers, and API POST JSON.
- IDBoxRT supports REST API exposure and third-party data exposure paths.
- IDBoxRT documentation supports security groups, users, roles, permissions, access groups, sessions, signals, assets, dashboards, reports, alarms, events, notifications, charts, maps, and synoptics.

## Refined Claims

Refined from the prior sheet-backed draft:

- Product positioning moved from a broad IIoT candidate to a source-backed operational intelligence / industrial data hub draft.
- Architecture moved from generic conceptual flow to connector, acquisition, processing, persistence, asset context, API, web/mobile, and visualization layers.
- Integration notes now distinguish connector relevance from historian-replacement claims.
- Deployment notes now identify persistence strategies, storage tiers, latest-sample storage, time-series storage, asset hierarchy storage, and access-control concepts.
- Dashboard/reporting notes now reference dashboards, reports, charts, synoptics, maps, alarms, events, and notifications.
- Security notes now reference product administration concepts and Keycloak/LDAP/Active Directory support as product facts only, not wiki implementation plans.

## Claims Still To Validate

Still unresolved:

- Vendor legal identity and current product ownership.
- Detailed production deployment topology, sizing, redundancy, backup/restore, and network-zone requirements.
- Operational runbook requirements.
- Connector limitations, version constraints, and customer-specific connector suitability.
- API limits, throughput, authorization patterns, and external-system responsibility boundaries.
- Data retention limits, scale limits, and database feature differences.
- KPI/calculation governance for production use.
- Security details that are product facts versus customer-specific implementation design.
- Historian-grade storage claims, historian replacement claims, migration claims, and IDBoxRT vs AVEVA PI conclusions.
- Final product limitations and product boundaries.

## Claims Excluded

Excluded from this batch:

- IDBoxRT vs AVEVA PI conclusions.
- IDBoxRT vs historian conclusions.
- Migration-path conclusions.
- Historian replacement conclusions.
- Case-study benefit claims.
- NotebookLM-only claims.
- External-service connector names or source details that imply commercial market-price data.
- Pricing, licensing, BOM, proposal, quote, fee, discount, and other commercial content.

## Pricing / Commercial Content Check

Passed.

- No pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.
- `SRC-IDBOXRT-EXTRACT-0004` remains excluded from wiki enrichment.
- Mixed or possible commercial sources remain future validation targets only.

## Mermaid / Visual Content Changes

Updated the existing Mermaid architecture diagram from a generic sheet-backed flow to a source-backed conceptual draft:

- plant and enterprise sources;
- IDBoxRT connectors/drivers;
- streaming and acquisition layer;
- preprocessing/tasks/calculations;
- persistence layer;
- asset and signal context;
- gateway/API layer;
- web/mobile application;
- synoptics, dashboards, charts, reports, maps, and alarms;
- external systems and analytics tools.

The diagram remains conceptual and does not claim final deployment topology, sizing, redundancy, or implementation design.

## Evidence Link Check

Passed at content level.

- Existing clickable Evidence Sources links were retained.
- `SRC-IDBOXRT-DOC-0001`, `SRC-IDBOXRT-DOC-0002`, and `SRC-IDBOXRT-DOC-0004` are marked as reviewed/in progress on the page.
- NotebookLM-derived sources remain labeled as review aids only.
- The high pricing-risk derived source remains unlinked as wiki evidence.

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

- `docker compose down`
- `docker compose up -d --build nova-wiki`
- `docker compose ps` shows `nova-wiki` running on `0.0.0.0:3100->3000/tcp`.
- `curl.exe -I http://localhost:3100/solutions/idboxrt` returned HTTP 200.
- Docker-served IDBoxRT page includes `Validated by source`, `SRC-IDBOXRT-DOC-0001`, and `SRC-IDBOXRT-DOC-0004`.

## Next Recommended Batch

Continue M2 with a focused IDBoxRT deployment and security follow-up:

1. Review `SRC-IDBOXRT-DOC-0010` for installation and system requirements.
2. Review `SRC-IDBOXRT-DOC-0011` for Keycloak/access-control deployment details.
3. Review `SRC-IDBOXRT-DOC-0003` for detailed user workflows if the wiki needs stronger user-facing feature descriptions.
4. Keep historian comparison, migration, and AVEVA PI comparison conclusions deferred until a separate comparison batch.
