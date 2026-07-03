import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { InsightsList } from "@/components/InsightsList";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/insights" },
  openGraph: {
    images: "/opengraph-image",
    title: "Insights — Chateau & Capital",
    description:
      "Research and perspective from Chateau & Capital on real estate, capital markets, urban development, artificial intelligence, leadership and execution.",
    url: "/insights",
  },
  title: "Insights",
  description:
    "Research and perspective from Chateau & Capital on real estate, capital markets, urban development, artificial intelligence, leadership and execution.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking, published."
        lede="Research and perspective from inside the firm — on the markets we invest in, the cities we help build and the disciplines that make businesses endure."
      />

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <InsightsList insights={insights} />
          </Reveal>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
