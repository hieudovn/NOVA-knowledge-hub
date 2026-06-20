# Manual Extraction Batch 1.1 Source Audit Plan

## Summary

Manual Extraction Batch 1.1 prepares validation of Batch 1 draft facts by auditing the registered product-specific source folders for IDBoxRT, Canary, AVEVA PI, and EtaPRO.

This batch does not extract new wiki content. It records the source-folder audit approach, the draft facts that need validation, and the document-level source ID scheme to use once exact documents are confirmed.

The project flow remains:

Google Sheet -> product source folder audit -> source-backed draft validation -> human review.

## Product Source Folders to Audit

| Product | Folder Source ID | Registry Title | Validation Target Page | Batch 1.1 Inventory Note |
|---|---|---|---|---|
| IDBoxRT | `SRC-APM-IIOT-0011` | IDBoxRT | `content/wiki/solutions/idboxrt.md` | Top-level folder taxonomy found; document inventory remains pending. |
| Canary | `SRC-APM-IIOT-0010` | Canary | `content/wiki/solutions/canary.md` | Top-level folder taxonomy found; document inventory remains pending. |
| AVEVA PI | `SRC-APM-IIOT-0008` | AVEVA PI | `content/wiki/solutions/aveva-pi.md` | Top-level folder taxonomy found; document inventory remains pending. |
| EtaPRO | `SRC-APM-IIOT-0007` | EtaPRO | `content/wiki/solutions/etapro.md` | One exact top-level document candidate found: `Master_EtaPRO_Knowledge`; not reviewed in this batch. |

All four folder sources are marked in the registry with `document_inventory_status: pending_document_audit`.

## Draft Facts Needing Validation

| Product | Batch 1 Draft Facts to Validate |
|---|---|
| IDBoxRT | General concept, vendor, problems solved, core capabilities, typical use cases, integration relevance, deployment model, IIoT / operational intelligence / historian positioning, limitations. |
| Canary | General concept, vendor, problems solved, historian capabilities, typical use cases, integration relevance, deployment model, historian positioning, product limits. |
| AVEVA PI | General concept, vendor context, problems solved, PI component boundaries, typical use cases, integration relevance, deployment model, historian positioning, current product naming. |
| EtaPRO | General concept, vendor, problems solved, APM and performance monitoring capabilities, typical use cases, integration relevance, deployment model, module boundaries, limitations. |

## Document Types to Look For

During Batch 1.2, audit each product folder for exact documents that can validate or reject Batch 1 draft facts:

- Product overview or solution brief.
- Architecture or deployment guide.
- Datasheet or technical specification.
- Integration or connector guide.
- Module guide or feature overview.
- Supported protocol or interface matrix.
- Use-case or industry application note.
- Security, deployment, or system requirement note.
- Known limitation or release note.

Restricted commercial material should be identified only as excluded material and must not be extracted into wiki pages.

## Suggested Document-Level Source ID Scheme

Use product-specific document IDs after exact document titles and Drive URLs are confirmed:

| Product Folder Source | First Document ID | Example Progression |
|---|---|---|
| `SRC-APM-IIOT-0011` | `SRC-IDBOXRT-DOC-0001` | `SRC-IDBOXRT-DOC-0002`, `SRC-IDBOXRT-DOC-0003` |
| `SRC-APM-IIOT-0010` | `SRC-CANARY-DOC-0001` | `SRC-CANARY-DOC-0002`, `SRC-CANARY-DOC-0003` |
| `SRC-APM-IIOT-0008` | `SRC-AVEVA-PI-DOC-0001` | `SRC-AVEVA-PI-DOC-0002`, `SRC-AVEVA-PI-DOC-0003` |
| `SRC-APM-IIOT-0007` | `SRC-ETAPRO-DOC-0001` | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003` |

Do not create document-level entries from folder names alone. Create entries only when an exact document title, document type, Drive URL, and Drive ID are known.

Known candidate from Batch 1.1 metadata listing:

| Proposed Source ID | Product | Exact Document Title | Status |
|---|---|---|---|
| `SRC-ETAPRO-DOC-0001` | EtaPRO | `Master_EtaPRO_Knowledge` | Discovered, not reviewed, not extracted. |

## Product-by-Product Audit Checklist

### IDBoxRT

- Confirm exact documents inside `SRC-APM-IIOT-0011`.
- Identify authoritative product overview material.
- Identify architecture and deployment material.
- Identify integration, protocol, and interface material.
- Identify limitation or requirement material.
- Map each confirmed document to `content/wiki/solutions/idboxrt.md`.

### Canary

- Confirm exact documents inside `SRC-APM-IIOT-0010`.
- Identify authoritative historian overview material.
- Identify architecture, storage, and deployment material.
- Identify collector, integration, and data access material.
- Identify limitation or product boundary material.
- Map each confirmed document to `content/wiki/solutions/canary.md`.

### AVEVA PI

- Confirm exact documents inside `SRC-APM-IIOT-0008`.
- Identify authoritative product naming and component material.
- Identify architecture, deployment, and data access material.
- Identify interface, connector, and visualization material.
- Identify current portfolio boundary material.
- Map each confirmed document to `content/wiki/solutions/aveva-pi.md`.

### EtaPRO

- Confirm whether `Master_EtaPRO_Knowledge` is suitable as `SRC-ETAPRO-DOC-0001`.
- Identify authoritative module and architecture material.
- Identify deployment and integration material.
- Identify performance monitoring, condition monitoring, and rotating equipment material.
- Identify limitation or product boundary material.
- Map each confirmed document to `content/wiki/solutions/etapro.md`.

## Restricted Content Handling

- Do not copy raw confidential documents into the repository.
- Do not extract pricing, licensing, or commercial terms.
- Do not extract from restricted commercial folders.
- If a document is restricted or commercial, record only that it is excluded from M2-lite validation.
- Keep source metadata in the registry; keep extracted facts in private draft wiki pages only after validation.

## What Not to Extract

- Public web content or scraped website material.
- Reference URLs from the Batch 1 Google Sheet as primary evidence.
- Pricing, licensing, discounts, proposal terms, or commercial positioning.
- Final vendor claims, competitive conclusions, or replacement claims.
- CRM, public portal, landing page, AI chat, Knowledge Graph, Modes, Skills execution, AI orchestration, backend, database, API, authentication, crawler, or SaaS scope.

## Acceptance Criteria for Batch 1.2

- Exact product documents are inventoried before content validation begins.
- Each document-level source entry has a real title, type, Drive URL, and Drive ID.
- Batch 1 draft facts are validated, revised, or marked `To validate` using product-specific sources.
- All updated wiki pages remain `draft`, `private`, and `confidence: low`.
- Every retained fact references a concrete source ID.
- No pricing, licensing, or commercial content is extracted.
- No public web enrichment or scraping is introduced.
- Comparison pages remain conservative until both sides have reviewed evidence.
- Human review remains required before any page moves beyond `draft`.

## Next Recommended Batch

Manual Extraction Batch 1.2 - Product-Specific Draft Fact Validation.

Recommended scope:

- Complete document inventories for `SRC-APM-IIOT-0011`, `SRC-APM-IIOT-0010`, `SRC-APM-IIOT-0008`, and `SRC-APM-IIOT-0007`.
- Create document-level source entries only for exact confirmed documents.
- Validate Batch 1 draft facts against the confirmed product documents.
- Update only the four target solution pages unless a directly necessary correction is identified.
- Keep comparison pages unchanged until a later comparison-focused validation batch.
