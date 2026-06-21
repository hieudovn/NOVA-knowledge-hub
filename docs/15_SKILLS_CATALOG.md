# Skills Catalog

## Purpose

This catalog defines skills as documentation-level, repeatable task patterns for the Avenue Knowledge Hub / Industrial GTM Intelligence Platform.

Skills are not executable tools in this repository. They are reusable patterns that future roles can use to transform artifacts or records into other artifacts or records.

## Why Skills Are Needed After Artifacts And Roles

Artifacts define reusable work products.

Operating roles define judgment and audience lens.

Skills define repeatable transformations.

Without skills, artifact creation is ad hoc. Without roles, skills lack decision style and quality criteria. Without artifacts, skills have no stable input and output shape.

## Skill Model

Each skill describes:

- skill_id
- skill_name
- purpose
- primary_role
- supporting_roles
- input_artifacts
- input_records
- output_artifacts
- output_records
- required_sources
- steps
- quality_rubric_focus
- review_required
- forbidden_actions
- example_prompt_stub

## Relationship Between Roles, Skills, Artifacts, Records, And Quality Rubric

Roles execute skills from a role perspective.

Skills transform input artifacts and records into output artifacts and records.

Artifacts preserve the reusable output format.

Records preserve structured data such as customer, plant, tender, market signal, evidence, solution fit, and Opportunity records.

The quality rubric defines whether the output is fit for purpose.

## Skill Lifecycle

Allowed skill lifecycle states:

- proposed
- documented
- used_manually
- reviewed
- approved_for_repeat_use
- eligible_for_automation_later
- deprecated

No skill should become eligible for automation until it has been used manually, reviewed, and proven safe.

## Skill Metadata Standard

```yaml
skill_id:
skill_name:
category:
status: documented
primary_role:
supporting_roles: []
input_artifacts: []
input_records: []
output_artifacts: []
output_records: []
required_sources: []
quality_rubric_focus: []
review_required: true
forbidden_actions: []
```

## Skill Categories

- Enrichment Skills
- Strategy Skills
- Sales Skills
- Presales Skills
- Tender Skills
- Technical / Architecture Skills
- Marketing / Communication Skills
- Customer Intelligence Skills
- Governance / Review Skills
- Management Decision Skills

## Core Skills Catalog

### Enrichment Skills

#### build_source_pack

Purpose: Gather source-backed material into a reusable Source Pack without making final strategy decisions.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Product Owner Role, Presales Consultant Role, Technical Reviewer Role.

Inputs: solution pages, source registry records, evidence items, enrichment docs.

Outputs: Source Pack artifact.

Steps: select source scope; extract candidate facts; separate facts, assumptions, and open questions; record evidence basis; mark exclusions; request review.

Quality Rubric Focus: evidence discipline, structure and readability, public/commercial safety, role fidelity.

Review Required: yes.

Forbidden Actions: final strategy decisions, unsupported claims, pricing/commercial content, public claims.

Example Prompt Stub: Use `build_source_pack` to create a Source Pack from these source pages. Preserve evidence and assumptions separately. Do not decide final strategy.

#### enrich_solution_page_input

Purpose: Prepare source-backed input for improving a solution page.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role, Product Owner Role.

Inputs: source documents, existing solution page, source pack.

Outputs: candidate solution-page input, review notes.

Steps: identify current page gaps; extract source-backed facts; flag unsupported claims; identify restricted content; produce update candidates.

Quality Rubric Focus: evidence discipline, technical credibility, structure and readability, public/commercial safety.

Review Required: yes.

Forbidden Actions: directly changing approved claims without review, adding vendor brochure claims, adding pricing.

Example Prompt Stub: Use `enrich_solution_page_input` to prepare reviewed update candidates for this solution page.

#### build_case_study_pack

Purpose: Package reusable case references, proof points, limitations, and safe claims.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Marketing Writer Role, Presales Consultant Role, Sales Strategist Role.

Inputs: case-study pages, project notes, source documents, lessons learned.

Outputs: Case Study Pack artifact.

Steps: list cases; extract source-backed proof points; mark claim boundaries; exclude restricted details; identify public-safe candidates.

Quality Rubric Focus: evidence discipline, public/commercial safety, business clarity, structure and readability.

Review Required: yes.

Forbidden Actions: unsourced quantified benefits, confidential customer claims, pricing/commercial terms.

Example Prompt Stub: Use `build_case_study_pack` to assemble safe reusable proof points from these case sources.

#### build_market_map

Purpose: Map market segments, signals, customers, competitors, partners, and offer themes.

Primary Role: Product Owner Role.

Supporting Roles: Customer Intelligence Analyst Role, Sales Strategist Role, Executive Reviewer Role.

Inputs: market signals, customer records, plant records, offer map, competitor notes, partner notes.

Outputs: Market Map artifact.

Steps: define segment; cluster signals; link customers/plants; identify competitor and partner context; mark gaps; recommend enrichment priorities.

Quality Rubric Focus: strategic usefulness, business clarity, evidence discipline, actionability.

Review Required: yes.

Forbidden Actions: unsupported market sizing, unverified customer claims, hidden assumptions.

Example Prompt Stub: Use `build_market_map` to map this segment from verified records and reviewed sources.

#### enrich_customer_profile

