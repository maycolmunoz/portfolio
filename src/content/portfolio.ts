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
export const personalInfo = {
  name: 'Maycol',
  lastName: 'Muñoz',
  title: 'Full Stack Developer',
  role: 'Full Stack',
  mainStack: 'Laravel + Vue',
  location: 'Colombia',
  bio: 'Soy estudiante de Ingeniería de Sistemas enfocado en el desarrollo full-stack. Me especializo en construir sistemas backend escalables e interfaces de usuario modernas y de alto rendimiento. Mi objetivo es transformar ideas complejas en soluciones digitales elegantes y confiables.',
  avatar: 'https://github.com/itsmmunoz.png?size=200',
}

export const contacts = {
  cv: 'https://docs.google.com/document/d/1jyEKvQjJeqxRvF9SVVmq6lgxzunbmIyyJ2XKnduaXlg/edit?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/maycolmunoz/',
  github: 'https://github.com/itsmmunoz',
  email: 'mailto:macarny4@gmail.com',
  x: 'https://x.com/itsmmunoz',
}

export const categorizedStack = [
  {
    title: 'NÚCLEO',
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
    title: 'HERRAMIENTAS',
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
    title: 'ARQUITECTURA',
    items: [
      { name: 'CLEAN ARCH', icon: IconBuildingSkyscraper },
      { name: 'MULTITENANT', icon: IconBuildingCommunity },
      { name: 'ERP & CRM', icon: IconDeviceDesktopAnalytics },
      { name: 'PERFORMANCE', icon: IconBrandJavascript },
    ],
  },
]

export const education = [
  {
    title: 'Ingeniería de Sistemas',
    description:
      'Universidad Nacional Abierta y a Distancia (UNAD) (2022 - Presente): Estudios en curso enfocados en el diseño, desarrollo y gestión de sistemas tecnológicos.',
  },
  {
    title: 'Desarrollo Frontend con React',
    description:
      'Alura (01/2023 - 06/2023): Formación intensiva en la creación de interfaces de usuario modernas e interactivas utilizando React.',
  },
  {
    title: 'Desarrollo de Aplicaciones Web',
    description:
      'Universidad Tecnológica de Pereira (UTP) (04/2022 - 12/2022): Formación especializada en la creación de aplicaciones web funcionales y escalables.',
  },
  {
    title: 'Desarrollo Fullstack',
    description:
      'Launch X (02/2022 - 05/2022): Aprendizaje práctico en tecnologías como JavaScript y Vue.js, enfocado en el desarrollo de proyectos fullstack.',
  },
]

export const projects = [
  {
    stack: ['Vue', 'TailwindCSS', 'Laravel', 'API'],
    title: 'Aventuro',
    img: 'https://github.com/itsmmunoz/aventuro/blob/main/_docs/front/home.webp?raw=true',
    description:
      'Aplicación web orientada a viajes donde los usuarios pueden explorar paquetes, gestionar reservas y acceder a su cuenta a través de una experiencia de reserva fluida y consistente.',
    repository: 'https://github.com/itsmmunoz/aventuro',
    link: 'https://youtu.be/1F4ABE5Gtbc',
  },
  {
    stack: ['Laravel', 'Livewire', 'Alpine.js', 'TailwindCSS', 'MySQL'],
    title: 'Comprana',
    img: 'https://github.com/itsmmunoz/comprana/blob/main/_docs/imgs/inicio.webp?raw=true',
    description:
      'Plataforma de entrega de comestibles que proporciona un catálogo limpio, navegación rápida y un flujo de pago simple para realizar pedidos a domicilio con facilidad.',
    repository: 'https://github.com/itsmmunoz/comprana',
    link: 'https://youtu.be/ZDsoQOYZTCI',
  },
  {
    stack: ['Laravel', 'Moonshine'],
    title: 'Moon Leaflet',
    img: 'https://github.com/itsmmunoz/moon-leaflet/blob/main/_docs/images/component.webp?raw=true',
    description:
      'Integra Leaflet con MoonShine para habilitar mapas interactivos, permitiendo seleccionar coordenadas o mostrar múltiples ubicaciones dentro del panel de administración.',
    repository: 'https://github.com/itsmmunoz/moon-leaflet',
    link: 'https://github.com/itsmmunoz/moon-leaflet',
  },
  {
    stack: ['Bootstrap', 'Alpine.js', 'API'],
    title: 'Avatarmaker',
    img: 'https://github.com/itsmmunoz/avatarmaker/blob/main/img/screenshot.webp?raw=true',
    description:
      'Permite crear y descargar avatares personalizados usando la API de Dicebear, proporcionando una interfaz simple para generar identidades visuales únicas.',
    repository: 'https://github.com/itsmmunoz/avatarmaker',
    link: 'https://avatarsmaker.netlify.app/',
  },
]
