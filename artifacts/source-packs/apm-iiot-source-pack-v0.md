---
artifact_type: source_pack
status: draft
visibility: internal
owner: Hieu Do
intended_users:
  - Presales
  - Technical
  - Product Strategy
source_refs:
  - source_id: WIKI-SOLUTION-ETAPRO
    path: content/wiki/solutions/etapro.md
  - source_id: WIKI-SOLUTION-CANARY
    path: content/wiki/solutions/canary.md
  - source_id: WIKI-SOLUTION-IDBOXRT
    path: content/wiki/solutions/idboxrt.md
  - source_id: WIKI-SOLUTION-LUCA-BDS
    path: content/wiki/solutions/luca-bds.md
  - source_id: WIKI-SOLUTION-IBM-MAS
    path: content/wiki/solutions/ibm-mas.md
  - source_id: WIKI-SOLUTION-AVEVA-PI
    path: content/wiki/solutions/aveva-pi.md
  - source_id: WIKI-CAPABILITY-APM
    path: content/wiki/capabilities/apm.md
  - source_id: WIKI-CAPABILITY-HISTORIAN
    path: content/wiki/capabilities/industrial-historian.md
  - source_id: WIKI-CAPABILITY-IIOT
    path: content/wiki/capabilities/iiot-platform.md
  - source_id: WIKI-PATTERN-HISTORIAN-TO-APM
    path: content/wiki/patterns/historian-to-apm.md
  - source_id: WIKI-TENDER-APM-MAPPING
    path: content/wiki/tender/apm-requirement-mapping.md
  - source_id: WIKI-TENDER-HISTORIAN-MAPPING
    path: content/wiki/tender/historian-requirement-mapping.md
  - source_id: DOC-DATA-ENRICHMENT-STRATEGY
    path: docs/12_DATA_ENRICHMENT_STRATEGY.md
  - source_id: DOC-ARTIFACT-TAXONOMY
    path: docs/13_ARTIFACT_TAXONOMY.md
input_artifacts: []
output_artifacts:
  - artifacts/offer-maps/apm-iiot-offer-map-v1.md
related_modes:
  - Presales Consultant Role
  - Product Owner Role
  - Technical Reviewer Role
related_skills:
  - build_source_pack
  - build_offer_map
  - build_solution_to_capability_matrix
  - review_claims_and_evidence
review_status: needs_review
last_reviewed:
reviewed_by:
commercial_sensitivity: possible
public_safe: false
---

# APM & IIoT Source Pack v0

## Purpose

This source pack gathers draft, source-backed inputs for a future Avenue APM & IIoT Offer Map.

It is not the final business strategy. It does not decide packaging, pricing, commercial approach, partner commitments, or final market prioritization.

## Source Inputs

| Source ID | Source Page / Document | Role In This Source Pack | Current Review State |
|---|---|---|---|
| `WIKI-SOLUTION-ETAPRO` | `content/wiki/solutions/etapro.md` | Power-generation APM, performance monitoring, condition monitoring, anomaly detection, and rotating machinery diagnostics input. | Draft, private, low confidence |
| `WIKI-SOLUTION-CANARY` | `content/wiki/solutions/canary.md` | Industrial historian and time-series data foundation input. | Draft, private, low confidence |
| `WIKI-SOLUTION-IDBOXRT` | `content/wiki/solutions/idboxrt.md` | Operational intelligence and industrial data hub input. | Draft, private, low confidence |
| `WIKI-SOLUTION-LUCA-BDS` | `content/wiki/solutions/luca-bds.md` | BI, data integration, analytics, and decision-support input. | Draft, private, low confidence |
| `WIKI-SOLUTION-IBM-MAS` | `content/wiki/solutions/ibm-mas.md` | Future EAM, asset health, maintenance execution, and Maximo integration context. | Draft placeholder, private, low confidence |
| `WIKI-SOLUTION-AVEVA-PI` | `content/wiki/solutions/aveva-pi.md` | Future historian comparison and data infrastructure context. | Draft placeholder, private, low confidence |
| `WIKI-CAPABILITY-APM` | `content/wiki/capabilities/apm.md` | Neutral APM capability boundary and tender vocabulary. | Draft, private, low confidence |
| `WIKI-CAPABILITY-HISTORIAN` | `content/wiki/capabilities/industrial-historian.md` | Neutral historian capability boundary and tender vocabulary. | Draft, private, low confidence |
| `WIKI-CAPABILITY-IIOT` | `content/wiki/capabilities/iiot-platform.md` | Neutral IIoT platform capability boundary and adjacent data-platform vocabulary. | Draft, private, low confidence |
| `WIKI-PATTERN-HISTORIAN-TO-APM` | `content/wiki/patterns/historian-to-apm.md` | Reusable pattern for data foundation feeding APM, condition monitoring, and maintenance workflows. | Draft, private, low confidence |
| `WIKI-TENDER-APM-MAPPING` | `content/wiki/tender/apm-requirement-mapping.md` | Reusable requirement categories for APM-related tender mapping. | Draft template, not compliance evidence |
| `WIKI-TENDER-HISTORIAN-MAPPING` | `content/wiki/tender/historian-requirement-mapping.md` | Reusable requirement categories for historian-related tender mapping. | Draft template, not compliance evidence |
| `DOC-DATA-ENRICHMENT-STRATEGY` | `docs/12_DATA_ENRICHMENT_STRATEGY.md` | Defines enrichment loop and recommended APM & IIoT offer-map track. | Draft strategy doc |
| `DOC-ARTIFACT-TAXONOMY` | `docs/13_ARTIFACT_TAXONOMY.md` | Defines artifact approach and future Source Pack to Offer Map path. | Draft taxonomy doc |

