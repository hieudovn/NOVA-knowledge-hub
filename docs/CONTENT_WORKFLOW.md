# Content Workflow

## 1. Workflow Principle

The platform must distinguish between:

- raw source;
- extracted draft;
- unverified intelligence;
- reviewed knowledge;
- verified record;
- approved knowledge;
- approved Opportunity action;
- public content.

AI may generate drafts, but only humans approve official knowledge and high-impact action.

## 2. Content And Intelligence Lifecycle

```text
Raw Source / Manual Input
    -> Extracted Text or Structured Draft
    -> Unverified Intelligence
    -> Human Review
    -> Verified Record
    -> Opportunity Link / Score / Strategy
    -> Approved Action
    -> Approved Wiki or Selected Public Content
```

## 3. Status Values

### Draft

Initial content created by human or AI.

Draft content may contain incomplete extraction, unverified assumptions, AI mistakes, or missing citations.

### Unverified

Potentially useful intelligence that has not yet passed source, conflict, and deduplication checks.

### Needs Review

The record may contain useful intelligence but requires human review before action.

### Reviewed

Content has been checked but is not yet official.

### Verified

Structured intelligence has been checked against source, deduplication, and conflict rules.

Verified records may support Opportunity scoring and strategy.

### Approved

Content has been accepted as operational knowledge.

AI Q&A should prefer approved knowledge and verified intelligence.

### Public

Content is approved for external publication.

## 4. Visibility Values

### Private

Only personal owner/admin.

### Internal

Internal team users.

### Partner

Selected partners or customer-specific access.

### Public

External visitors.

## 5. Page Types

### Solution Page

Examples:

- IBM MAS;
- IDBoxRT;
- EtaPRO;
- AVEVA PI;
- Canary;
- ESB Data Platform.

### Industry Page

Examples:

- Power Generation;
- Power Transmission;
- Oil & Gas;
- Manufacturing;
- Metro / Railway.

### Capability Page

Examples:

- APM;
- CBM;
- Predictive Maintenance;
- Data Historian;
- IIoT Platform;
- MES Integration;
- AI/ML Analytics.

### Pattern Page

Examples:

- OPC UA Integration;
- Historian to APM;
- Edge to Center;
- ISA-95 Data Model;
- SCADA to Data Platform.

### Tender Page

Examples:

- Requirement Register;
- Compliance Matrix;
- Risk Register;
- Clarification Questions;
- Evaluation Criteria.

### Sales Knowledge Page

Examples:

- customer pain patterns;
- objection handling;
- sales pitch notes;
- industry buying triggers;
- competitor comparison.

### Customer Intelligence Page

Examples:

- customer profile;
- plant profile;
- stakeholder map;
- relationship history;
- known systems.

### Market Signal Page

Examples:

- investment signal;
- expansion signal;
- regulation signal;
- recruitment signal;
- digital transformation signal;
- maintenance or reliability signal;
- energy or ESG signal.

### Opportunity Page

Examples:

- Opportunity candidate;
- qualified Opportunity summary;
- sales/presales strategy note;
- management review brief.

## 6. Landing Page Curation

Landing pages must be generated from selected approved/public wiki content.

Do not create landing pages as independent knowledge sources.

A page can be selected for landing page use when:

```yaml
status: "approved"
visibility: "public"
landing_candidate: true
```

## 7. Review Checklist

Before approving a wiki page or intelligence record, verify:

- Is the source clear?
- Is the claim supported?
- Is the content still current?
- Is the page or record type correct?
- Are tags and relationships useful?
- Is the visibility correct?
- Is the content safe to use internally or publicly?
- Does the page contain confidential information?
- Does it need legal/commercial review before publication?
- Does it avoid restricted pricing and commercial terms?
- If it supports an Opportunity, are evidence and assumptions separated?
- Is the confidence level explicit?
- Has customer, plant, tender, or opportunity deduplication been considered?

## 8. Pricing And Commercial Information Handling

Do not put pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki knowledge pages.

Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.

General case study benefits may be included when source-backed and non-pricing.

Budget signals from public procurement or investment sources may be recorded as Opportunity evidence when the source is explicit and access control is appropriate.

## 9. Source Link Convention

Private/internal wiki pages may link to internal Google Drive source documents when access is restricted to the intended reviewers.

Public pages must not expose private Drive links. Evidence links are for reviewer traceability, not public publication.

Pricing or commercial sources must not be linked from wiki knowledge pages unless the link is inside a Product Owner/Admin-only document outside the wiki.

## 10. AI Draft Quality Rules

AI-generated draft content must:

- not invent unsupported facts;
- mark uncertain points clearly;
- preserve source references when available;
- separate fact from interpretation;
- separate Opportunity evidence from assumptions;
- avoid over-marketing language in internal wiki;
- avoid public claims unless approved.

## 11. Opportunity Intelligence Workflow

Future flow:

```text
Customer / Plant / Tender / Signal / Solution Record
    -> Evidence Review
    -> Opportunity Candidate
    -> Score And Strategy Draft
    -> Human Review
    -> Approved Action
```

Rules:

- Raw crawled or extracted data must not directly become an approved Opportunity.
- Market signals should first become unverified intelligence records.
- Verified records can be linked to Opportunity candidates.
- Opportunity action requires visible evidence, assumptions, confidence, owner, and review status.

## 12. NOVA Note To Knowledge Workflow

Future flow:

```text
NOVA Take Note
    -> Sales/Presales Note
    -> AI Distillation
    -> Candidate Sales Knowledge Or Opportunity Evidence
    -> Human Review
    -> Approved Knowledge Or Verified Intelligence
```

Example sales knowledge types:

- customer pain;
- buying signal;
- competitor objection;
- pricing sensitivity;
- integration concern;
- industry pattern;
- proposal lesson learned.
