import {
  backend,
  Ai,
  ensias,
  Hassan2,
  lpk,
  Java,
  Kubernetes,
  Nextjs,
  Php,
  Spring,
  mysql,
  angular,
  javascript,
  typescript,
  reactjs,
  devops,
  dAs,
  facerecon,
  pacal,
  git,
  figma,
  docker,
  threejs,
  } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Parcours",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Fullstack",
    icon: backend,
  },
  {
    title: "Devops",
    icon: devops,
  },
  {
    title: "Ai",
    icon: Ai,
  },
];

const technologies = [
  {
    name: "Nextjs",
    icon: Nextjs,
  },
  {
    name: "Php",
    icon: Php,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Kubernetes",
    icon: Kubernetes,
  },
  {
    name: "Spring",
    icon: Spring,
  },
  {
    name: "Mysql",
    icon: mysql,
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
  {
    name: "Java",
    icon: Java,
  },
];

const experiences = [
  {
    title: "Étudiant en génie logiciel",
    company_name: "ENSIAS(Rabat, Maroc)",
    icon: ensias,
    iconBg: "#383E56",
    date: "2023-2025",
    points: [
      "Acquisition des bases solides en programmation, en algorithmique et en structures de données.",
      "Exploration des langages de programmation couramment utilisés dans l'industrie ainsi que les concepts avancés de génie logiciel tels que la conception logicielle,le développement web, la gestion de projet et les méthodes de développement agile",
      "Des projets pratiques,des travaux de groupe et des stages en entreprise pour acquérir une expérience concrète et développer les compétences nécessaires",
    ],
  },
  {
    title: "Étudiant",
    company_name: "Université Hassan II de Casablanca (Maroc)",
    icon: Hassan2,
    iconBg: "#E6DEDD",
    date: "2019-2022",
    points: [
      "2021-2022 : Licence en Mathématiques Appliquées avec Mention Bien.",
      "2019-2021 : Diplôme d'Études Universitaires Scientifiques et Techniques (DEUST) en Mathématiques-Informatique-Physique avec Mention Bien.",
      ,
    ],
  },
  {
    title: "Élève",
    company_name: "Lycée de Pikine (Sénégal)",
    icon: lpk,
    iconBg: "#383E56",
    date: "Juillet 2019",
    points: [
      "Baccalauréat série C",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    
    name: "Mini Compilateur  Pascal",
    description:
      "Un projet passionnant où j'ai pu mettre en pratique mes compétences en conception logicielle.Ce mini-compilateur est capable d'analyser et d'interpréter le code source écrit en Pascal, en vérifiant sa syntaxe et en générant du code machine correspondant.",
    tags: [
      {
        name: "Pascal",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: pacal,
    source_code_link: "https://github.com/Emavero/Pascal-Compiler",
  },
  {
    name: "Gestionnaire-Stage-ECM",
    description:
      "En collaboration avec deux collègues, nous avons achevé un projet de développement d'un gestionnaire de stages en utilisant le Système de Gestion de Base de Données PostgreSQL.Ce projet a permis à l'école de disposer d'un outil efficace pour gérer les stages des étudiants tout au long de leur scolarité. Ensemble, nous avons conçu et développé une application web conviviale qui offre à l'administration la possibilité de suivre facilement le déroulement des stages des étudiants.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "yellow-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
       
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
        
      }
    ],
    image: dAs,
    source_code_link: "https://github.com/Emavero/Gestionnaire-Stage-ECM",
  },
  {
    name: "Application de reconnaissance faciale",
    description:
      "Cette application utilise des techniques d'intelligence artificielle pour détecter et authentifier les visages. Conçue pour être polyvalente, elle peut être utilisée dans divers domaines tels que la sécurité, le contrôle d'accès ou simplement pour la commodité de déverrouillage des appareils.",
    tags: [
      {
        name: "Flask framework",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite,",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: facerecon,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };