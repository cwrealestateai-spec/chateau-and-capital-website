import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = insights.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-line pb-16 pt-40 md:pb-20 md:pt-52">
        <Container>
          <Reveal>
            <Link
              href="/insights"
              className="eyebrow text-mist transition-colors duration-300 hover:text-ink"
            >
              ← All Insights
            </Link>
            <p className="eyebrow mt-10 text-accent">{post.category}</p>
            <h1 className="display mt-6 max-w-4xl text-4xl md:text-6xl">
              {post.title}
            </h1>
            <p className="eyebrow mt-8 text-mist">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readTime}
            </p>
          </Reveal>
        </Container>
      </section>

      <article className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <p className="serif-quote text-xl leading-relaxed text-ink md:text-2xl">
                {post.excerpt}
              </p>
              <div className="mt-12 space-y-8">
                {post.body.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="text-base leading-[1.9] text-graphite"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <Badge className="mx-auto mt-16 h-20 w-20 text-sand" />
            </Reveal>
          </div>
        </Container>
      </article>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <p className="eyebrow text-accent">Continue Reading</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/insights/${other.slug}`}
                className="group bg-bg p-8 md:p-10"
              >
                <p className="eyebrow text-mist">{other.category}</p>
                <h2 className="display mt-4 text-2xl text-ink transition-colors duration-300 group-hover:text-accent">
                  {other.title}
                </h2>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
