# Data Enrichment Strategy

## Purpose

This document defines the core productive loop for the Avenue Knowledge Hub / Industrial GTM Intelligence Platform.

The goal is not only to build one product MVP. The goal is to continuously enrich high-quality, filtered, structured, source-backed knowledge and intelligence so Avenue can reuse it for many future purposes.

## Why Data Enrichment Is The Core Productive Loop

Data enrichment is valuable before automation, dashboards, crawlers, or agent orchestration exist.

Every verified solution page, tender requirement, customer profile, plant context record, market signal, case reference, partner capability note, or Opportunity evidence item becomes a reusable asset.

The enrichment loop is:

```text
Collect -> Filter -> Verify -> Normalize -> Structure -> Link -> Enrich -> Reuse
```

Verified data is the asset. AI, crawlers, and agents are accelerators later.

## Main Enrichment Domains

### Solution / Product Knowledge

Reusable knowledge about Avenue offerings, vendor products, differentiators, limitations, deployment patterns, and fit by industry or pain point.

### Capability / Architecture Pattern Knowledge

Reusable capabilities and technical patterns such as APM, IIoT, historian, condition monitoring, data integration, edge-to-center architecture, and system integration.

### Customer / Account Intelligence

Structured knowledge about customers, groups, subsidiaries, industries, relationship history, known systems, initiatives, and business context.

### Plant / Facility Intelligence

Plant-level context including location, production process, production capacity, known systems, reliability issues, expansion signals, and operational triggers.

### Contact / Stakeholder Intelligence

Stakeholder roles, contact context, relationship status, buying influence, technical influence, executive sponsor potential, and validation needs.

### Tender / Procurement Intelligence

Tender packages, scopes, requirements, deadlines, compliance needs, procurement status, award results, and related evidence.

### Market Signal Intelligence

Public announcements, expansion news, regulation changes, energy/ESG signals, recruitment signals, technology adoption signals, and reliability/maintenance signals.

### Opportunity Intelligence

Opportunity records that connect customer, plant, tender, market signal, solution fit, evidence, assumptions, risk, confidence, and recommended next actions.

### Case Study / Reference Knowledge

Past project context, reusable proof points, lessons learned, industry references, architecture references, and validated benefit narratives.

### Competitor / Incumbent Intelligence

Known incumbents, competitor patterns, positioning risks, likely objections, and differentiation evidence.

### Partner Capability Intelligence

Partner products, delivery capability, geographic coverage, technical strengths, constraints, and fit to Avenue offer domains.

## Reusable Outputs

Enriched knowledge should be reusable for:

- sales/presales solution briefs;
- tender compliance matrices;
- technical proposal drafts;
- commercial/proposal preparation inputs, excluding restricted pricing in general wiki;
- account plans;
- customer-specific proposal packs;
- product strategy documents;
- market maps;
- opportunity scorecards;
- management decision briefs;
- website/blog/marketing content from approved public-ready knowledge.

## Source And Evidence Rules

- Every external claim needs a source.
- Raw data is evidence, not truth.
- Imported records enter the Intelligence Inbox before review.
- Evidence and assumptions must be separate.
- Source timestamp and last verified date must be tracked.
- Verified human-entered data must not be overwritten by unverified external data.
- Restricted pricing, licensing, discounts, proposal prices, BOM prices, fees, and commercial terms must not become general wiki knowledge.
- Public-ready content must come from approved public-safe knowledge.

## Data Quality Levels

### Level 0 - Raw Input

Unfiltered source material, note, import row, or extracted text.

### Level 1 - Inbox Candidate

Structured enough to store in the Intelligence Inbox. Not trusted yet.

### Level 2 - Filtered Candidate

Relevant to Avenue industrial GTM work and assigned to one or more enrichment domains.

### Level 3 - Verified Record

Source-backed, normalized, deduplicated, and reviewed by a human.

### Level 4 - Linked And Enriched Record

Connected to related records such as solution, capability, customer, plant, tender, signal, case study, partner, competitor, or Opportunity.

### Level 5 - Reusable Output

Used to generate a tender artifact, proposal input, sales brief, product strategy note, account plan, market map, Opportunity scorecard, or management decision brief.

## Human Review Gates

Human review is required before:

- promoting inbox records to verified records;
- using enriched intelligence for high-impact customer or management action;
- publishing public-ready content;
- resolving conflicting sources;
- merging duplicate customer, plant, tender, or Opportunity records;
- treating assumptions as validated facts.

## What Counts As Progress

Progress is measured by quality and reuse, not only by UI features.

Useful metrics:

- number of validated solution pages;
- number of enriched customer records;
- number of plant records with industry/process/system context;
- number of tender records with requirements extracted;
- number of market signals linked to customers/plants;
- number of opportunities with evidence, assumptions, and confidence;
- number of reusable offer pages;
- number of proposal/tender/case outputs generated from enriched knowledge;
- percentage of records with source references;
- percentage of records reviewed by human.

## What Is Not Required Yet

Not required in the current lane:

- web crawler;
- CRM workflow;
- graph database;
- agent orchestration;
- UI dashboard;
- backend/API service;
- authentication;
- SaaS or multi-tenant features;
- chatbot or public portal;
- automatic promotion from AI, crawler, or import output.

## Recommended Next Enrichment Tracks

### Track 1 - Avenue APM & IIoT Product Strategy / Offer Map

Build a reusable offer map from enriched solution pages, capability pages, architecture patterns, partner capability, case references, and tender knowledge.

Suggested outputs:

- APM offer map;
- IIoT offer map;
- solution-to-capability matrix;
- partner capability map;
- reusable sales/presales solution briefs.

### Track 2 - Customer And Prospect Enrichment Around Offer Domains

Enrich customer, plant, contact, and market signal records for accounts likely to need APM, IIoT, historian, reliability, data integration, or operations visibility solutions.

### Track 3 - Tender And Procurement Enrichment Around Offer Domains

Extract tender requirements, compliance needs, procurement package context, competitor/incumbent signals, and reusable requirement mappings around APM and IIoT.

### Track 4 - Opportunity Scorecards From Verified Data

Generate Opportunity scorecards only from verified customer, plant, tender, market signal, and solution fit records. Keep evidence, assumptions, confidence, risks, and next actions visible.
