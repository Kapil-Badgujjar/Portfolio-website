"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal, socials } from "@/lib/data";

const ParticleField = dynamic(
  () => import("@/components/three/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <ParticleField className="absolute inset-0 -z-0 pointer-events-none opacity-70" />

      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-32 w-96 h-96 rounded-full bg-indigo-600/30 blur-[120px] animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-600/20 blur-[140px] animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center pt-28 pb-20 lg:py-0">
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs sm:text-sm text-zinc-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block text-zinc-400 text-2xl sm:text-3xl lg:text-4xl font-normal mb-3">
              Hi, I&apos;m
            </span>
            <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 text-zinc-300"
          >
            <Sparkles className="size-4 text-indigo-300" />
            <span className="font-display text-xl sm:text-2xl text-zinc-200">
              {personal.title}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
              <MapPin className="size-3.5" />
              {personal.location}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="gradient" size="lg">
              <a href={personal.resumeUrl} target="_blank" rel="noopener">
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="flex items-center gap-3 pt-2"
          >
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.name}
                  className="group inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-colors"
                >
                  <Icon className="size-4.5 transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--color-accent),var(--color-accent-2),var(--color-accent-3),var(--color-accent))] blur-2xl opacity-40" />
          <div className="absolute inset-2 rounded-full bg-background/80" />
          <div className="absolute inset-4 rounded-full overflow-hidden border border-white/10 glow">
            <Image
              src={personal.photo}
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 32rem"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-md px-4 py-3 shadow-xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              currently
            </p>
            <p className="font-display text-sm font-semibold text-foreground">
              @ Rancholabs, IIT Delhi
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-zinc-500 hover:text-foreground transition-colors"
      >
        <span className="font-mono uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
