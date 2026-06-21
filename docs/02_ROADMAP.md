# Roadmap

## Roadmap Principle

Build the Opportunity-centered data model and manual intelligence workflow before adding automation.

Do not implement uncontrolled crawling first. Crawling and agentic automation should come after governance, verification, deduplication, and human review rules are clear.

## Phase 1 - Foundation

Goal: define the platform shape.

Deliverables:

- domain model;
- Opportunity-centered data model;
- source types and evidence model;
- manual data entry templates;
- minimum viable records for customer, plant, tender, signal, solution, and opportunity;
- governance rules;
- execution rules for future Codex and AI work.

Exit criteria:

- Opportunity is clearly the central entity;
- all intelligence branches have minimum fields;
- raw data, verified data, and assumptions are separated.

## Phase 2 - Manual Intelligence Workflow

Goal: let users create and connect intelligence records manually.

Deliverables:

- manual customer and plant records;
- manual tender and procurement records;
- manual market signal records;
- solution and capability mapping to opportunities;
- human review flow;
- opportunity strategy generation from existing structured data;
- sales and presales action plan drafts.

Exit criteria:

- a user can create an Opportunity from verified customer, plant, tender, signal, and solution data;
- evidence and assumptions are visible;
- next actions are assigned.

## Phase 3 - Semi-Automated Ingestion

Goal: add controlled ingestion from selected public sources.

Deliverables:

- selected source registry;
- ingestion into unverified intelligence items;
- extraction of customer, tender, and market signals;
- source timestamp, source reliability, and evidence summary;
- verification workflow;
- linking verified items to customers, plants, tenders, and opportunities.

Exit criteria:

- imported data remains unverified until reviewed;
- no crawler output directly mutates final Opportunity records;
- verified items can be promoted with audit trail.

## Phase 4 - Opportunity Scoring And Prioritization

Goal: help Avenue decide where to focus.

Deliverables:

- fit score;
- urgency score;
- confidence score;
- estimated value signal;
- relationship score;
- strategic relevance score;
- duplicate and overlap detection;
- ranking dashboard;
- next best action recommendation.

Exit criteria:

- opportunities can be ranked by explicit scoring criteria;
- low-confidence records are marked for review;
- duplicate opportunities are detected before action.

## Phase 5 - Agentic Workflow

Goal: coordinate agents around structured records, events, and human approval gates.

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
