type Variant = "default" | "featured" | "logo";

export type TestimonialData = {
  quote?: string;
  name?: string;
  role?: string;
  initials?: string;
  companyLabel?: string;
  logoText?: string;
  rating?: number;
};

function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  const stars = Array.from({ length: count }, (_, i) => i);
  return (
    <div className={["flex items-center gap-0.5", className].join(" ")}>
      {stars.map((i) => (
        <span key={i} className="text-[#f59e0b] text-[0.7rem] leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({
  variant,
  data,
  className = "",
}: {
  variant: Variant;
  data: TestimonialData;
  className?: string;
}) {
  const base =
    "group relative overflow-hidden rounded-3xl border border-[color:var(--border)] shadow-[0_10px_30px_rgba(16,24,40,0.08)] transition-shadow duration-200 hover:shadow-[0_18px_55px_rgba(16,24,40,0.14)]";

  if (variant === "featured") {
    return (
      <article
        className={[
          base,
          "border-transparent bg-[linear-gradient(180deg,#6d5efc_0%,#6c4ff6_45%,#6a3ff0_100%)] text-white",
          className,
        ].join(" ")}
      >
        <div className="p-7">
          <div className="flex items-center justify-between gap-4">
            {data.logoText ? (
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/85">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[.7rem] font-bold">
                  {data.logoText.slice(0, 1).toUpperCase()}
                </span>
                <span>{data.logoText}</span>
              </div>
            ) : (
              <span />
            )}
            <Stars className="opacity-90" />
          </div>

          {data.quote ? (
            <div className="mt-6 text-[1rem] leading-[1.8] text-white/95">
              {data.quote}
            </div>
          ) : null}

          {(data.name || data.role || data.initials) ? (
            <div className="mt-10 flex items-end justify-between gap-4">
              <div>
                {data.name ? (
                  <div className="text-sm font-semibold text-white">{data.name}</div>
                ) : null}
                {data.role ? (
                  <div className="mt-1 text-xs text-white/80">{data.role}</div>
                ) : null}
              </div>
              {data.initials ? (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-[.82rem] font-bold text-white">
                  {data.initials}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </article>
    );
  }

  if (variant === "logo") {
    return (
      <article
        className={[
          base,
          "bg-[var(--surface)]",
          className,
        ].join(" ")}
      >
        <div className="p-7">
          {data.logoText ? (
            <div className="text-lg font-semibold text-[color:var(--text)]">
              {data.logoText}
            </div>
          ) : null}
          {data.companyLabel ? (
            <div className="mt-2 text-sm text-[color:var(--muted)]">
              {data.companyLabel}
            </div>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article className={[base, "bg-[var(--surface)]", className].join(" ")}>
      <div className="p-7">
        <div className="flex items-center justify-between gap-4">
          {data.logoText ? (
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--muted)]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(124,58,237,0.10)] text-[.7rem] font-bold text-[#7c3aed]">
                {data.logoText.slice(0, 1).toUpperCase()}
              </span>
              <span>{data.logoText}</span>
            </div>
          ) : (
            <span />
          )}
          <Stars />
        </div>

        {data.companyLabel ? (
          <div className="mt-5 text-[.92rem] font-semibold text-[color:var(--text)]">
            {data.companyLabel}
          </div>
        ) : null}

        {data.quote ? (
          <div className="mt-3 text-sm leading-[1.7] text-[color:var(--muted)]">
            {data.quote}
          </div>
        ) : null}

        {(data.name || data.role || data.initials) ? (
          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              {data.name ? (
                <div className="text-xs font-semibold text-[color:var(--text)]">
                  {data.name}
                </div>
              ) : null}
              {data.role ? (
                <div className="mt-1 text-[0.7rem] text-[color:var(--muted)]">
                  {data.role}
                </div>
              ) : null}
            </div>
            {data.initials ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(124,58,237,0.10)] text-[.72rem] font-bold text-[#7c3aed]">
                {data.initials}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

