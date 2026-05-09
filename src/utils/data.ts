import {
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
  IconTerminal,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconDatabase,
  IconApi,
  IconDeviceDesktopAnalytics,
  IconLayoutDashboard,
} from '@tabler/icons-vue'
import avatarmakerImg from '../assets/avatarmaker.webp'
import aventuroImg from '../assets/aventuro.webp'
import compranaImg from '../assets/comprana.webp'
import leafletImg from '../assets/leaflet.webp'

export const personalInfo = {
  name: 'Maycol',
  lastName: 'Muñoz',
  title: 'Full Stack Developer',
  bio: "I'm a Systems Engineering student focused on full-stack development. I specialize in building scalable backend systems and modern, high-performance user interfaces. My goal is to transform complex ideas into elegant, reliable digital solutions.",
  avatar: 'https://github.com/maycolmunoz.png?size=200',
}

export const contacts = {
  cv: 'https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/maycolmunoz/',
  github: 'https://github.com/maycolmunoz',
  email: 'mailto:macarny4@gmail.com',
}

export const categorizedStack = [
  {
    title: 'CORE',
    items: [
      { name: 'PHP', icon: IconBrandPhp },
      { name: 'LARAVEL', icon: IconBrandLaravel },
      { name: 'VUE', icon: IconBrandVue },
      { name: 'REACT', icon: IconBrandReact },
      { name: 'MYSQL', icon: IconBrandMysql },
      { name: 'POSTGRESQL', icon: IconDatabase },
    ],
  },
  {
    title: 'FRONTEND',
    items: [
      { name: 'JS', icon: IconBrandJavascript },
      { name: 'HTML', icon: IconBrandHtml5 },
      { name: 'CSS', icon: IconBrandCss3 },
      { name: 'TAILWIND', icon: IconBrandTailwind },
      { name: 'BOOTSTRAP', icon: IconBrandBootstrap },
      { name: 'ALPINE.JS', icon: IconBrandAlpineJs },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      { name: 'LIVEWIRE', icon: IconBrandLivewire },
      { name: 'INERTIA.JS', icon: IconBrandInertia },
      { name: 'GIT', icon: IconBrandGit },
      { name: 'FILAMENT', icon: IconLayoutDashboard },
      { name: 'APIs', icon: IconApi },
      { name: 'LINUX', icon: IconTerminal },
    ],
  },
  {
    title: 'ARCH',
    items: [
      { name: 'CLEAN ARCH', icon: IconBuildingSkyscraper },
      { name: 'MULTITENANT', icon: IconBuildingCommunity },
      {
        name: 'ERP & CRM',
        icon: IconDeviceDesktopAnalytics,
      },
      { name: 'PERFORMANCE', icon: IconBrandJavascript },
    ],
  },
]

export const education = [
  {
    title: 'Systems Engineering (In Progress)',
    description:
      'Universidad Nacional Abierta y a Distancia (UNAD) (2022 - Present): Ongoing studies focused on the design, development, and management of technological systems.',
  },
  {
    title: 'Frontend Development with React',
    description:
      'Alura (01/2023 - 06/2023): Intensive training in building modern, interactive user interfaces using React.',
  },
  {
    title: 'Web Application Development',
    description:
      'Universidad Tecnológica de Pereira (UTP) (04/2022 - 12/2022): Specialized training in creating functional and scalable web applications.',
  },
  {
    title: 'Fullstack Development',
    description:
      'Launch X (02/2022 - 05/2022): Hands-on learning in technologies such as JavaScript and Vue.js, focusing on fullstack project development.',
  },
]

export const projects = [
  {
    stack: ['Vue', 'TailwindCSS', 'Laravel', 'API'],
    title: 'Aventuro',
    img: aventuroImg,
    description:
      'A travel-oriented web application where users can explore packages, manage reservations, and access their account through a smooth and consistent booking experience.',
    repository: 'https://github.com/maycolmunoz/aventuro',
    link: 'https://youtu.be/1F4ABE5Gtbc',
  },
  {
    stack: ['Laravel', 'Livewire', 'Alpine.js', 'TailwindCSS', 'MySQL'],
    title: 'Comprana',
    img: compranaImg,
    description:
      'A grocery delivery platform that provides a clean catalog, fast browsing, and a simple checkout flow for placing home-delivery orders with ease.',
    repository: 'https://github.com/maycolmunoz/comprana',
    link: 'https://youtu.be/ZDsoQOYZTCI',
  },
  {
    stack: ['Laravel', 'Moonshine'],
    title: 'Moon Leaflet',
    img: leafletImg,
    description:
      'Integrates Leaflet with MoonShine to enable interactive maps, letting users pick coordinates or display multiple locations within the admin panel.',
    repository: 'https://github.com/maycolmunoz/moon-leaflet',
    link: 'https://github.com/maycolmunoz/moon-leaflet',
  },
  {
    stack: ['Bootstrap', 'Alpine.js', 'API'],
    title: 'Avatarmaker',
    img: avatarmakerImg,
    description:
      'Lets users create and download custom avatars using the Dicebear API, providing a simple interface for generating unique visual identities.',
    repository: 'https://github.com/maycolmunoz/avatarmaker',
    link: 'https://avatarsmaker.netlify.app/',
  },
]
