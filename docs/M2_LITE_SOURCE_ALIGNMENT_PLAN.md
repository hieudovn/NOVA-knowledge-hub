# M2-lite Source Alignment Plan

## Summary

M2-lite prepares NOVA Knowledge Hub for source-backed manual extraction by aligning the APM & IIoT source registry with the draft wiki pages.

The registry now includes extraction status, related wiki pages, and handling notes. No raw source document content was added to the repository. Wiki solution pages already had the required `source_refs`, so no wiki page front matter changes were needed.

## Source Registry Current State

Primary registry:

- `registry/sources-apm-iiot.yaml`

Related registry stub:

- `registry/sources-ibm-mas.yaml`

Current state:

- Domain source `SRC-DOMAIN-APM-IIOT` is registered for the Google Drive folder `APM & IIoT Solutions`.
- Source IDs `SRC-APM-IIOT-0001` through `SRC-APM-IIOT-0011` remain stable.
- Existing Drive URLs and Drive IDs are preserved.
- Optional fields were added for extraction readiness:
  - `related_pages`
  - `extraction_status`
  - `notes`
- All extraction statuses are `not_started` except the restricted pricing source, which is `deferred_restricted`.
- IBM MAS references now have a registered source-domain home through `SRC-PORTFOLIO-IBM-MAS`; exact IBM MAS source folders or documents still need to be registered later.

## High Priority Sources

Priority 1 manual extraction sources:

| Source ID | Title | Priority | Primary Wiki Target |
|---|---|---|---|
| `SRC-APM-IIOT-0011` | IDBoxRT | high | `content/wiki/solutions/idboxrt.md` |
| `SRC-APM-IIOT-0010` | Canary | high | `content/wiki/solutions/canary.md` |
| `SRC-APM-IIOT-0008` | AVEVA PI | high | `content/wiki/solutions/aveva-pi.md` |
| `SRC-APM-IIOT-0007` | EtaPRO | high | `content/wiki/solutions/etapro.md` |
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | high | capability matrix and portfolio landscape pages |

Priority 2 manual extraction sources:

| Source ID | Title | Priority | Primary Wiki Target |
|---|---|---|---|
| `SRC-APM-IIOT-0005` | AVEVA APM | medium | `content/wiki/solutions/aveva-apm.md` |
| `SRC-APM-IIOT-0006` | Litmus Edge | medium | `content/wiki/solutions/litmus-edge.md` |
| `SRC-APM-IIOT-0003` | AI PlantOps | medium | `content/wiki/solutions/ai-plantops.md` |

Deferred or later review:

| Source ID | Title | Reason |
|---|---|---|
| `SRC-APM-IIOT-0004` | Luca BDS | Registered source, no M1 page yet |
| `SRC-APM-IIOT-0009` | Retina360 | Registered source, no M1 page yet |
| `SRC-APM-IIOT-0002` | APM & IIoT Solutions Pricing Structure | Restricted pricing source |

## Source-to-Wiki Page Mapping

| Source ID | Source Title | Related Wiki Pages |
|---|---|---|
| `SRC-DOMAIN-APM-IIOT` | APM & IIoT Solutions | Wiki index pages, capability pages, pattern pages, comparison pages, tender pages |
| `SRC-APM-IIOT-0001` | AVENUE APM & IIoT Solutions | `solutions/index.md`, `capabilities/apm.md`, `capabilities/iiot-platform.md`, `capabilities/industrial-historian.md`, `comparisons/apm-solution-landscape.md`, `tender/apm-iiot-compliance-notes.md` |
| `SRC-APM-IIOT-0003` | AI PlantOps | `solutions/ai-plantops.md`, `capabilities/iiot-platform.md`, `patterns/scada-dcs-data-ingestion.md`, `patterns/edge-to-center.md` |
| `SRC-APM-IIOT-0005` | AVEVA APM | `solutions/aveva-apm.md`, `capabilities/apm.md`, `capabilities/condition-monitoring.md`, `comparisons/apm-solution-landscape.md`, `tender/apm-requirement-mapping.md` |
| `SRC-APM-IIOT-0006` | Litmus Edge | `solutions/litmus-edge.md`, `capabilities/iiot-platform.md`, `patterns/edge-to-center.md`, `patterns/opc-ua-integration.md`, `patterns/mqtt-sparkplug.md` |
| `SRC-APM-IIOT-0007` | EtaPRO | `solutions/etapro.md`, `capabilities/apm.md`, `capabilities/condition-monitoring.md`, `comparisons/etapro-vs-mas-apm.md`, `comparisons/apm-solution-landscape.md`, `tender/apm-requirement-mapping.md` |
| `SRC-APM-IIOT-0008` | AVEVA PI | `solutions/aveva-pi.md`, `capabilities/industrial-historian.md`, `comparisons/canary-vs-aveva-pi.md`, `tender/historian-requirement-mapping.md`, `patterns/historian-to-apm.md` |
| `SRC-APM-IIOT-0010` | Canary | `solutions/canary.md`, `capabilities/industrial-historian.md`, `comparisons/canary-vs-aveva-pi.md`, `tender/historian-requirement-mapping.md`, `patterns/scada-dcs-data-ingestion.md` |
| `SRC-APM-IIOT-0011` | IDBoxRT | `solutions/idboxrt.md`, `capabilities/iiot-platform.md`, `comparisons/idboxrt-vs-historian.md`, `patterns/edge-to-center.md`, `patterns/scada-dcs-data-ingestion.md`, `tender/apm-iiot-compliance-notes.md` |

