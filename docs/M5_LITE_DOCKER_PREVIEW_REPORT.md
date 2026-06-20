# M5-Lite Docker Preview Report

## Summary

Added an early M5-lite Docker Compose preview for the Docusaurus wiki while keeping the main project phase in M2 Source Registry + Manual Extraction. The setup serves the production wiki build locally/private-only and avoids the common host port `3000` conflict by using host port `3100` by default.

This batch did not add backend, API, database, authentication, crawler, AI Q&A, CRM, public portal, landing page generator, NOVA integration, Knowledge Graph, Modes, Skills, or AI orchestration scope.

## Files Added / Updated

- Added `.env.example`
- Updated `.gitignore`
- Updated `.dockerignore`
- Updated `docker-compose.yml`
- Updated `apps/wiki/Dockerfile`
- Added `docs/DOCKER_LOCAL_PREVIEW.md`
- Added `docs/M5_LITE_DOCKER_PREVIEW_REPORT.md`

## Port Policy

- Default host port: `3100`
- Container port: `3000`
- Compose mapping: `${NOVA_WIKI_PORT:-3100}:3000`
- `.env.example` sets `NOVA_WIKI_PORT=3100`
- Host port can be changed through `.env`

## Commands Tested

- `npm.cmd run validate:metadata`
- `npm.cmd run build`
- `docker compose --env-file .env.example config`
- `docker compose --env-file .env.example build nova-wiki`
- `docker version`
- `docker compose --env-file .env.example ps`
- Local runtime-command smoke test using `node node_modules/@docusaurus/core/bin/docusaurus.mjs serve --host 127.0.0.1 --port 3012`

## Validation Result

Passed.

- Metadata validation completed successfully.
- 32 wiki pages validated.

## Build Result

Passed.

- Docusaurus production build completed successfully.
- Static files were generated in `apps/wiki/build`.

## Docker Build Result

Blocked by local Docker engine availability.

- Initial sandboxed run could not access the Windows Docker config/buildx directory.
- Escalated run reached Docker but failed with Docker Desktop Linux engine not responding:
  - `request returned 500 Internal Server Error ... dockerDesktopLinuxEngine/_ping`
- Follow-up Docker status checks timed out.
- `docker compose --env-file .env.example config` passed and confirmed the resolved mapping `3100:3000`.

## Docker Run Result

Not completed because Docker build was blocked by the local Docker Desktop engine.

Runtime command sanity check passed outside Docker:

- Docusaurus served the existing production build on `http://127.0.0.1:3012/`.
- The response returned HTTP 200 and included the NOVA Knowledge Hub page content.

## Known Limitations

- This is a local/private preview container only.
- The container serves a production static build and does not live-reload content changes.
- Rebuild the image after content, config, or dependency changes.
- No persistent content volume is added because wiki content remains in the repository and is baked into the preview image.
- No database volume is added because this batch does not introduce a database.
- Docker build/run still need to be retried after Docker Desktop Linux engine is running normally.

## Next Recommended Batch

Continue M2 manual extraction and product validation. Use Docker preview for stable local review when checking rendered wiki pages.
