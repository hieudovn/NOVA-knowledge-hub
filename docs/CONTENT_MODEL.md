# Content Model v0.1

## 1. Purpose

This document defines how knowledge content is structured inside NOVA Knowledge Hub.

The content model must support:

- personal knowledge management
- solution knowledge
- industry knowledge
- sales/presales knowledge
- tender knowledge
- technical architecture knowledge
- future public publishing
- future NOVA integration

---

## 2. Core Content Types

### 2.1 Solution Page

Represents a product, platform, or solution.

Examples:

- IBM Maximo Application Suite
- IDBoxRT
- EtaPRO
- Canary Historian
- AVEVA PI
- ESB Data Platform

Typical sections:

- overview
- target customers
- key capabilities
- architecture
- integrations
- differentiators
- limitations
- evidence/case studies
- proposal notes
- tender compliance notes

### 2.2 Industry Page

Represents an industry or domain.

Examples:

- power generation
- power transmission
- oil and gas
- manufacturing
- metro/railway
- F&B
- cement
- steel

Typical sections:

- industry context
- pain points
- common systems
- key use cases
- buying triggers
- regulatory drivers
- solution mapping
- common objections

### 2.3 Capability Page

Represents a business or technical capability.

Examples:

- APM
- CBM
- PdM
- IIoT platform
- data historian
- data integration
- AI/ML analytics
- anomaly detection
- reporting
- cybersecurity

### 2.4 Pattern Page

Represents reusable architecture, integration, or delivery patterns.

Examples:

- historian to APM
- OPC UA integration
- edge to center architecture
- ISA-95 data model
- MQTT/Sparkplug namespace
- tender requirement extraction

### 2.5 Tender Knowledge Page

Represents tender-related reusable knowledge.

Examples:

- requirement register
- compliance matrix
- clarification questions
- technical evaluation criteria
- deliverables register
- risk register

### 2.6 Sales Knowledge Page

Represents distilled knowledge from sales/presales notes.

Examples:

- customer pain point pattern
- objection handling note
- buying trigger
- competitor observation
- repeated customer question
- proposal positioning

Sales Knowledge may originate from NOVA Take Notes.

### 2.7 Source Note

Represents extracted information from a raw source before it becomes a curated wiki page.

This is usually draft material.

### 2.8 Landing Candidate

Represents approved content that is suitable for public-facing publishing.

A landing candidate is not a separate source of truth.

It is a selected view of approved wiki content.

---

## 3. Standard Page Metadata

Every knowledge page should include front matter.

```yaml
title: ""
type: "solution | industry | capability | pattern | tender | sales | source-note"
status: "draft | reviewed | approved | public"
visibility: "private | internal | partner | public"
owner: ""
organization: ""
related_solutions: []
related_industries: []
related_capabilities: []
source_refs: []
landing_candidate: false
last_reviewed: ""
reviewed_by: ""
confidence: "low | medium | high"
```

---

## 4. Content Lifecycle

```text
draft
  -> reviewed
  -> approved
  -> public
```

### Draft

AI-generated, manually written, or imported material.

Not official.

### Reviewed

Checked by the owner or editor.

Still not final.

### Approved

Official operational knowledge.

Can be used by AI query, NOVA integration, and internal reference.

### Public

Approved for external publishing.

Can be used for landing pages and public-facing content.

---

## 5. Visibility Levels

### Private

Only owner/admin.

### Internal

Internal team users.

### Partner

Approved external partners or customer-specific access.

### Public

Visible to public website visitors.

---

## 6. Recommended Wiki Folder Structure

```text
content/
  draft/
  approved/
  public/

docs/
  solutions/
  industries/
  capabilities/
  patterns/
  tender/
  sales-knowledge/
  sources/
```

For Docusaurus/MDX, the final layout may map these categories into the `docs/` directory.

---

## 7. Page Quality Rules

A page is good enough for approved status only if it has:

1. clear purpose
2. concise summary
3. source references if derived from documents
4. known limitations or uncertainty
5. related concepts/pages
6. owner review
7. no confidential content in public fields

---

## 8. Relationship to Landing Pages

Landing pages should be generated or curated from approved public knowledge.

Do not create independent marketing claims without source traceability.

Landing page content should reference:

- solution pages
- industry pages
- capability pages
- case evidence
- approved positioning notes

---

## 9. Relationship to NOVA Notes

NOVA Take Notes can send raw or distilled notes into Knowledge Hub.

The default destination should be:

```text
Sales Knowledge Draft
```

A human should review before it becomes approved Sales Knowledge.

---

## 10. Anti-Patterns

Avoid:

- mixing raw source text with approved wiki without review
- making landing pages the source of truth
- storing confidential tender or pricing content in public pages
- storing pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, fees, or commercial terms in any wiki knowledge page, including private/internal pages
- letting AI generate unverified claims
- making Avenue-specific assumptions part of the core model

## 11. Pricing and Commercial Information Handling

Pricing and commercial information is not wiki knowledge.

Do not put pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki pages.

Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.

Case study benefits may be included only when they are source-backed and do not disclose specific vendor pricing, license fees, discounts, proposal prices, or commercial terms.

If a source contains pricing and technical knowledge together, extract only technical knowledge into wiki pages and mark the pricing section as excluded/restricted.
