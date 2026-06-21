# Canonical Business Model

## Purpose

The Canonical Business Model provides a stable business ontology for the Industrial GTM Intelligence Platform.

It sits between raw business memory and a future knowledge graph. Its purpose is to prevent uncontrolled graph growth and provide a common language for AI reasoning, manual records, and future APIs.

## Core Operating Frame

Knowledge Hub is the validated reusable foundation.

Continuous enrichment connects domains into reusable knowledge and intelligence.

Opportunity is a high-value convergence object, but not the only output. Other outputs include tender artifacts, proposal inputs, solution briefs, product strategy notes, market maps, account plans, and management decision briefs.

## Core Domains

### Market Domain

- Industry
- Segment
- Geography
- Regulation
- MarketSignal
- InvestmentProject
- PlantExpansion

### Customer Domain

- Organization
- Customer
- ParentCompany
- Subsidiary
- Plant
- Contact
- Stakeholder
- RelationshipHistory

### Procurement Domain

- Tender
- ProcurementPackage
- TenderRequirement
- CommercialRequirement
- ComplianceRequirement
- TenderAwardResult

### Opportunity Domain

- Opportunity
- Qualification
- EvidenceItem
- Assumption
- Risk
- RecommendedStrategy
- NextAction
- Competitor

### Delivery Domain

- Project
- Milestone
- Deliverable
- Issue
- LessonLearned
- CaseStudy

### Solution Domain

- Product
- Solution
- Partner
- Capability
- Pattern
- Integration
- ReferenceArchitecture

### Knowledge Domain

- Source
- Note
- KnowledgePage
- Decision
- BusinessMemory
- ComplianceMatrix
- RiskLibraryItem

### AI Operating Domain

- Agent
- Mode
- Skill
- Workflow
- Artifact
- ReviewGate
- AuditLog

## Relationship Examples

- Customer -> Plant
- Plant -> Industry
- Plant -> KnownSystem
- MarketSignal -> Customer
- MarketSignal -> Plant
- Tender -> ProcurementPackage
- TenderRequirement -> Capability
- Solution -> Capability
- Partner -> Solution
- CaseStudy -> Solution
- Opportunity -> Customer
- Opportunity -> Plant
- Opportunity -> Tender
- Opportunity -> MarketSignal
- Opportunity -> Solution
- Opportunity -> EvidenceItem
- Opportunity -> Assumption
- Opportunity -> Risk
- Opportunity -> RecommendedStrategy
- Opportunity -> NextAction

## Design Rules

1. Model Opportunity as the convergence point.
2. Keep evidence and assumption separate.
3. Prefer explicit relationships over long summary text.
4. Do not introduce graph complexity before the structured record model is stable.
5. Preserve IDs and source references so records can migrate to a graph later.
