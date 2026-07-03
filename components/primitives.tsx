import Link from "next/link";
import type { ReactNode } from "react";
import { ColumnMark } from "@/components/ColumnMark";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "onDark";
}) {
  return (
    <p
      className={`eyebrow ${
        tone === "onDark" ? "text-on-slate-mist" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "default",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "default" | "onDark";
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`display mt-5 text-4xl md:text-5xl ${
          tone === "onDark" ? "text-on-slate" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            tone === "onDark" ? "text-on-slate-mist" : "text-mist"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

const buttonBase =
  "font-caps inline-flex items-center gap-3 border px-7 py-3.5 text-[0.6875rem] uppercase tracking-[0.22em] transition-colors duration-300";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "onDark";
}) {
  const styles = {
    solid:
      "border-ink bg-ink text-bg hover:bg-transparent hover:text-ink",
    outline:
      "border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-bg",
    onDark:
      "border-on-slate-mist/60 text-on-slate hover:border-on-slate hover:bg-on-slate hover:text-slate-deep",
  } as const;
  return (
    <Link href={href} className={`${buttonBase} ${styles[variant]}`}>
      {children}
      <span aria-hidden className="text-[0.8em]">
        →
      </span>
    </Link>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}

/*
  Official lockup: Ionic column-capital mark above/beside the
  Copperplate wordmark. `stacked` mirrors the primary vertical logo;
  the default follows the secondary horizontal layout.
*/
export function Wordmark({ stacked = false }: { stacked?: boolean }) {
  if (stacked) {
    return (
      <span className="inline-flex flex-col items-center gap-3">
        <ColumnMark className="h-9 w-auto" />
        <span className="font-caps text-sm uppercase tracking-[0.3em]">
          Ch&acirc;teau &amp; Capital
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap">
      <ColumnMark className="h-7 w-auto md:h-8" />
      <span className="font-caps text-xs uppercase tracking-[0.28em] md:text-sm">
        Ch&acirc;teau &amp; Capital
      </span>
    </span>
  );
}
