# NOVA Knowledge Hub — Project Constitution

## 1. Project Identity

**Project name:** NOVA Knowledge Hub  
**Repository:** `hieudovn/NOVA-knowledge-hub`  
**Initial user:** Hieu Do  
**Initial mode:** Personal-first, organization-ready  
**Long-term role:** Knowledge Layer for NOVA and standalone Knowledge Portal

NOVA Knowledge Hub is a personal-first knowledge operating system for collecting, extracting, validating, organizing, querying, and publishing business and technical knowledge.

It starts as a personal tool for Hieu Do, may later serve Avenue JSC, and must remain portable enough to move to another organization, domain, server, or business context.

---

## 2. Core Philosophy

### Human-Centered Knowledge Work

The system must amplify human judgment, not replace it.

AI may assist in:

- extracting knowledge from raw sources;
- drafting wiki pages;
- comparing solutions;
- answering questions;
- generating proposal inputs;
- identifying gaps and risks.

But humans retain responsibility for:

- selecting sources;
- validating extracted knowledge;
- approving wiki content;
- deciding what can be published;
- making business and technical decisions.

### AI Is an Adapter, Not the Core

The system must not depend on any single AI model, vendor, or interface.

Supported and future AI engines may include:

- OpenAI / ChatGPT;
- DeepSeek;
- Gemini;
- Claude;
- NotebookLM;
- local LLMs.

The core assets are:

- raw source registry;
- extracted text;
- structured knowledge;
- reviewed wiki pages;
- metadata and traceability;
- human decisions.

### Wiki First, Landing Page Later

The wiki is the source of knowledge.  
Landing pages are curated public views generated from approved wiki content.

The system must avoid writing marketing content separately from the underlying knowledge base.

---

## 3. Product Boundaries

### What this project is

NOVA Knowledge Hub is:

- a knowledge hub;
- a technical and business wiki;
- an AI-assisted extraction pipeline;
- a personal and later team knowledge system;
- a future source of truth for NOVA Sales/Presales Copilot;
- a future content source for public landing pages.

### What this project is not, initially

At MVP stage, it is not:

- a full CRM;
- a full public SaaS product;
- a generic chatbot;
- a document dump;
- a replacement for human review;
- a full workflow/BPM system;
- a public lead-generation system.

Those capabilities may be added later only after the knowledge core is stable.

---

## 4. Relationship with NOVA

NOVA and Knowledge Hub are separate but complementary systems.

### NOVA

NOVA is the system of work:

- notes;
- meeting intelligence;
- customer context;
- sales/presales capture;
- opportunity intelligence;
- recommendations.

### Knowledge Hub

Knowledge Hub is the system of knowledge:

- solution knowledge;
- industry knowledge;
- technical knowledge;
- sales knowledge;
- tender knowledge;
- architecture patterns;
- validated wiki pages.

### Integration principle

NOVA should exchange data with Knowledge Hub through APIs or export/import contracts, not by tightly coupling databases.

Example flows:

1. NOVA note → AI distillation → Sales Knowledge article → Knowledge Hub.
2. NOVA chat → query Knowledge Hub → answer based on approved solution knowledge.
3. Knowledge Hub public content → selected for landing page publication.

---

## 5. Initial Use Cases

### Personal use cases

1. Store and organize solution knowledge.
2. Extract useful knowledge from vendor documents.
3. Build a reusable wiki for industrial solutions.
4. Ask questions over approved knowledge.
5. Generate proposal/presales drafts using validated knowledge.
6. Build future landing pages from selected wiki content.

### Avenue-oriented use cases

1. IBM MAS solution knowledge.
2. IDBoxRT solution knowledge.
3. EtaPRO solution knowledge.
4. AVEVA PI / Canary / Historian comparison.
5. Power generation, transmission, oil & gas, manufacturing solution mapping.
6. Tender requirement extraction and compliance analysis.
7. Sales/presales knowledge from field notes.

---

## 6. Development Strategy

### Phase 1 — Local Personal MVP

Run on local machine first.

Must include:

- markdown-based wiki;
- source registry;
- basic page metadata;
- draft/review/approved/public states;
- manual content creation;
- basic search;
- AI extraction script prototype.

No complex user management required.

### Phase 2 — Dockerized Local System

Package into Docker Compose.

Must include:

- web wiki;
- API service;
- database if required;
- search service;
- environment-based AI provider configuration.

### Phase 3 — VPS Launch

Deploy to VPS with:

- Docker Compose;
- reverse proxy;
- domain;
- SSL;
- admin login;
- backup strategy.

### Phase 4 — Internal Sharing

Add selected users:

- admin;
- editor;
- viewer.

Email-based internal user management may be added.

### Phase 5 — Public Portal

Add:

- public landing pages;
- guest Q&A quota;
- lead capture;
- sales handoff;
- external user approval.

---

## 7. Non-Negotiable Principles

1. **Personal-first, organization-ready.**
2. **Markdown-first content.**
3. **Human approval before official knowledge.**
4. **AI-model-agnostic architecture.**
5. **Raw sources are evidence, not the daily working layer.**
6. **Approved wiki is the operational knowledge layer.**
7. **Landing pages are curated views of approved wiki content.**
8. **NOVA integration must be API-based, not database-coupled.**
9. **Token cost must be observable and controllable.**
10. **The project must remain portable across company, server, and AI vendor.**

---

## 8. Success Criteria for MVP

MVP is successful when Hieu can:

1. Run the system locally.
2. Create and edit wiki pages.
3. Classify pages by solution, industry, capability, pattern, tender, or sales knowledge.
4. Mark content as draft, reviewed, approved, or public.
5. Search approved knowledge.
6. Use at least one AI provider to generate draft wiki content from a raw text/document.
7. Review and approve extracted knowledge manually.
8. Prepare the system for Docker deployment without major redesign.

---

## 9. Product Naming

Working product name:

**NOVA Knowledge Hub**

Possible future public-facing names:

- NOVA Knowledge Layer
- NOVA Industrial Knowledge Hub
- Knowledge Operating System for Industrial Solutions

The project should avoid being hardcoded as “Avenue Wiki,” although Avenue may be the first organization using it.
