---
title: SCADA/DCS Data Ingestion
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - scada
  - dcs
  - data-ingestion
  - integration
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# SCADA/DCS Data Ingestion

## Summary

SCADA/DCS Data Ingestion is a draft pattern for moving operational data from SCADA or DCS environments into historian, IIoT, APM, or monitoring layers.

## Purpose

Provide a reusable way to discuss plant data extraction without assuming one protocol, vendor, or architecture.

## When to Use

- Tender requirements mention SCADA, DCS, PLC, plant data, process data, or operational integration.
- A historian, IIoT platform, or APM system needs data from existing control or supervisory systems.
- The project team must clarify data ownership, access, security, and responsibility boundaries.

## Architecture Flow

```text
SCADA / DCS / PLC layer
  -> Connector, gateway, historian interface, or integration service
  -> Historian / IIoT platform / APM application
  -> Monitoring, reporting, or decision support
```

## Inputs

- Tag list, measurement list, event list, or process variables.
- Source system access method and ownership.
- Network, cybersecurity, and operations constraints.
- Target data model, historian mapping, or application requirement.

## Outputs

- Ingested operational data for historian, IIoT, APM, monitoring, or reporting.
- Data mapping and quality assumptions.
- Clarification points for source access, responsibility, and security approval.

## Common Risks

- Source system access may be restricted by OT security policy.
- Required tags may be unavailable, renamed, undocumented, or low quality.
- Polling frequency or data volume may affect control system performance if poorly designed.
- Data ownership between customer OT, IT, vendor, and integrator may be unclear.

## Related Solutions

- [IDBoxRT](../solutions/idboxrt)
- [Litmus Edge](../solutions/litmus-edge)
- [Canary](../solutions/canary)
- [AVEVA PI](../solutions/aveva-pi)

## Related Capabilities

- [IIoT Platform](../capabilities/iiot-platform)
- [Industrial Historian](../capabilities/industrial-historian)
- [Asset Performance Management](../capabilities/apm)

## Tender Notes

- Ask which source systems are in scope and who is responsible for providing access.
- Clarify whether data should go directly to the target platform or through an existing historian.
- Avoid claiming protocol or connector support until reviewed solution evidence is attached.

## Source Traceability

Current content is a draft pattern based on the registered APM & IIoT source domain. Validate protocol support, security assumptions, and integration responsibilities against source materials before approval.

## Review Notes

- Confirm relevant protocols, data ownership, security constraints, and target systems from source materials.
- Add evidence before moving this page beyond draft.
- Keep this page as a reusable ingestion pattern, not a final implementation design.
