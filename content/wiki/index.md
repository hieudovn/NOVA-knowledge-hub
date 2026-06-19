---
title: NOVA Knowledge Hub
type: index
status: draft
visibility: private
tags:
  - knowledge-hub
  - m1
source_refs:
  - source_id: DOC-M1-IMPLEMENTATION-PLAN
    title: M1 Implementation Plan
---

# NOVA Knowledge Hub

NOVA Knowledge Hub is the markdown-first technical knowledge base for solution, capability, pattern, comparison, and tender knowledge.

This M1 wiki skeleton focuses on the APM, IIoT, historian, and IBM MAS knowledge base. It is intentionally separate from AI query, knowledge graph, CRM, public portal, landing pages, and user management.

## Sections

- [Solutions](./solutions/)
- [Capabilities](./capabilities/)
- [Patterns](./patterns/)
- [Comparisons](./comparisons/)
- [Tender](./tender/)

## Page Metadata

Every wiki page must include front matter with:

- `type`
- `status`
- `visibility`
- `tags`
- `source_refs`

Use `npm run validate:metadata` inside `apps/wiki` to check the required metadata fields.
