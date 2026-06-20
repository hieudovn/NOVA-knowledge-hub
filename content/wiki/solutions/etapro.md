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
  - source_id: SRC-APM-IIOT-0001
    title: AVENUE APM & IIoT Solutions
  - source_id: SRC-ETAPRO-DOC-0001
    title: Master_EtaPRO_Knowledge
  - source_id: SRC-ETAPRO-DOC-0002
    title: Toshiba EtaPRO APM Introduction for Customer_r1.pdf
  - source_id: SRC-ETAPRO-DOC-0003
    title: EtaPRO Overview (New March 2025).pdf
  - source_id: SRC-ETAPRO-DOC-0004
    title: EtaPRO technology.pdf
  - source_id: SRC-ETAPRO-DOC-0005
    title: EtaPRO-Platform-Flysht-2.pdf
  - source_id: SRC-ETAPRO-DOC-0006
    title: Brochure-EtaPRO-VirtualPlant-_22.pdf
  - source_id: SRC-ETAPRO-DOC-0007
    title: EtaPRO-APR-Flysht-1.pdf
  - source_id: SRC-ETAPRO-DOC-0008
    title: EtaPRO-Predictor-Flysht-1.pdf
  - source_id: SRC-ETAPRO-DOC-0009
    title: EtaPROMonitorDiagnBrochure-2.pdf
landing_candidate: false
confidence: low
last_reviewed: null
reviewed_by: null
---

# EtaPRO

## Executive Summary

EtaPRO is a power-generation performance and condition monitoring solution. Position it when a customer needs better visibility into plant performance, early warning of abnormal behavior, rotating equipment diagnostics, and decision support for operations, engineering, maintenance, or monitoring center teams.

At a practical presales level, EtaPRO helps turn plant data into performance insight. The current validated scope includes Archive / EPArchive, VirtualPlant, APR, Predictor, monitoring, diagnostics, reporting, and web/mobile visibility as key product areas. Use it for APM-oriented conversations in power generation, especially where the customer is asking about performance degradation, thermal modeling, anomaly detection, predictive diagnostics, and fleet visibility.

This page is for internal draft use. The top sections are written for fast sales/presales reading; the evidence and validation details are preserved in the lower sections.

## Where It Fits

| Fit Area | Presales Guidance | Confidence |
|---|---|---|
| Primary positioning conversation | Power plant performance monitoring, condition monitoring, anomaly detection, diagnostics, and M&D-style operational visibility. | Validated draft |
| Primary audience | Operations, engineering, maintenance, reliability, performance, and monitoring center teams. | Validated draft |
| Data relationship | EtaPRO can work with plant OT data and historian-style data management through EtaPRO Archive / EPArchive and related interfaces. | Partially validated |
| APM positioning | Strong fit for power-generation APM/performance discussions. Avoid treating this page as final vendor wording until human review. | Validated draft |
| IIoT positioning | Do not position EtaPRO as a general-purpose IIoT platform from the current reviewed scope. | Still to validate |
| Comparison positioning | Keep IBM MAS and other APM comparisons out of this page until a dedicated comparison review. | Still to validate |

## Customer Problems It Addresses

| Customer Problem | How EtaPRO Helps |
|---|---|
| Plant performance is degrading but root causes are hard to see. | Uses performance monitoring, thermodynamic modeling, trends, calculations, and reports to support performance review. |
| Abnormal behavior is detected late. | APR supports anomaly detection by comparing current behavior against normal operating patterns. |
| Rotating equipment faults need earlier diagnosis. | Predictor supports machinery diagnostics using vibration and machinery-dynamics data. |
| Operations, engineering, and maintenance teams need shared visibility. | Monitoring, dashboards, reports, logs, trends, web/mobile access, and M&D workflows support shared review. |
| Fleet or multi-unit performance is difficult to compare. | Fleet and multi-generating-unit contexts are relevant, but exact deployment and governance details remain to validate. |

## What It Does

