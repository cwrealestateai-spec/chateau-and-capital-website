import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { PortfolioAccordion } from "@/components/PortfolioAccordion";
import { portfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The Chateau & Capital portfolio — companies built to endure, each retaining its own identity while drawing on shared institutional strength.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Companies built to endure."
        lede="We own businesses we intend to hold permanently. Each retains its own identity, leadership and culture while drawing on the shared capital, technology and institutional expertise of the platform."
      />

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <PortfolioAccordion companies={portfolio} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-20 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <Eyebrow>The Next Company</Eyebrow>
              </div>
              <p className="text-base leading-relaxed text-mist md:col-span-6">
                The portfolio is built to grow. We are always in conversation
                with founders, owners and management teams whose businesses
                deserve a permanent home — and whose ambitions outlast a fund
                cycle. If that describes yours, we would like to hear from you.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
