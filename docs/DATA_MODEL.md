# Data Model

## 1. Design Principles

The data model must be:

- Opportunity-centered;
- source-traceable;
- human-reviewable;
- organization-ready but not hardcoded to Avenue only;
- AI-provider-agnostic;
- suitable for manual workflow first and controlled automation later;
- portable across wiki, database, API, and future knowledge graph forms.

The model should support industrial GTM intelligence, not only wiki content.

## 2. Core Record Families

### Foundation Records

These support users, organizations, sources, extracted text, and knowledge pages.

- User
- Organization
- Source
- ExtractedText
- KnowledgePage
- KnowledgeExtractionJob
- PromptTemplate
- AIProvider
- AIUsageLog
- Note

### Customer Intelligence Records

These describe account, group, facility, relationship, and operating context.

- Customer
- ParentCompany
- Subsidiary
- Plant
- Industry
- ProductionProcess
- ProductionCapacity
- BusinessStatus
- Initiative
- KnownSystem
- ExistingVendor
- Contact
- Stakeholder
- RelationshipHistory

### Procurement And Tender Records

These describe formal buying activity.

- Tender
- ProcurementPackage
- TenderRequirement
- CommercialRequirement
- ComplianceRequirement
- TenderTimeline
- TenderAwardResult
- Competitor
- TenderDocument

### Market Signal Records

These capture external indicators of potential demand.

- MarketSignal
- NewsItem
- PublicAnnouncement
- InvestmentProject
- PlantExpansion
- RecruitmentSignal
- RegulationChange
- TechnologyAdoptionSignal
- MaintenanceReliabilitySignal
- DigitalTransformationSignal
- EnergyEsgSignal

### Avenue Internal Knowledge Records

These connect Avenue's offerings and experience to market needs.

- Solution
- Product
- Partner
- Capability
- CaseStudy
- PastProject
- Proposal
- TechnicalDocument
- CommercialTemplate
- LessonLearned
- ReferenceArchitecture
- ComplianceMatrix
- RiskLibraryItem

### Opportunity Intelligence Records

These connect all branches into action.

- Opportunity
- EvidenceItem
- OpportunityEvidenceLink
- SolutionFit
- Assumption
- Risk
- RecommendedStrategy
- NextAction
- HumanReview
- AuditLog

## 3. Opportunity

Opportunity is the central entity.

Minimum fields:

- opportunity_id;
- title;
- customer_id;
- plant_id;
- industry;
- opportunity_type;
- pain_points;
- triggers;
- relevant_solutions;
- estimated_value;
- estimated_timeline;
- confidence_score;
- strategic_fit_score;
- urgency_score;
- relationship_score;
- procurement_status;
- tender_id;
- key_contacts;
- competitors;
- evidence_items;
- assumptions;
- risks;
- recommended_strategy;
- next_actions;
- human_review_status;
- owner;
- status;
- created_at;
- updated_at.

No Opportunity should be considered actionable unless evidence, assumptions, confidence, owner, and human review status are visible.

All imported external intelligence must enter the Intelligence Inbox first:

```text
data/intelligence/inbox/
```

Verified human-reviewed records live in:

```text
data/intelligence/verified/
```

Promoted Knowledge Hub outputs live in:

```text
data/intelligence/promoted/
```

## 4. Key Entity Sketches

### Customer

Fields:

- customer_id;
- legal_name;
- display_name;
- aliases;
- parent_company_id;
- industry_ids;
- business_status;
- revenue_or_scale_indicator;
- known_systems;
- existing_vendors;
- initiatives;
- relationship_summary;
- source_refs;
- human_review_status;
- last_verified_at;
- created_at;
- updated_at.

### Plant

Fields:

- plant_id;
- customer_id;
- name;
- aliases;
- location;
- industry;
- segment;
- production_process;
- production_capacity;
- known_systems;
- existing_vendors;
- pain_points;
- expansion_or_investment_signals;
- source_refs;
- human_review_status;
- last_verified_at;
- created_at;
- updated_at.

### Tender

Fields:

