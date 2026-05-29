import { Heart } from "lucide-react";
import { personal, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="font-display text-sm text-foreground">
            <span className="text-gradient font-semibold">{personal.name}</span>
          </p>
          <p className="text-xs text-zinc-500 inline-flex items-center gap-1.5">
            Built with <Heart className="size-3 text-rose-400" /> using Next.js,
            Tailwind & Three.js
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.name}
                className="size-9 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-foreground hover:border-white/25 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-zinc-500 font-mono">
          © {new Date().getFullYear()} {personal.shortName}.
        </p>
      </div>
    </footer>
  );
}
