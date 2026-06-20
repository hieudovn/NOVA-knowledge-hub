---
title: Asset Performance Management
type: capability
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - apm
  - asset-performance-management
  - reliability
  - predictive-maintenance
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
  - source_id: SRC-APM-IIOT-0001
    title: AVENUE APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Asset Performance Management

## Summary

Asset Performance Management (APM) is the capability area for monitoring, analyzing, and improving the reliability, availability, risk, and performance of industrial assets.

In NOVA Knowledge Hub M1, this page defines the working boundary of APM knowledge so solution pages, comparison pages, and tender notes can be organized consistently.

## Scope

- In scope:
  - asset health visibility
  - reliability and maintenance decision support
  - performance degradation detection
  - risk and criticality prioritization
  - condition monitoring and predictive maintenance links
  - APM solution positioning for industrial customers
- Out of scope for this page:
  - full EAM/CMMS workflow design
  - detailed historian architecture
  - vendor-specific licensing or pricing
  - final approved claims before source review

## Problem It Solves

- Operations teams need visibility into asset condition before failures become production or safety problems.
- Maintenance teams need better prioritization than calendar-based or reactive maintenance alone.
- Reliability teams need a structured way to connect asset data, failure history, degradation patterns, and recommended actions.
- Presales and tender teams need a consistent vocabulary to distinguish APM from historian, IIoT, EAM, and BI requirements.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Asset health monitoring | Tracks condition indicators and health status for critical assets. | `SRC-DOMAIN-APM-IIOT` |
| Condition monitoring | Uses measurements, alarms, events, and operating context to identify abnormal asset behavior. | `SRC-DOMAIN-APM-IIOT` |
| Predictive maintenance | Uses analytics or models to estimate failure risk or maintenance timing. | `SRC-DOMAIN-APM-IIOT` |
| Reliability analytics | Supports MTBF, MTTR, bad actor analysis, failure patterns, and reliability improvement. | `SRC-DOMAIN-APM-IIOT` |
| Performance monitoring | Detects degradation in asset or process performance where relevant. | `SRC-DOMAIN-APM-IIOT` |
| Risk prioritization | Helps focus attention on high-impact assets, systems, or failure modes. | `SRC-DOMAIN-APM-IIOT` |

## Boundary With Adjacent Domains

| Domain | Relationship to APM |
|---|---|
| Industrial Historian | Stores and serves time-series data that APM may consume. Historian is usually data infrastructure, not the full APM layer. |
| IIoT Platform | Connects, contextualizes, and moves operational data. APM uses this data for reliability and performance decisions. |
| EAM/CMMS | Manages maintenance execution, work orders, spare parts, and asset records. APM may trigger or inform work processes. |
| BI / Reporting | Presents KPIs and trends. APM requires asset-specific reliability and diagnostic context beyond generic dashboards. |

## Related Solutions

- [EtaPRO](../solutions/etapro)
- [IBM Maximo Application Suite](../solutions/ibm-mas)
- [AVEVA APM](../solutions/aveva-apm)

## Related Capability Pages

- [Condition Monitoring](./condition-monitoring)
- [Predictive Maintenance](./predictive-maintenance)
- [Industrial Historian](./industrial-historian)
- [IIoT Platform](./iiot-platform)

## Manual Extraction Pointers

- Batch 1 added source-backed draft notes from `SRC-APM-IIOT-0001` to the [EtaPRO](../solutions/etapro) solution page.
- Use `SRC-APM-IIOT-0007` to validate EtaPRO-related APM and performance monitoring notes after source documents are identified.
- Keep EtaPRO-specific evidence on the [EtaPRO](../solutions/etapro) solution page until reviewed evidence supports updating this neutral capability page.
- Do not add pricing, licensing, or commercial details to this capability page.

## Source Traceability

Current content is a draft synthesis based on the registered APM & IIoT solution domain. It must be checked against source documents before moving to `reviewed` or `approved`.

## Review Notes

- Keep this page as the general APM capability anchor.
- Define the boundary between APM, EAM, historian, IIoT platform, and BI carefully.
- Add validated source references from real solution documents before approval.
- Avoid vendor-specific claims unless tied to solution pages and evidence.