- tender_id;
- title;
- buyer_or_owner;
- issuing_organization;
- customer_id;
- plant_id;
- tender_scope;
- technical_requirements;
- commercial_requirements;
- budget_estimate;
- timeline;
- submission_deadline;
- award_result;
- winning_vendor;
- competitors;
- compliance_requirements;
- related_documents;
- related_opportunity_id;
- source_refs;
- human_review_status;
- created_at;
- updated_at.

### MarketSignal

Fields:

- signal_id;
- signal_type;
- title;
- customer_id;
- plant_id;
- industry;
- trigger;
- evidence_summary;
- source_url;
- source_reliability;
- observed_at;
- captured_at;
- extracted_by;
- verification_status;
- related_opportunity_ids;
- created_at;
- updated_at.

### Solution

Fields:

- solution_id;
- name;
- product_ids;
- partner_ids;
- capability_ids;
- target_industries;
- target_pain_points;
- reference_architectures;
- case_study_ids;
- compliance_notes;
- risk_notes;
- source_refs;
- status;
- last_reviewed_at.

### Source

Fields:

- source_id;
- source_url;
- source_name;
- source_type;
- collected_at;
- last_verified_at;
- reliability_score;
- evidence_summary;
- owner;
- access_level;
- created_at;
- updated_at.

### EvidenceItem

Fields:

- evidence_id;
- evidence_type;
- source_id;
- source_url;
- source_name;
- source_type;
- collected_at;
- last_verified_at;
- reliability_score;
- evidence_summary;
- linked_entity_ids;
- status;
- human_review_status;
- created_at;
- updated_at.

### OpportunityEvidenceLink

Fields:

- link_id;
- opportunity_id;
- evidence_id;
- relevance;
- supports_field;
- status;
- human_review_status;
- created_at;
- updated_at.

### SolutionFit

Fields:

- solution_fit_id;
- opportunity_id;
- solution_id;
- solution_name;
- fit_score;
- fit_rationale;
- mapped_capabilities;
- gaps;
- required_partners;
- risks;
- evidence_item_ids;
- human_review_status;
- created_at;
- updated_at.

### HumanReview

Fields:

- review_id;
- record_type;
- record_id;
- reviewer;
- decision;
- comments;
- reviewed_at;
- next_required_action;
- created_at.

## 5. Source And Evidence

External claims should be represented as EvidenceItem records.

Minimum fields:

- evidence_id;
- evidence_type;
- source_id;
- summary;
- source_url_or_location;
- observed_at;
- extracted_at;
- source_reliability;
- linked_entity_ids;
- reviewer;
- review_status.

Raw Source records remain evidence pointers. They are not official knowledge by themselves.

## 6. Review And Status

Recommended record states:

- unverified;
- verified;
- rejected;
- needs_review;
- promoted.

Human review must be required before high-impact decisions and before unverified external data is promoted into verified records.

## 7. Relationship Examples

- Customer owns Plant.
- Customer has Contact and Stakeholder.
- Plant belongs_to Industry and uses KnownSystem.
- MarketSignal indicates Trigger for Customer or Plant.
- Tender belongs_to Buyer and may reference Plant.
- TenderRequirement maps_to Solution or Capability.
- Solution delivered_by Partner and supports Capability.
- CaseStudy supports Solution and Industry.
- Opportunity links Customer, Plant, Tender, MarketSignal, Solution, EvidenceItem, Assumption, Risk, and NextAction.

## 8. Markdown Frontmatter

Wiki pages should continue to support source-traceable metadata.

```yaml
title: "IDBoxRT Overview"
type: "solution"
status: "draft"
visibility: "private"
owner: "Hieu Do"
organization: "Avenue JSC"
tags:
  - idboxrt
  - iiot
  - data-platform
source_refs:
  - source_id: "SRC-0001"
    title: "IDBoxRT Technical Deck"
related_opportunities: []
landing_candidate: false
last_reviewed: null
```

Opportunity records may later be represented as markdown, YAML, database rows, or API resources. The required semantics should remain the same.

## 9. Knowledge Graph Readiness

Do not implement a graph database in the MVP unless required.

Start with clean IDs, structured fields, explicit relationship arrays, source references, and audit trails so records can be migrated to a graph later.
