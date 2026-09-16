"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

const FADE_MS = 2000;

export function HeroSlideshow({
  images,
  intervalMs = 7000,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div aria-hidden className="absolute inset-0">
      {images.map((publicId, index) => (
        <CldImage
          key={publicId}
          src={publicId}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          format="auto"
          quality="auto"
          className="object-cover grayscale transition-opacity ease-in-out"
          style={{
            objectPosition: "center 35%",
            opacity: index === activeIndex ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
          }}
        />
      ))}
    </div>
  );
}
