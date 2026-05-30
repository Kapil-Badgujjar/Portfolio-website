"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, Check } from "lucide-react";
import { THEMES } from "@/lib/themes";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-label="Change color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground transition-colors hover:bg-white/[0.06]"
      >
        <Palette className="size-[18px]" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-white/10 bg-background/95 p-1.5 shadow-xl backdrop-blur-xl"
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/[0.06]"
            >
              <span
                className="size-5 shrink-0 rounded-full ring-1 ring-white/20"
                style={{
                  background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]}, ${t.colors[2]})`,
                }}
              />
              <span className="flex-1 text-left">{t.label}</span>
              {theme === t.id && <Check className="size-4 text-zinc-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
