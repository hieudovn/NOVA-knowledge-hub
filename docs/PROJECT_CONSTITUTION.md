# Project Constitution: Avenue Industrial GTM Intelligence Platform

## 1. Project Identity

**Working name:** Avenue Industrial GTM Intelligence Platform  
**Repository lineage:** NOVA Knowledge Hub  
**Owner-first user:** Hieu Do  
**Initial deployment mode:** local-first development  
**Strategic position:** Opportunity-centered intelligence platform for Avenue JSC, portable enough to remain usable outside one organization

The project began as a markdown-first Knowledge Hub. It now evolves into an Industrial GTM Intelligence Platform that connects validated knowledge, customer context, market signals, procurement signals, tender intelligence, and Avenue's solution capabilities to generate and manage Opportunities.

## 2. Vision

Build a practical intelligence system for industrial go-to-market work.

The platform should help Avenue answer:

- Which industrial customers should we approach next?
- Which plants or facilities are likely to need our solutions?
- Which business, technical, tender, or budget signals indicate an opportunity?
- Which Avenue solutions, partners, and references fit the situation?
- Which contacts or stakeholder groups matter?
- What entry strategy and next actions should Sales, Presales, Technical, and Management take?

## 3. Core Principle

Opportunity is the central convergence point.

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
Collect -> Verify -> Normalize -> Link -> Score -> Strategize -> Human Review -> Act
```

Manual structured records come first. Controlled ingestion and agentic workflows come later, after data governance and verification rules are stable.

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
