# Skill Prompt Snippets

Use these snippets as copy-paste starting points for manual skill execution. They are not executable tools and do not bypass human review.

## build_source_pack

```text
Skill instruction: Use `build_source_pack` to create a source-backed Source Pack from the provided Knowledge Hub pages, records, and evidence.
Primary role: Data Governance Reviewer Role, with Product Owner support.
Required input artifacts: source pages, source records, existing notes, evidence items.
Expected output artifact: Source Pack.
Quality rubric focus: evidence discipline, structure and readability, public/commercial safety, role fidelity.
Do: preserve source references, separate evidence from assumptions, flag open questions, mark restricted content.
Avoid: final strategy decisions, unsupported claims, pricing/commercial content, public-ready claims.
Review requirement: human review required before the Source Pack is used as strategy input.
```

## build_offer_map

```text
Skill instruction: Use `build_offer_map` to transform a reviewed Source Pack into an Offer Map.
Primary role: Product Owner Role.
Required input artifacts: Source Pack, solution pages, capability notes, market/customer signals if verified.
Expected output artifact: Offer Map.
Quality rubric focus: strategic clarity, market fit, realistic prioritization, visible trade-offs.
Do: group capabilities into offer themes, show evidence basis, identify gaps, keep assumptions explicit.
Avoid: final packaging decisions without approval, unsupported market claims, pricing/licensing details.
Review requirement: product owner and human review required before downstream playbooks or briefs.
```

## define_product_strategy

```text
Skill instruction: Use `define_product_strategy` to turn an Offer Map into a product or offer strategy brief.
Primary role: Product Owner Role, with Executive Reviewer support.
Required input artifacts: Offer Map, Source Pack, market map, opportunity scorecards if available.
Expected output artifact: Strategy Brief.
Quality rubric focus: strategic usefulness, business clarity, audience fit, actionability.
Do: define strategic choices, target segments, trade-offs, roadmap implications, and decision points.
Avoid: vendor brochure rewriting, unsupported market sizing, hidden assumptions, implementation overload.
Review requirement: executive/human approval required before treating recommendations as direction.
```

## build_sales_playbook

```text
Skill instruction: Use `build_sales_playbook` to convert offer strategy and customer intelligence into a sales playbook.
Primary role: Sales Strategist Role.
Required input artifacts: Strategy Brief, Offer Map, case-study pack, account/customer context.
Expected output artifact: Sales Playbook.
Quality rubric focus: actionability, buyer relevance, business clarity, relationship awareness.
Do: define target accounts, entry points, message angles, qualification cues, and next actions.
Avoid: vague slogans, deep technical architecture, source IDs in main narrative, unsourced assumptions.
Review requirement: sales owner review required before field use.
```

## build_presales_checklist

```text
Skill instruction: Use `build_presales_checklist` to create a presales checklist from offer and solution knowledge.
Primary role: Presales Consultant Role.
Required input artifacts: Offer Map, solution pages, source pack, customer/plant profile if available.
Expected output artifact: Presales Checklist.
Quality rubric focus: technical credibility, clear fit, actionability, risk awareness.
Do: include qualification questions, required inputs, fit/gap checks, risks, and assumptions.
Avoid: unsupported feature claims, pricing, vague integration claims, marketing exaggeration.
Review requirement: presales or technical review required before proposal use.
```

## draft_proposal_outline

```text
Skill instruction: Use `draft_proposal_outline` to create a proposal outline from customer needs and approved solution knowledge.
Primary role: Presales Consultant Role.
Required input artifacts: customer proposal pack, presales checklist, offer map, customer/plant context.
Expected output artifact: Customer Proposal Pack or proposal outline section.
Quality rubric focus: audience fit, technical credibility, structure and readability, actionability.
Do: align sections to customer needs, show assumptions, list required missing inputs, keep evidence traceable.
Avoid: final commitments, unsupported claims, commercial/pricing terms unless explicitly approved.
Review requirement: human review required before customer submission.
```

