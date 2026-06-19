---
title: Historian Requirement Mapping
type: tender
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - tender
  - historian
  - requirements
source_refs:
  - source_id: SRC-DOMAIN-APM-IIOT
    title: APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# Historian Requirement Mapping

## Summary

Reusable draft page for mapping tender requirements related to industrial historian platforms.

This page is a working template only. It must not be used as final compliance evidence until historian requirements and source-backed solution capabilities are reviewed.

## Technical Requirement Categories

| Category | Typical Requirement Area | Evidence Anchor |
|---|---|---|
| Data ingestion | SCADA, DCS, PLC, OPC UA, gateway, existing historian, or database source | [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion) |
| Time-series storage | Historian storage, retention, retrieval, compression, and performance | [Industrial Historian](../capabilities/industrial-historian) |
| Visualization | Trends, dashboards, reporting, engineering review | [Industrial Historian](../capabilities/industrial-historian) |
| Integration | Downstream API, BI, APM, IIoT, or enterprise data use | [Historian to APM](../patterns/historian-to-apm) |
| Operations readiness | Data quality, timestamps, tag naming, ownership, security | [OPC UA Integration](../patterns/opc-ua-integration) |

## Requirement Mapping Template

| Requirement | Evidence Page | Candidate Solution | Compliance | Gap / Clarification |
|---|---|---|---|---|
| | | | To assess | |

## Candidate Solution Pages

- [Canary](../solutions/canary)
- [AVEVA PI](../solutions/aveva-pi)
- [IDBoxRT](../solutions/idboxrt)

## Related Pages

- [Industrial Historian](../capabilities/industrial-historian)
- [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion)
- [Historian to APM](../patterns/historian-to-apm)

## Source Traceability

Current content is a draft tender mapping structure based on the registered APM & IIoT source domain. Attach source-backed evidence before marking any historian requirement as compliant.

## Review Notes

- Separate historian requirements from dashboard, BI, APM, and IIoT platform requirements.
- Keep pricing, licensing, and restricted commercial content outside this page.
- Add evidence from reviewed solution pages before using this for proposal work.
