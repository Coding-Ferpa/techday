import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import partnersData from "@/data/partners.json";

type Partner = (typeof partnersData.partners)[number];

const logoClasses: Record<string, string> = {
  github: "h-12 w-auto max-w-[200px] object-contain sm:h-14",
  unifef: "h-16 w-16 rounded-lg object-cover sm:h-20 sm:w-20",
  "ticket-imediato": "h-11 w-auto max-w-[180px] object-contain sm:h-12",
};

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conhecer ${partner.name}`}
      className="group relative flex h-28 min-w-[10rem] items-center justify-center rounded-2xl border-2 border-[#5e17eb] bg-transparent px-8 outline-none transition-all duration-base hover:shadow-[0_0_24px_rgba(94,23,235,0.55)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(94,23,235,0)] opacity-0 blur-xl transition-all duration-500 group-hover:bg-[rgba(94,23,235,0.3)] group-hover:opacity-100"
      />
      <Image
        src={partner.logo}
        alt={`Logo ${partner.name}`}
        width={320}
        height={180}
        className={`${logoClasses[partner.id]} relative z-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-focus-visible:scale-110`}
        unoptimized={partner.logo.endsWith(".svg")}
      />
    </a>
  );
}

export default function Partners() {
  const institutional = partnersData.partners.filter(
    (partner) => partner.type === "institutional",
  );
  const partners = partnersData.partners.filter(
    (partner) => partner.type === "partner",
  );

  return (
    <section id="partners" className="relative overflow-hidden section-shell">
      <PageContainer>
        <ScrollReveal>
          <SectionHeading
            label="Patrocínio & apoio"
            title={partnersData.title}
            align="center"
            className="mb-4"
          />
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-12">
            {partnersData.subtitle}
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          <div>
            <h3 className="mb-5 text-center font-mono text-caption uppercase tracking-[0.2em] text-accent">
              Parceiros
            </h3>
            <div className="mx-auto flex max-w-xs justify-center">
              {partners.map((partner, index) => (
                <ScrollReveal key={partner.id} delay={index * 100}>
                  <PartnerLogo partner={partner} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-center font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
              Apoio institucional
            </h3>
            <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 sm:gap-10">
              {institutional.map((partner, index) => (
                <ScrollReveal key={partner.id} delay={index * 100}>
                  <PartnerLogo partner={partner} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal delay={300}>
          <p className="mt-10 text-center font-mono text-caption text-text-muted">
            Sua marca também pode fazer parte deste movimento.
          </p>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
