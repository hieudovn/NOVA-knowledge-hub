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
  - source_id: SRC-APM-IIOT-0001
    title: AVENUE APM & IIoT Solutions
  - source_id: SRC-CANARY-DOC-0001
    title: Canary System Brochure.pdf
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

## Source-Backed Draft Notes

### Source Coverage

| Source ID | Source Title | Extraction Status | Notes |
|---|---|---|---|
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | Batch 1 draft extracted | Main source used for this draft extraction batch; reference URLs in the sheet were treated only as supporting references. |
| `SRC-APM-IIOT-0010` | Canary | Planned | Registered source folder exists; detailed source documents still need to be identified and reviewed. |

### Draft Facts from Source

| Topic | Draft Note | Evidence Source | Review Status |
|---|---|---|---|
| General concept | The sheet describes Canary as a NoSQL time-series database and industrial historian optimized for industrial automation. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Vendor | The sheet lists Canary Labs from the United States as the vendor. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Problems solved | The sheet associates Canary with high tag-volume historian performance, preservation of raw time-series data, tag naming inconsistency, network disruption risk, and historian administration burden. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Core capabilities | The sheet lists continuous industrial data collection, high-volume time-series storage, data contextualization, asset modeling, unified namespace concepts, visualization, and Excel access as candidate capability areas. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Typical use cases | The sheet includes industrial historian use cases across manufacturing, oil and gas, power and utilities, water/wastewater, and life sciences examples. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Integration relevance | The sheet describes Canary as collecting data from industrial automation sources and supporting downstream use through visualization, calculations, Excel access, and API-style consumption; exact interfaces require validation. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Deployment model | The sheet describes site historian, enterprise historian, hierarchical local-to-central historian, on-premises, and cloud deployment as candidate models; validate before treating as confirmed architecture. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| APM / IIoT / Historian positioning | Based on the sheet, Canary should be treated primarily as an Industrial Historian candidate with possible downstream support for APM, analytics, and reporting workflows. | `SRC-APM-IIOT-0001` | Draft, pending validation |
| Open questions | The sheet gives strong historian positioning but does not by itself prove current product limits, supported connectors, deployment constraints, or comparison conclusions against AVEVA PI. | `SRC-APM-IIOT-0001` | To validate |

### Open Questions

- Which Canary documents should be treated as authoritative for historian architecture and deployment models?
- Which use cases are reusable for Avenue positioning versus customer-specific examples?
- Which comparison criteria with AVEVA PI can be supported directly by source evidence?
- Which integration interfaces and retention behaviors are confirmed by current Canary documentation?

### Extraction TODO

- Identify detailed source documents.
- Validate product architecture.
- Validate deployment model.
- Validate integration claims.
- Validate limitations.
- Keep pricing/commercial information out of wiki.

## Document-Level Validation Notes

### Document Coverage

| Source ID | Document Title | Validation Role | Extraction Status |
|---|---|---|---|
| `SRC-CANARY-DOC-0001` | Canary System Brochure.pdf | Primary Batch 1.5 validation source for Canary overview, historian positioning, and high-level capabilities. | In progress |
| `SRC-CANARY-DOC-0002` | Canary.docx | Deferred secondary source for later crosscheck and open-question review. | Not started |
| `SRC-CANARY-DOC-0003` | Virtualize Your World.pdf | Deferred secondary source for later contextualization and virtual-view validation. | Not started |

### Validated / Refined Draft Facts

