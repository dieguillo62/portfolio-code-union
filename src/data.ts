// ════════════════════════════════════════════════════════
//  ✏️  EDITA ESTE ARCHIVO — es la única fuente de verdad
// ════════════════════════════════════════════════════════

// ── Información del equipo / empresa ────────────────────
export const teamInfo = {
  name: "CodeUnion",
  tagline: "Construimos productos digitales que importan.",
  description:
    "Somos un equipo de desarrolladores apasionados por crear soluciones elegantes a problemas reales. Trabajamos de forma colaborativa, con código limpio y enfoque en el usuario.",
  location: "Bogotá, Colombia",
  email: "hola@devteam.co",
  github: "https://github.com/devteam",
  linkedin: "https://linkedin.com/company/devteam",
  website: "https://devteam.co",
  founded: "2025",
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
    id: "pinzon",
    name: "Santiago Pinzon",
    role: "Jefe técnico y Arquitecto de automatización",
    bio: "Liderazgo técnico y automatización de procesos. Especialista en arquitectura de software, CI/CD y optimización de flujos de desarrollo. Apoya al equipo en resolver problemas complejos y escalar soluciones.",
    avatar: null, // "https://..." o null para avatar con iniciales
    location: "Bogotá",
    available: true,
    links: {
      github: "https://github.com/anagarcia",
      linkedin: "https://linkedin.com/in/anagarcia",
      portfolio: null,
      email: "ana@devteam.co",
    },
    skills: ["Software Architecture", "Automation", "CI/CD", "DevOps", "System Optimization"],
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
    id: "Diego",
    name: "Diego Rodriguez",
    role: "Desarrollador de negocios y Gestor de producto",
    bio: "Gestión de proyectos y relación con clientes. Conecta necesidades de negocio con soluciones tecnológicas y coordina el desarrollo de software. Aprende rápido y se enfoca en crear productos útiles para empresas.",
    avatar: null,
    location: "Bogotá",
    available: true,
    links: {
      github: "https://github.com/carlosmendez",
      linkedin: "https://linkedin.com/in/carlosmendez",
      portfolio: "https://carlosmendez.dev",
      email: "carlos@devteam.co",
    },
    skills: ["Client Communication", "Product Planning", "Project Coordination", "SQL Basics", "Rapid Learning"],
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
    id: "Daniel",
    name: "Daniel Lopez",
    role: "Desarrollador de backend",
    bio: "Desarrollo backend enfocado en sistemas de usuarios y mantenimiento de plataformas. Trabaja en autenticación, control de accesos y estabilidad del sistema, asegurando un funcionamiento confiable.",
    avatar: null,
    location: "Bogotá",
    available: true,
    links: {
      github: "https://github.com/sofiarestrepo",
      linkedin: "https://linkedin.com/in/sofiarestrepo",
      portfolio: null,
      email: "sofia@devteam.co",
    },
    skills: ["Backend Development", "User Authentication", "Database Management", "Access Control", "System Maintenance"],
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
