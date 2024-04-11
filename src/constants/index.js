import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// Liens de navigation
export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services offerts
const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur React Native",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

// Technologies maîtrisées
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Expériences professionnelles
const experiences = [
  {
    title: "Développeur React.js",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mars 2020 - Avril 2021",
    points: [
      "Développement et maintenance d'applications web utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Implémentation de designs responsives et garantie de la compatibilité inter-navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur React Native",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janvier 2021 - Février 2022",
    points: [
      "Développement et maintenance d'applications web utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Implémentation de designs responsives et garantie de la compatibilité inter-navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    points: [
      "Développement et maintenance d'applications web utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Implémentation de designs responsives et garantie de la compatibilité inter-navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - Présent",
    points: [
      "Développement et maintenance d'applications web utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes pluridisciplinaires comprenant des designers, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Implémentation de designs responsives et garantie de la compatibilité inter-navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
];

// Témoignages
const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site web aussi beau que notre produit, mais Rick m'a prouvé le contraire.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web qui se soucie vraiment du succès de ses clients comme le fait Rick.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Après que Rick ait optimisé notre site web, notre trafic a augmenté de 50%. Nous ne pouvons pas les remercier assez !",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projets
const projects = [
  {
    name: "Car Rent",
    description:
      "Plateforme web permettant aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de différents fournisseurs, offrant ainsi une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Application web permettant aux utilisateurs de rechercher des offres d'emploi, de consulter des fourchettes de salaire estimées pour les postes et de localiser des emplois disponibles en fonction de leur emplacement actuel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Plateforme de réservation de voyages complète permettant aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et offrant des recommandations personnalisées pour les destinations populaires.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
