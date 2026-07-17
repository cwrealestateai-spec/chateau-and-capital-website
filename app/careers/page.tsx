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
import { careersDisciplines, site } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  openGraph: {
    images: "/opengraph-image",
    title: "Careers | Chateau & Capital",
    description:
      "Build a career measured in decades. Chateau & Capital hires operators, investors, engineers and governance professionals who want their work to compound.",
    url: "/careers",
  },
  title: "Careers",
  description:
    "Build a career measured in decades. Chateau & Capital hires operators, investors, engineers and governance professionals who want their work to compound.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the best work of your life. Then keep it."
        lede="Most careers are a sequence of employers. Ours are built differently: people who join Chateau & Capital build institutions they can point to for the rest of their lives, and stay to see the compounding."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Eyebrow>What We Offer</Eyebrow>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <p className="serif-quote text-2xl text-ink md:text-3xl">
                  Responsibility earlier than is comfortable. Standards higher
                  than is common. A horizon long enough for both to matter.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist">
                  We are a small firm by headcount and an ambitious one by any
                  other measure. People here write clearly, own their numbers,
                  and see decisions through to their consequences. In return
                  they get the rarest thing in a career: work that compounds.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where We Hire"
              title="Five disciplines, hired ahead of need"
              lede="We recruit continuously rather than reactively. If your work belongs in one of these disciplines, we want to know about you before a vacancy exists."
            />
          </Reveal>
          <div className="mt-16 divide-y divide-line border-y border-line">
            {careersDisciplines.map((discipline, i) => (
              <Reveal key={discipline.title} delay={0.04 * i}>
                <div className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                  <p className="eyebrow text-mist md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display text-2xl text-ink md:col-span-4">
                    {discipline.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist md:col-span-7">
                    {discipline.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-16">
              <ButtonLink href={`mailto:${site.careersEmail}`}>
                Introduce Yourself
              </ButtonLink>
              <p className="mt-6 text-sm text-mist">
                Send a note and a record of your work to {site.careersEmail}.
                We read everything, and we reply.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
