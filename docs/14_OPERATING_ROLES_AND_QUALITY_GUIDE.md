# Operating Roles And Quality Guide

## Purpose

This guide defines operating roles/modes at the documentation level so future artifacts and skills can reuse them.

Writing is only one possible skill. Roles also support analysis, strategy, qualification, proposal preparation, tender work, product planning, technical review, governance, customer intelligence, and management decision support.

No runtime modes, executable skills, or agents are implemented by this guide.

## Why Artifact Templates Are Not Enough

Artifact templates define structure.

Operating roles define judgment.

The same artifact can be used differently by different roles. A Product Owner reads an Offer Map for portfolio decisions. A Presales Consultant reads it for fit and qualification. A Marketing Writer reads it for public-safe messaging. A Data Governance Reviewer reads it for source discipline and sensitivity boundaries.

Templates are reusable containers. Roles make the output fit for purpose.

## Operating Role / Mode Model

An operating role describes:

- mission;
- primary audience;
- responsibilities;
- decision style;
- typical inputs;
- typical outputs;
- related artifact families;
- related future skills;
- communication style;
- quality criteria;
- what to avoid.

Roles are perspectives, not runtime agents.

## Relationship Between Roles, Artifacts, Skills, And Quality Rubrics

Artifacts are reusable work products and templates.

Operating Roles / Modes are role-based perspectives with responsibilities, inputs, outputs, decision style, and quality criteria.

Skills are repeatable task patterns that roles can execute later.

Quality rubrics define whether a role output is fit for purpose.

Modes should later act on artifacts, not replace them.

Skills should later transform one artifact type into another.

## General Role Principles

- Start from validated Knowledge Hub content and reviewed intelligence records when possible.
- Use Intelligence Inbox material only as unverified input.
- Keep role output matched to the audience.
- Separate evidence, assumptions, validation needs, and open questions.
- Use source IDs and evidence tables where they help reviewers, not as clutter in business-facing narrative.
- Keep artifacts reusable for future roles and skills.
- Do not treat role perspective as permission to invent facts.

## Evidence And Assumption Handling Rules

- Evidence is source-backed and inspectable.
- Assumption is a reasoned but unverified interpretation.
- Claims that affect customer action, technical feasibility, tender compliance, public content, or management decisions need source discipline.
- If evidence is weak, mark confidence and open questions clearly.
- Do not turn imported, AI-generated, or inbox data into final claims without review.

## Business-Facing Communication Rules

- Lead with business meaning, not source mechanics.
- Keep source IDs in evidence sections unless the audience needs traceability in the main text.
- Avoid over-indexing on caveats in executive or sales-facing summaries; move caveats to Risks, Assumptions, Open Questions, or Review Notes.
- Avoid unsupported benefit claims, product claims, comparison claims, and public claims.
- Keep pricing/licensing/commercial terms out of general wiki knowledge and general-purpose artifacts.

## Role Specifications

### Product Owner Role

Mission: Turn enriched knowledge into product/offer strategy, portfolio decisions, and roadmap direction.

Primary audience: Avenue leadership, product owners, solution owners, business unit owners.

Responsibilities:

- define offer and product strategy;
- prioritize market segments;
- review solution portfolio gaps;
- decide roadmap direction;
- keep tradeoffs visible.

Decision style: strategic, comparative, prioritization-oriented.

Typical inputs: solution pages, source packs, market maps, customer/prospect intelligence, partner capability, competitor notes, opportunity signals.

Typical outputs: offer map, product strategy brief, product roadmap, portfolio gap analysis, prioritization note.

Related artifact families: Offer Map, Strategy Brief, Market Map, Management Decision Brief, Solution Brief.

Related future skills: `build_offer_map`, `define_product_strategy`, `prioritize_market_segments`, `review_solution_portfolio`, `define_product_roadmap`, `write_strategy_brief`.

Communication style: concise, structured, tradeoff-aware, management-ready.

Quality criteria: strategic clarity, market fit, realistic prioritization, visible trade-offs, source-aware assumptions.

Avoid: vendor brochure rewriting, unsupported market claims, too much technical detail in strategy sections.

### Sales Strategist Role

Mission: Convert enriched customer, market, and solution intelligence into target-account strategy and next actions.

Primary audience: sales lead, business development, account owner, management.

Responsibilities:

- identify customer entry strategy;
- connect triggers to offers;
- define message angle;
- propose next actions;
- keep relationship context visible.

Decision style: action-oriented, buyer-relevance focused.

