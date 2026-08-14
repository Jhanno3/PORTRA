import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";

// La respuesta de la pregunta 1 es copy provisto por el dueño (brand brief).
// Las de 2–6 son un primer borrador consistente con el resto del brief
// (equipos flexibles, retainers, strategy+production combinados) — a revisar
// y aprobar antes de tratarlas como copy final.
const FAQ_ITEMS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer end-to-end creative solutions across strategy, creative and production. This includes communication strategy, content planning, creative direction, branding, photography, video, event coverage and post-production. Every project is tailored to the client's goals, with a focus on clarity, quality and execution.",
  },
  {
    question: "How do you work?",
    answer:
      "We start with a clear brief and build a roadmap around it—strategy first, then creative direction, then production. Teams are put together per project, so you get the right specialists without the overhead of a fixed agency structure.",
  },
  {
    question: "Do you work with brands outside Bahía Blanca?",
    answer:
      "Yes. We're based in Bahía Blanca but work with clients across Argentina and beyond, building flexible teams around each project regardless of location.",
  },
  {
    question: "Can you handle strategy and production together?",
    answer:
      "Yes—that's the core of how we work. We can take a project from strategy and concept through to final production, or plug into just one stage if that's what you need.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. Some projects run in a few weeks, others span several months. We define a realistic timeline together during the brief stage and stick to it.",
  },
  {
    question: "Do you work on monthly retainers?",
    answer:
      "Yes, alongside one-off projects and campaigns. Retainers work well for ongoing content, strategy or production needs.",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Communication strategy, content planning, campaign direction, project roadmaps.",
  },
  {
    number: "02",
    title: "Creative",
    description:
      "Creative direction, concepts, branding, visual identity, content systems.",
  },
  {
    number: "03",
    title: "Production",
    description: "Film, photography, events & experiences, post-production.",
  },
];

// ⚠️ Placeholder: inventados para maquetar el layout, no validados por el
// dueño todavía (ver CLAUDE.md §7). Reemplazar por datos reales antes de lanzar.
const STUDIO_STATS = [
  { value: "10+", label: "Years of combined experience" },
  { value: "80+", label: "Projects delivered worldwide" },
  { value: "3", label: "Core pillars — strategy, creative, production" },
  { value: "16+", label: "Collaborators — trusted partners & specialists" },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section
        id="home"
        className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-portra-black px-6 py-10 text-portra-white sm:px-10 sm:py-14"
      >
        <Image
          src="/assets/Fondo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-portra-black/10 via-portra-black/40 to-portra-black/85"
        />

        <div className="relative flex items-start justify-between gap-8">
          <div>
            <h1 className="text-display font-bold leading-none">
              Portra<sup className="text-[0.35em] font-normal">®</sup>
            </h1>
            <p className="-mt-1 text-h2 font-semibold lowercase text-portra-neutral sm:-mt-2">
              Studio
            </p>
          </div>

          <p className="hidden max-w-[14rem] text-right text-sm leading-relaxed text-portra-neutral sm:block">
            Strategy. Design. Content.
            <br />
            Built to be <em className="italic">remembered</em>.
          </p>
        </div>

        <div className="relative flex flex-col gap-4">
          <span className="h-px w-10 bg-portra-taupe" />
          <p className="max-w-md text-sm leading-relaxed text-portra-neutral">
            <span className="block font-medium text-portra-white">
              Creative studio for brands, culture &amp; experiences.
            </span>
            From brief to delivery, without the chaos.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="flex min-h-screen scroll-mt-20 items-center bg-portra-white px-8 py-24 text-portra-black sm:px-16"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-h1 font-bold leading-none">Services.</h1>
            <p className="max-w-xs text-sm leading-relaxed text-portra-black/70 sm:text-right">
              What we do across brands, culture &amp; experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
            {SERVICES.map((service) => (
              <article key={service.number} className="flex flex-col gap-6">
                <div
                  aria-hidden
                  className="flex aspect-[4/5] w-full items-center justify-center border border-portra-black/10 bg-portra-black/[0.04]"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wide text-portra-taupe">
                    Imagen pendiente
                  </span>
                </div>

                <span className="font-mono text-eyebrow text-portra-taupe">
                  {service.number}
                </span>

                <h3 className="text-h2 font-bold leading-none">
                  {service.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-portra-black/70">
                  {service.description}
                </p>

                <span
                  aria-hidden
                  className="mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-portra-black/15"
                >
                  <ArrowIcon />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="flex min-h-screen scroll-mt-20 items-center bg-portra-black px-8 py-24 text-portra-white sm:px-16"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-h1 font-bold leading-none">Studio.</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-portra-neutral sm:text-xl">
              Portra is an independent creative studio working across
              strategy, creative and production. We partner with brands,
              institutions and cultural projects to shape ideas and bring
              them to life—from brief to delivery, without the chaos. Based
              in Bahía Blanca, working with flexible teams built around each
              project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-portra-white/10 pt-10 sm:grid-cols-4">
            {STUDIO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <p className="text-h2 font-bold leading-none">{stat.value}</p>
                <p className="text-sm leading-snug text-portra-neutral">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 border-t border-portra-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-h2 font-semibold leading-tight">
              Have a project in mind?{" "}
              <span className="font-normal text-portra-neutral">
                Let&apos;s build something clear, ambitious and well
                executed.
              </span>
            </p>
            <a
              href="mailto:hello@portra.studio"
              className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-portra-white pb-1 text-lg font-medium transition-opacity hover:opacity-70"
            >
              hello@portra.studio
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="flex min-h-screen scroll-mt-20 items-center bg-portra-black px-8 py-24 text-portra-white sm:px-16"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-h1 font-bold leading-none">FAQ.</h1>
            <p className="max-w-md text-sm leading-relaxed text-portra-neutral">
              Common questions about how we work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="flex flex-col gap-4">
              <p className="max-w-xs text-lg font-medium leading-snug">
                Still have questions? We&apos;re here to help. Reach out
                anytime.
              </p>
              <a
                href="mailto:hello@portra.studio"
                className="inline-flex w-fit items-center gap-3 border-b border-portra-white pb-1 text-sm font-medium transition-opacity hover:opacity-70"
              >
                hello@portra.studio
                <ArrowIcon />
              </a>
            </div>

            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </main>
  );
}
