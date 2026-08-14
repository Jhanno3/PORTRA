import { PROJECTS } from "@data/projects";

export type NavLink = {
  label: string;
  href: string;
};

// Va separado del resto del nav por un "|" y a la izquierda de Services.
export const PROJECTS_NAV_LINK: NavLink = {
  label: `Projects ( ${PROJECTS.length} )`,
  href: "/projects",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/#studio" },
];