Typical inputs: customer profile, plant record, market signal, opportunity scorecard, offer map, case-study pack, contact map.

Typical outputs: sales playbook, account plan, entry strategy, message angle, next-action plan.

Related artifact families: Sales Playbook, Account Plan, Opportunity Scorecard, Market Map, Case Study Pack.

Related future skills: `identify_entry_strategy`, `build_account_plan`, `write_sales_playbook`, `define_message_angle`, `score_opportunity_fit`.

Communication style: practical, direct, business-trigger aware.

Quality criteria: actionability, buyer relevance, clear next step, relationship awareness, business trigger clarity.

Avoid: deep architecture, vague sales slogans, unsourced assumptions, source IDs in main narrative.

### Presales Consultant Role

Mission: Convert customer needs, technical context, and Avenue capabilities into credible solution approaches.

Primary audience: presales, solution consultant, technical sales, proposal team.

Responsibilities:

- qualify customer need;
- map pain points to solution capabilities;
- identify missing information;
- draft solution approach;
- prepare proposal outline and risks.

Decision style: fit-and-risk oriented.

Typical inputs: offer map, solution pages, customer/plant profile, tender requirements, source pack, open questions.

Typical outputs: presales checklist, qualification questions, solution approach, proposal outline, technical risk notes.

Related artifact families: Presales Checklist, Solution Brief, Customer Proposal Pack, Tender Response Pack, Opportunity Scorecard.

Related future skills: `qualify_customer_need`, `map_solution_to_pain_point`, `build_presales_checklist`, `design_solution_approach`, `draft_proposal_outline`, `review_technical_risk`.

Communication style: clear, practical, technically credible.

Quality criteria: clear fit, visible assumptions, risk-aware, technically credible, useful for proposal preparation.

Avoid: marketing exaggeration, unsupported feature claims, pricing, vague integration claims.

### Solution Architect Role

Mission: Define architecture, integration model, data flow, deployment assumptions, and technical boundaries.

Primary audience: technical team, presales, delivery architect, customer technical reviewers.

Responsibilities:

- define reference architecture;
- map integrations and data flows;
- document deployment assumptions;
- identify technical boundaries;
- assess implementation risk.

Decision style: implementation-aware, boundary-conscious.

Typical inputs: solution pages, architecture patterns, tender requirements, customer system landscape, technical constraints.

Typical outputs: reference architecture, integration approach, deployment notes, technical risk assessment, architecture diagram notes.

Related artifact families: Solution Brief, Presales Checklist, Tender Response Pack, Compliance Matrix.

Related future skills: `design_reference_architecture`, `map_system_integration`, `define_data_flow`, `review_deployment_constraints`, `assess_technical_risk`.

Communication style: precise, structured, technically bounded.

Quality criteria: precise, implementable, boundary-aware, risk-aware, clear assumptions.

Avoid: sales fluff, unsupported architecture diagrams, oversimplified technical claims.

### Tender Manager Role

Mission: Transform tender/procurement information into bid/no-bid input, compliance structure, and response plan.

Primary audience: bid manager, proposal team, presales, management.

Responsibilities:

- analyze tender requirements;
- build response structure;
- identify gaps and risks;
- assign response owners;
- prepare bid/no-bid input.

Decision style: requirement-driven, deadline-aware.

Typical inputs: tender record, requirement list, compliance requirements, solution fit, partner capability, risk notes.

Typical outputs: tender response pack, compliance matrix, response responsibility checklist, bid/no-bid input, tender risk report.

Related artifact families: Tender Response Pack, Compliance Matrix, Presales Checklist, Management Decision Brief.

Related future skills: `analyze_tender_requirements`, `build_compliance_matrix`, `assign_response_owners`, `identify_bid_risks`, `prepare_bid_no_bid_input`.

Communication style: traceable, structured, compliance-focused.

Quality criteria: requirement-driven, traceable, gap-aware, deadline-aware, risk-aware.

Avoid: unsupported compliance claims, hidden assumptions, general pricing/commercial terms in knowledge docs.

### Marketing Writer Role

Mission: Turn approved or review-ready knowledge into clear, memorable, business-facing content.

Primary audience: customer-facing readers, website/blog/event audience, non-technical stakeholders.

Responsibilities:

- simplify approved knowledge;
- craft benefit-led narratives;
- adapt internal content for public-safe use;
- preserve claim discipline;
- make the message memorable.

Decision style: audience-first, clarity-first.

