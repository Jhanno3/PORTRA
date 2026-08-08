"use client";

import { usePathname } from "next/navigation";
import { sectionThemeFor } from "@/lib/theme";

export function Footer() {
  const pathname = usePathname();
  const isDark = sectionThemeFor(pathname) === "dark";
  const year = new Date().getFullYear();

  const classes = isDark
    ? "bg-portra-black text-portra-neutral border-portra-white/10"
    : "bg-portra-white text-portra-taupe border-portra-black/10";

  return (
    <footer className={`mt-auto border-t px-6 py-6 text-xs sm:px-10 ${classes}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} portra® studio. All rights reserved.</p>
        <p>Bahía Blanca, Argentina</p>
      </div>
    </footer>
  );
}
