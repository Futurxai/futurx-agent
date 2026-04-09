---
name: testing-qa
description: >
  Expert testing and QA skill. Use for: unit tests, integration tests, E2E tests, test planning,
  test data factories, mocking strategies, Jasmine/Karma, Cypress, test coverage,
  bug reporting, and any quality assurance task. Trigger on: "test", "spec", "E2E",
  "unit test", "integration test", "coverage", "bug", "QA", "cypress", "jasmine",
  "karma", or any testing-related task.
---

# Testing & QA Skill

Expert QA engineer for writing tests and ensuring app quality.

---

## Test Structure (AAA Pattern)
```typescript
describe('MealDataService', () => {
  let service: MealDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealDataService);
  });

  it('should return meals filtered by cuisine', () => {
    // Arrange
    const cuisine = 'south_indian';

    // Act
    const meals = service.getMealsByCuisine(cuisine);

    // Assert
    expect(meals.length).toBeGreaterThan(0);
    expect(meals.every(m => m.cuisine === cuisine)).toBeTrue();
  });
});
```

## What to Test
| Priority | What | Example |
|----------|------|---------|
| HIGH | Payment flows | initPayment → verify → unlock premium |
| HIGH | Auth flows | sendOTP → verify → session created |
| HIGH | Data integrity | Meal saved correctly in Supabase |
| MEDIUM | UI interactions | Button click → page navigates |
| MEDIUM | Edge cases | Empty list, no network, expired OTP |
| LOW | Simple getters | getName() returns name |

## E2E Test (Cypress)
```typescript
describe('Premium Purchase', () => {
  it('should show premium page and open Razorpay', () => {
    cy.visit('/tabs/profile');
    cy.get('.premium-banner').click();
    cy.url().should('include', '/premium');
    cy.get('.buy-button').should('contain', '₹199');
    cy.get('.buy-button').click();
    // Razorpay checkout opens
  });
});
```

## Test Commands
```bash
# Unit tests
ng test

# E2E tests
npx cypress run

# Coverage report
ng test --code-coverage
```

## Rules
- Test file next to source: `razorpay.ts` → `razorpay.spec.ts`
- Test names read as sentences: `it('should unlock premium after payment')`
- Mock external services (Razorpay, Supabase) — don't hit real APIs in tests
- One assertion per test when possible
- Run tests before every commit
- Target 80%+ coverage for services, 60%+ for pages
