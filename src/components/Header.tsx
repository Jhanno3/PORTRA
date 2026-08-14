"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/nav";
import { sectionThemeFor } from "@/lib/theme";

export function Header() {
  const pathname = usePathname();
  const isDark = sectionThemeFor(pathname) === "dark";
  const [open, setOpen] = useState(false);

  const barClasses = isDark
    ? "bg-portra-black text-portra-white border-portra-white/10"
    : "bg-portra-white text-portra-black border-portra-black/10";
  const lineClasses = isDark ? "bg-portra-white" : "bg-portra-black";
  const borderClasses = isDark ? "border-portra-white/10" : "border-portra-black/10";

  return (
    <header className={`sticky top-0 z-50 border-b ${barClasses}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          P<em className="italic">o</em>rtra<sup>®</sup>
        </Link>

        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`block h-px w-5 transition-transform ${lineClasses} ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 transition-transform ${lineClasses} ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className={`flex flex-col gap-4 border-t px-6 py-6 text-sm sm:hidden ${borderClasses}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
