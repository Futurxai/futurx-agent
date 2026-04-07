# Code Style Rules

## General
- Use TypeScript strict mode for all TS projects
- Prefer `const` over `let`, never use `var`
- Use template literals over string concatenation
- Use early returns to reduce nesting

## Naming
- Variables/functions: camelCase
- Classes/components: PascalCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case (e.g., `meal-data.service.ts`)
- Boolean variables: prefix with `is`, `has`, `should`, `can`

## Functions
- Max 30 lines per function
- Single responsibility — one function, one job
- Pure functions where possible
- No more than 3 parameters (use object param for more)

## Imports
- Group: external libs → internal modules → relative imports
- No circular dependencies
- Use absolute paths for cross-module imports
