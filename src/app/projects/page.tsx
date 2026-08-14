import { PROJECTS } from "@data/projects";
import { ProjectsGrid } from "@/components/ProjectsGrid";

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

        <ProjectsGrid projects={PROJECTS} />
      </div>
    </main>
  );
}
