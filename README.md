# Kanpy — Branding & GTM Agency Website

A premium single-page React website built for **Kanpy** as a client project.  
The site presents Kanpy’s service positioning, social proof, case studies, legal pages, and clear call-to-action flows for lead generation.

## Project Summary

- **Type:** Client-facing marketing website
- **Framework:** React + TypeScript + Vite
- **Routing:** `HashRouter` (SPA with hash-based navigation)
- **UI style:** Dark premium design with motion-led section transitions
- **Primary goal:** Convert visitors into strategy call bookings

## Live Experience (What the Website Includes)

### Home Page Sections

1. Hero with strategic CTA
2. Media presence marquee
3. Foundational Brand Setup offer
4. Service pillars
5. AI Lab (Custom GPTs + AI Agents tabs)
6. Case Studies listing
7. Testimonials carousel
8. Final strategy-call CTA

### Additional Pages

- Case Study detail page: `/case-studies/:slug`
- Privacy Policy: `/privacy-policy`
- Terms of Service: `/terms-of-service`

## Tech Stack

- **React 19**
- **TypeScript 5**
- **Vite 6**
- **React Router DOM 7**
- **Framer Motion** (animations/transitions)
- **Lucide React** (icons)
- **Tailwind utility classes via CDN in `index.html`**

## Folder Structure

```text
.
├── App.tsx                        # App shell + routes + global layout/footer
├── index.tsx                      # React entry point
├── index.html                     # Meta, font setup, Tailwind CDN, root mount
├── components/
│   ├── Navbar.tsx                 # Top navigation + mobile drawer + section scrolling
│   ├── Hero.tsx
│   ├── MediaPresence.tsx
│   ├── FoundationalBrand.tsx
│   ├── Services.tsx
│   ├── AISystems.tsx
│   ├── CaseStudiesSection.tsx
│   ├── CaseStudyDetailPage.tsx
│   ├── Testimonials.tsx
│   ├── FooterCTA.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   ├── BackgroundEffect.tsx
│   └── TechnoForest.tsx
├── data/
│   └── caseStudies.ts             # Case-study content model + dataset
├── src/assets/                    # Local image assets (wordmark, favicon, etc.)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started (Local Development)

### Prerequisites

- Node.js **18+** (recommended: latest LTS)
- npm (comes with Node)

### Install and Run

```bash
npm install
npm run dev
```

Then open the local Vite URL (commonly `http://localhost:3000`).

## Available Scripts

- `npm run dev` — starts local development server
- `npm run build` — creates production build
- `npm run preview` — previews production build locally

## Routing Notes

This project uses `HashRouter`, so URLs are hash-based in production environments without server-side route rewrites.

Example routes:

- `/#/`
- `/#/case-studies/connecta`
- `/#/privacy-policy`
- `/#/terms-of-service`

## Content Management Guide

### 1) Case Studies (Most Important)

Edit: `data/caseStudies.ts`

Each case study uses a typed schema:

- `slug`, `title`, `oneLineSummary`, `services`, `metricHighlight`
- `thumbnail`, `company`, optional `website`, optional `clientInfo`
- `problem`, `problemPoints`, optional `problemImage`
- `whatWeDid[]` steps (`title`, `description`, `result`, optional `image`)
- `impact[]` metrics (`label`, `stats`)
- optional `brandGallery[]`

To add a new case study:

1. Duplicate an existing object in `caseStudiesData`
2. Create a unique `slug`
3. Fill all required fields
4. Add valid image URLs
5. Save and verify card + detail page rendering

### 2) Core Page Copy

Text and section copy are managed directly inside component files in `components/`.

- Hero: `components/Hero.tsx`
- Services: `components/Services.tsx`
- AI Lab cards: `components/AISystems.tsx`
- Testimonials: `components/Testimonials.tsx`
- Footer/legal links and contact: `App.tsx`

### 3) Legal Content

- Privacy policy content: `components/PrivacyPolicy.tsx`
- Terms content: `components/TermsOfService.tsx`

## Brand / Asset Updates

- Wordmark and favicon are in `src/assets/`
- `Navbar.tsx` currently uses `src/assets/kanpy.png`
- Site metadata title is set in `index.html`

## Animation + UX Behavior

- Scroll resets between route changes via `ScrollToTop` helper in `App.tsx`
- Section reveal and transitions are implemented with Framer Motion
- Navbar supports smooth scroll to section anchors on home page
- Mobile menu locks body scroll when open

## Build & Deployment

### Production Build

```bash
npm run build
```

Output is generated in `dist/`.

### Deploying to Static Hosts

Because this app uses `HashRouter`, it works reliably on static hosting (GitHub Pages, Netlify, Vercel static output, S3 static hosting) without custom 404 rewrites for app routes.

## Environment Variables

`vite.config.ts` reads `GEMINI_API_KEY` and maps it to:

- `process.env.API_KEY`
- `process.env.GEMINI_API_KEY`

At present, no active component directly consumes this key. Keep or remove this mapping based on future API integration needs.

## Known Notes

- `components/TrustedBy.tsx` exists but is currently not rendered in `App.tsx`
- Most visual styling is done using utility classes in JSX and base styles in `index.html`

## Client Handover Checklist

- Update final production contact details and social links in `App.tsx`
- Verify all external links (Calendly, social profiles, case-study URLs)
- Review legal text with legal counsel before public launch
- Optimize media assets if adding heavier images/videos
- Build once (`npm run build`) before deployment handoff

## Ownership & Usage

This repository contains a custom-built client website for Kanpy.  
Reuse, redistribution, or resale should follow the project’s client agreement and business terms.
