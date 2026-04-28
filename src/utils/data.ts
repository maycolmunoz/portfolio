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
  IconStack2,
  IconFolders,
  IconLibrary,
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

export const navigationSections = [
  {
    id: 'stack',
    title: 'Tech Stack',
    subtitle: 'Core technologies & skills',
    icon: IconStack2,
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    id: 'projects',
    title: 'Featured Projects',
    subtitle: 'My latest work & builds',
    icon: IconFolders,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'education',
    title: 'Learning Path',
    subtitle: 'Education & certifications',
    icon: IconLibrary,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
]

export const categorizedStack = [
  {
    title: 'Core Technologies',
    items: [
      { name: 'PHP', icon: IconBrandPhp },
      { name: 'Laravel', icon: IconBrandLaravel },
      { name: 'Vue', icon: IconBrandVue },
      { name: 'React', icon: IconBrandReact },
      { name: 'MySQL', icon: IconBrandMysql },
      { name: 'PostgreSQL', icon: IconDatabase },
    ],
  },
  {
    title: 'Frontend & UI',
    items: [
      { name: 'JS', icon: IconBrandJavascript },
      { name: 'HTML', icon: IconBrandHtml5 },
      { name: 'CSS', icon: IconBrandCss3 },
      { name: 'TailwindCSS', icon: IconBrandTailwind },
      { name: 'Bootstrap', icon: IconBrandBootstrap },
      { name: 'Alpine.js', icon: IconBrandAlpineJs },
    ],
  },
  {
    title: 'Ecosystem & Tools',
    items: [
      { name: 'Livewire', icon: IconBrandLivewire },
      { name: 'Inertia.js', icon: IconBrandInertia },
      { name: 'Git', icon: IconBrandGit },
      { name: 'FilamentPHP', icon: IconLayoutDashboard },
      { name: "API's", icon: IconApi },
      { name: 'Linux', icon: IconTerminal },
    ],
  },
  {
    title: 'Architecture & Specializations',
    items: [
      { name: 'Clean Architecture', icon: IconBuildingSkyscraper },
      { name: 'Multitenant SaaS', icon: IconBuildingCommunity },
      {
        name: 'ERP & CRM Systems',
        icon: IconDeviceDesktopAnalytics,
      },
      { name: 'Performance-Oriented', icon: IconBrandJavascript },
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
      'Aventuro is a travel-oriented web application where users can explore packages, manage reservations, and access their account through a smooth and consistent booking experience.',
    repository: 'https://github.com/maycolmunoz/aventuro',
    link: 'https://youtu.be/1F4ABE5Gtbc',
  },
  {
    stack: ['Laravel', 'Livewire', 'Alpine.js', 'TailwindCSS', 'MySQL'],
    title: 'Comprana',
    img: compranaImg,
    description:
      'Comprana is a grocery delivery platform that provides a clean catalog, fast browsing, and a simple checkout flow for placing home-delivery orders with ease.',
    repository: 'https://github.com/maycolmunoz/comprana',
    link: 'https://youtu.be/ZDsoQOYZTCI',
  },
  {
    stack: ['Laravel', 'Moonshine'],
    title: 'Moon Leaflet',
    img: leafletImg,
    description:
      'MoonLeaflet integrates Leaflet with MoonShine to enable interactive maps, letting users pick coordinates or display multiple locations within the admin panel.',
    repository: 'https://github.com/maycolmunoz/moon-leaflet',
    link: 'https://github.com/maycolmunoz/moon-leaflet',
  },
  {
    stack: ['Bootstrap', 'Alpine.js', 'API'],
    title: 'Avatarmaker',
    img: avatarmakerImg,
    description:
      'Avatarmaker lets users create and download custom avatars using the DiceBear API, providing a simple interface for generating unique visual identities.',
    repository: 'https://github.com/maycolmunoz/avatarmaker',
    link: 'https://avatarsmaker.netlify.app/',
  },
]
