export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* faint grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* slow drifting ambient orbs */}
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-indigo-700/15 blur-[150px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-fuchsia-700/12 blur-[160px] animate-blob [animation-delay:5s]" />
      <div className="absolute bottom-[-10rem] left-1/4 h-[34rem] w-[34rem] rounded-full bg-violet-700/12 blur-[150px] animate-blob [animation-delay:9s]" />

      {/* vignette to keep edges deep */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
