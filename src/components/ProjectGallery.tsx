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
        // Plain <img> on purpose: next/image locks the box to a declared
        // aspect ratio (via CSS `aspect-ratio`), which crops or letterboxes
        // whenever a photo's real ratio differs. This lets each photo size
        // itself to its own true dimensions — full width, no crop, no bars.
        <img
          key={publicId}
          src={getCldImageUrl({ src: publicId, format: "auto", quality: "auto" })}
          alt={`${title} — foto ${index + 1}`}
          loading="lazy"
          className="h-auto w-full border border-portra-black/10 bg-portra-black/[0.04]"
        />
      ))}
    </div>
  );
}
