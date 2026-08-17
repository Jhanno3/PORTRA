export type ProjectSection = {
  /** Título de la subsección ("Nuestro rol", "Contexto"...). Vacío = párrafo de apertura sin título. */
  heading: string;
  /** Cuerpo de texto; párrafos separados por doble salto de línea. */
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  categories: string[];
  year: string;
  photographer: string;
  scope: string;
  timeline: string;
  /** Texto descriptivo del proyecto (intro + subsecciones tipo "Nuestro rol"). */
  sections: ProjectSection[];
  /** Cloudinary public_id de la portada (grid de /projects). */
  cover: string;
  /** object-position CSS para reencuadrar la portada dentro del box 7:3 (default: centrado). */
  coverPosition?: string;
  /** Cloudinary public_ids de las fotos internas del proyecto. */
  images: string[];
  /** Cloudinary public_ids de los videos internos del proyecto (mismo galería, después de las fotos). */
  videos: string[];
};

// Convención de public_ids: planos (sin carpetas), snake_case, sin acentos
// ni espacios — "proyecto_cover" para la portada, "proyecto_01",
// "proyecto_02"... para fotos Y videos por igual (mismo patrón, numeración
// propia de cada tipo). Cloudinary separa imágenes y videos internamente, así
// que una foto y un video pueden compartir el mismo public_id sin chocar —
// lo que importa es en qué lista del código (images o videos) se declara.
// La portada de Consulado ya es una foto real subida por el dueño con otro
// nombre (cover_ConsuladoDeItalia) — se respeta tal cual está en la Media
// Library en vez de forzar el rename.
//
// Copy: Track Club, Speed, River y Consulado tienen texto real provisto por
// el dueño (12 ago 2026). El de Track Club está marcado por él mismo como
// "TENTATIVO" — no darlo por definitivo sin confirmar. Manu Ginóbili sigue
// con datos placeholder (ver CLAUDE.md §7): year/categories/scope/timeline
// inventados solo para layout, y sin fotos internas subidas todavía.
export const PROJECTS: Project[] = [
  {
    slug: "manu-ginobili",
    title: "Manu Ginóbili",
    categories: ["Brand Identity", "Content", "Digital"],
    year: "2022",
    photographer: "TBD",
    scope: "TBD",
    timeline: "TBD",
    sections: [],
    cover: "manu_ginobili_cover",
    images: ["manu_ginobili_01", "manu_ginobili_02"],
    videos: [],
  },
  {
    slug: "consulado-italia",
    title: "Consolato Generale d'Italia",
    categories: ["Comunicación institucional y pública"],
    year: "2024 — Actualidad",
    photographer: "TBD",
    scope: "Creación de contenido / Producción audiovisual",
    timeline: "Colaboración anual continua",
    sections: [
      {
        heading: "",
        body: "El Consulado General de Italia en Bahía Blanca desarrolla una agenda permanente de actividades institucionales, culturales y de vinculación con la comunidad italiana de su circunscripción.\n\nDesde 2024 acompañamos su comunicación de manera integral, creando y produciendo los contenidos necesarios para comunicar esa agenda en distintos formatos y canales: desde piezas gráficas y mensajes institucionales hasta spots audiovisuales y cobertura de eventos.",
      },
    ],
    cover: "cover_ConsuladoDeItalia",
    // Todavía no hay fotos internas subidas (solo la portada y los 3 videos).
    images: [],
    videos: ["consulado_01", "consulado_02", "consulado_03"],
  },
  {
    slug: "track-club",
    title: "Track Club",
    categories: ["Música, cultura & experiencias"],
    year: "2025 — Actualidad",
    photographer: "TBD",
    scope: "Producción audiovisual / Creación de contenido",
    timeline: "Colaboración mensual continua",
    sections: [
      {
        heading: "",
        body: "Track Club es una productora de eventos de música electrónica que construye experiencias alrededor de artistas internacionales, locaciones singulares y una curaduría cuidada en cada fecha.\n\nCon una agenda selectiva y eventos desarrollados en espacios como yates, glampings y edificios históricos, desde 2025 acompañamos a Track Club en la construcción de su universo audiovisual y en la generación continua de contenido para comunicar cada experiencia antes, durante y después del evento.",
      },
      {
        heading: "Nuestro rol",
        body: "Trabajamos junto a Track Club de manera mensual desarrollando su producción audiovisual y contenido para cada etapa de comunicación de los eventos.\n\nNuestro trabajo incluye la creación de teasers y piezas audiovisuales para los lanzamientos, contenido para marcas y alianzas estratégicas, cobertura de eventos, fotografía, drops de contenido y producción de aftermovies.\n\nLa colaboración continua nos permite desarrollar un lenguaje visual consistente y, al mismo tiempo, adaptar cada producción a la identidad particular de cada artista, venue y experiencia.",
      },
    ],
    cover: "track_club_cover",
    images: [
      "track_club_01",
      "track_club_02",
      "track_club_04",
      "track_club_05",
      "track_club_06",
    ],
    videos: ["track_club_03", "track_club_07", "track_club_08"],
  },
  {
    slug: "river",
    title: "River",
    categories: ["Comunicación institucional"],
    year: "2025",
    photographer: "TBD",
    scope: "Cobertura de eventos / Foto & Video",
    timeline: "3 jornadas / Entrega inmediata",
    sections: [
      {
        heading: "",
        body: "Tras las inundaciones en Bahía Blanca, Fundación River Plate desarrolló una serie de iniciativas para acompañar la recuperación de clubes, escuelas y comunidades a través del deporte.\n\nDurante tres jornadas consecutivas realizamos la cobertura integral de las actividades de la Fundación en la ciudad, incluyendo eventos comunitarios y una nueva edición de la Escuela de Formadores, con producción de foto y video y entrega inmediata de contenido para acompañar su comunicación institucional en tiempo real.",
      },
    ],
    cover: "river_cover",
    images: ["river_01", "river_02", "river_03"],
    videos: [],
  },
  {
    slug: "speed",
    title: "Speed",
    categories: ["Música, cultura & experiencias"],
    year: "2025",
    photographer: "TBD",
    scope: "Campaña audiovisual / Branded Content",
    timeline: "1 semana",
    sections: [
      {
        heading: "Introducción",
        body: "En el marco de una activación de Speed Unlimited durante Track Club, desarrollamos una pieza audiovisual pensada para integrar la marca dentro de la experiencia del evento sin recurrir al formato tradicional de recap.\n\nA partir del brief de la marca, construimos una pequeña historia alrededor del recorrido del producto durante la noche, combinando contenido específicamente producido con momentos reales del evento.",
      },
      {
        heading: "Contexto",
        body: "El desafío era generar contenido que mostrara la presencia de Speed dentro de Track Club, pero que al mismo tiempo tuviera una narrativa propia y se sintiera integrado al lenguaje audiovisual de la fecha.\n\nEl concepto partía de una pregunta simple: ¿cómo vive una lata de Speed una noche de Track Club?\n\nDesde ahí, el producto funciona como hilo conductor de la pieza: aparece en distintos momentos y situaciones mientras el evento evoluciona, permitiendo mostrar simultáneamente la activación de marca, el público y la experiencia.",
      },
      {
        heading: "Nuestro rol",
        body: "Trabajamos sobre el concepto propuesto por el cliente y lo llevamos a una narrativa audiovisual, definiendo cómo integrar el producto dentro de la cobertura del evento.\n\nLa producción combinó tomas específicas de Speed con imágenes de la fiesta para construir una pieza con introducción, desarrollo y cierre, evitando que el resultado se sintiera como un recap convencional con presencia de producto.\n\nEl proyecto se desarrolló y entregó dentro de una semana.",
      },
    ],
    cover: "speed_cover",
    coverPosition: "center 37.5%",
    images: [],
    videos: ["speed_01"],
  },
  {
    slug: "dow-center",
    title: "Dow Center",
    categories: ["Cultura, entretenimiento & experiencias"],
    year: "2025",
    photographer: "TBD",
    scope: "Fotografía / Cobertura audiovisual",
    timeline: "Cobertura por evento",
    sections: [
      {
        heading: "Introducción",
        body: "Dow Center es un centro tecnológico, deportivo y de alto rendimiento de Bahía Blanca que, además de su actividad principal, funciona como escenario para espectáculos y eventos de gran escala.\n\nTrabajamos junto al espacio en la cobertura audiovisual de algunos de los principales shows que pasan por su agenda, incluyendo artistas como Andrés Calamaro, Abel Pintos y Emanero, con foco principalmente en fotografía y, según las necesidades de cada fecha, producción de video.",
      },
      {
        heading: "Trabajo",
        body: "Nuestro trabajo se concentra en la cobertura fotográfica de los espectáculos, registrando al artista, la puesta en escena, el público y los momentos clave de cada fecha.\n\nDependiendo del proyecto, la cobertura se amplía también a video, adaptando la producción a las necesidades específicas de cada show y a la dinámica de un evento en vivo.",
      },
    ],
    cover: "dow_cover",
    images: ["dow_01", "dow_02", "dow_03", "dow_04"],
    videos: [],
  },
];
