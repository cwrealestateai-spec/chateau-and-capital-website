import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { platformCapabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Operating Platform",
  description:
    "Every Chateau & Capital portfolio company draws on shared institutional capabilities — leadership, governance, technology, artificial intelligence, brand, finance and execution frameworks.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Operating Platform"
        title="Institutional strength, shared by every company."
        lede="Every portfolio company retains its own identity — and draws on capabilities no standalone business its size could build alone. The platform is how one company's lesson becomes every company's advantage."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="space-y-20">
            {platformCapabilities.map((group, gi) => (
              <Reveal key={group.group} delay={0.04 * gi}>
                <div className="grid gap-8 border-t border-line-strong pt-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <p className="eyebrow text-mist">
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h2 className="display mt-4 text-3xl text-ink">
                      {group.group}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-mist">
                      {group.note}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="bg-bg px-6 py-5 font-serif text-lg text-graphite"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-slate py-24 text-on-slate md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              tone="onDark"
              eyebrow="Why It Matters"
              title="Scale without sameness"
              lede="Central platforms usually flatten the companies they serve. Ours is built to do the opposite: each business keeps its own brand, leadership and culture, while inheriting the systems, capital discipline and intelligence of an institution many times its size."
            />
          </Reveal>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
