# AI Provider Strategy

## 1. Core Principle

NOVA Knowledge Hub must be AI-model-agnostic.

AI providers are replaceable adapters.  
The core system must preserve:

- source registry;
- extracted text;
- prompt templates;
- output schemas;
- draft wiki pages;
- approved knowledge;
- review history;
- token logs.

No provider should become the system of record.

---

## 2. Initial Providers

### OpenAI / ChatGPT

Best used for:

- reasoning;
- synthesis;
- proposal drafting;
- architecture review;
- sales/presales copilot;
- deep comparison;
- high-quality Vietnamese/English writing.

### DeepSeek

Best used for:

- cost-effective extraction;
- coding assistance;
- technical transformation;
- batch processing experiments.

### Gemini

Best used for:

- Google ecosystem integration;
- company account workflows;
- document understanding where Google Workspace integration is preferred.

### NotebookLM

Best used as:

- research workbench;
- source-grounded reading tool;
- citation-based document exploration;
- manual/assisted extraction stage.

NotebookLM should not be treated as the sole backend pipeline unless its API and export capabilities are confirmed for the account in use.

---

## 3. Provider Adapter Pattern

Each provider adapter should expose a common interface:

```text
Provider.generate(prompt, input, options) → LLMResponse
```

Common response fields:

- provider;
- model;
- input_tokens;
- output_tokens;
- estimated_cost;
- raw_response;
- structured_output;
- finish_reason;
- error.

---

## 4. Task-Based Model Routing

Do not ask: “Which model is best?”  
Ask: “Which task needs which capability?”

Recommended routing:

```text
Classification/tagging        → cheap model
Basic extraction              → cheap or mid model
Tender requirement extraction → accurate, low-creativity model
Draft wiki generation         → mid model
Deep reasoning/comparison     → strong reasoning model
Proposal/landing copy         → strong writing model
Critical bid analysis         → strong model, internal only
Public guest Q&A              → cheaper model + strict retrieval + quota
```

---

## 5. Token Cost Control

Must be implemented early.

Required controls:

- max input length;
- max output length;
- per-job budget;
- per-day budget;
- provider/model routing;
- cache repeated outputs;
- do not reprocess unchanged sources;
- hash source files;
- log token use by module;
- admin kill switch for AI calls.

High-risk cost areas:

1. Public Q&A.
2. Large document extraction.
3. Repeated internal Q&A with excessive context.

---

## 6. Output Schema First

Prompts should produce structured outputs whenever possible.

Example extraction schema:

```json
{
  "title": "",
  "type": "solution | industry | capability | tender | pattern | sales_knowledge",
  "summary": "",
  "key_points": [],
  "entities": [],
  "relationships": [],
  "requirements": [],
  "source_refs": [],
  "uncertainties": [],
  "recommended_wiki_pages": []
}
```

The same schema should work across OpenAI, DeepSeek, Gemini, and future models.

---

## 7. Prompt Library

Prompt templates should be stored in files and versioned.

Initial prompt categories:

```text
prompts/
├─ solution/
├─ industry/
├─ tender/
├─ pattern/
├─ sales-note/
└─ document-dna/
```

Prompt templates must include:

- purpose;
- input requirements;
- output format;
- anti-hallucination rules;
- source citation rules;
- review notes.

---

## 8. NotebookLM Usage Policy

NotebookLM can be used in semi-automated workflows:

1. Upload/import source into NotebookLM.
2. Ask it to extract knowledge using a standard template.
3. Export/copy the generated structured output.
4. Store output as `notebooklm_output` source or draft wiki.
5. Review and approve manually.

Long term, replace manual copy/export with API-based workflows where possible.

---

## 9. Public AI Q&A Policy

Do not enable public Q&A in MVP.

When added later:

- guest users get 3–5 questions only;
- no file upload for guests;
- restrict to public approved content;
- limit question length;
- rate limit by IP/session;
- cache common Q&A;
- redirect to sales after quota.

---

## 10. Failure Handling

If AI output is incomplete or uncertain, the system should:

- mark the draft as low confidence;
- preserve the raw output;
- log the error;
- allow rerun with another provider;
- never auto-approve.