Purpose: Build or improve structured customer context.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Sales Strategist Role, Data Governance Reviewer Role.

Inputs: customer records, source pages, market signals, notes.

Outputs: enriched customer record, Account Plan input, data gap list.

Steps: normalize customer identity; collect source-backed facts; map industry and known systems; identify signals; separate assumptions; list gaps.

Quality Rubric Focus: evidence discipline, actionability, structure and readability, role fidelity.

Review Required: yes.

Forbidden Actions: overwriting verified data with unverified input, speculation without labeling.

Example Prompt Stub: Use `enrich_customer_profile` to prepare a verified customer-context update candidate.

#### enrich_plant_profile

Purpose: Build or improve plant/facility context.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role.

Inputs: plant records, customer records, market signals, public/internal sources.

Outputs: enriched plant record, plant profile artifact input, data gap list.

Steps: verify plant identity; map industry/process/system context; attach signals; identify technical gaps; mark assumptions.

Quality Rubric Focus: technical credibility, evidence discipline, actionability, structure and readability.

Review Required: yes.

Forbidden Actions: stale public data as fact, unverified ownership claims.

Example Prompt Stub: Use `enrich_plant_profile` to structure plant context from these records.

#### map_stakeholders

Purpose: Structure contact and stakeholder context for account or opportunity work.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Sales Strategist Role.

Inputs: contacts, relationship notes, customer records, tender records.

Outputs: stakeholder map, Account Plan input, open validation questions.

Steps: list stakeholders; classify role and influence; mark relationship status; identify gaps; recommend validation path.

Quality Rubric Focus: actionability, evidence discipline, audience fit, role fidelity.

Review Required: yes.

Forbidden Actions: unsupported personal claims, sensitive data beyond access rules.

Example Prompt Stub: Use `map_stakeholders` to create a stakeholder map from these records.

### Strategy Skills

#### build_offer_map

Purpose: Transform Source Packs and solution knowledge into a structured Offer Map.

Primary Role: Product Owner Role.

Supporting Roles: Presales Consultant Role, Sales Strategist Role, Data Governance Reviewer Role.

Inputs: Source Pack, solution pages, capability pages, partner notes.

Outputs: Offer Map artifact.

Steps: define offer themes; map products to capabilities; identify target segments; mark gaps; list proof points; separate assumptions.

Quality Rubric Focus: strategic usefulness, business clarity, evidence discipline, role fidelity.

Review Required: yes.

Forbidden Actions: final packaging/pricing decisions, unsupported market claims.

Example Prompt Stub: Use `build_offer_map` to create a draft Offer Map from this Source Pack.

#### define_product_strategy

Purpose: Convert offer and market knowledge into product/offer strategy.

Primary Role: Product Owner Role.

Supporting Roles: Executive Reviewer Role, Sales Strategist Role, Presales Consultant Role.

Inputs: Offer Map, Market Map, Opportunity Scorecards, solution pages.

Outputs: Strategy Brief artifact, roadmap input.

Steps: frame strategic context; identify options; evaluate fit/tradeoffs; recommend direction; list risks and decisions needed.

Quality Rubric Focus: strategic usefulness, business clarity, conciseness, role fidelity.

Review Required: yes.

Forbidden Actions: unsupported market claims, vendor brochure rewriting, hidden tradeoffs.

Example Prompt Stub: Use `define_product_strategy` to draft a strategy brief from this Offer Map.

#### prioritize_market_segments

Purpose: Rank segments by fit, urgency, confidence, relationship, and strategic relevance.

Primary Role: Product Owner Role.

Supporting Roles: Executive Reviewer Role, Sales Strategist Role, Customer Intelligence Analyst Role.

Inputs: Market Map, customer records, opportunity scorecards, market signals.

Outputs: prioritization note, Strategy Brief input.

Steps: define criteria; score segments; explain tradeoffs; flag data gaps; recommend next enrichment track.

Quality Rubric Focus: strategic usefulness, evidence discipline, actionability, conciseness.

Review Required: yes.

Forbidden Actions: unsourced market ranking, pretending weak data is certain.

Example Prompt Stub: Use `prioritize_market_segments` to rank segments from this Market Map.

#### build_solution_to_capability_matrix

Purpose: Map solutions and products to validated capabilities and gaps.

Primary Role: Product Owner Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role, Data Governance Reviewer Role.

Inputs: solution pages, capability pages, Source Pack.

Outputs: solution-to-capability matrix, Offer Map input.

Steps: list solutions; list capabilities; map support level; note evidence; identify gaps and validation needs.

Quality Rubric Focus: technical credibility, evidence discipline, structure and readability.

Review Required: yes.

Forbidden Actions: unsupported feature claims, overstating fit.

Example Prompt Stub: Use `build_solution_to_capability_matrix` to map these solutions to capabilities.

#### define_product_roadmap

Purpose: Turn strategy and portfolio gaps into roadmap direction.

Primary Role: Product Owner Role.

Supporting Roles: Executive Reviewer Role, Presales Consultant Role.

Inputs: Strategy Brief, Offer Map, portfolio gap analysis, market priorities.

Outputs: product roadmap artifact, prioritization note.

Steps: identify roadmap themes; rank priorities; define dependencies; list risks; identify decision gates.

Quality Rubric Focus: strategic usefulness, actionability, business clarity, role fidelity.

