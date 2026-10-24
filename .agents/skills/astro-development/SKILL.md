---
name: astro-development
description: >-
  Use this skill when developing, structuring, and maintaining Astro and TypeScript
  pages, components, layouts, and SEO features for the PT Cahaya Restu Amanah website.
---

# Astro & TypeScript Development

Engineering guidelines and quality standards for the PT Cahaya Restu Amanah website.

## 1. Project & Component Architecture
- **Framework**: Astro with TypeScript in strict mode.
- **Directory Convention**:
  - `src/layouts/`: Base HTML skeletons (`BaseLayout.astro`, `AdminLayout.astro`).
  - `src/pages/`: File-based routes (`index.astro`, `tentang-kami.astro`, `layanan/`, `dokumentasi/`, `berita/`, `kontak.astro`, `admin/`).
  - `src/components/`: Reusable, focused UI elements (`Navbar.astro`, `Footer.astro`, `ServiceCard.astro`, `WhatsAppButton.astro`).
  - `src/types/`: Centralized TypeScript interfaces and types.
  - `src/lib/`: Reusable helper utilities and clients (e.g., Supabase client wrapper).
- **Simplicity First**: Prefer standard `.astro` components for zero-JS static delivery. Only introduce client islands (`client:load` / `client:idle`) when stateful interactivity is strictly required.
- **Rendering Strategy**:
  - Public marketing pages must prioritize SSG (Static Site Generation) for optimal loading speed and SEO.
  - Admin routes (`/admin/*`) and authenticated endpoints must enforce session validation on the server side prior to rendering or mutation.
  - Defer SSR configuration and hosting adapter selection until target hosting options are formally evaluated.

## 2. TypeScript Standards
- Enable strict type-checking; avoid `any`.
- Define explicit interfaces for component props using `interface Props { ... }`.
- Validate data models (e.g., service items, news articles, documentation posts) with shared type definitions.

## 3. SEO, Metadata & Route Protection
- Every page must define:
  - Unique, descriptive `<title>` (format: `{Page Title} | PT Cahaya Restu Amanah`).
  - `<meta name="description" content="...">` summarizing page content accurately.
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
  - Canonical URL (`<link rel="canonical" href="...">`).
- Heading hierarchy: Exactly one `<h1>` per page, followed by sequential `<h2>` and `<h3>`.
- **Search Engine Exclusions**: Automated sitemap and `robots.txt` configuration for public pages, while strictly disallowing private routes (`/admin`, `/api/admin/*`).
- **Security Notice**: Never consider admin routes secure simply because they are omitted from sitemaps or robots.txt. Real access control must be enforced through server-side authentication guards.

## 4. Quality & Pre-commit Checklist
Before submitting code changes, verify:
1. **Type Safety**: Run type verification without errors.
2. **Build Integrity**: Ensure clean compilation without broken asset imports or broken internal links.
3. **No Secret Leakage**: Confirm no private environment variables or server keys are referenced in client scripts or `.astro` frontmatter sent to client.
4. **Console Cleanliness**: Ensure zero runtime errors or warnings in the browser console.
5. **Responsive Validation**: Test layouts across mobile (375px), tablet (768px), and desktop (1280px+).
