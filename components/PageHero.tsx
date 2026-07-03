import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line pb-16 pt-40 md:pb-24 md:pt-52">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              {lede}
            </p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