| Capability Area | Plain-Language Description | Confidence |
|---|---|---|
| Archive / EPArchive | Provides the data management foundation for process data, EtaPRO results, KPIs, trends, reports, and downstream EtaPRO applications. | Validated draft |
| VirtualPlant | Models plant cycles and supports performance analysis, process-data validation, reference-condition correction, and what-if studies. | Validated draft |
| APR | Detects abnormal operating behavior by comparing current data against empirical models of normal operation. | Validated draft |
| Predictor | Supports rotating machinery diagnostics and fault-development review. | Validated draft |
| Monitoring and reporting utilities | Supports dashboards, trends, reports, logging, data mining, alerts, issue review, and monitoring workflows. | Validated draft |
| Integration with CMMS/EAM | Avenue context mentions possible Maximo handoff for abnormal-condition follow-up, but official product integration details remain open. | Partially validated |

## Validation Status

- Validated draft: product category, power-generation fit, core module family, historian-linked data management, performance monitoring, anomaly detection, rotating machinery diagnostics, dashboards/reporting, and M&D-style workflows.
- Partially validated: deployment models, exact interfaces, Maximo/CMMS handoff, web/mobile boundaries, fleet deployment details, and generation-technology coverage.
- Still to validate: cybersecurity, authentication, protocol/API completeness, detailed system requirements, limitations, and comparison with IBM MAS or other APM solutions.

## Product Positioning

EtaPRO is best positioned in this wiki as a power-generation APM, performance monitoring, and condition monitoring solution. Use it when the customer is asking how to monitor plant performance, identify abnormal equipment behavior earlier, diagnose rotating machinery issues, and support operators, engineers, reliability teams, and monitoring center users with clearer operational insight.

For presales purposes, explain EtaPRO around four practical ideas:

- plant data is collected from OT and historian-style sources;
- Archive / EPArchive manages process data, calculations, trends, reports, and EtaPRO results;
- VirtualPlant, APR, and Predictor apply performance modeling, anomaly detection, and machinery diagnostics;
- dashboards, reports, logs, web/mobile access, and monitoring workflows help users act on the findings.

Keep IIoT-platform positioning, detailed protocol support, and Maximo/CMMS handoff as validation topics rather than headline claims.

## Architecture Overview

EtaPRO can be explained to customers as a plant performance platform that connects operational data from DCS, SCADA, PLCs, sensors, and historian-style sources into an EtaPRO data layer. From there, EtaPRO applies performance, anomaly-detection, and machinery-diagnostics modules for operators, engineers, reliability teams, and monitoring users.

In a typical discussion, position the architecture as four logical layers: plant data acquisition, EtaPRO data management, analytics modules, and user-facing dashboards or engineering tools. Deployment topology, protocol details, cybersecurity model, and handoff to systems such as Maximo should still be validated during implementation planning.

```mermaid
flowchart TD
  OT["Plant OT systems: DCS / SCADA / PLC / sensors"] --> DA["Data acquisition / interfaces"]
  DA --> Archive["EtaPRO Archive / data management"]
  Archive --> Analytics["EtaPRO analytics modules"]
  Analytics --> VP[VirtualPlant]
  Analytics --> APR[APR]
  Analytics --> Predictor[Predictor]
  Analytics --> UI["Operators / engineers / monitoring users"]
  Analytics --> External["External systems: CMMS / BI / enterprise reporting"]
```

Diagram caption: This conceptual view shows plant OT data flowing into EtaPRO data management, then into analytics modules and user-facing or external follow-up paths. External-system and protocol details remain implementation validation items.

## Core Modules

| Module | Role | Presales Explanation |
|---|---|---|
| Archive / EPArchive | Data management foundation | Manages process data, calculated results, trends, reports, KPIs, and other EtaPRO results used by downstream modules. |
| VirtualPlant | Performance modeling | Supports thermodynamic modeling, performance targets, process-data validation, reference-condition correction, and what-if style analysis. |
| APR | Anomaly detection | Compares current operating data against learned normal behavior so teams can review deviations earlier. |
| Predictor | Rotating machinery diagnostics | Supports fault detection and diagnostics for rotating equipment using vibration and machinery-dynamics data. |
| Monitoring / diagnostics utilities | User visibility and follow-up | Supports dashboards, logging, reports, trends, web/mobile access, issue review, and monitoring center workflows. |
| FDM/PASS | Product-boundary item | Keep as a boundary topic only; commercial, accounting, settlement, and contract details stay excluded from the wiki. |

