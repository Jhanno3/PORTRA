@AGENTS.md
# CLAUDE.md — PORTRA Studio

Contexto de marca y reglas de trabajo para este proyecto. Leer completo antes de tocar código, copy o assets. La dirección estratégica y visual **ya está aprobada** — no rediseñar ni replantear desde cero salvo pedido explícito.

---

## 1. Qué es PORTRA

Creative studio independiente (NO una productora audiovisual). Trabaja end-to-end: desde la estrategia hasta la ejecución.

- **Tagline / territorio:** Creative studio for brands, culture & experiences.
- **Pilares:** Strategy · Creative · Production.
- **Línea principal de posicionamiento:** *"From brief to delivery, without the chaos."*
- **Base:** Bahía Blanca, Argentina. Equipos flexibles armados por proyecto.
- **Promesa de marca:** creativo pero **extremadamente confiable en ejecución**. Diferenciales: entrega rápida en plazos razonables + responsabilidad.
- **Modelo de negocio:** adaptable según brief (solo estrategia / estrategia+creative / creative+producción / producción pura / retainers / eventos / campañas / soporte a agencias). NO vender packs cerrados.

Definición canónica: *Independent creative studio working across strategy, creative and production.*

---

## 2. Estado del proyecto (al 12 ago 2026)

Fase: **brand + design direction definidos, implementación en curso**. El objetivo es implementar la web y cerrar assets/copy reales — no volver a diseñar.

- **Home** ya es una única página (`src/app/page.tsx`) con el hero + las secciones Services/Studio/FAQ ancladas por scroll (ver §3). Todo el contenido de esas secciones sigue siendo placeholder (`Contenido en construcción`) — falta cargar copy y layout real de cada una (cards, acordeón, stats).
- **Fondo del hero:** ya está el asset real `public/assets/Fondo.png` (reemplazó el placeholder de gradientes). Tiene un zoom lento tipo Ken Burns (CSS, `animate-hero-zoom` en `globals.css`) como animación simple pedida por el dueño en esta etapa — **contradice el punto §5 "sin zoom, sin pan, cámara estática"** del brief para el loop final. Tratarlo como provisorio: no asumir que reemplaza el loop de video definitivo sin confirmarlo con el dueño.
- **Projects** sigue siendo ruta propia (`src/app/projects/page.tsx`), sin contenido real todavía.

---

## 3. Arquitectura del sitio

**Decisión (12 ago 2026):** en vez de una página por sección, **Home es una sola página** (`src/app/page.tsx`) con Hero → Services → Studio → FAQ como secciones ancladas (`id="services"`, `id="studio"`, `id="faq"`), navegadas por scroll (suave, `scroll-smooth` en `layout.tsx`). **Projects es la única sección que queda como página propia** (`/projects`), porque su contenido (grilla de casos) funciona mejor como destino de navegación independiente.

Navegación: `Studio / Services / Work / Contact`. El logo vuelve a Home (`/`).
- `Studio` → `/#studio`, `Services` → `/#services` (anclas dentro de Home).
- `Work` → `/projects` (página propia).
- `Contact` → `/#studio` (CTA + email dentro de la sección Studio, sin página propia).

Definidos en `src/lib/nav.ts`. El registro de color del Header/Footer (`src/lib/theme.ts`) es por **ruta**, no por sección visible en scroll: `/` = negro, `/projects` = blanco. Si en algún momento se quiere que el Header cambie de color según la sección que se está viendo (scroll-spy), es un cambio deliberado a proponer, no algo implícito.

**Secuencia de color (regla firme, ahora por sección dentro de Home + la página Projects):**

| Sección / Página     | Fondo        |
|-----------------------|--------------|
| Home (hero)            | Negro        |
| Services (sección)     | Warm white   |
| Studio (sección)       | Negro        |
| FAQ (sección)          | Negro        |
| Projects (página)      | Warm white   |

---

## 4. Sistema visual

**Paleta:**
```
Black        #0B0B0B
Warm White   #F5F3EE
Soft Neutral #CFCBC4
Muted Taupe  #8A8175
```
Lógica monocromática/neutral. **NO** usar rojo/amarillo Kodak (haría la asociación demasiado literal).

