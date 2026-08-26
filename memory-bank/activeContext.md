# Active Context

Current focus: blog link styling.

## Recent work

- Blog links (crumb, post titles, Read More) are underlined in the accent color so they read as tappable
- Mobile reviews show one card at a time with a pill/dot indicator; desktop still shows three with arrows
- Mobile header now uses a hamburger icon; nav links and Contact Us sit in a dropdown overlay
- Linked `public/images/favicon.jpg` as the site favicon via Next.js metadata
- Primary accent set to `#916133` (hover `#7a5229`) site-wide via CSS variables
- Restyled `/faq` and `/contact`; tours listing cards; fixed nav blur-on-scroll
- Fixed `/tours` ChunkLoadError; restyled tours listing

## Next steps

- Restyle tour detail `/tours/[slug]` and blog pages
- Add real booking (Bokun/Eventbrite or a custom flow)
- Import original images (none were saved in the local resource dump)
- Replace the mailto contact form with a proper backend
