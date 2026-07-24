export const SITE_NAME = "Savanna Leaf";
export const SITE_TAGLINE = "Safari ground transport · Kenya";
export const WHATSAPP_NUMBER = "+254 712 137 749";
export const CONTACT_EMAIL = "hello@savannaleaf.com";
export const RESPONSE_PROMISE = "We respond within a few hours";

export const NAV_LINKS = [
  { label: "Fleet", href: "/#fleet" },
  { label: "Routes", href: "/#routes" },
  { label: "About", href: "/about" },
] as const;

export const SERVICES = [
  {
    title: "Airport transfers",
    description: "Meet-and-greet pickups from Jomo Kenyatta and Wilson airports.",
    icon: "Plane",
  },
  {
    title: "Park transfers",
    description: "Direct routes to Maasai Mara, Amboseli, and Kenya's top parks.",
    icon: "MapPin",
  },
  {
    title: "Group bookings",
    description: "Coordinated transfers for tour groups, lodges, and safaris.",
    icon: "Users",
  },
  {
    title: "Custom routes",
    description: "Tailored itineraries across Nairobi and East Africa.",
    icon: "Route",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Send your details",
    description: "Share your dates, route, and group size — we'll take it from there.",
  },
  {
    step: 2,
    title: "Receive a quote",
    description: "Get a clear quote within a few hours, no back-and-forth needed.",
  },
  {
    step: 3,
    title: "Confirm and travel",
    description: "Lock in your transfer and travel with confidence.",
  },
] as const;

export const FLEET = [
  {
    name: "Toyota Land Cruiser V8",
    capacity: "Up to 7 passengers",
    features: ["4WD", "Roof hatch", "AC"],
    imageSrc: "/images/truck3.jpg",
  },
  {
    name: "Toyota Land Cruiser Prado",
    capacity: "Up to 5 passengers",
    features: ["4WD", "Comfort seating", "AC"],
    imageSrc: "/images/truck2.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Always on time, every single trip. Best ground transport we've worked with.",
    name: "Sarah M.",
    role: "Tour Operator",
  },
  {
    quote:
      "Our clients were impressed. Clean vehicle, professional driver, no stress.",
    name: "James K.",
    role: "Lodge Manager",
  },
  {
    quote:
      "Booked last minute and they made it work. Reliable and easy to deal with.",
    name: "Priya T.",
    role: "Independent Traveller",
  },
] as const;

export const VALUES = [
  {
    title: "Always on time",
    description: "Your clients arrive when they need to — every transfer, every time.",
  },
  {
    title: "The right vehicle",
    description: "Land Cruisers only. Built for the terrain, comfortable for passengers.",
  },
  {
    title: "Easy to reach",
    description: "WhatsApp, email, or form — we respond within a few hours.",
  },
] as const;

export const HERO_TRUST_STATS = [
  "10+ routes covered",
  "Land Cruisers only",
  "Responds within a few hours",
] as const;
