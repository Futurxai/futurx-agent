---
name: razorpay-developer
description: >
  Expert Razorpay payment integration skill. Use for: payment checkout, UPI payments, card payments,
  net banking, wallets, payment verification, webhooks, refunds, subscription billing,
  and any task involving Razorpay. Trigger on: "razorpay", "payment", "checkout", "UPI",
  "pay", "billing", "invoice", "refund", "subscription", or any payment-related task.
---

# Razorpay Developer Skill

Expert payment integration for Indian market — UPI, Cards, Net Banking, Wallets.

---

## Checkout Integration
```typescript
const options = {
  key: 'rzp_test_XXXX',        // Key ID (client-safe)
  amount: 19900,                 // Amount in PAISE (₹199 = 19900)
  currency: 'INR',
  name: 'App Name',
  description: 'Premium Unlock',
  image: 'assets/logo.png',
  prefill: {
    contact: '+919876543210',
    email: 'user@email.com'
  },
  config: {
    display: {
      blocks: {
        upi: {
          name: 'Pay via UPI',
          instruments: [
            { method: 'upi', flows: ['qrcode', 'collect', 'intent'] }
          ]
        },
        other: {
          name: 'Other Methods',
          instruments: [
            { method: 'card' },
            { method: 'netbanking' },
            { method: 'wallet' }
          ]
        }
      },
      sequence: ['block.upi', 'block.other'],
      preferences: { show_default_blocks: true }
    }
  },
  theme: { color: '#1D9E75' },
  handler: (response) => {
    // response.razorpay_payment_id
    verifyPaymentServerSide(response.razorpay_payment_id);
  }
};

const rzp = new Razorpay(options);
rzp.open();
```

## Server-Side Verification (IMPORTANT)
```javascript
const crypto = require('crypto');

function verifyPayment(paymentId, orderId, signature) {
  const body = orderId + '|' + paymentId;
  const expected = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');
  return expected === signature;
}
```

## Rules
- NEVER trust client-side success alone — always verify server-side
- NEVER put Key Secret in client code — only Key ID
- Always use PAISE not Rupees (₹199 = 19900 paise)
- Test with sandbox before going live
- Enable UPI in Razorpay Dashboard → Payment Methods
- Handle payment.failed event for error messages
- Store payment_id in database for refund reference
