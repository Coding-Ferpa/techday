"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import partnersData from "@/data/partners.json";

export default function Partners() {
  const diamanteSponsors = partnersData.sponsors.filter(
    (sponsor) => sponsor.tier === "diamante"
  );
  const prataSponsors = partnersData.sponsors.filter(
    (sponsor) => sponsor.tier === "prata"
  );
  const bronzeSponsors = partnersData.sponsors.filter(
    (sponsor) => sponsor.tier === "bronze"
  );
  const allPartnersAndSupport = [
    ...partnersData.institutional.filter((p) => p.type === "partner"),
    ...partnersData.institutional.filter((p) => p.type === "institutional"),
  ];

  return (
    <section id="partners" className="relative overflow-hidden section-shell">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[rgba(94,23,235,0.15)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-[rgba(81,207,145,0.1)] blur-3xl"
        aria-hidden
      />

      <PageContainer className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            label="Patrocínio & Apoio"
            title={partnersData.title}
            align="center"
            className="mb-4"
          />
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            {partnersData.subtitle}
          </p>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-12">
          {/* Patrocinador Diamante - Maior Destaque */}
          {diamanteSponsors.length > 0 && (
            <ScrollReveal>
              <div className="text-center">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                  Patrocinador Diamante
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {diamanteSponsors.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conhecer ${sponsor.name}`}
                      className="group relative flex h-40 sm:h-52 md:h-56 w-full max-w-[460px] sm:max-w-[580px] md:max-w-[620px] items-center justify-center rounded-2xl border-2 border-cyan-400/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-md px-6 sm:px-10 py-5 sm:py-6 outline-none transition-all duration-base hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(34,211,238,0)] opacity-0 blur-xl transition-all duration-500 group-hover:bg-[rgba(34,211,238,0.15)] group-hover:opacity-100"
                      />
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={450}
                        height={160}
                        className="relative z-10 max-h-24 sm:max-h-28 md:max-h-32 w-auto object-contain transition-transform duration-base group-hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Patrocinador Prata */}
          {prataSponsors.length > 0 && (
            <ScrollReveal>
              <div className="text-center">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-slate-300 font-semibold">
                  Patrocinador Prata
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {prataSponsors.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conhecer ${sponsor.name}`}
                      className="group relative flex h-32 sm:h-36 w-full max-w-[340px] sm:max-w-[400px] items-center justify-center rounded-2xl border-2 border-[#5e17eb] bg-transparent px-8 py-5 outline-none transition-all duration-base hover:shadow-[0_0_24px_rgba(94,23,235,0.55)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(94,23,235,0)] opacity-0 blur-xl transition-all duration-500 group-hover:bg-[rgba(94,23,235,0.3)] group-hover:opacity-100"
                      />
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={320}
                        height={120}
                        className="relative z-10 max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-base group-hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Patrocinador Bronze */}
          {bronzeSponsors.length > 0 && (
            <ScrollReveal>
              <div className="text-center">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold">
                  Patrocinador Bronze
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {bronzeSponsors.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conhecer ${sponsor.name}`}
                      className="group relative flex h-24 sm:h-28 w-full max-w-[260px] sm:max-w-[300px] items-center justify-center rounded-2xl border-2 border-[#5e17eb] bg-transparent p-5 outline-none transition-all duration-base hover:shadow-[0_0_24px_rgba(94,23,235,0.55)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(94,23,235,0)] opacity-0 blur-xl transition-all duration-500 group-hover:bg-[rgba(94,23,235,0.3)] group-hover:opacity-100"
                      />
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={240}
                        height={90}
                        className="relative z-10 max-h-11 sm:max-h-12 w-auto object-contain transition-transform duration-base group-hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Parceiros & Apoio Institucional - Mesma linha horizontal */}
          {allPartnersAndSupport.length > 0 && (
            <ScrollReveal>
              <div className="text-center">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-text-muted font-semibold">
                  Parceiros & Apoio Institucional
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {allPartnersAndSupport.map((partner) => (
                    <a
                      key={partner.id}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conhecer ${partner.name}`}
                      className="group relative flex h-24 sm:h-28 w-full max-w-[240px] sm:max-w-[280px] items-center justify-center rounded-2xl border-2 border-[#5e17eb] bg-transparent p-5 outline-none transition-all duration-base hover:shadow-[0_0_24px_rgba(94,23,235,0.55)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(94,23,235,0)] opacity-0 blur-xl transition-all duration-500 group-hover:bg-[rgba(94,23,235,0.3)] group-hover:opacity-100"
                      />
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={240}
                        height={90}
                        className={`${partner.id === "unifef"
                          ? "h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover shadow-sm"
                          : "max-h-10 sm:max-h-11 w-auto object-contain"
                          } relative z-10 transition-transform duration-base group-hover:scale-105`}
                        unoptimized={partner.logo.endsWith(".svg")}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Footer note */}
        <ScrollReveal delay={100}>
          <p className="text-caption font-mono text-text-muted text-center max-w-xl mx-auto mt-10 sm:mt-12">
            Sua marca também pode fazer parte deste movimento.
          </p>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
