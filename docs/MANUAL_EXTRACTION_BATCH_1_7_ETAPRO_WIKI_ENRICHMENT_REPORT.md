# Manual Extraction Batch 1.7 EtaPRO Wiki Enrichment Report

## Summary

Batch 1.7 enriched `content/wiki/solutions/etapro.md` from a mostly placeholder/source-list page into a useful draft technical solution page.

The page remains M2-compliant: draft, private, low confidence, source-backed, and conservative. No comparison pages, capability pages, backend, AI, public portal, CRM, crawler, or M3 scope were added.

## Page Updated

| Page | Update Type | Status |
|---|---|---|
| `content/wiki/solutions/etapro.md` | Product wiki enrichment pilot | Updated |

Front matter remains:

- `status: draft`
- `visibility: private`
- `confidence: low`

## Source IDs Used

| Source ID | Use |
|---|---|
| `SRC-APM-IIOT-0001` | Original Batch 1 portfolio extraction context |
| `SRC-APM-IIOT-0007` | EtaPRO parent source folder |
| `SRC-ETAPRO-DOC-0001` | High-level product positioning, Avenue integration context, module map |
| `SRC-ETAPRO-DOC-0002` | APM overview, stakeholders, use cases, module families |
| `SRC-ETAPRO-DOC-0003` | Product overview, analytics spectrum, embedded apps, user experience |
| `SRC-ETAPRO-DOC-0004` | Architecture, Client/Server deployment, interfaces, modules; commercial sections excluded |
| `SRC-ETAPRO-DOC-0005` | Platform scope, Archive, reporting, web/mobile access |
| `SRC-ETAPRO-DOC-0006` | VirtualPlant module and thermodynamic modeling |
| `SRC-ETAPRO-DOC-0007` | APR module and anomaly detection; savings examples excluded |
| `SRC-ETAPRO-DOC-0008` | Predictor module and rotating machinery diagnostics |
| `SRC-ETAPRO-DOC-0009` | Monitoring and Diagnostic Center workflows |

## Derived Sources Used as Review Aids

| Source ID | Use | Evidence Status |
|---|---|---|
| `SRC-ETAPRO-EXTRACT-0003` | Helped organize candidate technical topics and architecture checklist | Derived review aid only; not used as primary evidence |

## Sections Added

- `Executive Summary`
- `Product Positioning`
- `Architecture Overview`
- `Core Modules`
- `Integration Notes`
- `Deployment Notes`
- `Typical Use Cases`
- `Evidence Sources`
- expanded `Source-Backed Draft Notes`
- expanded `Document-Level Validation Notes`
- `Open Questions`
- `Excluded Content`

## Mermaid / Visual Content Added

Added one conceptual fenced `mermaid` diagram for EtaPRO data flow:

- Plant OT systems
- Data acquisition / interfaces
- EtaPRO Archive / data management
- EtaPRO analytics modules
- VirtualPlant
- APR
- Predictor
- users and external systems

The current Docusaurus config does not explicitly enable Mermaid rendering, so the page includes:

`TODO: Enable Mermaid rendering in Docusaurus if needed.`

No copied images or binary image files were added.

## Claims Added

| Claim Area | Evidence |
|---|---|
| EtaPRO as a power-generation performance and condition monitoring platform | `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005` |
| Archive / EPArchive as data management and historian-like foundation | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` |
| VirtualPlant as thermodynamic modeling and what-if / performance-target capability | `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0006` |
| APR as anomaly detection using empirical models of normal operation | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0007` |
| Predictor as rotating machinery diagnostics and AutoDiagnosis-oriented module | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0008` |
| Client/Server architecture and centralized/decentralized topology options | `SRC-ETAPRO-DOC-0004` |
| Web/mobile access and user-facing tools | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` |
| M&D monitoring workflows | `SRC-ETAPRO-DOC-0009` |

## Claims Still To Validate

- Official vendor / product ownership wording.
- Exact standard versus optional module boundaries.
- Deployment models, cloud/hosted wording, and infrastructure requirements.
- Protocol/API completeness, including OPC UA and REST/.NET claims.
- Cybersecurity, authentication, SSO, data diode, and network-zone details.
- Limitations, prerequisites, exclusions, and system requirements.
- IBM MAS comparison criteria.
- FDM/PASS product boundary without commercial/accounting details.

## Excluded Pricing / Commercial Content

Excluded from the wiki page:

- pricing;
- licensing;
- discounts;
- quotes;
- proposal prices;
- budgetary prices;
- BOM prices;
- service/support/training fees;
- commercial terms;
- commercial-accounting details;
- contract/payment/invoice/settlement/rate details;
- savings amounts and payback figures.

Commercial information remains restricted to Product Owner/Admin use for BOM building, budget estimation, proposal estimation, or internal commercial planning.

## Validation Result

Passed. `npm.cmd run validate:metadata` validated metadata for 32 wiki pages.

## Build Result

Passed. `npm.cmd run build` completed successfully and generated static files in `apps/wiki/build`.

## Next Recommended Batch

Manual Extraction Batch 1.8 should validate EtaPRO deployment, protocol/API, cybersecurity, and system requirement details against `SRC-ETAPRO-DOC-0004` and any exact vendor technical installation or architecture documents identified later.
