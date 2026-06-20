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
- `docker compose build nova-wiki`
- `docker compose up -d nova-wiki`
- `docker compose logs --tail 80 nova-wiki`
- `Invoke-WebRequest http://localhost:3100/`
- `Invoke-WebRequest http://localhost:3100/solutions/etapro/`

## Validation Result

Passed.

- Metadata validation completed successfully.
- 32 wiki pages validated.

## Build Result

Passed.

- Docusaurus production build completed successfully.
- Static files were generated in `apps/wiki/build`.

## Docker Build Result

Passed.

- Docker image `nova-knowledge-hub-nova-wiki` rebuilt successfully.
- The Docker build ran `npm run build` inside the image and validated 32 wiki pages.
- Runtime stage now uses Nginx to serve the generated static build on container port `3000`.

## Docker Run Result

Passed after runtime-stage fix.

- Root URL `http://localhost:3100/` returned HTTP 200 and included NOVA Knowledge Hub content.
- EtaPRO URL `http://localhost:3100/solutions/etapro/` returned HTTP 200 and included EtaPRO content and `Open source` evidence links.
- `docker compose ps` shows `nova-wiki` running with `0.0.0.0:3100->3000/tcp`.

Troubleshooting root cause:

- The earlier runtime image used `docusaurus serve` but only copied `build` and `node_modules`.
- Docusaurus still attempted to load `docusaurus.config.js` at runtime and exited with `No config file found in site dir`.
- The fix was to serve the already-built static output with Nginx instead of requiring Docusaurus runtime configuration.

## Known Limitations

- This is a local/private preview container only.
- The container serves a production static build and does not live-reload content changes.
- Rebuild the image after content, config, or dependency changes.
- No persistent content volume is added because wiki content remains in the repository and is baked into the preview image.
- No database volume is added because this batch does not introduce a database.
- A stopped orphan container named `nova-knowledge-hub-wiki-1` may remain from the previous `wiki` service name. It used the old `3000:80` mapping and can be removed with `docker compose up -d --remove-orphans nova-wiki` or `docker compose down --remove-orphans` when cleanup is desired.

## Next Recommended Batch

Continue M2 manual extraction and product validation. Use Docker preview for stable local review when checking rendered wiki pages.
