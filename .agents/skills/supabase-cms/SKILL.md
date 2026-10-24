---
name: supabase-cms
description: >-
  Use this skill when designing schemas, configuring authentication, implementing
  Row Level Security (RLS), and writing server-side CMS mutations for PT Cahaya Restu Amanah.
---

# Supabase CMS & Backend Security

Architecture and security guidelines for the PT Cahaya Restu Amanah content management system.

## 1. Data Schema Design
The CMS manages two primary entities:
- **`news` (Berita & Informasi)**:
  - `id`: UUID (Primary Key, default `gen_random_uuid()`)
  - `title`: TEXT (NOT NULL)
  - `slug`: TEXT (UNIQUE, NOT NULL)
  - `content`: TEXT (NOT NULL, markdown or structured text)
  - `excerpt`: TEXT
  - `thumbnail_url`: TEXT
  - `status`: TEXT (CHECK `status IN ('draft', 'published')`, default `'draft'`)
  - `published_at`: TIMESTAMPTZ
  - `created_at`: TIMESTAMPTZ (default `now()`)
  - `updated_at`: TIMESTAMPTZ (default `now()`)
- **`work_documentation` (Dokumentasi Pekerjaan)**:
  - `id`: UUID (Primary Key, default `gen_random_uuid()`)
  - `service_type`: TEXT (References verified company services, NOT NULL)
  - `title`: TEXT (NOT NULL)
  - `description`: TEXT
  - `image_urls`: TEXT[] (Array of storage URLs)
  - `status`: TEXT (CHECK `status IN ('draft', 'published')`, default `'draft'`)
  - `created_at`: TIMESTAMPTZ (default `now()`)
  - `updated_at`: TIMESTAMPTZ (default `now()`)

## 2. Access Control & Single Admin Model
- **Authentication**: Managed via Supabase Auth.
- **Public Signup Disabled**: Public user registration (`enable_signup`) must be strictly disabled in Supabase Auth to prevent unauthorized account creation.
- **Verified Admin Identity**: Access is strictly restricted to one designated administrator account. All write and privileged operations must be verified against the specific authorized admin identity (via server-side configuration/environment variable), never granting privileges based solely on a generic `authenticated` status.
- **No Hardcoded Credentials**: Never write or commit specific admin emails, passwords, or secret tokens into repository files.

## 3. Row Level Security (RLS) Policies
RLS must be enabled on all CMS tables (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`). Policies must be explicitly tested across three scopes:
- **1. Anonymous Users (`anon`)**:
  - `SELECT` only where `status = 'published'`.
  - Draft items and private records must never be visible or queryable.
- **2. Authenticated Non-Admin Users**:
  - Must not have write permissions or access to unpublished drafts (fall back to anonymous restrictions or deny access).
- **3. Verified Admin User**:
  - Full access (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) across all records, including drafts, contingent on verified admin identity.

## 4. Server-Side Validation & Secret Protection
- **Environment Variables**:
  - `SUPABASE_URL`: Public project URL.
  - `SUPABASE_ANON_KEY`: Public client key (strictly constrained by RLS).
  - `SUPABASE_SERVICE_ROLE_KEY`: Privileged key used strictly within server-side execution; NEVER expose to client-side bundles or version control.
- **Server-Side Mutation**:
  - All create, update, delete, and publish operations must be processed via server-side endpoints/actions with session verification.
  - Never trust raw user inputs; sanitize content and validate slugs on the server.
- **Storage & Asset Security**:
  - Images and attachments stored in Supabase Storage buckets.
  - Public read access permitted only for published media; draft/private files must remain restricted.
  - File upload, modification, and deletion restricted exclusively to the verified admin.
