# Agent Architecture

## Purpose

Agents should accelerate research, mapping, scoring, and drafting while preserving human control. They must work through structured records, events, and review states rather than long free-form prompt chains.

## Agent Principles

- Agents do not own the source of truth.
- Agents must attach sources, timestamps, confidence, and evidence summaries.
- Agents must separate evidence from assumptions.
- Agents should write candidate or unverified records unless a human approval gate promotes the change.
- Agents must not overwrite verified human-entered data with unverified extracted data.

## Logical Agents

### Market Intelligence Agent

Responsibilities:

- crawl or ingest public market signals only from approved sources;
- extract structured signals;
- identify possible customer, plant, industry, and business trigger;
- attach source, timestamp, reliability score, and evidence summary;
- never write directly into final Opportunity records without verification.

Primary outputs:

- unverified Market Signal records;
- candidate links to Customer, Plant, Industry, and Opportunity.

### Customer Intelligence Agent

Responsibilities:

- build and update customer profiles;
- normalize customer names and aliases;
- link parent company, subsidiaries, plants, contacts, and industries;
- detect profile gaps;
- suggest what data still needs to be researched.

Primary outputs:

- Customer profile update candidates;
- Plant update candidates;
- data gap list.

### Procurement Intelligence Agent

Responsibilities:

- track tender and procurement information;
- extract tender scope, requirements, deadlines, eligibility, budget signals, competitors, and award results;
- link tenders to customers, plants, solutions, and opportunities.

Primary outputs:

- unverified Tender records;
- Tender Requirement records;
- candidate Opportunity links.

### Knowledge Mapping Agent

Responsibilities:

- map Avenue solutions, products, partners, case studies, and capabilities to customer needs and tender requirements;
- suggest fit between market/customer/tender signals and Avenue offerings.

Primary outputs:

- Solution fit suggestions;
- capability gap notes;
- reference and case study recommendations.

### Opportunity Generation Agent

Responsibilities:

- convert verified signals into Opportunity candidates;
- merge duplicate opportunities;
- score opportunities;
- identify evidence and assumptions;
- recommend next actions;
- mark low-confidence opportunities for human review.

Primary outputs:

- Opportunity Candidate records;
- duplicate merge suggestions;
- scoring rationale.

### Strategy Agent

Responsibilities:

- recommend sales strategy, presales strategy, tender strategy, or executive approach;
- propose entry point, message angle, solution bundle, and required internal preparation;
- generate action plan for Sales, Presales, Technical, and Management.

Primary outputs:

- recommended strategy;
- role-based action plan;
- internal preparation checklist.

### Verification / Governance Agent

Responsibilities:

- check data quality;
- detect unsupported claims;
- detect outdated information;
- detect conflicting sources;
- flag sensitive or risky information;
- require human approval before important updates are promoted.

Primary outputs:

- governance findings;
- conflict report;
- approval requirement;
- audit note.

## Agent Communication Model

Preferred communication:

```text
Structured Record -> Event -> Agent Task -> Candidate Update -> Review Gate -> Approved Record
```

Avoid using agents as loosely connected chat prompts. Each agent should read and write clear artifacts with status, source references, timestamps, and owner information.
