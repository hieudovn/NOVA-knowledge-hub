# Manual Extraction Batch 1.2 EtaPRO Validation Report

## Summary

Manual Extraction Batch 1.2 used EtaPRO as the first controlled document-level validation pilot.

The pilot confirmed that `Master_EtaPRO_Knowledge` is accessible and suitable as a document-level source for validating selected Batch 1 EtaPRO draft facts. The EtaPRO page remains draft, private, and low confidence. No comparison pages, capability pages, backend scope, public web enrichment, or commercial content were added.

## Document Reviewed

| Source ID | Title | Type | Parent Source | Review Status |
|---|---|---|---|---|
| `SRC-ETAPRO-DOC-0001` | Master_EtaPRO_Knowledge | Google Doc | `SRC-APM-IIOT-0007` | Accessible; used for pilot validation |

The document was reviewed through the Google Docs connector. Raw document content was not copied into the repository.

## Registry Updates

- Added `document_sources` in `registry/sources-apm-iiot.yaml`.
- Promoted `SRC-ETAPRO-DOC-0001` as a formal document-level source.
- Preserved the parent folder source `SRC-APM-IIOT-0007` and its existing Drive URL.
- Updated the prior EtaPRO candidate status to show that it was promoted to a document source.

## EtaPRO Page Updates

Updated `content/wiki/solutions/etapro.md`:

- Added `SRC-ETAPRO-DOC-0001` to `source_refs`.
- Added `Document-Level Validation Notes`.
- Added `Document Coverage`.
- Added `Validated / Refined Draft Facts`.
- Added unresolved questions and deferred items.

## Facts Validated

- EtaPRO can continue to be treated as an APM and performance-management candidate for power-generation operations.
- The document supports a power-generation focus for EtaPRO validation.
- The document is useful as a first validation source but does not remove the need for human review.

## Facts Refined

- General concept was refined from broad O&M optimization to EtaPRO as an APM platform focused on power-generation asset performance, predictive maintenance, and O&M optimization.
- Vendor wording was refined to match the document's Toshiba Energy Systems & Solutions context, with official wording still requiring vendor confirmation.
- Core capabilities were refined around Archive, APR, Virtual Plant, and Predictor as candidate module concepts.
- Integration relevance was refined toward an Avenue implementation view involving OT systems, DCS/SCADA/PLC data flow, EtaPRO analytics modules, and Maximo handoff.
- Typical use cases were narrowed: thermal, gas, hydro, wind, and solar were supported by this document; geothermal, nuclear, and industrial co-generation remain unresolved.

## Facts Still To Validate

- Official module names and product boundaries.
- Deployment model, including on-premises or cloud claims.
- Protocol-specific integrations such as OPC UA, Modbus, PI, and Bently Nevada 3500.
- Limitations, prerequisites, and system requirements.
- Outage reporting and availability-reporting details.
- Geothermal, nuclear, industrial co-generation, and broader utility contexts.
- Comparison criteria against IBM MAS APM.

## Excluded / Restricted Content

- Pricing, licensing, discounts, proposal terms, and commercial content were not extracted.
- Reference URLs from the Batch 1 Google Sheet were not used as extraction sources.
- No public websites were scraped.
- No raw confidential document text was copied into the repository.
- IBM MAS comparison remains deferred.

## Validation Result

Command:

```powershell
cd apps\wiki
npm.cmd run validate:metadata
```

Result: Passed.

Validated metadata for 32 wiki pages.

## Build Result

Command:

```powershell
cd apps\wiki
npm.cmd run build
```

Result: Passed.

Docusaurus production build completed successfully with no broken-link failures.

## Lessons for Next Product Validation

- Promote a document candidate only after connector access confirms exact title and Drive ID.
- Keep document-level validation separate from Batch 1 sheet extraction.
- Use `Validated by source`, `Refined by source`, `Still to validate`, and `Not supported by this document` labels to avoid overstating evidence.
- Treat internal product packaging and Avenue positioning as useful context, not final vendor truth.
- Keep protocol, deployment, limitation, and comparison claims unresolved until document-specific evidence supports them.

## Next Recommended Batch

Manual Extraction Batch 1.3 - Continue product-specific validation.

Recommended scope:

- Complete EtaPRO document inventory inside `SRC-APM-IIOT-0007`.
- Identify EtaPRO technical architecture, integration, deployment, and limitation documents.
- Start the same document-level validation workflow for Canary or AVEVA PI after exact source documents are confirmed.
- Keep comparison pages unchanged until both sides of a comparison have reviewed document-level sources.
