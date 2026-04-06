# Skill: Analytics and Error Tracking

## Trigger
Any task involving tracking user behaviour, errors, or app performance

## Steps
1. Read packages/shared-analytics/index.ts first
2. For user events: use Firebase Analytics logEvent
3. For errors: use Crashlytics.recordError with context
4. For performance: use Firebase Performance Monitoring traces
5. Create a tracking plan doc before adding new events
6. Review Firebase dashboard weekly — fix top 3 crash issues each sprint

## Example
User drops off at payment → logEvent('checkout_abandoned') → investigate in dashboard

## Notes
Track business events not just technical ones. Always add user_id to event params where safe.
