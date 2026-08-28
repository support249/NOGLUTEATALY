# Progress

## Done

- Next.js + React project scaffold
- Home, Tours, Tour detail, Blog, Blog post, FAQ, Contact
- Content extracted from the saved site and original pages
- Homepage header + hero redesigned to the new wireframe (capsule nav, teal CTAs, slide cards)
- Mobile header: hamburger icon with nav + Contact Us in a dropdown; desktop layout unchanged
- Mobile reviews: one-at-a-time carousel with lower pill/dot indicator (swipe still works); desktop still shows three cards with arrows
- Blog tappable text (listing titles, Read More, post “Blog” crumb) uses accent color plus underline
- **SEO migration:** GSC-matched URLs, sitemap/robots, canonical metadata, 301 redirects, www consolidation

## Left

- Production deploy + WordPress decommission + GSC sitemap resubmit
- Full visual redesign (tour/blog detail pages)
- Booking widgets
- Image/media library
- Contact form backend
- Newsletter / payment badges if still needed

## Known issues

- Local resource folder has no photos; pages are text-first
- Contact form currently opens a mailto draft
- Pasta-tour child price on the original site was listed as €110 adult on one page and €150 on the listing; the listing price (€150) is used
- GSC CSV exports did not include the 5×404 / 8×crawled-not-indexed example URLs — **resolved** via `pages Not found/Table.csv` and `Crawled - currently not indexed/Table.csv` redirects in `next.config.ts`
