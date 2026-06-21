# Artifact Taxonomy

## Purpose

This document defines the reusable artifact system for the Avenue Knowledge Hub / Industrial GTM Intelligence Platform.

Artifacts are the bridge between enriched knowledge and future work outputs. They allow the same validated knowledge and reviewed intelligence records to support tenders, proposals, sales strategy, presales qualification, product strategy, customer planning, market maps, Opportunity scorecards, and management decisions.

## Artifact Philosophy

Artifacts are reusable work products generated from enriched knowledge and intelligence.

Artifacts are not raw notes and are not final truth unless reviewed.

Artifacts must be:

- source-aware;
- reusable;
- purpose-specific;
- human-reviewable;
- safe for the intended audience;
- clear about evidence, assumptions, exclusions, and open questions.

Artifacts should help Avenue reuse the same knowledge for multiple outputs.

## Relationship Between Knowledge, Intelligence Records, Artifacts, Modes, And Skills

Knowledge pages store validated reusable knowledge.

Intelligence records store structured customer, plant, contact, tender, market signal, evidence, solution fit, and Opportunity data.

Artifacts package knowledge and intelligence for a purpose.

Modes later define who is acting, such as Sales, Presales, Technical, Product Strategy, Management, or Marketing.

Skills later define how artifacts are transformed, such as Source Pack to Offer Map, Offer Map to Solution Brief, Tender Source Pack to Compliance Matrix, or Opportunity Scorecard to Management Decision Brief.

Modes should act on artifacts, not replace them.

Skills should transform one artifact type into another, not hide the underlying evidence.

## Artifact Lifecycle

Allowed artifact lifecycle states:

- draft
- needs_review
- reviewed
- approved_internal
- approved_public
- archived
- superseded

Draft and needs_review artifacts are not official.

Approved internal artifacts may support Avenue internal work.

Approved public artifacts may support website, blog, public deck, or public marketing content.

## Artifact Metadata Standard

Every artifact template should include front matter like:

```yaml
---
artifact_type:
status: draft
visibility: internal
owner:
intended_users:
source_refs:
input_artifacts:
output_artifacts:
related_modes:
related_skills:
review_status: needs_review
last_reviewed:
reviewed_by:
commercial_sensitivity: none
public_safe: false
---
```

Commercial sensitivity values:

- none
- possible
- restricted
- pricing_sensitive

## Artifact Families

### Source Pack

Purpose: collect source-backed inputs for a later artifact without making final strategy decisions.

Typical inputs: wiki pages, source registry records, evidence items, validated extracts, source summaries.

Typical outputs: Offer Map, Strategy Brief, Solution Brief, Compliance Matrix, Case Study Pack.

Intended users: Presales, Technical, Product Strategy, Sales Enablement.

Required evidence: source references for every material claim.

Commercial sensitivity: possible.

Future related modes: Presales Mode, Technical Mode, Product Strategy Mode.

Future related skills: Source Synthesis, Evidence Extraction, Offer Mapping.

### Offer Map

Purpose: map Avenue solution themes, capabilities, products, partners, target segments, and proof points.

Typical inputs: Source Pack, solution pages, capability pages, case references, partner notes, tender patterns.

Typical outputs: Solution Brief, Sales Playbook, Product Strategy Document, Market Map.

Intended users: Management, Product Strategy, Sales, Presales.

Required evidence: source-backed solution and capability mappings.

Commercial sensitivity: possible.

Future related modes: Product Strategy Mode, Presales Mode, Management Mode.

Future related skills: Capability Mapping, Offer Positioning, Segment Mapping.

### Strategy Brief

Purpose: summarize a strategic direction, decision context, options, risks, and recommended next steps.

Typical inputs: Offer Map, Market Map, Opportunity Scorecard, management notes, verified intelligence records.

Typical outputs: Management Decision Brief, Sales Playbook, Product Strategy Document.

Intended users: Management, Sales leadership, Presales leadership, Product Strategy.

Required evidence: source-backed context and clearly marked assumptions.

Commercial sensitivity: possible or restricted.

Future related modes: Management Mode, Product Strategy Mode, Sales Mode.

Future related skills: Strategy Synthesis, Risk Review, Decision Framing.

### Solution Brief

Purpose: package a solution, capability, fit context, use cases, differentiators, exclusions, and qualification questions.

Typical inputs: Offer Map, solution pages, capability pages, Source Pack, case references.

Typical outputs: Sales Playbook, Customer Proposal Pack, Tender Response Pack, Public Content Brief.

Intended users: Sales, Presales, Technical, Marketing.

Required evidence: source-backed solution facts and limitations.

Commercial sensitivity: possible.

Future related modes: Sales Mode, Presales Mode, Technical Mode, Marketing Mode.

