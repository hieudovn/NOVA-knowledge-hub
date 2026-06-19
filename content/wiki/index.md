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

## Browse the Wiki

| Section | Purpose |
|---|---|
| [Solutions](./solutions/) | Draft solution anchors for IDBoxRT, Canary, AVEVA PI, EtaPRO, IBM MAS, AVEVA APM, Litmus Edge, and AI PlantOps. |
| [Capabilities](./capabilities/) | Neutral capability anchors for APM, IIoT Platform, Industrial Historian, Condition Monitoring, and Predictive Maintenance. |
| [Patterns](./patterns/) | Reusable architecture and integration patterns for historian, edge, OPC UA, MQTT, Maximo, and SCADA/DCS ingestion topics. |
| [Comparisons](./comparisons/) | Conservative draft comparison frameworks for solution evaluation and landscape mapping. |
| [Tender](./tender/) | Draft requirement mapping templates for APM, IIoT, historian, and compliance notes. |

## M1 Boundaries

- Content is draft and private unless explicitly reviewed later.
- Source traceability is required before any page becomes approved knowledge.
- Pricing, licensing, public marketing, AI chat, CRM, backend, database, Knowledge Graph, Modes, Skills, and AI orchestration are outside this phase.

## Page Metadata

Every wiki page must include front matter with:

- `type`
- `status`
- `visibility`
- `tags`
- `source_refs`

Use `npm run validate:metadata` inside `apps/wiki` to check the required metadata fields.
