# M2 Wiki Rendering and Evidence Link Report

## Summary

Fixed two EtaPRO wiki usability issues before further product enrichment:

- enabled Mermaid rendering through the official Docusaurus Mermaid theme;
- standardized EtaPRO Evidence Sources links as clickable internal reviewer links.

The batch stayed within M2 and did not add backend, API, database, crawler, AI Q&A, CRM, public portal, landing page, Knowledge Graph, Modes, Skills, or AI orchestration scope.

## Mermaid Rendering Change

Updated `apps/wiki/docusaurus.config.js`:

- added `markdown.mermaid: true`;
- added `themes: ['@docusaurus/theme-mermaid']`.

Updated `apps/wiki/package.json` and `apps/wiki/package-lock.json`:

- added `@docusaurus/theme-mermaid`.
- added `@mermaid-js/layout-elk` because the installed Docusaurus Mermaid theme requires it during production build.

## Evidence Link Change

Updated `content/wiki/solutions/etapro.md`:

- removed the Mermaid TODO note;
- kept the Mermaid diagram block;
- changed Evidence Sources links to `[Open source](<url>)`;
- used URLs from `registry/sources-apm-iiot.yaml`;
- did not link restricted pricing/commercial sources.

## Files Updated

- `apps/wiki/package.json`
- `apps/wiki/package-lock.json`
- `apps/wiki/docusaurus.config.js`
- `content/wiki/solutions/etapro.md`
- `docs/CONTENT_WORKFLOW.md`

## Source Link Convention

Added a source-link convention to `docs/CONTENT_WORKFLOW.md`:

- private/internal wiki pages may link to restricted internal Drive source documents;
- public pages must not expose private Drive links;
- evidence links are for reviewer traceability, not public publication;
- pricing/commercial sources must not be linked from wiki knowledge pages unless kept in Product Owner/Admin-only documents outside the wiki.

## Validation Result

Passed.

- `npm.cmd run validate:metadata`
- Validated metadata for 32 wiki pages.

## Build Result

Passed.

- `npm.cmd run build`
- Docusaurus generated the static wiki build successfully after Mermaid support was enabled.

## Manual Browser Test Needed

Manual browser confirmation is still recommended:

- `http://localhost:3001/solutions/etapro`
- Mermaid diagram renders visually, not as plain code.
- Evidence Sources contains clickable source links.

Port `3001` was already occupied in the local environment, so the requested URL could not be used for a reliable manual check. A temporary smoke test on `http://localhost:3011/solutions/etapro/` returned the EtaPRO page and clickable `Open source` links. Static build output also includes the Mermaid client bundle. Mermaid is configured through Docusaurus, but a visual browser check should still confirm the rendered diagram.

## Next Recommended Batch

Continue M2 product enrichment only after the EtaPRO page rendering and reviewer source-link usability are confirmed.
