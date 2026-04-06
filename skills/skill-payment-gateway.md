# Skill: Payment Gateway

## Trigger
Any task involving payments, checkout, invoices, or billing

## Steps
1. Read packages/shared-payments/index.ts first
2. Identify the gateway (Razorpay for India)
3. Build: initPayment → openCheckout → verifyPayment → handleSuccess/Failure
4. Test API response with a sandbox key first
5. Add webhook handler for payment confirmation
6. Never go live without end-to-end sandbox test

## Example
PriSeat booking → Razorpay checkout → webhook confirms → ticket generated

## Notes
Always verify payment server-side — never trust client-side success callback alone.
