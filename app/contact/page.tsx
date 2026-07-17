import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  openGraph: {
    images: "/opengraph-image",
    title: "Contact | Chateau & Capital",
    description:
      "Begin a conversation with Chateau & Capital: development finance enquiries, investment partnerships, portfolio company matters and careers.",
    url: "/contact",
  },
  title: "Contact",
  description:
    "Begin a conversation with Chateau & Capital: development finance enquiries, investment partnerships, portfolio company matters and careers.",
};

const channels = [
  {
    title: "General & Investment Enquiries",
    email: site.email,
    note: "Partnerships, principal investments and businesses seeking a permanent home.",
  },
  {
    title: "Development Finance",
    email: site.email,
    note: "Project financing enquiries. Include location, stage, programme and capital sought.",
  },
  {
    title: "Careers",
    email: site.careersEmail,
    note: "Introduce yourself with a note and a record of your work.",
  },
  {
    title: "Press",
    email: site.pressEmail,
    note: "Media and speaking enquiries for the firm and its portfolio companies.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a conversation."
        lede="We answer considered enquiries with considered replies. Tell us who you are, what you are building or financing, and the timescale you are working to."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="divide-y divide-line border-y border-line">
                {channels.map((channel, i) => (
                  <Reveal key={channel.title} delay={0.05 * i}>
                    <div className="py-8">
                      <h2 className="display text-2xl text-ink">
                        {channel.title}
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
                        {channel.note}
                      </p>
                      <a
                        href={`mailto:${channel.email}`}
                        className="eyebrow mt-5 inline-block text-accent transition-colors duration-300 hover:text-ink"
                      >
                        {channel.email} →
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.1}>
                <Eyebrow>Headquarters</Eyebrow>
                <p className="mt-6 font-serif text-2xl text-ink">
                  Lagos, Nigeria
                </p>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  Meetings are by appointment. We work with partners across
                  Africa and internationally.
                </p>
                <div className="mt-12 border-t border-line pt-8">
                  <Eyebrow>A Note on Pace</Eyebrow>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    We move deliberately by design. Serious enquiries receive a
                    substantive reply, typically within five working days.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
