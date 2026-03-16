# Team Portfolio — Astro

Portfolio de equipo con proyectos individuales y colaborativos.

## 🚀 Inicio rápido

```bash
npm install
npm run dev       # → http://localhost:4321
npm run build     # Build de producción
```

## ✏️ Cómo editar el contenido

**Todo el contenido está en `src/data.ts`** — es la única fuente de verdad.

### Información del equipo
```ts
export const teamInfo = {
  name: "DevTeam",
  tagline: "...",
  email: "hola@devteam.co",
  // ...
};
```

### Agregar un miembro
Copia este bloque en el array `members`:
```ts
{
  id: "unico-id",          // usado para el anchor #member-id
  name: "Nombre Apellido",
  role: "Rol en el equipo",
  bio: "Descripción personal en 2-3 líneas.",
  avatar: null,            // URL pública, o null para iniciales
  location: "Ciudad",
  available: true,         // false si no está disponible
  links: {
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/in/...",
    portfolio: null,       // null si no tiene
    email: "...",
  },
  skills: ["React", "Node.js", "..."],
  projects: [
    {
      title: "Proyecto",
      description: "Descripción breve.",
      tags: ["Tag1", "Tag2"],
      github: "https://github.com/...",
      demo: null,           // null si no hay demo
    },
  ],
},
```

### Agregar un proyecto de equipo
```ts
{
  title: "Nombre del proyecto",
  description: "Descripción.",
  tags: ["Tech1", "Tech2"],
  github: "https://github.com/...",
  demo: "https://...",
  year: 2024,
  highlight: true,   // true = aparece en "destacados"
},
```

### Foto de perfil
- **URL externa**: pon la URL directamente en `avatar`
- **Imagen local**: guarda la foto en `public/avatars/nombre.jpg` y pon `avatar: "/avatars/nombre.jpg"`
- **Sin foto**: deja `avatar: null` y se generarán las iniciales automáticamente

## 🎨 Personalización de colores

Cada miembro recibe un color automático según su posición en el array. Para cambiarlos, edita el array `colors` en `MemberCard.astro` y en `index.astro`:

```ts
const colors = ['#d4500a', '#2563eb', '#2d7a3a', '#7c3aed', '#b91c1c', '#0369a1'];
```

El color principal del sitio (naranja) se puede cambiar en `Layout.astro`:
```css
--accent: #d4500a;
--accent-2: #f06b25;
```

## 🌐 Deploy

### Vercel
1. Sube a GitHub
2. Importa en vercel.com → Framework: **Astro**

### GitHub Pages
Edita `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://usuario.github.io',
  base: '/nombre-repo',
});
```

## 📁 Estructura

```
team-portfolio/
├── public/
│   └── favicon.svg
│   └── avatars/       ← pon aquí las fotos del equipo
├── src/
│   ├── components/
│   │   ├── MemberCard.astro       ← card de cada miembro
│   │   └── TeamProjectCard.astro  ← card de proyectos de equipo
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── data.ts   ← ✏️ EDITA ESTE ARCHIVO
└── astro.config.mjs
```
