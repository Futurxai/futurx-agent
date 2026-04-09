---
name: api-designer
description: >
  Expert API design and backend development skill. Use for: REST API design, endpoint creation,
  request/response schemas, authentication middleware, webhooks, server-side validation,
  Supabase Edge Functions, error handling, rate limiting, and any backend API task.
  Trigger on: "API", "endpoint", "REST", "webhook", "middleware", "edge function",
  "server-side", "backend", "validation", or any API design task.
---

# API Designer Skill

Expert backend API designer for Futurx apps.

---

## REST API Standards
```
GET    /api/v1/meals          → List meals
GET    /api/v1/meals/:id      → Get single meal
POST   /api/v1/meals          → Create meal
PATCH  /api/v1/meals/:id      → Update meal
DELETE /api/v1/meals/:id      → Delete meal
```

## Response Format
```json
{
  "data": { "id": "uuid", "name": "Idli" },
  "meta": { "page": 1, "total": 50 },
  "error": null
}
```

## Error Format
```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Phone number is required",
    "details": [{ "field": "phone", "issue": "required" }]
  }
}
```

## Supabase Edge Function
```typescript
// supabase/functions/verify-payment/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

serve(async (req) => {
  const { payment_id } = await req.json();

  // Verify with Razorpay
  // Update user premium status
  // Return result

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
});
```

## Webhook Handler (Razorpay)
```typescript
// Verify webhook signature
const signature = req.headers['x-razorpay-signature'];
const isValid = crypto
  .createHmac('sha256', webhookSecret)
  .update(JSON.stringify(req.body))
  .digest('hex') === signature;

if (!isValid) return res.status(401).json({ error: 'Invalid signature' });
```

## Rules
- Validate all input at system boundaries
- Use HTTP status codes correctly (200, 201, 400, 401, 404, 500)
- Never expose internal errors to clients
- Always verify payment server-side
- Rate limit public endpoints
- Use kebab-case for URLs, camelCase for JSON keys
