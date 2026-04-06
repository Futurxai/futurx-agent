# Skill: Authentication

## Trigger
Any task involving login, signup, OTP, sessions, or token refresh

## Steps
1. Read packages/shared-auth/index.ts first
2. Check if OTP flow exists — if yes, extend it; if no, build from scratch
3. Use Supabase Auth as the provider
4. Implement: sendOTP → verifyOTP → createSession → refreshToken
5. Add error handling for expired OTP and network failures
6. Test with a dummy phone number before wiring to UI

## Example
Build login screen → use shared-auth → OTP sent via Supabase → session stored

## Notes
Never store raw tokens in localStorage. Use Supabase session management only.
