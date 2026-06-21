# APM & IIoT Offer Map v1 Report

## Summary

Ran the first manual artifact workflow for the Avenue APM & IIoT offer-map lane.

The workflow strengthened the existing Source Pack and created a structured internal Offer Map v1. The Offer Map converts product-level solution knowledge into draft Avenue-branded offer themes while keeping evidence, assumptions, validation gaps, and review status visible.

This batch did not create a final strategy brief, public marketing copy, runtime skill, agent, crawler, CRM workflow, dashboard, graph database, backend/API service, authentication, SaaS feature, chatbot, public portal, or automation.

## Source Pack Reviewed / Updated

Updated `artifacts/source-packs/apm-iiot-source-pack-v0.md`.

Key improvements:

- updated output target to `artifacts/offer-maps/apm-iiot-offer-map-v1.md`;
- replaced older future-skill labels with current catalog skills;
- added IBM MAS and AVEVA PI as future-validation solution inputs;
- added capability, pattern, tender mapping, and source registry context;
- added a source maturity snapshot;
- expanded capability and product-to-capability mapping;
- kept the artifact as a Source Pack, not a strategy document.

## Offer Map Created

Created `artifacts/offer-maps/apm-iiot-offer-map-v1.md`.

The artifact uses:

- Product Owner Role as the primary role;
- Presales Consultant, Sales Strategist, Data Governance Reviewer, and Technical Reviewer perspectives as supporting lenses;
- `build_offer_map`, `build_solution_to_capability_matrix`, and `review_claims_and_evidence` skill guidance;
- the existing Source Pack and Knowledge Hub solution pages as evidence inputs.

## Offer Themes Included

The Offer Map includes four draft internal Avenue offer themes:

- Industrial Data Foundation
- Asset Health Starter
- Power APM & Early Warning
- Operational Intelligence Dashboard

These are internal draft themes only. They are not approved public offer names, final packages, or final market priorities.

## Product-To-Offer Mapping Summary

The mapping treats products as components rather than the main offer story.

Current stronger source-backed inputs:

- EtaPRO for power-generation APM, performance monitoring, early warning, and diagnostics.
- Canary for historian/time-series data foundation.
- IDBoxRT for operational data hub, IIoT-adjacent integration, contextualization, dashboards, and data exposure.
- LUCA BDS for BI, reporting, analytics, and business/operational decision-support views.

Future-validation placeholders:

- IBM MAS for EAM, asset health, maintenance workflow, and Maximo integration context.
- AVEVA PI for historian incumbent, comparison, and operational data infrastructure context.
- AVEVA APM for future APM landscape validation.

## Capability Matrix Summary

The Offer Map includes a capability-to-offer matrix using these support levels:

- strong source-backed fit
- partial fit
- possible fit
- future validation needed
- not applicable

Capabilities covered include historian/time-series foundation, operational data integration, performance monitoring, early warning/anomaly detection, asset health, dashboard/reporting, BI/analytics, data contextualization, power plant performance, IIoT/edge collection, tender requirement mapping, and proposal/presales support.

## Evidence And Assumption Handling

Evidence is kept in source-aware sections and tied to the Source Pack, solution pages, capability pages, pattern pages, and tender mapping pages.

Assumptions are explicit. The Offer Map does not treat draft solution pages, placeholder pages, NotebookLM-derived extracts, tender mapping templates, or product-owner judgments as final truth.

## Commercial / Pricing Handling

No pricing, licensing, discounts, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.

The Offer Map explicitly excludes commercial and pricing content and keeps offer packaging decisions pending human/product-owner review.

## Scope Preserved

Preserved scope boundaries:

- no runtime skills;
- no runtime modes;
- no agents;
- no crawler;
- no CRM workflow;
- no graph database;
- no dashboard UI;
- no backend/API service;
- no authentication;
- no SaaS/multi-tenant features;
- no chatbot/public portal;
- no automation;
- no public-facing marketing claims;
- no unsupported final product claims;
- no final market priority decisions.

## Files Updated

Updated:

- `artifacts/source-packs/apm-iiot-source-pack-v0.md`

Created:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`
- `docs/APM_IIOT_OFFER_MAP_V1_REPORT.md`

## Validation / Build Results

Passed:

- `npm.cmd test`
- `cd apps/wiki`; `npm.cmd run validate:metadata`
- `cd apps/wiki`; `npm.cmd run build`

Result summary:

- Root test suite: 7 tests passed.
- Wiki metadata validation: 33 wiki pages validated.
- Wiki production build: completed successfully and generated static files.

## Recommended Next Step

Review `artifacts/offer-maps/apm-iiot-offer-map-v1.md` with the Product Owner and Data Governance Reviewer.

After review, create:

```text
artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md
```

ChatGPT, Gemini, or Claude may be used for a stronger business-facing strategy narrative after the structured Offer Map is reviewed and corrected.

## Open Questions For Human Review

- Should IBM MAS and AVEVA PI be enriched before the strategy brief?
- Which offer should be productized first?
- Which customer segment should be enriched first?
- Which partner/channel constraints affect offer positioning?
- Which tender requirement patterns are reusable enough to become standard checklists?
- Which internal offer names should remain internal versus later public-safe?
