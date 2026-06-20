# Public Web Source Extraction Guide

## Purpose

This guide defines how NOVA Knowledge Hub should use public product websites and public documentation as source references for future manual extraction.

The goal is to store URLs and source metadata now, then extract only short, source-backed technical notes later after human review.

## Allowed Sources

- Official product websites.
- Official product documentation.
- Official help pages.
- Official public technical references.
- Public pages directly registered in `registry/sources-public-web.yaml`.

## Disallowed Sources

- Pricing, licensing, or commercial terms.
- Private portals, login-only pages, or partner-only materials.
- Scraped website dumps.
- Long copied passages from websites.
- Unverified third-party summaries used as facts.
- Marketing claims converted into approved knowledge without review.

## Extraction Rules

- Extract only concise technical facts relevant to M1 wiki pages.
- Keep extracted notes as `draft` until human review.
- Link every extracted note to a public web source ID.
- Prefer paraphrase over quotation.
- Mark uncertain or unsupported claims as open questions.
- Do not scrape websites or bulk-copy page content into the repository.

## Copyright and Quotation Rules

- Do not copy long website content into the repository.
- Use short quotations only when necessary and keep them minimal.
- Prefer summaries written in original wording.
- Preserve source URL and access metadata in the registry.
- Do not reproduce tables, diagrams, or proprietary page layouts from public websites.

## Evidence Table Format

Use this table format when adding source-backed facts to a wiki page:

| Claim / Fact | Evidence Source | Confidence | Review Status |
|---|---|---|---|
| Short paraphrased fact | `SRC-WEB-...` | low | Pending human review |

## Review Workflow

1. Confirm the source URL is registered in `registry/sources-public-web.yaml`.
2. Read the public source manually.
3. Extract concise technical notes only.
4. Add notes to the relevant draft/private wiki page.
5. Keep confidence low unless a human reviewer upgrades it.
6. Run metadata validation and Docusaurus build.
7. Leave final approval for a later review step.

## First URLs Registered

| Source ID | Title |
|---|---|
| `SRC-WEB-IDBOXRT-OFFICIAL` | IDBoxRT Official Website |
| `SRC-WEB-ETAPRO-OFFICIAL` | EtaPRO Official Website |
| `SRC-WEB-CANARY-OFFICIAL` | Canary Official Website |
| `SRC-WEB-LUCA-BDS-OFFICIAL` | LUCA BDS Official Website |
| `SRC-WEB-AVEVA-PI-OFFICIAL` | AVEVA PI System Official Product Page |
| `SRC-WEB-AI-PLANTOPS-OFFICIAL` | AI PlantOps Official Solution Page |
| `SRC-WEB-RETINA360-OFFICIAL` | Retina360 Official Website |

## Acceptance Criteria

- Public web source URLs are registered with stable source IDs.
- No fake URLs are invented.
- No raw website content is copied into the repository.
- No pricing, licensing, or commercial terms are extracted.
- Related wiki pages remain `draft` and `private`.
- Metadata validation passes.
- Docusaurus build passes.
