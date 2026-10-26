import veloura from '../assets/images/Veloura.webp'
import moveflow from '../assets/images/moveflow.webp'
import maison from '../assets/images/maison.webp'

export const projects = [

{
  title: "MoveFlow",
  category: "Logistics Management Dashboard",
  description:
    "A responsive logistics management dashboard for overseeing shipments, drivers, customers, and payments. Features role-based dashboards for administrators, operations, and finance, with data visualisation & shipment management.",
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
    "A premium, responsive fine-dining restaurant website featuring an elegant homepage, interactive menu, restaurant story, immersive gallery, and reservation request form. Designed with a refined luxury aesthetic, responsive layouts, and a focus on accessibility & performance.",
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
  title: "VELOURA",
  category: "E-commerce Website",
  description:
    "Designed and developed a premium, responsive skincare e-commerce website featuring an editorial homepage, product catalogue, category-based collections, individual product pages, and a frontend shopping cart and checkout experience.",
  image: veloura,
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  live: "https://veloura-beauty-theta.vercel.app/",
  github: "https://github.com/charlespharrell/Veloura_beauty",
},
]