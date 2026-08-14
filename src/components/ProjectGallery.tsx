"use client";

import { useCallback, useEffect, useState } from "react";
import { getCldImageUrl } from "next-cloudinary";

function cldUrl(publicId: string) {
  return getCldImageUrl({ src: publicId, format: "auto", quality: "auto" });
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showPrev, showNext]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2">
        {images.map((publicId, index) => (
          <button
            key={publicId}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`Ver foto ${index + 1} de ${title} en grande`}
            className="group relative aspect-[7/3] w-[85%] shrink-0 snap-start overflow-hidden border border-portra-black/10 bg-portra-black/[0.04] sm:w-[46%] lg:w-[32%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- consistente con la portada del grid (aspect-[7/3], object-cover) */}
            <img
              src={cldUrl(publicId)}
              alt={`${title} — foto ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — galería`}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-portra-black p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-portra-white/20 text-portra-white transition-opacity hover:opacity-70 sm:top-8 sm:right-8"
          >
            <CloseIcon />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Foto anterior"
                className="absolute top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-portra-white/20 text-portra-white transition-opacity hover:opacity-70 sm:left-8"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Foto siguiente"
                className="absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-portra-white/20 text-portra-white transition-opacity hover:opacity-70 sm:right-8"
              >
                <ArrowRightIcon />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element -- lightbox: tamaño y proporción varían por foto, no aplica next/image con ratio fijo */}
          <img
            src={cldUrl(images[openIndex])}
            alt={`${title} — foto ${openIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-portra-white/60 sm:bottom-8">
            {openIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
