# Current Execution Lane: Continuous Data Enrichment

## Purpose

This document defines the current execution lane for the Avenue industrial knowledge and GTM intelligence foundation.

We are not optimizing for one fixed product MVP. We are building a reusable enrichment foundation that can serve many future outputs: tenders, proposals, sales strategy, product strategy, customer planning, market maps, Opportunity scorecards, and management decision support.

## Current Product Shape

Knowledge Hub is the validated, structured, reusable knowledge/data foundation.

GTM Intelligence is one major business application layer built on top of Knowledge Hub. It uses reviewed customer, plant, contact, tender, market signal, evidence, solution fit, and Opportunity records to support sales, presales, tender, product, and management work.

Intelligence Inbox is the safe holding area for unverified imported or researched data.

The Enrichment Loop is:

```text
Collect -> Filter -> Verify -> Normalize -> Structure -> Link -> Enrich -> Reuse
```

Opportunity is a high-value convergence object for evidence, assumptions, solution fit, confidence, risk, and recommended action. It is not the only output.

Human Review is the gate before high-impact action, verification, or promotion.

## Current Execution Lane

The current lane is file-based, manual/semi-manual, and data-first:

- file-based structured records;
- manual JSON import workflow;
- Intelligence Inbox;
- validation scripts;
- sample verified records;
- source-backed solution/customer/tender/market enrichment;
- Opportunity candidate generation from verified records;
- heuristic scoring;
- human review status;
- no uncontrolled crawling;
- no direct promotion from crawler, import, or AI output to verified or promoted records.

## What We Are Building Now

- Data domain definitions.
- Source-backed records.
- Filtering and classification rules.
- Verification and normalization flow.
- Record linking.
- Solution, customer, tender, market, and Opportunity enrichment.
- Reusable knowledge that can support proposals, tenders, sales, strategy, and opportunity discovery.
- Documentation that keeps Knowledge Hub and GTM Intelligence aligned.

## What We Are Not Building Now

- Web crawler.
- Agent orchestration.
- CRM pipeline UI.
- Graph database.
- SaaS or multi-tenant features.
- Public portal.
- Chatbot.
- Dashboard UI.
- Backend/API service.
- Authentication.
- Automatic action execution.
- Automatic promotion from AI, crawler, import, or agent output.

## Next 3 Implementation Batches

1. Record/template/schema consistency review.

   Confirm field names, status values, source fields, evidence and assumption separation, and sample data across docs, templates, scripts, and test records.

2. Sample records and validation coverage.

   Expand only small sample-only records and tests that prove the manual enrichment workflow is safe. Keep samples fictional and non-commercial.

3. Opportunity candidate generation and scoring review.

   Review how verified customer, tender, and market signal records produce Opportunity candidates. Keep scoring heuristic, explainable, and blocked behind human review.

## Definition Of Done For Current Data Enrichment Lane

- Knowledge Hub remains documented as the validated reusable foundation.
- GTM Intelligence is documented as one application layer, not a replacement for Knowledge Hub.
- External data enters the Intelligence Inbox first.
- Import scripts force inbox records to unverified or needs_review states.
- Verified human-entered data cannot be overwritten by unverified external data.
- Enriched records can be reused for more than Opportunity generation.
- Opportunity candidates require evidence, assumptions, owner, status, confidence, and human review state.
- Opportunity candidate generation reads only verified and approved source records.
- Scoring remains heuristic and reviewable.
- Tests and validation scripts pass.
- No crawler, CRM, dashboard, graph database, backend/API, auth, SaaS, chatbot, public portal, or agent orchestration has been implemented.

## Scope Creep Warning Signs

- A script writes imported or AI-generated data directly to verified or promoted stores.
- A crawler is introduced before source governance and review workflows are stronger.
- Opportunity generation is treated as the only valuable output.
- Records become long summaries without structured fields, source references, evidence, and assumptions.
- Dashboard work starts before records and validation are stable.
- CRM pipeline states replace intelligence quality and evidence review.
- Agents start passing long natural-language summaries instead of structured records.
- Public portal, chatbot, or authentication work appears before the enrichment lane is stable.

## Decision Gate Before Automation

Before adding crawler, agent orchestration, backend/API, dashboard, or graph database work, the human owner should approve:

- source allowlist and source reliability rules;
- review roles and promotion rules;
- deduplication behavior;
- conflict handling;
- stale data policy;
- audit trail expectations;
- minimum data quality criteria for each enrichment domain;
- minimum Opportunity quality criteria.

## Relationship To Existing Wiki Work

Existing wiki work remains central.

Solution, capability, pattern, tender knowledge, comparison, and case-study pages provide the validated knowledge foundation used for solution fit, tender support, proposal support, product strategy, sales strategy, management decisions, and future Knowledge Hub Q&A.

The Intelligence Inbox does not replace the wiki. It protects the wiki by keeping unverified records out of approved knowledge until human review promotes them.
