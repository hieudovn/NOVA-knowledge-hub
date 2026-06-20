# Content Workflow

## 1. Workflow Principle

The Knowledge Hub must distinguish between:

- raw source;
- extracted draft;
- reviewed knowledge;
- approved knowledge;
- public content.

AI may generate drafts, but only humans approve official knowledge.

---

## 2. Content Lifecycle

```text
Raw Source
    ↓
Extracted Text
    ↓
AI Draft
    ↓
Human Review
    ↓
Approved Wiki
    ↓
Selected Public Content
    ↓
Landing Page
```

---

## 3. Status Values

### Draft

Initial content created by human or AI.

Draft content may contain:

- incomplete extraction;
- unverified assumptions;
- AI mistakes;
- missing citations.

It must not be used as official source of truth.

### Reviewed

Content has been checked but is not yet official.

Useful for:

- personal working knowledge;
- candidate articles;
- partial validation.

### Approved

Content has been accepted as operational knowledge.

AI Q&A should prefer approved content.

### Public

Content is approved for external publication.

Public content may feed:

- website pages;
- landing pages;
- external Q&A;
- sales collateral.

---

## 4. Visibility Values

### Private

Only personal owner/admin can access.

### Internal

Internal team can access.

### Partner

Selected partners can access.

### Public

External visitors can access.

---

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

---

## 6. Recommended Folder Structure

```text
content/
├─ draft/
│  ├─ solutions/
│  ├─ industries/
│  ├─ capabilities/
│  ├─ patterns/
│  ├─ tender/
│  └─ sales-knowledge/
│
├─ approved/
│  ├─ solutions/
│  ├─ industries/
│  ├─ capabilities/
│  ├─ patterns/
│  ├─ tender/
│  └─ sales-knowledge/
│
└─ public/
   ├─ solutions/
   ├─ industries/
   ├─ insights/
   └─ landing-candidates/
```

---

## 7. Landing Page Curation

Landing pages must be generated from selected approved/public wiki content.

Do not create landing pages as independent knowledge sources.

A page can be selected for landing page use when:

```yaml
status: "approved"
visibility: "public"
landing_candidate: true
```

---

## 8. Review Checklist

Before approving a wiki page, verify:

- Is the source clear?
- Is the claim supported?
- Is the content still current?
- Is the page type correct?
- Are tags useful?
- Is the visibility correct?
- Is the content safe to use internally or publicly?
- Does the page contain confidential information?
- Does it need legal/commercial review before publication?
- Does the page avoid pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, fees, and commercial terms?

### Pricing and Commercial Information Handling

Do not put pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki knowledge pages.

Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.

General case study benefits may be included when source-backed and non-pricing. This includes avoided cost, savings, ROI, efficiency improvement, downtime reduction, production gain, or maintenance cost avoidance, provided no specific vendor pricing, license fees, discounts, proposal prices, or commercial terms are disclosed.

If a source mixes pricing and technical knowledge, extract only technical knowledge into wiki pages and mark pricing sections as excluded/restricted.

---

### Source Link Convention

Private/internal wiki pages may link to internal Google Drive source documents when access is restricted to the intended reviewers.

Public pages must not expose private Drive links. Evidence links are for reviewer traceability, not public publication.

Pricing or commercial sources must not be linked from wiki knowledge pages unless the link is inside a Product Owner/Admin-only document outside the wiki.

---

## 9. AI Draft Quality Rules

AI-generated draft content must:

- not invent unsupported facts;
- mark uncertain points clearly;
- preserve source references when available;
- separate fact from interpretation;
- avoid over-marketing language in internal wiki;
- avoid public claims unless approved.

---

## 10. NOVA Note to Knowledge Workflow

Future flow:

```text
NOVA Take Note
    ↓
Sales/Presales Note
    ↓
AI Distillation
    ↓
Candidate Sales Knowledge Page
    ↓
Human Review
    ↓
Approved Knowledge Hub Article
```

Example sales knowledge types:

- customer pain;
- buying signal;
- competitor objection;
- pricing sensitivity;
- integration concern;
- industry pattern;
- proposal lesson learned.
