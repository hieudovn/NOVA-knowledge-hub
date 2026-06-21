# Roadmap

## Roadmap Principle

Build the Minimum Viable Intelligence Loop before adding automation.

The goal is not one fixed product MVP. The goal is continuous enrichment of reusable, source-backed industrial GTM knowledge and intelligence. Do not implement uncontrolled crawling first. Crawling and agentic automation should come after governance, verification, deduplication, and human review rules are clear.

## Phase 1 - Enrichment Foundation

Goal: define the reusable knowledge and intelligence foundation.

Deliverables:

- domain model;
- Opportunity-centered data model;
- source types and evidence model;
- manual data entry templates;
- minimum viable records for customer, plant, tender, signal, solution, and opportunity;
- enrichment domains and reusable outputs;
- governance rules;
- execution rules for future Codex and AI work.

Exit criteria:

- Knowledge Hub is clearly the reusable validated foundation;
- Opportunity is clearly an important convergence object;
- all intelligence branches have minimum fields;
- raw data, verified data, and assumptions are separated.

## Phase 2 - Manual And Semi-Manual Enrichment Loop

Goal: let users continuously enrich source-backed records and wiki knowledge manually or semi-manually.

Deliverables:

- manual customer and plant records;
- manual tender and procurement records;
- manual market signal records;
- solution, capability, case-study, partner, and competitor enrichment;
- solution and capability mapping to opportunities;
- human review flow;
- opportunity strategy generation from existing structured data;
- tender, proposal, sales, and product strategy reusable outputs.

Exit criteria:

- enriched knowledge can be reused for at least one tender, proposal, sales, product strategy, or Opportunity output;
- evidence and assumptions are visible where inference is involved;
- human review state is explicit.

## Phase 3 - Semi-Automated Ingestion

Goal: add controlled ingestion from selected sources into the Intelligence Inbox.

Deliverables:

- selected source registry;
- ingestion into unverified intelligence items;
- extraction of customer, tender, and market signals;
- source timestamp, source reliability, and evidence summary;
- verification workflow;
- linking verified items to customers, plants, tenders, solutions, partners, case studies, competitors, and opportunities.

Exit criteria:

- imported data remains unverified until reviewed;
- no crawler output directly mutates final Opportunity records;
- verified items can be promoted with audit trail.

## Phase 4 - Reuse, Scoring, And Prioritization

Goal: help Avenue reuse enriched knowledge for focused business outputs.

Deliverables:

- fit score;
- urgency score;
- confidence score;
- estimated value signal;
- relationship score;
- strategic relevance score;
- duplicate and overlap detection;
- reusable scorecards and reports;
- next best action recommendation.

Exit criteria:

- opportunities, accounts, tenders, and solution themes can be compared by explicit criteria;
- low-confidence records are marked for review;
- duplicate opportunities are detected before action.

## Phase 5 - Automation Acceleration

Goal: use crawlers, agents, APIs, or dashboards only as accelerators after the enrichment loop is reliable.

Deliverables:

- agent orchestration model;
- Market Intelligence Agent;
- Customer Intelligence Agent;
- Procurement Intelligence Agent;
- Knowledge Mapping Agent;
- Opportunity Generation Agent;
- Strategy Agent;
- Verification / Governance Agent;
- shared state and event contracts.

Exit criteria:

- agents communicate through structured records, events, and shared state;
- human defines goals, rules, and approval gates;
- agents research, map, score, and draft without bypassing governance.
