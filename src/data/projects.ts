export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  link: string;
  isFeatured?: boolean;
  isExperimental?: boolean;
};

export const projects: Project[] = [
  {
    id: "marthas-kitchen",
    title: "Martha's Kitchen",
    category: "Restaurant · Ordering Experience",
    description: "A Nigerian restaurant ordering experience designed around menu discovery, cart interaction, and a smoother customer journey.",
    role: "Creative Developer · UI/UX Designer",
    link: "https://martha-s-kitchen.vercel.app/",
    isFeatured: true,
  },
  {
    id: "la-taverna",
    title: "La Taverna",
    category: "Restaurant · Hospitality",
    description: "A polished restaurant web experience focused on atmosphere, menu presentation, and customer conversion.",
    role: "Web Designer · Developer",
    link: "https://la-tarvern.vercel.app/",
  },
  {
    id: "diamonds-international",
    title: "Diamonds International School",
    category: "Education · School Website",
    description: "A modern school website designed to present academics, facilities, activities, admissions, and the school's identity clearly.",
    role: "Web Designer · Developer",
    link: "https://diamond-school-psi.vercel.app/",
  },
  {
    id: "crown-blades",
    title: "Crown & Blades",
    category: "Grooming · Booking Experience",
    description: "A premium business website concept designed to strengthen the brand's digital presence and make its services easier to discover.",
    role: "Web Designer · Developer",
    link: "https://crown-blades.vercel.app/",
  },
  {
    id: "blessed-baidoo",
    title: "Blessed Baidoo",
    category: "3D · Motion · Portfolio",
    description: "A visual portfolio experience built around 3D motion, commercial visual work, and immersive digital presentation.",
    role: "Creative Developer · UI/UX Designer",
    link: "https://blessed-baidoo-portfolio.vercel.app/",
    isExperimental: true,
  }
];
