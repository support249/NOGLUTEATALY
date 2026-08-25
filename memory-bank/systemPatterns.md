# System Patterns

- Next.js App Router (`app/`)
- React Server Components for pages; client components only where needed (`Header`, `ContactForm`)
- Static content modules in `content/` (`site.ts`, `tours.ts`, `faq.ts`, `posts.json`)
- Shared chrome: `components/Header.tsx`, `components/Footer.tsx`
- Routes match the original IA: `/`, `/tours`, `/tours/[slug]`, `/blog`, `/blog/[slug]`, `/faq`, `/contact`
- The WordPress dump in `nogluteataly.com/` is an archive, not runtime code
