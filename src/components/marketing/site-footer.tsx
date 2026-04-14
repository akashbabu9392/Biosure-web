import Link from "next/link";
import { biosureLanding } from "@/constants/ui";
import { getBiosureLogoSvg } from "@/lib/get-biosure-logo-svg";

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

        <div className="border-t border-[color:var(--border)] pt-6">
          <div className="grid gap-3 text-xs text-[color:var(--muted)] md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="flex justify-center text-center md:justify-start md:text-left">
              <span>{biosureLanding.footer.copyright}</span>
            </div>

            <nav
              aria-label="Legal"
              className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1"
            >
              {biosureLanding.footer.legalLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center">
                  {index > 0 ? (
                    <span className="mx-1 text-[color:var(--border-bright)]" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center rounded-md px-2 py-2 text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline sm:min-h-0 sm:px-1"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>

            <div className="hidden md:block" aria-hidden />
          </div>
        </div>
      </div>
    </footer>
  );
}

