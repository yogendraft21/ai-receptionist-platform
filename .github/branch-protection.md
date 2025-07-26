# Branch Protection Setup

## Required Settings in GitHub:
1. Go to Settings > Branches
2. Add rule for `main` branch:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators
   - ✅ Allow force pushes (disabled)
   - ✅ Allow deletions (disabled)

## Required Status Checks:
- quality-checks
- deploy (for main branch only)