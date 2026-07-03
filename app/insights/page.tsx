import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { insightCategories, insights } from "@/lib/content";

export const metadata: Metadata = {
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
      >
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {insightCategories.map((category) => (
            <span key={category} className="eyebrow text-mist">
              {category}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="py-24 md:py-32">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(0.05 * i, 0.2)}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline"
                >
                  <p className="eyebrow text-accent md:col-span-2">
                    {post.category}
                  </p>
                  <div className="md:col-span-7">
                    <h2 className="display text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <p className="eyebrow text-mist">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                      })}{" "}
                      · {post.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
