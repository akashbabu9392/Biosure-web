import type { ReactNode } from "react";
import Link from "next/link";
import { getBiosureLogoSvg } from "@/lib/get-biosure-logo-svg";
import { SiteFooter } from "@/components/marketing/site-footer";
import { BackToTop } from "@/components/legal/back-to-top";

export type LegalTocItem = { id: string; label: string };

export async function LegalPageLayout({
  title,
  effectiveDate,
  lastUpdated,
  subtitleLine,
  operatedByLine,
  toc,
  children,
}: {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  subtitleLine: string;
  operatedByLine: ReactNode;
  toc: readonly LegalTocItem[];
  children: ReactNode;
}) {
  const logoSvg = await getBiosureLogoSvg();

  return (
    <div id="legal-page-top" className="flex min-h-full flex-col">
      <header className="border-b border-[color:var(--border)] bg-[var(--bg2)]">
        <div className="mx-auto flex w-full max-w-[800px] flex-col gap-6 px-5 py-6 md:py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
            >
              <span aria-hidden>←</span>
              <span>Back to Home</span>
            </Link>
            <Link href="/" className="inline-flex shrink-0 items-center gap-3">
              <span
                aria-label="BioSure logo"
                role="img"
                className="biosure-logo relative block h-8 w-[128px] sm:h-9 sm:w-[144px]"
                dangerouslySetInnerHTML={{ __html: logoSvg }}
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-[var(--bg)] px-5 py-8 md:py-12">
        <article className="mx-auto w-full max-w-[800px]">
          <header className="mb-10 border-b border-[color:var(--border)] pb-10">
            <h1 className="font-[var(--font-serif)] text-3xl font-normal tracking-tight text-[color:var(--text)] md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base font-medium text-[color:var(--text)] md:text-lg">
              {subtitleLine}
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{operatedByLine}</p>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              <span className="font-medium text-[color:var(--text)]">
                Effective Date:
              </span>{" "}
              {effectiveDate}
              <span className="mx-2 text-[color:var(--border-bright)]" aria-hidden>
                |
              </span>
              <span className="font-medium text-[color:var(--text)]">
                Last Updated:
              </span>{" "}
              {lastUpdated}
            </p>
          </header>

          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg2)] p-5 md:p-6"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
              On this page
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[color:var(--text)] marker:text-[color:var(--muted)]">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[color:var(--accent)] underline-offset-2 transition hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-prose text-base leading-[1.75] text-[color:var(--text)] md:text-[1.0625rem]">
            {children}
          </div>
        </article>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
