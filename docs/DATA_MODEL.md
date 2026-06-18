# Initial Data Model

## 1. Design Principles

The data model must be:

- personal-first;
- organization-ready;
- portable;
- AI-provider-agnostic;
- source-traceable;
- suitable for wiki, AI Q&A, and future NOVA integration.

Do not hardcode Avenue as the only organization.

---

## 2. Core Entities

### User

Represents a person using the system.

Fields:

- id;
- email;
- name;
- role;
- status;
- organization_id;
- created_at;
- updated_at.

Initial state:

- only one user is required: Hieu.

Future roles:

- admin;
- editor;
- viewer;
- external;
- guest.

---

### Organization

Represents a company, team, or context.

Examples:

- Personal;
- Avenue JSC;
- future company;
- consulting practice.

Fields:

- id;
- name;
- type;
- domain;
- owner_user_id;
- created_at.

---

### Source

Represents a raw source or source pointer.

The system does not need to physically store all raw files.

Fields:

- id;
- title;
- source_type;
- location_uri;
- storage_provider;
- owner_user_id;
- organization_id;
- confidentiality;
- source_hash;
- version;
- language;
- domain;
- related_solution_id;
- related_industry_id;
- extraction_status;
- last_extracted_at;
- created_at;
- updated_at.

Source types:

- pdf;
- docx;
- pptx;
- markdown;
- url;
- note;
- email_attachment;
- google_doc;
- google_drive_file;
- local_file;
- notebooklm_output;
- nova_note.

---

### ExtractedText

Stores extracted text from a source.

Fields:

- id;
- source_id;
- text;
- page_start;
- page_end;
- section_title;
- chunk_index;
- extraction_method;
- created_at.

Purpose:

- avoid re-extracting raw files repeatedly;
- support AI extraction;
- preserve page/section traceability.

---

### KnowledgePage

Represents a wiki page.

Fields:

- id;
- slug;
- title;
- type;
- status;
- visibility;
- owner_user_id;
- organization_id;
- content_path;
- summary;
- tags;
- source_refs;
- landing_candidate;
- last_reviewed_at;
- created_at;
- updated_at.

Page types:

- solution;
- industry;
- capability;
- pattern;
- tender;
- sales_knowledge;
- technical_note;
- case_study;
- comparison;
- glossary;
- project_knowledge.

Status values:

- draft;
- reviewed;
- approved;
- public.

Visibility values:

- private;
- internal;
- partner;
- public.

---

### KnowledgeExtractionJob

Represents an AI extraction job.

Fields:

- id;
- source_id;
- prompt_template_id;
- provider;
- model;
- status;
- input_tokens;
- output_tokens;
- estimated_cost;
- output_path;
- error_message;
- created_by;
- created_at;
- completed_at.

Status values:

- queued;
- running;
- succeeded;
- failed;
- cancelled.

---

### PromptTemplate

Stores reusable extraction or reasoning prompts.

Fields:

- id;
- name;
- type;
- version;
- description;
- content_path;
- output_schema;
- created_at;
- updated_at.

Prompt types:

- solution_extraction;
- industry_extraction;
- tender_requirement_extraction;
- document_dna;
- sales_note_distillation;
- comparison;
- proposal_draft;
- risk_analysis.

---

### AIProvider

Represents a configured AI provider.

Fields:

- id;
- name;
- provider_type;
- enabled;
- default_model;
- use_case;
- cost_policy;
- created_at.

Provider types:

- openai;
- deepseek;
- gemini;
- claude;
- notebooklm_manual;
- local_llm.

---

### AIUsageLog

Tracks token and cost usage.

Fields:

- id;
- user_id;
- session_id;
- provider;
- model;
- module;
- input_tokens;
- output_tokens;
- estimated_cost;
- created_at.

Modules:

- extraction;
- wiki_qna;
- proposal_generation;
- tender_analysis;
- summarization;
- sales_assistant.

---

### Note

Represents a captured note, possibly from NOVA.

Fields:

- id;
- title;
- body;
- note_type;
- source_system;
- related_customer;
- related_project;
- related_solution;
- related_opportunity;
- owner_user_id;
- organization_id;
- created_at;
- updated_at.

Note types:

- sales_note;
- presales_note;
- meeting_note;
- project_note;
- idea_note;
- technical_note;
- customer_note.

---

### Lead

Future public portal entity.

Fields:

- id;
- name;
- email;
- company;
- phone;
- interest;
- question_history;
- status;
- assigned_sales;
- created_at.

Not required for initial personal MVP.

---

## 3. Initial Markdown Frontmatter

Each wiki page should support metadata like:

```yaml
title: "IDBoxRT Overview"
type: "solution"
status: "draft"
visibility: "private"
owner: "Hieu Do"
organization: "Personal"
tags:
  - idboxrt
  - iiot
  - data-platform
source_refs:
  - source_id: "SRC-0001"
    title: "IDBoxRT Technical Deck"
landing_candidate: false
last_reviewed: null
```

---

## 4. Future Knowledge Graph Readiness

The model should later support relationships such as:

- Solution supports Capability;
- Capability applies_to Industry;
- Pattern integrates System;
- TenderRequirement maps_to SolutionCapability;
- SalesNote mentions Customer;
- KnowledgePage derived_from Source;
- NOVA Note promotes_to KnowledgePage.

Do not implement graph database in MVP unless required.

Start with clean metadata and relationships that can be migrated later.
