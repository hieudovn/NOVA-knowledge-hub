---
artifact_type: offer_map
status: draft
visibility: internal
owner: Hieu Do
intended_users:
  - product_owner
  - sales
  - presales
  - management
source_refs:
  - content/wiki/solutions/etapro.md
  - content/wiki/solutions/canary.md
  - content/wiki/solutions/idboxrt.md
  - content/wiki/solutions/luca-bds.md
  - content/wiki/solutions/ibm-mas.md
  - content/wiki/solutions/aveva-pi.md
  - content/wiki/capabilities/apm.md
  - content/wiki/capabilities/industrial-historian.md
  - content/wiki/capabilities/iiot-platform.md
  - content/wiki/patterns/historian-to-apm.md
  - content/wiki/tender/apm-requirement-mapping.md
  - content/wiki/tender/historian-requirement-mapping.md
input_artifacts:
  - artifacts/source-packs/apm-iiot-source-pack-v0.md
output_artifacts:
  - artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md
  - artifacts/sales-playbooks/apm-iiot-sales-playbook-v1.md
  - artifacts/presales-checklists/apm-iiot-presales-checklist-v1.md
related_modes: []
related_skills:
  - build_offer_map
  - build_solution_to_capability_matrix
  - review_claims_and_evidence
primary_role: Product Owner Role
supporting_roles:
  - Presales Consultant Role
  - Sales Strategist Role
  - Data Governance Reviewer Role
quality_rubric: docs/14_OPERATING_ROLES_AND_QUALITY_GUIDE.md#cross-role-quality-rubric
review_status: needs_review
last_reviewed:
reviewed_by:
commercial_sensitivity: none
public_safe: false
---

# APM & IIoT Offer Map v1

## Role / Audience / Quality Lens

Primary role: Product Owner Role.

Supporting roles: Presales Consultant Role, Sales Strategist Role, Data Governance Reviewer Role, Technical Reviewer Role.

Quality lens: strategic usefulness, business clarity, evidence discipline, technical credibility, actionability, public/commercial safety, and role fidelity.

## Executive Summary For Internal Review

This Offer Map converts product-level solution knowledge into draft Avenue-branded offer themes for APM & IIoT work.

It is an internal, source-aware product-owner artifact. It is not a final strategy brief, not public marketing copy, and not a final packaging or commercial decision.

The current working direction is to lead with customer pain point, segment, and capability need rather than a vendor product list. Products remain supporting components that can be selected by Presales and Technical Review after the customer context, data maturity, and requirement scope are clear.

## Candidate Avenue Offer Architecture

The four candidate offer themes below are draft internal buckets for review.

### 1. Industrial Data Foundation

Purpose: Help industrial customers collect, organize, contextualize, visualize, and reuse operational data as a foundation for APM, dashboards, analytics, reporting, and tender requirements.

Target customer / segment: plants with fragmented OT data, weak historian access, limited trend history, scattered dashboards, or upcoming historian/data-platform requirements.

Primary pain points:

- scattered SCADA, DCS, PLC, sensor, historian, file, database, or enterprise data;
- limited historical visibility;
- raw tags without asset or process context;
- difficulty feeding dashboards, APM, reports, or analytics.

Typical entry point: historian modernization, data integration discovery, tender requirement review, or operational visibility gap.

Possible solution components:

- historian/time-series layer;
- industrial data hub or IIoT-adjacent integration layer;
- contextualized asset/signal model;
- dashboards, trends, reports, and downstream data access.

Supporting products:

- Canary: primary current historian/time-series source-backed input.
- IDBoxRT: primary current operational data hub / integration / contextualization input.
- LUCA BDS: supporting BI/data integration and reporting input.
- AVEVA PI: future placeholder for incumbent, comparison, or historian requirement context.

Required validated knowledge:

- source systems, protocols, tags, sampling, data quality, retention, security, user access, backup/restore, and downstream integration needs.

Assumptions:

- customers may need a data foundation before advanced APM claims are credible;
- Canary, IDBoxRT, and LUCA BDS may be complementary in some architectures, but this is not automatically true for every opportunity.

Open questions:

- When should Avenue position a historian, an operational data hub, BI/reporting, or a combination?
- Which AVEVA PI comparison claims are source-backed enough to use?

Sales / presales notes:

- Sales should start with the operational data problem, not "which historian product."
- Presales should validate data source inventory and target use cases before selecting components.

### 2. Asset Health Starter

Purpose: Give customers a controlled starting point for asset health visibility using available plant data, condition indicators, reliability context, and review-ready monitoring outputs.

Target customer / segment: asset-intensive plants with reliability concerns, early condition-monitoring needs, or maintenance teams seeking better prioritization.

Primary pain points:

