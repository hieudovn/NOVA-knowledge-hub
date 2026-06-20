# Docker Local Preview

## Purpose

This Docker setup provides a reliable local/private preview for the Docusaurus wiki without competing with common local development ports. It is an M5-lite utility added during M2 to make wiki review easier; it does not add a backend, API, database, authentication, crawler, AI Q&A, public portal, CRM, or NOVA integration.

## Port Policy

- Default host port: `3100`.
- Container port: `3000`.
- Default mapping: `3100:3000`.
- Override the host port through `.env` or an explicit env file.
- Do not use host port `3000` by default because it is commonly occupied by other local tools.

## First-Time Setup

From the repository root:

```powershell
Copy-Item .env.example .env
docker compose --env-file .env.example build nova-wiki
docker compose --env-file .env.example up -d nova-wiki
docker compose ps
```

Open:

```text
http://localhost:3100
```

## Build and Run Commands

Build the image:

```powershell
docker compose --env-file .env.example build nova-wiki
```

Start the preview:

```powershell
docker compose --env-file .env.example up -d nova-wiki
```

Check status:

```powershell
docker compose ps
```

View logs:

```powershell
docker compose logs nova-wiki
```

## Stop Commands

Stop the preview container:

```powershell
docker compose --env-file .env.example stop nova-wiki
```

Stop and remove the preview container:

```powershell
docker compose --env-file .env.example down
```

If a stale container is suspected, run:

```powershell
docker compose --env-file .env.example ps
docker compose --env-file .env.example down
docker compose --env-file .env.example up -d nova-wiki
```

## Rebuild After Content Changes

The container serves the production build. After changing wiki content, registry-driven docs, Docusaurus config, or dependencies, rebuild and restart:

```powershell
docker compose --env-file .env.example build nova-wiki
docker compose --env-file .env.example up -d nova-wiki
```

## How To Change Port

Create or edit `.env`:

```text
NOVA_WIKI_PORT=3101
```

Then run:

```powershell
docker compose --env-file .env up -d nova-wiki
```

Open:

```text
http://localhost:3101
```

## Diagnose Port Conflicts On Windows PowerShell

Check whether a port is already listening:

```powershell
Get-NetTCPConnection -LocalPort 3100 -State Listen
```

Find the owning process:

```powershell
$conn = Get-NetTCPConnection -LocalPort 3100 -State Listen
Get-Process -Id $conn.OwningProcess
```

Inspect command line details:

```powershell
$conn = Get-NetTCPConnection -LocalPort 3100 -State Listen
Get-CimInstance Win32_Process -Filter "ProcessId=$($conn.OwningProcess)" | Select-Object ProcessId, CommandLine
```

If the process is an old Docker preview container, stop it with:

```powershell
docker compose --env-file .env.example down
```

If another application owns the port, choose another `NOVA_WIKI_PORT`.

If Docker commands hang or return an error for `dockerDesktopLinuxEngine/_ping`, restart Docker Desktop and wait until the Linux engine is fully running. Then retry:

```powershell
docker compose --env-file .env.example build nova-wiki
docker compose --env-file .env.example up -d nova-wiki
```

## `npm start` vs `npm serve` vs Docker Preview

`npm start` runs the Docusaurus development server from `apps/wiki`. It is best for rapid theme/config development and uses live reload.

`npm run serve` serves the already-built Docusaurus static output from `apps/wiki/build`. It is useful for checking a production build locally, but it can collide with local ports if not managed carefully.

Docker preview builds the production site in a container and serves it through Docker Compose on the configured host port. It is the recommended private preview path when checking the wiki as a production-style static site.

## Recommended Daily Workflow

1. Edit markdown, registry, or docs locally.
2. Run `npm.cmd run validate:metadata` from `apps/wiki`.
3. Run `npm.cmd run build` from `apps/wiki`.
4. Rebuild and restart Docker preview from the repo root:

```powershell
docker compose --env-file .env.example build nova-wiki
docker compose --env-file .env.example up -d nova-wiki
```

5. Open `http://localhost:3100`.
6. Stop the preview when finished:

```powershell
docker compose --env-file .env.example down
```
