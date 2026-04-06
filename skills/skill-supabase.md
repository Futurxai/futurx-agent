# Skill: Supabase

## Trigger
Any task involving database, storage, realtime, or backend queries

## Steps
1. Read packages/shared-supabase/index.ts for existing client setup
2. Reuse the existing client — never create a new one
3. For queries: use typed Supabase client with generated types
4. For storage: use supabase.storage bucket — never store files locally
5. For realtime: use supabase.channel for live updates
6. Always add Row Level Security (RLS) to every new table

## Example
EatWell meal log → insert to meals table → RLS ensures user sees only their data

## Notes
Run supabase gen types after every schema change. Never expose service role key client-side.
