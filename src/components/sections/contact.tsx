"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { personal, socials } from "@/lib/data";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: personal.location,
    href: "https://maps.google.com/?q=Jhajjar+Haryana",
    icon: MapPin,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const name = (data.get("name") as string) || "";
      const email = (data.get("email") as string) || "";
      const message = (data.get("message") as string) || "";
      const body = `Hi Kapil,%0D%0A%0D%0A${encodeURIComponent(
        message
      )}%0D%0A%0D%0A— ${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )})`;
      window.location.href = `mailto:${personal.email}?subject=Portfolio%20contact%20from%20${encodeURIComponent(
        name
      )}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatedSection id="contact" accent="violet" accentSide="right">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get in touch"
          description="Working on something interesting, or have a role you think I'd be a fit for? Drop a line."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <Card className="p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-300/80 mb-4">
                Reach me at
              </p>
              <ul className="space-y-4">
                {contactLinks.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener"
                        className="flex items-start gap-4 group"
                      >
                        <div className="size-11 rounded-xl bg-white/[0.04] border border-white/10 inline-flex items-center justify-center group-hover:border-white/30 transition-colors">
                          <Icon className="size-4 text-indigo-300" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                            {c.label}
                          </p>
                          <p className="text-sm text-foreground group-hover:text-indigo-200 transition-colors">
                            {c.value}
                          </p>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <Card className="p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-300/80 mb-4">
                Or find me on
              </p>
              <div className="grid grid-cols-2 gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 hover:border-white/25 hover:bg-white/[0.06] transition-colors"
                    >
                      <Icon className="size-4 text-zinc-300" />
                      <div className="min-w-0">
                        <p className="text-xs text-zinc-500">{s.name}</p>
                        <p className="text-xs text-foreground truncate">
                          @{s.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="p-6 sm:p-8 h-full">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono uppercase tracking-widest text-zinc-500"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono uppercase tracking-widest text-zinc-500"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono uppercase tracking-widest text-zinc-500"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono uppercase tracking-widest text-zinc-500"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a bit about what you're working on…"
                    required
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={status === "sending"}
                  >
                    <Send className="size-4" />
                    {status === "sending" ? "Sending…" : "Send message"}
                  </Button>

                  {status === "sent" && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-emerald-300">
                      <CheckCircle2 className="size-4" /> Message sent
                    </span>
                  )}
                  {status === "error" && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-rose-300">
                      <AlertCircle className="size-4" /> Couldn&apos;t send —
                      try email instead
                    </span>
                  )}
                  {!endpoint && status === "idle" && (
                    <span className="text-xs text-zinc-500">
                      Opens your mail client
                    </span>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
