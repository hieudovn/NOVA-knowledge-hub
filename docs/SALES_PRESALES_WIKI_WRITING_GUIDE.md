# Sales / Presales Wiki Writing Guide

## Purpose

This guide keeps solution pages useful for sales and presales readers while preserving M2 source traceability.

Solution pages should answer quickly:

- What is the solution?
- Where does it fit?
- What customer problem does it solve?
- What does it do?
- When should it be positioned?
- What still needs validation before proposal or tender use?

## Two-Layer Page Model

### Layer 1 - Sales / Presales Readable Layer

Place this near the top of each solution page.

It should be clear, customer-oriented, and useful for quick reading. It may use controlled confidence, but it should not open every sentence with source IDs, draft caveats, or validation warnings.

### Layer 2 - Evidence / Validation Layer

Place this below the readable layer.

It should preserve:

- source IDs
- clickable source links
- document-level validation notes
- source-backed draft notes
- open questions
- excluded/restricted content
- review notes

## Recommended Solution Page Structure

Top readable layer:

- Executive Summary
- Where It Fits
- Customer Problems It Addresses
- What It Does
- Architecture Overview
- Core Capabilities
- Typical Use Cases
- Presales Qualification Notes
- What To Validate With Customer
- Validation Status

Evidence / validation layer:

- Evidence Sources
- Source-Backed Draft Notes
- Document-Level Validation Notes
- Open Questions
- Excluded Content
- Review Notes

## Sales / Presales Tone Rules

- Use customer-oriented language.
- Explain what the solution does, who uses it, and why it matters.
- Prefer active sentences.
- Write for quick internal understanding, not public marketing.
- Use practical positioning language: "Position it when...", "Use it for...", "Avoid positioning it as..."
- Avoid opening every paragraph with "draft", "candidate", "pending validation", or a source ID.
- Avoid unsupported superlatives such as "best", "leading", "world-class", "guaranteed", or "proven".

## Evidence Placement Rules

- Keep source IDs and Drive links in the evidence layer.
- Do not remove source-backed draft notes.
- Do not remove document-level validation notes.
- Keep NotebookLM content labeled as derived review aid only.
- Keep public website references clearly labeled as public supporting references.
- Keep restricted-source notices visible.
- Do not turn a draft claim into a final claim just to improve readability.

## Keep Evidence Out of the Opening Narrative

- Opening sections should be customer-readable before they are reviewer-readable.
- Source IDs belong in `Evidence Sources`, `Source-Backed Draft Notes`, `Document-Level Validation Notes`, and similar evidence sections.
- Do not write opening paragraphs as source audits. Avoid repeated phrases such as "the source supports", "current source-backed draft", "review status", or "document-level source".
- A top section may include one short evidence-basis note if needed, but avoid paragraph-by-paragraph citations.
- Consolidate caveats in `Validation Status`, `What To Validate With Customer`, `Open Questions`, and `Review Notes`.
- Architecture sections should explain the solution architecture first, then name what still needs validation for implementation planning.

## How to Write Confidence Without Sounding Uncertain

Use controlled confidence labels:

- `Validated draft`: supported by reviewed sources, but not yet approved final knowledge.
- `Partially validated`: supported at a high level, but details remain unresolved.
- `Still to validate`: useful claim or positioning idea that needs more source review.

Write readable claims first, then place uncertainty in a dedicated section such as:

- Validation Status
- What To Validate With Customer
- Open Questions
- Evidence Sources

## How to Handle Draft / Still-to-Validate Claims

- Keep useful draft guidance in the top layer only when it is supported or clearly bounded.
- Move detailed caveats into `Validation Status` or `Open Questions`.
- Do not present comparison conclusions unless the comparison has been separately validated.
- If a claim is useful but not supported, write it as a question or validation task.

## What to Avoid

- Do not paste raw source content.
- Do not write public marketing copy.
- Do not make final vendor claims from draft sources.
- Do not overuse source IDs in the opening paragraphs.
- Do not hide evidence links or review notes.
- Do not add unrelated roadmap scope such as backend, API, CRM, public portal, AI Q&A, Knowledge Graph, Modes, Skills, or AI orchestration.

## Pricing / Commercial Exclusion Rules

- Do not put pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki knowledge pages.
- Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.
- General case-study benefits may be included only when source-backed and non-pricing.
- If a source mixes technical and commercial content, extract only technical knowledge and mark pricing/commercial sections as excluded/restricted.
- Pricing-risk sources must not be linked as normal wiki evidence.

## Example Before / After

Before:

> Canary is a draft historian page. `SRC-CANARY-DOC-0001` supports collection, storage, contextualization, visualization, calculations, and event monitoring. Review status is draft and pending human review.

After:

> Canary is an industrial historian and time-series data foundation for plant environments. Position it when a customer needs to collect, store, organize, visualize, and reuse operational data for operations, engineering, reliability, and analytics workflows.

Evidence is then preserved below in `Evidence Sources` and `Document-Level Validation Notes`.

## Acceptance Checklist

- The page answers what the solution is, where it fits, what problem it solves, what it does, and when to position it.
- The first screen is readable by sales/presales without reading source tables first.
- Source links and document-level validation notes remain intact.
- Draft/private/low-confidence metadata is unchanged.
- Unsupported claims remain marked as `Still to validate` or moved to open questions.
- Pricing and commercial content is excluded.
- Mermaid diagrams have captions that say what they show, what supports them, and what remains to validate.
