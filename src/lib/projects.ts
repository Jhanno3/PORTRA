export type Project = {
  name: string;
  categories: string[];
  year: string;
};

// Fuente única de los proyectos de referencia del brief (nombres reales de
// clientes, no inventados) — alimenta el grid de /projects y el contador
// "Projects ( N )" del nav.
//
// ⚠️ Categorías y años son placeholders del mockup (ver CLAUDE.md §7), no
// validados por el dueño todavía — excepto Track Club, cuyas categorías acá
// ya son las corregidas (Culture / Nightlife / Live Experience, NO deporte)
// según la corrección explícita del brief.
export const PROJECTS: Project[] = [
  {
    name: "Track Club",
    categories: ["Culture", "Nightlife", "Live Experience"],
    year: "2024",
  },
  {
    name: "Consolato Generale d'Italia",
    categories: ["Brand Identity", "Digital"],
    year: "2023",
  },
  {
    name: "Manu Ginóbili",
    categories: ["Brand Identity", "Content", "Digital"],
    year: "2022",
  },
  {
    name: "River",
    categories: ["Brand Identity", "Digital", "Campaign"],
    year: "2024",
  },
];
