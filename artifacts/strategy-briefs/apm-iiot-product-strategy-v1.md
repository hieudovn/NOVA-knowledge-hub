---
artifact_type: strategy_brief
status: draft
visibility: internal
owner: Hieu Do
intended_users:
  - product_owner
  - management
  - sales
  - presales
source_refs:
  - artifacts/offer-maps/apm-iiot-offer-map-v1.md
  - artifacts/source-packs/apm-iiot-source-pack-v0.md
input_artifacts:
  - artifacts/offer-maps/apm-iiot-offer-map-v1.md
output_artifacts:
  - artifacts/sales-playbooks/apm-iiot-sales-playbook-v1.md
  - artifacts/presales-checklists/apm-iiot-presales-checklist-v1.md
  - artifacts/management-decision-briefs/apm-iiot-management-decision-brief-v1.md
related_modes: []
related_skills:
  - define_product_strategy
  - prioritize_market_segments
  - create_management_brief
  - review_claims_and_evidence
primary_role: Product Owner Role
supporting_roles:
  - Executive Reviewer Role
  - Sales Strategist Role
  - Presales Consultant Role
  - Data Governance Reviewer Role
quality_rubric: docs/14_OPERATING_ROLES_AND_QUALITY_GUIDE.md#cross-role-quality-rubric
review_status: needs_review
last_reviewed:
reviewed_by:
commercial_sensitivity: none
public_safe: false
---

# APM & IIoT Product Strategy Brief v1

## Executive Summary

Avenue should position APM & IIoT as a set of Avenue-branded industrial offers, not as a catalog of vendor products.

The strongest immediate strategy is to lead with customer pain: operational data readiness, power plant performance, early warning, asset health visibility, and operational intelligence. Vendor products should be selected later as components based on fit, data maturity, plant context, and customer requirements.

Four draft offer themes should guide the first alignment cycle: Industrial Data Foundation, Asset Health Starter, Power APM & Early Warning, and Operational Intelligence Dashboard.

The recommended first priority is Power APM & Early Warning because current enriched knowledge is strongest around power-generation performance monitoring, anomaly detection, and diagnostic workflows. Industrial Data Foundation should be developed in parallel because most APM and dashboard opportunities depend on trusted operational data.

Operational Intelligence Dashboard is a useful sales and presales entry point when customers ask for visibility, reporting, or management views. Asset Health Starter is strategically attractive, but it should wait for stronger IBM MAS, EAM/CMMS, and maintenance workflow enrichment before being treated as a mature offer.

This brief is a draft internal strategy input. It needs product-owner, sales, presales, technical, and governance review before Avenue treats any offer theme as approved strategy.

## Strategic Thesis

Avenue should build the APM & IIoT business around reusable offer themes that start from industrial customer problems, not vendor product names.

This matters because customers usually do not buy "a product list." They buy a path to solve operational pain: unreliable data, poor plant visibility, late detection of abnormal behavior, weak reporting, and disconnected maintenance or reliability workflows.

An Avenue-branded offer architecture gives Sales a clearer conversation starter, gives Presales a structured qualification path, and gives Management a way to prioritize enrichment, partner capability, and opportunity focus.

The strategic move is to use validated Knowledge Hub content as the foundation, turn it into reviewable offers, then reuse those offers for account strategy, tender support, proposal preparation, and opportunity evaluation.

## Current Evidence-Based Starting Point

Current enriched knowledge supports a useful but still draft starting point:

- EtaPRO is the strongest current input for power-generation APM, performance monitoring, early warning, anomaly detection, diagnostics, and monitoring workflows.
- Canary is the strongest current input for historian and time-series data foundation conversations.
- IDBoxRT is the strongest current input for operational data hub, integration, operational intelligence, dashboard, and data exposure conversations.
- LUCA BDS is the strongest current input for BI, reporting, analytics, shared views, and decision-support layer conversations.
- IBM MAS, AVEVA PI, and AVEVA APM are strategically important, but current local pages should be treated as placeholder-level until deeper enrichment is complete.

## Recommended Offer Architecture

### Industrial Data Foundation

Positioning: A practical foundation for collecting, organizing, contextualizing, and reusing operational data.

