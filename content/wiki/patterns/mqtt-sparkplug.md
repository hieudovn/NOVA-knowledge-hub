---
title: MQTT Sparkplug
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - mqtt
  - sparkplug
  - iiot
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# MQTT Sparkplug

## Summary

Pattern for event-driven IIoT data movement using MQTT and Sparkplug-style payload conventions where appropriate.

## Flow

```text
Edge node
  -> MQTT broker
  -> Subscriber applications
  -> Historian / IIoT platform / analytics
```

## Design Questions

- Is MQTT required by the customer or proposed by the solution team?
- What namespace and payload conventions are expected?
- How are retained messages, birth/death certificates, and quality handled?
- Which systems publish and subscribe?

## Related Pages

- [Edge to Center](./edge-to-center)
- [IIoT Platform](../capabilities/iiot-platform)