Future related skills: Solution Positioning, Proposal Drafting, Public Content Adaptation.

### Sales Playbook

Purpose: guide sales conversations around target customers, pains, triggers, discovery questions, objections, and next actions.

Typical inputs: Solution Brief, Account Plan, Market Map, Opportunity Scorecards, customer intelligence.

Typical outputs: Account Plan, Opportunity Scorecard, customer outreach brief.

Intended users: Sales, Sales leadership.

Required evidence: source-backed solution fit and market/customer context.

Commercial sensitivity: possible.

Future related modes: Sales Mode.

Future related skills: Sales Messaging, Objection Handling, Qualification.

### Presales Checklist

Purpose: define technical and business discovery questions, validation tasks, risks, required inputs, and readiness checks.

Typical inputs: Solution Brief, Tender Response Pack, Customer Proposal Pack, Opportunity Scorecard.

Typical outputs: proposal inputs, requirement gaps, solution-fit notes, risk review.

Intended users: Presales, Technical.

Required evidence: requirement references, solution capability references, assumptions.

Commercial sensitivity: possible.

Future related modes: Presales Mode, Technical Mode.

Future related skills: Requirement Review, Solution Fit Review, Risk Review.

### Customer Proposal Pack

Purpose: assemble customer-specific context, relevant solutions, evidence, assumptions, proposed approach, and open validation items.

Typical inputs: Account Plan, Solution Brief, Opportunity Scorecard, Case Study Pack, Presales Checklist.

Typical outputs: technical proposal draft, management review brief, customer meeting preparation.

Intended users: Sales, Presales, Technical, Management.

Required evidence: customer/plant context, solution sources, case references, tender/procurement evidence when applicable.

Commercial sensitivity: restricted. Pricing-sensitive content must stay outside general wiki artifacts unless explicitly controlled.

Future related modes: Sales Mode, Presales Mode, Technical Mode, Management Mode.

Future related skills: Proposal Assembly, Solution Mapping, Risk Framing.

### Tender Response Pack

Purpose: organize tender context, requirements, compliance needs, evidence, solution mapping, risks, clarifications, and response structure.

Typical inputs: tender records, tender documents, Compliance Matrix, Solution Brief, Presales Checklist.

Typical outputs: Compliance Matrix, technical proposal draft, clarification list, bid/no-bid input.

Intended users: Tender team, Presales, Technical, Sales, Management.

Required evidence: tender source references and requirement-level traceability.

Commercial sensitivity: restricted. Pricing-sensitive material must be separated.

Future related modes: Presales Mode, Technical Mode, Management Mode.

Future related skills: Tender Analysis, Requirement Extraction, Compliance Mapping.

### Compliance Matrix

Purpose: map tender requirements to Avenue solution responses, evidence, compliance status, gaps, and clarification questions.

Typical inputs: Tender Response Pack, tender documents, Solution Brief, Presales Checklist.

Typical outputs: tender response sections, clarification register, risk list.

Intended users: Presales, Technical, Tender team.

Required evidence: requirement IDs, source document references, response evidence.

Commercial sensitivity: restricted.

Future related modes: Presales Mode, Technical Mode.

Future related skills: Compliance Matrix Builder, Requirement Mapping.

### Case Study Pack

Purpose: organize reusable case references, proof points, context, outcomes, limitations, and safe claims.

Typical inputs: case-study pages, project notes, source documents, lessons learned.

Typical outputs: Solution Brief, Customer Proposal Pack, Sales Playbook, Public Content Brief.

Intended users: Sales, Presales, Marketing, Management.

Required evidence: source-backed claims and public-safety review.

Commercial sensitivity: possible or restricted.

Future related modes: Sales Mode, Presales Mode, Marketing Mode.

Future related skills: Case Synthesis, Proof Point Extraction, Public-Safe Rewrite.

### Opportunity Scorecard

Purpose: summarize an Opportunity with evidence, assumptions, fit, confidence, risks, scores, and next actions.

Typical inputs: customer records, plant records, tender records, market signals, Solution Fit, Evidence Items.

Typical outputs: Management Decision Brief, Account Plan, Customer Proposal Pack, Sales Playbook.

Intended users: Sales, Presales, Management.

Required evidence: evidence items linked to claims and assumptions separated.

Commercial sensitivity: possible or restricted.

Future related modes: Sales Mode, Presales Mode, Management Mode.

Future related skills: Opportunity Qualification, Scoring, Strategy Drafting.

### Account Plan

Purpose: organize customer/account context, plants, stakeholders, relationship history, relevant offers, open questions, and next actions.

Typical inputs: customer records, plant records, contacts, market signals, Opportunity Scorecards, Solution Briefs.

Typical outputs: Sales Playbook, Customer Proposal Pack, Management Decision Brief.

