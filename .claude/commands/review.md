# Code Review

Review the current changes for:

1. **Correctness** — Does the code do what it's supposed to?
2. **Security** — Any OWASP top 10 vulnerabilities?
3. **Performance** — Unnecessary re-renders, N+1 queries, missing indexes?
4. **Readability** — Clear naming, reasonable function length, self-documenting?
5. **Edge cases** — Null handling, empty arrays, boundary conditions?

Use `git diff` to see staged changes. Provide feedback as actionable items with file:line references.

Format output as:
```
✅ Looks good: [what's well done]
⚠️ Suggestion: [file:line] — [what to improve and why]
🚨 Issue: [file:line] — [what's wrong and how to fix]
```
