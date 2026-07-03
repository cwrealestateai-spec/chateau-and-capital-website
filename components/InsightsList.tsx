"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Insight } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/*
  Filterable insights index. Categories are derived from the articles
  themselves, so new categories appear automatically as essays are
  published.
*/
export function InsightsList({ insights }: { insights: Insight[] }) {
  const [active, setActive] = useState<string | null>(null);

  const categories = useMemo(
    () => [...new Set(insights.map((p) => p.category))],
    [insights],
  );
  const visible = active
    ? insights.filter((p) => p.category === active)
    : insights;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter insights by category"
        className="flex flex-wrap gap-x-2 gap-y-3"
      >
        {[null, ...categories].map((category) => {
          const selected = active === category;
          return (
            <button
              key={category ?? "all"}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={`eyebrow border px-4 py-2.5 transition-colors duration-300 ${
                selected
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-mist hover:border-line-strong hover:text-ink"
              }`}
            >
              {category ?? "All"}
            </button>
          );
        })}
      </div>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {visible.map((post, i) => (
          <Reveal key={post.slug} delay={Math.min(0.04 * i, 0.16)}>
            <Link
              href={`/insights/${post.slug}`}
              className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline"
            >
              <p className="eyebrow text-accent md:col-span-2">
                {post.category}
              </p>
              <div className="md:col-span-7">
                <h2 className="display text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">
                  {post.excerpt}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="eyebrow text-mist">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                  })}{" "}
                  · {post.readTime}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