## Product / Solution Inventory

| Product / Solution | Conservative Draft Positioning | Source Page |
|---|---|---|
| EtaPRO | Power-generation performance and condition monitoring solution with draft positioning around plant performance, early warning, anomaly detection, rotating equipment diagnostics, and M&D-style operational visibility. | `content/wiki/solutions/etapro.md` |
| Canary | Industrial historian and time-series data foundation for collecting, storing, organizing, visualizing, and reusing operational process data. | `content/wiki/solutions/canary.md` |
| IDBoxRT | Operational intelligence and industrial data hub for connecting heterogeneous plant, enterprise, and external data sources, preparing data, and presenting it through dashboards/reports/API-style access. | `content/wiki/solutions/idboxrt.md` |
| LUCA BDS | Business intelligence, data integration, and analytics layer for useful views across multiple business and operational systems. | `content/wiki/solutions/luca-bds.md` |
| IBM MAS | Draft placeholder for enterprise asset management, maintenance workflow, asset health, monitoring, and predictive maintenance context. Use only as a future validation input in this workflow. | `content/wiki/solutions/ibm-mas.md` |
| AVEVA PI | Draft placeholder for industrial historian and operational data infrastructure context. Use only as a future validation input in this workflow. | `content/wiki/solutions/aveva-pi.md` |

## Source Maturity Snapshot

| Source Area | Current Maturity | Offer Map Treatment |
|---|---|---|
| EtaPRO | Rich draft page with multiple document-level evidence notes; still private and low confidence. | Use as source-backed current input for power APM, performance monitoring, early warning, and rotating machinery diagnostics. |
| Canary | Draft page with overview-level source validation and deferred detailed technical validation. | Use as source-backed current input for historian/time-series foundation, contextualized views, trends, dashboards, and reports. |
| IDBoxRT | Rich draft page with connector, data hub, operational visibility, dashboard/reporting, API, and security administration evidence notes. | Use as source-backed current input for operational data integration, IIoT-adjacent data hub, contextualization, dashboards, and external exposure. |
| LUCA BDS | Draft page with controlled BI/data integration/analytics overview; architecture and connector details need validation. | Use as source-backed current input for BI, reporting, shared views, and business/operational analytics. |
| IBM MAS | Draft placeholder with source registry stub and no detailed source extraction. | Treat as future placeholder for EAM, asset health, maintenance workflow, and Maximo integration. |
| AVEVA PI | Draft placeholder with registered source folder and no detailed source extraction. | Treat as future placeholder for historian comparison, incumbent context, and PI-related tender requirements. |
| Capability and pattern pages | Neutral draft anchors. | Use for vocabulary, boundaries, and requirement categories only; not final compliance evidence. |

## Capability Inventory

