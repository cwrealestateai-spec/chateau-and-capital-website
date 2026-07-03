import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import {
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { CapitalStack } from "@/components/CapitalStack";
import { financeCapabilities } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/development-finance" },
  openGraph: {
    images: "/opengraph-image",
    title: "Development Finance — Chateau & Capital",
    description:
      "Structured financing for high-quality real estate developments — development, construction, bridge and mezzanine finance, joint ventures, preferred equity and advisory.",
    url: "/development-finance",
  },
  title: "Development Finance",
  description:
    "Structured financing for high-quality real estate developments — development, construction, bridge and mezzanine finance, joint ventures, preferred equity and advisory.",
};

const process = [
  {
    step: "01",
    title: "Feasibility & Research",
    body: "Every engagement begins with evidence: demand studies, comparable analysis and an honest feasibility model. Most projects end here — by design.",
  },
  {
    step: "02",
    title: "Underwriting",
    body: "We reconstruct the project from first principles — land, title, cost, programme and exit — and stress each assumption until it breaks or holds.",
  },
  {
    step: "03",
    title: "Structuring",
    body: "The capital stack is engineered to the asset: senior debt sized to reality, mezzanine and preferred layers priced honestly, equity truly aligned.",
  },
  {
    step: "04",
    title: "Execution & Stewardship",
    body: "Capital is only the beginning. We monitor construction milestones, cost discipline and sales evidence through to completion and beyond.",
  },
];

export default function DevelopmentFinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Development Finance"
        title="Capital for projects that shape cities."
        lede="We provide structured financing solutions for high-quality real estate developments — working with experienced developers, institutional investors, landowners and family offices to unlock projects that create lasting value."
      />

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="The full structure, under one roof"
              lede="From first feasibility study to final tranche, every instrument a serious development requires."
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {financeCapabilities.map((group, i) => (
              <Reveal key={group.group} delay={0.06 * i} className="bg-bg">
                <div className="h-full p-8 md:p-10">
                  <p className="eyebrow text-accent">{group.group}</p>
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line pb-3 font-serif text-lg text-graphite"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-slate py-24 text-on-slate md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionHeading
                  tone="onDark"
                  eyebrow="How We Structure"
                  title="The capital stack, engineered to the asset"
                  lede="Leverage sized to the asset, never to ambition. Each layer priced honestly, documented cleanly and aligned from foundation to crown."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10">
                  <ButtonLink href="/contact" variant="onDark">
                    Discuss a Project
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col justify-center">
              <CapitalStack />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="Discipline, from feasibility to completion"
            />
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((phase, i) => (
              <Reveal key={phase.step} delay={0.06 * i}>
                <div className="border-t border-line-strong pt-6">
                  <p className="eyebrow text-accent">{phase.step}</p>
                  <h3 className="display mt-4 text-xl text-ink">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {phase.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow>Who We Work With</Eyebrow>
              <p className="serif-quote mt-8 text-2xl text-ink md:text-3xl">
                Experienced developers. Institutional investors. Landowners.
                Family offices. Partners who share our view that quality is the
                highest-returning decision a project can make.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
