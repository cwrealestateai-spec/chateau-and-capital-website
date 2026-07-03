import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Container, Wordmark } from "@/components/primitives";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-ink">
              <Wordmark stacked />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              An operating investment company and development finance platform
              building enduring businesses and financing transformative
              developments across Africa.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-accent">The Firm</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-graphite transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-accent">Headquarters</p>
            <p className="mt-5 text-sm leading-relaxed text-graphite">
              {site.location}
            </p>
            <p className="eyebrow mt-8 text-accent">Enquiries</p>
            <ul className="mt-5 space-y-3 text-sm text-graphite">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.careersEmail}`}
                  className="transition-colors duration-300 hover:text-ink"
                >
                  {site.careersEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Chateau &amp; Capital. All rights
            reserved.
          </p>
          <p className="eyebrow text-mist">
            Built for decades. Measured in generations.
          </p>
        </div>
      </Container>
    </footer>
  );
}
