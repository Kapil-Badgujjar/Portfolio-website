"use client";

import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <AnimatedSection id="achievements" accent="emerald" accentSide="left" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Wins along the way"
          title="Achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="p-6 glow-hover h-full">
                <div className="flex items-start gap-4">
                  <div className="size-11 shrink-0 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-300/20 inline-flex items-center justify-center">
                    <Trophy className="size-5 text-amber-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {a.title}
                      </h3>
                      <span className="font-mono text-xs text-zinc-500">
                        {a.date}
                      </span>
                    </div>
                    <p className="text-sm text-indigo-300/80 mb-2">
                      {a.organization}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