**Tipografía:** sans/grotesk contemporánea, fuerte. Títulos enormes, mucha jerarquía. (La familia exacta aún no está cerrada — ver pendientes.)

**Logo / lockup:** `portra®` grande + `Studio` más chico debajo/hacia la derecha del wordmark. La "O" va **muy sutilmente** inclinada/deformada (no exagerar). "Studio" es parte del lockup completo, NO un elemento suelto.

**Principios:** raw imagery + precise design · mucho aire · fuerte jerarquía tipográfica · composición editorial · imágenes grandes protagonistas · motion sutil · loops como atmósfera, no espectáculo.

**Personalidad:** Cinematic · Precise · Editorial · Cultural · Flexible · Reliable.

---

## 5. Detalle por página

Nota (12 ago 2026): "página" acá describe el diseño/contenido conceptual. En código, Services/Studio/FAQ son **secciones dentro de Home** (§3), y todas siguen con contenido placeholder (`Contenido en construcción`) — lo de abajo es la referencia a implementar, no lo que ya está en pantalla.

### Home / Hero (negro)
Header superior · hero rectangular con esquinas redondeadas · fondo de siluetas humanas desenfocadas en B&N (atmósfera nebulosa) · wordmark `portra® Studio` enorme · copy inferior izquierdo + copy secundario a la derecha.
- Copy principal: *Creative studio for brands, culture & experiences.*
- Debajo: *From brief to delivery, without the chaos.*
- Variante editorial secundaria: *Strategy. Design. Content. / Built to be remembered.*
- El hero es un **loop de video** casi imperceptible ("living photograph"): sin zoom, sin pan, cámara estática, seamless, muted/autoplay.
- **Estado actual:** ya está el fondo real `public/assets/Fondo.png` (no video), con un zoom lento CSS (`animate-hero-zoom`) pedido como animación simple provisoria — **no es el loop definitivo** y contradice el "sin zoom" de arriba. Al conseguir el video loop real, sacar `animate-hero-zoom` y volver a `object-cover` estático o al `<video>` correspondiente.

### Services (warm white)
Título `Services.` · descriptor *What we do across brands, culture & experiences.*
Tres cards verticales (imagen arriba · número · título grande · descripción · flecha circular):
1. **Strategy** — Communication strategy, content planning, campaign direction, project roadmaps.
2. **Creative** — Creative direction, concepts, branding, visual identity, content systems.
3. **Production** — Film, photography, events & experiences, post-production.

### Projects / Work (warm white)
Título grande `Projects.` · texto arriba/derecha *Selected work across brands, culture & experiences.* · grilla editorial, imágenes grandes, **dos columnas** en desktop, etiquetas abajo.
Proyectos de referencia: Track Club · Consolato Generale d'Italia · Manu Ginóbili · River.
⚠️ Años, categorías e imágenes actuales son **placeholders de mockup** (ver §7).

### Studio (negro)
Título `Studio.` + descripción:
> Portra is an independent creative studio working across strategy, creative and production.
> We partner with brands, institutions and cultural projects to shape ideas and bring them to life—from brief to delivery, without the chaos.
> Based in Bahía Blanca, working with flexible teams built around each project.

Métricas (⚠️ placeholders sin validar): `10+` years combined experience · `80+` projects delivered · `3` core pillars · `16+` collaborators.
CTA: *Have a project in mind?* → `hello@portra.studio` (email a validar).

### FAQ (negro)
Título `FAQ.` · subtítulo *Common questions about how we work.* · acordeón (número → pregunta → +).
Preguntas: 1) What services do you offer? 2) How do you work? 3) Do you work with brands outside Bahía Blanca? 4) Can you handle strategy and production together? 5) How long does a project take? 6) Do you work on monthly retainers?
Opcionales: 7) Can you build a team around a specific production? 8) How do we start a project?
Aquí vive la explicación del proceso / how we work.

---

## 6. Mobile

