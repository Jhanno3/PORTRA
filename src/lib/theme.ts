export type SectionTheme = "dark" | "light";

// Color rhythm from the brand brief: Home (which now also hosts the
// Services, Studio and FAQ sections in-page) runs on the dark register;
// Projects runs on the light register.
const DARK_ROUTES = new Set(["/"]);

export function sectionThemeFor(pathname: string): SectionTheme {
  return DARK_ROUTES.has(pathname) ? "dark" : "light";
}
