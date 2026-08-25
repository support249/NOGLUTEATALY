export const site = {
  name: "NOGLUTEATALY",
  tagline: "Gluten-Free Food Tours in Rome for Celiacs",
  description:
    "Enjoy pizza, pasta, gelato and tiramisù with confidence. We carefully select trusted restaurants experienced in serving guests with celiac disease and strict gluten-free safety protocols.",
  location: "Piazza Navona, Roma, 00186, IT",
  email: "alessiabiancohl@gmail.com",
  phone: "+39 3396806214",
  phoneHref: "tel:+393396806214",
  instagram: "https://instagram.com/nogluteataly/",
  nav: [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  footerNav: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  hero: {
    slides: [
      {
        id: "01",
        title: "Food Lovers' Tour",
        href: "/tours/the-original-gluten-free-food-lovers-tour-of-rome",
        image: "/images/slide-01.jpg",
        heading: "Gluten-Free Food Tours in Rome for Celiacs",
        subheading:
          "Enjoy pizza, pasta, gelato and tiramisù with confidence. We carefully select trusted restaurants experienced in serving guests with celiac disease and strict gluten-free safety protocols.",
      },
      {
        id: "02",
        title: "Pasta Lovers' Tour",
        href: "/tours/the-original-gluten-free-pasta-lovers-tour-of-rome-gelato",
        image: "/images/slide-2.jpg",
        heading: "Pasta, Gelato & Tiramisù — Fully Gluten-Free",
        subheading: "A gourmet tasting walk designed for celiac safety",
      },
      {
        id: "03",
        title: "Cooking Class",
        href: "/tours/gluten-free-pasta-tiramisu-cooking-class-in-rome",
        image: "/images/hero.jpg",
        heading: "Cook Authentic Italian Food Gluten-Free",
        subheading: "Small-group class in a fully celiac-safe kitchen",
      },
      {
        id: "04",
        title: "Orientation Walk",
        href: "/tours/gluten-free-rome-safe-food-orientation-walk-with-a-local-expert",
        image: "/images/Clienti2.jpg",
        heading: "Start Rome Gluten-Free Without Stress",
        subheading: "A short orientation walk with local expert guidance",
      },
    ],
  },
  founder: {
    name: "Alessia",
    paragraphs: [
      "Ciao! I’m Alessia, founder of NOGLUTEATALY, a project born from my love for Italian food, travel, and inclusion. After 20+ years in tourism, I decided to create safe, authentic culinary experiences for gluten-free travelers in Italy.",
      "Though I’m not celiac, people close to me are, and I’ve seen their challenges firsthand. My goal is to connect Italy’s amazing food culture with the celiac community — gluten-free, but full of flavor!",
    ],
  },
  safetyPoints: [
    "Carefully vetted gluten-free restaurants",
    "Strict cross-contact management standards",
    "Gluten-free trained local guide",
    "Clear ingredient transparency and safe ordering support",
  ],
  features: [
    {
      title: "Trusted GF Locations",
      text: "Carefully selected venues with proven gluten-free standards and consistent safety procedures.",
    },
    {
      title: "Celiac-Safe Experience",
      text: "Designed to reduce stress and uncertainty while you enjoy authentic Italian cuisine safely.",
    },
    {
      title: "Local Expert Guidance",
      text: "Friendly, knowledgeable guides trained to support safe ordering and ingredient clarity.",
    },
    {
      title: "Authentic Italian Flavors",
      text: "Enjoy traditional Roman dishes prepared with care, quality ingredients, and full confidence.",
    },
  ],
  whyChooseUs: [
    {
      title: "Certified Locations",
      text: "We only visit tested and verified gluten-free restaurants with trusted safety standards.",
    },
    {
      title: "Kitchen Safety",
      text: "Separate tools, clean prep areas, and strict kitchen procedures at every location.",
    },
    {
      title: "Expert Guide Help",
      text: "Our gluten-free trained guide helps you order safely and eat with confidence.",
    },
  ],
  reviews: [
    {
      name: "Hayley M",
      when: "1 month ago",
      title: "Excellent food and tour",
      text: "Just did a gluten-free walking tour and it was fantastic. Our guide, Maurizio, was super friendly, really informative, and shared loads of interesting history about Rome and Italy along the way. Every food stop was safe, delicious, and felt really thoughtfully chosen.",
    },
    {
      name: "Kristen R",
      when: "2 months ago",
      title: "Amazing Gluten Free food tour",
      text: "Guide was amazing and so was the food!",
    },
    {
      name: "Sarah T",
      when: "2 months ago",
      title: "10/10",
      text: "Amazing tour! Was lovely to try the gluten-free places and see more of Rome on the walk. Our tour guide Rebekah was amazing, very friendly and informative. Highly recommend to anyone who is gluten free or coeliac.",
    },
    {
      name: "HailsfromWales",
      when: "3 months ago",
      title: "A great afternoon in Rome",
      text: "This was a great way to learn about the Gluten Free food scene in Rome. Maurizio, our guide, was informative, funny and helpful. If you are a coeliac coming to Rome, book this tour.",
    },
    {
      name: "lindseydell",
      when: "4 months ago",
      title: "Fantastic Tour",
      text: "Anastasia was absolutely amazing. She was personable and very knowledgeable. One of the best tours I have ever taken. Highly recommend!",
    },
    {
      name: "Christine J",
      when: "6 months ago",
      title: "Coeliacs of the world, you MUST do this tour",
      text: "Our deepest gratitude to Alessia and to our guide Sara for offering such a wonderful tour. Sara instilled a sense of calm and of trust, and we ate foods we had never tried before. All stops were either dedicated gluten-free or certified safe by the Italian Celiac Association.",
    },
  ],
} as const;
