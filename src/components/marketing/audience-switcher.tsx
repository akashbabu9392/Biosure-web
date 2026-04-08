"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { biosureLanding, type BiosureLandingVariant } from "@/constants/ui";
import { routes } from "@/constants/routes";

export function AudienceSwitcher({
  activeVariant,
}: {
  activeVariant: BiosureLandingVariant;
}) {
  const options = biosureLanding.multi.options;

  if (options.length <= 1) return null;
  const activeIndex = Math.max(
    0,
    options.findIndex((o) => o.id === activeVariant),
  );

  return (
    <div className="mx-auto max-w-[1100px] px-6 pt-6">
      <div className="mb-3 text-center text-[.75rem] font-semibold uppercase tracking-[.8px] text-[color:var(--muted)]">
        {biosureLanding.multi.switcherLabel}
      </div>

      <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-between gap-2 rounded-2xl border border-[color:var(--border)] bg-[rgba(255,255,255,0.02)] p-2">
        <motion.div
          className="absolute left-2 top-2 bottom-2 rounded-xl border border-[rgba(0,194,168,0.25)] bg-[rgba(0,194,168,0.12)]"
          animate={{ x: `calc(${activeIndex} * (100% - 16px) / ${options.length})` }}
          transition={{ type: "spring", stiffness: 520, damping: 40 }}
          style={{ width: `calc((100% - 16px) / ${options.length})` }}
        />

        {options.map((o) => {
          const href =
            o.id === "labs"
              ? routes.marketing.labs
              : routes.marketing.company;
          const isActive = o.id === activeVariant;
          return (
            <Link
              key={o.id}
              href={href}
              className={[
                "relative z-10 flex flex-1 items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold transition",
                isActive ? "text-[color:var(--accent)]" : "text-[color:var(--muted)] hover:text-[color:var(--text)]",
              ].join(" ")}
            >
              {o.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