## Integration Notes

EtaPRO integration should be discussed as a controlled plant-data flow rather than a generic integration promise. The practical pattern is: plant OT data and historian-style data feed EtaPRO Archive / EPArchive, EtaPRO modules analyze the data, and users review results through reports, trends, dashboards, logs, or monitoring workflows.

For customer planning, validate the exact source systems, required interfaces, historian relationship, Maximo/CMMS handoff, network/security constraints, and any enterprise-system integrations before using them in a proposal.

## Deployment Notes

For presales purposes, describe EtaPRO deployment as a Client/Server-oriented platform that can support plant, fleet, and user-facing access patterns. Centralized, decentralized, or mixed topologies may be relevant depending on the customer environment.

Before solution design, validate hosting model, network zones, redundancy, backup/restore, web/mobile access, cybersecurity controls, authentication, operating-system support, sizing, and ownership boundaries.

## Typical Use Cases

| Use Case | Presales Description |
|---|---|
| Performance monitoring for power generation | Track plant and equipment performance, heat rate, KPIs, capacity, and component-level performance indicators. |
| Thermal modeling and what-if analysis | Use VirtualPlant to compare expected versus actual behavior and evaluate operating scenarios. |
| Anomaly detection and early warning | Use APR to identify deviations from normal operating behavior and support planned response. |
| Rotating machinery diagnostics | Use Predictor to support fault detection and diagnostics for turbines, generators, pumps, fans, compressors, and other rotating equipment. |
| Monitoring and Diagnostic Center support | Support monitoring, diagnosis, prioritization, notification, and reporting workflows. |
| Reporting, logging, and operational visibility | Give operations, engineering, maintenance, and management users a shared view through reports, logs, trends, dashboards, KPIs, and web/mobile access. |
| Generation technology coverage | Discuss by plant type and module; exact coverage should be validated for each opportunity. |

Case-study benefits may be summarized later only when reviewed and non-pricing. Specific savings amounts, commercial terms, and contract/payment details are excluded.

## Presales Qualification Notes

- Position EtaPRO when the customer is focused on power-generation performance, condition monitoring, anomaly detection, rotating equipment diagnostics, or M&D-style operational visibility.
- Confirm the target generation technologies, units, critical assets, existing historian/data sources, and operations/maintenance workflows.
- Ask whether the need is performance modeling, anomaly detection, machinery diagnostics, reporting, fleet visibility, or CMMS/EAM follow-up.
- Treat integration to Maximo/CMMS and external enterprise systems as a validation topic, not a final promise.
- Keep comparison with IBM MAS or other APM tools out of the main positioning conversation until a dedicated comparison review is completed.

## What To Validate With Customer

- Which plant data sources, historians, DCS/SCADA systems, and interfaces must EtaPRO connect to?
- Which modules are required: Archive, VirtualPlant, APR, Predictor, monitoring/diagnostics, or reporting utilities?
- What deployment model is required: local, hosted, centralized, decentralized, mixed, or fleet-wide?
- What cybersecurity, authentication, network-zone, and access-control requirements apply?
- Which performance, reliability, diagnostics, reporting, and work-process outcomes matter most?
- Which assumptions need vendor confirmation before tender or proposal use?

## Evidence Sources

