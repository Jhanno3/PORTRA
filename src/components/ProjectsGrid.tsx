"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import type { Project } from "@data/projects";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.slug} className="flex flex-col gap-4">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Ver el proyecto ${project.title}`}
            className="group relative block aspect-[7/3] w-full overflow-hidden border border-portra-black/10 bg-portra-black/[0.04]"
          >
            <CldImage
              src={project.cover}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              format="auto"
              quality="auto"
              loading="lazy"
              style={
                project.coverPosition
                  ? { objectPosition: project.coverPosition }
                  : undefined
              }
              className="scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-portra-black/0 transition-colors duration-500 ease-out group-hover:bg-portra-black/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 border border-portra-black/0 transition-colors duration-500 ease-out group-hover:border-portra-black/20"
            />
          </Link>

          <div className="flex items-baseline justify-between gap-4 border-t border-portra-black/10 pt-3">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-bold">{project.title}.</span>
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
  );
}