- asset condition is not visible early enough;
- maintenance action is reactive or calendar-driven;
- available plant data is not mapped to assets or reliability decisions;
- teams need a practical first step before broad APM rollout.

Typical entry point: reliability workshop, maintenance pain-point discussion, existing Maximo/EAM conversation, or APM requirement discovery.

Possible solution components:

- asset and tag mapping;
- selected condition indicators;
- historian or data hub input;
- simple dashboard/reporting layer;
- future EAM/CMMS handoff where validated.

Supporting products:

- EtaPRO: primary current power-generation condition/performance input where the asset context is power plant equipment.
- Canary: supporting historian/data input.
- IDBoxRT: supporting data hub, context, dashboard, event, and API input.
- IBM MAS: future placeholder for EAM, asset health, maintenance execution, and Maximo integration context.
- LUCA BDS: supporting reporting or decision-support input when business-facing views are needed.

Required validated knowledge:

- asset classes, existing asset register, available tags, failure modes, work-process expectations, and EAM/CMMS integration needs.

Assumptions:

- a starter offer may be valuable when customers are not ready for full APM scope;
- the maintenance workflow layer may require IBM MAS or another EAM/CMMS, but current MAS evidence is not mature enough for strong claims.

Open questions:

- Which asset classes should be first: rotating equipment, balance of plant, electrical assets, utility systems, or production-critical equipment?
- What minimum data quality is required for a credible starter offer?

Sales / presales notes:

- Sales should frame this as a low-risk discovery and visibility step.
- Presales should avoid promising predictive maintenance unless data, model, and workflow readiness are validated.

### 3. Power APM & Early Warning

Purpose: Support power-generation customers with performance monitoring, anomaly detection, early warning, diagnostics, and monitoring/diagnostic workflows.

Target customer / segment: power generation owners/operators, performance teams, reliability teams, monitoring centers, and utilities with generation assets.

Primary pain points:

- plant or unit performance is degrading;
- abnormal behavior is detected late;
- rotating equipment diagnostics need better support;
- operations, engineering, and maintenance need a shared monitoring view.

Typical entry point: performance monitoring discussion, M&D center concept, power plant reliability issue, or APM tender requirement.

Possible solution components:

- EtaPRO Archive / EPArchive data context;
- EtaPRO VirtualPlant;
- EtaPRO APR;
- EtaPRO Predictor;
- monitoring/reporting utilities;
- historian/data integration support if required by the customer architecture.

Supporting products:

- EtaPRO: primary current source-backed component.
- Canary: supporting historian/data foundation where required.
- IDBoxRT: supporting data hub or operational visibility layer where required.
- IBM MAS: future placeholder for maintenance workflow handoff where source review supports it.
- LUCA BDS: supporting management or operational reporting where BI views are required.

Required validated knowledge:

- plant type, units, modules required, historian/DCS/SCADA sources, deployment model, cybersecurity, user roles, and EAM/CMMS handoff assumptions.

Assumptions:

- this is the strongest current fit area because EtaPRO source pages are richer than the IBM MAS and AVEVA PI placeholders.
- fit outside power generation should not be assumed.

Open questions:

- Which generation technologies should Avenue target first?
- Which EtaPRO modules are required for each common customer scenario?

Sales / presales notes:

- Sales should lead with power plant performance and early-warning pain points.
- Presales should validate module fit, data availability, and deployment constraints before solution design.

### 4. Operational Intelligence Dashboard

Purpose: Package operational visibility, dashboards, reports, synoptics, events, maps, BI views, and decision-support outputs around reviewed data sources and workflows.

Target customer / segment: operations, engineering, reliability, management, and business users who need clearer operational views across systems.

Primary pain points:

- teams rely on manual reports or disconnected files;
- dashboards are fragmented across systems;
- operational and business users cannot see a shared view;
- tender requirements ask for reporting, dashboards, alarms, events, or management visibility.

Typical entry point: dashboard request, operational reporting gap, IIoT visibility discussion, or tender reporting requirement.

Possible solution components:

- IDBoxRT dashboards, reports, synoptics, maps, alarms, events, notifications, and API-style exposure;
- Canary Axiom dashboards, trends, and reports;
- LUCA BDS reports, dashboards, charts, forms, navigation, and shared workspaces;
- EtaPRO monitoring/reporting utilities for power-generation contexts.

Supporting products:

- IDBoxRT: primary current operational intelligence / data hub input.
- LUCA BDS: primary current BI/reporting and analytics input.
- Canary: supporting historian visualization input.
- EtaPRO: supporting monitoring/reporting input for power-generation use cases.

Required validated knowledge:

- dashboard users, source systems, refresh needs, operational versus management view boundaries, security/access control, and support ownership.

Assumptions:

- dashboard requests often hide deeper data foundation, governance, and workflow needs;
- dashboard scope should not be treated as automatically equivalent to a full IIoT platform or APM system.

