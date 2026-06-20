# Manual Extraction Batch 1.8 Canary Wiki Enrichment Report

## Summary

Enriched `content/wiki/solutions/canary.md` into a readable draft technical solution page following the EtaPRO enrichment pattern.

The update stayed within M2 Source Registry + Manual Extraction. It did not add backend, API, database, authentication, crawler, AI Q&A, CRM, public portal, landing page generator, Knowledge Graph, Modes, Skills, AI orchestration, comparison conclusions, AVEVA PI updates, or commercial content.

## Page Updated

- `content/wiki/solutions/canary.md`

The page remains:

- `status: draft`
- `visibility: private`
- `confidence: low`

## Source IDs Used

Primary / registered source context:

- `SRC-APM-IIOT-0010`
- `SRC-APM-IIOT-0001`
- `SRC-CANARY-DOC-0001`
- `SRC-CANARY-DOC-0002`
- `SRC-CANARY-DOC-0003`

`SRC-CANARY-DOC-0001` is the only Canary document used as reviewed primary evidence for retained draft facts in this enrichment pass. `SRC-CANARY-DOC-0002` and `SRC-CANARY-DOC-0003` are listed as validation targets, not as fully reviewed evidence.

## Derived Sources Used as Review Aids

- `SRC-CANARY-EXTRACT-0001`
- `SRC-CANARY-EXTRACT-0002`
- `SRC-CANARY-EXTRACT-0003`

These were treated only as derived review aids. They do not independently approve wiki claims.

`SRC-CANARY-EXTRACT-0004` was not used for enrichment because it has high pricing/BOM risk.

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
- Document-Level Validation Notes
- Open Questions
- Excluded Content
- Review Notes

## Mermaid / Visual Content Added

Added a conceptual Mermaid diagram showing the draft Canary historian data flow:

- plant OT systems;
- Canary collectors / interfaces;
- historian time-series storage;
- Views / contextualized data layer;
- Axiom / dashboards / trend analysis;
- operations, engineering, and reliability users;
- external analytics / enterprise systems.

The diagram is source-backed at a high level by `SRC-CANARY-DOC-0001`. Detailed collector, protocol, deployment, and external-system claims remain marked as still to validate.

## Claims Added

Source-backed draft claims from `SRC-CANARY-DOC-0001`:

- Canary is positioned as historian technology for industrial automation.
- Canary is primarily treated as an industrial historian candidate in this wiki.
- Reviewed evidence supports high-level collection, historian storage, virtual views, asset modeling, Axiom visualization, calculation server, event monitoring, and general connector framing.
- Canary should remain historian-centered and should not yet be treated as a broad APM or general-purpose IIoT platform.

## Claims Still To Validate

- Vendor legal identity and country.
- Exact supported collectors, protocols, and source-system interfaces.
- Retention behavior, compression model, performance, and sizing assumptions.
- Excel access, API-style access, and downstream analytics access.
- Edge, site, enterprise, cloud, and local-to-central deployment architecture.
- Store-and-forward behavior, if supported by current Canary deployment documentation.
- Security model, access controls, backup/restore, and operational limits.
- Technical product/module boundaries versus restricted licensing or commercial boundaries.
- Virtual Views, namespace strategy, and asset-modeling details from `SRC-CANARY-DOC-0003`.
- Canary vs AVEVA PI comparison criteria and conclusions.

## Excluded Pricing / Commercial Content

- No pricing, licensing, discounts, quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.
- `SRC-CANARY-EXTRACT-0004` was explicitly excluded from enrichment except as a restricted content reminder.
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

- `docker compose build nova-wiki`
- `docker compose up -d --remove-orphans nova-wiki`
- `docker compose down`
- `docker compose up -d --build nova-wiki`
- `docker compose ps` shows `nova-wiki` running on `0.0.0.0:3100->3000/tcp`.
- `curl.exe -I http://localhost:3100/solutions/canary` returned HTTP 200.
- `http://localhost:3100/solutions/canary/` returned HTTP 200.
- Docker-served Canary page includes `Executive Summary`, clickable `Open source` evidence links, Google Drive / Google Docs links, and the restricted-source notice for `SRC-CANARY-EXTRACT-0004`.

Docker preview route note:

- Nginx was adjusted to serve extensionless Docusaurus document routes such as `/solutions/canary` directly, avoiding a container-port redirect to `localhost:3000`.

## Next Recommended Batch

Continue M2 with a focused Canary secondary validation pass:

1. Review `SRC-CANARY-DOC-0003` for Virtual Views, contextualization, asset modeling, and namespace strategy.
2. Review a collector-focused Canary document for supported collectors and integration interfaces.
3. Keep Canary vs AVEVA PI conclusions deferred until AVEVA PI document sources are reviewed.