Review Required: yes.

Forbidden Actions: committing delivery dates or pricing without approval.

Example Prompt Stub: Use `define_product_roadmap` to draft roadmap direction from this strategy brief.

### Sales Skills

#### build_sales_playbook

Purpose: Convert offer and market knowledge into sales guidance.

Primary Role: Sales Strategist Role.

Supporting Roles: Product Owner Role, Marketing Writer Role, Presales Consultant Role.

Inputs: Offer Map, Strategy Brief, Case Study Pack, Market Map.

Outputs: Sales Playbook artifact.

Steps: define target accounts; list triggers; craft message angles; add discovery questions; identify next actions.

Quality Rubric Focus: actionability, business clarity, audience fit, conciseness.

Review Required: yes.

Forbidden Actions: vague slogans, source-free claims, technical overload.

Example Prompt Stub: Use `build_sales_playbook` to create a sales playbook from this Offer Map and Strategy Brief.

#### build_account_plan

Purpose: Create an account plan from customer, plant, stakeholder, and offer context.

Primary Role: Sales Strategist Role.

Supporting Roles: Customer Intelligence Analyst Role, Presales Consultant Role.

Inputs: customer profile, plant records, stakeholder map, Offer Map, Opportunity Scorecards.

Outputs: Account Plan artifact.

Steps: summarize account; map plants and stakeholders; connect triggers to offers; list opportunities; define next actions.

Quality Rubric Focus: actionability, audience fit, evidence discipline, structure and readability.

Review Required: yes.

Forbidden Actions: unsourced relationship claims, CRM-style status without evidence.

Example Prompt Stub: Use `build_account_plan` to create an account plan from these records.

#### define_message_angle

Purpose: Create a clear customer-facing message angle from trigger, pain, and offer fit.

Primary Role: Sales Strategist Role.

Supporting Roles: Marketing Writer Role, Presales Consultant Role.

Inputs: Account Plan, Sales Playbook, Opportunity Scorecard, Solution Brief.

Outputs: message angle, intro email input, meeting prep note.

Steps: identify buyer problem; connect to offer; keep language simple; mark assumptions; list proof points.

Quality Rubric Focus: business clarity, audience fit, conciseness, public/commercial safety.

Review Required: yes for external use.

Forbidden Actions: unsupported benefits, unapproved public claims, pricing.

Example Prompt Stub: Use `define_message_angle` to draft a customer-safe message angle.

#### identify_entry_strategy

Purpose: Recommend how Avenue should approach an account or opportunity.

Primary Role: Sales Strategist Role.

Supporting Roles: Executive Reviewer Role, Customer Intelligence Analyst Role.

Inputs: Account Plan, stakeholder map, Opportunity Scorecard, relationship history.

Outputs: entry strategy, next-action plan.

Steps: identify stakeholder path; select message angle; define first meeting objective; list risks and validation needs.

Quality Rubric Focus: actionability, strategic usefulness, relationship awareness, business clarity.

Review Required: yes.

Forbidden Actions: unsupported stakeholder assumptions, vague next actions.

Example Prompt Stub: Use `identify_entry_strategy` to recommend a first-entry path for this account.

#### score_opportunity_fit

Purpose: Score opportunity fit using visible criteria and evidence.

Primary Role: Sales Strategist Role.

Supporting Roles: Presales Consultant Role, Product Owner Role.

Inputs: Opportunity record, Solution Fit, customer/plant records, tender/market evidence.

Outputs: Opportunity Scorecard fields, scoring rationale.

Steps: score solution fit, urgency, confidence, strategic fit, relationship, value signal; explain rationale; list gaps.

Quality Rubric Focus: evidence discipline, actionability, strategic usefulness, structure and readability.

Review Required: yes.

Forbidden Actions: hidden scoring assumptions, treating scores as final decisions.

Example Prompt Stub: Use `score_opportunity_fit` to score this opportunity and explain each score.

### Presales Skills

#### build_presales_checklist

Purpose: Create a presales validation checklist for an offer, customer, tender, or opportunity.

Primary Role: Presales Consultant Role.

Supporting Roles: Solution Architect Role, Technical Reviewer Role.

Inputs: Offer Map, solution pages, customer/plant profile, tender requirements.

Outputs: Presales Checklist artifact.

Steps: define required inputs; list qualification questions; identify technical validation; flag risks; list missing information.

Quality Rubric Focus: technical credibility, actionability, structure and readability.

Review Required: yes.

Forbidden Actions: vague integration claims, pricing, unsupported fit.

Example Prompt Stub: Use `build_presales_checklist` to create a checklist for this offer and customer context.

#### qualify_customer_need

Purpose: Determine whether a customer problem is a fit for Avenue capability.

Primary Role: Presales Consultant Role.

Supporting Roles: Sales Strategist Role, Technical Reviewer Role.

Inputs: customer/plant profile, pain points, triggers, Solution Brief.

Outputs: qualification note, Presales Checklist input.

Steps: identify need; map to capability; list disqualifiers; mark assumptions; recommend validation questions.

Quality Rubric Focus: technical credibility, actionability, evidence discipline.

Review Required: yes.

Forbidden Actions: forcing fit, ignoring disqualifiers.

Example Prompt Stub: Use `qualify_customer_need` to assess fit for this customer need.

