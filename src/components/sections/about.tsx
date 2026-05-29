"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { education, personal } from "@/lib/data";

const stats = [
  { label: "Years building", value: "2+", icon: Briefcase },
  { label: "AWS cost saved", value: "20%", icon: Code2 },
  { label: "Schools served", value: "30+", icon: GraduationCap },
  { label: "Star Dev Award", value: "2025", icon: Award },
];

export function About() {
  return (
    <AnimatedSection id="about" accent="violet" accentSide="left">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="From scratch to scale"
          description="I'm a Software Engineer based in India, currently building cloud-native systems at Rancholabs (IIT Delhi). I care about clean architecture, fast feedback loops, and shipping things that move metrics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="space-y-5 text-zinc-300 text-base leading-relaxed">
            <p>
              I started out tinkering with code during my BCA and quickly fell
              in love with how a few well-placed lines could unlock entire
              workflows. Today I work on cloud-native architecture and backend
              automation — designing event-driven systems on AWS, writing
              provisioning pipelines that turn 24-hour setups into 30-minute
              ones, and shipping revenue-generating MVPs end-to-end.
            </p>
            <p>
              At <strong className="text-foreground">Rancholabs</strong> I lead
              development on a multi-tenant LMS that hosts 30+ schools, run a
              zero-downtime deploy pipeline on ECS Fargate, and most recently
              launched <strong className="text-foreground">Kirakits</strong>,
              an e-commerce MVP that processed 500+ orders in its first month.
            </p>
            <p>
              Outside of work I judge school hackathons, study system design,
              and obsess over keeping the AWS bill small.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Card className="p-4 glow-hover">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-white/[0.04] border border-white/10 inline-flex items-center justify-center">
                          <Icon className="size-4 text-indigo-300" />
                        </div>
                        <div>
                          <p className="font-display text-xl font-semibold text-foreground leading-none">
                            {s.value}
                          </p>
                          <p className="text-xs text-zinc-500 mt-1">
                            {s.label}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={personal.photoSecondary}
                  alt={personal.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 28rem"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Software Engineer
                  </p>
                  <p className="font-display text-2xl text-foreground">
                    {personal.name}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-300/80 mb-3">
                Education
              </p>
              <ul className="space-y-3">
                {education.map((e) => (
                  <li key={e.degree} className="flex flex-col">
                    <span className="font-display text-sm font-semibold text-foreground">
                      {e.degree}
                    </span>
                    <span className="text-xs text-zinc-400 mt-0.5">
                      {e.school} · {e.location}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">
                      {e.start} — {e.end}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
