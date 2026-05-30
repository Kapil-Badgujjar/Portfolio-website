export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* faint grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* slow drifting ambient orbs — colors follow the active theme */}
      <div
        className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full blur-[150px] animate-blob opacity-[0.15]"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-[160px] animate-blob opacity-[0.12] [animation-delay:5s]"
        style={{ backgroundColor: "var(--color-accent-3)" }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/4 h-[34rem] w-[34rem] rounded-full blur-[150px] animate-blob opacity-[0.12] [animation-delay:9s]"
        style={{ backgroundColor: "var(--color-accent-2)" }}
      />

      {/* vignette to keep edges deep */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