#### map_solution_to_pain_point

Purpose: Link pain points to solution capabilities and evidence.

Primary Role: Presales Consultant Role.

Supporting Roles: Product Owner Role, Data Governance Reviewer Role.

Inputs: Solution Brief, capability pages, customer pain points, evidence items.

Outputs: pain-to-capability mapping, proposal input.

Steps: list pain points; map capabilities; attach evidence; mark assumptions; identify gaps.

Quality Rubric Focus: evidence discipline, technical credibility, business clarity.

Review Required: yes.

Forbidden Actions: unsupported feature claims, overclaiming capability.

Example Prompt Stub: Use `map_solution_to_pain_point` to map these pain points to source-backed capabilities.

#### design_solution_approach

Purpose: Draft a credible solution approach from fit, context, and constraints.

Primary Role: Presales Consultant Role.

Supporting Roles: Solution Architect Role, Technical Reviewer Role.

Inputs: Presales Checklist, Solution Brief, architecture patterns, customer constraints.

Outputs: solution approach, proposal outline input.

Steps: summarize context; propose approach; identify architecture assumptions; list risks; define validation steps.

Quality Rubric Focus: technical credibility, actionability, role fidelity.

Review Required: yes.

Forbidden Actions: final architecture without validation, unsupported integrations, pricing.

Example Prompt Stub: Use `design_solution_approach` to draft a solution approach from these inputs.

#### draft_proposal_outline

Purpose: Create a proposal outline from verified context and solution approach.

Primary Role: Presales Consultant Role.

Supporting Roles: Sales Strategist Role, Solution Architect Role.

Inputs: Customer Proposal Pack, Solution Brief, Presales Checklist, Opportunity Scorecard.

Outputs: proposal outline, Customer Proposal Pack update.

Steps: define sections; map content inputs; flag missing evidence; list assumptions and exclusions.

Quality Rubric Focus: structure and readability, business clarity, technical credibility.

Review Required: yes.

Forbidden Actions: final commercial terms, unsupported claims, unreviewed public claims.

Example Prompt Stub: Use `draft_proposal_outline` to create a proposal outline from this pack.

### Tender Skills

#### analyze_tender_requirements

Purpose: Extract and structure tender requirements.

Primary Role: Tender Manager Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role.

Inputs: tender record, tender documents, requirement list.

Outputs: Tender Response Pack input, requirement register.

Steps: identify requirements; classify technical/commercial/compliance items; attach source references; list gaps and deadlines.

Quality Rubric Focus: evidence discipline, structure and readability, actionability.

Review Required: yes.

Forbidden Actions: unsupported interpretation, hiding commercial sensitivity.

Example Prompt Stub: Use `analyze_tender_requirements` to extract requirements with traceability.

#### build_compliance_matrix

Purpose: Map requirements to responses, evidence, gaps, and compliance status.

Primary Role: Tender Manager Role.

Supporting Roles: Presales Consultant Role, Solution Architect Role, Data Governance Reviewer Role.

Inputs: Tender Response Pack, requirement list, Solution Brief, Presales Checklist.

Outputs: Compliance Matrix artifact.

Steps: list requirements; map response; assign compliance status; attach evidence; flag gaps and clarifications.

Quality Rubric Focus: evidence discipline, technical credibility, structure and readability.

Review Required: yes.

Forbidden Actions: unsupported compliance claims, final commitment without review.

Example Prompt Stub: Use `build_compliance_matrix` to create a traceable compliance matrix.

#### build_tender_response_pack

Purpose: Organize tender context, response structure, responsibilities, risks, and evidence.

Primary Role: Tender Manager Role.

Supporting Roles: Presales Consultant Role, Sales Strategist Role, Executive Reviewer Role.

Inputs: tender record, tender documents, Compliance Matrix, Solution Brief.

Outputs: Tender Response Pack artifact.

Steps: summarize tender; organize requirements; define response sections; list owners; flag risks and open questions.

Quality Rubric Focus: actionability, evidence discipline, structure and readability.

Review Required: yes.

Forbidden Actions: pricing/commercial terms in general knowledge, unsupported commitments.

Example Prompt Stub: Use `build_tender_response_pack` to organize this tender response.

#### identify_bid_risks

Purpose: Identify bid risks and blockers.

Primary Role: Tender Manager Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role, Executive Reviewer Role.

Inputs: Tender Response Pack, Compliance Matrix, risk notes, partner capability.

Outputs: tender risk report, bid/no-bid input.

Steps: identify requirement gaps; assess deadlines; check partner/dependency risks; rank risks; propose mitigation.

Quality Rubric Focus: strategic usefulness, actionability, technical credibility.

Review Required: yes.

Forbidden Actions: hiding risks, unsupported mitigation claims.

Example Prompt Stub: Use `identify_bid_risks` to prepare bid risk notes.

#### prepare_bid_no_bid_input

Purpose: Prepare evidence-based input for bid/no-bid decision.

Primary Role: Tender Manager Role.

Supporting Roles: Executive Reviewer Role, Sales Strategist Role, Presales Consultant Role.

Inputs: Tender Response Pack, risk report, Compliance Matrix, Opportunity Scorecard.

Outputs: bid/no-bid input, Management Decision Brief input.

Steps: summarize fit; list risks; rank options; identify decision needed; recommend next step.