| Topic | Batch 1 Draft Note | Validation Result | Evidence Source | Review Status |
|---|---|---|---|---|
| General concept | Canary is described as a time-series database and industrial historian for industrial automation. | Refined by source: the brochure positions Canary as data historian technology built for industrial automation. | `SRC-CANARY-DOC-0001` | Draft validation note |
| Vendor | Canary Labs from the United States is listed as the vendor in Batch 1. | Still to validate: the brochure shows Canary branding and Canary Labs web domain, but vendor legal identity and country should be confirmed from another source. | `SRC-CANARY-DOC-0001` | Needs source crosscheck |
| Historian positioning | Canary should be treated primarily as an Industrial Historian candidate. | Validated by source: the brochure explicitly positions Canary as a data historian. | `SRC-CANARY-DOC-0001` | Draft validation note |
| Core capabilities | Candidate capabilities include collection, high-volume storage, contextualization, asset modeling, visualization, calculations, and downstream access. | Refined by source: the brochure supports collection and storage, virtual views, asset modeling, calculation server, event monitoring, visualization through Axiom, and general data connectors. | `SRC-CANARY-DOC-0001` | Draft validation note |
| Data collection | Batch 1 described continuous industrial data collection from automation sources. | Refined by source: the brochure supports collecting process data from edge and IIoT devices. Specific collectors, protocols, and source-system interfaces remain to validate. | `SRC-CANARY-DOC-0001` | Partial validation |
| Data storage | Batch 1 described high-volume time-series storage and preservation of raw historian data. | Refined by source: the brochure supports historian tag storage and brochure-level scale positioning. Retention behavior, compression details, and performance figures still require technical validation. | `SRC-CANARY-DOC-0001` | Partial validation |
| Visualization | Batch 1 described visualization and downstream use as candidate capability areas. | Refined by source: the brochure supports dashboards, trends, and reports through Axiom. Full visualization scope and client/tool boundaries remain to validate. | `SRC-CANARY-DOC-0001` | Partial validation |
| Contextualization / virtual views | Batch 1 included contextualization, asset modeling, and unified namespace concepts as candidate areas. | Refined by source: the brochure supports virtual views and asset modeling; unified namespace terminology still requires validation from a more specific document. | `SRC-CANARY-DOC-0001` | Partial validation |
| Deployment model | Batch 1 listed site historian, enterprise historian, local-to-central patterns, on-premises, and cloud as candidate deployment models. | Refined by source: the brochure supports edge, site, enterprise, and cloud positioning. Exact architecture, hosting model, and local-to-central design remain to validate. | `SRC-CANARY-DOC-0001` | Partial validation |
| Integration relevance | Batch 1 described integration with industrial automation sources and downstream use through visualization, calculations, Excel access, and API-style consumption. | Refined by source: the brochure supports general data connectors, Axiom visualization, calculation server, and collection from edge and IIoT devices. Specific connector list, Excel access, and API-style access remain to validate. | `SRC-CANARY-DOC-0001` | Partial validation |
| Product boundaries | Batch 1 treated Canary as a historian candidate with possible downstream support for analytics and reporting. | Refined by source: the brochure supports historian-centered scope with supporting visualization, calculations, event monitoring, and connectors; it does not establish broader APM or IIoT platform scope. | `SRC-CANARY-DOC-0001` | Conservative boundary note |
| Limitations | Batch 1 noted that product limits, supported connectors, deployment constraints, and comparison conclusions still require validation. | Still to validate: the brochure is not sufficient for detailed limits, exact connector support, retention behavior, security model, or AVEVA PI comparison conclusions. | `SRC-CANARY-DOC-0001` | Needs additional documents |

### Open Questions After Document Review

- Which technical document confirms current supported collectors, connector types, and interface details?
- Which source validates retention behavior, compression model, and historian read/write performance without relying on brochure-level statements alone?
- Which source confirms whether Excel access and API-style access are current supported product interfaces?
- Which deployment document explains edge, site, enterprise, cloud, and any local-to-central architecture patterns?
- Which source should be used for limitations, prerequisites, sizing constraints, and operational assumptions?

### Deferred Items

- Detailed extraction from `SRC-CANARY-DOC-0002` and `SRC-CANARY-DOC-0003` is deferred.
- Pricing, licensing, discounts, proposal terms, and commercial content are excluded.
- Canary vs AVEVA PI comparison conclusions remain deferred until both Canary and AVEVA PI source documents are reviewed.
- Case-study claims and industry-specific examples remain deferred to later document-level validation.

## Source Traceability

Current content is a draft structure based on the registered Canary source folder. Validate all capability, architecture, and comparison notes against `SRC-APM-IIOT-0010` before moving this page beyond `draft`.

## Review Notes

- Confirm product modules and supported connectors.
- Compare against AVEVA PI on validated criteria only.
- Keep this page as a solution anchor; move neutral historian concepts to the Industrial Historian capability page.
