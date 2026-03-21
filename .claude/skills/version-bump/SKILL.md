---
name: version-bump
description: Analyze branch changes against a base branch using conventional commits to determine and apply the correct semver version bump (major, minor, patch). Use this skill whenever the user asks to bump the version, release, update the version, prepare a release, determine what version to use, or analyze changes for versioning — even if they don't say "semver" or "conventional commits" explicitly.
---

# Version Bump from Conventional Commits

Analyze the commits on the current branch compared to a base branch, determine the appropriate semantic versioning bump based on conventional commit messages, apply it, and run any version lifecycle scripts defined in package.json.

## How it works

Semantic versioning (major.minor.patch) maps directly to conventional commit types:

| Signal                                                                                                         | Bump      | Example commit                     |
| -------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------- |
| Any commit message containing `!` after the type (e.g. `refactor!:`, `feat!:`) or a `BREAKING CHANGE:` trailer | **major** | `refactor!: replace Axios with Ky` |
| `feat:` or `feat(scope):` (without `!`)                                                                        | **minor** | `feat: add schedules endpoint`     |
| Everything else (`fix:`, `chore:`, `docs:`, `refactor:`, `test:`, etc.) without `!`                            | **patch** | `fix: correct typo in endpoint`    |

The highest-priority signal wins: if there is at least one breaking change, bump major regardless of how many features or fixes exist.

## Steps

1. **Identify the base branch.** Default to `main`. If the user specifies a different base (e.g., `develop`), use that instead.

2. **List commits.** Run:

   ```bash
   git log <base>..HEAD --oneline
   ```

3. **Classify each commit** by its conventional commit prefix and the presence of `!` or `BREAKING CHANGE:` footer. Summarize the findings to the user grouped by category (breaking, features, fixes, other).

4. **Determine the bump.** Apply the priority table above.

5. **Check the current version** from `package.json`.

6. **Confirm with the user.** Present:
   - The grouped summary of changes
   - The current version
   - The proposed new version
   - The reasoning (which commits drove the decision)

   Wait for the user to confirm or override before proceeding. If the user requests a different bump level, respect their choice.

7. **Apply the version bump.** Run:

   ```bash
   npm version <major|minor|patch> --no-git-tag-version
   ```

   This updates `package.json` and triggers the `preversion` / `version` / `postversion` lifecycle scripts if they exist. The `--no-git-tag-version` flag prevents npm from auto-committing and tagging — the user controls when to commit.

8. **Report the result.** Show the new version and any output from lifecycle scripts (e.g., changelog generation).

## Edge cases

- **No conventional commit prefixes**: If commits don't follow conventional commits, warn the user and ask them to specify the bump level manually.
- **Pre-release versions**: If the current version is already a pre-release (e.g., `1.0.0-beta.1`), ask the user whether to bump the pre-release or graduate to a stable release.
- **No changes**: If there are no commits ahead of the base branch, tell the user there's nothing to bump.
- **Monorepo**: This skill handles a single package.json. If the user is in a monorepo, ask which package to bump.
