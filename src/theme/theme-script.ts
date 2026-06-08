/**
 * Inline script injected into <head> before paint.
 * Resolves the active theme and sets `data-theme` on <html> so there is
 * no flash of the wrong theme (FOUC) on first load / refresh.
 *
 * Resolution order:
 *   1. Saved preference in localStorage ("theme")
 *   2. OS preference (prefers-color-scheme)
 *   3. Fallback: "light"
 */
export const THEME_STORAGE_KEY = "theme";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;
