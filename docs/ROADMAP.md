# NOVA Knowledge Hub Roadmap

## Roadmap Principle

Build the knowledge core first.  
Do not start with public portal, lead generation, or complex user management.

The product should grow through these stages:

```text
Personal Knowledge System
    ↓
Personal AI Knowledge Assistant
    ↓
Internal Team Knowledge Hub
    ↓
Public Knowledge Portal
    ↓
NOVA-integrated Sales/Presales Copilot
```

---

## M0 — Project Foundation

Goal: establish project constitution and core design files.

Deliverables:

- Project constitution;
- architecture overview;
- repo structure;
- data model draft;
- content lifecycle;
- AI provider strategy;
- security/access model;
- initial prompt templates.

Status: foundation stage.

---

## M1 — Local Wiki MVP

Goal: build a local markdown-first wiki for personal use.

Must have:

- local dev environment;
- wiki frontend;
- basic navigation;
- markdown/MDX content support;
- solution/industry/capability/pattern/tender sections;
- page metadata;
- draft/reviewed/approved/public status;
- basic search.

Not required yet:

- multi-user system;
- public registration;
- guest Q&A;
- landing page generator;
- CRM/NOVA integration.

Success criteria:

- Hieu can run wiki locally;
- Hieu can create/edit pages;
- Hieu can classify and search knowledge pages.

---

## M2 — Source Registry + Manual Extraction

Goal: track sources and manually generate draft wiki pages.

Must have:

- `sources.yaml` or database-backed source registry;
- source metadata template;
- document category taxonomy;
- manual import workflow;
- prompt templates for knowledge extraction;
- draft wiki output folder.

Success criteria:

- at least 10 real sources registered;
- at least 10 draft wiki pages created from sources;
- source references preserved.

---

## M3 — AI Extraction Prototype

Goal: automate raw/text → draft wiki.

Must have:

- provider adapter interface;
- OpenAI provider;
- DeepSeek provider;
- Gemini provider placeholder;
- extraction prompt runner;
- output schema validation;
- token usage logging;
- retry/failure handling.

Success criteria:

- run one extraction job from text input;
- generate structured markdown draft;
- store token usage;
- manually review draft into approved wiki.

---

## M4 — Search + AI Q&A over Approved Wiki

Goal: ask questions over approved knowledge.

Must have:

- search index;
- retrieval over approved content only;
- AI Q&A endpoint;
- citation/source references where possible;
- max context limit;
- token budget controls;
- scope guardrails.

Success criteria:

- ask questions about approved solution knowledge;
- answer based on wiki, not raw documents by default;
- log question, answer, sources, tokens.

---

## M5 — Dockerization

Goal: make the system portable from laptop to VPS.

Must have:

- Dockerfile(s);
- docker-compose.yml;
- `.env.example`;
- persistent content volume;
- database volume if used;
- backup script draft;
- deployment README.

Success criteria:

- system runs locally with Docker Compose;
- content persists across restarts;
- environment variables control providers and secrets.

---

## M6 — VPS Launch

Goal: launch private instance on VPS with domain and SSL.

Must have:

- VPS deployment guide;
- reverse proxy;
- HTTPS;
- domain binding;
- admin login;
- backup/restore plan;
- basic monitoring.

Success criteria:

- system accessible from domain;
- admin can login;
- wiki content is reachable;
- AI keys are server-side only.

---

## M7 — Internal Team Mode

Goal: allow selected users.

Must have:

- admin-created users;
- email-based account creation;
- roles: admin/editor/viewer;
- audit log;
- per-user AI quota;
- content permissions.

Success criteria:

- selected users can access wiki;
- only editors/admins can modify content;
- token use tracked by user.

---

## M8 — NOVA Integration

Goal: connect NOVA and Knowledge Hub without tight coupling.

Must have:

- Knowledge Hub API for search/ask;
- API endpoint for NOVA notes → draft knowledge article;
- shared metadata contract;
- auth token between systems;
- integration test.

Success criteria:

- NOVA can query Knowledge Hub from a chat window;
- NOVA notes can be distilled into Sales Knowledge drafts;
- Knowledge Hub remains usable standalone.

---

## M9 — Public Portal + Landing Page Curation

Goal: publish selected content externally.

Must have:

- public content flag;
- landing page candidate flag;
- curated landing page generator;
- guest Q&A quota;
- lead capture;
- sales handoff;
- external registration/approval.

Success criteria:

- public visitor can browse approved public content;
- guest Q&A limited to 3–5 questions;
- lead captured after quota;
- sales can follow up.