Open questions:

- Which dashboard patterns are reusable across customers?
- Which dashboards should become public-safe examples after review?

Sales / presales notes:

- Sales should start from the decision or workflow the customer needs to improve.
- Presales should identify whether the requirement is historian visualization, operational dashboard, BI/reporting, or APM monitoring.

## Product-To-Offer Mapping

Relationship levels: primary component, supporting component, optional component, future placeholder, not currently validated.

| Product / Solution | Industrial Data Foundation | Asset Health Starter | Power APM & Early Warning | Operational Intelligence Dashboard |
|---|---|---|---|---|
| EtaPRO | optional component | primary component for power-generation asset/performance contexts | primary component | supporting component for power-generation monitoring/reporting |
| Canary | primary component | supporting component | supporting component when historian/data foundation is needed | supporting component |
| IDBoxRT | primary component | supporting component | optional component when data hub/visibility is needed | primary component |
| LUCA BDS | supporting component | optional component | optional component for reporting/decision support | primary component |
| IBM MAS | future placeholder | future placeholder | future placeholder for maintenance workflow handoff | optional component only after validation |
| AVEVA PI | future placeholder | future placeholder as existing historian context | supporting/future placeholder as existing historian context | future placeholder |
| AVEVA APM | not currently validated | future placeholder | future placeholder | not currently validated |

## Capability-To-Offer Matrix

Support levels: strong source-backed fit, partial fit, possible fit, future validation needed, not applicable.

| Capability | Industrial Data Foundation | Asset Health Starter | Power APM & Early Warning | Operational Intelligence Dashboard |
|---|---|---|---|---|
| Historian / time-series data foundation | strong source-backed fit | partial fit | partial fit | partial fit |
| Operational data integration | strong source-backed fit | partial fit | partial fit | strong source-backed fit |
| Performance monitoring | possible fit | partial fit | strong source-backed fit | partial fit |
| Early warning / anomaly detection | future validation needed | partial fit | strong source-backed fit | possible fit |
| Asset health / maintenance integration | possible fit | future validation needed | partial fit | possible fit |
| Dashboard / reporting | partial fit | partial fit | partial fit | strong source-backed fit |
| BI / analytics | partial fit | possible fit | possible fit | strong source-backed fit |
| Data contextualization | partial fit | partial fit | partial fit | partial fit |
| Power plant performance | not applicable | partial fit | strong source-backed fit | partial fit |
| IIoT / edge data collection | partial fit | possible fit | possible fit | partial fit |
| Tender requirement mapping | partial fit | partial fit | partial fit | partial fit |
| Proposal/presales support | partial fit | partial fit | partial fit | partial fit |

## Segment / Use-Case Mapping

| Segment / Use Case | Likely Pain Points | Likely Avenue Offer | Suggested Sales Motion | Evidence Status | Open Questions |
|---|---|---|---|---|---|
| Power generation | performance degradation, abnormal behavior, rotating equipment diagnostics, shared monitoring view | Power APM & Early Warning | Start with plant performance, early warning, and M&D-style workflow discovery. | Strongest current fit through EtaPRO draft evidence. | Which generation technologies and EtaPRO modules should be prioritized first? |
| Utilities / transmission / distribution | reliability visibility, operational reporting, asset and work-process context | Asset Health Starter or Operational Intelligence Dashboard | Start with asset/operations visibility and validate EAM/CMMS context. | Possible fit; current strongest evidence is not T&D-specific. | Which T&D asset classes and systems are in scope? |
| Oil & gas / petrochemical | historian/data foundation, operational visibility, reporting, reliability data needs | Industrial Data Foundation or Operational Intelligence Dashboard | Start with data foundation and operational visibility; avoid unsupported APM claims. | Partial fit from historian, data hub, and BI pages; segment evidence needs enrichment. | Which source systems, historian incumbents, and safety constraints apply? |
| Manufacturing / F&B / cement / steel | fragmented data, dashboard/reporting gaps, quality/production visibility | Industrial Data Foundation or Operational Intelligence Dashboard | Start with operations dashboard, production visibility, historian, or reporting pain point. | Partial fit from Canary, IDBoxRT, LUCA BDS, and neutral capability pages. | Which industry-specific processes and KPIs are reusable? |
| Existing Maximo / EAM customers | asset records and maintenance workflow exist, but condition data and operational context may be disconnected | Asset Health Starter | Start with historian/condition data to maintenance workflow discovery. | Future validation needed because IBM MAS page is placeholder-level. | Which MAS modules, integration interfaces, and workflow handoffs are source-backed? |
| Digital transformation / tender-driven projects | broad requirements across historian, dashboard, APM, integration, and reporting | Industrial Data Foundation plus selected add-ons | Start with requirement decomposition and evidence-backed fit/gap mapping. | Tender mapping pages exist as draft templates, not compliance evidence. | Which requirement patterns recur often enough to standardize? |

