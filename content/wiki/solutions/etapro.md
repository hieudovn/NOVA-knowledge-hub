---
title: EtaPRO
type: solution
status: draft
visibility: private
owner: Hieu Do
organization: Personal
tags:
  - etapro
  - apm
  - performance-monitoring
source_refs:
  - source_id: SRC-APM-IIOT-0007
    title: EtaPRO
  - source_id: SRC-ETAPRO-DOC-0001
    title: Master_EtaPRO_Knowledge
  - source_id: SRC-APM-IIOT-0001
    title: AVENUE APM & IIoT Solutions
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# EtaPRO

## Summary

EtaPRO is a draft solution page in the APM and performance monitoring knowledge base.

In NOVA Knowledge Hub M1, this page acts as a placeholder for organizing reviewed EtaPRO knowledge before it is used for APM positioning, comparison pages, or tender preparation.

## Scope

- In scope:
  - EtaPRO as a candidate APM, performance monitoring, or asset-related solution
  - solution mapping against APM and performance monitoring needs
  - links to related capability and pattern pages
  - source-backed notes for comparison and tender preparation
- Out of scope for this page:
  - final vendor claims before source review
  - pricing, licensing, or commercial terms
  - public marketing content
  - unsupported comparison claims against IBM MAS or other APM solutions

## Problem It Solves

- Asset-intensive organizations need visibility into performance, degradation, and operational condition.
- Operations, maintenance, and reliability teams may need decision support based on monitored asset or plant behavior.
- Presales and tender teams need to distinguish performance monitoring, condition monitoring, predictive maintenance, and EAM/CMMS requirements.

## Core Concepts or Capabilities

| Capability | Notes | Evidence |
|---|---|---|
| Performance monitoring | Candidate area for source review; confirm monitored assets, calculations, and outputs. | `SRC-APM-IIOT-0007` |
| Condition monitoring | Candidate area for source review; confirm condition indicators and diagnostic scope. | `SRC-APM-IIOT-0007` |
| Asset health or diagnostics | Candidate area for source review; confirm health, diagnostic, or advisory functions. | `SRC-APM-IIOT-0007` |
| Reporting | Candidate area for source review; confirm reporting, dashboard, or decision-support outputs. | `SRC-APM-IIOT-0007` |

## Architecture Notes

- Document data sources, calculation model, analytics components, integrations, and deployment approach after source review.
- Separate confirmed EtaPRO architecture from general APM and performance monitoring concepts.
- Use pattern pages for historian, IIoT, and maintenance-system integration flows where applicable.

## Tender Notes

- Capture common APM, performance, and diagnostic requirements.
- Mark where EtaPRO overlaps with or differs from IBM MAS APM.
- Keep all comparison notes evidence-based and tied to reviewed source material.

## Related Capability Pages

- [Asset Performance Management](../capabilities/apm)
- [Condition Monitoring](../capabilities/condition-monitoring)
- [Predictive Maintenance](../capabilities/predictive-maintenance)
- [Industrial Historian](../capabilities/industrial-historian)

## Related Pattern Pages

- [Historian to APM](../patterns/historian-to-apm)
- [Maximo Integration](../patterns/maximo-integration)
- [SCADA/DCS Data Ingestion](../patterns/scada-dcs-data-ingestion)

## Source-Backed Draft Notes

### Source Coverage

| Source ID | Source Title | Extraction Status | Notes |
|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | Batch 1 draft extracted | Main source used for this draft extraction batch; reference URLs in the sheet were treated only as supporting references. |
| `SRC-APM-IIOT-0007` | EtaPRO | Planned | Registered source folder exists; detailed source documents still need to be identified and reviewed. |

### Draft Facts from Source

| Topic | Draft Note | Evidence Source | Review Status |
|---|---|---|---|
| General concept | The sheet describes EtaPRO APM as a solution for optimizing power plant operations and maintenance by combining data integration, analytics, condition monitoring, and performance monitoring. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Vendor | The sheet lists Toshiba Energy Systems & Solutions Corporation as the vendor. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Problems solved | The sheet associates EtaPRO with unplanned downtime, performance degradation, data silos across operational logs and technical data, and availability/outage reporting risk. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Core capabilities | The sheet lists thermodynamic modeling, anomaly detection, rotating equipment analysis, historian/performance data storage, and performance monitoring as candidate capability areas. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Typical use cases | The sheet emphasizes power generation use cases, including thermal, gas, renewables, hydro, geothermal, nuclear, and industrial co-generation or utilities contexts. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Integration relevance | The sheet lists interfaces with DCS, PLC, PI, OPC UA, Modbus, and Bently Nevada 3500 as candidate integration areas requiring validation. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Deployment model | The sheet describes on-premises or cloud deployment as candidate models; confirm detailed deployment architecture before using this in solution design. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| APM / IIoT / Historian positioning | Based on the sheet, EtaPRO should be treated as an APM and performance monitoring candidate for asset-intensive operations, especially power generation. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Open questions | The sheet gives draft module and integration names, but official module boundaries, deployment constraints, and limitations require detailed source review. | `SRC-APM-IIOT-0001` | To validate |

