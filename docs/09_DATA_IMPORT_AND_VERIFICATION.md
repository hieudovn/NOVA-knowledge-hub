# Data Import And Verification

## Purpose

This document defines the safe path for adding customer, plant, contact, tender, market signal, and opportunity data.

The current implementation is file-based and dependency-free. It uses JSON templates, an Intelligence Inbox, validation scripts, and tests.

## Intelligence Inbox

All externally collected or manually imported intelligence enters:

```text
data/intelligence/inbox/
```

Inbox records are not trusted operating knowledge. They must be verified before they can influence promoted Knowledge Hub content or high-impact sales actions.

Verified records live in:

```text
data/intelligence/verified/
```

Promoted records live in:

```text
data/intelligence/promoted/
```

## Supported Record Families

Current storage includes:

- Customer
- Plant / Facility
- Contact
- Tender / Procurement Package
- Market Signal
- Source
- Evidence Item
- Opportunity
- Opportunity Evidence Link
- Solution Fit
- Human Review

## Status Values

Allowed status values:

- unverified
- verified
- rejected
- needs_review
- promoted

Manual import scripts force imported records into the inbox as `unverified` with `human_review_status: "needs_review"`.

## Manual Import Templates

Templates live in:

```text
templates/import/
```

Current templates:

- `customer_import_template.json`
- `plant_import_template.json`
- `contact_import_template.json`
- `tender_import_template.json`
- `market_signal_import_template.json`
- `opportunity_import_template.json`

## Import Commands

```bash
npm run import_customer_data -- --file templates/import/customer_import_template.json
npm run import_plant_data -- --file templates/import/plant_import_template.json
npm run import_contact_data -- --file templates/import/contact_import_template.json
npm run import_tender_data -- --file templates/import/tender_import_template.json
npm run import_market_signals -- --file templates/import/market_signal_import_template.json
npm run import_opportunity_data -- --file templates/import/opportunity_import_template.json
```

## Required Source Tracking Fields

Imported external records should include:

- source_url
- source_name
- source_type
- collected_at
- last_verified_at
- reliability_score
- evidence_summary

`source_url` may be blank only when the source is a restricted internal document or manual note. `source_name`, `source_type`, `collected_at`, `reliability_score`, and `evidence_summary` are required for import validation.

## Verification Rules

- Never promote data without source.
- Never overwrite human-verified data with unverified external data.
- Separate evidence from assumption.
- Flag conflicting sources.
- Flag outdated data.
- Require human review before promotion.
- Keep duplicate candidates in the inbox until a reviewer resolves them.

## Validation Command

```bash
npm run validate_intelligence_records
```

Validation checks:

- missing source fields;
- invalid statuses;
- duplicate customer records;
- duplicate tender records;
- opportunity without evidence;
- invalid evidence item source fields;
- outdated data when a date threshold is supplied;
- invalid promotion state.

## Opportunity Commands

Generate candidates:

```bash
npm run generate_opportunity_candidates
```

Score inbox opportunities:

```bash
npm run score_opportunities
```

Opportunity candidates are created only from verified records and are written back to the inbox for human review.

## Future Promotion Flow

Promotion should require:

1. source-backed evidence;
2. duplicate check;
3. conflict check;
4. evidence and assumption separation;
5. score review;
6. human review decision;
7. audit trail.

Do not add crawler-to-verified writes in future work. Future crawlers and agents must write candidate records to the inbox.