Quality Rubric Focus: strategic usefulness, conciseness, actionability, role fidelity.

Review Required: yes.

Forbidden Actions: final decision without human approval, hidden assumptions.

Example Prompt Stub: Use `prepare_bid_no_bid_input` to brief management on bid/no-bid options.

### Technical / Architecture Skills

#### design_reference_architecture

Purpose: Create a reference architecture from solution and pattern knowledge.

Primary Role: Solution Architect Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role.

Inputs: solution pages, architecture patterns, customer constraints.

Outputs: reference architecture notes, diagram notes.

Steps: define layers; map systems; identify interfaces; state assumptions; flag risks.

Quality Rubric Focus: technical credibility, structure and readability, evidence discipline.

Review Required: yes.

Forbidden Actions: unsupported diagrams, final implementation commitments.

Example Prompt Stub: Use `design_reference_architecture` to draft architecture notes.

#### map_system_integration

Purpose: Map source systems, target systems, interfaces, and data paths.

Primary Role: Solution Architect Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role.

Inputs: customer system landscape, solution pages, architecture patterns.

Outputs: integration map, risk notes.

Steps: identify systems; define data direction; list interfaces; identify ownership; flag unknowns.

Quality Rubric Focus: technical credibility, actionability, structure and readability.

Review Required: yes.

Forbidden Actions: assuming protocol support without source validation.

Example Prompt Stub: Use `map_system_integration` to map integration paths and unknowns.

#### define_data_flow

Purpose: Describe data movement and transformation across systems.

Primary Role: Solution Architect Role.

Supporting Roles: Presales Consultant Role, Technical Reviewer Role.

Inputs: system landscape, solution pages, architecture patterns, requirements.

Outputs: data-flow notes, diagram input.

Steps: define sources; map collection, processing, storage, visualization, and downstream use; state assumptions.

Quality Rubric Focus: technical credibility, structure and readability, evidence discipline.

Review Required: yes.

Forbidden Actions: vague data-flow claims, unvalidated retention/security assumptions.

Example Prompt Stub: Use `define_data_flow` to document data flow for this solution approach.

#### assess_technical_risk

Purpose: Identify technical feasibility and delivery risks.

Primary Role: Technical Reviewer Role.

Supporting Roles: Solution Architect Role, Presales Consultant Role.

Inputs: solution approach, architecture notes, requirements, constraints.

Outputs: technical risk notes, missing-information list.

Steps: review assumptions; identify integration/deployment risks; classify severity; recommend mitigation or validation.

Quality Rubric Focus: technical credibility, actionability, role fidelity.

Review Required: yes.

Forbidden Actions: over-optimistic assumptions, ignoring deployment constraints.

Example Prompt Stub: Use `assess_technical_risk` to review these technical assumptions.

#### validate_product_boundary

Purpose: Check what product claims are supported, unsupported, or out of scope.

Primary Role: Technical Reviewer Role.

Supporting Roles: Data Governance Reviewer Role, Product Owner Role.

Inputs: solution page, source evidence, proposal outline, requirement list.

Outputs: product boundary review, claim corrections.

Steps: list claims; compare to sources; mark supported/unsupported; identify limitations; suggest safer wording.

Quality Rubric Focus: evidence discipline, technical credibility, public/commercial safety.

Review Required: yes.

Forbidden Actions: treating vendor marketing as verified fact without review.

Example Prompt Stub: Use `validate_product_boundary` to review these product claims.

### Marketing / Communication Skills

#### write_solution_brief

Purpose: Create a clear solution brief from approved or review-ready knowledge.

Primary Role: Marketing Writer Role.

Supporting Roles: Presales Consultant Role, Data Governance Reviewer Role.

Inputs: Solution Brief template, solution pages, Offer Map, public-safe evidence.

Outputs: Solution Brief artifact.

Steps: identify audience; summarize problem and fit; write benefit-led sections; preserve evidence; list exclusions.

Quality Rubric Focus: business clarity, conciseness, public/commercial safety.

Review Required: yes.

Forbidden Actions: unapproved public claims, pricing, unsupported benefits.

Example Prompt Stub: Use `write_solution_brief` to draft a concise solution brief from approved inputs.

#### write_website_copy

Purpose: Draft public-safe website copy from approved knowledge.

Primary Role: Marketing Writer Role.

Supporting Roles: Data Governance Reviewer Role, Product Owner Role.

Inputs: Public Content Brief, approved Solution Brief, approved Case Study Pack.

Outputs: website copy draft.

Steps: define audience; write public-safe message; remove internal caveats; avoid restricted claims; request review.

Quality Rubric Focus: audience fit, business clarity, public/commercial safety, conciseness.

Review Required: yes, public-safety review required.

Forbidden Actions: public claims from unapproved sources, confidential details, pricing.

Example Prompt Stub: Use `write_website_copy` to draft public-safe copy from this brief.

#### write_event_intro

Purpose: Create an event abstract or intro from approved offer knowledge.

Primary Role: Marketing Writer Role.

Supporting Roles: Product Owner Role, Sales Strategist Role.

Inputs: Public Content Brief, Solution Brief, Offer Map.

Outputs: event intro, abstract, talk outline.

Steps: identify audience; define hook; summarize value; list safe claims; mark review needs.

