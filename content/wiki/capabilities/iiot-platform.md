---
title: IIoT Platform
type: capability
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - iiot
  - platform
  - industrial-data
  - connectivity
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# IIoT Platform

## Summary

An IIoT Platform is the capability layer for connecting industrial assets and systems, collecting operational data, contextualizing it, and enabling applications such as dashboards, analytics, monitoring, and integration with enterprise systems.

In NOVA Knowledge Hub M1, this page acts as the anchor for IIoT platform knowledge and helps separate platform capabilities from historian, APM, and EAM/CMMS functions.

## Scope

- In scope:
  - industrial connectivity
  - edge data collection
  - protocol integration
  - data normalization and contextualization
  - data publishing to applications and downstream systems
  - platform positioning for solution and tender work
- Out of scope for this page:
  - full AI/ML orchestration
  - full CRM/NOVA integration
  - detailed public portal or landing page content
  - vendor-specific pricing or licensing

## Problem It Solves

- Industrial data is often fragmented across PLC, SCADA, DCS, historian, databases, files, and vendor systems.
- Operations and engineering teams need a practical way to collect, normalize, and reuse this data across applications.
- Presales and technical teams need a common structure to explain when a solution is an edge gateway, data platform, historian, analytics layer, or application layer.
- Future APM, monitoring, and analytics use cases need reliable data movement before advanced analysis can be trusted.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Industrial connectivity | Connects to OT and IT systems such as PLC, SCADA, DCS, historian, database, and API sources. | `SRC-DOMAIN-APM-IIOT` |
| Edge data collection | Collects data close to assets or production systems, often before forwarding to a central platform. | `SRC-DOMAIN-APM-IIOT` |
| Protocol integration | Supports protocol and interface patterns such as OPC UA, MQTT, REST API, and database integration where applicable. | `SRC-DOMAIN-APM-IIOT` |
| Data contextualization | Adds asset, process, equipment, location, or operational context to raw data points. | `SRC-DOMAIN-APM-IIOT` |
| Store and forward | Buffers data during network disruption and forwards it when connectivity is restored. | `SRC-DOMAIN-APM-IIOT` |
| Application enablement | Provides usable data for dashboards, monitoring, analytics, reporting, and integration. | `SRC-DOMAIN-APM-IIOT` |

## Boundary With Adjacent Domains

| Domain | Relationship to IIoT Platform |
|---|---|
| Industrial Historian | A historian specializes in time-series storage and retrieval. An IIoT platform may feed, complement, or overlap with historian functions. |
| APM | APM consumes operational and asset context to support reliability and performance decisions. IIoT provides data enablement. |
| Edge Platform | Edge platform capabilities may be part of an IIoT platform or a separate deployment layer. |
| EAM/CMMS | EAM/CMMS manages work execution and asset records. IIoT can provide condition or event data to inform maintenance. |

## Related Solutions

- [IDBoxRT](../solutions/idboxrt)
- [Litmus Edge](../solutions/litmus-edge)
- [AI PlantOps](../solutions/ai-plantops)

## Related Pattern Pages

- [Edge to Center](../patterns/edge-to-center)
- [OPC UA Integration](../patterns/opc-ua-integration)
- [MQTT Sparkplug](../patterns/mqtt-sparkplug)
- [Historian to APM](../patterns/historian-to-apm)

## Source Traceability

Current content is a draft synthesis based on the registered APM & IIoT solution domain. It must be validated against source materials before moving beyond `draft`.

## Review Notes

- Clarify when a platform is acting as an edge gateway, data hub, application layer, analytics layer, or historian replacement.
- Avoid overclaiming AI/ML capabilities until source evidence is added.
- Add source references from IDBoxRT, Litmus Edge, AI PlantOps, or related materials after source review.
