---
title: Edge to Center
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - edge
  - iiot
  - integration
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Edge to Center

## Summary

Edge to Center is a draft architecture pattern for collecting industrial data near equipment, production lines, or plant-floor systems and forwarding it to a central platform, historian, or analytics layer.

## Purpose

Provide a reusable structure for discussing edge collection, buffering, normalization, and central data delivery without tying the pattern to one vendor.

## When to Use

- Plant data must be collected close to the source system.
- Network reliability, latency, or site segmentation requires local collection or buffering.
- IIoT, historian, or monitoring solutions need data from multiple industrial systems.

## Architecture Flow

```text
Equipment / Control Systems
  -> Edge collector or gateway
  -> Store-and-forward / buffering
  -> Central platform / historian / application
```

## Inputs

- Equipment, PLC, SCADA, DCS, historian, or database data sources.
- Site network and security constraints.
- Required tags, events, or contextual data.
- Target systems for central storage, monitoring, or analytics.

## Outputs

- Normalized or forwarded industrial data.
- Buffered data during network disruption where supported.
- Central historian, IIoT platform, or application inputs.

## Common Risks

- Edge scope may be unclear between gateway, platform, and application functions.
- Network outages can cause data loss if buffering is not designed.
- Security and ownership across OT and IT networks may block deployment.
- Too much transformation at the edge can create maintenance complexity.

## Related Solutions

- [IDBoxRT](../solutions/idboxrt)
- [Litmus Edge](../solutions/litmus-edge)
- [AI PlantOps](../solutions/ai-plantops)

## Related Capabilities

- [IIoT Platform](../capabilities/iiot-platform)
- [Industrial Historian](../capabilities/industrial-historian)
- [Asset Performance Management](../capabilities/apm)

## Tender Notes

- Ask where data must be collected, whether store-and-forward is required, and which systems receive data.
- Separate edge hardware, connector software, central platform, and application requirements.
- Avoid claiming support for specific protocols or deployment models until source evidence is reviewed.

## Source Traceability

Current content is a draft pattern based on the registered APM & IIoT solution domain. Validate against source materials for IDBoxRT, Litmus Edge, AI PlantOps, and related solutions before approval.

## Review Notes

- Add source-backed examples after reviewing edge and IIoT solution materials.
- Keep this pattern neutral and reusable across vendors.
