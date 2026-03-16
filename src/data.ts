// ════════════════════════════════════════════════════════
//  ✏️  EDITA ESTE ARCHIVO — es la única fuente de verdad
// ════════════════════════════════════════════════════════

// ── Información del equipo / empresa ────────────────────
export const teamInfo = {
  name: "DevTeam",
  tagline: "Construimos productos digitales que importan.",
  description:
    "Somos un equipo de desarrolladores apasionados por crear soluciones elegantes a problemas reales. Trabajamos de forma colaborativa, con código limpio y enfoque en el usuario.",
  location: "Bogotá, Colombia",
  email: "hola@devteam.co",
  github: "https://github.com/devteam",
  linkedin: "https://linkedin.com/company/devteam",
  website: "https://devteam.co",
  founded: "2022",
};

// ── Proyectos colaborativos del equipo ───────────────────
export const teamProjects = [
  {
    title: "Plataforma E-commerce",
    description:
      "Solución completa de comercio electrónico con panel de administración, pasarela de pagos y analítica en tiempo real.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/devteam/ecommerce",
    demo: "https://youtube.com",
    year: 2024,
    highlight: true,
  },
  {
    title: "Dashboard de Analítica",
    description:
      "Panel centralizado para visualización de métricas de negocio con gráficas interactivas y reportes exportables.",
    tags: ["React", "D3.js", "FastAPI", "MongoDB"],
    github: "https://github.com/devteam/analytics",
    demo: null,
    year: 2024,
    highlight: true,
  },
  {
    title: "API de Autenticación",
    description:
      "Microservicio de auth con OAuth2, JWT, MFA y gestión de sesiones. Usado como base en todos los proyectos del equipo.",
    tags: ["Node.js", "Redis", "Docker", "JWT"],
    github: "https://github.com/devteam/auth-service",
    demo: null,
    year: 2023,
    highlight: false,
  },
  {
    title: "App Móvil de Delivery",
    description:
      "Aplicación de pedidos con tracking en tiempo real, notificaciones push y sistema de calificaciones.",
    tags: ["React Native", "Firebase", "Google Maps API"],
    github: null,
    demo: "https://play.google.com/store/apps/devteam",
    year: 2023,
    highlight: false,
  },
];

// ── Miembros del equipo ──────────────────────────────────
// Para la foto: pon una URL pública o un path a /public/avatars/nombre.jpg
// Si no hay foto, pon null y se generará un avatar con las iniciales.

export const members = [
  {
    id: "ana",
    name: "Ana García",
    role: "Tech Lead & Full Stack",
    bio: "Arquitecta de software con 6 años de experiencia. Especialista en sistemas distribuidos y diseño de APIs. Le apasiona el código limpio y los systems design.",
    avatar: null, // "https://..." o null para avatar con iniciales
    location: "Bogotá",
    available: true,
    links: {
      github: "https://github.com/anagarcia",
      linkedin: "https://linkedin.com/in/anagarcia",
      portfolio: null,
      email: "ana@devteam.co",
    },
    skills: ["TypeScript", "Go", "Kubernetes", "PostgreSQL", "System Design"],
    projects: [
      {
        title: "CLI de Deployments",
        description:
          "Herramienta de línea de comandos para automatizar deployments en múltiples entornos con rollback automático.",
        tags: ["Go", "Docker", "GitHub Actions"],
        github: "https://github.com/anagarcia/deploy-cli",
        demo: null,
      },
      {
        title: "ORM Ligero para Go",
        description:
          "Librería open source para mapeo objeto-relacional en Go. Más de 800 estrellas en GitHub.",
        tags: ["Go", "PostgreSQL", "MySQL"],
        github: "https://github.com/anagarcia/goorm",
        demo: "https://goorm.dev",
      },
    ],
  },
  {
    id: "carlos",
    name: "Carlos Méndez",
    role: "Frontend Engineer",
    bio: "Frontend con obsesión por la UI y la accesibilidad. 4 años construyendo interfaces que la gente disfruta usar. Contribuidor activo de proyectos open source.",
    avatar: null,
    location: "Medellín",
    available: false,
    links: {
      github: "https://github.com/carlosmendez",
      linkedin: "https://linkedin.com/in/carlosmendez",
      portfolio: "https://carlosmendez.dev",
      email: "carlos@devteam.co",
    },
    skills: ["React", "Astro", "CSS / Animation", "Figma", "Accessibility"],
    projects: [
      {
        title: "Design System",
        description:
          "Sistema de diseño con 40+ componentes documentados en Storybook. Base de todos los productos del equipo.",
        tags: ["React", "Storybook", "CSS", "Figma"],
        github: "https://github.com/carlosmendez/ds",
        demo: "https://ds.carlosmendez.dev",
      },
      {
        title: "Generador de Paletas",
        description:
          "Tool online para crear paletas de color accesibles con contraste WCAG AA/AAA automático.",
        tags: ["Astro", "TypeScript"],
        github: "https://github.com/carlosmendez/palette-gen",
        demo: "https://palette.carlosmendez.dev",
      },
    ],
  },
  {
    id: "sofia",
    name: "Sofía Restrepo",
    role: "Backend & DevOps",
    bio: "Ingeniería de backend e infraestructura cloud. Especialista en CI/CD, monitoreo y performance. Reduce costos de infra sin sacrificar uptime.",
    avatar: null,
    location: "Cali",
    available: true,
    links: {
      github: "https://github.com/sofiarestrepo",
      linkedin: "https://linkedin.com/in/sofiarestrepo",
      portfolio: null,
      email: "sofia@devteam.co",
    },
    skills: ["Python", "AWS", "Terraform", "Prometheus", "FastAPI"],
    projects: [
      {
        title: "Infrastructure as Code Toolkit",
        description:
          "Conjunto de módulos Terraform para levantar infraestructura AWS production-ready en minutos.",
        tags: ["Terraform", "AWS", "Python"],
        github: "https://github.com/sofiarestrepo/iac-toolkit",
        demo: null,
      },
      {
        title: "Monitoring Dashboard",
        description:
          "Dashboard de Grafana + Prometheus preconfigurado para apps Node.js y Python con alertas por Slack.",
        tags: ["Grafana", "Prometheus", "Docker"],
        github: "https://github.com/sofiarestrepo/monitoring",
        demo: null,
      },
    ],
  },
  // ── Agrega más miembros copiando el bloque de arriba ──
  // {
  //   id: "nuevo",
  //   name: "Nombre Apellido",
  //   role: "Rol",
  //   bio: "Descripción breve.",
  //   avatar: null,
  //   location: "Ciudad",
  //   available: true,
  //   links: { github: "", linkedin: "", portfolio: null, email: "" },
  //   skills: ["skill1", "skill2"],
  //   projects: [],
  // },
];
