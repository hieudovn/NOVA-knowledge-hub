# Manual Extraction Batch 1.6 EtaPRO Technical Checklist

## Summary

Batch 1.6 used `SRC-ETAPRO-EXTRACT-0003` as a derived review aid to prepare an EtaPRO technical validation checklist.

No wiki content was enriched in this batch. NotebookLM output remains a derived source only and does not validate any wiki claim by itself.

## Derived Source Used

| Source ID | File | Source Kind | Pricing Risk | Use in This Batch |
|---|---|---|---|---|
| `SRC-ETAPRO-EXTRACT-0003` | `03_EtaPRO Technical Section.md` | `derived_source` | Registered as `none`; content review found restricted commercial/licensing-adjacent items to exclude | Candidate technical claim discovery only |

The derived source was used to identify candidate architecture, integration, component, and capability topics. It was not used as final evidence.

## Primary Sources to Validate Against

| Source ID | Title | Current Status | Best Validation Role |
|---|---|---|---|
| `SRC-ETAPRO-DOC-0001` | `Master_EtaPRO_Knowledge` | In progress; already used in Batch 1.2 | High-level platform positioning, core module map, Avenue integration context |
| `SRC-ETAPRO-DOC-0002` | `Toshiba EtaPRO APM Introduction for Customer_r1.pdf` | Not started | Product scope, customer-facing positioning, module boundaries |
| `SRC-ETAPRO-DOC-0003` | `EtaPRO Overview (New March 2025).pdf` | Not started | Product overview, platform positioning, module boundaries |
| `SRC-ETAPRO-DOC-0004` | `EtaPRO technology.pdf` | Not started | Architecture, technology model, integration claims, deployment evidence |
| `SRC-ETAPRO-DOC-0005` | `EtaPRO-Platform-Flysht-2.pdf` | Not started | Platform scope, core capabilities, module boundaries |
| `SRC-ETAPRO-DOC-0006` | `Brochure-EtaPRO-VirtualPlant-_22.pdf` | Not started | Virtual Plant, thermodynamic modeling, performance monitoring |
| `SRC-ETAPRO-DOC-0007` | `EtaPRO-APR-Flysht-1.pdf` | Not started | APR, anomaly detection, condition monitoring, early warning |
| `SRC-ETAPRO-DOC-0008` | `EtaPRO-Predictor-Flysht-1.pdf` | Not started | Predictor, rotating equipment diagnostics, module boundaries |
| `SRC-ETAPRO-DOC-0009` | `EtaPROMonitorDiagnBrochure-2.pdf` | Not started | Monitoring and diagnostics, asset health, condition monitoring scope |
| `SRC-ETAPRO-DOC-0010` | `EtaPRO-FDM-PASS-Product-Info-Sheet-11-_2024.pdf` | Not started | Module terminology and boundaries only; commercial settlement content must be restricted |

## Candidate Technical Claims

| Category | Candidate Claim From Derived Source | Initial Handling |
|---|---|---|
| Architecture layers | EtaPRO may be described through acquisition, data management, analytics/application, and presentation layers. | Validate architecture wording before wiki use. |
| Data acquisition | EtaPRO may collect from DCS, SCADA, PLC/edge devices, and vibration sensors through interface nodes. | Validate against `SRC-ETAPRO-DOC-0004` and `SRC-ETAPRO-DOC-0005`. |
| Data management / historian | EtaPRO Archive may act as the data management or historian component for time-series and calculated results. | Partially supported by `SRC-ETAPRO-DOC-0001`; validate detailed historian claims. |
| Analytics modules | Virtual Plant, APR, Predictor, and customized performance modules are candidate analytics components. | Partially supported by `SRC-ETAPRO-DOC-0001`; validate details per module documents. |
| Presentation / UI | EtaPRO may include desktop client and web/mobile client access. | Still to validate. |
| Integration protocols | Candidate protocols include OPC variants, Modbus, ODBC/OLE DB, DNP 3.0, XML, CSV, and BACnet. | Still to validate; do not add protocol list yet. |
| External system integration | Candidate external systems include PI, Maximo/CMMS, ERP, LIMS, MES, BI tools, and weather services. | Maximo handoff is partially supported by `SRC-ETAPRO-DOC-0001`; other systems still need evidence. |
| Security and access control | Candidate security topics include encrypted communications, certificates, data diode support, Active Directory, SSO, and role-based controls. | Still to validate. |
| Deployment model | Candidate deployment includes on-premises and centrally hosted fleet monitoring, Windows servers, and redundancy. | Still to validate. |
| Main components | Candidate component list includes Archive, Virtual Plant, APR, Predictor, EPLog, EPTrendSetter, EPReporter, and FDM/PASS. | Core four modules are partially supported; utility and FDM/PASS details still need evidence. |
| Functional capabilities | Candidate capabilities include thermal benchmarking, early anomaly warning, vibration spectrum tracking, electronic logs, and reporting. | Partially supported for high-level APM/performance monitoring; detailed functions still need evidence. |
| Differentiators | Candidate differentiators include integrated platform, dual modeling approaches, and automated diagnostics. | Still to validate before any comparison or positioning use. |

