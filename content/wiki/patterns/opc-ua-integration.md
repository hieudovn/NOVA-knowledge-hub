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

Pattern for connecting industrial systems through OPC UA where secure, structured, plant-floor data access is required.

## Flow

```text
OPC UA server
  -> Gateway / connector / platform
  -> Historian, IIoT platform, or APM application
```

## Design Questions

- Which systems expose OPC UA servers?
- Is the namespace stable and documented?
- What authentication and certificate policies apply?
- How are tags or nodes mapped to assets and capabilities?

## Related Pages

- [IIoT Platform](../capabilities/iiot-platform)
- [Historian to APM](./historian-to-apm)
