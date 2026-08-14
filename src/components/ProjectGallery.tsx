"use client";

import { getCldImageUrl } from "next-cloudinary";

export function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      {images.map((publicId, index) => (
        <div
          key={publicId}
          className="relative aspect-[7/3] w-full overflow-hidden border border-portra-black/10 bg-portra-black/[0.04]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- consistente con la portada del grid (aspect-[7/3], object-cover) */}
          <img
            src={getCldImageUrl({ src: publicId, format: "auto", quality: "auto" })}
            alt={`${title} — foto ${index + 1}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
