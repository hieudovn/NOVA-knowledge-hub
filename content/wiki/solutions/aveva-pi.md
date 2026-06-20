---
title: AVEVA PI
type: solution
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - aveva-pi
  - historian
  - industrial-data
source_refs:
  - source_id: SRC-APM-IIOT-0008
    title: AVEVA PI
  - source_id: SRC-APM-IIOT-0001
    title: AVENUE APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# AVEVA PI

## Summary

AVEVA PI is a draft solution page in the industrial historian and operational data knowledge base.

In NOVA Knowledge Hub M1, this page acts as a placeholder for organizing reviewed AVEVA PI knowledge before it is used for historian comparisons, architecture patterns, or tender preparation.

## Scope

- In scope:
  - AVEVA PI as a candidate industrial historian and operational data solution
  - historian-related solution mapping
  - links to related capability and pattern pages
  - source-backed notes for comparison and tender preparation
- Out of scope for this page:
  - final vendor claims before source review
  - pricing, licensing, or commercial terms
  - public marketing content
  - unsupported migration, replacement, or competitive claims

## Problem It Solves

- Industrial plants need a trusted way to capture, store, retrieve, and use operational time-series data.
- Engineering, operations, and analytics teams need access to historical data for troubleshooting, reporting, monitoring, and analysis.
- Presales and tender teams need to distinguish historian scope from IIoT platform, APM, dashboard, and enterprise reporting scope.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Time-series historian | Candidate area for source review; confirm storage, retention, retrieval, and data management scope. | `SRC-APM-IIOT-0008` |
| Data collection | Candidate area for source review; confirm interfaces, collectors, and supported source systems. | `SRC-APM-IIOT-0008` |
| Context model | Candidate area for source review; confirm how asset or operational context is modeled. | `SRC-APM-IIOT-0008` |
| Data access | Candidate area for source review; confirm reporting, API, integration, or downstream data access options. | `SRC-APM-IIOT-0008` |

## Architecture Notes

- Document server components, interfaces, security model, availability options, and integration targets after source review.
- Separate confirmed AVEVA PI architecture from general historian concepts.
- Use pattern pages for reusable ingestion, historian-to-APM, and enterprise integration flows.

## Tender Notes

- Map requirements around historian, integration, retention, reporting, and availability.
- Track any restricted commercial notes outside public content.
- Separate confirmed AVEVA PI fit from assumptions or project-specific interpretations.

## Related Capability Pages

- [Industrial Historian](../capabilities/industrial-historian)
- [IIoT Platform](../capabilities/iiot-platform)
- [Asset Performance Management](../capabilities/apm)

## Related Pattern Pages

- [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion)
- [Historian to APM](../patterns/historian-to-apm)
- [OPC UA Integration](../patterns/opc-ua-integration)

## Source-Backed Draft Notes

### Source Coverage

| Source ID | Source Title | Extraction Status | Notes |
|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | In progress | Main source used for this draft extraction batch. |
| `SRC-APM-IIOT-0008` | AVEVA PI | Planned | Registered source folder exists; detailed source documents still need to be identified and reviewed. |

### Draft Facts from Source

| Topic | Draft Note | Evidence Source | Review Status |
|---|---|---|---|
| General concept | The sheet positions AVEVA PI System as industrial data management infrastructure for collecting, contextualizing, and analyzing real-time operational data. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Vendor | The sheet lists AVEVA, Schneider Electric, as the vendor context. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Problems solved | The sheet associates AVEVA PI with fragmented legacy data, operational silos, emissions tracking challenges, and enterprise-scale performance optimization needs. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Core capabilities | The sheet lists PI Interfaces/Connectors, PI Server with Data Archive and Asset Framework, and PI Vision/CONNECT as architecture or capability areas to validate. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Typical use cases | The sheet maps AVEVA PI to oil and gas, energy, chemicals, cement, steel, and large-scale manufacturing contexts. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| APM / IIoT / Historian positioning | Based on the sheet, AVEVA PI should be treated primarily as an industrial data historian and operational data infrastructure candidate. | `SRC-APM-IIOT-0001` | Draft, pending validation |

### Open Questions

- Which AVEVA PI documents should be treated as authoritative for current product naming and architecture?
- Which parts of the sheet refer to legacy PI System, current AVEVA PI System, or CONNECT-related capabilities?
- Which comparison criteria with Canary can be supported directly by source evidence?

### Extraction TODO

- Identify source documents inside the registered source folder.
- Extract product scope.
- Extract architecture or deployment notes.
- Extract integration capabilities.
- Extract supported use cases.
- Extract limitations and assumptions.
- Avoid pricing/licensing/commercial details.

## Source Traceability

Current content is a draft structure based on the registered AVEVA PI source folder. Validate all capability, architecture, and comparison notes against `SRC-APM-IIOT-0008` before moving this page beyond `draft`.

## Review Notes

- Confirm current product naming and module boundaries.
- Avoid unsupported migration or comparison claims.
- Keep neutral historian concepts on the Industrial Historian capability page and vendor-specific evidence here.
