"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function pathMatchesLanding(pathname: string | null, logoBasePath: string) {
  if (!pathname) return false;
  if (logoBasePath === "/") return pathname === "/";
  return pathname === logoBasePath;
}

export function SiteLogoLink({
  logoBasePath,
  sectionId,
  className,
  children,
}: {
  logoBasePath: string;
  sectionId: string;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const href = `${logoBasePath}#${sectionId}`;

  return (
    <Link
      href={href}
      className={className}
      scroll={false}
      onClick={(e) => {
        if (!pathMatchesLanding(pathname, logoBasePath)) return;
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.replaceState(null, "", logoBasePath);
      }}
    >
      {children}
    </Link>
  );
}
