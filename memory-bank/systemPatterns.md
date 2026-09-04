# System Patterns

- Next.js App Router (`app/`)
- React Server Components for pages; client components only where needed (`Header`, `ContactForm`, `Hero`, etc.)
- Static content modules in `content/` (`site.ts`, `tours.ts`, `faq.ts`, `posts.json`)
- Shared chrome: `components/Header.tsx`, `components/Footer.tsx`
- SEO helpers in `lib/seo.ts` (`SITE_URL`, `pageMetadata`, `contentPath`); slug resolution in `lib/content-slug.ts`
- Routes match **WordPress/GSC URLs**:
  - Section pages: `/`, `/tours/` (Bokun booking widget), `/experiences/` (preserved custom tour cards), `/blog/`, `/faq/`, `/contact/`
  - Tour and blog **content at root**: `/[slug]/` (not under `/tours/` or `/blog/`)
  - Legacy `/tours/{tour-slug}` and `/blog/:slug` → 301 to `/[slug]/`
- Contact form: `components/ContactForm.tsx` → `POST /api/contact` → Brevo `POST https://api.brevo.com/v3/smtp/email`
- Secrets: `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, optional `BREVO_SENDER_NAME`, `CONTACT_TO_EMAIL`
- `trailingSlash: true`; `middleware.ts` redirects `www` → apex
- `app/sitemap.ts` and `app/robots.ts` for crawlers
- The WordPress dump in `nogluteataly.com/` is an archive, not runtime code
- GSC exports live in `GSC and SEO/` for reference
