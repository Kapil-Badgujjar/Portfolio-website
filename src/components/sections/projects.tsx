"use client";

import { motion } from "motion/react";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <AnimatedSection id="projects" accent="cyan" accentSide="right">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Things I've built"
          title="Selected Projects"
          description="A few systems I've architected and shipped — from solo MVPs to multi-tenant platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <Card className="group h-full p-6 sm:p-8 glow-hover flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    {p.featured && (
                      <Sparkles className="size-4 text-amber-300" />
                    )}
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener"
                        aria-label={`${p.title} on GitHub`}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/30"
                      >
                        <FaGithub className="size-4" />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener"
                        aria-label={`${p.title} live`}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/30"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="font-mono text-xs uppercase tracking-widest text-indigo-300/80 mb-3">
                  {p.tagline}
                </p>

                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="text-sm text-zinc-400 flex gap-2 leading-relaxed"
                    >
                      <span className="text-emerald-400 font-mono shrink-0">
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.06]">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
