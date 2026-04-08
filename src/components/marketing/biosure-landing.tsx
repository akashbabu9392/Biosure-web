import { biosureLanding, type BiosureLandingVariant } from "@/constants/ui";
import { Reveal } from "@/components/animations/reveal";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { FeatureIcon, MarketingIcon, RoiIcon } from "@/components/marketing/feature-icons";
import { LogoMarquee } from "@/components/marketing/logo-marquee";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import Link from "next/link";
import Image from "next/image";

export function BiosureLanding({ variant }: { variant: BiosureLandingVariant }) {
  const showCompare = true;
  const showRoi = true;
  const showPricing = true;
  const themeClass = variant === "company" ? "biosure-theme-light" : "";

  return (
    <div className={themeClass}>
      <SiteHeader />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-16 text-center">
          {/* Radial glows */}
          <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[600px] w-[900px] translate-x-[-50%] rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,194,168,0.18)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute bottom-[-140px] right-[-140px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,112,243,0.1)_0%,transparent_65%)]" />

          <div className="relative z-10 w-full max-w-[1100px]">
            <Reveal delay={0.1}>
              <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-[rgba(0,194,168,0.25)] bg-[rgba(0,194,168,0.1)] px-4 py-2 text-[.78rem] font-medium text-[color:var(--accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] animate-[pulse_2s_ease-in-out_infinite]" />
                {biosureLanding.hero.badge}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h1 className="mt-8 font-[var(--font-serif)] text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] tracking-[-1.5px]">
                {biosureLanding.hero.titleBeforeEm} <br />
                <span className="italic text-[color:var(--accent)]">
                  {biosureLanding.hero.titleEm}
                </span>{" "}
                {biosureLanding.hero.titleAfter}
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mx-auto mt-6 max-w-[560px] text-[1.05rem] leading-[1.7] font-normal text-[color:var(--muted)]">
                {biosureLanding.hero.sub}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--accent)] px-6 py-3 text-[.95rem] font-semibold text-[#061210] shadow-[0_8px_30px_rgba(0,194,168,0.12)] transition hover:opacity-90"
                >
                  {biosureLanding.hero.primaryCta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.03)] px-6 py-3 text-[.95rem] font-medium text-[color:var(--text)] transition hover:bg-[rgba(255,255,255,0.07)]"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                  </svg>
                  {biosureLanding.hero.secondaryCta}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap justify-center gap-4 text-[.86rem] text-[color:var(--muted)]">
                {biosureLanding.hero.trustItems.map((t, idx) => (
                  <div key={t} className="inline-flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[rgba(0,194,168,0.15)] text-[.6rem] font-bold text-[color:var(--accent)]">
                      ✓
                    </span>
                    <span>{t}</span>
                    {idx < biosureLanding.hero.trustItems.length - 1 ? (
                      <span className="mx-2 text-[rgba(255,255,255,0.15)]">·</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-16">
              <Reveal delay={0.55} y={34}>
                <div className="relative mx-auto max-w-[1100px]">
                  <div className="relative rounded-2xl border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(0,194,168,0.35),rgba(0,112,243,0.2),transparent_60%)] p-[1px]">
                    <div className="rounded-[17px] bg-[var(--surface)] shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                      {/* Topbar */}
                      <div className="flex items-center gap-3 border-b border-[color:var(--border)] bg-[rgba(255,255,255,0.02)] px-5 py-3">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        <span className="ml-3 rounded-md bg-[rgba(255,255,255,0.05)] px-3 py-1 text-[.72rem] font-[var(--font-mono)] text-[color:var(--muted)]">
                          app.biosure.io/dashboard
                        </span>
                      </div>

                      <div className="w-full bg-[rgba(0,0,0,0.18)]">
                        <Image
                          src={biosureLanding.hero.dashboardPreview.src}
                          alt={biosureLanding.hero.dashboardPreview.alt}
                          width={1600}
                          height={736}
                          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 92vw, 1100px"
                          quality={100}
                          className="h-auto w-full object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="logos-section border-y border-[color:var(--border)] bg-[color:transparent] py-12">
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-[1100px] px-6 text-center">
              <div className="text-[.75rem] font-semibold uppercase tracking-[1px] text-[color:var(--muted)]">
                {biosureLanding.logos.label}
              </div>
              <div className="mt-8">
                <LogoMarquee items={biosureLanding.logos.items} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* FEATURES */}
        <section id="features" className="relative overflow-hidden">
          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <div className="premium-panel-bleed">
              <div className="premium-panel">
                <div className="premium-panel__surface">
                  <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-20">
                    <Reveal delay={0.05}>
                      <div className="inline-flex items-center gap-2 text-[color:var(--accent)] text-[.75rem] font-semibold uppercase tracking-[.8px]">
                        {biosureLanding.features.badge}
                      </div>
                      <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-1px] text-[color:var(--text)]">
                        {biosureLanding.features.title}
                      </h2>
                      <p className="mt-4 max-w-[560px] text-[1rem] leading-[1.7] text-[color:var(--muted)]">
                        {biosureLanding.features.sub}
                      </p>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-3 gap-4 lg:gap-5 max-md:grid-cols-1 md:grid-cols-2">
                      {biosureLanding.features.cards.map((card) => (
                        <Reveal key={card.title} delay={0.1} y={30}>
                          <div
                            className={[
                              "premium-card group relative overflow-hidden rounded-2xl p-7 hover:-translate-y-[3px]",
                              card.layout === "span2Tall" ? "md:col-span-2 md:min-h-[280px]" : "",
                            ].join(" ")}
                          >
                            <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-[linear-gradient(90deg,var(--accent),var(--accent2))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-xl border border-[rgba(0,194,168,0.2)] bg-[rgba(0,194,168,0.12)] text-[1.1rem]">
                              <FeatureIcon
                                id={card.iconId}
                                className="h-6 w-6 text-[color:var(--accent)]"
                              />
                            </div>
                            <div className="mb-2 font-[var(--font-serif)] text-[1.15rem] text-[color:var(--text)]">
                              {card.title}
                            </div>
                            <div className="text-[.85rem] leading-[1.65] text-[color:var(--muted)]">
                              {card.desc}
                            </div>
                            {card.layout === "span2Tall" ? (
                              <div className="mt-5">
                                <div className="flex h-[48px] items-end gap-1">
                                  {biosureLanding.features.miniBars.map((h, i) => (
                                    <div
                                      key={`${card.title}-bar-${i}`}
                                      className="mini-bar flex-1 rounded-[3px_3px_0_0] bg-[linear-gradient(180deg,var(--accent)_0%,rgba(0,194,168,0.3)_100%)] opacity-75"
                                      style={
                                        {
                                          height: `${h}%`,
                                          animationDelay: `${i * 0.05}s`,
                                          animation: "barGrow .8s ease both",
                                        } as React.CSSProperties
                                      }
                                    />
                                  ))}
                                </div>
                              </div>
                            ) : null}
                            <div className="mt-4 inline-flex rounded-full border border-[rgba(0,194,168,0.15)] bg-[rgba(0,194,168,0.08)] px-3 py-1 text-[.7rem] font-semibold text-[color:var(--accent)]">
                              {card.tag}
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="bg-[var(--bg2)] border-y border-[color:var(--border)] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <Reveal delay={0.05}>
              <div className="text-[color:var(--accent)] text-[.75rem] font-semibold uppercase tracking-[.8px] inline-flex items-center gap-2">
                {biosureLanding.workflow.badge}
              </div>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-1px]">
                {biosureLanding.workflow.title}
              </h2>
              <p className="mt-4 max-w-[560px] text-[1rem] leading-[1.7] text-[color:var(--muted)]">
                {biosureLanding.workflow.sub}
              </p>
            </Reveal>

            <div className="relative mt-14">
              {/* Connector line (desktop) */}
              <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[color:var(--border)] md:block" />

              <div className="grid gap-10 md:grid-cols-4">
                {biosureLanding.workflow.steps.map((s, idx) => (
                  <Reveal key={s.num} delay={idx * 0.04} y={24}>
                    <div className="relative flex flex-col items-center text-center">
                      <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-bright)] bg-[var(--surface)] font-[var(--font-mono)] text-[.8rem] font-bold text-[color:var(--accent)]">
                        {s.num}
                      </div>
                      <div className="mb-3 font-[var(--font-serif)] text-[1rem] text-[color:var(--text)]">
                        {s.title}
                      </div>
                      <div className="text-[.8rem] leading-[1.6] text-[color:var(--muted)]">
                        {s.desc}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARE */}
        {showCompare ? (
          <section id="compare" className="px-6 py-20">
            <div className="mx-auto max-w-[1100px]">
              <Reveal delay={0.05}>
                <div className="text-[color:var(--accent)] text-[.75rem] font-semibold uppercase tracking-[.8px] inline-flex items-center gap-2">
                  {biosureLanding.compare.badge}
                </div>
                <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-1px]">
                  {biosureLanding.compare.title}
                </h2>
                <p className="mt-4 max-w-[560px] text-[1rem] leading-[1.7] text-[color:var(--muted)]">
                  {biosureLanding.compare.sub}
                </p>
              </Reveal>

              <div className="mt-14 overflow-hidden rounded-2xl border border-[color:var(--border)]">
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-[rgba(255,255,255,0.03)] border-b border-[color:var(--border)]">
                  <div className="p-4 text-[.8rem] font-semibold text-[color:var(--muted)]">
                    {biosureLanding.compare.columns.feature}
                  </div>
                  <div className="p-4 text-center text-[.8rem] font-semibold text-[color:var(--accent)] bg-[rgba(0,194,168,0.06)] border-x border-[rgba(0,194,168,0.15)]">
                    {biosureLanding.compare.columns.biosure}
                  </div>
                  <div className="p-4 text-center text-[.8rem] font-semibold text-[color:var(--muted)]">
                    {biosureLanding.compare.columns.qbench}
                  </div>
                  <div className="p-4 text-center text-[.8rem] font-semibold text-[color:var(--muted)]">
                    {biosureLanding.compare.columns.legacy}
                  </div>
                </div>

                {biosureLanding.compare.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-[color:var(--border)] hover:bg-[rgba(255,255,255,0.02)]"
                  >
                    <div className="flex items-center justify-start p-4 text-[.82rem] text-[color:var(--text)] font-medium">
                      {row.feature}
                    </div>
                    {[
                      { value: row.biosure, type: "highlight" },
                      { value: row.qbench, type: "qbench" },
                      { value: row.legacy, type: "legacy" },
                    ].map((cell, idx) => {
                      const isBiosure = idx === 0;
                      return (
                        <div
                          key={`${row.feature}-${cell.type}`}
                          className={[
                            "flex items-center justify-center p-4 text-[.82rem] text-[color:var(--muted)]",
                            isBiosure ? "bg-[rgba(0,194,168,0.04)] border-x border-[rgba(0,194,168,0.1)]" : "",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              cell.value.type === "yes"
                                ? "text-[color:var(--accent)] text-[1rem] font-bold"
                                : cell.value.type === "partial"
                                  ? "text-[color:var(--yellow)] text-[.75rem] font-semibold"
                                  : cell.value.type === "highlight"
                                    ? "text-[color:var(--accent)] font-bold"
                                    : cell.value.type === "highlightRed"
                                      ? "text-[color:var(--red)] font-bold"
                                      : cell.value.type === "no"
                                        ? "text-[rgba(255,255,255,0.2)]"
                                        : "text-[color:var(--muted)]",
                            ].join(" ")}
                          >
                            {cell.value.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ROI */}
        {showRoi ? (
          <section id="roi" className="relative overflow-hidden">
            <div className="relative left-1/2 w-screen -translate-x-1/2">
              <div className="premium-panel-bleed">
                <div className="premium-panel">
                  <div className="premium-panel__surface">
                    <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-20">
                      <Reveal delay={0.05}>
                        <div className="inline-flex items-center gap-2 text-[color:var(--accent)] text-[.75rem] font-semibold uppercase tracking-[.8px]">
                          <MarketingIcon id={biosureLanding.roi.badge.iconId} className="h-4 w-4" />
                          {biosureLanding.roi.badge.label}
                        </div>
                        <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-1px] text-[color:var(--text)]">
                          {biosureLanding.roi.title}
                        </h2>
                        <p className="mt-4 max-w-[560px] text-[1rem] leading-[1.7] text-[color:var(--muted)]">
                          {biosureLanding.roi.sub}
                        </p>
                      </Reveal>

                      <div className="mt-14 grid gap-10 lg:grid-cols-2">
                        <div className="space-y-4">
                          <Reveal delay={0.1}>
                            <div className="premium-card overflow-hidden rounded-2xl">
                              <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[color:var(--border)] bg-[rgba(255,255,255,0.03)]">
                                {biosureLanding.roi.table.header.map((h, idx) => (
                                  <div
                                    key={h}
                                    className={[
                                      "p-3.5 text-center text-[.8rem] font-semibold text-[color:var(--muted)]",
                                      idx === 0 ? "text-left pl-5" : "",
                                    ].join(" ")}
                                  >
                                    {h}
                                  </div>
                                ))}
                              </div>

                              {biosureLanding.roi.table.rows.map((r) => (
                                <div
                                  key={r.label}
                                  className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[color:var(--border)] last:border-b-0 hover:bg-[rgba(255,255,255,0.015)]"
                                >
                                  <div className="p-4 pl-5 text-left text-[.8rem] text-[color:var(--muted)]">
                                    {r.label}
                                    {r.meta ? (
                                      <div className="mt-1 text-[.7rem] text-[rgba(255,255,255,0.30)]">
                                        {r.meta}
                                      </div>
                                    ) : null}
                                  </div>
                                  <div
                                    className={[
                                      "flex items-center justify-center p-4 text-[.8rem] text-[color:var(--muted)]",
                                      r.manualType === "manual" ? "text-[color:var(--red)]" : "",
                                      r.manualType === "boldManual"
                                        ? "text-[color:var(--text)] font-bold"
                                        : "",
                                    ].join(" ")}
                                  >
                                    {r.manual}
                                  </div>
                                  <div
                                    className={[
                                      "flex items-center justify-center p-4 text-[.8rem]",
                                      r.biosureType === "coreqc" ? "text-[color:var(--accent)]" : "",
                                      r.biosureType === "boldCoreqc"
                                        ? "text-[color:var(--accent)] font-bold"
                                        : "",
                                    ].join(" ")}
                                  >
                                    {r.biosure}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-2 text-[.7rem] text-[rgba(255,255,255,0.25)]">
                              {biosureLanding.roi.table.footnote}
                            </div>
                          </Reveal>
                        </div>

                        <div className="space-y-6">
                          <Reveal delay={0.15}>
                            <div className="premium-card rounded-2xl p-6">
                              <div className="text-[3rem] font-[var(--font-serif)] leading-none text-[color:var(--accent)]">
                                {biosureLanding.roi.callout.number}
                              </div>
                              <div className="mt-1 text-[.85rem] leading-[1.6] text-[color:var(--muted)]">
                                <strong className="block text-[color:var(--text)]">
                                  {biosureLanding.roi.callout.titleStrong}
                                </strong>
                                {biosureLanding.roi.callout.description}
                              </div>
                            </div>
                          </Reveal>

                          <div className="space-y-4">
                            {biosureLanding.roi.bullets.map((b, idx) => (
                              <Reveal key={b.title} delay={idx * 0.06 + 0.1} y={16}>
                                <div className="premium-card rounded-2xl p-5">
                                  <div className="flex items-start gap-4">
                                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[rgba(0,194,168,0.22)] bg-[rgba(0,194,168,0.10)] text-[.9rem]">
                                      <RoiIcon
                                        id={b.iconId}
                                        className="h-4.5 w-4.5 text-[color:var(--accent)]"
                                      />
                                    </div>
                                    <div>
                                      <div className="mb-1 text-[.85rem] font-semibold text-[color:var(--text)]">
                                        {b.title}
                                      </div>
                                      <div className="text-[.78rem] leading-[1.6] text-[color:var(--muted)]">
                                        {b.desc}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Reveal>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* PRICING */}
        {showPricing ? (
          <section id="pricing" className="px-6 py-20">
            <div className="mx-auto max-w-[1100px]">
              <Reveal delay={0.05}>
                <div className="mx-auto max-w-[600px] text-center">
                  <div className="text-[color:var(--accent)] text-[.75rem] font-semibold uppercase tracking-[.8px] inline-flex items-center gap-2">
                    <MarketingIcon
                      id={biosureLanding.pricing.badge.iconId}
                      className="h-4 w-4"
                    />
                    {biosureLanding.pricing.badge.label}
                  </div>
                  <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-1px]">
                    {biosureLanding.pricing.titleBefore} <br />
                    {biosureLanding.pricing.titleAfter}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-[1.7] text-[color:var(--muted)]">
                    {biosureLanding.pricing.sub}
                  </p>
                </div>
              </Reveal>

              <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {biosureLanding.pricing.cards.map((card) => (
                  <Reveal key={card.name} delay={0.1} y={18}>
                    <div
                      className={[
                        "relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-7 transition hover:border-[var(--border-bright)] hover:-translate-y-[4px]",
                        card.emphasis === "featured"
                          ? "border-[rgba(0,194,168,0.35)] bg-[linear-gradient(145deg,rgba(0,194,168,0.05),var(--surface))]"
                          : "",
                      ].join(" ")}
                    >
                      {card.emphasis === "featured" ? (
                        <div className="absolute left-1/2 top-[-12px] -translate-x-1/2 rounded-full bg-[color:var(--accent)] px-4 py-1 text-[.68rem] font-bold">
                          Most Popular
                        </div>
                      ) : null}

                      <div className="text-[.8rem] font-semibold uppercase tracking-[.6px] text-[color:var(--muted)]">
                        {card.name}
                      </div>
                      <div className="mt-3 font-[var(--font-serif)] text-[2.8rem] leading-none text-[color:var(--text)]">
                        {card.amount === "Custom" ? card.amount : `${card.amount}`}
                      </div>
                      <div className="mt-2 text-[.75rem] text-[color:var(--muted)]">
                        {card.period}
                      </div>
                      <div className="mb-5 border-b border-[color:var(--border)] pb-5 text-[.8rem] text-[color:var(--muted)] leading-[1.6]">
                        {card.desc}
                      </div>
                      <ul className="mb-6 flex flex-col gap-3">
                        {card.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-[.8rem] leading-[1.4] text-[color:var(--muted)]">
                            <span className="mt-[.05rem] inline-flex flex-shrink-0 items-center justify-center text-[color:var(--accent)] font-extrabold">
                              ✓
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className={[
                          "w-full rounded-xl px-4 py-3 text-[.85rem] font-semibold transition",
                          card.emphasis === "featured"
                            ? "bg-[color:var(--accent)] text-[#061210] hover:opacity-90"
                            : "border border-[color:var(--border-bright)] bg-transparent text-[color:var(--text)] hover:bg-[rgba(255,255,255,0.06)]",
                        ].join(" ")}
                      >
                        {card.cta}
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-7 text-center text-[.8rem] text-[color:var(--muted)]">
                <span className="inline-flex items-center justify-center align-middle text-[color:var(--accent)]">
                  <MarketingIcon
                    id={biosureLanding.pricing.earlyAdopterOffer.iconId}
                    className="mr-2 h-4 w-4"
                  />
                </span>
                <strong className="text-[color:var(--text)]">
                  {biosureLanding.pricing.earlyAdopterOffer.label}:
                </strong>{" "}
                {biosureLanding.pricing.earlyAdopterOffer.message}
              </div>
            </div>
          </section>
        ) : null}

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="bg-[var(--bg2)] border-y border-[color:var(--border)] px-6 py-24"
        >
          <div className="mx-auto max-w-[1100px]">
            <Reveal delay={0.05}>
              <div className="mx-auto max-w-[600px] text-center">
                <div className="mx-auto inline-flex items-center rounded-full bg-[rgba(0,194,168,0.12)] px-3 py-1 text-[.7rem] font-semibold text-[color:var(--accent)]">
                  {biosureLanding.testimonials.badge.label}
                </div>
                <h2 className="mt-5 font-[var(--font-serif)] text-[clamp(2.2rem,4.4vw,3.3rem)] leading-[1.12] tracking-[-1px] text-[color:var(--text)]">
                  {biosureLanding.testimonials.title.split(biosureLanding.testimonials.titleAccent)[0]}
                  <span className="text-[color:var(--accent)]">
                    {biosureLanding.testimonials.titleAccent}
                  </span>
                  {biosureLanding.testimonials.title.split(biosureLanding.testimonials.titleAccent)[1]}
                </h2>
                <p className="mt-4 text-[.95rem] leading-[1.7] text-[color:var(--muted)]">
                  {biosureLanding.testimonials.sub}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {biosureLanding.testimonials.layout.cards
                .slice(0, biosureLanding.testimonials.layout.maxCards)
                .map((card, idx) => {
                const t =
                  "testimonialIndex" in card
                    ? biosureLanding.testimonials.items[card.testimonialIndex]
                    : undefined;

                const companyName =
                  t?.role?.includes("·") ? t.role.split("·")[1]?.trim() : undefined;

                const isFeatured = card.type === "featured";

                return (
                  <Reveal key={`${card.type}-${idx}`} delay={0.08 + idx * 0.03} y={0}>
                    <div
                      className={isFeatured ? "lg:row-span-2" : ""}
                      style={isFeatured ? { minHeight: 420 } : undefined}
                    >
                      <TestimonialCard
                        variant={isFeatured ? "featured" : "default"}
                        className={isFeatured ? "h-full" : ""}
                        data={{
                          logoText: companyName ?? "",
                          companyLabel: companyName ?? "",
                          quote: t?.quote,
                          initials: t?.initials,
                          name: t?.name,
                          role: t?.role,
                        }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-white px-6 pb-24 pt-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal delay={0.08} y={18}>
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg2)] shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_20%_120%,rgba(0,194,168,0.18)_0%,transparent_60%),radial-gradient(700px_320px_at_85%_10%,rgba(0,112,243,0.12)_0%,transparent_62%)]" />
                <div className="pointer-events-none absolute -right-20 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,194,168,0.55)_0%,rgba(0,194,168,0.18)_35%,transparent_70%)] blur-[2px]" />
                <div className="relative grid gap-10 p-8 sm:p-10 md:grid-cols-[1.35fr_0.65fr] md:items-center">
                  <div className="text-center md:text-left">
                    <h2 className="font-[var(--font-serif)] text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.08] tracking-[-1px] text-[color:var(--text)]">
                      {biosureLanding.cta.titleBefore} <br />
                      <em className="italic text-[color:var(--accent)]">{biosureLanding.cta.titleEm}</em>
                    </h2>
                    <p className="mt-4 max-w-[520px] text-[.95rem] leading-[1.7] text-[color:var(--muted)] md:max-w-none">
                      {biosureLanding.cta.sub}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--accent)] px-6 py-3 text-[.95rem] font-semibold text-[#061210] shadow-[0_10px_30px_rgba(0,194,168,0.18)] transition hover:opacity-90"
                      >
                        {biosureLanding.cta.primaryCta}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </Link>

                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-xl border border-[color:var(--border-bright)] bg-[rgba(255,255,255,0.04)] px-6 py-3 text-[.95rem] font-medium text-[color:var(--text)] transition hover:bg-[rgba(255,255,255,0.08)]"
                      >
                        {biosureLanding.cta.secondaryCta}
                      </Link>
                    </div>

                    <div className="mt-6 text-center text-[.78rem] text-[color:var(--muted)] md:text-left">
                      {biosureLanding.cta.footnote}
                    </div>
                  </div>

                  <div className="relative hidden md:block">
                    <div className="pointer-events-none absolute right-2 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-[999px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.15)_35%,transparent_72%)] opacity-40 blur-[1px]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