Quality Rubric Focus: audience fit, business clarity, conciseness, public/commercial safety.

Review Required: yes.

Forbidden Actions: unsupported event claims, internal strategy leakage.

Example Prompt Stub: Use `write_event_intro` to create an event abstract from approved inputs.

#### create_presentation_narrative

Purpose: Create a presentation storyline from strategy or solution artifacts.

Primary Role: Marketing Writer Role.

Supporting Roles: Product Owner Role, Sales Strategist Role.

Inputs: Strategy Brief, Solution Brief, Offer Map, Case Study Pack.

Outputs: presentation narrative, slide outline.

Steps: define audience; create storyline; map evidence; identify visuals; list review items.

Quality Rubric Focus: structure and readability, business clarity, audience fit.

Review Required: yes.

Forbidden Actions: unsupported claims, excessive technical detail for nontechnical audience.

Example Prompt Stub: Use `create_presentation_narrative` to build a slide storyline.

#### rewrite_for_customer_audience

Purpose: Rewrite internal content for a specific customer-facing audience.

Primary Role: Marketing Writer Role.

Supporting Roles: Sales Strategist Role, Data Governance Reviewer Role.

Inputs: internal draft, customer context, approved evidence.

Outputs: customer-facing rewrite.

Steps: identify audience; remove internal language; simplify; preserve safe claims; mark assumptions.

Quality Rubric Focus: audience fit, business clarity, public/commercial safety.

Review Required: yes before external use.

Forbidden Actions: leaking internal assumptions, adding new claims.

Example Prompt Stub: Use `rewrite_for_customer_audience` to adapt this internal note.

### Customer Intelligence Skills

#### create_account_context

Purpose: Create a structured account context note.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Sales Strategist Role, Presales Consultant Role.

Inputs: customer records, plant records, contacts, market signals, tender records.

Outputs: account context note, Account Plan input.

Steps: summarize customer; map plants; identify stakeholders; list triggers and gaps.

Quality Rubric Focus: evidence discipline, structure and readability, actionability.

Review Required: yes.

Forbidden Actions: unmarked speculation, stale data as fact.

Example Prompt Stub: Use `create_account_context` to summarize account context from these records.

#### identify_customer_triggers

Purpose: Identify business or technical triggers from customer and market data.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Sales Strategist Role.

Inputs: market signals, customer records, plant records, tender records.

Outputs: trigger list, Opportunity context input.

Steps: classify signals; link to customer/plant; assess relevance; mark confidence; list validation needs.

Quality Rubric Focus: evidence discipline, actionability, business clarity.

Review Required: yes.

Forbidden Actions: treating weak signals as confirmed intent.

Example Prompt Stub: Use `identify_customer_triggers` to identify possible triggers and confidence.

#### map_customer_system_landscape

Purpose: Map known customer systems and technical context.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Solution Architect Role, Technical Reviewer Role.

Inputs: customer records, plant records, technical notes, tender requirements.

Outputs: system landscape note, Presales Checklist input.

Steps: list systems; identify data sources; note integration constraints; mark unknowns.

Quality Rubric Focus: technical credibility, evidence discipline, structure and readability.

Review Required: yes.

Forbidden Actions: unsupported system claims, assuming integration feasibility.

Example Prompt Stub: Use `map_customer_system_landscape` to map known systems and gaps.

#### identify_data_gaps

Purpose: Identify missing data needed for better strategy, proposal, or Opportunity work.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Data Governance Reviewer Role, Presales Consultant Role.

Inputs: account context, Opportunity Scorecard, Presales Checklist.

Outputs: data gap list, research plan.

Steps: compare required fields to available data; classify gaps; prioritize research; assign review needs.

Quality Rubric Focus: actionability, structure and readability, role fidelity.

Review Required: no for draft, yes before high-impact use.

Forbidden Actions: filling gaps with guesses.

Example Prompt Stub: Use `identify_data_gaps` to list missing information and research priorities.

#### build_opportunity_context_note

Purpose: Summarize the context behind an Opportunity candidate.

Primary Role: Customer Intelligence Analyst Role.

Supporting Roles: Sales Strategist Role, Presales Consultant Role.

Inputs: Opportunity record, customer/plant records, tender/market evidence.

Outputs: Opportunity context note, Opportunity Scorecard input.

Steps: summarize context; link evidence; separate assumptions; list gaps and next validation.

Quality Rubric Focus: evidence discipline, actionability, structure and readability.

Review Required: yes.

Forbidden Actions: promoting unverified records, hiding uncertainty.

Example Prompt Stub: Use `build_opportunity_context_note` to summarize this Opportunity candidate.

### Governance / Review Skills

#### review_claims_and_evidence

Purpose: Check claims against source evidence and readiness rules.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Technical Reviewer Role, Product Owner Role.

Inputs: artifact draft, knowledge page, evidence table, source references.

Outputs: claim review, readiness note, corrections.

Steps: list claims; check sources; mark unsupported claims; separate assumptions; flag restricted content.

Quality Rubric Focus: evidence discipline, public/commercial safety, technical credibility.

Review Required: yes.

Forbidden Actions: rewriting unsupported claims as facts.

Example Prompt Stub: Use `review_claims_and_evidence` to review this artifact for source support.

#### check_source_quality

