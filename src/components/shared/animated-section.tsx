"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const ACCENT_COLORS = {
  indigo: "bg-indigo-600/12",
  violet: "bg-violet-600/12",
  fuchsia: "bg-fuchsia-600/12",
  cyan: "bg-cyan-500/10",
  emerald: "bg-emerald-500/10",
};

type AnimatedSectionProps = Omit<HTMLMotionProps<"section">, "children"> & {
  id: string;
  eager?: boolean;
  accent?: keyof typeof ACCENT_COLORS;
  accentSide?: "left" | "right";
  children?: ReactNode;
};

export function AnimatedSection({
  id,
  className,
  children,
  eager,
  accent,
  accentSide = "left",
  ...props
}: AnimatedSectionProps) {
  const animationProps = eager
    ? { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <motion.section
      id={id}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "relative isolate w-full overflow-hidden px-4 sm:px-6 lg:px-10 py-24 sm:py-32",
        className
      )}
      {...animationProps}
      {...props}
    >
      {accent && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-24 -z-10 h-[30rem] w-[30rem] rounded-full blur-[150px]",
            ACCENT_COLORS[accent],
            accentSide === "right" ? "right-[-6rem]" : "left-[-6rem]"
          )}
        />
      )}
      {children}
    </motion.section>
  );
}
