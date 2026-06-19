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

Maximo Integration is a draft pattern for connecting operational monitoring, APM, IIoT, or historian-derived context with IBM Maximo or IBM MAS asset and work management processes.

## Purpose

Provide a reusable structure for discussing how asset condition, events, recommendations, or operational context can inform maintenance and reliability workflows.

## When to Use

- A customer has Maximo or IBM MAS in the asset management landscape.
- APM, historian, IIoT, or monitoring outputs need to connect to work execution or asset records.
- Tender requirements mention EAM/CMMS integration, work order creation, asset hierarchy, meters, or maintenance workflow links.

## Architecture Flow

```text
Monitoring / analytics system
  -> Event, alert, recommendation, or asset context
  -> Maximo / MAS workflow
  -> Work execution and feedback
```

## Inputs

- Asset identifiers, locations, meters, events, alerts, or recommendations.
- Source system context from historian, IIoT, APM, or monitoring tools.
- Maximo/MAS object model and integration interface requirements.
- Maintenance workflow rules and human review expectations.

## Outputs

- Updated asset context, meter readings, events, alerts, work requests, or work orders where supported.
- Maintenance or reliability workflow inputs.
- Clarification points for ownership, approval, and integration boundaries.

## Common Risks

- Asset IDs may not align between systems.
- Automatic work order expectations may exceed validated integration scope.
- EAM/CMMS workflow ownership may be unclear.
- Integration may require customer-specific governance, data cleansing, or approval steps.

## Related Solutions

- [IBM Maximo Application Suite](../solutions/ibm-mas)
- [EtaPRO](../solutions/etapro)
- [AVEVA APM](../solutions/aveva-apm)

## Related Capabilities

- [Asset Performance Management](../capabilities/apm)
- [Condition Monitoring](../capabilities/condition-monitoring)
- [Predictive Maintenance](../capabilities/predictive-maintenance)
- [Industrial Historian](../capabilities/industrial-historian)

## Tender Notes

- Ask which Maximo or MAS application is in scope and which object types must be exchanged.
- Separate asset master data, meter readings, alerts, recommendations, and work orders.
- Avoid claiming automatic work creation or closed-loop maintenance without source and project evidence.

## Source Traceability

Current content is a draft pattern based on IBM MAS source materials and the APM & IIoT domain. Validate all integration objects, interfaces, and workflow claims before approval.

## Review Notes

- Add source-backed examples after reviewing IBM MAS, APM, historian, and integration materials.
- Keep this pattern focused on knowledge structure, not backend/API implementation.
