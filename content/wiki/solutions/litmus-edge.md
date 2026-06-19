---
title: Litmus Edge
type: solution
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - litmus-edge
  - edge
  - iiot
source_refs:
  - source_id: SRC-APM-IIOT-0006
    title: Litmus Edge
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Litmus Edge

## Summary

Litmus Edge is a draft solution page in the edge and IIoT platform knowledge base.

In NOVA Knowledge Hub M1, this page acts as a placeholder for organizing reviewed Litmus Edge knowledge before it is used for IIoT positioning, architecture patterns, or tender preparation.

## Scope

- In scope:
  - Litmus Edge as a candidate edge or IIoT platform solution
  - solution mapping against industrial connectivity and edge data collection needs
  - links to related capability and pattern pages
  - source-backed notes for future comparison and tender preparation
- Out of scope for this page:
  - final vendor claims before source review
  - pricing, licensing, or commercial terms
  - public marketing content
  - implementation architecture that has not been validated

## Problem It Solves

- Industrial data may need to be collected near equipment, production lines, or plant-floor systems before being sent to central platforms.
- Operations and engineering teams may need edge connectivity, buffering, normalization, or data routing patterns.
- Presales and tender teams need to distinguish edge platform scope from historian, APM, BI, and generic dashboard requirements.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Edge data collection | Candidate area for source review; confirm supported source systems and collection approach. | `SRC-APM-IIOT-0006` |
| Industrial connectivity | Candidate area for source review; confirm protocols, connectors, and integration methods. | `SRC-APM-IIOT-0006` |
| Data movement | Candidate area for source review; confirm forwarding, buffering, or publishing capabilities. | `SRC-APM-IIOT-0006` |
| Application enablement | Candidate area for source review; confirm how collected data is used by downstream systems. | `SRC-APM-IIOT-0006` |

## Architecture Notes

- Document edge components, data flow, network assumptions, and central integration targets after source review.
- Separate confirmed Litmus Edge architecture from general edge-to-center patterns.
- Keep reusable protocol and ingestion notes in pattern pages where possible.

## Tender Notes

- Capture edge collection, protocol integration, buffering, and central data delivery requirements only when supported by reviewed sources.
- Mark compliance, gaps, assumptions, and clarification questions separately.
- Keep pricing, licensing, and restricted commercial notes outside this page.

## Related Capability Pages

- [IIoT Platform](../capabilities/iiot-platform)
- [Industrial Historian](../capabilities/industrial-historian)
- [Asset Performance Management](../capabilities/apm)

## Related Pattern Pages

- [Edge to Center](../patterns/edge-to-center)
- [OPC UA Integration](../patterns/opc-ua-integration)
- [MQTT Sparkplug](../patterns/mqtt-sparkplug)
- [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion)

## Source Traceability

Current content is a draft structure based on the registered Litmus Edge source folder. Validate all capability, architecture, and tender notes against `SRC-APM-IIOT-0006` before moving this page beyond `draft`.

## Review Notes

- Confirm solution scope, deployment model, and integration notes from source materials.
- Add evidence before moving this page beyond draft.
- Keep solution facts separate from general IIoT platform capability notes.
