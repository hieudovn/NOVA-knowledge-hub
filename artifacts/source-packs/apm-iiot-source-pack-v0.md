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
  - source_id: DOC-DATA-ENRICHMENT-STRATEGY
    path: docs/12_DATA_ENRICHMENT_STRATEGY.md
  - source_id: DOC-ARTIFACT-TAXONOMY
    path: docs/13_ARTIFACT_TAXONOMY.md
input_artifacts: []
output_artifacts:
  - artifacts/offer-maps/apm-iiot-offer-map-v0.md
related_modes:
  - future_presales_mode
  - future_product_strategy_mode
  - future_technical_mode
related_skills:
  - future_source_synthesis
  - future_offer_mapping
  - future_solution_positioning
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
| `DOC-DATA-ENRICHMENT-STRATEGY` | `docs/12_DATA_ENRICHMENT_STRATEGY.md` | Defines enrichment loop and recommended APM & IIoT offer-map track. | Draft strategy doc |
| `DOC-ARTIFACT-TAXONOMY` | `docs/13_ARTIFACT_TAXONOMY.md` | Defines artifact approach and future Source Pack to Offer Map path. | Draft taxonomy doc |

## Product / Solution Inventory

| Product / Solution | Conservative Draft Positioning | Source Page |
|---|---|---|
| EtaPRO | Power-generation performance and condition monitoring solution with draft positioning around plant performance, early warning, anomaly detection, rotating equipment diagnostics, and M&D-style operational visibility. | `content/wiki/solutions/etapro.md` |
| Canary | Industrial historian and time-series data foundation for collecting, storing, organizing, visualizing, and reusing operational process data. | `content/wiki/solutions/canary.md` |
| IDBoxRT | Operational intelligence and industrial data hub for connecting heterogeneous plant, enterprise, and external data sources, preparing data, and presenting it through dashboards/reports/API-style access. | `content/wiki/solutions/idboxrt.md` |
| LUCA BDS | Business intelligence, data integration, and analytics layer for useful views across multiple business and operational systems. | `content/wiki/solutions/luca-bds.md` |

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

| Candidate Capability | EtaPRO | Canary | IDBoxRT | LUCA BDS |
|---|---|---|---|---|
| Power-generation performance monitoring | Primary current input | Not primary | Not primary | Not primary |
| Condition monitoring / APM-oriented insight | Primary current input | Data foundation support only | Possible data/visibility support | Reporting/analytics support only |
| Industrial historian / time-series storage | Historian-linked data context through EtaPRO Archive / EPArchive | Primary current input | Historian-adjacent, not replacement conclusion | Not validated as historian |
| Industrial data hub / integration | Integration with plant data sources, exact interfaces to validate | Historian-centered data collection | Primary current input | BI/data integration input |
| Dashboards / reports / visualization | Monitoring/reporting utilities | Axiom dashboards/trends/reports | Dashboards/reports/synoptics/maps/alarms | Dashboards/reports/forms/navigation |
| Business decision-support analytics | Power operations context | Historian data context | Operational visibility context | Primary current input |

## Segment / Use Case Signals

| Segment / Use Case | Candidate Relevance | Evidence Basis |
|---|---|---|
| Power generation performance and reliability | EtaPRO appears most directly relevant from current source pages. | `content/wiki/solutions/etapro.md` |
| Industrial historian modernization / data foundation | Canary and IDBoxRT provide current draft inputs, with comparison and replacement claims deferred. | `content/wiki/solutions/canary.md`, `content/wiki/solutions/idboxrt.md` |
| Operations visibility and reporting | IDBoxRT, Canary, LUCA BDS, and EtaPRO each contribute source-specific visibility/reporting inputs. | All four solution pages |
| Business and operational BI | LUCA BDS is the current source-backed BI/data integration input. | `content/wiki/solutions/luca-bds.md` |
| APM starter / early warning | EtaPRO provides the clearest current power APM/early-warning input; broader cross-product packaging remains to validate. | `content/wiki/solutions/etapro.md` |

## Evidence Basis

- This artifact uses existing draft solution pages as the source layer.
- All four source pages are currently `status: draft`, `visibility: private`, and `confidence: low`.
- Claims are intentionally conservative and tied to the positioning already present in those pages.
- NotebookLM-derived extracts listed inside solution pages remain review aids only unless validated against primary sources.

## Assumptions

- Avenue may want an APM & IIoT offer map that combines data foundation, APM/performance monitoring, operational visibility, and BI/reporting themes.
- The four candidate offer themes are useful starting buckets, not final packages.
- The future Offer Map should preserve product boundaries rather than forcing every product into every offer.

## Open Questions

- Which product or partner capability should anchor the first Avenue APM & IIoT Offer Map?
- Should the first offer map target power generation only, or include broader industrial segments?
- Which claims from each solution page are ready for human-reviewed internal approval?
- Which customer/tender records should be enriched next around these offer themes?
- Which competitor/incumbent references are needed before product strategy work?
- Which public-safe outputs, if any, are desired after internal review?

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
artifacts/offer-maps/apm-iiot-offer-map-v0.md
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
