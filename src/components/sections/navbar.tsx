"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { navLinks, personal } from "@/lib/data";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/smooth-scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      ...navLinks.map((l) => l.href.replace("#", "")),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const id = href.replace("#", "");
      if (!document.getElementById(id)) return; // no target → default behavior
      e.preventDefault();
      setOpen(false);
      // Custom rAF smooth-scroll (see lib/smooth-scroll). Header is fixed, so the
      // 80px offset keeps the target clear of the navbar. We update the hash after
      // a tick so the URL reflects the section without triggering a native jump.
      scrollToId(id, 80);
      if (typeof history !== "undefined") {
        window.setTimeout(() => history.replaceState(null, "", href), 0);
      }
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 h-16 sm:h-20">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-gradient">{personal.shortName}</span>
          <span className="text-zinc-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-zinc-400 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="gradient" size="sm">
            <a href={personal.resumeUrl} target="_blank" rel="noopener">
              <Download className="size-4" />
              Resume
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/[0.03] text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3 rounded-lg text-sm text-zinc-300 hover:bg-white/[0.04]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild variant="gradient" className="w-full">
                  <a href={personal.resumeUrl} target="_blank" rel="noopener">
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