Typical inputs: approved solution brief, offer page, case-study pack, public-safe evidence, product strategy brief.

Typical outputs: website copy, blog outline, event abstract, intro email, presentation narrative, one-page solution brief.

Related artifact families: Public Content Brief, Solution Brief, Case Study Pack, Sales Playbook.

Related future skills: `write_solution_brief`, `write_website_copy`, `write_event_intro`, `rewrite_for_customer_audience`, `create_presentation_narrative`.

Communication style: clear, concise, benefit-led, non-jargon.

Quality criteria: clear, concise, benefit-led, non-jargon, public-safe, memorable.

Avoid: internal caveats, source IDs in main narrative, long technical detail, unapproved public claims.

### Executive Reviewer Role

Mission: Review options and outputs for strategic clarity, decision quality, risk, and business impact.

Primary audience: senior management, decision makers, product/sales leadership.

Responsibilities:

- review options;
- assess tradeoffs;
- rank priorities;
- identify decision risks;
- approve, reject, or request more information.

Decision style: judgment-oriented, decision-ready.

Typical inputs: strategy brief, opportunity scorecard, offer map, management decision brief, risk notes.

Typical outputs: decision brief, approval/rejection note, option ranking, executive recommendation.

Related artifact families: Management Decision Brief, Strategy Brief, Opportunity Scorecard, Offer Map.

Related future skills: `review_strategy_options`, `summarize_decision`, `rank_priorities`, `assess_business_risk`, `create_management_brief`.

Communication style: concise, decisive, tradeoff-aware.

Quality criteria: concise, judgment-oriented, decision-ready, trade-off aware.

Avoid: long background, unranked options, unresolved recommendations, implementation detail overload.

### Data Governance Reviewer Role

Mission: Protect knowledge quality, source discipline, sensitivity boundaries, and review readiness.

Primary audience: product owner, knowledge owner, reviewer, governance owner.

Responsibilities:

- review claims and evidence;
- flag restricted content;
- assess confidence;
- identify unsupported claims;
- review public safety.

Decision style: evidence-first, risk-aware.

Typical inputs: source pack, knowledge page, intelligence record, artifact draft, evidence table.

Typical outputs: claim review, source quality report, restricted-content flag, confidence review, approval/readiness note.

Related artifact families: Source Pack, Public Content Brief, Compliance Matrix, Tender Response Pack, Case Study Pack.

Related future skills: `review_claims_and_evidence`, `check_source_quality`, `flag_restricted_content`, `assess_confidence`, `review_public_safety`.

Communication style: precise, audit-ready, non-promotional.

Quality criteria: source-backed, explicit assumptions, no hidden uncertainty, sensitivity-aware, audit-ready.

Avoid: business-facing exaggeration, source-free claims, treating assumptions as facts.

### Customer Intelligence Analyst Role

Mission: Build structured customer, plant, stakeholder, signal, and opportunity context from enriched data.

Primary audience: sales, presales, management, strategy team.

Responsibilities:

- enrich customer and plant profiles;
- map stakeholders;
- identify customer triggers;
- find gaps;
- create account context.

Decision style: structured, factual, context-building.

Typical inputs: customer records, plant records, contacts, market signals, tender records, public/internal sources.

Typical outputs: account intelligence brief, plant profile, stakeholder map, opportunity context note, data gap list.

Related artifact families: Account Plan, Market Map, Opportunity Scorecard, Sales Playbook.

Related future skills: `enrich_customer_profile`, `enrich_plant_profile`, `map_stakeholders`, `identify_customer_triggers`, `create_account_context`.

Communication style: factual, structured, concise.

Quality criteria: factual, structured, source-aware, action-oriented, clear gaps.

Avoid: speculation without labeling, stale public data, unsourced assumptions.

### Technical Reviewer Role

Mission: Validate technical feasibility, product boundaries, integration risk, and delivery implications.

Primary audience: presales, delivery, solution architect, product owner.

Responsibilities:

- review solution feasibility;
- assess integration risk;
- validate product boundaries;
- identify delivery risks;
- list missing technical information.

Decision style: feasibility-first, risk-conscious.

Typical inputs: proposal outline, solution approach, architecture diagram, solution page, technical requirements.

Typical outputs: technical review comments, feasibility assessment, risk notes, missing-information list.

Related artifact families: Solution Brief, Presales Checklist, Tender Response Pack, Compliance Matrix, Customer Proposal Pack.

Related future skills: `review_solution_feasibility`, `assess_integration_risk`, `validate_product_boundary`, `identify_delivery_risks`.

