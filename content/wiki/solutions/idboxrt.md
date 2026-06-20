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

## Manual Extraction Notes

### Source Coverage

| Source ID | Source Title | Extraction Status | Notes |
|---|---|---|---|
| `SRC-APM-IIOT-0011` | IDBoxRT | Planned | Registered source folder exists; exact source documents still need to be identified before facts are extracted. |

### Evidence-Backed Draft Facts

| Claim / Fact | Evidence Source | Confidence | Review Status |
|---|---|---|---|
| No source-backed facts extracted yet. | `SRC-APM-IIOT-0011` | low | Pending source document review |

### Open Questions

- Which IDBoxRT source documents should be treated as authoritative for product scope?
- Which integration methods, deployment options, and use cases are explicitly supported by reviewed source documents?

### Extraction TODO

- Identify source documents inside the registered source folder.
- Extract product scope.
- Extract architecture or deployment notes.
- Extract integration capabilities.
- Extract supported use cases.
- Extract limitations and assumptions.
- Avoid pricing/licensing/commercial details.

## Source Traceability

Current content is a draft structure based on the registered IDBoxRT source folder. Validate all capability and architecture notes against `SRC-APM-IIOT-0011` before moving this page beyond `draft`.

## Review Notes

- Verify naming, product scope, and supported protocols.
- Confirm which claims are vendor-supported versus presales interpretation.
- Keep pricing, licensing, and restricted commercial notes outside this page.
