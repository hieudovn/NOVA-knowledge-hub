# Project Constitution: NOVA Knowledge Hub

## 1. Project Identity

**Project name:** NOVA Knowledge Hub  
**Owner-first user:** Hieu Do  
**Initial deployment mode:** local-first development  
**Future deployment mode:** Dockerized VPS with domain and SSL  
**Strategic position:** independent product, integrable with NOVA

NOVA Knowledge Hub is a personal-first, organization-ready knowledge platform for transforming raw documents, notes, and experience into structured, validated, searchable, and reusable knowledge.

It can later serve Avenue JSC, another organization, or an independent business context without being locked to one company structure.

---

## 2. Vision

Build a Knowledge Operating System for industrial solutions, sales/presales intelligence, tender analysis, technical solution knowledge, and future AI-assisted business decision support.

The system should help the owner and future team members:

- capture knowledge from documents and notes
- distill knowledge into structured wiki pages
- validate and approve knowledge before reuse
- query approved knowledge with AI
- publish selected knowledge into public-facing pages
- integrate with NOVA as a system of work

---

## 3. Mission

Convert fragmented raw sources into a durable, structured, human-reviewed knowledge base that supports:

- personal research
- solution design
- sales/presales preparation
- proposal writing
- tender review
- internal training
- future public thought leadership and landing pages

---

## 4. Core Principles

### 4.1 Person First, Organization Enabled

The system is first built for the owner's personal productivity and knowledge accumulation.

Organizations such as Avenue JSC are modeled as users, owners, sources, or contexts, not as hard-coded assumptions.

### 4.2 Knowledge First, Interface Second

The wiki and knowledge model are more important than the website appearance.

Landing pages are generated later from selected approved knowledge, not written separately as disconnected marketing content.

### 4.3 Raw Sources Are Evidence, Wiki Is Operating Knowledge

Raw documents are preserved as evidence.

Daily usage should rely on approved wiki knowledge, not repeated direct reading of raw documents.

### 4.4 Human Review Is Mandatory

AI can draft, extract, compare, and suggest.

Only human-approved content becomes official knowledge.

### 4.5 AI-Model Agnostic

The system must not depend on one AI provider.

OpenAI, DeepSeek, Gemini, NotebookLM, Claude, or future local models should be replaceable through provider adapters.

### 4.6 Local First, Docker Ready

The project starts on a personal computer.

It must be structured so it can later be deployed to a VPS using Docker Compose.

### 4.7 Modular Integration With NOVA

Knowledge Hub and NOVA are independent systems.

NOVA can send sales/presales notes to Knowledge Hub.

NOVA can query Knowledge Hub for technical and solution knowledge.

Integration should happen through APIs, not tight database coupling.

### 4.8 Pricing and Commercial Information Handling

Pricing and commercial information must not become wiki knowledge, even in private/internal wiki pages.

Do not put pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki knowledge pages.

Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.

Case study information about general benefits, avoided cost, savings, ROI, efficiency improvement, downtime reduction, production gain, or maintenance cost avoidance may be included in wiki pages if it does not disclose specific vendor pricing, license fees, discounts, proposal prices, or commercial terms.

If a source contains pricing and technical knowledge together, extract only the technical knowledge into wiki pages and mark the pricing section as excluded/restricted.

Any pricing source must remain restricted and must not be used for public/internal wiki knowledge enrichment.

---

## 5. Product Boundary

### In Scope for Early Phases

- wiki content structure
- source registry
- markdown/MDX knowledge pages
- draft/review/approved/public workflow
- AI-assisted extraction from raw sources
- search over approved knowledge
- AI query over approved knowledge
- Docker-ready deployment structure

### Out of Scope for Early Phases

- full CRM
- complex multi-tenant SaaS
- public user registration
- public chatbot at scale
- advanced knowledge graph
- fully automated publishing without human review
- deep integration with all company systems

---

## 6. Relationship With NOVA

NOVA is the system of work.

Knowledge Hub is the system of knowledge.

NOVA captures notes, opportunities, customer context, meeting observations, and sales/presales activity.

Knowledge Hub curates, validates, stores, queries, and publishes knowledge.

```text
NOVA                         Knowledge Hub
System of Work               System of Knowledge
Capture notes                Curate knowledge
Track context                Validate content
Support action               Provide reusable knowledge
Query knowledge              Publish selected knowledge
```

---

## 7. Initial Users

### Phase 1

- Hieu only

### Phase 2

- selected internal users
- sales
- presales
- technical solution staff

### Phase 3

- approved external users
- prospects
- partners
- public visitors with limited AI quota

---

## 8. Success Criteria for MVP

MVP is successful when:

1. A local wiki site can run on the owner's computer.
2. Knowledge pages can be created, edited, searched, and categorized.
3. Raw source metadata can be registered.
4. AI can generate draft wiki content from selected source text.
5. Pages can move through draft, reviewed, approved, and public statuses.
6. Approved wiki content can be queried by an AI assistant.
7. The system can be containerized and moved to a VPS later.

---

## 9. Non-Negotiable Rules

1. Do not let AI overwrite human judgment.
2. Do not mix raw confidential data with public content.
3. Do not hard-code Avenue-specific assumptions into the core model.
4. Do not build landing pages before the wiki content model is stable.
5. Do not process large raw sources repeatedly without hash/cache control.
6. Do not expose public AI Q&A without quota, rate limit, and scope control.
7. Do not place pricing, licensing, discounts, quotes, proposal prices, budgetary prices, BOM prices, fees, or commercial terms into wiki knowledge pages.

---

## 10. Project Motto

Human sets the aim.  
AI accelerates the journey.  
Knowledge is reviewed before it becomes truth.  
