import Image from "next/image";

/**
 * Marketing photos with a very light brand tint so imagery stays clear and readable.
 */
export function LandingInfographicBlock({
  src,
  alt,
  caption,
  attribution,
  layout = "banner",
}: {
  src: string;
  alt: string;
  caption: string;
  attribution: string;
  /** `card` = tighter crop for ROI column; `banner` = wide section strips */
  layout?: "banner" | "card";
}) {
  const isBanner = layout === "banner";
  const containerClassName = isBanner
    ? "h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]"
    : "h-[240px] md:h-[260px]";

  return (
    <figure className="relative z-[2] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <div
        className={[
          "relative w-full min-w-0 overflow-hidden",
          containerClassName,
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          className={[
            "object-cover",
            // Slightly higher focal point tends to work better for lab bench shots
            isBanner ? "object-[center_35%]" : "object-center",
          ].join(" ")}
        />
        {/* Subtle brand hint only — keeps photos clearly visible */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#00c2a8]/[0.09] via-transparent to-[#0070f3]/[0.07]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] ring-1 ring-inset ring-[rgba(0,194,168,0.18)]"
          aria-hidden
        />
      </div>
      <figcaption className="relative z-[2] border-t border-[color:var(--border)] bg-[var(--surface)] px-4 py-3 text-center">
        <p className="text-[.78rem] leading-relaxed text-[color:var(--muted)]">{caption}</p>
        <p className="mt-2 text-[.65rem] text-[color:var(--muted)]/85">{attribution}</p>
      </figcaption>
    </figure>
  );
}
