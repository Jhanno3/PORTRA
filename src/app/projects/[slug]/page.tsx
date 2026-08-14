import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import { PROJECTS } from "@data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — Portra Studio`,
    description: `${project.title} — ${project.categories.join(", ")}.`,
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const coverUrl = getCldImageUrl({
    src: project.cover,
    format: "auto",
    quality: "auto",
  });

  return (
    <main className="flex flex-1 flex-col bg-portra-white px-8 pt-6 pb-16 text-portra-black sm:px-16 sm:pt-8 sm:pb-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <Link
          href="/projects"
          className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-portra-black/60 transition-opacity hover:opacity-70"
        >
          ← Projects
        </Link>

        <div className="flex flex-col gap-12">
          {/* eslint-disable-next-line @next/next/no-img-element -- ver nota en ProjectGallery: sin recorte, cada foto respeta su proporción real */}
          <img
            src={coverUrl}
            alt={project.title}
            loading="eager"
            className="h-auto w-full border border-portra-black/10 bg-portra-black/[0.04]"
          />

          <div className="flex flex-col gap-6 border-b border-portra-black/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-h1 font-bold leading-none">{project.title}.</h1>
            <div className="flex flex-col gap-1 text-sm text-portra-black/60 sm:items-end sm:text-right">
              <span>{project.categories.join(", ")}</span>
              <span>{project.year}</span>
              <span>Photography — {project.photographer}</span>
            </div>
          </div>

          <ProjectGallery images={project.images} title={project.title} />
        </div>
      </div>
    </main>
  );
}
