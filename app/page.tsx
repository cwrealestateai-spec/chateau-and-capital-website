import type { Metadata } from "next";
import Link from "next/link";
import {
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Facade } from "@/components/Facade";
import { CapitalStack } from "@/components/CapitalStack";
import { PortfolioAccordion } from "@/components/PortfolioAccordion";
import { ClosingCTA } from "@/components/ClosingCTA";
import {
  capabilities,
  financeCapabilities,
  insights,
  portfolio,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden border-b border-line">
        <Facade className="pointer-events-none absolute bottom-0 right-0 h-[70%] w-full max-w-4xl text-ink/[0.07] md:w-2/3" />
        <Container className="relative pb-20 pt-44 md:pb-28">
          <Reveal>
            <Eyebrow>An Operating Investment Company · Lagos</Eyebrow>
            <h1 className="display mt-8 max-w-5xl text-5xl md:text-8xl">
              Building Enduring Businesses. Financing the Future.
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-mist">
              {site.description}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonLink href="/portfolio">Explore Our Portfolio</ButtonLink>
              <ButtonLink href="/philosophy" variant="outline">
                Our Investment Philosophy
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 02 — Who We Are */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>Who We Are</Eyebrow>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <p className="serif-quote text-3xl text-ink md:text-4xl">
                  We build businesses. We acquire businesses. We finance
                  transformative developments. We allocate capital where it
                  compounds for decades.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <p className="text-base leading-relaxed text-mist">
                    Unlike holding companies that passively own assets, Chateau
                    &amp; Capital actively partners with management teams to
                    build stronger businesses — improving execution, installing
                    systems, strengthening governance and allocating capital
                    where it creates the greatest long-term returns.
                  </p>
                  <p className="text-base leading-relaxed text-mist">
                    We are operators first. Investors second. Builders always.
                    Everything we do is guided by long-term thinking: we
                    optimise for decades, not quarters, and measure ourselves
                    by what endures.
                  </p>
                </div>
                <div className="mt-12">
                  <Link
                    href="/about"
                    className="eyebrow text-accent transition-colors duration-300 hover:text-ink"
                  >
                    About the Firm →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — Capabilities */}
      <section className="border-y border-line bg-surface py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Capabilities"
              title="Five disciplines. One standard."
              lede="Each capability strengthens the others — operating expertise informs our investing, and investment discipline sharpens how we operate."
            />
          </Reveal>
          <div className="mt-16 divide-y divide-line border-y border-line">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={0.05 * i}>
                <Link
                  href={cap.href}
                  className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:py-10"
                >
                  <span className="eyebrow text-mist md:col-span-1">
                    {cap.index}
                  </span>
                  <h3 className="display text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:col-span-4 md:text-3xl">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist md:col-span-6">
                    {cap.summary}
                  </p>
                  <span
                    aria-hidden
                    className="hidden text-right font-serif text-xl text-mist transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — Featured Portfolio */}
      <section className="py-24 md:py-36">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="The Portfolio"
                title="Companies built to endure"
                lede="Each company retains its own identity while drawing on the shared strength of the platform."
              />
              <ButtonLink href="/portfolio" variant="outline">
                All Companies
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal className="mt-16">
            <PortfolioAccordion companies={portfolio} />
          </Reveal>
        </Container>
      </section>

      {/* 05 — Development Finance */}
      <section className="border-y border-line bg-slate py-24 text-on-slate md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionHeading
                  tone="onDark"
                  eyebrow="Development Finance"
                  title="Capital, structured with conviction"
                  lede="We provide structured financing for high-quality real estate developments — working with experienced developers, institutional investors, landowners and family offices to unlock projects that shape cities."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-12 space-y-8">
                  {financeCapabilities.map((group) => (
                    <div key={group.group}>
                      <p className="eyebrow text-on-slate-mist">
                        {group.group}
                      </p>
                      <p className="mt-3 font-serif text-lg leading-relaxed text-on-slate">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <ButtonLink href="/development-finance" variant="onDark">
                    Explore Development Finance
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="eyebrow mb-8 text-center text-on-slate-mist">
                  The Capital Stack — from foundation to partnership
                </p>
              </Reveal>
              <CapitalStack />
            </div>
          </div>
        </Container>
      </section>

      {/* 06 — Investment Philosophy */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>Investment Philosophy</Eyebrow>
              <p className="serif-quote mt-8 text-3xl text-ink md:text-4xl">
                Capital alone does not build great companies. People do.
                Systems do. Culture does. Execution does. Patience does.
              </p>
              <p className="mt-8 text-base leading-relaxed text-mist">
                We believe exceptional businesses are built through disciplined
                leadership, intelligent capital allocation and relentless
                operational excellence. Every investment should become stronger
                every year. Every decision should compound.
              </p>
              <div className="mt-10">
                <ButtonLink href="/philosophy" variant="outline">
                  How We Think
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 07 — Insights */}
      <section className="border-t border-line bg-surface py-24 md:py-36">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Insights"
                title="How we see the decade ahead"
              />
              <ButtonLink href="/insights" variant="outline">
                All Insights
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {insights.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={0.06 * i} className="bg-bg">
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col justify-between p-8 md:p-10"
                >
                  <div>
                    <p className="eyebrow text-accent">{post.category}</p>
                    <h3 className="display mt-5 text-2xl text-ink transition-colors duration-300 group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed text-mist">
                      {post.excerpt}
                    </p>
                  </div>
                  <p className="eyebrow mt-10 text-mist">{post.readTime}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 08 — Closing Statement */}
      <ClosingCTA />
    </>
  );
}
