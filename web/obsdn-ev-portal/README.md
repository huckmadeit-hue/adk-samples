# OBSDN EV Network — Marketing & Operator Portal

Next.js 14 App Router application for the OBSDN EV Network operator recruitment site.

## Stack

- **Framework:** Next.js 14 (App Router, SSG + SSR)
- **Styling:** Tailwind CSS v3 with custom OBSDN palette
- **Fonts:** Syncopate (headings), Inter (body), JetBrains Mono (data)
- **Forms:** React Hook Form + Zod validation
- **CRM:** Airtable API (applicants), Google Sheets (backup)
- **Email:** Resend transactional
- **Hosting:** Vercel (recommended)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, hardware, economics |
| `/fleet` | Fleet specs — hardware, black-box, standards |
| `/operate` | Operator funnel — requirements + 4-step form |
| `/waitlist-confirmed` | Post-application confirmation |
| `/rejected` | Graceful rejection page |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |

## API Routes

| Method | Endpoint | Auth |
|--------|----------|------|
| GET | `/api/v1/health` | None |
| POST | `/api/v1/apply` | None |
| POST | `/api/v1/contact` | None |

## Setup

```bash
cd web/obsdn-ev-portal
npm install
cp .env.example .env.local
# Fill in AIRTABLE_API_KEY, AIRTABLE_BASE_ID, RESEND_API_KEY
npm run dev
```

## Environment Variables

See `.env.example` for required variables.

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `obsidian` | `#0A0A0B` | Primary background |
| `obsidian-surface` | `#1C1C1E` | Card/section backgrounds |
| `cobalt` | `#2D5BFF` | Primary CTA, accents |
| `neural-white` | `#F2F2F7` | Primary text |
| `neural-muted` | `rgba(242,242,247,0.60)` | Secondary text |

## V2 Roadmap

Operator dashboard (`/login/*`) — invoices, payment QR, dashcam requests, JWT auth via NextAuth.js.
