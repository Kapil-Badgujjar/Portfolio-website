import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground placeholder:text-zinc-500 transition-colors focus-visible:outline-none focus-visible:border-white/30 focus-visible:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-zinc-500 transition-colors focus-visible:outline-none focus-visible:border-white/30 focus-visible:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Input, Textarea };
