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

import offertyImg from "@/assets/projects/offerty.webp";
import compranaImg from "@/assets/projects/comprana.webp";
import aventuroImg from "@/assets/projects/aventuro.webp";
import avatarmakerImg from "@/assets/projects/avatarmaker.webp";

export const projects = [
  {
    stack: ["Laravel", "Inertia.js"],
    title: "Offerty",
    img: offertyImg,
    description:
      "Offerty is a modern web application that allows local businesses to publish promotions and locations, while users explore nearby offers on an interactive map.",
    repository: "https://github.com/maycolmunoz/offerty",
    link: "https://github.com/maycolmunoz/offerty",
  },
  {
    stack: ["Laravel", "Livewire", "Alpine.js", "TailwindCSS", "MySQL"],
    title: "Comprana",
    img: compranaImg,
    description:
      "Comprana is a monolithic web application that enables users to order groceries from home and have them delivered to their door. It offers a wide range of products and an intuitive interface for browsing and purchasing.",
    repository: "https://github.com/maycolmunoz/comprana",
    link: "https://youtu.be/ZDsoQOYZTCI",
  },
  {
    stack: ["Vue", "TailwindCSS", "Laravel", "API"],
    title: "Aventuro",
    img: aventuroImg,
    description:
      "Aventuro is a web application for travel agencies that allows users to explore travel packages, make reservations, and manage their accounts efficiently. Designed with user experience in mind, it provides a smooth and enjoyable booking process.",
    repository: "https://github.com/maycolmunoz/aventuro",
    link: "https://youtu.be/enFP3gEd3sQ",
  },
  {
    stack: ["Bootstrap", "Alpine.js"],
    title: "Avatarmaker",
    img: avatarmakerImg,
    description:
      "Avatarmaker is a website that allows users to create and download custom avatars using the DiceBear API.",
    repository: "https://github.com/maycolmunoz/avatarmaker",
    link: "https://avatarsmaker.netlify.app/",
  },
];
