"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { concepts, skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <AnimatedSection id="skills" accent="fuchsia" accentSide="left">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Stack"
          description="A working set of languages, frameworks, and infra I reach for daily."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className={group.wide ? "md:col-span-2" : undefined}
            >
              <Card className="p-6 h-full glow-hover">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.label}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    {group.items.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 transition-all hover:border-white/25 hover:bg-white/[0.06]"
                      >
                        <Icon
                          className="size-4 shrink-0 transition-transform group-hover:scale-110"
                          style={{ color: item.color }}
                        />
                        <span className="text-sm text-zinc-200">
                          {item.name}
                        </span>
                        {item.learning && (
                          <span className="ml-0.5 rounded-full border border-amber-300/25 bg-amber-300/10 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-amber-200/90">
                            learning
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Architecture & Concepts
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                fundamentals
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {concepts.map((c) => (
                <Badge key={c} variant="accent">
                  {c}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