Purpose: Assess source reliability, freshness, and relevance.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Customer Intelligence Analyst Role.

Inputs: source records, evidence items, artifact sources.

Outputs: source quality report, confidence notes.

Steps: classify source type; check timestamp; assess reliability; identify conflicts and stale data.

Quality Rubric Focus: evidence discipline, structure and readability.

Review Required: yes.

Forbidden Actions: accepting source without reliability assessment.

Example Prompt Stub: Use `check_source_quality` to assess these sources.

#### flag_restricted_content

Purpose: Identify pricing, confidential, commercial, or public-unsafe content.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Marketing Writer Role, Tender Manager Role.

Inputs: artifact draft, tender response pack, source pack, case study pack.

Outputs: restricted-content flag list, safe-handling note.

Steps: scan for restricted content; classify sensitivity; recommend exclusions; mark public-safety needs.

Quality Rubric Focus: public/commercial safety, evidence discipline.

Review Required: yes.

Forbidden Actions: copying restricted content into general artifacts.

Example Prompt Stub: Use `flag_restricted_content` to identify content that must be excluded.

#### assess_confidence

Purpose: Assign confidence level based on evidence, review state, and assumptions.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Product Owner Role, Presales Consultant Role.

Inputs: artifact draft, evidence table, records, source quality report.

Outputs: confidence review, readiness note.

Steps: assess evidence strength; review assumptions; identify conflicts; recommend confidence level.

Quality Rubric Focus: evidence discipline, role fidelity, structure and readability.

Review Required: yes.

Forbidden Actions: high confidence from weak evidence.

Example Prompt Stub: Use `assess_confidence` to assign confidence and explain rationale.

#### review_public_safety

Purpose: Check whether content is safe for public use.

Primary Role: Data Governance Reviewer Role.

Supporting Roles: Marketing Writer Role, Product Owner Role.

Inputs: Public Content Brief, Solution Brief, Case Study Pack.

Outputs: public-safety review, allowed/blocked claims.

Steps: check source approval; remove restricted content; flag unsupported public claims; approve or request changes.

Quality Rubric Focus: public/commercial safety, evidence discipline, conciseness.

Review Required: yes.

Forbidden Actions: publishing unapproved claims or confidential details.

Example Prompt Stub: Use `review_public_safety` to review this public content brief.

### Management Decision Skills

#### create_management_brief

Purpose: Create a concise decision-ready brief.

Primary Role: Executive Reviewer Role.

Supporting Roles: Product Owner Role, Sales Strategist Role, Tender Manager Role.

Inputs: Strategy Brief, Opportunity Scorecard, Market Map, Tender Response Pack.

Outputs: Management Decision Brief artifact.

Steps: frame decision; summarize options; show tradeoffs; recommend action; list risks and approvals needed.

Quality Rubric Focus: conciseness, strategic usefulness, actionability, role fidelity.

Review Required: yes.

Forbidden Actions: long background, unresolved recommendation, hidden risks.

Example Prompt Stub: Use `create_management_brief` to make this decision-ready.

#### summarize_decision_options

Purpose: Summarize options for management review.

Primary Role: Executive Reviewer Role.

Supporting Roles: Product Owner Role.

Inputs: Strategy Brief, risk notes, offer map.

Outputs: option summary, decision brief input.

Steps: list options; compare benefits/risks; identify tradeoffs; mark recommendation status.

Quality Rubric Focus: strategic usefulness, conciseness, business clarity.

Review Required: yes.

Forbidden Actions: unranked options without decision criteria.

Example Prompt Stub: Use `summarize_decision_options` to compare these options.

#### rank_priorities

Purpose: Rank opportunities, segments, offers, or actions.

Primary Role: Executive Reviewer Role.

Supporting Roles: Product Owner Role, Sales Strategist Role.

Inputs: Market Map, Opportunity Scorecards, Strategy Brief.

Outputs: priority ranking, rationale.

Steps: define criteria; rank items; explain rationale; list risks and review needs.

Quality Rubric Focus: strategic usefulness, actionability, evidence discipline.

Review Required: yes.

Forbidden Actions: ranking without criteria or evidence.

Example Prompt Stub: Use `rank_priorities` to rank these options with rationale.

#### assess_business_risk

Purpose: Assess business risks for a decision, opportunity, tender, or offer.

Primary Role: Executive Reviewer Role.

Supporting Roles: Tender Manager Role, Sales Strategist Role, Product Owner Role.

Inputs: risk notes, Strategy Brief, Opportunity Scorecard, Tender Response Pack.

Outputs: business risk assessment, decision input.

Steps: identify risks; classify impact/likelihood; propose mitigation; mark decision implications.

Quality Rubric Focus: strategic usefulness, actionability, conciseness.

Review Required: yes.

Forbidden Actions: minimizing risks, hiding assumptions.

Example Prompt Stub: Use `assess_business_risk` to prepare business risk notes.

#### create_opportunity_scorecard

Purpose: Create an Opportunity Scorecard from verified records and evidence.

Primary Role: Executive Reviewer Role.

Supporting Roles: Sales Strategist Role, Presales Consultant Role, Data Governance Reviewer Role.

Inputs: Opportunity record, customer/plant records, tender/market signals, solution fit, evidence items.

Outputs: Opportunity Scorecard artifact.

