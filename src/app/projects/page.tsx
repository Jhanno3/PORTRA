import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col bg-portra-white px-8 py-16 text-portra-black sm:px-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-h1 font-bold leading-none">Projects.</h1>
          <p className="max-w-xs text-sm leading-relaxed text-portra-black/70 sm:text-right">
            Selected work across brands, culture &amp; experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.name} className="flex flex-col gap-4">
              <div
                aria-hidden
                className="flex aspect-[7/3] w-full items-center justify-center border border-portra-black/10 bg-portra-black/[0.04]"
              >
                <span className="font-mono text-[11px] uppercase tracking-wide text-portra-taupe">
                  Imagen pendiente
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-4 border-t border-portra-black/10 pt-3">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold">{project.name}.</span>
                  <span className="text-sm text-portra-black/60">
                    {project.categories.join(", ")}
                  </span>
                </div>
                <span className="shrink-0 text-sm text-portra-black/60">
                  {project.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
