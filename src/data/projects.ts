import brainwave from "../assets/images/brainwave.webp";
import footwear from '../assets/images/footwear.webp'
import moveflow from '../assets/images/moveflow.webp'
import maison from '../assets/images/maison.webp'

export const projects = [

{
  title: "MoveFlow",
  category: "Logistics Management Dashboard",
  description:
    "A responsive logistics management dashboard for overseeing shipments, drivers, customers, and payments. Features role-based dashboards for administrators, operations, and finance, with data visualisation, shipment management, and a mobile-friendly interface.",
  image: moveflow,
  tech: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
  ],
  live: "https://move-flow-rho.vercel.app/",
  github: "https://github.com/charlespharrell/move_flow",
},

{
  title: "Maison Noir",
  category: "Restaurant Website",
  description:
    "A premium, responsive fine-dining restaurant website featuring an elegant homepage, interactive menu, restaurant story, immersive gallery, and reservation request form. Designed with a refined luxury aesthetic, responsive layouts, and a focus on  performance.",
  image: maison,
  tech: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
  ],
  live: "https://maisonnoir-five.vercel.app/",
  github: "https://github.com/charlespharrell/maison_noir",
},


{
  title: "Forma",
  category: "E-commerce",
  description:
    "A responsive footwear e-commerce platform featuring product discovery, category and price filtering, individual product pages, a persistent shopping cart, and a checkout flow with mock API order processing and order confirmation.",
  image: footwear,
  tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  live: "https://formaecommerce.vercel.app/",
  github: "https://github.com/charlespharrell/Forma_ecommerce",
},

  {
    title: "Brainwave AI",
    category: "AI Landing Page",
    description:
      "A modern AI SaaS landing page featuring smooth animations, reusable components, and a polished responsive experience inspired by today's AI products.",
    image: brainwave,
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "https://brainwave-7h9qdmh9q-charlespharrells-projects.vercel.app/",
    github: "https://github.com/charlespharrell/brainwave",
  },

];