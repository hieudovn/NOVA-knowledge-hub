# Architecture Overview

## 1. System Positioning

The platform is an Opportunity-centered Industrial GTM Intelligence Platform built on the Knowledge Hub foundation.

Knowledge Hub remains the validated knowledge foundation: approved solution, industry, capability, pattern, tender, case study, and lesson-learned content. GTM Intelligence is the business application layer that links validated knowledge with reviewed customer, plant, tender, market signal, evidence, and Opportunity records.

It has four main layers:

```text
Raw Sources And Manual Inputs
    -> Intelligence Processing Layer
    -> Structured Records And Approved Knowledge
    -> Opportunity Intelligence And Action
```

The wiki remains a critical knowledge surface. It is no longer the only product shape.

## 2. Logical Architecture

```text
Sources And Inputs
|-- manual customer / plant / tender / signal entry
|-- internal notes and relationship history
|-- vendor and solution documents
|-- tender documents
|-- selected public web sources
|-- Avenue project, case study, and partner knowledge
        |
        v
Source Registry And Evidence Store
        |
        v
Collect -> Verify -> Normalize -> Link
        |
        v
Structured Intelligence Records
|-- Customer Intelligence
|-- Plant / Facility Intelligence
|-- Procurement And Tender Intelligence
|-- Market Signal Intelligence
|-- Avenue Internal Knowledge
        |
        v
Opportunity Intelligence
|-- opportunity candidates
|-- evidence and assumptions
|-- scoring
|-- recommended strategy
|-- next actions
        |
        v
Human Review And Approval
        |
        v
Sales / Presales / Technical / Management Action
```

## 3. Core Modules

### 3.1 Source Registry

Tracks where source documents and public references are located.

It should store metadata, not necessarily the raw file itself.

Required direction:

- every external claim must have a source;
- every source should have timestamp and reliability metadata;
- raw sources are evidence, not truth.

### 3.2 Evidence Store

Stores extracted or manually captured evidence items that can support customer, plant, tender, signal, solution, or opportunity records.

Evidence must preserve:

- source reference;
- capture time;
- observed or published time when available;
- summary;
- reliability;
- review state.

### 3.3 Intelligence Record Store

Stores structured records for:

- Customer;
- Plant;
- Tender;
- MarketSignal;
- Solution;
- Opportunity;
- EvidenceItem;
- Assumption;
- Risk;
- NextAction.

This may begin as markdown/YAML templates and later move to database-backed records.

### 3.4 Knowledge Hub

Stores approved reusable knowledge:

- solution pages;
- industry pages;
- capability pages;
- patterns;
- tender knowledge;
- case studies;
- lessons learned;
- reference architectures.

AI Q&A should prefer approved knowledge and verified records.

### 3.5 Intelligence Pipeline

Implements the operating model:

```text
Collect -> Verify -> Normalize -> Link -> Score -> Strategize -> Human Review -> Act
```

The first implementation should be manual and structured. Automation comes later.

### 3.6 Agent Layer

Logical agents support:

- market intelligence;
- customer intelligence;
- procurement intelligence;
- knowledge mapping;
- opportunity generation;
- strategy;
- verification and governance.

Agents should communicate through structured records, events, and shared state. They should not bypass human approval gates.

### 3.7 Review And Governance Layer

Provides:

- human review workflow;
- conflict detection;
- deduplication;
- audit trail;
- approval gates;
- stale data checks.

## 4. Deployment Architecture

### Phase 1 - Local

```text
Laptop
|-- Wiki web app
|-- Markdown content
|-- Manual templates
|-- Source registry
|-- Optional local scripts
|-- AI API keys in .env
```

### Phase 2 - Docker

```text
Docker Compose
|-- web
|-- api
|-- db
|-- search
|-- worker
```

### Phase 3 - VPS

```text
VPS Ubuntu
|-- Docker Engine
|-- Docker Compose
|-- Reverse proxy
|-- SSL certificate
|-- Domain
|-- Backup jobs
```

## 5. Recommended Initial Stack

For the current stage:

- wiki frontend: Docusaurus;
- content: Markdown / MDX;
- structured records: markdown/YAML templates first;
- source registry: YAML first;
- database: PostgreSQL later when records need workflow and querying;
- search: local full-text first, Meilisearch later;
- AI providers: adapter-based;
- deployment: Docker Compose.

Practical start:

```text
Docusaurus + Markdown + YAML templates + governance docs
```

Later, after the file-based MVP lane is stable and a human decision gate approves expansion, gradually add:

```text
API + DB + search + AI assistant + agent orchestration
```

These are not part of the current MVP lane.

## 6. Integration With NOVA

NOVA should not directly depend on Knowledge Hub database internals.

Preferred integration contract:

```text
NOVA -> Intelligence Platform API -> Search / Retrieve / Ask / Create Candidate
Intelligence Platform -> NOVA API -> Receive distilled notes and action updates
```

Example future endpoints:

- `POST /api/knowledge/search`
- `POST /api/knowledge/ask`
- `POST /api/intelligence/signals`
- `POST /api/opportunities/candidates`
- `POST /api/opportunities/{id}/review`
- `GET /api/wiki/pages/{id}`

## 7. Architectural Constraints

1. Keep Opportunity as the central convergence entity.
2. Do not hardcode Avenue as the only possible organization, even if Avenue is the first operating context.
3. Do not hardcode any AI provider as the only model.
4. Do not allow raw crawler output to update final Opportunity records directly.
5. Do not treat AI draft output as approved knowledge.
6. Do not overwrite verified human-entered data with unverified extracted data.
7. Do not build landing pages as a separate knowledge source.
8. Do not couple NOVA and Knowledge Hub databases directly.

## 8. Architectural Decision Records

Major decisions should be stored in `docs/adr/` later.

Initial ADRs to create later:

- ADR-001: Markdown-first wiki content.
- ADR-002: Opportunity-centered intelligence model.
- ADR-003: AI-provider adapter pattern.
- ADR-004: API-based NOVA integration.
- ADR-005: Draft/Verified/Approved lifecycle.
- ADR-006: Controlled ingestion before crawling.
