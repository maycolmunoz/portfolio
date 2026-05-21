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
  role: 'Full Stack',
  mainStack: 'Laravel + Vue',
  location: 'Colombia',
  bio: "I'm a Systems Engineering student focused on full-stack development. I specialize in building scalable backend systems and modern, high-performance user interfaces. My goal is to transform complex ideas into elegant, reliable digital solutions.",
  avatar: 'https://github.com/itsmmunoz.png?size=200',
}

export const contacts = {
  cv: 'https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/maycolmunoz/',
  github: 'https://github.com/itsmmunoz',
  email: 'mailto:macarny4@gmail.com',
}

export const categorizedStack = [
  {
    title: 'CORE',
    items: [
      {
        name: 'PHP',
        icon: IconBrandPhp,
        color: 'hover:bg-[#6C7192] hover:border-[#6C7192] hover:text-white',
      },
      {
        name: 'LARAVEL',
        icon: IconBrandLaravel,
        color: 'hover:bg-[#D14039] hover:border-[#D14039] hover:text-white',
      },
      {
        name: 'VUE',
        icon: IconBrandVue,
        color: 'hover:bg-[#3E926D] hover:border-[#3E926D] hover:text-white',
      },
      {
        name: 'REACT',
        icon: IconBrandReact,
        color: 'hover:bg-[#5A9CB0] hover:border-[#5A9CB0] hover:text-white',
      },
      {
        name: 'MYSQL',
        icon: IconBrandMysql,
        color: 'hover:bg-[#3E6380] hover:border-[#3E6380] hover:text-white',
      },
      {
        name: 'POSTGRESQL',
        icon: IconDatabase,
        color: 'hover:bg-[#336791] hover:border-[#336791] hover:text-white',
      },
    ],
  },
  {
    title: 'FRONTEND',
    items: [
      {
        name: 'JS',
        icon: IconBrandJavascript,
        color: 'hover:bg-[#D4C02E] hover:border-[#D4C02E] hover:text-black',
      },
      {
        name: 'HTML',
        icon: IconBrandHtml5,
        color: 'hover:bg-[#C24D2F] hover:border-[#C24D2F] hover:text-white',
      },
      {
        name: 'CSS',
        icon: IconBrandCss3,
        color: 'hover:bg-[#2F6690] hover:border-[#2F6690] hover:text-white',
      },
      {
        name: 'TAILWIND',
        icon: IconBrandTailwind,
        color: 'hover:bg-[#387B8A] hover:border-[#387B8A] hover:text-white',
      },
      {
        name: 'BOOTSTRAP',
        icon: IconBrandBootstrap,
        color: 'hover:bg-[#674D91] hover:border-[#674D91] hover:text-white',
      },
      {
        name: 'ALPINE.JS',
        icon: IconBrandAlpineJs,
        color: 'hover:bg-[#77A4B1] hover:border-[#77A4B1] hover:text-black',
      },
    ],
  },
  {
    title: 'TOOLS',
    items: [
      {
        name: 'LIVEWIRE',
        icon: IconBrandLivewire,
        color: 'hover:bg-[#D15E8B] hover:border-[#D15E8B] hover:text-white',
      },
      {
        name: 'INERTIA.JS',
        icon: IconBrandInertia,
        color: 'hover:bg-[#7B4BAE] hover:border-[#7B4BAE] hover:text-white',
      },
      {
        name: 'GIT',
        icon: IconBrandGit,
        color: 'hover:bg-[#C9432B] hover:border-[#C9432B] hover:text-white',
      },
      {
        name: 'FILAMENT',
        icon: IconLayoutDashboard,
        color: 'hover:bg-[#D68A14] hover:border-[#D68A14] hover:text-black',
      },
      {
        name: 'APIs',
        icon: IconApi,
        color: 'hover:bg-[#2F6B8F] hover:border-[#2F6B8F] hover:text-white',
      },
      {
        name: 'LINUX',
        icon: IconTerminal,
        color: 'hover:bg-[#D4A723] hover:border-[#D4A723] hover:text-black',
      },
    ],
  },
  {
    title: 'ARCH',
    items: [
      {
        name: 'CLEAN ARCH',
        icon: IconBuildingSkyscraper,
        color: 'hover:bg-accent hover:border-accent hover:text-white',
      },
      {
        name: 'MULTITENANT',
        icon: IconBuildingCommunity,
        color: 'hover:bg-accent hover:border-accent hover:text-white',
      },
      {
        name: 'ERP & CRM',
        icon: IconDeviceDesktopAnalytics,
        color: 'hover:bg-accent hover:border-accent hover:text-white',
      },
      {
        name: 'PERFORMANCE',
        icon: IconBrandJavascript,
        color: 'hover:bg-accent hover:border-accent hover:text-white',
      },
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
    repository: 'https://github.com/itsmmunoz/aventuro',
    link: 'https://youtu.be/1F4ABE5Gtbc',
  },
  {
    stack: ['Laravel', 'Livewire', 'Alpine.js', 'TailwindCSS', 'MySQL'],
    title: 'Comprana',
    img: compranaImg,
    description:
      'A grocery delivery platform that provides a clean catalog, fast browsing, and a simple checkout flow for placing home-delivery orders with ease.',
    repository: 'https://github.com/itsmmunoz/comprana',
    link: 'https://youtu.be/ZDsoQOYZTCI',
  },
  {
    stack: ['Laravel', 'Moonshine'],
    title: 'Moon Leaflet',
    img: leafletImg,
    description:
      'Integrates Leaflet with MoonShine to enable interactive maps, letting users pick coordinates or display multiple locations within the admin panel.',
    repository: 'https://github.com/itsmmunoz/moon-leaflet',
    link: 'https://github.com/itsmmunoz/moon-leaflet',
  },
  {
    stack: ['Bootstrap', 'Alpine.js', 'API'],
    title: 'Avatarmaker',
    img: avatarmakerImg,
    description:
      'Lets users create and download custom avatars using the Dicebear API, providing a simple interface for generating unique visual identities.',
    repository: 'https://github.com/itsmmunoz/avatarmaker',
    link: 'https://avatarsmaker.netlify.app/',
  },
]
