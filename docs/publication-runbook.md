# Publication runbook

Per disclosure. Target cadence: one release per working day.

## 1. Intake (private workspace)

- Draft the release, backgrounder and FAQ in the private workspace.
- Create an Evidence Ledger entry for each material claim: source, owner, permission, scope, qualification.
- Record the required approvals for the disclosure type.

## 2. Prepare the public files (this repository)

- Branch: `git checkout -b pd/<slug>`.
- Copy the templates from `docs/templates/` into the right folders. Keep `status: under_review`.
- Include only approved, non-sensitive text. Link evidence by public path only.
- Run `npm run validate && npm run build`.

## 3. Review

- Open a pull request. GitHub Actions validates, and Vercel posts a preview (drafts show when `PUBLIC_SHOW_UNPUBLISHED=true` is set for previews).
- A named human reviewer checks the preview against the approved text and the evidence ledger.
- On approval, set `status: published`, `publication_date`, `updated_date` and `review_by`, then merge. `main` is the only branch that deploys to production.

## 4. Deliver

| Surface | Action | Record in the manifest (private workspace) |
|---|---|---|
| This site | Automatic on merge | Deployment ID and commit (also in `/publication-manifest.json`) |
| zime.ai press page | Publish from the approved Markdown through the CMS adapter or the manual field map | CMS item ID, revision, URL, publish time |
| Newswire | Submit the release text, linking back to the canonical URL | Wire release ID and URL |
| Partner and category sites | Link to the canonical URL rather than copying where possible | URL |

## 5. Verify

- Title, body, dates, canonical URL, structured data, assets and related links match on every surface.
- If any surface was edited substantively, bring that change back here as a source change, or log an approved exception.
- Run the neutral AI inquiry prompts and log the results in the private workspace. One AI answer is never proof.
