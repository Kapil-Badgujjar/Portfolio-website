"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES } from "@/lib/themes";

type ThemeContextValue = {
  theme: string;
  setTheme: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState(DEFAULT_THEME);

  // Reconcile React state with whatever the no-flash script already applied.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // ignore (private mode / blocked storage)
    }
    const valid = THEMES.some((t) => t.id === stored) ? stored! : DEFAULT_THEME;
    setThemeState(valid);
    document.documentElement.setAttribute("data-theme", valid);
  }, []);

  const setTheme = useCallback((id: string) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      // ignore
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
