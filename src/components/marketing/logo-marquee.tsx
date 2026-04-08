export function LogoMarquee({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  const safeItems = items.filter(Boolean);
  const loopItems = safeItems.length ? [...safeItems, ...safeItems] : [];

  return (
    <div
      className={[
        "relative overflow-hidden",
        "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-16 before:bg-[linear-gradient(90deg,var(--bg2),transparent)]",
        "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-16 after:bg-[linear-gradient(270deg,var(--bg2),transparent)]",
        className,
      ].join(" ")}
      aria-label="Trusted by logos"
    >
      <div className="biosure-marquee flex w-max items-center gap-x-12 gap-y-4 py-1 will-change-transform motion-reduce:animate-none motion-reduce:translate-x-0">
        {loopItems.map((name, idx) => (
          <div
            key={`${name}-${idx}`}
            className="whitespace-nowrap font-[var(--font-serif)] text-[1.05rem] text-[color:var(--muted)]/85 transition-colors hover:text-[color:var(--text)]"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

