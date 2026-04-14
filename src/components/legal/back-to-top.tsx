"use client";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById("legal-page-top")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      className="fixed bottom-5 right-5 z-[1001] inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 text-xs font-medium text-[color:var(--muted)] shadow-lg transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
    >
      Top
    </button>
  );
}
