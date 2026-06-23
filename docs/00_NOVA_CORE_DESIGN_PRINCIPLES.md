# NOVA Core Design Principles

## One-Sentence Definition

NOVA is a business operating system that captures business and market signals, turns them into decisions and actions, and converts results into governed knowledge assets that improve every future cycle.

## Purpose Of NOVA

NOVA exists to help an operator or organization learn and act faster without losing judgment, traceability, or governance.

It is not only a place to store notes or documents. It is the operating model that connects observation, interpretation, decision, execution, feedback, and reusable knowledge.

## Core Philosophy

The core loop is:

```text
Signal -> Insight -> Decision -> Action -> Feedback -> Knowledge Asset -> Better Signal / Better Action
```

The loop matters more than any one interface, database, app, or AI feature. Every major feature should strengthen at least one part of this loop and preserve the handoff to the next stage.

## Position Relative To Execution Projects

NOVA Core is the operating model. Individual repositories, apps, workflows, dashboards, documents, agents, or customer projects are execution surfaces that should align with the model.

An execution project may focus on one domain, such as sales intelligence, proposals, tenders, operations, product strategy, or knowledge publishing. It should still make clear:

- which signals it captures;
- how signals become insights;
- how decisions and actions are logged;
- how feedback is reviewed;
- which outputs become governed knowledge assets;
- what humans must review before reuse or external use.

## Three Core Modules

### 1. NOVA Signal

NOVA Signal combines signal capture and sensemaking.

It answers:

- What is happening?
- What does it mean?
- Is this signal or noise?
- What pain, need, opportunity, threat, or trend does this suggest?

Typical sources include customer meetings, emails, tender/RFP/RFQ documents, market news, competitor activity, partner updates, internal discussions, sales objections, proposal feedback, demo feedback, regulation, experiments, and personal observations.

Typical outputs include insights, pain hypotheses, opportunity signals, customer needs, market trends, competitor alerts, solution gaps, product ideas, and follow-up questions.

### 2. NOVA Action

NOVA Action combines decision support and workflow execution.

It answers:

- Should we act on this?
- How important is it?
- What should we do next?
- Who should do it?
- What output should be created?
- Should this become an offer, proposal, pilot, product idea, or project?

Typical functions include opportunity scoring, go/no-go/hold decisions, priority boards, decision logs, action planning, workflow management, owner and status tracking, offer hypotheses, pilot scopes, proposal skeletons, meeting briefs, and review gates before external use.

Typical outputs include decisions, priorities, action plans, tasks, offer hypotheses, pilot concepts, proposal skeletons, customer briefs, demo requests, and project initiation notes.

### 3. NOVA Knowledge Governance

NOVA Knowledge Governance combines feedback, measurement, asset creation, and source-of-truth management.

It answers:

- What did we learn?
- What should be reused?
- What should become a template, playbook, checklist, proposal module, or source of truth?
- What is approved, draft, deprecated, or archived?
- What can AI safely use?

Typical functions include feedback capture, result review, lesson extraction, asset creation, template creation, playbook creation, proposal module creation, knowledge approval, source-of-truth management, versioning, usage policy, deprecation, and reuse tracking.

Typical outputs include approved insights, source-of-truth documents, templates, playbooks, checklists, proposal modules, solution blocks, case studies, FAQs, objection-handling notes, lessons learned, and deprecated knowledge records.

## AI Role

AI accelerates the NOVA loop, but it does not own the loop.

AI may help capture, summarize, classify, extract, compare, score, draft, retrieve, map, and review. AI output is a candidate for human review, not approved knowledge by default.

AI should:

- prefer source-of-truth and approved content over raw or draft material;
- preserve source references, confidence, assumptions, and uncertainty;
- expose review gates for important commercial, technical, customer-facing, or external outputs;
- separate evidence from interpretation;
- avoid converting generated text, vector search results, or memory into official facts.

## Governance Rules

Do not treat all stored information as equally trustworthy.

Important knowledge items should support this status model:

- `raw`: unverified note or signal; should not be used as fact.
- `draft`: work in progress; for internal thinking only.
- `reviewed`: checked by a responsible person but not yet official.
- `approved`: reusable in normal business work.
- `source_of_truth`: official reference version; should be prioritized by AI and humans.
- `deprecated`: outdated; should not be used for new work.
- `archived`: stored for historical reference only.

Governance principles:

- AI output is not automatically approved knowledge.
- Raw notes must not be used as official facts.
- Vector databases, embeddings, and AI memory are not source of truth.
- Important external, customer-facing, proposal, commercial, or technical outputs require human review.
- Source-of-truth content should be stored in portable formats where possible: Markdown, YAML, JSON, CSV, SQL, or database records.
- Every important decision should be logged.
- Every reusable asset should have owner, status, source, confidence, and usage policy.

## Operator Discipline

The Sweat Equity Loop is an operating discipline, not a standalone module.

The project owner or operator must stay close to details:

- review important signals;
- understand customer pain directly;
- check important AI outputs;
- join key discussions when needed;
- review proposals and offers;
- capture lessons after actions;
- convert repeated work into assets.

Core principle:

```text
Do not outsource understanding.
Use AI to accelerate work, but keep human ownership of judgment, context, and decisions.
```

## Suggested Metadata Schema

Use this schema as a portable baseline for important notes, records, decisions, actions, assets, or governed knowledge items. Project-specific schemas may extend it, but should preserve the same governance semantics.

```yaml
title: ""
type: signal | insight | opportunity | action | decision | asset | knowledge
module: nova_signal | nova_action | nova_knowledge_governance
status: raw | draft | reviewed | approved | source_of_truth | deprecated | archived
owner: ""
created_date: ""
last_reviewed: ""
source: []
related_customer: []
related_industry: []
related_solution: []
related_opportunity: []
confidence: low | medium | high
usage_policy:
  internal_analysis: true
  sales_discussion: false
  proposal_use: false
  customer_facing: false
  public_marketing: false
next_action: ""
```

## What NOVA Is Not

NOVA is not just:

- a note-taking app;
- a document repository;
- a chatbot;
- a CRM;
- a project management tool;
- a vector database;
- an AI memory layer;
- an autonomous AI agent system;
- a dashboard;
- a tender tracker;
- a generic knowledge base.

Any of those may become execution surfaces or supporting capabilities, but none of them is the whole system. The defining feature of NOVA is the governed business learning loop from signal to action to reusable knowledge.