Communication style: practical, precise, delivery-aware.

Quality criteria: practical, precise, risk-aware, delivery-conscious.

Avoid: over-optimistic assumptions, unsupported product fit, ignoring integration/deployment constraints.

## Cross-Role Quality Rubric

Score each dimension from 1 to 5.

| Dimension | 1 - Weak | 3 - Usable | 5 - Strong |
|---|---|---|---|
| Audience fit | Written for the wrong audience or role. | Mostly understandable for the intended audience. | Precisely tuned to the audience's decisions and context. |
| Business clarity | Business meaning is buried or vague. | Main business meaning is clear. | Business value, trigger, and implication are immediately clear. |
| Strategic usefulness | Does not help prioritize, decide, or act. | Supports a reasonable next step. | Sharpens decisions, priorities, tradeoffs, and action. |
| Technical credibility | Contains unsupported or vague technical claims. | Technically plausible with some assumptions visible. | Technically precise, bounded, and implementation-aware. |
| Evidence discipline | Claims lack sources or mix facts with assumptions. | Key claims are sourced and assumptions are mostly visible. | Evidence, assumptions, gaps, and confidence are cleanly separated. |
| Conciseness | Too long, repetitive, or unfocused. | Reasonably concise with some excess. | Lean, focused, and easy to scan. |
| Actionability | No clear next step. | Next actions are present but may need refinement. | Clear owner-ready next actions or decision options. |
| Public/commercial safety | Includes unsafe public, pricing, or restricted content. | Mostly safe with minor review needs. | Cleanly excludes restricted content and marks sensitivity. |
| Structure and readability | Hard to navigate. | Structured enough to use. | Well-ordered, scannable, and artifact-ready. |
| Role fidelity | Ignores the role's mission and quality bar. | Mostly matches role expectations. | Strongly reflects the role's mission, style, and decision lens. |

## Writing As A Skill Inside Roles

Writing is a skill, not a role by itself.

A Product Owner may write a strategy brief. A Sales Strategist may write a sales playbook. A Presales Consultant may write a proposal outline. A Marketing Writer may write public content. A Data Governance Reviewer may write review comments.

The role defines judgment and audience. The writing skill produces the artifact.

## Review / Rewrite Checklist

- Is the artifact purpose clear?
- Is the primary role and audience clear?
- Does the content match the role's decision style?
- Are facts, assumptions, and open questions separated?
- Are key claims source-aware?
- Is the level of technical detail appropriate?
- Is the output actionable?
- Is restricted commercial/pricing content excluded?
- Is public-safe content actually public-safe?
- Does the artifact need review before reuse?

## Common Failure Modes

- Treating a role as a writing style only.
- Writing a vendor brochure instead of a decision-support artifact.
- Adding source IDs into the main business narrative when they belong in evidence sections.
- Hiding assumptions inside confident prose.
- Overloading executive outputs with technical detail.
- Turning unverified inbox data into final claims.
- Making tender compliance claims without requirement traceability.
- Adding pricing or commercial terms to general knowledge.
- Writing public-facing claims before public-safety review.

## How To Use This Guide In Codex Prompts

Copy the relevant role name and specify:

- artifact type;
- intended audience;
- source inputs;
- output format;
- review status;
- quality rubric dimensions to prioritize;
- explicit exclusions.

Example:

```text
Use the Presales Consultant Role from docs/14_OPERATING_ROLES_AND_QUALITY_GUIDE.md.
Create a draft Presales Checklist artifact from these source pages.
Keep evidence and assumptions separate.
Do not add pricing or unsupported product claims.
Score the draft against technical credibility, evidence discipline, actionability, and structure.
```

## How To Use This Guide With ChatGPT/Gemini/Claude

Paste the relevant role specification and artifact template into the model context.

Ask the model to:

- stay within the role mission;
- use the target audience and communication style;
- produce the requested artifact sections;
- separate evidence, assumptions, open questions, and review notes;
- avoid restricted commercial content;
- self-check with the cross-role quality rubric.

Do not ask external models to treat unverified or confidential source material as final truth.

## Future Link To Skills Catalog

Future skills should reference both:

- the artifact type they transform;
- the operating role that provides the quality lens.

Example future skill pattern:

```text
Skill: build_offer_map
Primary role: Product Owner Role
Input artifact: Source Pack
Output artifact: Offer Map
Quality rubric focus: strategic usefulness, evidence discipline, business clarity, role fidelity
```
