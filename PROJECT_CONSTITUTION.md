# Avenue Industrial GTM Intelligence Platform - Project Constitution

## 1. Project Identity

**Working name:** Avenue Industrial GTM Intelligence Platform  
**Repository lineage:** NOVA Knowledge Hub  
**Initial user:** Hieu Do  
**Initial mode:** local-first, manual workflow first  
**Strategic role:** Opportunity-centered intelligence layer for Avenue JSC

The project began as NOVA Knowledge Hub: a structured, validated knowledge platform. It now evolves into an Industrial GTM Intelligence Platform that helps Avenue discover, qualify, prioritize, and act on business opportunities in industrial markets.

## 2. Core Philosophy

Opportunity is the central convergence point.

The platform connects:

- customer and plant context;
- market signals;
- procurement and tender signals;
- pain points and business triggers;
- technology gaps and existing systems;
- Avenue solutions, partners, capabilities, and references;
- competitors and risks;
- recommended sales, presales, tender, and management actions.

The platform is not only a CRM, not only a document knowledge base, and not only a tender tracker.

## 3. Operating Model

```text
Collect -> Verify -> Normalize -> Link -> Score -> Strategize -> Human Review -> Act
```

Manual structured workflow comes first. Controlled ingestion, scoring, and agentic workflow come later.

## 4. Human-Centered Intelligence Work

The system must amplify human judgment, not replace it.

AI may assist in:

- extracting market, customer, tender, and solution data;
- drafting structured records;
- mapping Avenue capabilities to needs;
- generating Opportunity candidates;
- scoring and prioritization support;
- recommending strategy and next actions;
- checking unsupported claims or conflicts.

Humans retain responsibility for:

- selecting trusted sources;
- validating extracted data;
- approving official knowledge and verified intelligence;
- approving high-impact Opportunity actions;
- deciding what can be shared internally, with partners, or publicly.

## 5. Governance Principles

1. Raw crawled data is evidence, not truth.
2. Every external data point must have a source.
3. Every inferred Opportunity must separate evidence from assumption.
4. Confidence score must be explicit.
5. Human review is required before high-impact decisions.
6. Verified human-entered data must not be overwritten by unverified data.
7. Source timestamp and last verified date must be maintained.
8. Important updates must keep an audit trail.
9. Customers, plants, tenders, and opportunities must be deduplicated.
10. Structured records are preferred over long unstructured summaries.

## 6. Early Product Boundary

In scope now:

- Opportunity-centered domain model;
- customer, plant, tender, market signal, solution, and Opportunity records;
- source and evidence rules;
- manual data entry templates;
- governance and review workflow;
- agent architecture documentation;
- roadmap and execution rules.

Out of scope now:

- uncontrolled web crawling;
- automatic promotion of AI output into approved records;
- full CRM workflow;
- complex multi-tenant SaaS;
- graph database implementation before records stabilize.

## 7. Relationship With NOVA

NOVA is the system of work. The Intelligence Platform is the system of knowledge and business intelligence.

NOVA may send notes, activity, and customer context to the platform. The platform may return approved knowledge, verified intelligence, Opportunity candidates, and recommended actions.

Integration should use APIs or export/import contracts, not tight database coupling.

## 8. Non-Negotiable Rules

1. Keep Opportunity as the central entity.
2. Do not treat raw sources or AI output as truth.
3. Do not build uncontrolled crawlers before governance is implemented.
4. Do not overwrite verified data with unverified extraction.
5. Do not put restricted pricing or commercial terms into general wiki knowledge.
6. Do not bypass human review for high-impact actions.
7. Keep the project portable across AI providers and deployment environments.

## 9. Project Motto

Knowledge gives context.  
Signals create attention.  
Opportunity focuses action.  
Human judgment approves the move.
