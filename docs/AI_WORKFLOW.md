# AI Workflow

## 1. Purpose

This document defines how AI should be used inside the Opportunity-centered Industrial GTM Intelligence Platform.

AI is a tool for acceleration, extraction, mapping, scoring support, drafting, and review.

AI is not the source of truth.

In the current MVP lane, AI and agent work is documentation and placeholder interfaces only. There is no crawler, no agent orchestration, no automatic promotion, and no direct write from AI output into verified or promoted records.

## 2. Core Philosophy

```text
Human sets the goal.
AI collects, extracts, maps, drafts, and suggests.
Human reviews and approves.
Approved knowledge and verified intelligence become reusable.
```

## 3. Operating Flow

```text
Collect -> Verify -> Normalize -> Link -> Score -> Strategize -> Human Review -> Act
```

AI may assist at each stage, but it must not skip verification or human approval.

## 4. Logical AI Agents

### Market Intelligence Agent

Used for:

- ingesting selected public market signals;
- extracting structured signal records;
- identifying possible customer, plant, industry, and trigger;
- attaching source, timestamp, reliability, and evidence summary.

Rule:

Do not write directly into final Opportunity records.

### Customer Intelligence Agent

Used for:

- normalizing customer names and aliases;
- linking parent company, subsidiaries, plants, contacts, and industries;
- identifying customer profile gaps;
- suggesting research tasks.

### Procurement Intelligence Agent

Used for:

- extracting tender scope and requirements;
- identifying deadlines, eligibility, budget signals, competitors, and award results;
- linking tender records to customers, plants, solutions, and opportunities.

### Knowledge Mapping Agent

Used for:

- mapping Avenue solutions, products, partners, case studies, and capabilities to customer needs and tender requirements;
- suggesting solution fit and capability gaps.

### Opportunity Generation Agent

Used for:

- converting verified signals into Opportunity candidates;
- merging duplicates;
- scoring opportunities;
- separating evidence from assumptions;
- recommending next actions;
- marking low-confidence opportunities for human review.

### Strategy Agent

Used for:

- recommending sales, presales, tender, or executive strategy;
- proposing entry point, message angle, solution bundle, and internal preparation;
- generating action plans for Sales, Presales, Technical, and Management.

### Verification / Governance Agent

Used for:

- checking data quality;
- detecting unsupported claims;
- detecting outdated or conflicting information;
- flagging sensitive or risky information;
- enforcing human approval gates.

## 5. Provider-Agnostic Design

AI providers must be accessed through adapters.

Supported/future providers:

- OpenAI
- DeepSeek
- Gemini
- Claude
- NotebookLM-assisted manual workflow
- local LLM

Generic interface:

```text
ProviderAdapter.run(prompt, input, model, options) -> AIResult
```

AIResult should include:

- output text;
- structured output if available;
- input token count;
- output token count;
- estimated cost;
- model name;
- provider name;
- error state;
- source references if grounded;
- confidence or uncertainty notes when applicable.

## 6. Extraction Workflow

```text
Select source
  -> extract text
  -> select prompt template
  -> select provider/model
  -> run extraction
  -> validate output schema
  -> store as draft or unverified intelligence
  -> log token/cost
  -> request human review
```

Rules:

- Do not process unchanged sources repeatedly.
- Use source hash where possible.
- Preserve source references.
- Store AI output as draft or unverified unless a human promotes it.

## 7. Opportunity Workflow

```text
Verified customer / plant / tender / signal / solution data
  -> opportunity candidate
  -> evidence and assumption separation
  -> scoring
  -> strategy recommendation
  -> human review
  -> approved action
```

Rules:

- Opportunity must show evidence, assumptions, confidence, owner, and review status.
- Low-confidence opportunities should be marked for review.
- Duplicate opportunities should be suggested for merge, not silently merged.
- Strategy recommendations must include risks and constraints.

## 8. Query Workflow

```text
User asks question
  -> check role/scope
  -> retrieve approved knowledge and verified intelligence
  -> construct bounded context
  -> run AI answer
  -> cite related pages/sources
  -> log usage
```

Rules:

- Prefer approved knowledge and verified intelligence.
- Do not retrieve private/internal content for public users.
- Do not send excessive context to the model.
- Reject questions outside system scope when needed.

## 9. Token Cost Controls

Must have from early implementation:

- max input length;
- max output length;
- token logging;
- provider/model selection;
- extracted text cache;
- source hash checks;
- optional daily budget limit;
- optional kill switch for public AI Q&A later.

## 10. Human Review Rules

AI-generated content and AI-inferred opportunities must be reviewed before being treated as official.

Reviewer should check:

- factual correctness;
- source traceability;
- freshness;
- evidence vs assumption separation;
- confidentiality;
- overclaiming;
- conflicts with verified human-entered data;
- suitability for action.

## 11. Anti-Patterns

Avoid:

- treating AI output as final knowledge;
- letting crawler output directly create approved opportunities;
- using one model for all tasks;
- reprocessing long documents without caching;
- public AI Q&A without quota;
- querying raw confidential documents by default;
- letting AI create public claims without source evidence;
- strategy recommendations without risks, assumptions, and review status.
