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

Pattern for collecting industrial data near the equipment or plant floor and forwarding it to a central platform, historian, or analytics layer.

## Flow

```text
Equipment / Control Systems
  -> Edge collector or gateway
  -> Store-and-forward / buffering
  -> Central platform / historian / application
```

## Design Questions

- What must run locally at the edge?
- What happens during network loss?
- Which data needs buffering, filtering, or aggregation?
- How is device and gateway security handled?

## Related Pages

- [IIoT Platform](../capabilities/iiot-platform)
- [Industrial Historian](../capabilities/industrial-historian)
