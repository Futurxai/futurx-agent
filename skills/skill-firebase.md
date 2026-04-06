# Skill: Firebase

## Trigger
Any task involving analytics, crash reporting, or remote config

## Steps
1. Read packages/shared-analytics/index.ts for existing setup
2. Use Firebase Analytics for all user events
3. Use Crashlytics for error tracking
4. Log events with: logEvent(name, params) — keep names snake_case
5. Use Remote Config for feature flags — never hardcode feature toggles
6. Verify events appear in Firebase console before marking task done

## Example
User opens EatWell → logEvent('app_open', {app: 'eatwell'}) → visible in dashboard

## Notes
Do not log PII in events. Event names max 40 chars. Params max 25 per event.
