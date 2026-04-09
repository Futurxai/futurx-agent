---
name: supabase-developer
description: >
  Expert Supabase development skill. Use for: database queries, table design, Row Level Security (RLS),
  Supabase Auth (OTP, email, social login), Storage buckets, Realtime subscriptions, Edge Functions,
  PostgreSQL queries, migrations, type generation, and any task involving Supabase as backend.
  Trigger on: "supabase", "database", "RLS", "storage bucket", "realtime", "edge function",
  "postgres", "auth", "OTP login", "migration", or any backend/database task.
---

# Supabase Developer Skill

Expert Supabase backend developer for all database, auth, storage, and realtime tasks.

## How to Use This Skill
Read the relevant section below. Always check the existing shared-supabase package first.

---

## Database Design

### Table Naming
- Use snake_case: `meal_plans`, `user_profiles`, `bookings`
- Prefix with app name if shared: `eatwell_meals`, `pgseat_bookings`

### Required Columns (Every Table)
```sql
id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
user_id UUID REFERENCES auth.users(id) NOT NULL
```

### Row Level Security (RLS) — MANDATORY
```sql
-- Enable RLS on every table
ALTER TABLE meals ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users read own data" ON meals
  FOR SELECT USING (auth.uid() = user_id);

-- Users can only insert their own data
CREATE POLICY "Users insert own data" ON meals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only update their own data
CREATE POLICY "Users update own data" ON meals
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can only delete their own data
CREATE POLICY "Users delete own data" ON meals
  FOR DELETE USING (auth.uid() = user_id);
```

## Auth (OTP Phone Login)
```typescript
// Send OTP
const { error } = await supabase.auth.signInWithOtp({
  phone: '+91' + phoneNumber
});

// Verify OTP
const { data, error } = await supabase.auth.verifyOtp({
  phone: '+91' + phoneNumber,
  token: otpCode,
  type: 'sms'
});

// Get current session
const { data: { session } } = await supabase.auth.getSession();

// Sign out
await supabase.auth.signOut();
```

## Storage
```typescript
// Upload file
const { data, error } = await supabase.storage
  .from('invoices')
  .upload(`${userId}/${fileName}`, file);

// Get public URL
const { data } = supabase.storage
  .from('invoices')
  .getPublicUrl(filePath);
```

## Realtime
```typescript
const channel = supabase
  .channel('bookings')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'bookings' },
    (payload) => console.log('Change:', payload)
  )
  .subscribe();
```

## Rules
- NEVER expose service_role key in client-side code
- ALWAYS use anon key for client apps
- ALWAYS enable RLS on every new table
- Run `supabase gen types typescript` after every schema change
- Single Supabase client instance — reuse from shared-supabase package
