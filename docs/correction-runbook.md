# Correction runbook

Material public facts are never silently overwritten.

| Situation | What to do | Status change |
|---|---|---|
| Typo or formatting with no change in meaning | Fix in place and note it in the PR | none |
| A fact, number, date, scope or commitment was wrong or has changed | Publish an **Amendment** that references the artifact ID and prior version. Bump the artifact's `version` and `updated_date`, and correct the text | `published` → `amended` |
| A newer disclosure replaces this one | Set `superseded_by` here and `supersedes` on the new artifact | `published` → `superseded` |
| The disclosure must be retracted | Keep the file, replace the body with a withdrawal notice and reason where legally and ethically appropriate | `published` → `withdrawn` |

## Steps

1. Log the report (issue or internal) and assign a correction owner.
2. Confirm the facts and evidence in the private workspace.
3. Create the amendment from `docs/templates/amendment.md`.
4. Update the affected artifact, its Testable Credentials and its Primer.
5. Validate, open a PR, get named review, merge.
6. Update every delivery surface (zime.ai press page, newswire correction if one was issued) and record it in the manifest.
7. Reply to the person who reported it.

## Check after merge

- The prior version is still reachable (git history and version history on the page).
- The correction banner and amended date show.
- Sitemap, RSS and internal links reflect the current version.
