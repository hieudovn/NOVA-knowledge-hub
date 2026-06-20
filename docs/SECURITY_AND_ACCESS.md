# Security and Access v0.1

## 1. Security Principle

Start simple, but do not ignore security.

The early system is personal-first, but the data model must be ready for internal and public access later.

---

## 2. Access Phases

### Phase 1 — Personal

Only one user:

- admin: Hieu

No public registration.
No public AI Q&A.
No external users.

### Phase 2 — Selected Internal Users

Roles:

- admin
- editor
- viewer

Admin creates users manually by email.

### Phase 3 — Approved External Users

External users may register, but require approval.

### Phase 4 — Public Guest Access

Public guests may browse public content and ask a limited number of questions.

Guest AI Q&A must be quota-controlled.

---

## 3. Roles

### Admin

Can:

- manage users
- manage roles
- manage AI provider settings
- approve content
- publish content
- view logs
- configure quotas

### Editor

Can:

- create draft pages
- edit draft/reviewed pages
- run extraction jobs if allowed
- propose public pages

Cannot:

- change system settings
- approve own content unless allowed
- manage AI keys

### Viewer

Can:

- read allowed wiki content
- ask AI within quota if enabled

### External Approved User

Future role.

Can:

- access assigned public/partner knowledge
- ask limited AI questions

### Guest

Future role.

Can:

- view public pages
- ask 3–5 limited questions before lead capture

---

## 4. Content Visibility

```text
private  -> owner/admin only
internal -> selected internal users
partner  -> approved partners/customers
public   -> public website
```

Visibility is independent from status.

A page can be approved but still private.

---

## 5. AI Access Control

AI access must be controlled separately from wiki read access.

Example future policy:

```text
Admin: configurable/unlimited
Editor: high quota
Viewer: moderate quota
External: limited quota
Guest: 3–5 questions
```

Phase 1 only needs admin usage tracking.

---

## 6. Token and Cost Protection

Required before public launch:

- per-user quota
- guest session quota
- IP/session rate limit
- max question length
- max answer length
- blocked out-of-scope questions
- token usage logs
- admin kill switch for public AI Q&A

---

## 7. Secrets Management

Never commit API keys.

Use:

- `.env` locally
- `.env.example` without secrets
- server-side environment variables on VPS

Secrets include:

- OpenAI API key
- DeepSeek API key
- Gemini API key
- database password
- JWT/session secret
- email/SMS provider keys later

---

## 8. Confidentiality Levels

Sources and pages should support confidentiality levels:

```text
public
internal
confidential
restricted
```

Rules:

- confidential sources should not generate public content without manual review
- restricted sources should not be used in public Q&A
- tender documents are restricted by default
- pricing and proposal strategy are restricted by default

### Pricing and Commercial Information Handling

Pricing and commercial information is restricted even when the wiki itself is private/internal.

Do not place pricing, licensing, discounts, commercial quotes, proposal prices, budgetary prices, BOM prices, service fees, support fees, training fees, or commercial terms into wiki knowledge pages.

Pricing information may only be used by the Product Owner/Admin for BOM building, budget estimation, proposal estimation, or internal commercial planning.

Case study benefits may remain in wiki pages only when they are source-backed and non-pricing, such as avoided cost, savings, ROI, efficiency improvement, downtime reduction, production gain, or maintenance cost avoidance without specific vendor pricing, license fees, discounts, proposal prices, or commercial terms.

If a source mixes pricing and technical knowledge, extract only the technical knowledge into wiki pages and mark pricing sections as excluded/restricted.

Any pricing source must remain restricted and must not be used for public/internal wiki knowledge enrichment.

---

## 9. Audit Log

Future system should log:

- login events
- content changes
- approval events
- publishing events
- AI query usage
- extraction jobs
- user role changes

---

## 10. Public Q&A Lead Flow

Future public flow:

```text
Guest visits public page
  -> asks 3–5 questions
  -> quota reached
  -> lead form shown
  -> sales handoff
  -> admin/sales approves extended access if needed
```

This is not required in personal MVP.

---

## 11. Anti-Patterns

Avoid:

- exposing raw confidential sources to public users
- unlimited public AI chat
- storing API keys in frontend code
- making all approved content public by default
- allowing AI to answer from internal pages for guest users
- skipping audit logs when team access is introduced
