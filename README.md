# Action

This action will handle a merge. If you want to merge branchA into branchB using a merge strategy of 'theirs', then you can do it!

## Inputs

## `userName`

**Required** The git username to use in the commits. Default `"Barry Mittens"`.

## `userEmail`

**Required** The git user email to use in the commits. Default `"someone@test.com"`.
## `source`

**Required** The branch to be merged in.

## `target`

**Required** The branch to be merged into.
## `strategy`

The merge strategy to use. Default `"theirs"`.

## Outputs
No outputs

## Example usage

```
uses: akerolabs/merge@v1
with:
  source: ${GITHUB_REF#refs/heads/}
  target: 'staging'
  userEmail: 'nigel@smith.com'
  userName: 'Action Hero'
```