# M1 Implementation Plan

## Objective

Build the first usable version of NOVA Knowledge Hub as a Tech Knowledge Base.

Primary focus:

- APM
- IIoT
- Historian
- IBM MAS

Not business memory.
Not AI OS.
Not CRM.

---

## Definition of Success

A user can:

1. Browse solution pages.
2. Browse capability pages.
3. Browse architecture/pattern pages.
4. Search knowledge.
5. Prepare for future AI query.

---

## Technical Scope

### Frontend

Recommended:

- Docusaurus
- MDX support
- Local search

### Content

Markdown-first.

### Metadata

Required:

- type
- status
- visibility
- source_refs
- tags

---

## Deliverables

### D1 Repository Structure

apps/
content/
docs/
prompts/
registry/
templates/

### D2 Tech Knowledge Base Structure

solutions/
capabilities/
patterns/
comparisons/
tender/

### D3 Initial Solution Pages

- IDBoxRT
- Canary
- AVEVA PI
- EtaPRO
- IBM MAS

### D4 Initial Capability Pages

- APM
- IIoT Platform
- Industrial Historian
- Condition Monitoring
- Predictive Maintenance

### D5 Initial Pattern Pages

- Historian to APM
- Edge to Center
- OPC UA Integration
- MQTT Sparkplug
- Maximo Integration

---

## Explicitly Out of Scope

- Knowledge Graph
- Modes
- Skills execution
- AI Orchestration
- CRM
- Public portal
- Landing pages
- External users
- Public chatbot

---

## Next Milestone

After M1:

M2 = AI Query over Approved Knowledge.
