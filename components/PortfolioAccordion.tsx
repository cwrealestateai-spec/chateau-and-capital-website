"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PortfolioCompany } from "@/lib/content";

/*
  Expandable portfolio cards. Built to take any number of companies;
  the grid and interaction never need redesign as the portfolio grows.
*/
export function PortfolioAccordion({
  companies,
  headingLevel = "h3",
}: {
  companies: PortfolioCompany[];
  /* h2 when the accordion sits directly under the page h1 */
  headingLevel?: "h2" | "h3";
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const Heading = headingLevel;

  return (
    <div className="divide-y divide-line border-y border-line">
      {companies.map((company, i) => {
        const open = openSlug === company.slug;
        return (
          <article key={company.slug}>
            <button
              type="button"
              onClick={() => setOpenSlug(open ? null : company.slug)}
              aria-expanded={open}
              className="group flex w-full items-baseline justify-between gap-6 py-8 text-left md:py-10"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="eyebrow text-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <Heading className="display text-3xl text-ink transition-colors duration-300 group-hover:text-accent md:text-4xl">
                    {company.name}
                  </Heading>
                  <p className="eyebrow mt-3 text-mist">
                    {company.discipline}
                  </p>
                </div>
              </div>
              <span
                aria-hidden
                className={`font-serif text-2xl text-mist transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-10 md:grid-cols-12 md:pl-[4.5rem]">
                    <p className="text-base leading-relaxed text-graphite md:col-span-6">
                      {company.summary}
                    </p>
                    <div className="md:col-span-4">
                      <ul className="space-y-2">
                        {company.services.map((service) => (
                          <li
                            key={service}
                            className="border-b border-line pb-2 text-sm text-mist"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2">
                      <Link
                        href={`/portfolio/${company.slug}`}
                        className="eyebrow text-accent transition-colors duration-300 hover:text-ink"
                      >
                        View Company →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