| Capability | Candidate Supporting Inputs | Review Note |
|---|---|---|
| Industrial historian / time-series data foundation | Canary; IDBoxRT as historian-adjacent data hub input. | Keep historian replacement and migration conclusions out of this source pack. |
| Operational data integration | IDBoxRT; LUCA BDS for business/operational data views; Canary for historian-centered data collection. | Exact connector/API claims require opportunity-specific validation. |
| Power APM / performance monitoring | EtaPRO. | Strongest current fit is power-generation performance and condition monitoring, based on draft page evidence. |
| Anomaly detection / early warning | EtaPRO APR; LUCA BDS has bounded analytics context but not final APM positioning. | Avoid broad AI/ML or APM claims unless validated by source. |
| Rotating machinery diagnostics | EtaPRO Predictor. | Keep detailed machinery scope and deployment assumptions as validation topics. |
| Dashboards / operational visibility | IDBoxRT, Canary Axiom, LUCA BDS, EtaPRO monitoring/reporting utilities. | Dashboard capability does not equal final dashboard product strategy. |
| Business and management reporting | LUCA BDS; IDBoxRT reporting; Canary and EtaPRO reporting as source-specific contexts. | Keep management decision outputs source-backed and reviewed. |
| Data contextualization | Canary Views / asset modeling; IDBoxRT asset/signal context; LUCA BDS query/data-flow organization. | Exact namespace, model, and governance claims need source and project validation. |
| IIoT / edge data collection | IDBoxRT has strongest current data-hub input; Canary has historian-centered edge/site/cloud context; broader IIoT claims remain bounded. | Do not position every data product as a broad IIoT platform. |
| Tender requirement mapping | APM and historian mapping pages provide draft categories. | Use only as requirement structuring input, not compliance proof. |
| Proposal / presales support | Source pages provide qualification questions, validation topics, and fit boundaries. | Useful for presales checklist and proposal outline after review. |

## Candidate Avenue Offer Themes

These are draft inputs only. They are not final strategic decisions.

### Industrial Data Foundation

Candidate idea: help customers collect, organize, contextualize, and make industrial operational data reusable.

Possible source inputs:

- Canary as historian/time-series data foundation.
- IDBoxRT as industrial data hub and operational intelligence layer.
- LUCA BDS as BI/data integration layer for business and operational views.

Validation needed:

- target customer segments;
- source-system requirements;
- historian replacement versus complement positioning;
- data governance, cybersecurity, retention, and ownership assumptions.

### Asset Health Starter

Candidate idea: create a practical starting point for asset health visibility using existing plant data and selected monitoring/analytics components.

Possible source inputs:

- EtaPRO for power-generation performance/condition monitoring.
- Canary or IDBoxRT as data foundation inputs depending on customer environment.
- LUCA BDS for reporting/decision-support context where appropriate.

Validation needed:

- asset classes;
- available data quality;
- required diagnostics depth;
- whether this is a monitoring, reporting, or APM conversation.

### Power APM & Early Warning

Candidate idea: position around power plant performance monitoring, anomaly detection, early warning, diagnostics, and monitoring center workflows.

Possible source inputs:

- EtaPRO as the main current source-backed input.
- Canary or IDBoxRT as data foundation/contextualization support only when customer architecture requires it.

Validation needed:

- generation technology;
- required EtaPRO modules;
- integration with historian, DCS/SCADA, and EAM/CMMS;
- cybersecurity and deployment model.

### Operational Intelligence Dashboard

Candidate idea: package operational data visibility, dashboards, reports, events, and decision-support views for operations, engineering, reliability, and management users.

Possible source inputs:

- IDBoxRT dashboards, reports, maps, alarms, notifications, and API-style exposure.
- Canary Axiom for historian dashboards/trends/reports.
- LUCA BDS dashboards, reports, forms, and shared workspaces.
- EtaPRO reporting and monitoring utilities in power-generation contexts.

Validation needed:

- dashboard users and workflows;
- source systems;
- refresh and retention needs;
- whether dashboards are operational, management, reliability, or tender-specific outputs.

## Product-To-Capability Mapping

| Candidate Capability | EtaPRO | Canary | IDBoxRT | LUCA BDS | IBM MAS | AVEVA PI |
|---|---|---|---|---|---|---|
| Power-generation performance monitoring | Primary current input | Not primary | Not primary | Not primary | Not currently validated | Not currently validated |
| Condition monitoring / APM-oriented insight | Primary current input | Data foundation support only | Possible data/visibility support | Reporting/analytics support only | Future EAM/asset health placeholder | Not currently validated |
| Industrial historian / time-series storage | Historian-linked data context through EtaPRO Archive / EPArchive | Primary current input | Historian-adjacent, not replacement conclusion | Not validated as historian | Not primary | Future historian placeholder |
| Industrial data hub / integration | Integration with plant data sources, exact interfaces to validate | Historian-centered data collection | Primary current input | BI/data integration input | Integration target or workflow consumer | Future data infrastructure placeholder |
| Dashboards / reports / visualization | Monitoring/reporting utilities | Axiom dashboards/trends/reports | Dashboards/reports/synoptics/maps/alarms | Dashboards/reports/forms/navigation | Future workflow/status reporting placeholder | Future historian visualization placeholder |
| Business decision-support analytics | Power operations context | Historian data context | Operational visibility context | Primary current input | Maintenance/reliability decision context placeholder | Operational data context placeholder |
| Tender requirement mapping | APM/performance evidence input | Historian evidence input | IIoT/data hub evidence input | BI/reporting evidence input | Future EAM/APM evidence input | Future historian evidence input |

