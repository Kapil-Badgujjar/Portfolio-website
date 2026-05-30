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
  { id: "forest", label: "Forest", colors: ["#059669", "#10b981", "#84cc16"] },
  { id: "rose", label: "Rose", colors: ["#fb7185", "#ec4899", "#d946ef"] },
];

export const DEFAULT_THEME = "aurora";
export const THEME_STORAGE_KEY = "portfolio-theme";

// Inlined in <body> before paint to apply the saved theme with no color flash.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;
