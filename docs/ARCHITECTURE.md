# Architecture Overview

## 1. System Positioning

NOVA Knowledge Hub is a standalone knowledge platform that can later integrate with NOVA.

It has three main layers:

```text
Raw Sources
    ↓
Knowledge Processing Layer
    ↓
Approved Knowledge Wiki
    ↓
Query / Publish / Integrate
```

---

## 2. Logical Architecture

```text
Distributed Raw Sources
├─ Google Drive personal
├─ Google Drive company
├─ Local computer folders
├─ Vendor documents
├─ Tender documents
├─ Web URLs
└─ NOVA notes
        ↓
Source Registry
        ↓
Ingestion / Text Extraction
        ↓
AI Extraction Orchestrator
        ↓
Draft Knowledge Pages
        ↓
Human Review
        ↓
Approved Wiki
        ↓
Search / AI Q&A / Landing Page / NOVA API
```

---

## 3. Core Modules

### 3.1 Source Registry

Tracks where source documents are located.

It should store metadata, not necessarily the raw file itself.

Typical fields:

- source_id;
- title;
- source_type;
- location_uri;
- owner;
- organization;
- confidentiality;
- domain;
- related_solution;
- related_industry;
- hash;
- version;
- last_modified;
- extraction_status;
- last_extracted_at.

### 3.2 Ingestion Layer

Responsible for converting raw sources into extracted text and metadata.

Supported future input types:

- PDF;
- DOCX;
- PPTX;
- Markdown;
- HTML;
- plain text;
- Google Docs;
- Google Drive files;
- manual notes;
- NOVA notes.

### 3.3 AI Extraction Orchestrator

Runs extraction prompts against source text or selected chunks.

It must support multiple AI providers through adapters.

Provider examples:

- OpenAI;
- DeepSeek;
- Gemini;
- NotebookLM-assisted manual workflow;
- future local models.

### 3.4 Draft Knowledge Store

Stores AI-generated draft pages.

Draft content is not official until reviewed.

### 3.5 Human Review Layer

Allows the user or future editors to approve, edit, reject, or publish content.

### 3.6 Approved Wiki

The main operational knowledge layer.

This is the content that search, AI assistant, and NOVA integration should prefer.

### 3.7 Publishing Layer

Publishes selected approved content to:

- internal wiki;
- public wiki;
- landing pages;
- sales material;
- proposal templates.

---

## 4. Deployment Architecture

### Phase 1 — Local

```text
Laptop
├─ Wiki web app
├─ Local markdown content
├─ Local scripts
├─ Optional local database
└─ AI API keys in .env
```

### Phase 2 — Docker

```text
Docker Compose
├─ web
├─ api
├─ db
├─ search
└─ worker
```

### Phase 3 — VPS

```text
VPS Ubuntu
├─ Docker Engine
├─ Docker Compose
├─ Reverse proxy: Caddy or Nginx
├─ SSL certificate
├─ Domain
└─ Backup jobs
```

---

## 5. Recommended Initial Stack

For MVP:

- Wiki frontend: Docusaurus or Next.js with MDX;
- Content: Markdown / MDX;
- API: FastAPI or Node.js;
- Database: PostgreSQL when needed;
- Search: local full-text first, Meilisearch later;
- AI providers: OpenAI, DeepSeek, Gemini adapters;
- Deployment: Docker Compose.

Recommended practical start:

```text
Docusaurus + Markdown + simple scripts
```

Then gradually add:

```text
API + DB + search + AI assistant
```

---

## 6. Integration with NOVA

NOVA should not directly depend on Knowledge Hub database internals.

Preferred integration contract:

```text
NOVA → Knowledge Hub API → Search / Retrieve / Ask
Knowledge Hub → NOVA API → Receive distilled notes
```

Example future endpoints:

- `POST /api/knowledge/search`
- `POST /api/knowledge/ask`
- `POST /api/knowledge/draft-from-note`
- `POST /api/knowledge/publish-candidate`
- `GET /api/wiki/pages/{id}`

---

## 7. Architectural Constraints

1. Do not hardcode Avenue as the only organization.
2. Do not hardcode any AI provider as the only model.
3. Do not require raw sources to be stored in one physical location.
4. Do not allow public AI Q&A without quota and scope control.
5. Do not treat AI draft output as approved knowledge.
6. Do not build landing pages as a separate knowledge source.
7. Do not couple NOVA and Knowledge Hub databases directly.

---

## 8. Architectural Decision Records

Major decisions should be stored in `docs/adr/`.

Initial ADRs to create later:

- ADR-001: Markdown-first wiki content.
- ADR-002: Personal-first architecture.
- ADR-003: AI-provider adapter pattern.
- ADR-004: API-based NOVA integration.
- ADR-005: Draft/Approved/Public content lifecycle.
