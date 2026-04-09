---
name: capacitor-developer
description: >
  Expert Capacitor/Android development skill. Use for: building APKs/AABs, Android configuration,
  native plugins, Capacitor bridges, keystore signing, Google Play submission, permissions,
  camera access, push notifications on device, deep links, and any native mobile task.
  Trigger on: "capacitor", "android", "APK", "AAB", "build", "native", "keystore",
  "play store", "mobile build", "device", or any Capacitor/Android task.
---

# Capacitor Developer Skill

Expert Android/Capacitor developer for building and shipping mobile apps.

---

## Build Commands
```bash
# Sync web assets to Android
ionic cap sync android

# Open in Android Studio
ionic cap open android

# Build debug APK
cd android && ./gradlew assembleDebug

# Build release AAB (for Play Store)
cd android && ./gradlew bundleRelease

# Build release APK (for direct install)
cd android && ./gradlew assembleRelease
```

## Keystore Signing
```bash
# Generate keystore (one time)
keytool -genkey -v -keystore eatwell-release.keystore \
  -alias eatwell -keyalg RSA -keysize 2048 -validity 10000

# Add to android/app/build.gradle
signingConfigs {
  release {
    storeFile file('eatwell-release.keystore')
    storePassword 'YOUR_STORE_PASSWORD'
    keyAlias 'eatwell'
    keyPassword 'YOUR_KEY_PASSWORD'
  }
}
```

## capacitor.config.ts
```typescript
const config: CapacitorConfig = {
  appId: 'com.futurx.eatwell',
  appName: 'EatWell',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    }
  }
};
```

## Native Plugins
```typescript
// Camera
import { Camera, CameraResultType } from '@capacitor/camera';
const photo = await Camera.getPhoto({
  resultType: CameraResultType.Uri,
  quality: 90
});

// Push Notifications
import { PushNotifications } from '@capacitor/push-notifications';
await PushNotifications.requestPermissions();
await PushNotifications.register();
```

## Rules
- Use JDK 21 (Android Studio bundled JBR)
- `signInWithPopup` fails in WebView — use native auth plugins
- Add `env(safe-area-inset-top)` for status bar spacing
- Never commit keystore to public repos
- Test on real device — emulator misses push notifications + camera
- AAB for Play Store, APK for direct install/testing
