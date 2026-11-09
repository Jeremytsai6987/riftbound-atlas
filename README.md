# Riftbound Atlas

Trilingual Riftbound card gallery and private inventory, hosted on GitHub Pages with Supabase Auth + Postgres.

## Database setup

1. Create a Supabase project at https://supabase.com/dashboard (this is a required user action).
2. In **SQL Editor**, execute [supabase/schema.sql](supabase/schema.sql). It enables RLS and per-user policies.
3. In **Project Settings → API** (or Connect), copy the **Project URL** and **publishable / anon key** into [supabase-config.js](supabase-config.js). **Never use the service_role / secret key.** The publishable key is safe in client-side code *only because RLS is enforced*.
4. Under **Authentication → Providers**, enable Email sign-in (OTP / magic link).
5. Under **Authentication → URL Configuration**, set **Site URL** to your GitHub Pages URL and add that URL as a redirect allow-list entry.
6. GitHub repo **Settings → Pages**: choose **Deploy from a branch → main / (root)**. For public repos GitHub Pages is available on GitHub Free; private repos may require an eligible paid plan. Do not change visibility without deciding whether you want the code public.

## Inventory model

- Card ID: normalized printed card code (not a UUID); DB key is (authenticated user UUID, card code).
- Per-account privacy: Supabase Auth + Row Level Security.
- Local browser copy and JSON import/export.
- After first login, cloud entries take precedence; **export local collection first and import it while signed in** to migrate it. Do not assume the browser automatically merges different inventories.
- For offline writes when signed in, the UI retains a local copy, but failed cloud writes must be manually retried via JSON export/import; it is not an offline sync queue.

## Data licensing & availability

Card art and text belong to Riot Games. External card API requests may be blocked by CORS, and additional localization/data import work is necessary for guaranteed full coverage.
