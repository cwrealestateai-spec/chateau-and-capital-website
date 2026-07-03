import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container, Eyebrow, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Facade } from "@/components/Facade";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chateau & Capital is a private operating investment company and development finance platform headquartered in Lagos, Nigeria. Operators first. Investors second. Builders always.",
};

const pillars = [
  {
    title: "Purpose",
    body: "To build and own exceptional businesses that improve how Africa lives, invests, builds and creates wealth.",
  },
  {
    title: "Vision",
    body: "To become Africa's most respected operating investment company — recognised for building enduring businesses, financing transformative developments and creating institutional platforms that outlast generations.",
  },
  {
    title: "Mission",
    body: "To acquire, build, finance and scale businesses and real assets that solve meaningful problems while generating long-term value for investors, partners, employees and the communities we serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="Operators first. Investors second. Builders always."
        lede="Chateau & Capital is a private operating investment company and development finance platform headquartered in Lagos, Nigeria. We build businesses, acquire businesses, finance transformative developments and allocate capital for the long term."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>A Different Kind of Owner</Eyebrow>
            </Reveal>
            <div className="space-y-6 md:col-span-8">
              <Reveal>
                <p className="serif-quote text-2xl text-ink md:text-3xl">
                  Unlike traditional holding companies that passively own
                  assets, we actively partner with management teams to build
                  stronger businesses.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base leading-relaxed text-mist">
                  That partnership is practical, not rhetorical: improving
                  execution, installing systems, strengthening governance and
                  allocating capital where it creates the greatest long-term
                  returns. Every company we touch should be measurably stronger
                  every year it is in our care.
                </p>
                <p className="mt-6 text-base leading-relaxed text-mist">
                  Everything we do is guided by long-term thinking. We optimise
                  for decades, not quarters — which changes what we buy, how we
                  build, whom we hire and when we sell, which is rarely.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.07 * i} className="bg-bg">
                <div className="flex h-full flex-col p-8 md:p-10">
                  <p className="eyebrow text-accent">{pillar.title}</p>
                  <p className="mt-6 font-serif text-xl leading-relaxed text-ink">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <Facade className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-1/2 text-ink/[0.05]" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="One firm, five disciplines"
              lede="Operating companies, development finance, principal investments, real estate development and a shared operating platform — each discipline compounding the others."
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Operating Companies",
                body: "We own and build businesses with long-term competitive advantages. Every company retains its own identity while benefiting from shared leadership, capital, technology and institutional expertise.",
              },
              {
                title: "Development Finance",
                body: "Structured financing solutions for high-quality real estate developments — construction, bridge and mezzanine finance, joint ventures, preferred equity and advisory.",
              },
              {
                title: "Principal Investments",
                body: "Long-term investments into businesses where we possess conviction, operational expertise and the ability to create sustainable value.",
              },
              {
                title: "Real Estate Development",
                body: "Through strategic partnerships and direct investments we develop residential, commercial and mixed-use projects designed to improve urban environments.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i}>
                <div className="border-t border-line-strong pt-6">
                  <h3 className="display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
