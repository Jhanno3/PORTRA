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
          <div className="relative aspect-[7/3] w-full overflow-hidden border border-portra-black/10 bg-portra-black/[0.04]">
            {/* eslint-disable-next-line @next/next/no-img-element -- consistente con la portada del grid (aspect-[7/3], object-cover) */}
            <img
              src={coverUrl}
              alt={project.title}
              loading="eager"
              style={
                project.coverPosition
                  ? { objectPosition: project.coverPosition }
                  : undefined
              }
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8 border-b border-portra-black/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-h1 font-bold leading-none">{project.title}.</h1>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-right">
              <div>
                <dt className="font-mono text-eyebrow uppercase text-portra-taupe">
                  Year
                </dt>
                <dd className="text-portra-black/70">{project.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-eyebrow uppercase text-portra-taupe">
                  Category
                </dt>
                <dd className="text-portra-black/70">
                  {project.categories.join(", ")}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-eyebrow uppercase text-portra-taupe">
                  Scope of work
                </dt>
                <dd className="text-portra-black/70">{project.scope}</dd>
              </div>
              <div>
                <dt className="font-mono text-eyebrow uppercase text-portra-taupe">
                  Timeline
                </dt>
                <dd className="text-portra-black/70">{project.timeline}</dd>
              </div>
              <div>
                <dt className="font-mono text-eyebrow uppercase text-portra-taupe">
                  Photography
                </dt>
                <dd className="text-portra-black/70">{project.photographer}</dd>
              </div>
            </dl>
          </div>

          {project.sections.length > 0 && (
            <div className="flex flex-col gap-10 border-b border-portra-black/10 pb-10">
              {project.sections.map((section, index) =>
                section.heading ? (
                  <div key={index} className="flex flex-col gap-4 sm:flex-row sm:gap-12">
                    <h2 className="w-full shrink-0 font-mono text-eyebrow uppercase text-portra-taupe sm:w-48">
                      {section.heading}
                    </h2>
                    <div className="flex max-w-2xl flex-col gap-4 text-sm leading-relaxed text-portra-black/70 sm:text-base">
                      {section.body.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-portra-black/80 sm:text-lg"
                  >
                    {section.body.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                ),
              )}
            </div>
          )}

          <ProjectGallery
            images={project.images}
            videos={project.videos}
            title={project.title}
          />
        </div>
      </div>
    </main>
  );
}
