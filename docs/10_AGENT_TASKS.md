# Agent Tasks

## Purpose

This document defines placeholder agent interfaces for future automation.

No real web crawling is implemented yet. Agents are currently structured-record writers and validators only.

Implementation placeholder:

```text
scripts/intelligence/agents.js
```

## Agent Contract

Agents must:

- read and write structured records;
- write external data to the Intelligence Inbox;
- attach source tracking fields;
- keep evidence separate from assumptions;
- avoid writing directly to verified or promoted records;
- require VerificationAgent and human review before promotion.

Agents must not:

- perform uncontrolled crawling;
- overwrite verified human-entered records;
- create verified Opportunities automatically;
- rely on long natural-language summaries as the working state.

## CustomerResearchAgent

Responsibilities:

- submit customer candidates;
- submit plant/facility candidates;
- submit contact candidates;
- normalize aliases in future work;
- identify profile gaps in future work.

Current structured outputs:

- Customer inbox record;
- Plant inbox record;
- Contact inbox record.

## TenderResearchAgent

Responsibilities:

- submit tender and procurement package candidates;
- attach scope, requirements, deadline, buyer, and source;
- link candidate tender records to customer or plant IDs when known.

Current structured outputs:

- Tender inbox record.

## MarketSignalAgent

Responsibilities:

- submit public announcement, investment, expansion, regulation, ESG, maintenance, digital transformation, or recruitment signals;
- attach source URL, source name, reliability, and evidence summary.

Current structured outputs:

- Market Signal inbox record.

## VerificationAgent

Responsibilities:

- validate records;
- flag missing source;
- flag duplicates;
- flag conflicts;
- flag outdated data;
- block promotion without human review.

Current structured outputs:

- validation issue list.

## OpportunityGenerationAgent

Responsibilities:

- generate Opportunity candidates from verified customer, tender, and market signal records;
- write candidates to the inbox;
- score candidate opportunities;
- keep status as `needs_review` until human review.

Current structured outputs:

- Opportunity inbox records;
- heuristic score fields.

## Future Crawler Integration Rule

When crawlers are added later, they must call agent interfaces that write to the Intelligence Inbox. Crawler output must never directly write to verified customer, tender, market signal, or opportunity records.
