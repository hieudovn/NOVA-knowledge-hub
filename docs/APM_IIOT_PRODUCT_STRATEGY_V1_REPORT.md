# APM & IIoT Product Strategy v1 Report

## Summary

Created the first internal business-facing APM & IIoT Product Strategy Brief for Avenue.

The brief turns the structured Offer Map into a concise strategy artifact for product owner, management, sales, and presales alignment. It is not public marketing copy, not a final approved strategy, not a customer proposal, not a tender response, and not a packaging or commercial decision.

## Strategy Brief Created

Created:

- `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md`

The strategy brief includes:

- executive summary;
- strategic thesis;
- evidence-based starting point;
- recommended offer architecture;
- draft initial priorities;
- sales and presales implications;
- product and knowledge gaps;
- 90-day enrichment roadmap;
- decision points for human review;
- evidence basis, assumptions, open questions, review notes, and excluded content.

## Inputs Used

Primary input artifacts:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`
- `artifacts/source-packs/apm-iiot-source-pack-v0.md`

Reference pages:

- `content/wiki/solutions/etapro.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/luca-bds.md`
- `content/wiki/solutions/ibm-mas.md`
- `content/wiki/solutions/aveva-pi.md`
- `content/wiki/solutions/aveva-apm.md`

IBM MAS, AVEVA PI, and AVEVA APM were treated as strategically important but placeholder-level unless further enriched.

## Strategic Thesis

Avenue should build the APM & IIoT business around reusable Avenue-branded offers that start from customer pain, plant context, operational data maturity, and capability fit.

Vendor products should remain components selected by Sales, Presales, and Technical Review after the customer context and requirements are clear.

## Offer Priority Recommendation

Draft priority order:

1. Power APM & Early Warning
2. Industrial Data Foundation
3. Operational Intelligence Dashboard
4. Asset Health Starter, pending IBM MAS and maintenance workflow enrichment

This is a draft recommendation for review, not an approved roadmap or final productization decision.

## Evidence And Assumption Handling

The opening sections avoid source IDs and detailed evidence mechanics so the artifact reads as a strategy brief.

Evidence and assumptions are preserved in lower sections. The brief clearly marks the draft status of source pages and treats placeholder solution pages carefully.

## Commercial / Pricing Handling

No pricing, licensing, discounts, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.

The brief explicitly excludes commercial content, final package decisions, final channel decisions, public claims, customer commitments, tender compliance statements, and unsupported product comparisons.

## Scope Preserved

No runtime skills, runtime modes, agents, crawler, CRM workflow, graph database, dashboard UI, backend/API service, authentication, SaaS or multi-tenant features, chatbot, public portal, or automation were implemented.

No public-facing marketing claims or final market sizing claims were added.

## Files Updated

Created:

- `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md`
- `docs/APM_IIOT_PRODUCT_STRATEGY_V1_REPORT.md`

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

Review the strategy brief with Product Owner, Executive Reviewer, Sales, Presales, and Data Governance perspectives.

After review, create the next downstream artifacts:

- `artifacts/sales-playbooks/apm-iiot-sales-playbook-v1.md`
- `artifacts/presales-checklists/apm-iiot-presales-checklist-v1.md`
- `artifacts/management-decision-briefs/apm-iiot-management-decision-brief-v1.md`

## Open Questions For Human Review

- Which offer should Avenue productize first?
- Which customer segment should be enriched first?
- Should Power APM & Early Warning proceed before IBM MAS and AVEVA PI enrichment is complete?
- Which documents are internal-only, sales/presales-ready, or later public-safe?
- Who owns ongoing offer approval and artifact maintenance?
- What partner/channel constraints should be clarified before broader rollout?
