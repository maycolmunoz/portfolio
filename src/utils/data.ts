import {
  IconApi,
  IconBrandAlpineJs,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandInertia,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandLivewire,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVue,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import avatarmakerImg from "@/assets/projects/avatarmaker.webp";
import aventuroImg from "@/assets/projects/aventuro.webp";
import compranaImg from "@/assets/projects/comprana.webp";
import leafletImg from "@/assets/projects/leaflet.webp";
import orbisImg from "@/assets/projects/orbis.webp";

export const contacts = {
  cv: "https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/maycolmu%C3%B1oz/",
  github: "https://github.com/maycolmunoz",
  email: "mailto:macarny4@gmail.com",
};

export const techStack = [
  { name: "PHP", icon: IconBrandPhp, color: "hover:text-[#777BB4]" },
  { name: "Laravel", icon: IconBrandLaravel, color: "hover:text-[#FF2D20]" },
  { name: "MySQL", icon: IconBrandMysql, color: "hover:text-[#4479A1]" },
  { name: "PostgreSQL", icon: IconDatabase, color: "hover:text-[#336791]" },
  { name: "Livewire", icon: IconBrandLivewire, color: "hover:text-[#FB70A9]" },
  { name: "Inertia.js", icon: IconBrandInertia, color: "hover:text-[#9553E9]" },
  { name: "React", icon: IconBrandReact, color: "hover:text-[#61DAFB]" },
  { name: "Vue", icon: IconBrandVue, color: "hover:text-[#42B883]" },
  {
    name: "TailwindCSS",
    icon: IconBrandTailwind,
    color: "hover:text-[#38BDF8]",
  },
  {
    name: "Bootstrap",
    icon: IconBrandBootstrap,
    color: "hover:text-[#7952B3]",
  },
  { name: "Git", icon: IconBrandGit, color: "hover:text-[#F05032]" },
  { name: "Alpine.js", icon: IconBrandAlpineJs, color: "hover:text-[#8BC0D0]" },
  { name: "HTML", icon: IconBrandHtml5, color: "hover:text-[#E34F26]" },
  { name: "CSS", icon: IconBrandCss3, color: "hover:text-[#1572B6]" },
  { name: "JS", icon: IconBrandJavascript, color: "hover:text-[#F7DF1E]" },
  {
    name: "FilamentPHP",
    icon: IconLayoutDashboard,
    color: "hover:text-[#F59E0B]",
  },
  {
    name: "Clean Architecture",
    icon: IconBuildingSkyscraper,
    color: "hover:text-violet-400",
  },
  {
    name: "Multitenant SaaS",
    icon: IconBuildingCommunity,
    color: "hover:text-cyan-400",
  },
  { name: "API's", icon: IconApi, color: "hover:text-teal-400" },
  {
    name: "ERP & CRM Systems",
    icon: IconDeviceDesktopAnalytics,
    color: "hover:text-amber-400",
  },
  {
    name: "Performance-Oriented",
    icon: IconGauge,
    color: "hover:text-lime-400",
  },
];

export const education = [
  {
    title: "Systems Engineering (In Progress)",
    description:
      "Universidad Nacional Abierta y a Distancia (UNAD) (2022 - Present): Ongoing studies focused on the design, development, and management of technological systems.",
  },
  {
    title: "Frontend Development with React",
    description:
      "Alura (01/2023 - 06/2023): Intensive training in building modern, interactive user interfaces using React.",
  },
  {
    title: "Web Application Development",
    description:
      "Universidad Tecnológica de Pereira (UTP) (04/2022 - 12/2022): Specialized training in creating functional and scalable web applications.",
  },
  {
    title: "Fullstack Development",
    description:
      "Launch X (02/2022 - 05/2022): Hands-on learning in technologies such as JavaScript and Vue.js, focusing on fullstack project development.",
  },
];

export const projects = [
  {
    stack: ["Vue", "TailwindCSS", "Laravel", "API"],
    title: "Aventuro",
    img: aventuroImg,
    description:
      "Aventuro is a travel-oriented web application where users can explore packages, manage reservations, and access their account through a smooth and consistent booking experience.",
    repository: "https://github.com/maycolmunoz/aventuro",
    link: "https://youtu.be/1F4ABE5Gtbc",
  },
  {
    stack: ["Laravel", "Livewire", "Alpine.js", "TailwindCSS", "MySQL"],
    title: "Comprana",
    img: compranaImg,
    description:
      "Comprana is a grocery delivery platform that provides a clean catalog, fast browsing, and a simple checkout flow for placing home-delivery orders with ease.",
    repository: "https://github.com/maycolmunoz/comprana",
    link: "https://youtu.be/ZDsoQOYZTCI",
  },
  {
    stack: ["Laravel", "MySQL", "Moonshine"],
    title: "Orbis",
    img: orbisImg,
    description:
      "Orbis is a modular and minimal ERP system designed for business management, offering a flexible structure to expand features as organizational needs grow.",
    repository: "https://github.com/maycolmunoz/orbis",
    link: "https://github.com/maycolmunoz/orbis",
  },
  {
    stack: ["Laravel", "Moonshine"],
    title: "Moon Leaflet",
    img: leafletImg,
    description:
      "MoonLeaflet integrates Leaflet with MoonShine to enable interactive maps, letting users pick coordinates or display multiple locations within the admin panel.",
    repository: "https://github.com/maycolmunoz/moon-leaflet",
    link: "https://github.com/maycolmunoz/moon-leaflet",
  },
  {
    stack: ["Bootstrap", "Alpine.js", "API"],
    title: "Avatarmaker",
    img: avatarmakerImg,
    description:
      "Avatarmaker lets users create and download custom avatars using the DiceBear API, providing a simple interface for generating unique visual identities.",
    repository: "https://github.com/maycolmunoz/avatarmaker",
    link: "https://avatarsmaker.netlify.app/",
  },
];