### Open Questions

- Which EtaPRO documents should be treated as authoritative for module names and architecture?
- Which power-generation use cases are globally supported versus Avenue-specific target opportunities?
- Which comparison criteria with IBM MAS APM can be supported directly by source evidence?
- Which modules are standard product capabilities versus optional, project-specific, or configuration-dependent components?

### Extraction TODO

- Identify detailed source documents.
- Validate product architecture.
- Validate deployment model.
- Validate integration claims.
- Validate limitations.
- Keep pricing/commercial information out of wiki.

## Source Traceability

Current content is a draft structure based on the registered EtaPRO source folder. Validate all capability, architecture, and comparison notes against `SRC-APM-IIOT-0007` before moving this page beyond `draft`.

## Document-Level Validation Notes

### Document Coverage

| Source ID | Document Title | Validation Role | Extraction Status |
|---|---|---|---|
| `SRC-ETAPRO-DOC-0001` | Master_EtaPRO_Knowledge | Pilot document-level source for validating EtaPRO Batch 1 draft facts. | In progress |

### Validated / Refined Draft Facts

| Topic | Batch 1 Draft Note | Validation Result | Evidence Source | Review Status |
|---|---|---|---|---|
| General concept | EtaPRO APM is described as a solution for optimizing power plant operations and maintenance by combining data integration, analytics, condition monitoring, and performance monitoring. | Refined by source: the document frames EtaPRO as an APM platform for power-generation asset performance, with predictive maintenance and O&M optimization positioning. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Vendor | The sheet lists Toshiba Energy Systems & Solutions Corporation as the vendor. | Refined by source: the document identifies Toshiba Energy Systems & Solutions as the vendor context, with geography wording that should be checked against official vendor material. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Problems solved | EtaPRO is associated with unplanned downtime, performance degradation, data silos, and availability or outage reporting risk. | Refined by source: the document supports predictive maintenance, early anomaly warning, and operating performance optimization; outage reporting risk remains still to validate from other documents. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Core capabilities | Candidate capability areas include thermodynamic modeling, anomaly detection, rotating equipment analysis, historian/performance data storage, and performance monitoring. | Refined by source: the document supports Archive, APR, Virtual Plant, and Predictor as candidate module concepts; module status and official boundaries still require vendor confirmation. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Typical use cases | The sheet emphasizes power generation, including thermal, gas, renewables, hydro, geothermal, nuclear, and industrial co-generation or utilities contexts. | Refined by source: the document supports a power-generation focus and mentions thermal, gas, hydro, wind, and solar contexts; geothermal, nuclear, and industrial co-generation remain still to validate. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Integration relevance | The sheet lists interfaces with DCS, PLC, PI, OPC UA, Modbus, and Bently Nevada 3500 as candidate integration areas requiring validation. | Refined by source: the document supports an Avenue integration view involving OT systems, DCS/SCADA/PLC data flow, EtaPRO analytics modules, and Maximo handoff; protocol-specific claims remain still to validate. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Deployment model | The sheet describes on-premises or cloud deployment as candidate models. | Not supported by this document: deployment model is not validated by this pilot document. | `SRC-ETAPRO-DOC-0001` | Still to validate |
| APM / IIoT / Historian positioning | EtaPRO should be treated as an APM and performance monitoring candidate for asset-intensive operations, especially power generation. | Validated by source: the document supports APM and performance-management positioning for power-generation operations, while broader IIoT or historian positioning remains secondary and still to validate. | `SRC-ETAPRO-DOC-0001` | Draft, pending human review |
| Open questions | Official module boundaries, deployment constraints, and limitations require detailed source review. | Validated by source: the document is useful for pilot validation but still contains Avenue positioning and does not fully resolve official product boundaries, deployment constraints, or limitations. | `SRC-ETAPRO-DOC-0001` | Still to validate |

### Open Questions After Document Review

- Which EtaPRO module names and boundaries are official vendor product definitions versus Avenue packaging?
- Which deployment models are officially supported for the current EtaPRO version?
- Which protocol-specific integrations are confirmed by technical product documents?
- Which limitations, prerequisites, and system requirements should be documented?
- Which Batch 1 use-case sectors require additional EtaPRO source documents?

### Deferred Items

- Pricing/licensing/commercial terms are excluded.
- Comparison with IBM MAS remains deferred.
- Claims requiring other EtaPRO documents remain `Still to validate`.
- Protocol-specific integration claims remain `Still to validate` until a technical integration source is reviewed.

## Review Notes

- Verify target industries and asset classes.
- Confirm which features are standard, optional, or project-specific.
- Keep comparison with IBM MAS APM on validated criteria only.
