import Link from "next/link";
import { biosureLanding } from "@/constants/ui";
import { getBiosureLogoSvg } from "@/lib/get-biosure-logo-svg";

function SocialIcon({ id }: { id: string }) {
  const baseProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-4 w-4",
  };

  if (id === "x") {
    return (
      <svg {...baseProps}>
        <path d="M4 4l16 16" />
        <path d="M20 4L4 20" />
      </svg>
    );
  }

  if (id === "linkedin") {
    return (
      <svg {...baseProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 4a2 2 0 1 0 0 .01" />
      </svg>
    );
  }

  // github
  return (
    <svg {...baseProps}>
      <path d="M9 19c-4 1.5-4-2.5-6-3" />
      <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.5-.3 5-1.2 5-5.5 0-1.2-.4-2.2-1.1-3.1.1-.3.5-1.6-.1-3.3 0 0-1-.3-3.3 1.1a11.4 11.4 0 0 0-6 0C6.7 2.7 5.7 3 5.7 3c-.6 1.7-.2 3-.1 3.3C4.9 7.2 4.5 8.2 4.5 9.4c0 4.3 2.5 5.2 5 5.5-.4.4-.6.9-.6 1.8V22" />
    </svg>
  );
}

export async function SiteFooter() {
  const logoSvg = await getBiosureLogoSvg();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[var(--bg2)] px-5 py-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.2fr_2.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                aria-label="BioSure logo"
                role="img"
                className="biosure-logo relative block h-10 w-[160px] sm:h-11 sm:w-[180px]"
                dangerouslySetInnerHTML={{ __html: logoSvg }}
              />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {biosureLanding.footer.columns.map((col) => (
              <div key={col.heading}>
                <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
                  {col.heading}
                </div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("#") ? (
                        <a
                          href={l.href}
                          className="text-sm text-[color:var(--text)]/70 transition hover:text-[color:var(--text)]"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-sm text-[color:var(--text)]/70 transition hover:text-[color:var(--text)]"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[color:var(--border)] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-[color:var(--muted)]">
            {biosureLanding.footer.copyright}
          </div>

          <div className="flex items-center gap-3">
            {biosureLanding.footer.social.items.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--border-bright)] hover:text-[color:var(--text)]"
              >
                <SocialIcon id={s.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

