---
title: OPC UA Integration
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - opc-ua
  - integration
  - industrial-connectivity
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# OPC UA Integration

## Summary

OPC UA Integration is a draft pattern for connecting industrial systems through OPC UA where structured plant-floor data access is required.

## Purpose

Provide a reusable structure for documenting OPC UA-based data ingestion into historians, IIoT platforms, APM systems, or monitoring applications.

## When to Use

- Source systems expose data through OPC UA.
- Tender requirements mention OPC UA, industrial connectivity, secure data access, or structured tag browsing.
- A historian, IIoT platform, or APM solution needs operational data from plant-floor systems.

## Architecture Flow

```text
OPC UA server
  -> Gateway / connector / platform
  -> Historian, IIoT platform, or APM application
```

## Inputs

- OPC UA server endpoint and security policy.
- Namespace, node list, tags, or information model.
- Authentication, certificate, and network access requirements.
- Target system mapping and data refresh expectations.

## Outputs

- Ingested process values, events, or contextual data.
- Tag or node mappings for downstream systems.
- Clarification points for security, namespace stability, and ownership.

## Common Risks

- OPC UA namespace may be undocumented or unstable.
- Certificate and security policies may delay integration.
- Required nodes may not be exposed by the source system.
- Tag mapping may not align with asset or process hierarchy.

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

- Ask which systems expose OPC UA and whether the bidder must provide the OPC UA server, client, or both.
- Clarify security policy, certificate management, namespace ownership, and expected data points.
- Avoid claiming protocol support for a solution until reviewed source evidence is attached.

## Source Traceability

Current content is a draft pattern based on the registered APM & IIoT solution domain. Validate protocol support and implementation details against solution source materials before approval.

## Review Notes

- Add source-backed examples after reviewing solution connector materials.
- Keep this page as a protocol integration pattern, not a full implementation design.

## Related Pattern Pages

- [Historian to APM](./historian-to-apm)
- [SCADA/DCS Data Ingestion](./scada-dcs-data-ingestion)
