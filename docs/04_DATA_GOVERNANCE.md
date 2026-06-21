# Data Governance

## Purpose

Data governance prevents raw crawled data, unsupported AI claims, duplicate entities, and stale market information from polluting the Knowledge Hub and Opportunity pipeline.

## Non-Negotiable Principles

1. Raw crawled data must not be treated as truth.
2. Every external data point must have a source.
3. Every inferred opportunity must separate evidence from assumption.
4. Confidence score must be explicit.
5. Human review is required before high-impact decisions.
6. Verified human-entered data must not be overwritten with unverified crawled data.
7. Source timestamp and last verified date must be maintained.
8. Updates must keep an audit trail.
9. Customers, plants, tenders, and opportunities must be deduplicated.
10. Structured records are preferred over long unstructured summaries.
11. Knowledge Hub is shared memory, not a dumping ground.

## Record States

Recommended states:

- draft;
- unverified;
- needs_review;
- verified;
- approved;
- rejected;
- archived;
- stale.

## Evidence And Assumptions

Evidence is sourced and inspectable.

Assumption is a reasoned interpretation that may be useful but is not directly proven.

Opportunity records must keep these separate:

- evidence_items;
- assumptions;
- confidence_score;
- human_review_status;

## Source Requirements

External source fields should include:

- source_id;
- source_type;
- source_url or location_uri;
- publisher or owner;
- captured_at;
- source_published_at if available;
- source_reliability;
- extraction_method;
- last_verified_at;

## Promotion Rules

Unverified records may support research but must not drive high-impact action alone.

Promotion to verified or approved requires:

- source check;
- entity match or deduplication check;
- conflict check against existing verified data;
- sensitivity review;
- human reviewer;
- audit note.

## Overwrite Rules

Do not overwrite verified data with unverified data.

When new information conflicts with verified data:

- create a candidate update;
- preserve the current verified value;
- attach source and timestamp;
- flag the conflict for human review.

## Pricing And Commercial Sensitivity

Pricing, licensing, discounts, proposal prices, BOM prices, fees, and commercial terms must not become general wiki knowledge. They may only be handled in restricted Product Owner/Admin workflows for estimation and proposal planning.

Budget signals from public procurement or investment sources may be recorded as opportunity evidence when the source is explicit and access control is appropriate.
