import Link from "next/link";
import { biosureLanding } from "@/constants/ui";
import { getBiosureLogoSvg } from "@/lib/get-biosure-logo-svg";

export async function SiteHeader() {
  const logoSvg = await getBiosureLogoSvg();

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-[color:var(--header-border)] bg-[color:var(--header-bg)]"
    >
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-between px-5">
        <Link href="/" className="flex items-center">
          <span
            aria-label="BioSure logo"
            role="img"
            className="biosure-logo relative block h-10 w-[160px] sm:h-11 sm:w-[180px]"
            dangerouslySetInnerHTML={{ __html: logoSvg }}
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {biosureLanding.nav.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-[rgba(255,255,255,0.05)] hover:text-[color:var(--text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#"
            className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-4 py-2 text-sm font-medium text-[color:var(--text)] transition hover:bg-[rgba(255,255,255,0.06)]"
          >
            {biosureLanding.nav.signInLabel}
          </Link>
          <Link
            href="#"
            className="rounded-xl bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[#061210] transition hover:opacity-90"
          >
            {biosureLanding.nav.primaryCtaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

