import { closingStatement } from "@/lib/content";
import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/Badge";

export function ClosingCTA() {
  return (
    <section className="bg-slate-deep">
      <Container className="py-28 md:py-40">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              className="mx-auto mb-10 h-24 w-24 text-sand md:h-28 md:w-28"
              cutout="var(--slate-deep)"
            />
            <Eyebrow tone="onDark">A Closing Thought</Eyebrow>
            <p className="serif-quote mt-8 text-3xl text-on-slate md:text-5xl">
              “{closingStatement}”
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contact" variant="onDark">
                Begin a Conversation
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
