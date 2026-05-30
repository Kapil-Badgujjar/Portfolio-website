export type Theme = {
  id: string;
  label: string;
  // accent stops 1 → 2 → 3 (used for gradients, particles, orbs, glows)
  colors: [string, string, string];
};

export const THEMES: Theme[] = [
  { id: "aurora", label: "Aurora", colors: ["#6366f1", "#a855f7", "#ec4899"] },
  { id: "ocean", label: "Ocean", colors: ["#2563eb", "#06b6d4", "#22d3ee"] },
  { id: "sunset", label: "Sunset", colors: ["#f59e0b", "#f97316", "#ef4444"] },
  { id: "forest", label: "Forest", colors: ["#10b981", "#22c55e", "#84cc16"] },
  { id: "rose", label: "Rose", colors: ["#fb7185", "#ec4899", "#d946ef"] },
];

export const DEFAULT_THEME = "aurora";
export const THEME_STORAGE_KEY = "portfolio-theme";

export function getTheme(id: string | null | undefined): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

// Apply a theme's palette as INLINE CSS custom properties on <html>. Inline
// styles win the cascade unconditionally, so this sidesteps any Tailwind v4
// @theme cascade-layer issues with attribute-selector overrides.
export function applyThemeColors(id: string) {
  if (typeof document === "undefined") return;
  const t = getTheme(id);
  const el = document.documentElement;
  el.style.setProperty("--color-accent", t.colors[0]);
  el.style.setProperty("--color-accent-2", t.colors[1]);
  el.style.setProperty("--color-accent-3", t.colors[2]);
  el.setAttribute("data-theme", t.id);
}

// Inlined in <body> before paint: applies the saved theme's colors as inline
// styles with no flash. Embeds the palette map so it needs no imports at runtime.
export const THEME_INIT_SCRIPT = `(function(){try{var M=${JSON.stringify(
  Object.fromEntries(THEMES.map((t) => [t.id, t.colors]))
)};var t=localStorage.getItem('${THEME_STORAGE_KEY}');var c=M[t];if(c){var s=document.documentElement.style;s.setProperty('--color-accent',c[0]);s.setProperty('--color-accent-2',c[1]);s.setProperty('--color-accent-3',c[2]);document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;
