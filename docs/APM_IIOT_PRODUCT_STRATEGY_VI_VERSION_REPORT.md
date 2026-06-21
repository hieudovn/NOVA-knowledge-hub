# APM & IIoT Product Strategy Vietnamese Version Report

## Summary

Created a parallel Vietnamese review version of the APM & IIoT Product Strategy Brief v1.

The Vietnamese artifact is intended to help Avenue review strategic content, business logic, wording, assumptions, and priority order more easily. It does not replace the English source artifact.

## Vietnamese Artifact Created

Created:

- `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.vi.md`

The artifact keeps the same strategy structure, review status, role metadata, skill references, source references, assumptions, evidence discipline, open questions, and restrictions as the English version.

## Source Artifact Used

Primary source artifact:

- `artifacts/strategy-briefs/apm-iiot-product-strategy-v1.md`

Supporting references:

- `artifacts/offer-maps/apm-iiot-offer-map-v1.md`
- `artifacts/source-packs/apm-iiot-source-pack-v0.md`
- `docs/14_OPERATING_ROLES_AND_QUALITY_GUIDE.md`
- `docs/15_SKILLS_CATALOG.md`

## Translation / Adaptation Approach

The Vietnamese version is not a literal word-for-word translation.

It is a business-facing adaptation for Vietnamese internal review:

- concise management-friendly wording;
- natural Vietnamese business language;
- source and evidence details kept in lower sections;
- no source IDs in the opening narrative;
- no new strategy claims or products added.

## Terms Kept In English

Product names kept in English:

- EtaPRO
- Canary
- IDBoxRT
- LUCA BDS
- IBM MAS
- AVEVA PI
- AVEVA APM

Offer names are kept in English first, with Vietnamese explanation where useful:

- Industrial Data Foundation
- Asset Health Starter
- Power APM & Early Warning
- Operational Intelligence Dashboard

## Review Purpose

The Vietnamese artifact is for internal review by Avenue leadership, Product Owner, Sales, and Presales.

It is not public marketing copy, not a final approved strategy, not a customer proposal, not a tender response, and not a package/pricing decision.

## Commercial / Pricing Handling

No pricing, licensing, discounts, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms were added.

Commercial and public-facing restrictions were preserved in the Vietnamese version.

## Scope Preserved

No runtime automation, runtime skills, agents, crawler, CRM workflow, dashboard UI, graph database, backend/API service, authentication, SaaS/multi-tenant feature, chatbot, or public portal was implemented.

The English strategy artifact was not modified.

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

Review the Vietnamese version against the English source artifact and decide whether the wording, priority order, and decision points are clear enough for internal Avenue discussion.

After review, use the approved strategy direction to create:

- `artifacts/sales-playbooks/apm-iiot-sales-playbook-v1.md`
- `artifacts/presales-checklists/apm-iiot-presales-checklist-v1.md`
- `artifacts/management-decision-briefs/apm-iiot-management-decision-brief-v1.md`
