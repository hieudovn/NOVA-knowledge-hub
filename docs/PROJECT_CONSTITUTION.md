# Project Constitution: Avenue Industrial GTM Intelligence Platform

## 1. Project Identity

**Working name:** Avenue Industrial GTM Intelligence Platform  
**Repository lineage:** NOVA Knowledge Hub  
**Owner-first user:** Hieu Do  
**Initial deployment mode:** local-first development  
**Strategic position:** reusable industrial knowledge and GTM intelligence foundation for Avenue JSC, portable enough to remain usable outside one organization

The project began as a markdown-first Knowledge Hub. It now evolves into a reusable intelligence foundation that continuously enriches business, technical, customer, market, tender, solution, partner, and Opportunity knowledge.

## 2. Vision

Build a practical enrichment system for industrial go-to-market knowledge.

The platform should help Avenue produce and reuse:

- high-quality solution and capability knowledge;
- tender and bid inputs;
- customer-specific proposal packs;
- sales and presales strategy;
- product and solution strategy;
- market and tender intelligence;
- customer and plant intelligence;
- Opportunity evidence, assumptions, confidence, and next actions;
- management decision support.

## 3. Core Principle

Continuous enrichment is the core operating loop.

Opportunity is an important convergence point and one of the most valuable operating objects, but it is not the only purpose of the platform.

An Opportunity is where these intelligence branches meet:

- Customer
- Plant, site, or facility
- Industry or segment
- Pain point
- Business trigger
- Technology gap
- Existing systems
- Budget, CAPEX, or OPEX signal
- Tender or procurement activity
- Contacts and stakeholders
- Competitors and incumbents
- Avenue solution portfolio
- Past references and case studies
- Partner capability
- Risks and constraints
- Recommended sales, presales, or tender strategy

## 4. Product Boundary

The platform is:

- a Knowledge Hub;
- an industrial customer and plant intelligence system;
- a market and procurement signal memory;
- an Avenue solution and capability mapping layer;
- an Opportunity generation and prioritization system;
- a reusable enrichment foundation for proposals, tenders, product strategy, customer planning, and management decisions;
- a human-reviewed AI-assisted workbench for sales, presales, tender, and management action.

The platform is not only:

- a CRM;
- a document repository;
- a tender tracker;
- a generic chatbot;
- an uncontrolled web crawler;
- a replacement for human judgment.

## 5. Operating Model

```text
Collect -> Filter -> Verify -> Normalize -> Structure -> Link -> Enrich -> Reuse
```

Manual and semi-manual structured enrichment comes first. Controlled ingestion and agentic acceleration come later, after data governance and verification rules are stable.

## 6. Relationship With NOVA

NOVA remains the system of work. Knowledge Hub / Industrial Intelligence remains the system of knowledge and business intelligence.

```text
NOVA                         Intelligence Platform
System of Work               System of Intelligence
Capture notes                Curate knowledge
Track activity               Normalize customer, plant, tender, and signal records
Support action               Generate and score Opportunity candidates
Query knowledge              Recommend strategy and next actions
```

Integration should happen through APIs or export/import contracts, not direct database coupling.

## 7. Governance Principles

1. Raw crawled or imported data is not truth.
2. Every external data point must have a source.
3. Every inferred opportunity must separate evidence from assumption.
4. Confidence score must be explicit.
5. Human review is required before high-impact decisions.
6. Verified human-entered data must not be overwritten by unverified crawled data.
7. Source timestamp and last verified date must be maintained.
8. Updates must be auditable.
9. Customers, plants, tenders, and opportunities must be deduplicated.
10. Structured records are preferred over long unstructured summaries.

## 8. Early Scope

In scope now:

- domain model and Opportunity-centered data model;
- source and evidence rules;
- manual entry templates for customer, plant, tender, signal, solution, and opportunity records;
- reusable enrichment tracks for solution, tender, customer, plant, market, partner, competitor, and case-study knowledge;
- governance and review workflow;
- roadmap and execution rules;
- documentation updates for agents and workflow.

Out of scope now:

- uncontrolled crawling;
- automatic promotion of AI output into official records;
- full CRM workflow;
- complex multi-tenant SaaS;
- deep integrations with all company systems;
- implementation of a knowledge graph before the record model is stable.

## 9. Project Motto

Knowledge gives context.  
Signals create attention.  
Opportunity focuses action.  
Human judgment approves the move.