## analyze_tender_requirements

```text
Skill instruction: Use `analyze_tender_requirements` to extract and structure tender requirements.
Primary role: Tender Manager Role.
Required input artifacts: tender record, tender documents, procurement notes, source/evidence records.
Expected output artifact: Tender Response Pack input or requirements analysis.
Quality rubric focus: requirement traceability, gap awareness, deadline awareness, risk awareness.
Do: separate technical, commercial, compliance, eligibility, deadline, and submission requirements.
Avoid: unsupported compliance claims, hidden assumptions, generalizing tender-specific requirements into wiki truth.
Review requirement: tender owner review required before bid/no-bid or response planning.
```

## build_compliance_matrix

```text
Skill instruction: Use `build_compliance_matrix` to transform tender requirements into a traceable compliance matrix.
Primary role: Tender Manager Role.
Required input artifacts: tender requirements analysis, solution pages, partner capability notes.
Expected output artifact: Compliance Matrix.
Quality rubric focus: traceability, technical credibility, gap awareness, public/commercial safety.
Do: list each requirement, response status, evidence/source, owner, gap, and action.
Avoid: marking compliance without evidence, hiding gaps, including pricing in general knowledge artifacts.
Review requirement: tender, presales, and technical review required before submission.
```

## write_solution_brief

```text
Skill instruction: Use `write_solution_brief` to create a concise, business-facing solution brief from approved knowledge.
Primary role: Marketing Writer Role.
Required input artifacts: approved solution page, offer map, public-safe evidence, reviewed case-study pack.
Expected output artifact: Solution Brief.
Quality rubric focus: business clarity, audience fit, conciseness, public/commercial safety.
Do: communicate value clearly, use approved claims, keep technical detail proportionate, preserve review notes.
Avoid: source IDs in main narrative, unapproved public claims, pricing/licensing, unsupported benefits.
Review requirement: public-safety and human review required before external use.
```

## review_claims_and_evidence

```text
Skill instruction: Use `review_claims_and_evidence` to check whether claims are source-backed, assumption-labeled, and safe for intended use.
Primary role: Data Governance Reviewer Role.
Required input artifacts: draft artifact, source pack, evidence table, related records.
Expected output artifact: review notes and readiness status.
Quality rubric focus: evidence discipline, public/commercial safety, technical credibility, role fidelity.
Do: flag unsupported claims, stale sources, conflicting sources, restricted content, and assumptions stated as facts.
Avoid: rewriting strategy as final truth, approving content without sources, ignoring sensitivity boundaries.
Review requirement: human reviewer owns final approval.
```

## create_management_brief

```text
Skill instruction: Use `create_management_brief` to summarize options, risks, trade-offs, and recommendation for management.
Primary role: Executive Reviewer Role.
Required input artifacts: strategy brief, opportunity scorecard, offer map, risk notes.
Expected output artifact: Management Decision Brief.
Quality rubric focus: decision readiness, strategic usefulness, conciseness, business clarity.
Do: rank options, state recommendation, show key trade-offs, identify decision needed and next action.
Avoid: long background, unranked options, implementation detail overload, unsupported confidence.
Review requirement: executive/human review required before decision use.
```

## create_opportunity_scorecard

```text
Skill instruction: Use `create_opportunity_scorecard` to create a scorecard from verified customer, plant, tender, market, solution, and evidence records.
Primary role: Executive Reviewer Role, with Sales Strategist and Customer Intelligence Analyst support.
Required input artifacts: opportunity context note, account plan, offer map, evidence items, solution fit records.
Expected output artifact: Opportunity Scorecard.
Quality rubric focus: actionability, evidence discipline, strategic usefulness, business clarity.
Do: show evidence, assumptions, risks, fit/urgency/confidence scores, recommended next actions, and review status.
Avoid: auto-promoting unverified signals, hiding assumptions, treating score as final decision.
Review requirement: human review required before sales/presales/tender action.
```
