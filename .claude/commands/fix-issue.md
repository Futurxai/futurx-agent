# Fix Issue

Fix the issue described by the user. Follow this workflow:

1. **Understand** — Read the error message or bug description carefully
2. **Locate** — Find the relevant code using grep/glob
3. **Diagnose** — Identify root cause (not just symptoms)
4. **Fix** — Make the minimal change that resolves the issue
5. **Verify** — Run tests or build to confirm the fix works

Rules:
- Fix the bug, don't refactor surrounding code
- If the fix requires changes in multiple files, explain why
- If unsure about the root cause, present hypotheses before changing code
