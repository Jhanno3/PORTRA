export type Project = {
  slug: string;
  title: string;
  categories: string[];
  year: string;
  photographer: string;
  /** Cloudinary public_id de la portada (grid de /projects). */
  cover: string;
  /** object-position CSS para reencuadrar la portada dentro del box 7:3 (default: centrado). */
  coverPosition?: string;
  /** Cloudinary public_ids de las fotos internas del proyecto (para una futura página de detalle). */
  images: string[];
};

// ⚠️ PLACEHOLDERS (ver CLAUDE.md §7): year, categories y photographer son
// datos de layout, no reales ni validados por el dueño todavía. Los
// public_ids de Cloudinary tampoco existen aún en la Media Library — hay
// que subir las fotos con esos nombres exactos para que aparezcan (ver
// convención abajo).
//
// Track Club es cultura / música electrónica / nightlife, NO deporte —
// las categorías ya reflejan eso.
//
// Convención de public_ids: planos (sin carpetas), snake_case, sin acentos
// ni espacios — "proyecto_cover" para la portada, "proyecto_01",
// "proyecto_02"... para las internas. La portada de Consulado ya es una foto
// real subida por el dueño con otro nombre (cover_ConsuladoDeItalia) — se
// respeta tal cual está en la Media Library en vez de forzar el rename.
export const PROJECTS: Project[] = [
  {
    slug: "manu-ginobili",
    title: "Manu Ginóbili",
    categories: ["Brand Identity", "Content", "Digital"],
    year: "2022",
    photographer: "TBD",
    cover: "manu_ginobili_cover",
    images: ["manu_ginobili_01", "manu_ginobili_02"],
  },
  {
    slug: "consulado-italia",
    title: "Consolato Generale d'Italia",
    categories: ["Brand Identity", "Digital"],
    year: "2023",
    photographer: "TBD",
    cover: "cover_ConsuladoDeItalia",
    images: ["consulado_01", "consulado_02", "consulado_03"],
  },
  {
    slug: "track-club",
    title: "Track Club",
    categories: ["Culture", "Nightlife", "Live Experience"],
    year: "2024",
    photographer: "TBD",
    cover: "track_club_cover",
    images: ["track_club_01", "track_club_02", "track_club_03"],
  },
  {
    slug: "river",
    title: "River",
    categories: ["Brand Identity", "Digital", "Campaign"],
    year: "2024",
    photographer: "TBD",
    cover: "river_cover",
    images: ["river_01", "river_02", "river_03"],
  },
  {
    slug: "speed",
    title: "Speed",
    // Categorías y año todavía no confirmados — pasámelos y los actualizo.
    categories: ["TBD"],
    year: "TBD",
    photographer: "TBD",
    cover: "speed_cover",
    coverPosition: "center 37.5%",
    images: [],
  },
];
