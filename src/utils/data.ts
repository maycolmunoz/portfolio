export const contacts = {
  linkedin: "https://www.linkedin.com/in/maycolmu%C3%B1oz/",
  github: "https://github.com/maycolmunoz",
  email: "mailto:macarny4@gmail.com",
};

export const techStack = [
  { name: "PHP", color: "bg-indigo-600" },
  { name: "Laravel", color: "bg-red-500" },
  { name: "MySQL", color: "bg-sky-800" },
  { name: "Livewire", color: "bg-pink-600" },
  { name: "Inertia.js", color: "bg-gray-600" },
  { name: "React", color: "bg-cyan-700" },
  { name: "Vue", color: "bg-green-600" },
  { name: "TailwindCSS", color: "bg-sky-600" },
  { name: "Bootstrap", color: "bg-purple-700" },
  { name: "Git", color: "bg-orange-700" },
  { name: "Alpine.js", color: "bg-cyan-600" },
  { name: "HTML - CSS - JS", color: "bg-yellow-700 text-black" },
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

import compranaImg from "@/assets/projects/comprana.webp";
import aventuroImg from "@/assets/projects/aventuro.webp";
import avatarmakerImg from "@/assets/projects/avatarmaker.webp";
import orbisImg from "@/assets/projects/orbis.webp";
import leafletImg from "@/assets/projects/leaflet.webp";

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
