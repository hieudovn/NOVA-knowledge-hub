# Opportunity Model

## Definition

An Opportunity is an actionable industrial business possibility supported by evidence, assumptions, fit analysis, and recommended next actions.

It is the central entity where customer, plant, market, procurement, tender, and Avenue internal knowledge converge.

## Minimum Fields

- opportunity_id
- title
- customer_id
- plant_id
- industry
- opportunity_type
- pain_points
- triggers
- relevant_solutions
- estimated_value
- estimated_timeline
- confidence_score
- strategic_fit_score
- urgency_score
- relationship_score
- procurement_status
- tender_id
- key_contacts
- competitors
- evidence_items
- assumptions
- risks
- recommended_strategy
- next_actions
- human_review_status
- owner
- status

## Recommended Supporting Fields

- source_signal_ids
- related_customer_aliases
- related_procurement_package_ids
- related_case_study_ids
- related_partner_ids
- estimated_decision_window
- last_reviewed_at
- reviewed_by
- created_at
- updated_at
- audit_log_id

## Opportunity Types

Suggested initial values:

- market_signal
- tender_driven
- plant_expansion
- maintenance_reliability
- digital_transformation
- energy_esg
- system_modernization
- relationship_led
- renewal_or_upgrade
- partner_led

## Status Values

Platform record status values:

- unverified
- verified
- rejected
- needs_review
- promoted

Workflow meaning:

- `unverified`: imported or collected intelligence in the Intelligence Inbox.
- `needs_review`: candidate record has enough structure for human review, but is not approved.
- `verified`: human-reviewed and source-backed.
- `rejected`: reviewed and not suitable for use.
- `promoted`: approved for Knowledge Hub or operational use.

## Review Status Values

Suggested initial values:

- unreviewed
- needs_review
- reviewed_by_sales
- reviewed_by_presales
- reviewed_by_management
- approved_for_action
- rejected
- stale
- promoted

## Scoring Dimensions

### Confidence Score

How strongly the evidence supports the opportunity.

### Strategic Fit Score

How well the opportunity fits Avenue's solution portfolio, partner capability, industry focus, and management priority.

### Urgency Score

How time-sensitive the opportunity appears based on tender deadline, investment timeline, downtime risk, regulation, expansion, or stakeholder activity.

### Relationship Score

How strong Avenue's access is through contacts, past projects, partners, incumbency, or executive relationship.

### Value Signal

Estimated business value or budget potential. This should be treated carefully and sourced, especially when based on public tender or investment information.

## Evidence Item

Minimum fields:

- evidence_id
- evidence_type
- source_id
- summary
- observed_at
- extracted_at
- reliability_score
- linked_entity_ids

Source tracking fields:

- source_url
- source_name
- source_type
- collected_at
- last_verified_at
- reliability_score
- evidence_summary

Evidence Item is the fact-bearing object. It must be kept separate from assumptions.

## Opportunity Evidence Link

Opportunity Evidence Link connects an Opportunity to one or more evidence items.

Minimum fields:

- link_id
- opportunity_id
- evidence_id
- relevance
- supports_field
- created_at
- reviewed_by
- review_status

Use this when the same Evidence Item supports multiple opportunities or multiple fields within one Opportunity.

## Solution Fit

Solution Fit connects an Opportunity to Avenue offerings.

Minimum fields:

- solution_fit_id
- opportunity_id
- solution_id or solution_name
- fit_score
- fit_rationale
- mapped_capabilities
- gaps
- required_partners
- risks
- evidence_item_ids
- human_review_status

## Human Review Status

Human Review Status records the human decision that allows data to move beyond the inbox.

Minimum fields:

- review_id
- record_type
- record_id
- reviewer
- decision
- comments
- reviewed_at
- next_required_action

## Assumption

Minimum fields:

- assumption_id
- statement
- rationale
- confidence
- validation_needed
- owner

## Next Action

Minimum fields:

- action_id
- role
- action
- owner
- due_date
- priority
- status

## Model Rule

No Opportunity should be considered actionable unless evidence, assumptions, confidence, owner, and human review status are visible.

No imported or externally collected record may become a verified Opportunity directly. It must first enter the Intelligence Inbox as `unverified` or `needs_review`.
