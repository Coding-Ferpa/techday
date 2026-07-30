import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import partnersData from "@/data/partners.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faHandshake,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

type Partner = (typeof partnersData.partners)[number];

function PartnerCard({
  partner,
  featured = false,
}: {
  partner: Partner;
  featured?: boolean;
}) {
  const logoClasses = {
    github: "h-14 w-14 object-contain",
    unifef: "h-20 w-20 rounded-lg object-cover",
    "ticket-imediato": "h-12 w-auto max-w-full object-contain",
  }[partner.id];

  return (
    <article
      className={`relative h-full overflow-hidden rounded-2xl border bg-bg-surface/80 backdrop-blur-sm transition-all duration-base hover:-translate-y-1 hover:shadow-glow group flex flex-col ${
        featured
          ? "border-accent/40 hover:border-accent p-4"
          : "border-border hover:border-accent/50 p-5"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="px-3 py-1 rounded-full text-caption font-mono font-medium bg-accent/10 text-accent border border-accent/20">
            {partner.category}
          </span>
          <FontAwesomeIcon
            icon={featured ? faStar : faHandshake}
            className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors"
            aria-hidden
          />
        </div>

        <div className="relative mb-4 flex h-20 items-center justify-center px-3">
          <Image
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            width={320}
            height={180}
            className={logoClasses}
          />
        </div>

        <h3 className="mb-2 text-center text-lg font-bold text-text-primary">
          {partner.name}
        </h3>

        <p className="text-caption text-text-secondary leading-relaxed mb-5">
          {partner.description}
        </p>
      </div>

      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-caption font-semibold text-accent hover:text-accent-muted transition-colors mt-auto"
        aria-label={`Conhecer ${partner.name}`}
      >
        <span>Conhecer {featured ? "patrocinador" : "parceiro"}</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" aria-hidden />
      </a>
    </article>
  );
}

export default function Partners() {
  const sponsors = partnersData.partners.filter(
    (partner) => partner.type === "sponsor",
  );
  const partners = partnersData.partners.filter(
    (partner) => partner.type === "partner",
  );

  return (
    <section id="partners" className="relative overflow-hidden section-shell bg-bg-elevated/30">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
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
              Patrocinador
            </h3>
            <div className="mx-auto max-w-xs">
              {sponsors.map((partner, index) => (
                <ScrollReveal key={partner.id} delay={index * 100}>
                  <PartnerCard partner={partner} featured />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-center font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
              Parceiros
            </h3>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 md:grid-cols-2">
              {partners.map((partner, index) => (
                <ScrollReveal key={partner.id} delay={index * 100}>
                  <PartnerCard partner={partner} />
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
