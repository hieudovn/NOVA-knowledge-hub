---
title: Maximo Integration
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - maximo
  - integration
  - eam
  - apm
source_refs:
  - source_id: SRC-PORTFOLIO-IBM-MAS
    title: IBM Maximo Application Suite source materials
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Maximo Integration

## Summary

Pattern for integrating operational monitoring, APM, or IIoT data with Maximo work and asset management processes.

## Flow

```text
Monitoring / analytics system
  -> Event, alert, recommendation, or asset context
  -> Maximo / MAS workflow
  -> Work execution and feedback
```

## Design Questions

- Which Maximo or MAS application is in scope?
- What object is exchanged: asset, location, work order, meter, alert, or recommendation?
- Which integration interface is available?
- What is the expected human workflow after an alert or recommendation?

## Related Pages

- [IBM Maximo Application Suite](../solutions/ibm-mas)
- [Asset Performance Management](../capabilities/apm)
