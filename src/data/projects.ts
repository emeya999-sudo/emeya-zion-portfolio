export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  description: string;
  role: string;
  deliverables: string[];
  link: string;
  images: {
    hero: string;
    section1: string;
    section2?: string;
  };
  isFeatured?: boolean;
};

export const projects: Project[] = [
  {
    id: "danfo-bistro",
    title: "Danfo Bistro & Dives",
    category: "Hospitality · Restaurant & Bar Experience",
    tagline: "A journey of flavours inspired by Lagos, its people, and its street culture.",
    problem: "High-character dining venues often struggle to translate their physical atmosphere and diverse menu offerings into a mobile-friendly digital experience that makes ordering and reservations effortless.",
    solution: "A dynamic, Lagos-inspired web experience featuring bold typography, interactive menu category filtering, multiple location highlights, and direct table reservation initiation.",
    description: "A bespoke restaurant web experience engineered for Danfo Bistro & Dives in Lagos, spotlighting signature comfort food, outpost locations, and frictionless table booking.",
    role: "Website Design & Development",
    deliverables: [
      "Custom UI/UX & Responsive Layout",
      "Interactive Menu Filtering",
      "Multi-Location Showcase",
      "Table Reservation Flow"
    ],
    link: "https://danfo-bistro-and-dives.vercel.app/",
    images: {
      hero: "/projects/danfo-bistro/hero.webp",
      section1: "/projects/danfo-bistro/section-01.webp",
      section2: "/projects/danfo-bistro/section-02.webp",
    },
    isFeatured: true,
  },
  {
    id: "marthas-kitchen",
    title: "Martha's Kitchen",
    category: "Restaurant · Online Ordering Experience",
    tagline: "Making menu discovery intuitive and online food ordering effortless.",
    problem: "Traditional restaurant websites often fail on mobile devices, bury menus in difficult PDFs, and make ordering confusing for hungry customers.",
    solution: "A bespoke, mobile-first web ordering experience featuring visual dish categorization, real-time cart interaction, and frictionless order placement.",
    description: "A Nigerian restaurant ordering experience engineered around menu discovery, dynamic cart interaction, and a smoother conversion journey from appetite to checkout.",
    role: "Website Design & Frontend Development",
    deliverables: [
      "Custom UI/UX Design",
      "Interactive Digital Menu",
      "Cart & Checkout Flow",
      "Mobile-Optimized Experience"
    ],
    link: "https://martha-s-kitchen.vercel.app/",
    images: {
      hero: "/projects/marthas-kitchen/hero.webp",
      section1: "/projects/marthas-kitchen/section-01.webp",
      section2: "/projects/marthas-kitchen/section-02.webp"
    },
    isFeatured: true,
  },
  {
    id: "crown-blades",
    title: "Crown & Blades",
    category: "Grooming & Hospitality · Service Booking",
    tagline: "Elevating a grooming brand with a premium digital storefront.",
    problem: "High-end service businesses lose credibility when their web presence doesn't match the sophistication of their in-person customer experience.",
    solution: "An editorial, luxury web presence that spotlights artisanal grooming services, pricing transparency, and instant booking initiation.",
    description: "A premium business website concept designed to reinforce the brand's luxury positioning, showcase master stylists, and make appointments effortless to book.",
    role: "Website Design & Development",
    deliverables: [
      "Luxury Editorial Layout",
      "Service & Pricing Directory",
      "Appointment Booking Integration",
      "Fast Performance & SEO"
    ],
    link: "https://crown-blades.vercel.app/",
    images: {
      hero: "/projects/crown-and-blades/hero.webp",
      section1: "/projects/crown-and-blades/section-01.webp",
      section2: "/projects/crown-and-blades/section-02.webp"
    },
    isFeatured: true,
  },
  {
    id: "diamonds-international",
    title: "Diamonds International School",
    category: "Education · Institutional Website",
    tagline: "Inspiring parental confidence through clear institutional storytelling.",
    problem: "Schools frequently struggle with cluttered navigation, outdated layouts, and disorganized information that frustrates prospective parents.",
    solution: "A structured, welcoming school portal presenting academic curriculum, campus facilities, extracurriculars, and admissions criteria with absolute clarity.",
    description: "A modern school website designed to present academics, campus life, admissions, and institutional values clearly to prospective families.",
    role: "Website Design & Development",
    deliverables: [
      "Information Architecture",
      "Admissions & Inquiries Funnel",
      "Curriculum & Facility Showcase",
      "Responsive Multi-Device Layout"
    ],
    link: "https://diamond-school-psi.vercel.app/",
    images: {
      hero: "/projects/diamonds-international-school/hero.webp",
      section1: "/projects/diamonds-international-school/section-01.webp",
      section2: "/projects/diamonds-international-school/section-02.webp"
    },
    isFeatured: true,
  },
  {
    id: "la-taverna",
    title: "La Taverna",
    category: "Hospitality · Restaurant & Bar",
    tagline: "Capturing atmosphere and driving table reservations.",
    problem: "Hospitality venues need websites that convey ambiance, highlight seasonal culinary offerings, and convert casual visitors into table bookings.",
    solution: "An atmospheric web experience combining typography, evocative imagery, and a direct reservation interface designed to increase foot traffic.",
    description: "A polished restaurant web experience focused on venue atmosphere, menu storytelling, and direct customer reservation conversion.",
    role: "Website Design & Development",
    deliverables: [
      "Atmospheric Editorial Design",
      "Digital Menu Presentation",
      "Reservation Request Flow",
      "Mobile-First Optimization"
    ],
    link: "https://la-tarvern.vercel.app/",
    images: {
      hero: "/projects/la-taverna/hero.webp",
      section1: "/projects/la-taverna/section-01.webp",
      section2: "/projects/la-taverna/section-02.webp"
    },
  },
  {
    id: "blessed-baidoo",
    title: "Blessed Baidoo",
    category: "Creative Studio · 3D Portfolio",
    tagline: "Showcasing commercial 3D motion with immersive visual pacing.",
    problem: "High-caliber visual artists and motion designers require portfolio layouts that prioritize heavyweight visual media without slowing down page performance.",
    solution: "A bespoke dark-mode portfolio architecture featuring fluid asset loading, cinematic layouts, and clear client inquiry pathways.",
    description: "A visual portfolio experience built to showcase 3D motion, commercial visual campaigns, and digital direction with clean, high-performance execution.",
    role: "Website Design & Creative Development",
    deliverables: [
      "Cinematic Visual Layout",
      "High-Performance Media Loading",
      "Minimalist Navigation",
      "Client Contact Conversion"
    ],
    link: "https://blessed-baidoo-portfolio.vercel.app/",
    images: {
      hero: "/projects/blessed-baidoo/hero.webp",
      section1: "/projects/blessed-baidoo/section-01.webp",
      section2: "/projects/blessed-baidoo/section-02.webp"
    },
  }
];
