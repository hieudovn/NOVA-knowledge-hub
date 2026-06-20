# Public Web Reference URL Sync Report

## Summary

Product Reference URLs from the Google Sheet were synced into a new public web source registry.

No website content was scraped or copied into the repository. No wiki pages were modified.

## Google Sheet Source

Google Sheet:

`https://docs.google.com/spreadsheets/d/1OKfe48zNwTjB1196QU45f8jqNyT8OyszAwLQ-D1gdEw/edit?gid=940441896#gid=940441896`

Relevant row: `Reference URL`

## URLs Synced

| Product | Source ID | URL |
|---|---|---|
| IDBoxRT | `SRC-WEB-IDBOXRT-OFFICIAL` | `https://idboxrt.com/` |
| EtaPRO | `SRC-WEB-ETAPRO-OFFICIAL` | `https://etapro.com/` |
| Canary | `SRC-WEB-CANARY-OFFICIAL` | `https://www.canarylabs.com/` |
| LUCA BDS | `SRC-WEB-LUCA-BDS-OFFICIAL` | `https://www.luca-bds.com/` |
| AVEVA PI System | `SRC-WEB-AVEVA-PI-OFFICIAL` | `https://www.aveva.com/en/products/aveva-pi-system/` |
| AI PlantOps | `SRC-WEB-AI-PLANTOPS-OFFICIAL` | `https://tridiagonal.ai/solutions/ai-plantops` |
| Retina360 | `SRC-WEB-RETINA360-OFFICIAL` | `https://retina360.ai/` |

## Products Without M1 Pages

- LUCA BDS
- Retina360

These products were registered as public URLs only. No M1 wiki pages were created. Their `related_pages` entries remain empty until technical relevance is confirmed.

## Registry Files Updated

- Created `registry/sources-public-web.yaml`.

No changes were made to wiki page front matter or content.

## Extraction Status

All public web sources are registered with:

- `location_status: registered`
- `confidentiality: public`
- `extraction_status: not_started`

## Restricted Content Check

- No pricing, licensing, or commercial terms were added.
- No raw website content was copied.
- No website scraping was performed.
- No confidential source content was added.

## Next Recommended Extraction Batch

Recommended next batch: public web extraction preparation.

Suggested scope:

- Review the public web extraction guide.
- Select one high-priority public source, such as IDBoxRT, Canary, AVEVA PI, or EtaPRO.
- Add only short, paraphrased, source-backed technical notes to the relevant draft/private wiki page.
- Keep all pages draft/private and confidence low until human review.
