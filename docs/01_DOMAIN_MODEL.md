# Domain Model

## Purpose

This document defines the core intelligence branches that support Opportunity-centered industrial GTM work.

## Core Domains

### Customer Intelligence

Customer Intelligence describes who Avenue may sell to, how the organization is structured, where facilities are located, what systems are installed, and what relationship history exists.

Primary entities:

- Customer
- Parent company or group
- Subsidiary
- Plant or facility
- Industry
- Production process
- Production capacity
- Revenue or scale indicator
- Business status
- Expansion or investment news
- Digital transformation initiative
- Sustainability or ESG initiative
- Known system
- Existing vendor
- Contact
- Stakeholder
- Relationship history

### Procurement And Tender Intelligence

Procurement Intelligence describes formal buying activity, tender packages, technical and commercial requirements, deadlines, award outcomes, and related competitors.

Primary entities:

- Tender
- Procurement package
- Buyer or owner
- Issuing organization
- Tender scope
- Technical requirement
- Commercial requirement
- Budget estimate
- Timeline
- Submission deadline
- Award result
- Winning vendor
- Competitor
- Compliance requirement
- Related document
- Related opportunity

### Market Signal Intelligence

Market Signal Intelligence captures external events that may indicate future demand.

Primary entities:

- News item
- Public announcement
- Investment project
- Plant expansion
- Recruitment signal
- Regulation change
- Technology adoption signal
- Maintenance or reliability signal
- Digital transformation signal
- Energy or ESG signal
- Source URL
- Source reliability
- Evidence summary

### Avenue Internal Knowledge

Internal Knowledge captures Avenue's reusable capabilities and evidence.

Primary entities:

- Solution
- Product
- Partner
- Capability
- Case study
- Past project
- Proposal
- Technical document
- Commercial template
- Lessons learned
- Reference architecture
- Compliance matrix
- Risk library

### Opportunity Intelligence

Opportunity Intelligence connects all branches into an actionable business object.

An Opportunity may originate from a signal, tender, customer profile gap, plant need, internal relationship note, or Avenue solution match. It is not official until evidence, assumptions, confidence, and human review status are explicit.

Primary entities:

- Opportunity
- Evidence item
- Assumption
- Risk
- Recommended strategy
- Next action
- Human review decision

## Relationship Rules

- Customer can own many plants.
- Plant belongs to one customer or group context, but aliases and ownership changes must be tracked.
- Tender can link to customer, issuing organization, plant, procurement package, solution, and opportunity.
- Market signal can link to customer, plant, industry, pain point, trigger, and opportunity candidate.
- Solution can link to capability, partner, case study, tender requirement, and opportunity.
- Opportunity links branches together and should be the primary object for prioritization and action.

## Minimum Viable Records

Phase 1 should define lightweight records for:

- Customer
- Plant
- Tender
- Market Signal
- Solution
- Opportunity

Each record must have an owner, status, source references where applicable, timestamps, and review state.
