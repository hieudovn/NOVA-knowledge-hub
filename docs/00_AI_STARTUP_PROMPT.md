# AI Startup Prompt

Use this prompt at the start of any future AI-assisted development session in this repository.

## Required Startup Context

Before planning, designing, coding, refactoring, or changing documentation, read:

1. `docs/00_NOVA_CORE_DESIGN_PRINCIPLES.md`
2. `README.md`
3. `docs/DECISION_LOG.md`
4. Relevant project-specific docs, such as architecture, roadmap, data model, governance, execution rules, current lane, content model, AI workflow, and existing feature docs.

If a referenced file does not exist, state that clearly and continue with the closest available project-specific context.

## NOVA Alignment Check

Before implementation, produce a NOVA Alignment Check with:

- `Relevant NOVA module`: `NOVA Signal`, `NOVA Action`, `NOVA Knowledge Governance`, or `Cross-module`.
- `Loop stage`: `Signal`, `Insight`, `Decision`, `Action`, `Feedback`, `Knowledge Asset`, or `Better Signal / Better Action`.
- `Source-of-truth impact`: whether the change creates, reads, updates, promotes, deprecates, or only references governed knowledge.
- `Governance status impact`: whether affected content or records are `raw`, `draft`, `reviewed`, `approved`, `source_of_truth`, `deprecated`, or `archived`.
- `Human review gate`: what must be reviewed before customer-facing, proposal, commercial, technical, public, or high-impact use.
- `Decision log impact`: whether a new decision log entry is needed.

## Required Response Shape

Future AI responses for implementation work should include:

1. NOVA Alignment Check
2. Plan
3. Implementation
4. Validation
5. Notes / Risks

For very small tasks, keep each section brief, but do not hide the governance check.

## Development Rules

- Do not treat raw notes, AI memory, vector database results, search snippets, generated content, or unreviewed imports as source of truth.
- Prefer approved and source-of-truth material when using existing knowledge.
- Keep evidence, assumptions, confidence, owner, status, and usage policy visible for important records or assets.
- Make human review gates explicit for external, customer-facing, proposal, commercial, technical, legal, or high-impact outputs.
- Do not promote AI output directly into approved or source-of-truth knowledge.
- Do not bypass the decision log when changing architecture, governance, data lifecycle, module boundaries, source-of-truth rules, or review gates.
- Preserve project-specific context. NOVA Core is the operating model; this repository may implement only part of that model.
- Avoid large implementation changes when the task is documentation, alignment, or governance guidance.

## Module Mapping Guide

Use this mapping when deciding where a feature belongs:

- `NOVA Signal`: capture, import, classify, interpret, deduplicate, or evaluate signals; distinguish signal from noise; produce insights, pain hypotheses, needs, gaps, alerts, or follow-up questions.
- `NOVA Action`: score, prioritize, decide, assign, plan, generate briefs, create offer or pilot hypotheses, manage workflow status, or log decisions and next actions.
- `NOVA Knowledge Governance`: capture feedback, review results, extract lessons, create reusable assets, manage templates/playbooks/source-of-truth records, version content, set usage policy, track reuse, or deprecate knowledge.
- `Cross-module`: changes that span more than one module, especially data models, schemas, AI workflows, governance rules, source registries, or operating loops.

## Source-Of-Truth Reminder

Source-of-truth content should be portable and reviewable where possible, such as Markdown, YAML, JSON, CSV, SQL, or database records. Embeddings, vector databases, caches, chat history, and model memory are retrieval aids, not authoritative records.