## Claim-to-Primary-Source Validation Matrix

| Candidate Claim | Primary Source Target | Classification | Notes |
|---|---|---|---|
| EtaPRO supports a power-generation APM/performance-management platform view. | `SRC-ETAPRO-DOC-0001`, then `SRC-ETAPRO-DOC-0002`, `SRC-ETAPRO-DOC-0003` | `validated_by_primary_source` | Already supported at high level by Batch 1.2; official vendor wording still needs review. |
| Archive, APR, Virtual Plant, and Predictor are core candidate modules. | `SRC-ETAPRO-DOC-0001`, then `SRC-ETAPRO-DOC-0005` to `SRC-ETAPRO-DOC-0008` | `partially_supported` | `SRC-ETAPRO-DOC-0001` supports module map; module boundaries and official names require document-specific validation. |
| EtaPRO has a layered architecture covering acquisition, data management, analytics, and presentation. | `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | `still_to_validate` | Do not use 4-layer architecture wording until primary technical sources confirm it. |
| Data acquisition can include DCS, SCADA, PLC/edge devices, and vibration sensors. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0008` | `partially_supported` | `SRC-ETAPRO-DOC-0001` supports OT/DCS/SCADA/PLC flow; vibration sensor specifics need Predictor or technology evidence. |
| Interface nodes provide buffering, compression, or resilience behavior. | `SRC-ETAPRO-DOC-0004` | `still_to_validate` | Technical architecture detail not validated by Batch 1.2. |
| EtaPRO Archive stores time-series data and calculated results as historian-like data management. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0005` | `partially_supported` | High-level Archive role is supported; storage performance, resolution, and historian replacement claims need primary evidence. |
| Virtual Plant supports thermodynamic modeling and performance target comparison. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0006` | `partially_supported` | High-level role is supported; detailed modeling functions and offline scenario claims need `SRC-ETAPRO-DOC-0006`. |
| APR supports anomaly detection or early warning using historical/normal behavior. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0007` | `partially_supported` | High-level APR role is supported; algorithm, alerting, and scope details need `SRC-ETAPRO-DOC-0007`. |
| Predictor supports vibration diagnostics and rotating equipment health. | `SRC-ETAPRO-DOC-0001`, `SRC-ETAPRO-DOC-0008` | `partially_supported` | Predictor is supported as a candidate module; detailed diagnostic claims need `SRC-ETAPRO-DOC-0008`. |
| Desktop, web, and mobile UI access are supported. | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | `still_to_validate` | Do not add client/browser/mobile claims until primary documentation confirms support. |
| Protocol list includes OPC DA/UA/HDA/A&E, Modbus, ODBC/OLE DB, DNP 3.0, XML, CSV, and BACnet. | `SRC-ETAPRO-DOC-0004` | `still_to_validate` | Protocol-specific claims were explicitly left unresolved in Batch 1.2. |
| Programmatic access includes REST over HTTPS or .NET API. | `SRC-ETAPRO-DOC-0004` | `still_to_validate` | API claims need direct primary source support. |
| EtaPRO can integrate with Maximo/CMMS. | `SRC-ETAPRO-DOC-0001`, then `SRC-ETAPRO-DOC-0004` | `partially_supported` | Avenue Maximo handoff is supported as implementation context; official product integration details remain to validate. |
| EtaPRO can integrate with PI, ERP, LIMS, MES, BI tools, and weather services. | `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | `still_to_validate` | No wiki claim until each integration type is verified. |
| Security includes encryption, certificates, data diode support, Active Directory, SSO, and role-based controls. | `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | `still_to_validate` | Security and access-control details require primary technical evidence. |
| Deployment may be local on-premises or centrally hosted fleet monitoring. | `SRC-ETAPRO-DOC-0004`, `SRC-ETAPRO-DOC-0005` | `still_to_validate` | Batch 1.2 did not validate deployment model. |
| EtaPRO servers run on Microsoft Windows and can use redundant server/interface designs. | `SRC-ETAPRO-DOC-0004` | `still_to_validate` | Infrastructure and high-availability details require primary source evidence. |
| EPLog, EPTrendSetter, EPReporter, and EPAccumulator are product utilities. | `SRC-ETAPRO-DOC-0003`, `SRC-ETAPRO-DOC-0005`, `SRC-ETAPRO-DOC-0009` | `still_to_validate` | Utility names and functions are not validated by `SRC-ETAPRO-DOC-0001`. |
| FDM/PASS exists as a module or product area. | `SRC-ETAPRO-DOC-0010` | `still_to_validate` | Only module identity and boundaries may be validated later; commercial accounting details stay excluded. |
| Unlimited client seats or no-additional-cost licensing. | None for wiki enrichment | `exclude_from_wiki` | Licensing/commercial claim. Do not add to wiki pages. |
| Claims about avoiding expensive historians, reducing specialist cost, cost-benefit analysis, PPA invoices, fixed rates, or settlement payments. | None for wiki enrichment | `exclude_from_wiki` | Commercial, pricing-adjacent, or contractual/accounting content. Restricted to Product Owner/Admin planning only if needed. |
| Claims comparing EtaPRO against competitors or OEM systems. | Future comparison batch only after primary evidence on both sides | `still_to_validate` | Do not update comparison pages or make final differentiator claims yet. |

## Safe Wiki Sections to Update Later

Only after primary-source validation, later EtaPRO wiki updates may safely target:

- `Core Concepts or Capabilities`
- `Architecture Notes`
- `Source-Backed Draft Notes`
- `Document-Level Validation Notes`
- `Open Questions`
- `Extraction TODO`

Comparison pages should remain unchanged until validated evidence exists for EtaPRO and the comparison counterpart.

## Claims Still Needing Evidence

- Official product architecture and layer model.
- Protocol and API support.
- Security and access-control features.
- Deployment model, hosting options, and Windows/infrastructure requirements.
- Redundancy or high-availability architecture.
- UI/client/browser/mobile access.
- EPLog, EPTrendSetter, EPReporter, EPAccumulator names and boundaries.
- FDM/PASS product boundary, with commercial/accounting details excluded.
- Limitations, prerequisites, and system requirements.
- Differentiators and competitor comparisons.

## Claims That Must Stay Excluded

- Licensing model or unlimited-seat claims.
- No-additional-cost claims.
- Cost-effective deployment claims tied to avoiding other purchases.
- PPA settlement payments, fixed rates, invoices, or contractual settlement details.
- Any pricing, discount, quote, proposal price, budgetary price, BOM price, service fee, support fee, training fee, or commercial term.
- Any final competitive claim not validated by primary sources.

## Pricing / Commercial Risk Check

`SRC-ETAPRO-EXTRACT-0003` is registered with `pricing_risk: none` based on the prior filename-level audit. Content review found restricted commercial and licensing-adjacent topics inside the file.

For wiki enrichment, treat the file as mixed technical and restricted commercial content:

- use technical architecture and capability candidates only as validation prompts;
- exclude licensing, no-additional-cost, cost, payment, invoice, settlement, and contractual language;
- do not use any restricted content for public or internal wiki knowledge enrichment;
- keep any commercial use restricted to Product Owner/Admin planning outside the wiki.

## Recommended Wiki Update Plan

1. Validate architecture, protocol, deployment, security, and UI claims against `SRC-ETAPRO-DOC-0004`.
2. Validate platform scope and utility components against `SRC-ETAPRO-DOC-0005`.
3. Validate Virtual Plant, APR, and Predictor module claims against `SRC-ETAPRO-DOC-0006`, `SRC-ETAPRO-DOC-0007`, and `SRC-ETAPRO-DOC-0008`.
4. Validate monitoring/diagnostics and asset health claims against `SRC-ETAPRO-DOC-0009`.
5. Review `SRC-ETAPRO-DOC-0010` only for FDM/PASS terminology and product boundary; exclude settlement, invoice, rate, or commercial content.
6. Update `content/wiki/solutions/etapro.md` only with concise paraphrased facts tied to primary document IDs.

## Validation Result

Passed. `npm.cmd run validate:metadata` validated metadata for 32 wiki pages.

## Build Result

Passed. `npm.cmd run build` completed the Docusaurus production build and generated static files in `apps/wiki/build`.

## Next Recommended Batch

Manual Extraction Batch 1.7 should validate EtaPRO architecture and integration claims against `SRC-ETAPRO-DOC-0004` (`EtaPRO technology.pdf`) before updating the EtaPRO solution page.
