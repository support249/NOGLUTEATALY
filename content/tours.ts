export type Tour = {
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  duration: string;
  schedule: string;
  adultPrice: string;
  childPrice?: string;
  groupSize?: string;
  meetingPoint: string;
  summary: string;
  image?: string;
  highlights: string[];
  included: string[];
  notIncluded?: string[];
  itinerary?: { title: string; text: string }[];
  notes?: string[];
};

export const tours: Tour[] = [
  {
    slug: "the-original-gluten-free-food-lovers-tour-of-rome",
    title:
      "Celiac-Safe Gluten-Free Food Tour of Rome Pizza Gelato & Tiramisù",
    shortTitle: "Food Lovers' Tour",
    location: "Rome",
    duration: "2.5 – 3 hours",
    schedule: "Monday to Sunday, 11:00 AM",
    adultPrice: "€110",
    childPrice: "€89 (0–10 years)",
    groupSize: "Max 12 people",
    meetingPoint: "Piazza Navona, in front of the Fontana dei Quattro Fiumi",
    summary:
      "Discover Rome without gluten — and without stress. Enjoy a delicious, 100% gluten-free journey through Rome’s historic center, tasting pizza, supplì, tiramisù, gelato, and espresso — all with expert guidance and small-group attention.",
    image: "/images/IMG-20250630-WA00661.jpeg",
    highlights: [
      "Taste Rome’s best gluten-free pizza al taglio",
      "Savor authentic supplì",
      "Indulge in 100% gluten-free artisanal gelato",
      "Enjoy a delicious gluten-free tiramisù",
      "Discover Italian coffee culture",
      "Explore Piazza Navona, the Pantheon, Campo de’ Fiori, Largo di Torre Argentina, and Ponte Sisto",
      "Small groups – max 12 people",
      "Led by a Food Lover Guide",
    ],
    included: [
      "Gluten-free tastings as described",
      "Food Lover Guide",
      "Small group experience (max 12 people)",
    ],
    notIncluded: ["Tips", "Hotel pick-up/drop-off", "Drinks not mentioned"],
    itinerary: [
      {
        title: "Meeting Point – Piazza Navona",
        text: "Start at Bernini’s Fountain of the Four Rivers. Look for the guide holding a NOGLUTEATALY sign.",
      },
      {
        title: "Stop 1: Il Caffè",
        text: "Learn about Italian coffee culture and taste a traditional Roman espresso.",
      },
      {
        title: "Stop 2: Supplì",
        text: "Enjoy a fried rice ball with a gooey mozzarella center.",
      },
      {
        title: "Stop 3: Il Gelato",
        text: "Indulge in artisanal gluten-free gelato.",
      },
      {
        title: "Pantheon (outside)",
        text: "Short detour to admire one of Rome’s most impressive monuments.",
      },
      {
        title: "Stop 4: Roman street food",
        text: "Crispy Roman-style pizza al taglio and maritozzo, a soft brioche filled with whipped cream.",
      },
      {
        title: "Final stop: Campo de’ Fiori",
        text: "Savor a gluten-free tiramisù.",
      },
    ],
    notes: [
      "Walking distance is about 1.5 km. Wear comfortable shoes and bring a water bottle.",
      "Please arrive 10 minutes early. Late arrivals cannot be accommodated.",
      "Inform us of any dietary restrictions or allergies.",
      "All stops are certified gluten-free (AIC). Complete absence of cross-contamination cannot be guaranteed for severe allergies.",
    ],
  },
  {
    slug: "the-original-gluten-free-pasta-lovers-tour-of-rome-gelato",
    title: "Rome Gluten-Free Seated Pasta Dinner: Carbonara & Amatriciana",
    shortTitle: "Pasta Lovers' Tour",
    location: "Rome",
    duration: "2.5 – 3 hours",
    schedule: "2.5 – 3 hours",
    adultPrice: "€150",
    childPrice: "€89 (0–10 years)",
    groupSize: "Max 12 people",
    meetingPoint: "Piazza Navona, in front of the Fontana dei Quattro Fiumi",
    summary:
      "Experience Rome like a true foodie — with a full tasting of iconic gluten-free dishes. This 2.5–3 hour walking tour takes you through some of Rome’s most beautiful neighborhoods, combining gluten-free gourmet cuisine with a relaxed stroll through historic streets and lively piazzas.",
    image: "/images/slide-2.jpg",
    highlights: [
      "Delight in artisanal gluten-free gelato",
      "Savor an authentic Roman supplì, 100% gluten-free",
      "Enjoy a full plate of fresh gluten-free pasta (Carbonara or Amatriciana)",
      "Finish with a decadent gluten-free tiramisù",
      "Stroll through Piazza Navona, Campo de’ Fiori, Ponte Sisto, the Pantheon (exterior), and Largo di Torre Argentina",
      "Small groups (max 12 people)",
      "Easy walk (~1.5 km)",
    ],
    included: [
      "Food Lover Guide",
      "Gluten-free tastings: gelato, supplì, fresh pasta (Carbonara or Amatriciana), tiramisù",
      "Small group experience (max 12 people)",
    ],
    notIncluded: ["Tips", "Hotel pick-up/drop-off", "Drinks not mentioned"],
    itinerary: [
      {
        title: "Piazza Navona",
        text: "Meet between the church of Sant’Agnese and the Fontana dei Quattro Fiumi. Look for the NOGLUTEATALY sign.",
      },
      {
        title: "Stop 1 – Artisanal gelato",
        text: "Start with a creamy gelato made from high-quality ingredients. Everything in this gelateria is 100% gluten-free.",
      },
      {
        title: "Stop 2 – Supplì",
        text: "Taste an authentic Roman fried rice ball, prepared gluten-free.",
      },
      {
        title: "Stop 3 – Pasta near the Pantheon",
        text: "A full plate of fresh gluten-free pasta: Carbonara or Amatriciana, made in a dedicated gluten-free kitchen.",
      },
      {
        title: "Stop 4 – Tiramisù at Campo de’ Fiori",
        text: "Finish with gluten-free tiramisù.",
      },
    ],
    notes: [
      "Please arrive 10 minutes early. Late arrivals cannot be accommodated.",
      "All stops are certified gluten-free (AIC).",
    ],
  },
  {
    slug: "gluten-free-pasta-tiramisu-cooking-class-in-rome",
    title: "Gluten Free Pasta And Tiramisu Cooking Class In Rome For Celiacs",
    shortTitle: "Pasta & Tiramisù Cooking Class",
    location: "Rome",
    duration: "Cooking class",
    schedule: "Friday & Saturday",
    adultPrice: "€230",
    meetingPoint: "Confirmed after booking",
    summary:
      "Cook authentic Italian dishes in a fully gluten-free environment. Only gluten-free ingredients are used, and all equipment, utensils, and preparation surfaces are dedicated exclusively to gluten-free cooking.",
    image: "/images/GetImage-3.jpeg",
    highlights: [
      "Fully gluten-free kitchen",
      "Hands-on pasta and tiramisù",
      "Celiac and non-celiac guests cook the same dishes together",
      "Small group experience",
      "Skills you can take home",
    ],
    included: [
      "Hands-on gluten-free cooking class",
      "Pasta and tiramisù preparation",
      "Dedicated gluten-free equipment and ingredients",
      "Shared meal of what you cook",
    ],
    notes: [
      "The class takes place in a fully gluten-free environment. Gluten is not present during the class.",
      "Please tell us about additional allergies before booking.",
    ],
  },
  {
    slug: "gluten-free-rome-safe-food-orientation-walk-with-a-local-expert",
    title: "Gluten-Free Rome: Safe Food Orientation Walk with a Local Expert",
    shortTitle: "Safe Food Orientation Walk",
    location: "Rome",
    duration: "Approximately 1.5 hours",
    schedule: "Times confirmed after enquiry",
    adultPrice: "€75",
    childPrice: "€60 (0–10 years)",
    meetingPoint: "Piazza Farnese",
    summary:
      "A practical, guided introduction to eating gluten-free in Rome. This is not a traditional food tour and not a full meal — it is designed to help you feel safe, confident, and independent from day one.",
    image: "/images/IMG-20251018-WA0028-scaled.jpg",
    highlights: [
      "Taste a traditional Roman gluten-free supplì",
      "Enjoy classic Italian gluten-free gelato in a gluten-free cup or cone",
      "Learn how to order safely in Rome",
      "Understand what to trust, what to avoid, and common traveler mistakes",
      "Stop at NaturaSì to learn how to read Italian labels",
      "Digital gluten-free shortlist of Rome after the walk",
    ],
    included: [
      "Guided orientation walk",
      "Supplì and gelato tastings from certified gluten-free (AIC) locations",
      "Digital gluten-free shortlist of Rome",
    ],
    itinerary: [
      {
        title: "Meeting point",
        text: "Piazza Farnese. The walk ends at Campo de’ Fiori.",
      },
      {
        title: "Tastings and practical guidance",
        text: "Supplì, gelato, ordering language, and a NaturaSì stop for label reading.",
      },
    ],
    notes: [
      "This is a short orientation walk of about 1 hour 30 minutes. Tastings are intentional and not a full meal.",
      "Some recommended venues offer a 5% courtesy discount when you show the guide.",
    ],
  },
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