## Sales / Presales Usage Notes

- Sales should start from pain point and segment, not vendor product.
- Sales should use these themes as internal discovery frames, not as approved public offer names.
- Presales should select components based on customer maturity, source systems, requirements, data quality, cybersecurity, deployment constraints, and review status.
- Technical review is required before final proposal, tender compliance statement, architecture diagram, or implementation scope.
- Commercial, pricing, proposal, BOM, discount, fee, and commercial-term content remains outside this artifact.

## Evidence Basis

Primary source pack:

- `artifacts/source-packs/apm-iiot-source-pack-v0.md`

Primary solution pages:

- `content/wiki/solutions/etapro.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/luca-bds.md`

Placeholder or future-validation solution pages:

- `content/wiki/solutions/ibm-mas.md`
- `content/wiki/solutions/aveva-pi.md`
- `content/wiki/solutions/aveva-apm.md`

Capability, pattern, and tender mapping references:

- `content/wiki/capabilities/apm.md`
- `content/wiki/capabilities/industrial-historian.md`
- `content/wiki/capabilities/iiot-platform.md`
- `content/wiki/capabilities/condition-monitoring.md`
- `content/wiki/capabilities/predictive-maintenance.md`
- `content/wiki/patterns/historian-to-apm.md`
- `content/wiki/patterns/maximo-integration.md`
- `content/wiki/tender/apm-requirement-mapping.md`
- `content/wiki/tender/historian-requirement-mapping.md`

Evidence discipline:

- Source pages are draft, private, and low confidence unless later reviewed.
- NotebookLM-derived extracts remain review aids only unless validated against original sources.
- Tender mapping pages structure requirements; they do not prove compliance.
- Product-to-offer and capability-to-offer mappings are internal draft judgments for review.

## Assumptions

- Avenue should package APM & IIoT around reusable offer themes rather than presenting a vendor product list.
- The four offer themes are useful organizing buckets, not approved product packaging.
- EtaPRO currently provides the strongest source-backed input for power-generation APM and early-warning conversations.
- Canary currently provides the strongest source-backed input for historian/time-series foundation conversations.
- IDBoxRT currently provides the strongest source-backed input for operational data hub and operational intelligence conversations.
- LUCA BDS currently provides source-backed input for BI, reporting, and decision-support views.
- IBM MAS and AVEVA PI are strategically important to map, but current local pages are placeholder-level and should not be used for strong claims.
- Customer and tender records should later sharpen segment priority, value, urgency, and entry strategy.

## Open Questions

- IBM MAS solution page maturity: which source documents should validate MAS Manage, Monitor, Health, Predict, and APM/reliability boundaries?
- AVEVA PI source audit/enrichment status: which documents should validate current product naming, architecture, CONNECT boundaries, and historian comparison criteria?
- Partner protection/channel constraints: what partner rules affect how Avenue can package or position each component?
- Which offer should be productized first?
- Which customer segment should be enriched first?
- Which tender requirement patterns are reusable across APM, historian, IIoT, dashboard, and reporting opportunities?
- Which offer names should remain internal draft names versus later public-safe names?
- Which claims can move from low-confidence draft to reviewed internal knowledge?

## Not Ready For Final Strategy Yet

This artifact is an internal draft input to strategy, not an approved strategy.

It is not ready for final strategy because:

- most source pages remain draft, private, and low confidence;
- IBM MAS, AVEVA PI, and AVEVA APM need deeper source extraction before strong mapping;
- customer, plant, tender, competitor, incumbent, and partner constraints are not yet connected;
- segment priority has not been validated with opportunity or market evidence;
- technical architecture, delivery readiness, and integration assumptions need review;
- commercial and pricing decisions are intentionally excluded.

## Recommended Next Artifact

Recommended next artifact:

```text
artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md
```

Before creating the strategy brief:

- review this Offer Map with the Product Owner and Data Governance Reviewer;
- decide whether IBM MAS and AVEVA PI enrichment must happen first;
- select the first segment or offer theme for deeper customer/tender enrichment;
- use ChatGPT, Gemini, or Claude for high-quality strategy narrative only after this structured Offer Map is reviewed.

## Review Notes

- Review status: needs_review.
- Do not copy this artifact into public content.
- Do not use this artifact as final tender compliance evidence.
- Do not turn offer themes into approved packaging without human/product-owner review.
- Do not add commercial or pricing terms.

## Excluded / Restricted Content

Excluded from this artifact:

- pricing;
- licensing;
- discounts;
- proposal prices;
- budgetary prices;
- BOM prices;
- service fees;
- support fees;
- training fees;
- commercial terms;
- final product packaging decisions;
- public-facing marketing claims;
- unsupported product comparisons.

