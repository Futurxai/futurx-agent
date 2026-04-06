# Skill: Push Notifications

## Trigger
Any task involving notifications, alerts, or reminders

## Steps
1. Read packages/shared-notifications/index.ts for existing setup
2. Use Firebase Cloud Messaging (FCM) for all push notifications
3. Register device token on login → store in Supabase users table
4. Build notification payload: title, body, data object
5. Send via FCM server API — never send from client
6. Test on real device — simulators do not receive push notifications

## Example
PriSeat booking confirmed → FCM sends push → user sees ticket notification

## Notes
Always handle notification permission denied gracefully. iOS requires explicit permission request.
