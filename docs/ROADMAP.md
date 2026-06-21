# Roadmap

## Roadmap Principle

Build the Opportunity-centered intelligence foundation first.

Do not start with uncontrolled crawling, public portals, or complex automation. The product should grow through structured records, manual workflow, controlled ingestion, scoring, and then agentic orchestration.

```text
Structured Intelligence Foundation
    -> Manual Intelligence Workflow
    -> Controlled Ingestion
    -> Opportunity Scoring And Prioritization
    -> Agentic Workflow
```

## Phase 1 - Foundation

Goal: define the platform's core model and rules.

Must have:

- domain model;
- Opportunity-centered data model;
- source types;
- evidence and assumption model;
- minimum viable records for customer, plant, tender, signal, solution, and opportunity;
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

- Opportunity is clearly the central entity;
- Customer, Plant, MarketSignal, Tender, and Solution records all connect to Opportunity;
- raw, verified, and approved data states are distinct.

## Phase 2 - Manual Intelligence Workflow

Goal: allow users to manually add and link intelligence records.

Must have:

- manual customer record workflow;
- manual plant record workflow;
- manual tender/procurement record workflow;
- manual market signal record workflow;
- solution and capability mapping;
- human review flow;
- Opportunity candidate creation;
- Opportunity strategy draft;
- sales and presales action plan draft.

Success criteria:

- a user can create an Opportunity from structured records;
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

## Phase 4 - Opportunity Scoring And Prioritization

Goal: help Avenue decide where to focus.

Must have:

- confidence score;
- strategic fit score;
- urgency score;
- relationship score;
- estimated value signal;
- risk flags;
- duplicate opportunity detection;
- opportunity ranking dashboard or report;
- next best action recommendation.

Success criteria:

- opportunities can be compared using visible criteria;
- low-confidence opportunities are marked for review;
- duplicate or overlapping opportunities are detected before action;
- management can see why an opportunity is ranked highly.

## Phase 5 - Agentic Workflow

Goal: coordinate AI agents around structured records and human approval gates.

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
