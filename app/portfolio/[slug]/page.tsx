import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { portfolio } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return portfolio.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = portfolio.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: company.name,
    description: company.summary,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
    images: "/opengraph-image",
      title: `${company.name} — Chateau & Capital`,
      description: company.summary,
      url: `/portfolio/${slug}`,
    },
  };
}

export default async function PortfolioCompanyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const company = portfolio.find((c) => c.slug === slug);
  if (!company) notFound();

  return (
    <>
      <section className="border-b border-line pb-16 pt-40 md:pb-24 md:pt-52">
        <Container>
          <Reveal>
            <Link
              href="/portfolio"
              className="eyebrow text-mist transition-colors duration-300 hover:text-ink"
            >
              ← The Portfolio
            </Link>
            <p className="eyebrow mt-10 text-accent">{company.discipline}</p>
            <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl">
              {company.name}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              {company.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>The Company</Eyebrow>
                <div className="mt-8 space-y-6">
                  {company.description.map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="text-base leading-relaxed text-graphite"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.08}>
                <Eyebrow>Services</Eyebrow>
                <ul className="mt-8">
                  {company.services.map((service) => (
                    <li
                      key={service}
                      className="border-b border-line py-3 font-serif text-lg text-graphite first:border-t"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
