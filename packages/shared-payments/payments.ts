const RAZORPAY_API = 'https://api.razorpay.com/v1'

export interface RazorpayConfig {
  keyId: string
  keySecret: string
  webhookSecret?: string
}

export interface CreateOrderInput {
  // amount is in paise — Razorpay rejects rupee values
  amount: number
  currency?: string
  receipt?: string
  notes?: Record<string, string>
}

export interface RazorpayOrder {
  id: string
  amount: number
  currency: string
  receipt: string | null
  status: string
}

export interface VerifyPaymentInput {
  orderId: string
  paymentId: string
  signature: string
}

export interface RazorpayWebhookEvent {
  event: string
  payload: Record<string, unknown>
  created_at: number
}

export interface CreatePlanInput {
  period: 'daily' | 'weekly' | 'monthly' | 'yearly'
  interval: number
  item: {
    name: string
    // amount is in paise
    amount: number
    currency?: string
    description?: string
  }
  notes?: Record<string, string>
}

export interface RazorpayPlan {
  id: string
  period: string
  interval: number
  item: {
    id: string
    name: string
    amount: number
    currency: string
    description?: string
  }
  status?: string
}

export interface CreateSubscriptionInput {
  planId: string
  // total_count is required by Razorpay; default below = 10 yrs of monthly cycles
  totalCount?: number
  customerNotify?: boolean
  startAt?: number
  notes?: Record<string, string>
}

export interface RazorpaySubscription {
  id: string
  plan_id: string
  status: string
  short_url: string
  customer_notify: number
  total_count: number
  paid_count: number
  current_start: number | null
  current_end: number | null
  notes?: Record<string, string>
}

export interface VerifySubscriptionPaymentInput {
  paymentId: string
  subscriptionId: string
  signature: string
}

export async function initPayment(
  input: CreateOrderInput,
  config: RazorpayConfig,
): Promise<RazorpayOrder> {
  return rzpRequest('POST', '/orders', {
    amount: input.amount,
    currency: input.currency ?? 'INR',
    receipt: input.receipt,
    notes: input.notes,
  }, config)
}

export async function verifyPayment(
  input: VerifyPaymentInput,
  config: RazorpayConfig,
): Promise<boolean> {
  const expected = await hmacSha256Hex(
    `${input.orderId}|${input.paymentId}`,
    config.keySecret,
  )
  return timingSafeEqual(expected, input.signature)
}

export async function createPlan(
  input: CreatePlanInput,
  config: RazorpayConfig,
): Promise<RazorpayPlan> {
  return rzpRequest('POST', '/plans', {
    period: input.period,
    interval: input.interval,
    item: {
      name: input.item.name,
      amount: input.item.amount,
      currency: input.item.currency ?? 'INR',
      description: input.item.description,
    },
    notes: input.notes,
  }, config)
}

export async function createSubscription(
  input: CreateSubscriptionInput,
  config: RazorpayConfig,
): Promise<RazorpaySubscription> {
  return rzpRequest('POST', '/subscriptions', {
    plan_id: input.planId,
    total_count: input.totalCount ?? 120,
    customer_notify: input.customerNotify === false ? 0 : 1,
    start_at: input.startAt,
    notes: input.notes,
  }, config)
}

export async function cancelSubscription(
  subscriptionId: string,
  config: RazorpayConfig,
  cancelAtCycleEnd = false,
): Promise<RazorpaySubscription> {
  return rzpRequest(
    'POST',
    `/subscriptions/${subscriptionId}/cancel`,
    { cancel_at_cycle_end: cancelAtCycleEnd ? 1 : 0 },
    config,
  )
}

export async function verifySubscriptionPayment(
  input: VerifySubscriptionPaymentInput,
  config: RazorpayConfig,
): Promise<boolean> {
  // Subscription checkout returns signature = HMAC(payment_id|subscription_id),
  // unlike one-time orders which use order_id|payment_id
  const expected = await hmacSha256Hex(
    `${input.paymentId}|${input.subscriptionId}`,
    config.keySecret,
  )
  return timingSafeEqual(expected, input.signature)
}

export async function handleWebhook(
  rawBody: string,
  signature: string,
  config: RazorpayConfig,
): Promise<{ valid: boolean; event?: RazorpayWebhookEvent }> {
  if (!config.webhookSecret) {
    throw new Error('webhookSecret required to verify webhook')
  }
  const expected = await hmacSha256Hex(rawBody, config.webhookSecret)
  if (!timingSafeEqual(expected, signature)) return { valid: false }
  return { valid: true, event: JSON.parse(rawBody) as RazorpayWebhookEvent }
}

async function rzpRequest<T>(
  method: string,
  path: string,
  body: unknown,
  config: RazorpayConfig,
): Promise<T> {
  const auth = btoa(`${config.keyId}:${config.keySecret}`)
  const res = await fetch(`${RAZORPAY_API}${path}`, {
    method,
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error(
      `Razorpay ${method} ${path} failed: ${res.status} ${await res.text()}`,
    )
  }
  return res.json() as Promise<T>
}

async function hmacSha256Hex(data: string, secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data))
  return [...new Uint8Array(sig)]
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return result === 0
}
