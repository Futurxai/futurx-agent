# Supabase Configuration

## Project
- URL: TBD
- Region: South Asia (Mumbai)

## Services Used
- Supabase Auth (OTP phone login)
- Supabase Database (PostgreSQL)
- Supabase Storage (file uploads, invoices)
- Supabase Realtime (live updates)

## Setup Steps
1. Create Supabase project
2. Enable Row Level Security (RLS) on all tables
3. Run: supabase gen types typescript --project-id <id> > types.ts
4. Store connection in packages/shared-supabase
5. Never expose service role key client-side
6. Use anon key for client, service role key for server only
