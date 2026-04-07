# Testing Rules

## Test Structure
- Use `describe` + `it` blocks with AAA pattern (Arrange, Act, Assert)
- One assertion per test when possible
- Test names should read as sentences: `it('should return empty array when no meals match')`

## What to Test
- Business logic and data transformations
- Edge cases: null, undefined, empty, boundary values
- Error paths and error messages
- Integration points (API calls, DB queries)

## What NOT to Test
- Framework internals (Angular lifecycle, React rendering)
- Simple getters/setters with no logic
- Third-party library behavior

## Patterns
- Use factory functions for test data, not raw objects
- Mock at boundaries (HTTP, DB), not internal functions
- Prefer integration tests over unit tests for API endpoints
- Keep test files next to source: `meal-data.service.spec.ts`