## Manual Extraction Order

Recommended first manual extraction batch:

1. `SRC-APM-IIOT-0011` - IDBoxRT
2. `SRC-APM-IIOT-0010` - Canary
3. `SRC-APM-IIOT-0008` - AVEVA PI
4. `SRC-APM-IIOT-0007` - EtaPRO
5. `SRC-APM-IIOT-0001` - AVENUE APM & IIoT Solutions

Recommended second manual extraction batch:

1. `SRC-APM-IIOT-0005` - AVEVA APM
2. `SRC-APM-IIOT-0006` - Litmus Edge
3. `SRC-APM-IIOT-0003` - AI PlantOps

Defer until a page is needed:

- `SRC-APM-IIOT-0004` - Luca BDS
- `SRC-APM-IIOT-0009` - Retina360

Do not extract into wiki during M2-lite:

- `SRC-APM-IIOT-0002` - APM & IIoT Solutions Pricing Structure

## Pages Needing Better Source References

No required solution-page mapping gaps were found for the specified APM & IIoT sources:

- IDBoxRT references `SRC-APM-IIOT-0011`.
- Canary references `SRC-APM-IIOT-0010`.
- AVEVA PI references `SRC-APM-IIOT-0008`.
- EtaPRO references `SRC-APM-IIOT-0007`.
- AVEVA APM references `SRC-APM-IIOT-0005`.
- Litmus Edge references `SRC-APM-IIOT-0006`.
- AI PlantOps references `SRC-APM-IIOT-0003`.

Follow-up source reference needs:

- `content/wiki/solutions/ibm-mas.md`, `content/wiki/patterns/maximo-integration.md`, and `content/wiki/comparisons/etapro-vs-mas-apm.md` reference `SRC-PORTFOLIO-IBM-MAS`, which now has a stub registry file at `registry/sources-ibm-mas.yaml`.
- Exact IBM MAS source folders/documents still need to be registered later; no raw IBM MAS source content has been added to the repository.
- `content/wiki/capabilities/condition-monitoring.md` and `content/wiki/capabilities/predictive-maintenance.md` currently use the domain-level source. Add more specific solution source refs after manual extraction identifies supporting sources.
- Luca BDS and Retina360 are registered sources but do not yet have M1 wiki pages. Defer page creation until manual extraction confirms M1 technical relevance.

## Restricted Source Handling

`SRC-APM-IIOT-0002` remains:

- `confidentiality: restricted`
- `extraction_priority: low`
- `extraction_status: deferred_restricted`

Handling rules:

- Do not extract pricing, licensing, or commercial terms into wiki pages during M2-lite.
- Do not paste raw spreadsheet content into the repository.
- Keep any future pricing notes private, restricted, and separate from solution, comparison, tender, or public-facing knowledge.

## Acceptance Criteria for Manual Extraction

A manual extraction pass is acceptable when:

- Extracted notes are added only to relevant draft/private wiki pages.
- Each claim is tied to a `source_id` from the registry or clearly marked as an open question.
- No raw confidential documents are copied into the repository.
- No pricing, licensing, or restricted commercial details are added to wiki pages.
- Page status remains `draft` until human review.
- Page visibility remains `private`.
- Comparison pages keep `To validate` language until both sides have reviewed evidence.
- Tender pages do not mark requirements as compliant without source-backed evidence.
- `npm.cmd run validate:metadata` passes.
- `npm.cmd run build` passes.

## Next Batch Recommendation

Next batch: first manual extraction preparation for high-priority solution pages.

Recommended scope:

- Add extraction TODO markers to IDBoxRT, Canary, AVEVA PI, EtaPRO, and related capability pages.
- Extract only short, source-backed notes from `SRC-APM-IIOT-0011`, `SRC-APM-IIOT-0010`, `SRC-APM-IIOT-0008`, and `SRC-APM-IIOT-0007`.
- Update comparison tables only after both compared sources have reviewed notes.
- Keep all pages draft/private and confidence low until human review.