No es desktop dividido por dos — reinterpretación vertical. Viewport ref ~390×844.
- **Header:** `portra®` + ☰. Links ocultos tras hamburger (idealmente overlay fullscreen): Studio / Services / Work / FAQ / Contact. Header desaparece al bajar, reaparece al subir.
- **Home:** negro, loop protagonista, wordmark enorme, Studio debajo, copy grande, mucho aire.
- **Services:** NO 3 columnas. Una card debajo de otra, o split 50/50 imagen/contenido. No reducir a miniaturas.
- **Projects:** 1 proyecto por fila (imagen grande · título · categoría · año). Alternar imagen/loop.
- **Studio:** negro, título grande, texto, métricas en grilla 2×2 o una por fila, CTA email.
- **FAQ:** negro, título grande, acordeón, cierre con email.

---

## 7. ⚠️ Datos reales vs. placeholders — CRÍTICO

**Nunca publicar como reales sin validación del dueño:**
- Métricas `10+ / 80+ / 16+` → inventadas para layout.
- Años de proyectos (2022/2023/2024) → generados.
- Categorías/scope de cada caso (Brand Identity, Digital, Campaign, Apparel, Portrait…) → placeholders.
- Email `hello@portra.studio` → a verificar.

**Corrección importante:** **Track Club NO es deporte.** Es música electrónica / nightlife / cultural experience. Categorías correctas: Culture · Nightlife · Live Experience · Content · Creative Production.

**Marca:** `PORTRA` es un **working name**, no una marca legal validada. Riesgo de asociación con Kodak Portra 400. Antes de lanzar: verificar INPI Argentina, marcas similares, dominio, redes.

---

## 8. Reglas para el agente (hacer / no hacer)

**NO:**
- Convertir PORTRA en productora audiovisual pura.
- Estética gamer / sci-fi / HUD / "login de Black Ops" / UI cyberpunk / startup tech futurista.
- Íconos de cámara, rollos de película, timecodes gratuitos, overlays técnicos, grano exagerado, flechas y microdetalles innecesarios.
- Inventar métricas, años, clientes o scope.
- Reemplazar imágenes/assets aprobados por nuevos sin pedido.
- Rediseñar todo ante un cambio puntual.
- Tratar "Studio" como elemento separado del lockup.
- Poner Track Club como deporte.

**SÍ:**
- Preservar sistema negro/blanco, tipografía fuerte, atmósfera cinematográfica, limpieza.
- Mantener los 3 pilares y el portfolio protagonista.
- Loop en hero.
- Posicionamiento estratégico más amplio que producción.
- Soluciones ejecutables, simples de mantener, coherentes con el sistema.
- Distinguir siempre contenido real de placeholder.
- Respetar literalmente estructuras/referencias ya aprobadas.

---

## 9. Preferencias de trabajo del dueño

- Prefiere ver previews visuales antes de implementar.
- Instrucciones concretas y ejecutables; en cambios de UI, ser específico (qué archivo, qué valor).
- Si algo está aprobado, no reinventarlo sin motivo.
- Quiere poder gestionar contenido sin depender siempre de un dev.
- Herramientas gratuitas/baratas en esta etapa.

---

## 10. Próximos pasos sugeridos

1. Consolidar el design system en código (tokens de color, tipografía, spacing) a partir de §4.
2. Cargar el contenido real de las secciones Services / Studio / FAQ dentro de Home (hoy son placeholder) y de la página Projects, siguiendo §5.
3. Header con comportamiento show-on-scroll-up / hide-on-scroll-down.
4. Cerrar logo master (SVG): versión negra, blanca, transparente; lockup `portra® Studio`.
5. Reemplazar métricas/años/scope placeholder por datos reales cuando el dueño los provea.
6. Loop de hero definitivo (video seamless B&N) — reemplaza el zoom CSS provisorio de `Fondo.png` (ver §5).
7. Cerrar responsive mobile según §6.
8. Pre-lanzamiento: dominio / registro de marca / email / redes.

---

## 11. Archivo maestro visual

`PORTRA_Identidad_y_Web_Overview_V2.pdf` — portada, identidad visual, Home/Hero, Services, Projects, Studio, FAQ, notas de sistema. Es la referencia visual principal para retomar.