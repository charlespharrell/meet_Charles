import brainwave from "../assets/images/brainwave.png";
import multiStep from "../assets/images/multi-step-form.png";
import countries from "../assets/images/country.png";
import shoeVerse from '../assets/images/ecommerce.png'
import snakeGame from '../assets/images/snakegame.png'
import nike from '../assets/images/nike_landing.png'

export const projects = [
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
    title: "Multi-Step Form",
    category: "Form Wizard",
    description:
      "A responsive multi-step form with validation, progress tracking, and an intuitive user experience.",
    image: multiStep,
    tech: ["Next.Js", "JavaScript", "Tailwind CSS"],
    live: "https://multi-step-forms.vercel.app/",
    github: "https://github.com/charlespharrell/multi-step-forms",
  },

  {
    title: "REST Countries Explorer",
    category: "API Integration",
    description:
      "An interactive country explorer with search, filtering, and detailed country information powered by the REST Countries API.",
    image: countries,
    tech: ["Next.JS", "REST API", "JavScript", "Tailwind CSS"],
    live: "https://rest-countries-api-sigma-hazel.vercel.app/",
    github: "https://github.com/charlespharrell/rest-countries-api",
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

  {
    title: "Snake Game",
    category: "Game Development",
    description:
      "A browser-based Snake game featuring collision detection, score tracking, keyboard controls, and responsive gameplay.",
    image: snakeGame,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://snake-game-sayg.vercel.app/",
    github: "https://github.com/charlespharrell/snake-game",
  },

  {
    title: "Nike Landing Page",
    category: "Landing Page",
    description:
      "A responsive landing page inspired by Nike's bold design language with a strong focus on product presentation.",
    image: nike,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://nike-webpage-iota.vercel.app/",
    github: "https://github.com/charlespharrell/nike_webpage",
  },
];