## Segment / Use Case Signals

| Segment / Use Case | Candidate Relevance | Evidence Basis |
|---|---|---|
| Power generation performance and reliability | EtaPRO appears most directly relevant from current source pages. | `content/wiki/solutions/etapro.md` |
| Industrial historian modernization / data foundation | Canary and IDBoxRT provide current draft inputs, with comparison and replacement claims deferred. | `content/wiki/solutions/canary.md`, `content/wiki/solutions/idboxrt.md` |
| Operations visibility and reporting | IDBoxRT, Canary, LUCA BDS, and EtaPRO each contribute source-specific visibility/reporting inputs. | All four solution pages |
| Business and operational BI | LUCA BDS is the current source-backed BI/data integration input. | `content/wiki/solutions/luca-bds.md` |
| APM starter / early warning | EtaPRO provides the clearest current power APM/early-warning input; broader cross-product packaging remains to validate. | `content/wiki/solutions/etapro.md` |
| Tender-driven historian or APM projects | Tender mapping pages provide reusable requirement categories, but no compliance decisions. | `content/wiki/tender/apm-requirement-mapping.md`, `content/wiki/tender/historian-requirement-mapping.md` |
| Existing Maximo / EAM customers | IBM MAS page and Maximo integration pattern can support future maintenance-workflow discussion after source review. | `content/wiki/solutions/ibm-mas.md`, `content/wiki/patterns/maximo-integration.md` |

## Evidence Basis

- This artifact uses existing draft solution pages as the source layer.
- All four source pages are currently `status: draft`, `visibility: private`, and `confidence: low`.
- IBM MAS and AVEVA PI pages exist but should be treated as placeholders in this workflow because detailed extraction is not mature enough for strong offer claims.
- Capability, pattern, and tender pages are neutral draft anchors for vocabulary and requirement structuring, not compliance evidence.
- Claims are intentionally conservative and tied to the positioning already present in those pages.
- NotebookLM-derived extracts listed inside solution pages remain review aids only unless validated against primary sources.

## Assumptions

- Avenue may want an APM & IIoT offer map that combines data foundation, APM/performance monitoring, operational visibility, and BI/reporting themes.
- The four candidate offer themes are useful starting buckets, not final packages.
- The future Offer Map should preserve product boundaries rather than forcing every product into every offer.
- IBM MAS and AVEVA PI are important future mapping objects because they may appear as incumbent systems, complementary systems, or tender comparison requirements, but current evidence only supports placeholder treatment.
- Tender requirement mapping is useful for later proposal/presales artifacts, not for final compliance commitments in the Offer Map.

## Open Questions

- Which product or partner capability should anchor the first Avenue APM & IIoT Offer Map?
- Should the first offer map target power generation only, or include broader industrial segments?
- Which claims from each solution page are ready for human-reviewed internal approval?
- Which customer/tender records should be enriched next around these offer themes?
- Which competitor/incumbent references are needed before product strategy work?
- Which public-safe outputs, if any, are desired after internal review?
- Should IBM MAS and AVEVA PI enrichment happen before or after the first strategy brief?
- Which tender requirement patterns are common enough to become reusable offer validation checklists?
- Which customer segment should be enriched first around these offer themes?

## Not Ready For Final Strategy Yet

This source pack is not ready to become final strategy because:

- source pages are still draft/private/low-confidence;
- customer and tender records are not yet connected to these themes;
- partner capability and competitor/incumbent intelligence are not yet complete;
- commercial and pricing content is excluded;
- offer ownership, packaging, target segment priority, and delivery readiness require human review.

## Recommended Next Artifact

Create:

```text
artifacts/offer-maps/apm-iiot-offer-map-v1.md
```

Recommended scope:

- use this source pack as input;
- keep the four candidate offer themes draft-only;
- map product boundaries carefully;
- add capability and pattern page references;
- add partner, customer, tender, and competitor gaps as open questions;
- avoid final commercial packaging or pricing.

## Review Notes

- Keep this artifact as `draft` and `needs_review`.
- Do not copy this into public content.
- Do not treat candidate offer themes as approved strategy.
- Do not add pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, fees, or commercial terms.
