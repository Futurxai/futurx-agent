# Razorpay Configuration & Go-Live Checklist

LoveDigitally web subscription — ₹9/month — Razorpay (Individual / Sole Proprietor).

## What's already built (in code)

- `Products/futurx-website/apps/lovedigitally-premium.html` — checkout page
- `Products/futurx-website/apps/lovedigitally-premium-success.html` — success page
- `Products/futurx-website/legal/{terms,privacy,refund,contact}.html` — required policy pages
- `Products/futurx-website/functions/index.js` — three Cloud Functions (`createSubscription`, `verifySubscription`, `razorpayWebhook`)
- `Products/futurx-website/firebase.json` — hosting rewrites for `/lovedigitally/premium` + `/api/*`
- Footer links on `index.html` and `apps/lovedigitally.html` pointing to `/legal/*`
- `futurx-agent/packages/shared-payments/payments.ts` — TypeScript reference implementation (also exported for the Capacitor apps later)

## What you need to do — in order

### 1. Replace placeholders in the policy pages

These files have `[BRACKETED]` placeholders that must be filled in before Razorpay reviews them:

| File | Placeholder | What to put |
| --- | --- | --- |
| `legal/terms.html` | `[YOUR LEGAL NAME]` | Your full name as on PAN |
| `legal/privacy.html` | `[YOUR LEGAL NAME]` | Same |
| `legal/contact.html` | `[YOUR LEGAL NAME]` | Same |
| `legal/contact.html` | `[YOUR CONTACT PHONE]` | Business phone (the one you'll list publicly) |
| `legal/contact.html` | `[YOUR REGISTERED ADDRESS LINE 1]` | Your registered business address |
| `legal/contact.html` | `[PIN]` | Chennai PIN code |

Already filled in: city = Chennai, Tamil Nadu; email = futurx.ai@outlook.com.

### 2. Register on Udyam (if you don't already have a business proof)

Free, ~10 minutes: [udyamregistration.gov.in](https://udyamregistration.gov.in)
You'll need: Aadhaar, PAN, bank account details, self-declaration of business activity.
Save the Udyam certificate PDF — you'll upload it to Razorpay during KYC.

### 3. Gather KYC documents (digital copies, ready to upload)

- PAN card (yours)
- Aadhaar (yours)
- Cancelled cheque OR bank statement showing your name, account number, IFSC
- Address proof (Aadhaar usually covers this)
- Udyam certificate (from step 2)

### 4. In Razorpay Dashboard — Test Mode first

a. Enable 2FA: Settings → Two-Factor Authentication.

b. Create the ₹9/month plan:
   - Subscriptions → Plans → New Plan
   - Period: **Monthly**, Interval: **1**
   - Item Name: **Love Digitally Premium**
   - Amount: **₹9.00** (Razorpay stores this as 900 paise)
   - Description: "Premium subscription for Love Digitally"
   - Save → copy the `plan_id` (looks like `plan_PoXXXXXXXXXX`).

c. Set up the webhook (after step 5 deploys):
   - Settings → Webhooks → Add New Webhook
   - URL: `https://<YOUR_HOSTING_DOMAIN>/api/razorpay/webhook` (e.g. `https://futurx-website.web.app/api/razorpay/webhook`)
   - Generate a random secret (any random 32-char string) — paste it into Razorpay AND save it for `RAZORPAY_WEBHOOK_SECRET` below
   - Active Events: tick `subscription.activated`, `subscription.charged`, `subscription.cancelled`, `subscription.completed`, `subscription.halted`, `subscription.pending`, `payment.failed`

### 5. Deploy the Cloud Functions

```powershell
cd D:\Futurx_WorkSpace\Products\futurx-website\functions
npm install
```

Create `Products/futurx-website/functions/.env` (gitignored):

```
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=xxxxxxxxxxxxxxxxxxxxx
RAZORPAY_PLAN_ID=plan_PoXXXXXXXXXX
```

⚠️ **Firebase Cloud Functions require the Blaze plan.** Upgrade in the Firebase console (Settings → Usage and billing → Modify plan). Pay-as-you-go, near-zero cost at low volume, but a card has to be on file.

Deploy:

```powershell
cd D:\Futurx_WorkSpace\Products\futurx-website
firebase login
firebase use --add   # pick the futurx-website project
firebase deploy --only functions,hosting,firestore
```

### 6. Test the flow end-to-end (Test Mode)

- Visit `https://<your-domain>/lovedigitally/premium`
- Enter any email + phone
- Click "Subscribe ₹9/month"
- Razorpay test card: `4111 1111 1111 1111`, any future expiry, any CVV, any OTP
- Complete payment → success page loads with payment ID
- In Firebase Console → Firestore → `lovedigitally_subscriptions` collection should show a doc with `status: "authenticated"`
- Trigger a test webhook from Razorpay dashboard → check `lovedigitally_webhook_events` collection

If any of those fail, check `firebase functions:log`.

### 7. Submit KYC (still in Razorpay Dashboard)

- Continue your onboarding flow → Business Details, KYC Details
- Business type: **Individual / Sole Proprietorship**
- Business name (display): **Love Digitally**
- Website URL: your live Firebase Hosting URL (with the policy pages reachable)
- Business category: Software / SaaS
- Upload all KYC documents from step 3
- Submit for review

### 8. Wait for KYC approval — typically 2–5 business days

Razorpay reviews:
- Identity (PAN, Aadhaar)
- Bank account match
- Website with all 4 policy pages reachable
- A test transaction succeeded

You will receive an email when approved.

### 9. Flip to Live Mode (once approved)

- Generate Live API Keys: `rzp_live_*`
- **Re-create the ₹9/month plan in Live Mode** — Plan IDs are mode-specific. Save the new `plan_id`.
- Update Webhook in Live mode (same URL pattern, new secret).
- Update `functions/.env` with the four Live values.
- Redeploy: `firebase deploy --only functions`.
- Run a real ₹9 transaction on your own card to confirm money flows end-to-end.
- Withdraw / settle to your bank → confirms the full pipeline.

### 10. Start collecting subscriptions

Drive traffic to `/lovedigitally/premium` from the existing site. Today's scope is "anyone who wants to support can subscribe" — gating actual premium features inside the LoveDigitally creator app is a separate task to schedule next.

---

## Used By
- Paydll (planned)
- PGSeat (planned)
- LoveDigitally — web only (active build)

## Environment Variables Summary

| Var | Purpose | Set in |
| --- | --- | --- |
| `RAZORPAY_KEY_ID` | Public-ish key, also passed to web Checkout | `functions/.env` |
| `RAZORPAY_KEY_SECRET` | Signs orders, verifies payment signatures | `functions/.env` (NEVER client-side) |
| `RAZORPAY_WEBHOOK_SECRET` | Verifies inbound webhook signatures | `functions/.env` (NEVER client-side) |
| `RAZORPAY_PLAN_ID` | The ₹9/month plan, mode-specific | `functions/.env` |

## Firestore collections written by the functions
- `lovedigitally_subscriptions/{subscriptionId}` — one doc per subscriber, status updated by webhooks
- `lovedigitally_webhook_events` — append-only audit log of every webhook received
