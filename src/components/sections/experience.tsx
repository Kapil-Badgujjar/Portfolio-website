"use client";

import { motion } from "motion/react";
import { ExternalLink, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <AnimatedSection id="experience" accent="indigo" accentSide="right">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          description="From learning the ropes as an intern to architecting cloud-native systems that serve thousands."
        />

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-12 md:space-y-20">
            {experience.map((exp, idx) => {
              const flip = idx % 2 === 1;
              return (
                <li key={exp.company} className="relative">
                  <div
                    className="hidden md:block absolute left-1/2 top-7 size-3 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 -translate-x-1/2 ring-4 ring-background"
                    aria-hidden
                  />

                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${
                      flip ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: flip ? 24 : -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`flex flex-col gap-2 ${
                        flip ? "md:items-start md:pl-6" : "md:items-end md:text-right md:pr-6"
                      }`}
                    >
                      <p className="font-mono text-xs uppercase tracking-widest text-indigo-300/80">
                        {exp.start} — {exp.end}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-zinc-300 inline-flex items-center gap-1.5">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener"
                            className="hover:text-foreground inline-flex items-center gap-1.5"
                          >
                            {exp.company}
                            <ExternalLink className="size-3.5 opacity-60" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                      <p className="text-sm text-zinc-500 inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {exp.location}
                      </p>
                      <div
                        className={`mt-2 flex flex-wrap gap-1.5 ${
                          flip ? "" : "md:justify-end"
                        }`}
                      >
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="default">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: flip ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <Card className="p-6 glow-hover">
                        <ul className="space-y-3">
                          {exp.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                            >
                              <span
                                aria-hidden
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400"
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </AnimatedSection>
  );
}
