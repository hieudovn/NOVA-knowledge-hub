# Decision Log

This file records major project decisions.

Decisions should be updated when project direction changes.

---

## DEC-001 — Personal-first architecture

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

Build NOVA Knowledge Hub first for personal use by Hieu, then evolve it into a team-ready and public-ready platform.

### Rationale

The initial user has the clearest need and can validate the system quickly.

A personal-first model avoids overfitting the system to one company structure.

### Consequences

- Avenue JSC is modeled as an organization/context, not hardcoded as the system owner.
- User management can stay simple in early phases.
- Portability becomes a key design requirement.

---

## DEC-002 — Knowledge Hub is independent but integrable with NOVA

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

Knowledge Hub and NOVA are separate systems.

Knowledge Hub is the system of knowledge.

NOVA is the system of work.

They will integrate through APIs.

### Rationale

This preserves independent evolution of both products.

NOVA can send notes to Knowledge Hub.

NOVA can query Knowledge Hub for solution knowledge.

### Consequences

- Do not directly couple their databases.
- Define API contracts later.
- Knowledge Hub remains usable without NOVA.

---

## DEC-003 — Wiki before landing page

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

Build the wiki and knowledge lifecycle first.

Landing pages will be created later from selected approved wiki content.

### Rationale

The source of truth must be structured knowledge, not marketing pages.

### Consequences

- Landing pages are downstream views.
- Public content requires approval.
- Marketing claims should trace back to approved knowledge.

---

## DEC-004 — AI provider agnostic

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

Do not depend on one AI model or provider.

Support provider adapters for OpenAI, DeepSeek, Gemini, NotebookLM-assisted workflows, and future providers.

### Rationale

Different tasks need different models.

The project should remain portable and cost-aware.

### Consequences

- Build an AI adapter interface.
- Keep prompts and schemas independent from providers.
- Log provider/model usage and cost.

---

## DEC-005 — Raw sources are distributed

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

Raw sources may live in different locations: Google Drive, local disk, web URLs, company storage, or future systems.

The system stores source metadata and pointers, not necessarily all raw files.

### Rationale

Raw storage can become large and may contain sensitive material.

Not all raw files need continuous access.

### Consequences

- Source registry is required.
- Ingestion is on-demand.
- Hash/cache mechanisms are needed to avoid repeated processing.

---

## DEC-006 — AI output is draft until reviewed

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

AI-generated content must be treated as draft.

Only human-reviewed content becomes approved knowledge.

### Rationale

Prevents hallucinated or overclaimed knowledge from becoming operational truth.

### Consequences

- Content status lifecycle is required.
- Human review workflow is a core feature.
- AI query should prefer approved content.

---

## DEC-007 — Local-first, Docker-ready

**Date:** 2026-06-18  
**Status:** Accepted

### Decision

Development starts locally on a personal computer.

The system must later be deployable to a VPS using Docker Compose.

### Rationale

This gives fast iteration and future portability.

### Consequences

- Keep environment configuration explicit.
- Avoid cloud-only assumptions.
- Prepare Docker and deployment docs after the local MVP is useful.
