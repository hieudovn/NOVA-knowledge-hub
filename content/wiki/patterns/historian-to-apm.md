---
title: Historian to APM
type: pattern
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - historian
  - apm
  - integration
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Historian to APM

## Summary

Pattern for using historian data as an input layer for APM, condition monitoring, performance monitoring, or predictive maintenance.

## Flow

```text
SCADA / DCS / PLC
  -> Historian
  -> APM analytics or asset model
  -> Insights / alerts / work process
```

## Design Questions

- Which historian tags are required?
- How are tags mapped to assets?
- Is data quality sufficient for analytics?
- What latency is acceptable?

## Related Pages

- [Industrial Historian](../capabilities/industrial-historian)
- [Asset Performance Management](../capabilities/apm)