| Source ID | Title | Link | Evidence Role | Review Status |
|---|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | [Open source](<https://docs.google.com/spreadsheets/d/1OKfe48zNwTjB1196QU45f8jqNyT8OyszAwLQ-D1gdEw>) | Batch 1 portfolio-level draft source | Draft extracted |
| `SRC-APM-IIOT-0007` | EtaPRO source folder | [Open source](<https://drive.google.com/drive/folders/1ePyS23Vwv1KjJ_TaB2U5JArxVyOH7YJE>) | Parent product source folder | Registered |
| `SRC-ETAPRO-DOC-0001` | Master_EtaPRO_Knowledge | [Open source](<https://docs.google.com/document/d/1ou79esVguZeo2w1XKsGAVisUFcLi-qxfdJWTqZksiF0/edit?usp=drivesdk>) | High-level positioning, Avenue module map, Avenue integration context | In progress |
| `SRC-ETAPRO-DOC-0002` | Toshiba EtaPRO APM Introduction for Customer_r1.pdf | [Open source](<https://drive.google.com/file/d/1VHsHIaoLSfAve7X3GyY9CHOTP-tRzh9z/view?usp=drivesdk>) | APM overview, stakeholders, use cases, module families | Reviewed for Batch 1.7 |
| `SRC-ETAPRO-DOC-0003` | EtaPRO Overview (New March 2025).pdf | [Open source](<https://drive.google.com/file/d/1GYySKR-FB9POvCUOpAzFRfdapfS5WUYE/view?usp=drivesdk>) | Product overview, platform capabilities, embedded apps, user experience | Reviewed for Batch 1.7 |
| `SRC-ETAPRO-DOC-0004` | EtaPRO technology.pdf | [Open source](<https://drive.google.com/file/d/1sIRIN2fajfW3E6eQXHQa2-dMhmNt3oer/view?usp=drivesdk>) | Architecture, topology, interfaces, modules, deployment notes | Reviewed for Batch 1.7 with commercial sections excluded |
| `SRC-ETAPRO-DOC-0005` | EtaPRO-Platform-Flysht-2.pdf | [Open source](<https://drive.google.com/file/d/1qJ7_eOs7DMicBBfrS6S46VrINyOlugVY/view?usp=drivesdk>) | Platform scope, core modules, Archive, reporting, web/mobile access | Reviewed for Batch 1.7 |
| `SRC-ETAPRO-DOC-0006` | Brochure-EtaPRO-VirtualPlant-_22.pdf | [Open source](<https://drive.google.com/file/d/1fZm2j9j1GEM0yVWhcJS6VANUoTtnrGYG/view?usp=drivesdk>) | VirtualPlant module, thermodynamic modeling, what-if analysis | Reviewed for Batch 1.7 |
| `SRC-ETAPRO-DOC-0007` | EtaPRO-APR-Flysht-1.pdf | [Open source](<https://drive.google.com/file/d/1P2fBkD8PBaBbl3HVlhRmr8vIz8B37_9q/view?usp=drivesdk>) | APR module, anomaly detection, early warning, management by exception | Reviewed for Batch 1.7 with pricing examples excluded |
| `SRC-ETAPRO-DOC-0008` | EtaPRO-Predictor-Flysht-1.pdf | [Open source](<https://drive.google.com/file/d/1XxVKDD9yWONNs9QuRKdYfbO3Sf13WTvB/view?usp=drivesdk>) | Predictor module, rotating machinery diagnostics, AutoDiagnosis | Reviewed for Batch 1.7 |
| `SRC-ETAPRO-DOC-0009` | EtaPROMonitorDiagnBrochure-2.pdf | [Open source](<https://drive.google.com/file/d/1caYtGvWly6qsGMarz7zFjcnRkVS-jAxa/view?usp=drivesdk>) | Monitoring and Diagnostic Center, monitoring workflows, reporting support | Reviewed for Batch 1.7 |
| `SRC-ETAPRO-EXTRACT-0003` | 03_EtaPRO Technical Section.md | [Open source](<https://drive.google.com/file/d/1-T-gLOlXFOQzfU_rCQ9AHSi2fClZ2ZDd/view?usp=drivesdk>) | Derived review aid only; helped organize candidate technical topics | Not evidence for final claims |

## Source-Backed Draft Notes

### Source Coverage

| Source ID | Source Title | Extraction Status | Notes |
|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | Batch 1 draft extracted | Main source used for the initial draft extraction batch; reference URLs in the sheet were treated only as supporting references. |
| `SRC-ETAPRO-DOC-0001` | Master_EtaPRO_Knowledge | Batch 1.2 validation pilot | Useful for high-level product positioning, Avenue integration context, and module map. |
| `SRC-ETAPRO-DOC-0002` to `SRC-ETAPRO-DOC-0009` | EtaPRO product PDFs | Batch 1.7 enrichment pilot | Used for concise source-backed draft facts; commercial sections were excluded. |
| `SRC-ETAPRO-EXTRACT-0003` | 03_EtaPRO Technical Section.md | Review aid only | Used to organize candidate topics; not treated as primary evidence. |

### Draft Facts from Source

| Topic | Draft Note | Evidence Source | Review Status |
|---|---|---|---|
| General concept | EtaPRO is a power-generation-focused performance and condition monitoring platform that combines data, analytics, and user tools for operations, engineering, maintenance, and management users. | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005` | Source-backed draft |
| Vendor / ownership context | Earlier Batch 1.2 evidence identifies Toshiba Energy Systems & Solutions context; later documents also reference EtaPRO LLC. Official current vendor / product ownership wording still requires human confirmation. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003` | Partially supported |
| Core modules | Archive, VirtualPlant, APR, and Predictor are repeatedly described as core EtaPRO technology areas. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | Source-backed draft |
| Data management | Archive / EPArchive supports process-data and EtaPRO-result storage for reporting, trending, calculations, KPIs, and downstream EtaPRO applications. | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | Source-backed draft |
| Thermodynamic modeling | VirtualPlant supports first-principles thermodynamic models, online/offline analysis, performance targets, process-data validation, and what-if scenarios. | `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0006` | Source-backed draft |
| Anomaly detection | APR compares current equipment data against empirical models of normal operation to identify anomalies and support earlier response. | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0007` | Source-backed draft |
| Machinery diagnostics | Predictor supports rotating-machine fault detection, vibration analysis, AutoDiagnosis, and time-to-action style review. | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0008` | Source-backed draft |
| Deployment | EtaPRO supports Client/Server use and can be deployed in centralized, decentralized, or mixed topologies; detailed infrastructure requirements still need validation. | `SRC-ETAPRO-DOC-0004` | Partially supported |
| Integration | Reviewed sources support plant OT data ingestion, selected interfaces, PI/source historian context, reporting tools, and Avenue-context Maximo handoff; protocol/API completeness remains open. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | Partially supported |

## Document-Level Validation Notes

### Document Coverage

| Source ID | Document Title | Validation Role | Extraction Status |
|---|---|---|---|
| `SRC-ETAPRO-DOC-0001` | Master_EtaPRO_Knowledge | Pilot document-level source for validating Batch 1 draft facts. | In progress |
| `SRC-ETAPRO-DOC-0002` | Toshiba EtaPRO APM Introduction for Customer_r1.pdf | Product overview, APM positioning, module families, use cases. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0003` | EtaPRO Overview (New March 2025).pdf | Product overview, analytics spectrum, embedded apps, user experience. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0004` | EtaPRO technology.pdf | Architecture, modules, deployment, interfaces; commercial sections excluded. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0005` | EtaPRO-Platform-Flysht-2.pdf | Platform scope, Archive, reporting, web/mobile access. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0006` | Brochure-EtaPRO-VirtualPlant-_22.pdf | VirtualPlant details. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0007` | EtaPRO-APR-Flysht-1.pdf | APR details; savings examples excluded. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0008` | EtaPRO-Predictor-Flysht-1.pdf | Predictor details. | Reviewed for draft enrichment |
| `SRC-ETAPRO-DOC-0009` | EtaPROMonitorDiagnBrochure-2.pdf | M&D monitoring workflows and support context. | Reviewed for draft enrichment |

### Validated / Refined Draft Facts

| Topic | Batch 1 Draft Note | Validation Result | Evidence Source | Review Status |
|---|---|---|---|---|
| General concept | EtaPRO APM is described as a solution for optimizing power plant operations and maintenance by combining data integration, analytics, condition monitoring, and performance monitoring. | Refined by primary sources: EtaPRO is described here as a real-time performance and condition monitoring platform for power-generation assets, with APM-oriented modules for data archiving, thermodynamic modeling, anomaly detection, diagnostics, reporting, and user visibility. | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005` | Draft, pending human review |
| Vendor | The sheet lists Toshiba Energy Systems & Solutions Corporation as the vendor. | Still to validate: sources show Toshiba and EtaPRO LLC contexts; use neutral vendor wording until product ownership and official local representation are confirmed. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003` | Still to validate |
| Problems solved | EtaPRO is associated with unplanned downtime, performance degradation, data silos, and availability or outage reporting risk. | Refined by source: reviewed sources support performance monitoring, anomaly detection, predictive diagnostics, reporting, logging, fleet visibility, and issue follow-up. Availability/outage reporting detail remains partially validated. | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005`, `SRC-ETAPRO-DOC-0009` | Draft, pending human review |
| Core capabilities | Candidate capability areas include thermodynamic modeling, anomaly detection, rotating equipment analysis, historian/performance data storage, and performance monitoring. | Validated by primary sources at module-family level: Archive, VirtualPlant, APR, and Predictor are supported across reviewed documents. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005`, `SRC-ETAPRO-DOC-0006`, `SRC-ETAPRO-DOC-0007`, `SRC-ETAPRO-DOC-0008` | Draft, pending human review |
| Typical use cases | The sheet emphasizes power generation, including thermal, gas, renewables, hydro, geothermal, nuclear, and industrial co-generation or utilities contexts. | Refined by source: reviewed documents support broad power-generation contexts, including conventional, combined-cycle, nuclear, geothermal, hydro, wind, solar, and battery examples; exact module coverage varies and remains to validate by technology. | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0006` | Partially supported |
| Integration relevance | The sheet lists interfaces with DCS, PLC, PI, OPC UA, Modbus, and Bently Nevada 3500 as candidate integration areas requiring validation. | Refined by source: plant OT flow, selected interfaces, PI/source historian context, and Avenue Maximo handoff are partially supported. OPC UA and other detailed protocol/API claims remain open. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | Partially supported |
| Deployment model | The sheet describes on-premises or cloud deployment as candidate models. | Refined by source: Client/Server architecture and centralized/decentralized topology options are supported; cloud wording, infrastructure requirements, and security zones remain still to validate. | `SRC-ETAPRO-DOC-0004` | Partially supported |
| APM / IIoT / Historian positioning | EtaPRO should be treated as an APM and performance monitoring candidate for asset-intensive operations, especially power generation. | Validated by source for APM/performance/condition monitoring and historian-linked data management. General IIoT-platform positioning remains still to validate. | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005` | Draft, pending human review |

## Open Questions

- Which official vendor / product ownership wording should be used for EtaPRO in the current local context?
- Which module names and boundaries are standard product capabilities, optional modules, services, or project-specific configurations?
- Which deployment models are officially supported for current EtaPRO versions, including cloud, hosted, customer-hosted, and hybrid options?
- Which protocol/API claims are fully supported, including OPC UA, OPC HDA, REST, .NET APIs, and other enterprise integration methods?
- What are the validated cybersecurity, authentication, Active Directory, SSO, network-zone, and data-diode requirements?
- What are the validated system requirements, sizing inputs, operating-system support, redundancy patterns, and backup/restore expectations?
- Which limitations, prerequisites, exclusions, and dependency assumptions should be documented for tenders?
- Which EtaPRO claims can be compared with IBM MAS APM only after both sides have source-backed validation?

## Excluded Content

- Pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, and commercial terms are excluded from this wiki page.
- Commercial-accounting, contract, payment, invoice, PPA/PWPA charge, settlement, and rate details are excluded from wiki enrichment.
- Savings amounts and payback figures found in source documents are excluded. Non-pricing case-study benefits may be summarized later only if source-backed and reviewed.
- Product Owner/Admin may use restricted pricing or commercial information outside wiki pages for BOM building, budget estimation, proposal estimation, or internal commercial planning only.
- NotebookLM-derived content is not treated as approved knowledge and cannot independently support wiki claims.

## Review Notes

- Keep this page `draft`, `private`, and `confidence: low` until human review is complete.
- Keep comparison with IBM MAS APM deferred until validated criteria exist for both EtaPRO and IBM MAS.
- Do not promote source-backed draft facts into final vendor claims without product-owner review.
