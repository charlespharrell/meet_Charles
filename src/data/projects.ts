import brainwave from "../assets/images/brainwave.webp";
import shoeVerse from '../assets/images/ecommerce.webp'
import moveflow from '../assets/images/moveflow.webp'

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
    title: "Brainwave AI",
    category: "AI Landing Page",
    description:
      "A modern AI SaaS landing page featuring smooth animations, reusable components, and a polished responsive experience inspired by today's AI products.",
    image: brainwave,
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "https://brainwave-7h9qdmh9q-charlespharrells-projects.vercel.app/",
    github: "https://github.com/charlespharrell/brainwave",
  },

  {
    title: "ShoeVerse",
    category: "E-commerce",
    description:
      "A stylish product landing page showcasing responsive layouts, engaging visuals, and modern UI design.",
    image: shoeVerse,
    tech: ["React", "CSS", "JavaScript"],
    live: "https://shoe-website-theta.vercel.app/",
    github: "https://github.com/charlespharrell/shoe-website",
  },

];