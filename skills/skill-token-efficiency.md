# Skill: Token Efficiency

## Trigger
User asks about token usage, hitting limits, or slow responses on large codebases

## Steps
1. Create a folder map: list all files with estimated token size
2. Build an MD5 map: track which files changed since last session
3. Only load changed files into context — skip unchanged ones
4. Use short reference names for repeated variables
5. Summarize long outputs before continuing

## Example
50-file repo → only load 3 changed files → save 80% of context budget

## Notes
Regenerate MD5 map after every major file change. Never load node_modules.
