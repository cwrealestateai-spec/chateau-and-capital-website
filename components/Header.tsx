"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav } from "@/lib/content";
import { Wordmark } from "@/components/primitives";

const primaryNav = nav.filter((item) =>
  ["/about", "/philosophy", "/portfolio", "/insights"].includes(item.href),
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled && !open
            ? "border-line bg-bg/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            aria-label="Chateau & Capital — Home"
            className={open ? "text-on-slate" : "text-ink"}
          >
            <Wordmark />
          </Link>

          <nav
            aria-label="Primary"
            className={`hidden items-center gap-8 lg:flex ${open ? "invisible" : ""}`}
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow transition-colors duration-300 ${
                  pathname.startsWith(item.href)
                    ? "text-ink"
                    : "text-mist hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className={`eyebrow hidden text-mist transition-colors duration-300 hover:text-ink md:block ${
                open ? "invisible" : ""
              }`}
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className={`eyebrow flex items-center gap-3 ${
                open ? "text-on-slate" : "text-ink"
              }`}
            >
              <span>{open ? "Close" : "Menu"}</span>
              <span aria-hidden className="flex w-6 flex-col gap-1.5">
                <span
                  className={`h-px bg-current transition-transform duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-slate-deep"
          >
            <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-between px-6 pb-12 pt-32 md:px-10">
              <nav aria-label="Full site">
                <ul className="flex flex-col divide-y divide-on-slate-mist/15">
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduce ? undefined : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline justify-between py-4"
                      >
                        <span className="display text-3xl text-on-slate transition-colors duration-300 group-hover:text-accent-soft md:text-4xl">
                          {item.label}
                        </span>
                        <span className="eyebrow text-on-slate-mist">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <p className="eyebrow mt-16 text-on-slate-mist">
                Lagos · Nigeria — Est. for generations
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
