---
title: Canary
type: solution
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - canary
  - historian
  - industrial-data
source_refs:
  - source_id: SRC-APM-IIOT-0010
    title: Canary
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Canary

## Summary

Canary is a draft solution page in the industrial historian and time-series data knowledge base.

In NOVA Knowledge Hub M1, this page acts as a placeholder for organizing reviewed Canary knowledge before it is used for historian comparisons, architecture patterns, or tender preparation.

## Scope

- In scope:
  - Canary as a candidate industrial historian solution
  - historian-related solution mapping
  - links to related capability and pattern pages
  - source-backed notes for comparison and tender preparation
- Out of scope for this page:
  - final vendor claims before source review
  - pricing, licensing, or commercial terms
  - public marketing content
  - unsupported comparison claims against AVEVA PI or other historian tools

## Problem It Solves

- Industrial systems generate operational time-series data that must be stored and retrieved reliably.
- Operations and engineering teams need historical trends, context, and data access for analysis and troubleshooting.
- Presales and tender teams need to separate historian requirements from APM, IIoT platform, dashboard, and BI requirements.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Historian storage | Candidate area for source review; confirm storage, retention, and retrieval capabilities. | `SRC-APM-IIOT-0010` |
| Data collection | Candidate area for source review; confirm supported collection paths and source systems. | `SRC-APM-IIOT-0010` |
| Visualization and trending | Candidate area for source review; confirm available analysis and user-facing tools. | `SRC-APM-IIOT-0010` |
| Data access | Candidate area for source review; confirm integration, export, API, or downstream access options. | `SRC-APM-IIOT-0010` |

## Architecture Notes

- Document collection architecture, historian services, client access, deployment options, and integration patterns after source review.
- Separate confirmed historian architecture from assumptions about broader APM or IIoT platform roles.
- Use pattern pages for reusable data ingestion or historian-to-APM flows.

## Tender Notes

- Identify historian, data retention, visualization, data access, and integration requirements.
- Separate confirmed capabilities from assumptions.
- Keep commercial or pricing-sensitive notes out of this page.

## Related Capability Pages

- [Industrial Historian](../capabilities/industrial-historian)
- [IIoT Platform](../capabilities/iiot-platform)
- [Asset Performance Management](../capabilities/apm)

## Related Pattern Pages

- [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion)
- [Historian to APM](../patterns/historian-to-apm)
- [OPC UA Integration](../patterns/opc-ua-integration)

## Source Traceability

Current content is a draft structure based on the registered Canary source folder. Validate all capability, architecture, and comparison notes against `SRC-APM-IIOT-0010` before moving this page beyond `draft`.

## Review Notes

- Confirm product modules and supported connectors.
- Compare against AVEVA PI on validated criteria only.
- Keep this page as a solution anchor; move neutral historian concepts to the Industrial Historian capability page.