Intended users: Sales, Presales, Management.

Required evidence: customer/plant/contact source references and assumption separation.

Commercial sensitivity: restricted.

Future related modes: Sales Mode, Management Mode.

Future related skills: Account Planning, Stakeholder Mapping, Opportunity Discovery.

### Market Map

Purpose: map industries, segments, customers, plants, triggers, competitors, partners, and solution themes.

Typical inputs: market signals, customer records, plant records, Offer Map, competitor notes, partner notes.

Typical outputs: Strategy Brief, Account Plan, Opportunity Scorecard.

Intended users: Management, Product Strategy, Sales.

Required evidence: market signal and customer/plant references.

Commercial sensitivity: possible.

Future related modes: Management Mode, Product Strategy Mode, Sales Mode.

Future related skills: Market Mapping, Signal Clustering, Segment Prioritization.

### Management Decision Brief

Purpose: present decision context, options, evidence, tradeoffs, risks, recommendation, and required approvals.

Typical inputs: Strategy Brief, Opportunity Scorecard, Market Map, Account Plan, Tender Response Pack.

Typical outputs: decision record, action plan, approval note.

Intended users: Management and decision owners.

Required evidence: source-backed claims, assumptions, risks, and decision options.

Commercial sensitivity: restricted.

Future related modes: Management Mode.

Future related skills: Decision Framing, Executive Summary, Risk Synthesis.

### Public Content Brief

Purpose: adapt approved internal knowledge into public-safe messaging for website, blog, landing page, or marketing draft use.

Typical inputs: approved Solution Brief, approved Case Study Pack, approved public-safe knowledge pages.

Typical outputs: public page draft, blog outline, landing page copy brief.

Intended users: Marketing, Sales enablement, Management.

Required evidence: approved public-safe sources and claim review.

Commercial sensitivity: none or possible. Restricted content must be excluded.

Future related modes: Marketing Mode, Sales Mode.

Future related skills: Public-Safe Rewrite, Claim Review, Content Briefing.

## Input / Output Relationships

Typical transformation paths:

- Source Pack -> Offer Map
- Source Pack -> Solution Brief
- Offer Map -> Solution Brief
- Solution Brief -> Sales Playbook
- Solution Brief -> Presales Checklist
- Tender Response Pack -> Compliance Matrix
- Compliance Matrix -> Tender Response Pack
- Account Plan -> Opportunity Scorecard
- Opportunity Scorecard -> Management Decision Brief
- Case Study Pack -> Solution Brief
- Solution Brief -> Public Content Brief

## Review And Approval Rules

- Draft artifacts can be created from reviewed or unreviewed inputs, but must clearly show review status.
- Needs-review artifacts must not be used as final proposal, tender, strategy, or public content.
- Approved internal artifacts require human review.
- Approved public artifacts require public-safety review.
- Superseded artifacts must point to the replacement artifact when possible.

## Source And Evidence Rules

- Every material external claim should have source references.
- Evidence and assumptions must be separated.
- Derived artifacts should preserve input artifacts and source references.
- NotebookLM, AI, or imported outputs are not independent evidence unless checked against sources.
- If a claim cannot be sourced, mark it as an assumption or open question.

## Commercial / Pricing Handling

Restricted pricing, licensing, discounts, proposal prices, budgetary prices, BOM prices, fees, and commercial terms must not be placed in general wiki knowledge or general-purpose artifacts.

If commercial input is needed, mark the artifact `commercial_sensitivity: restricted` or `commercial_sensitivity: pricing_sensitive` and keep restricted details outside public or general internal knowledge.

## Public-Safe Output Rules

Public-safe artifacts must:

- use only approved public-safe source material;
- remove confidential customer, tender, pricing, and internal strategy details;
- avoid unsupported performance, savings, or comparison claims;
- clearly separate public claims from internal assumptions;
- pass human review before publication.

## Recommended Folder Structure

```text
artifacts/
  source-packs/
  offer-maps/
  strategy-briefs/
  solution-briefs/
  sales-playbooks/
  presales-checklists/
  customer-proposal-packs/
  tender-response-packs/
  compliance-matrices/
  case-study-packs/
  opportunity-scorecards/
  account-plans/
  market-maps/
  management-decision-briefs/
  public-content-briefs/
```

Templates live in:

```text
templates/artifacts/
```

## Initial Artifact Creation Roadmap

1. Create source packs from existing enriched solution pages.
2. Build the Avenue APM & IIoT Offer Map from source packs.
3. Create solution briefs for priority offer themes.
4. Create presales checklists and sales playbooks from solution briefs.
5. Create Opportunity scorecards from verified customer, plant, tender, market signal, and solution-fit records.
6. Create management decision briefs only after source packs, scorecards, and risks are reviewed.
