# Manual Extraction Batch 1 Report

## Summary

Manual Extraction Batch 1 prepared the high-priority APM & IIoT solution pages for source-backed manual extraction.

Exact source documents were not available locally, so no vendor facts were extracted. The work added structured extraction TODO sections, evidence placeholders, capability pointers, and comparison TODO notes only.

## Sources Covered

| Source ID | Source Title | Registry Status | Result |
|---|---|---|---|
| `SRC-APM-IIOT-0011` | IDBoxRT | planned | Extraction scaffolding added to the solution page. |
| `SRC-APM-IIOT-0010` | Canary | planned | Extraction scaffolding added to the solution page. |
| `SRC-APM-IIOT-0008` | AVEVA PI | planned | Extraction scaffolding added to the solution page. |
| `SRC-APM-IIOT-0007` | EtaPRO | planned | Extraction scaffolding added to the solution page. |

## Pages Updated

Solution pages:

- `content/wiki/solutions/idboxrt.md`
- `content/wiki/solutions/canary.md`
- `content/wiki/solutions/aveva-pi.md`
- `content/wiki/solutions/etapro.md`

Capability pages:

- `content/wiki/capabilities/iiot-platform.md`
- `content/wiki/capabilities/industrial-historian.md`
- `content/wiki/capabilities/apm.md`

Comparison pages:

- `content/wiki/comparisons/canary-vs-aveva-pi.md`
- `content/wiki/comparisons/idboxrt-vs-historian.md`
- `content/wiki/comparisons/etapro-vs-mas-apm.md`

Registry:

- `registry/sources-apm-iiot.yaml`

## Claims Added

No new source-backed vendor claims were added.

Each solution page now contains an `Evidence-Backed Draft Facts` table with a placeholder row stating that no source-backed facts have been extracted yet.

## Open Questions

- Which exact documents inside each registered Google Drive folder should be treated as authoritative?
- Which source documents define product scope for IDBoxRT, Canary, AVEVA PI, and EtaPRO?
- Which architecture, deployment, integration, use case, limitation, and assumption notes can be supported by reviewed source evidence?
- Which comparison criteria should remain generic, and which should be filled from source-backed solution evidence?

## Deferred Items

- Actual source-backed extraction is deferred until exact source documents are available for review.
- Comparison table cells remain `To validate`.
- IBM MAS comparison cells in `etapro-vs-mas-apm.md` remain deferred until exact IBM MAS source documents are registered and reviewed.
- No source is marked `completed`.

## Restricted Content Check

No pricing, licensing, or commercial terms were added.

No raw confidential source document content was pasted into the repository.

`SRC-APM-IIOT-0002` remains restricted and deferred outside this batch.

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

## Recommended Next Batch

Recommended next batch: Manual Extraction Batch 1.1.

Scope:

- Identify exact source documents inside `SRC-APM-IIOT-0011`, `SRC-APM-IIOT-0010`, `SRC-APM-IIOT-0008`, and `SRC-APM-IIOT-0007`.
- Add document-level registry entries or notes where exact documents are known.
- Extract only short, source-backed facts into the existing `Evidence-Backed Draft Facts` tables.
- Keep all pages `draft`, `private`, and `confidence: low` until human review.
