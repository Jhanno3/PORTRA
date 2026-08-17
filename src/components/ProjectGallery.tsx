"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";

type GalleryItem = {
  type: "image" | "video";
  publicId: string;
};

function cldImageUrl(publicId: string) {
  return getCldImageUrl({ src: publicId, format: "auto", quality: "auto" });
}

function cldVideoPosterUrl(publicId: string) {
  return getCldImageUrl({
    src: publicId,
    assetType: "video",
    format: "jpg",
    quality: "auto",
  });
}

function cldVideoUrl(publicId: string) {
  return getCldVideoUrl({ src: publicId, format: "auto", quality: "auto" });
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

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function ProjectGallery({
  images,
  videos,
  title,
}: {
  images: string[];
  videos: string[];
  title: string;
}) {
  const items = useMemo<GalleryItem[]>(
    () => [
      ...images.map((publicId): GalleryItem => ({ type: "image", publicId })),
      ...videos.map((publicId): GalleryItem => ({ type: "video", publicId })),
    ],
    [images, videos],
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = stripRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, items.length]);

  const scrollStrip = useCallback((direction: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  }, []);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current - 1 + items.length) % items.length,
    );
  }, [items.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current + 1) % items.length,
    );
  }, [items.length]);

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

  if (items.length === 0) return null;

  const openItem = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="relative">
        <div
          ref={stripRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {items.map((item, index) => (
            <button
              key={item.publicId}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={
                item.type === "video"
                  ? `Reproducir video ${index + 1} de ${title}`
                  : `Ver foto ${index + 1} de ${title} en grande`
              }
              className="group relative aspect-[7/3] w-[85%] shrink-0 snap-start overflow-hidden border border-portra-black/10 bg-portra-black/[0.04] sm:w-[46%] lg:w-[32%]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- consistente con la portada del grid (aspect-[7/3], object-cover) */}
              <img
                src={
                  item.type === "video"
                    ? cldVideoPosterUrl(item.publicId)
                    : cldImageUrl(item.publicId)
                }
                alt={
                  item.type === "video"
                    ? `${title} — video ${index + 1}`
                    : `${title} — foto ${index + 1}`
                }
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {item.type === "video" && (
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-portra-black/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-portra-white/90 pl-1 text-portra-black">
                    <PlayIcon />
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>

        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            aria-label="Ver anteriores"
            className="absolute top-1/2 left-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-portra-black/15 bg-portra-white/90 text-portra-black shadow-sm transition-opacity hover:opacity-70"
          >
            <ArrowLeftIcon />
          </button>
        )}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollStrip(1)}
            aria-label="Ver más"
            className="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-portra-black/15 bg-portra-white/90 text-portra-black shadow-sm transition-opacity hover:opacity-70"
          >
            <ArrowRightIcon />
          </button>
        )}
      </div>

      {openItem && (
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

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Anterior"
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
                aria-label="Siguiente"
                className="absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-portra-white/20 text-portra-white transition-opacity hover:opacity-70 sm:right-8"
              >
                <ArrowRightIcon />
              </button>
            </>
          )}

          {openItem.type === "video" ? (
            <video
              key={openItem.publicId}
              src={cldVideoUrl(openItem.publicId)}
              controls
              autoPlay
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- lightbox: tamaño y proporción varían por foto, no aplica next/image con ratio fijo
            <img
              src={cldImageUrl(openItem.publicId)}
              alt={`${title} — foto ${(openIndex ?? 0) + 1}`}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full object-contain"
            />
          )}

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-portra-white/60 sm:bottom-8">
            {(openIndex ?? 0) + 1} / {items.length}
          </span>
        </div>
      )}
    </>
  );
}
