# Tree House Cleaning — Staff Platform (Phase 1)

A real Next.js + Supabase application: a public marketing/quote page and
an authenticated, role-gated staff portal at `/staff`. This is Phase 1 of
a 4-phase build — see **What's real vs. what's still a stub** below before
you show this to anyone.

## Why Next.js + Supabase

Every tool you've had built before this (the website, the quote
calculator, the workforce app) was a single HTML file you could open
straight in a browser — no install, nothing to host. This platform can't
be that, because the brief needs things a static file genuinely cannot
do safely: a login that actually blocks the wrong role from seeing data
even if they guess a URL or call the API directly, and more than one
person's phone updating the same database at once (time clock, chat).
That requires a real server and a real database. Supabase gives you that
database (Postgres), login system, file storage and realtime updates
without you having to run a server yourself; Next.js is the app that
talks to it. You'll need to create one free Supabase project and click
"Deploy" on Vercel — a few steps, done once, documented below.

## What's real vs. what's still a stub (read this first)

**Fully real and working, once you connect your own Supabase project:**
- Database schema for every module in the brief (properties, cleaning
  instructions + versions + photos, jobs, recurring schedules, time
  clock, chat, complaints, notifications, announcements, quote requests)
- Row-Level Security on every table — a STAFF account cannot read or
  write outside its own role's rules even by calling the Supabase API
  directly, not just through this app's screens
- Real authentication (Supabase Auth) with a route guard in middleware
  that blocks `/staff/**` for anyone not signed in
- The Clock In / Pause / Resume / Clock Out state machine — implemented
  as a single atomic Postgres function (`staff_clock_action`,
  `supabase/migrations/0004_time_clock_function.sql`) so the rules hold
  even under a double-click or a direct API call. Pause time is
  tracked and excluded from worked time automatically.
- The public quote-request form — posts to a real API route that
  inserts into the `quote_requests` table (service-role key, never
  exposed to the browser)
- Admin-only pages are gated **server-side**, not just hidden in the nav

**Deliberately a stub right now — reads real data, but no "write" UI yet:**
Jobs, Properties, Chat and Complaints pages. Each already queries its
real table through the real RLS rules for whoever is logged in, so you
can see the access model working, but there's no "create a job" or
"send a message" button yet — that's Phase 2/3. The page itself says so.

**Not started yet (Phases 2–4):**
- Recurring-schedule generation, job detail pages
- Cleaning-instruction editor with photo upload + version history
- Live chat (Supabase Realtime), complaint workflow, notifications
  (in-app/push/email), announcements composer
- Employee create/edit, CSV exports, reporting dashboard
- Porting the pricing logic from the existing quote calculator into
  this quote-request flow (so a submitted request can be priced here
  instead of only triaged)
- Translating the public site (currently English-only, same scope
  decision made on the static site's service pages)
- PWA/offline support, push notifications

Nothing here claims to work that doesn't. If a button isn't built, it
isn't on the screen.

## Folding in the existing systems

Per your direction, the workforce-management app (scheduling, weekly
settlement, invoicing) and the quote calculator (Workload/Pricing
Engine) get folded into this platform rather than kept as separate
tools. This phase lays the schema groundwork for that (`jobs`,
`recurring_schedules`, `quote_requests`) but the actual porting —
rebuilding the settlement/payslip view and wiring the real pricing
engine into the quote flow — happens in Phase 4 and the quote-flow
follow-up above, once I've gone through those two tools' logic in
detail rather than guessing at it from memory.

## One-time setup

1. **Create a Supabase project** — supabase.com → New project (free
   tier is enough to start). Note the project URL and two keys from
   Settings → API: the `anon` `public` key and the `service_role`
   key (keep the service-role key secret — never put it in code that
   ships to the browser).

2. **Run the migrations** — Supabase Dashboard → SQL Editor → paste
   and run each file in `supabase/migrations/` **in order**
   (`0001_schema.sql`, `0002_rls.sql`, `0003_storage.sql`,
   `0004_time_clock_function.sql`). (If you prefer the CLI:
   `supabase link` then `supabase db push`.)

3. **Create your own account as the first ADMIN** — Dashboard →
   Authentication → Users → Add user (enter your email + a password).
   Signing up happens only this way for now — there's no public
   "create account" page, by design, so random visitors can't make
   themselves a staff account. Then in the SQL Editor:
   ```sql
   update public.profiles set role = 'ADMIN' where full_name = 'you@example.com';
   ```
   (every new user gets `full_name` defaulted to their email until you
   set a real name — update that too while you're there)

4. **Environment variables** — copy `.env.example` to `.env.local` and
   fill in the three values from step 1.

5. **Run it locally**: `npm install && npm run dev`, then open
   `http://localhost:3000` (public site) and
   `http://localhost:3000/staff/login` (staff portal, sign in with the
   account from step 3).

6. **Deploy** — push this repo to GitHub, then import it on Vercel.
   Add the same three environment variables in Vercel's project
   settings before the first deploy.

## Project layout

```
src/app/                  public site (/) + API routes
src/app/staff/login/      sign-in (outside the auth-gated layout)
src/app/staff/(protected)/  everything that requires sign-in
src/components/           shared UI
src/lib/supabase/         browser / server / admin Supabase clients
src/middleware.ts         route guard for /staff/**
supabase/migrations/      the entire database, in order
```

## Design system

Carried over from the static site so both feel like one product:
Cormorant Garamond (headings) + Manrope (body), Forest `#1C2C20`,
Sage `#7C8C74`, Warm White `#F8F6F1`, Beige `#E8E1D5`. No personal
names appear anywhere in the public site or its footer, per your
standing instruction — the same rule extends to the staff portal:
branch/role labels only, no individual names surfaced to the public.
