import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container, Eyebrow, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/philosophy" },
  openGraph: {
    images: "/opengraph-image",
    title: "Our Philosophy | Chateau & Capital",
    description:
      "Capital alone does not build great companies. People do. Systems do. Culture does. The investment principles that guide every Chateau & Capital decision.",
    url: "/philosophy",
  },
  title: "Our Philosophy",
  description:
    "Capital alone does not build great companies. People do. Systems do. Culture does. The investment principles that guide every Chateau & Capital decision.",
};

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Philosophy"
        title="Every decision should compound."
        lede="Capital alone does not build great companies. People do. Systems do. Culture does. Execution does. Technology does. Patience does."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>How We Think</Eyebrow>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <p className="serif-quote text-2xl text-ink md:text-3xl">
                  We believe exceptional businesses are built through
                  disciplined leadership, intelligent capital allocation and
                  relentless operational excellence.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <p className="text-base leading-relaxed text-mist">
                    Every investment should become stronger every year. Every
                    business should become more valuable every year. This is
                    not a slogan; it is the test we apply to budgets, hires,
                    acquisitions and exits alike.
                  </p>
                  <p className="text-base leading-relaxed text-mist">
                    Time is our structural advantage. Because we are not
                    required to sell, we can make decisions that look
                    conservative this quarter and inevitable this decade.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Investment Principles"
              title="Thirteen commitments, held permanently"
              lede="Written down so they can be enforced, by our partners, our teams and the record itself."
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal
                key={principle.title}
                delay={0.03 * (i % 3)}
                className="bg-bg"
              >
                <div className="flex h-full flex-col p-8">
                  <p className="eyebrow text-mist">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display mt-4 text-xl text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {principle.body}
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
