---
title: IDBoxRT
type: solution
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - idboxrt
  - iiot
  - data-platform
source_refs:
  - source_id: SRC-APM-IIOT-0011
    title: IDBoxRT
  - source_id: SRC-APM-IIOT-0001
    title: AVENUE APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# IDBoxRT

## Summary

IDBoxRT is a draft solution page in the APM and IIoT technical knowledge base.

In NOVA Knowledge Hub M1, this page acts as a placeholder for organizing reviewed IDBoxRT knowledge before it is used for solution mapping, pattern references, or tender preparation.

## Scope

- In scope:
  - IDBoxRT as a candidate IIoT or industrial data platform solution
  - solution mapping against industrial data, integration, and operations visibility needs
  - links to related capability and pattern pages
  - source-backed notes for future tender preparation
- Out of scope for this page:
  - final vendor claims before source review
  - pricing, licensing, or commercial terms
  - public marketing content
  - implementation architecture that has not been validated

## Problem It Solves

- Industrial data is often spread across control systems, historians, databases, and manual sources.
- Operations and engineering teams may need a structured way to collect, contextualize, and reuse plant data.
- Presales and tender teams need to understand whether IDBoxRT fits IIoT platform, integration, dashboard, or data enablement requirements.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Data acquisition | Candidate area for source review; confirm supported sources and methods. | `SRC-APM-IIOT-0011` |
| Industrial integration | Candidate area for source review; confirm supported systems, protocols, and interfaces. | `SRC-APM-IIOT-0011` |
| Data contextualization | Candidate area for source review; confirm how asset, process, or operational context is represented. | `SRC-APM-IIOT-0011` |
| Application enablement | Candidate area for source review; confirm dashboard, analytics, reporting, or integration use cases. | `SRC-APM-IIOT-0011` |

## Architecture Notes

- Document deployment model, components, data flow, edge or central services, and integration points after source review.
- Keep architecture notes separate from confirmed product facts until source evidence is attached.
- Move reusable integration patterns into dedicated pattern pages where possible.

## Tender Notes

- Capture common requirements IDBoxRT may address only after source review.
- Mark compliance, gaps, assumptions, and clarification questions separately.
- Avoid treating IIoT platform requirements as automatically satisfied without evidence.

## Related Capability Pages

- [IIoT Platform](../capabilities/iiot-platform)
- [Industrial Historian](../capabilities/industrial-historian)
- [Asset Performance Management](../capabilities/apm)

## Related Pattern Pages

- [Edge to Center](../patterns/edge-to-center)
- [OPC UA Integration](../patterns/opc-ua-integration)
- [MQTT Sparkplug](../patterns/mqtt-sparkplug)
- [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion)

## Source-Backed Draft Notes

### Source Coverage

| Source ID | Source Title | Extraction Status | Notes |
|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | Batch 1 draft extracted | Main source used for this draft extraction batch; reference URLs in the sheet were treated only as supporting references. |
| `SRC-APM-IIOT-0011` | IDBoxRT | Planned | Registered source folder exists; detailed source documents still need to be identified and reviewed. |

### Draft Facts from Source

| Topic | Draft Note | Evidence Source | Review Status |
|---|---|---|---|
| General concept | The sheet positions IDBoxRT as a real-time operational data monitoring and analysis platform, described as an Operational Intelligence and information data hub layer. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Vendor | The sheet lists CIC Consulting Informatico from Spain as the vendor. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Problems solved | The sheet associates IDBoxRT with fragmented operational data, energy data silos, and difficulty consolidating information from equipment, production, and plant levels. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Core capabilities | The sheet lists heterogeneous data collection, operational data standardization, signal contextualization, preprocessing, KPI calculation, and interactive reporting as candidate capability areas. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Typical use cases | The sheet points to plant operations visibility, energy and asset data consolidation, operational KPI calculation, and interactive reporting as candidate use cases. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Integration relevance | The sheet frames IDBoxRT around ISA-95-style integration across field devices, SCADA/Historian layers, and ERP/BI layers; architecture details still require validation. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Deployment model | The sheet describes on-premises, cloud, and hybrid deployment as candidate models; this must be validated against detailed product documents. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| APM / IIoT / Historian positioning | Based on the sheet, IDBoxRT is best treated in this wiki as an IIoT / operational intelligence / industrial data hub candidate, not as an approved historian replacement. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Open questions | The sheet gives enough structure for draft positioning, but not enough to confirm official architecture, supported protocol list, limitations, or deployment constraints. | `SRC-APM-IIOT-0001` | To validate |

### Open Questions

- Which IDBoxRT documents should be treated as authoritative for architecture and deployment claims?
- Which integration protocols and interfaces are officially supported versus inferred from solution positioning?
- Which use cases should be separated into energy management, operational intelligence, IIoT platform, and APM-adjacent categories?
- What limitations should be documented for historian-style retention, analytics, and enterprise integration scenarios?

### Extraction TODO

- Identify detailed source documents.
- Validate product architecture.
- Validate deployment model.
- Validate integration claims.
- Validate limitations.
- Keep pricing/commercial information out of wiki.

## Source Traceability

Current content is a draft structure based on the registered IDBoxRT source folder. Validate all capability and architecture notes against `SRC-APM-IIOT-0011` before moving this page beyond `draft`.

## Review Notes

- Verify naming, product scope, and supported protocols.
- Confirm which claims are vendor-supported versus presales interpretation.
- Keep pricing, licensing, and restricted commercial notes outside this page.
