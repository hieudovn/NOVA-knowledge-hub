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

Historian to APM is a draft integration pattern for using historian data as an input layer for APM, condition monitoring, performance monitoring, or predictive maintenance use cases.

## Purpose

Provide a consistent way to describe how time-series operational data can support asset health, reliability, performance, or maintenance decision support.

## When to Use

- A customer already has a historian and wants to reuse existing operational data.
- APM or monitoring use cases require trusted historical and near-real-time measurements.
- Tender requirements mention historian integration, asset health, condition monitoring, or predictive maintenance.

## Architecture Flow

```text
SCADA / DCS / PLC
  -> Historian
  -> APM analytics or asset model
  -> Insights / alerts / work process
```

## Inputs

- Historian tags or measurements.
- Asset, equipment, or location mapping.
- Data quality, timestamp, and sampling assumptions.
- Business or maintenance context for interpreting the data.

## Outputs

- Asset indicators, trends, alerts, or recommendations.
- APM dashboards, reports, or work process inputs.
- Clarification points for data quality, latency, and asset mapping.

## Common Risks

- Required tags may not exist or may not be reliable.
- Tag names may not map cleanly to asset hierarchy.
- Data quality, timestamp, or sampling gaps may limit analytics.
- APM expectations may exceed what historian data alone can support.

## Related Solutions

- [Canary](../solutions/canary)
- [AVEVA PI](../solutions/aveva-pi)
- [EtaPRO](../solutions/etapro)
- [IBM Maximo Application Suite](../solutions/ibm-mas)

## Related Capabilities

- [Industrial Historian](../capabilities/industrial-historian)
- [Asset Performance Management](../capabilities/apm)
- [Condition Monitoring](../capabilities/condition-monitoring)
- [Predictive Maintenance](../capabilities/predictive-maintenance)

## Tender Notes

- Ask which historian exists, which tags are required, and who owns the tag-to-asset mapping.
- Separate data availability from APM algorithm or workflow readiness.
- Avoid claiming compliance until the historian data scope and APM requirements are reviewed.

## Source Traceability

Current content is a draft pattern based on the registered APM & IIoT solution domain. Validate against historian, APM, and project-specific source materials before approval.

## Review Notes

- Add source-backed examples after reviewing Canary, AVEVA PI, EtaPRO, IBM MAS, and related project materials.
- Keep this page as a reusable pattern, not a vendor-specific implementation guide.