Steps: summarize opportunity; map evidence; separate assumptions; score fit/urgency/confidence; list risks and next actions.

Quality Rubric Focus: evidence discipline, actionability, strategic usefulness, structure and readability.

Review Required: yes.

Forbidden Actions: using unverified records as final evidence, hiding assumptions, automatic promotion.

Example Prompt Stub: Use `create_opportunity_scorecard` to create a review-ready scorecard from verified records.

## Role-Skill Mapping

| Role | Primary Skills |
|---|---|
| Product Owner Role | `build_offer_map`, `define_product_strategy`, `prioritize_market_segments`, `build_solution_to_capability_matrix`, `define_product_roadmap` |
| Sales Strategist Role | `build_sales_playbook`, `build_account_plan`, `define_message_angle`, `identify_entry_strategy`, `score_opportunity_fit` |
| Presales Consultant Role | `build_presales_checklist`, `qualify_customer_need`, `map_solution_to_pain_point`, `design_solution_approach`, `draft_proposal_outline` |
| Solution Architect Role | `design_reference_architecture`, `map_system_integration`, `define_data_flow` |
| Tender Manager Role | `analyze_tender_requirements`, `build_compliance_matrix`, `build_tender_response_pack`, `identify_bid_risks`, `prepare_bid_no_bid_input` |
| Marketing Writer Role | `write_solution_brief`, `write_website_copy`, `write_event_intro`, `create_presentation_narrative`, `rewrite_for_customer_audience` |
| Customer Intelligence Analyst Role | `enrich_customer_profile`, `enrich_plant_profile`, `map_stakeholders`, `create_account_context`, `identify_customer_triggers`, `map_customer_system_landscape`, `identify_data_gaps`, `build_opportunity_context_note` |
| Data Governance Reviewer Role | `build_source_pack`, `enrich_solution_page_input`, `review_claims_and_evidence`, `check_source_quality`, `flag_restricted_content`, `assess_confidence`, `review_public_safety` |
| Technical Reviewer Role | `design_reference_architecture`, `map_system_integration`, `define_data_flow`, `assess_technical_risk`, `validate_product_boundary` |
| Executive Reviewer Role | `create_management_brief`, `summarize_decision_options`, `rank_priorities`, `assess_business_risk`, `create_opportunity_scorecard` |

## Artifact Transformation Map

| Input | Skill | Output |
|---|---|---|
| Solution pages + evidence | `build_source_pack` | Source Pack |
| Source Pack | `build_offer_map` | Offer Map |
| Offer Map | `define_product_strategy` | Strategy Brief |
| Offer Map + Strategy Brief | `build_sales_playbook` | Sales Playbook |
| Offer Map + solution pages | `build_presales_checklist` | Presales Checklist |
| Tender documents + tender record | `analyze_tender_requirements` | Tender Response Pack input |
| Tender Response Pack + requirements | `build_compliance_matrix` | Compliance Matrix |
| Solution pages + Offer Map | `write_solution_brief` | Solution Brief |
| Opportunity record + evidence | `create_opportunity_scorecard` | Opportunity Scorecard |
| Strategy Brief + Scorecards | `create_management_brief` | Management Decision Brief |

## Evidence And Assumption Handling

- Skills must preserve evidence and assumptions separately.
- Skills using Intelligence Inbox data must label it unverified.
- Skills must not promote imported or AI-generated content automatically.
- Skills must carry source references into output artifacts where material claims depend on sources.
- Weak evidence must produce open questions or validation tasks.

## Commercial / Pricing Handling

- Skills must not place pricing, licensing, discounts, proposal prices, budgetary prices, BOM prices, fees, or commercial terms into general wiki knowledge.
- Tender and proposal skills must keep restricted commercial content outside general-purpose artifacts.
- Public-facing skills must exclude confidential, restricted, and pricing-sensitive content.

## Human Review Gates

Human review is required before:

- approving an artifact for internal operational use;
- publishing public content;
- using a scorecard or decision brief for high-impact action;
- treating assumptions as facts;
- making tender compliance commitments;
- reusing restricted customer/tender content beyond its intended audience.

## Common Failure Modes

- Treating a skill as an executable tool before it is manually proven.
- Treating writing as the whole system.
- Producing long unstructured summaries instead of artifacts.
- Losing source references during transformation.
- Hiding assumptions inside confident prose.
- Making unsupported compliance, product, market, or public claims.
- Adding commercial/pricing content into general knowledge.
- Letting skills bypass human review.

## How To Use Skills In Codex Prompts

Reference the skill ID, role, input artifact, output artifact, and quality focus.

Example:

```text
Use skill `build_offer_map` from docs/15_SKILLS_CATALOG.md.
Primary role: Product Owner Role.
Input artifact: artifacts/source-packs/apm-iiot-source-pack-v0.md.
Output artifact: artifacts/offer-maps/apm-iiot-offer-map-v1.md.
Keep evidence and assumptions separate. Do not add pricing or final packaging decisions.
```

## Future Automation Boundary

Skills are documentation-level patterns now.

Do not implement executable skills, runtime modes, agents, orchestration, crawlers, dashboards, backend/API services, authentication, SaaS features, chatbots, or public portals from this catalog.

A skill may become eligible for automation later only after it is manually used, reviewed, approved for repeat use, and given explicit human approval for automation.
