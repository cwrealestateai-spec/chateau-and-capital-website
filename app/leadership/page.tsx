import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container, Eyebrow, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/leadership" },
  openGraph: {
    images: "/opengraph-image",
    title: "Leadership — Chateau & Capital",
    description:
      "How Chateau & Capital is led and governed — stewardship over celebrity, systems over heroics, and a standard of conduct designed to outlast any individual.",
    url: "/leadership",
  },
  title: "Leadership",
  description:
    "How Chateau & Capital is led and governed — stewardship over celebrity, systems over heroics, and a standard of conduct designed to outlast any individual.",
};

const tenets = [
  {
    title: "Stewardship over celebrity",
    body: "The firm is designed so that no single person is the story. Decisions are made by process, recorded in writing and reviewed against the record.",
  },
  {
    title: "Governance as practice",
    body: "Boards that meet, minutes that bind, metrics that are owned. Governance here is not compliance theatre — it is how the firm actually runs.",
  },
  {
    title: "Operators in the room",
    body: "The people who allocate capital have run businesses. Investment judgment is grounded in operating scar tissue, not spreadsheets alone.",
  },
  {
    title: "Succession by design",
    body: "An institution built for generations plans its own succession from day one. Talent is developed deliberately, years before it is needed.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Institutions outlast individuals. We are built that way on purpose."
        lede="Chateau & Capital is led by operators and investors who hold themselves to the same standard they ask of portfolio management teams: candour, discipline and a record that speaks for itself."
      />

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Lead"
              title="Four tenets of leadership"
            />
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {tenets.map((tenet, i) => (
              <Reveal key={tenet.title} delay={0.06 * i}>
                <div className="border-t border-line-strong pt-6">
                  <p className="eyebrow text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="display mt-4 text-2xl text-ink">
                    {tenet.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {tenet.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>The Team</Eyebrow>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <p className="serif-quote text-2xl text-ink md:text-3xl">
                  We publish results, not personalities.
                </p>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist">
                  Detailed profiles of the firm&apos;s partners and senior
                  leadership are shared with counterparties in the course of an
                  engagement. If you are considering working with us — as an
                  investor, developer, founder or future colleague — we would
                  welcome the introduction.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
