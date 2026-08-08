export type SectionTheme = "dark" | "light";

// Color rhythm from the brand brief: Home, Studio and FAQ run on the
// dark register; Services and Projects run on the light register.
const DARK_ROUTES = new Set(["/", "/studio", "/faq"]);

export function sectionThemeFor(pathname: string): SectionTheme {
  return DARK_ROUTES.has(pathname) ? "dark" : "light";
}
