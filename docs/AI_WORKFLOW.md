# AI Workflow v0.1

## 1. Purpose

This document defines how AI should be used inside NOVA Knowledge Hub.

AI is a tool for acceleration, extraction, drafting, comparison, and review.

AI is not the source of truth.

---

## 2. Core Philosophy

```text
Human sets the aim.
AI extracts and drafts.
Human reviews and approves.
Approved knowledge becomes reusable.
```

---

## 3. AI Roles

### 3.1 Extraction Assistant

Used for:

- extracting solution knowledge
- extracting tender requirements
- extracting integration requirements
- extracting document DNA
- extracting case study facts

### 3.2 Drafting Assistant

Used for:

- draft wiki pages
- draft comparison pages
- draft proposal sections
- draft landing page candidates

### 3.3 Review Assistant

Used for:

- finding gaps
- finding contradictions
- checking assumptions
- identifying unclear claims

### 3.4 Query Assistant

Used for:

- asking questions over approved knowledge
- supporting NOVA chat integration
- supporting sales/presales preparation

---

## 4. Provider-Agnostic Design

AI providers must be accessed through adapters.

Supported/future providers:

- OpenAI
- DeepSeek
- Gemini
- Claude
- NotebookLM-assisted manual workflow
- local LLM

The core system should not depend on one provider.

Generic interface:

```text
ProviderAdapter.run(prompt, input, model, options) -> AIResult
```

AIResult should include:

- output text
- structured output if available
- input token count
- output token count
- estimated cost
- model name
- provider name
- error state

---

## 5. Model Routing Policy

### Cheap/Fast Models

Use for:

- classification
- tagging
- metadata extraction
- simple summarization
- batch draft extraction

### Strong Reasoning Models

Use for:

- architecture comparison
- solution design
- bid strategy
- risk analysis
- proposal reasoning

### NotebookLM / Grounded Tools

Use for:

- reading source documents with citation
- checking source-grounded claims
- document-level research

---

## 6. Extraction Workflow

```text
Select source
  -> extract text
  -> select prompt template
  -> select provider/model
  -> run extraction
  -> validate output schema
  -> generate draft wiki page
  -> log token/cost
  -> mark job completed
```

Rules:

- Do not process unchanged sources repeatedly.
- Use source hash where possible.
- Preserve source references.
- Store AI output as draft only.

---

## 7. Query Workflow

```text
User asks question
  -> check role/scope
  -> retrieve approved knowledge
  -> construct bounded context
  -> run AI answer
  -> cite related pages/sources
  -> log usage
```

Rules:

- Prefer approved knowledge.
- Do not retrieve private/internal content for public users.
- Do not send excessive context to the model.
- Reject questions outside system scope when needed.

---

## 8. Token Cost Controls

Must have from early implementation:

- max input length
- max output length
- token logging
- provider/model selection
- reuse extracted text cache
- avoid repeated extraction of unchanged files
- optional daily budget limit
- optional kill switch for public AI Q&A later

---

## 9. AI Prompt Categories

Prompt library should include:

```text
prompts/
  solution/
  industry/
  capability/
  pattern/
  tender/
  sales-note/
  document-dna/
  comparison/
  proposal/
```

---

## 10. Human Review Rules

AI-generated content must be reviewed before being approved.

Reviewer should check:

- factual correctness
- missing context
- source traceability
- confidentiality
- overclaiming
- suitability for public/internal use

---

## 11. Anti-Patterns

Avoid:

- treating AI output as final knowledge
- using one model for all tasks
- reprocessing long documents without caching
- public AI Q&A without quota
- querying raw confidential documents by default
- letting AI create public claims without source evidence