Primary customer problem: plant data is fragmented, difficult to trust, or not ready for analytics, APM, dashboards, or tender requirements.

When to sell: when a customer asks about historian modernization, data integration, operational visibility, analytics readiness, or tender data-platform requirements.

Likely components: Canary, IDBoxRT, LUCA BDS, and future AVEVA PI context where relevant.

Current maturity / confidence: medium draft confidence. Canary and IDBoxRT provide useful current evidence; AVEVA PI comparison and incumbent positioning need enrichment.

Key open questions: when to position historian, data hub, BI layer, or a combined architecture; which comparison statements can be supported after AVEVA PI audit.

### Asset Health Starter

Positioning: A controlled first step for asset health visibility and reliability-oriented monitoring.

Primary customer problem: teams cannot see asset condition early enough or connect operational indicators to maintenance decisions.

When to sell: when a customer has reliability pain, wants practical asset health visibility, or has an EAM/CMMS context that needs better condition data.

Likely components: EtaPRO where power-generation assets are in scope, Canary or IDBoxRT as data inputs, LUCA BDS for reporting where appropriate, and IBM MAS after enrichment.

Current maturity / confidence: low to medium draft confidence. The concept is strategically useful, but IBM MAS and maintenance workflow evidence need more work.

Key open questions: which asset classes to start with; what minimum data quality is required; how EAM/CMMS handoff should be validated.

### Power APM & Early Warning

Positioning: A focused offer for power-generation performance monitoring, anomaly detection, diagnostics, and monitoring/diagnostic workflows.

Primary customer problem: plant performance is degrading, abnormal behavior is detected late, or rotating equipment diagnostics need stronger operational support.

When to sell: when the account is a power-generation owner/operator, utility with generation assets, performance team, reliability team, or monitoring center candidate.

Likely components: EtaPRO as the primary component, with Canary, IDBoxRT, LUCA BDS, or future IBM MAS context only where the customer architecture requires it.

Current maturity / confidence: highest current draft confidence among the four themes, because the EtaPRO source page has the richest current evidence base.

Key open questions: which generation technologies should be prioritized; which EtaPRO modules map to repeatable customer scenarios; what customer data is required before proposal work.

### Operational Intelligence Dashboard

Positioning: A reusable visibility and reporting offer for operations, engineering, reliability, and management users.

Primary customer problem: teams need clearer dashboards, reports, trends, events, alarms, synoptics, BI views, or shared decision views across systems.

When to sell: when customers ask for dashboards, operational reporting, management visibility, plant data consolidation, or tender reporting requirements.

Likely components: IDBoxRT, LUCA BDS, Canary visualization, and EtaPRO monitoring/reporting in power-generation contexts.

Current maturity / confidence: medium draft confidence. IDBoxRT and LUCA BDS provide a useful starting point; dashboard patterns still need customer and segment validation.

Key open questions: which dashboard patterns are reusable; which views are operational versus management-facing; what can later become public-safe examples.

## Recommended Initial Priorities

Draft priority order:

1. Power APM & Early Warning
2. Industrial Data Foundation
3. Operational Intelligence Dashboard
4. Asset Health Starter, pending IBM MAS and maintenance workflow enrichment

Rationale:

- Power APM & Early Warning has the strongest current evidence and clearest segment fit.
- Industrial Data Foundation should be developed early because it supports APM, dashboards, analytics, tender requirements, and future opportunity evaluation.
- Operational Intelligence Dashboard is commercially useful as an entry conversation, but it should be kept tied to real data and workflow needs.
- Asset Health Starter has strong strategic potential, especially around EAM/CMMS and reliability workflows, but should not be pushed too far before IBM MAS and related integration knowledge are enriched.

This priority order is a draft recommendation for review, not an approved roadmap.

## Sales And Presales Implications

Sales should lead with the customer situation: plant performance, data readiness, operational visibility, reliability pain, tender requirements, or digital transformation trigger.

Sales should avoid opening with vendor product names unless the customer already has a specific product or tender requirement in mind.

Presales should select components only after qualifying:

- customer segment and plant context;
- existing historian, SCADA, DCS, PLC, EAM/CMMS, dashboard, and BI landscape;
- available data quality and ownership;
- required users and workflows;
- cybersecurity, deployment, and integration constraints;
- whether the need is data foundation, APM, dashboard, BI/reporting, or maintenance workflow.

