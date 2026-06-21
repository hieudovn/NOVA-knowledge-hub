# Roadmap

## Roadmap Principle

Build the Minimum Viable Intelligence Loop first.

Do not start with uncontrolled crawling, public portals, dashboards, or complex automation. The platform should grow through structured records, manual/semi-manual enrichment, controlled ingestion, scoring/reuse, and only later automation acceleration.

```text
Reusable Knowledge Foundation
    -> Manual/Semi-Manual Enrichment Loop
    -> Controlled Ingestion
    -> Reuse, Scoring, And Prioritization
    -> Automation Acceleration
```

## Phase 1 - Enrichment Foundation

Goal: define the reusable knowledge and intelligence foundation.

Must have:

- domain model;
- enrichment domain model;
- Opportunity-centered data model as one important output model;
- source types;
- evidence and assumption model;
- minimum viable records for customer, plant, tender, signal, solution, and opportunity;
- enrichment domains and reusable outputs;
- manual data entry templates;
- governance rules;
- execution rules for future Codex and AI work.

Not required yet:

- web crawlers;
- agent orchestration;
- public portal;
- complex CRM workflow;
- knowledge graph database.

Success criteria:

- Knowledge Hub is clearly the reusable validated foundation;
- Opportunity is clearly an important convergence object;
- Customer, Plant, MarketSignal, Tender, and Solution records all connect to Opportunity;
- raw, verified, and approved data states are distinct.

## Phase 2 - Manual And Semi-Manual Enrichment Loop

Goal: allow users to continuously enrich source-backed records and wiki knowledge.

Must have:

- manual customer record workflow;
- manual plant record workflow;
- manual tender/procurement record workflow;
- manual market signal record workflow;
- solution and capability mapping;
- case-study, partner, and competitor enrichment;
- human review flow;
- Opportunity candidate creation;
- tender, proposal, sales, product strategy, and Opportunity reusable outputs.

Success criteria:

- enriched knowledge can be reused for tender, proposal, sales, product strategy, or Opportunity outputs;
- evidence and assumptions are visible;
- confidence and review status are explicit;
- next actions can be assigned to Sales, Presales, Technical, or Management.

## Phase 3 - Semi-Automated Ingestion

Goal: add controlled ingestion from selected public and internal sources.

Must have:

- approved source registry;
- controlled ingestion jobs;
- extraction into unverified intelligence items;
- customer, tender, and market signal extraction;
- source timestamp and reliability;
- verification workflow;
- link suggestions to customers, plants, tenders, solutions, and opportunities.

Success criteria:

- imported data is stored as unverified until reviewed;
- verified human-entered data is not overwritten;
- human reviewers can promote, reject, or merge extracted items;
- crawler output never directly creates final Opportunity records.

## Phase 4 - Reuse, Scoring, And Prioritization

Goal: help Avenue reuse enriched knowledge for focused business outputs.

Must have:

- confidence score;
- strategic fit score;
- urgency score;
- relationship score;
- estimated value signal;
- risk flags;
- duplicate opportunity detection;
- opportunity ranking report first;
- dashboard only after a later decision gate;
- next best action recommendation.

Success criteria:

- opportunities, accounts, tenders, and solution themes can be compared using visible criteria;
- low-confidence opportunities are marked for review;
- duplicate or overlapping opportunities are detected before action;
- management can see why an opportunity is ranked highly.

## Phase 5 - Automation Acceleration

Goal: use crawlers, agents, APIs, or dashboards only as accelerators after the enrichment loop is reliable.

Must have:

- agent orchestration model;
- Market Intelligence Agent;
- Customer Intelligence Agent;
- Procurement Intelligence Agent;
- Knowledge Mapping Agent;
- Opportunity Generation Agent;
- Strategy Agent;
- Verification / Governance Agent;
- event and shared-state contracts;
- approval gates for important updates.

Success criteria:

- agents communicate through structured records, events, and shared state;
- agents perform research, mapping, scoring, and drafting;
- humans define goals, rules, and approval gates;
- important updates are not promoted without review.

## Later Platform Work

After the intelligence workflow is stable, the project may add:

- Dockerized API and database-backed records;
- search over approved knowledge and verified intelligence;
- NOVA integration;
- internal team roles;
- public portal and curated landing pages;
- knowledge graph storage if record relationships justify it.
