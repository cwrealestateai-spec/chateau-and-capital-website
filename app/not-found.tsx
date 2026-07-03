import { ButtonLink, Container, Eyebrow } from "@/components/primitives";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col justify-center border-b border-line">
      <Container>
        <Eyebrow>Page Not Found</Eyebrow>
        <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">
          This page has not been built. Yet.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
          The address you followed does not exist. Everything the firm has
          published is reachable from the pages below.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/portfolio" variant="outline">
            Explore the Portfolio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