Technical review is needed before final proposal scope, tender compliance, architecture, or delivery commitment.

## Product / Knowledge Gaps

- IBM MAS enrichment: needed before Asset Health Starter becomes a mature offer.
- AVEVA PI enrichment: needed for historian incumbent context, comparison discipline, and tender mapping.
- AVEVA APM decision: clarify whether it is a future offer component, comparison reference, or deferred knowledge item.
- Customer/prospect data: enrich target accounts and plants around the four offer themes.
- Tender requirement patterns: extract reusable APM, historian, dashboard, integration, and reporting requirement patterns.
- Partner/channel constraints: clarify which products can be positioned together and under what partner boundaries.
- Case studies/reference proof: identify approved, non-restricted references for internal reuse and later public-safe outputs.

## 90-Day Enrichment Roadmap

1. Review and approve or revise this strategy brief and the Offer Map.
2. Enrich the IBM MAS page enough to support EAM, asset health, maintenance workflow, and Maximo integration decisions.
3. Audit and enrich AVEVA PI enough to support historian comparisons, incumbent mapping, and tender requirement interpretation.
4. Create the first APM & IIoT sales playbook from the approved offer priority.
5. Create the first APM & IIoT presales checklist focused on qualification questions and component selection.
6. Enrich the top 10 target prospects or accounts by segment, plant context, current systems, and likely pain points.
7. Extract reusable tender requirement patterns for APM, historian, dashboard, reporting, and integration requirements.
8. Identify approved internal case references and decide which can later become public-safe.

## Decision Points For Human Review

- Which offer should Avenue productize first?
- Which customer segment should be enriched first?
- Should Avenue proceed with Power APM & Early Warning before IBM MAS and AVEVA PI enrichment is complete?
- Which documents are internal-only, which are sales/presales-ready, and which could later become public-safe?
- Who owns offer approval, knowledge review, and future artifact maintenance?
- What partner/channel constraints should shape the strategy before wider internal rollout?

## Evidence Basis

Primary input artifacts:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`
- `artifacts/source-packs/apm-iiot-source-pack-v0.md`

Reference solution pages:

- `content/wiki/solutions/etapro.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/luca-bds.md`
- `content/wiki/solutions/ibm-mas.md`
- `content/wiki/solutions/aveva-pi.md`
- `content/wiki/solutions/aveva-apm.md`

Evidence handling note:

- This strategy brief uses the Offer Map as the structured synthesis layer.
- Source pages remain draft/private/low-confidence unless later reviewed.
- IBM MAS, AVEVA PI, and AVEVA APM are treated as strategically important placeholders, not mature validated components.
- Tender mapping pages are useful for requirement structure, not final compliance proof.

## Assumptions

- Avenue benefits from packaging APM & IIoT around customer pain and capability fit rather than vendor product lists.
- Power generation is the most defensible first segment based on current enriched knowledge.
- Data foundation work is a prerequisite for many APM, dashboard, analytics, and tender opportunities.
- Operational dashboard requests often indicate deeper data, workflow, and governance needs.
- Asset Health Starter needs IBM MAS and maintenance workflow enrichment before strong productization.
- Customer, tender, and partner evidence may change the recommended priority order.

## Open Questions

- Which power-generation accounts or plants should be enriched first?
- Which offer theme has the strongest near-term Avenue relationship fit?
- Which IBM MAS sources should be reviewed first?
- Which AVEVA PI sources should be audited before any historian comparison is used?
- Which customer proof points can be used internally without restricted content?
- Which offer names should remain internal draft names?
- What minimum evidence is required before a sales playbook is considered field-ready?

## Review Notes

- Status: draft.
- Review status: needs_review.
- Intended use: internal product, management, sales, and presales alignment.
- Do not copy into public content.
- Do not use as a customer proposal or tender response.
- Do not treat the priority order as approved until human review is complete.
- Run Data Governance Reviewer checks before downstream artifacts are treated as reusable.

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
- final package decisions;
- final channel decisions;
- public-facing claims;
- customer-specific proposal commitments;
- tender compliance statements;
- unsupported product comparisons.

