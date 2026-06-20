# NotebookLM Extracted Data Register Report

## Summary

This batch registered the EtaPRO NotebookLM Extracted Data folder and four markdown summary files as derived sources in `registry/sources-apm-iiot.yaml`.

No wiki content was modified. No technical claims were extracted into wiki pages. No derived source was marked as approved.

## Folder Reviewed

| Field | Value |
|---|---|
| Folder title | `00_Extracted Data` |
| Folder URL | `https://drive.google.com/drive/folders/18FAWinREsJ-2435b1JxfdzwHWlkjmPEs` |
| Drive ID | `18FAWinREsJ-2435b1JxfdzwHWlkjmPEs` |
| Parent source | `SRC-APM-IIOT-0007` |
| Registry entry | `SRC-ETAPRO-EXTRACT-FOLDER-0001` |
| Source type | `notebooklm_extracted_data_folder` |
| Validation status | `needs_source_validation` |

## Files Registered

| Source ID | Title | Drive ID | Type | Validation Status |
|---|---|---|---|---|
| `SRC-ETAPRO-EXTRACT-0001` | `01_EtaPRO Extracted Keys.md` | `1ns4b-DoLCPEtXUJe8G2N0-6wKLmzJR8R` | `notebooklm_markdown` | `needs_source_validation` |
| `SRC-ETAPRO-EXTRACT-0002` | `02_EtaPRO Business Section.md` | `1nSjgBEgmwtrCRhy1QzcStFp8HPAFRitB` | `notebooklm_markdown` | `needs_source_validation` |
| `SRC-ETAPRO-EXTRACT-0003` | `03_EtaPRO Technical Section.md` | `1-T-gLOlXFOQzfU_rCQ9AHSi2fClZ2ZDd` | `notebooklm_markdown` | `needs_source_validation` |
| `SRC-ETAPRO-EXTRACT-0004` | `04_EtaPRO Usecases, deployment, BOM, roadmap.md` | `11_OhRYRmwH7YZKJnio9bi_r5OkEdRKK2` | `notebooklm_markdown` | `needs_source_validation` |

Note: `SRC-ETAPRO-EXTRACT-0001` was listed by Drive metadata with size `0`; it remains registered but should be checked before use.

## Potential Wiki Uses

- Speed review planning for `content/wiki/solutions/etapro.md`.
- Identify candidate APM, condition monitoring, module, deployment, and use-case topics.
- Prepare validation questions for EtaPRO primary document sources.
- Help map candidate claims to confirmed document-level sources such as `SRC-ETAPRO-DOC-0002` through `SRC-ETAPRO-DOC-0010`.

Any wiki update must cite primary source evidence, not the derived source alone.

## Restricted Content Observations

- The file title `04_EtaPRO Usecases, deployment, BOM, roadmap.md` may include BOM or roadmap material.
- BOM, pricing, licensing, discounts, proposal terms, commercial details, and roadmap commitments must not be extracted into wiki pages.
- Derived-source wording must not be copied as raw content into the repository.
- NotebookLM output remains an internal review aid only.

## Recommended Next Batch

Manual Extraction Batch 1.6 - EtaPRO derived-source-assisted validation planning.

Recommended scope:

- Use the four EtaPRO derived sources only to build a validation checklist.
- Validate checklist items against the primary EtaPRO document sources.
- Update `content/wiki/solutions/etapro.md` only after primary source evidence is confirmed.
- Keep comparison and tender pages unchanged unless a small source-backed pointer is necessary.

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
