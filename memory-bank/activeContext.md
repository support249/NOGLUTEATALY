# Active Context

Current focus: SEO migration for domain cutover (GSC parity).

## Recent work

- SEO migration from `GSC and SEO/` exports: WordPress-style root URLs for tours/posts (`/[slug]/`), section pages with trailing slashes (`/tours/`, `/blog/`, `/faq/`, `/contact/`)
- `/tours/` is now the Bokun product-list booking widget; custom tour cards preserved at `/experiences/` (`ToursListing` component)
- `app/[slug]/page.tsx` serves tour and blog content at root slugs; 301 redirects from legacy `/tours/{tour-slug}` paths and `/blog/:slug`
- `app/sitemap.ts`, `app/robots.ts`, `lib/seo.ts` (canonical URLs, `metadataBase`), `middleware.ts` (www → apex)
- Per-page metadata with canonical + Open Graph; homepage title/description aligned with GSC keywords
- Internal links updated across components and `content/site.ts`; blog body links use relative paths
- WordPress junk redirects: `/tag/*`, `/category/*`, `/feed`, `/wp-admin/*` → home
- GSC 404/crawled-not-indexed redirects: old `/tour/rome-gluten-free-...` → Food Lovers tour; post/tag feeds → post or home; `/wp-json/*`, `/wp-content/*`, `/wp-includes/*` → home; spam page `keep-in-touch-with-site-visitors-and-boost-loyalty` → home

## Next steps

- Deploy to production; configure host to force HTTPS on apex domain
- Decommission WordPress on the domain (single stack only)
- Submit `https://nogluteataly.com/sitemap.xml` in GSC after cutover
- Restyle tour detail and blog pages visually
- Refine Bokun widget styling on `/tours/` if needed
- Add real booking (widget live on `/tours/`; per-tour embeds still TBD)
- Import original images; contact form now uses Brevo transactional email (`/api/contact`)
- Add Brevo env vars on host (`BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, optional `CONTACT_TO_EMAIL`)

## Cutover notes

- GSC shows ~93% clicks on homepage; protect `/` H1 and “gluten free food tour Rome” intent
- Resolve remaining GSC 404 / crawled-not-indexed URLs in Search Console UI when available
