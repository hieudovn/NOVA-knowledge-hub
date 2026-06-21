# Operating Roles And Quality Guide Report

## Summary

Created the documentation-level Operating Roles & Quality Guide for the artifact-first, role-aware, skill-enabled operating model.

This batch defines role perspectives and quality criteria only. It does not implement runtime modes, executable skills, agents, crawler, CRM workflow, dashboard, graph database, backend/API, authentication, SaaS features, chatbot, or public portal features.

## Operating Roles Guide Created

Created:

- `docs/14_OPERATING_ROLES_AND_QUALITY_GUIDE.md`

The guide explains:

- why artifact templates are not enough;
- how roles, artifacts, future skills, and quality rubrics relate;
- general role principles;
- evidence and assumption handling;
- business-facing communication rules;
- role specifications;
- cross-role quality rubric;
- writing as one skill inside roles;
- review/rewrite checklist;
- common failure modes;
- how to use the guide in Codex and external LLM prompts;
- future link to a skills catalog.

## Roles Defined

Defined 10 operating roles:

- Product Owner Role
- Sales Strategist Role
- Presales Consultant Role
- Solution Architect Role
- Tender Manager Role
- Marketing Writer Role
- Executive Reviewer Role
- Data Governance Reviewer Role
- Customer Intelligence Analyst Role
- Technical Reviewer Role

Each role includes mission, audience, responsibilities, decision style, inputs, outputs, related artifact families, future skills, communication style, quality criteria, and what to avoid.

## Quality Rubric Created

Created a 1 to 5 cross-role quality rubric for:

- audience fit;
- business clarity;
- strategic usefulness;
- technical credibility;
- evidence discipline;
- conciseness;
- actionability;
- public/commercial safety;
- structure and readability;
- role fidelity.

Each dimension defines what weak, usable, and strong output looks like.

## Role Prompt Snippets Created

Created:

- `templates/artifacts/role-prompt-snippets.md`

It contains copy-paste-ready snippets for all 10 operating roles. Each snippet includes role instruction, mission, audience, purpose/task placeholder, tone, required inputs, expected outputs, do, avoid, and quality bar.

## Artifact Templates Updated

Updated the 15 existing artifact templates in `templates/artifacts/` to include:

```yaml
primary_role:
supporting_roles: []
quality_rubric: docs/14_OPERATING_ROLES_AND_QUALITY_GUIDE.md#cross-role-quality-rubric
```

Also added:

```markdown
## Role / Audience / Quality Lens

> Specify the primary operating role, supporting roles, intended audience, and quality criteria for this artifact.
```

## Scope Preserved

This batch added documentation and template metadata only.

No runtime implementation was added for:

- modes;
- executable skills;
- agents;
- web crawlers;
- CRM workflow;
- graph database;
- UI dashboard;
- backend/API service;
- authentication;
- SaaS or multi-tenant features;
- chatbot;
- public portal.

No pricing, licensing, or restricted commercial content was added to general wiki knowledge.

## Recommended Next Batch

Create a Skills Catalog at the documentation level only.

Recommended scope:

- define future skill names;
- map each skill to input artifact type, output artifact type, primary role, and quality rubric focus;
- avoid executable tooling;
- start with artifact transformations such as Source Pack to Offer Map, Offer Map to Solution Brief, Tender Response Pack to Compliance Matrix, and Opportunity Scorecard to Management Decision Brief.

## Open Questions For Human Review

- Which operating roles should be prioritized for the first real artifacts: Product Owner, Presales Consultant, Sales Strategist, or Tender Manager?
- Should each artifact family have a default primary role?
- Which quality rubric dimensions should be mandatory for internal approval?
- Should public-safe artifacts require Data Governance Reviewer plus Marketing Writer review?
- Which future skills should be documented first after roles stabilize?
