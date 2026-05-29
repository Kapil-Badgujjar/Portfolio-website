import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors font-mono",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20",
        accent:
          "border-indigo-400/20 bg-indigo-400/10 text-indigo-200 hover:bg-indigo-400/20",
        outline: "border-white/15 bg-transparent text-zinc-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
