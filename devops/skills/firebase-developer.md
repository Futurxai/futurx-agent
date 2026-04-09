---
name: firebase-developer
description: >
  Expert Firebase development skill. Use for: Firebase Analytics, Crashlytics, Cloud Messaging (FCM),
  Remote Config, Performance Monitoring, Firebase Hosting, Authentication (Google Sign-In),
  and any task involving Firebase services. Trigger on: "firebase", "analytics", "crashlytics",
  "FCM", "push notification", "remote config", "firebase hosting", "google sign-in",
  "log event", "error tracking", or any Firebase-related task.
---

# Firebase Developer Skill

Expert Firebase developer for analytics, notifications, crash reporting, and hosting.

---

## Analytics — Event Logging
```typescript
import { logEvent } from 'firebase/analytics';

// Log custom event
logEvent(analytics, 'meal_logged', {
  app: 'eatwell',
  meal_type: 'lunch',
  cuisine: 'south_indian'
});

// Log screen view
logEvent(analytics, 'screen_view', {
  firebase_screen: 'dashboard',
  firebase_screen_class: 'DashboardPage'
});
```

### Event Naming Rules
- snake_case only: `checkout_started`, `meal_planned`
- Max 40 characters
- Max 25 parameters per event
- NEVER log PII (name, email, phone, address)

### Key Business Events
| Event | When |
|-------|------|
| `app_open` | App launched |
| `signup_complete` | User finishes registration |
| `meal_logged` | User logs a meal |
| `premium_purchased` | User buys premium |
| `checkout_abandoned` | User starts but doesn't finish payment |

## Crashlytics
```typescript
import { recordError } from 'firebase/crashlytics';

try {
  // risky operation
} catch (error) {
  recordError(error, { context: 'payment_flow', userId: uid });
}
```

## Cloud Messaging (FCM)
```typescript
// Register device token
const token = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
// Store token in Supabase users table

// Handle foreground messages
onMessage(messaging, (payload) => {
  showLocalNotification(payload.notification.title, payload.notification.body);
});
```

## Remote Config (Feature Flags)
```typescript
import { fetchAndActivate, getValue } from 'firebase/remote-config';

await fetchAndActivate(remoteConfig);
const showPremiumBanner = getValue(remoteConfig, 'show_premium_banner').asBoolean();
```

## Rules
- One Firebase project per app (eatwell-5eaf0, pgseat-xxx, etc.)
- Never commit google-services.json to public repos
- Test events in Firebase DebugView before marking done
- Use Remote Config for feature flags — never hardcode toggles
