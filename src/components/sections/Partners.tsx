"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import partnersData from "@/data/partners.json";

export default function Partners() {
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
          {/* Patrocinador Prata - Destaque Maior */}
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
                      className="group relative flex h-32 sm:h-36 w-full max-w-[340px] sm:max-w-[400px] items-center justify-center rounded-2xl border border-[#262626] bg-[#121212] px-8 py-5 transition-all duration-base hover:border-accent/40 hover:bg-[#181818] hover:shadow-[0_0_25px_rgba(81,207,145,0.12)] hover:-translate-y-0.5"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={320}
                        height={120}
                        className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-base group-hover:scale-105"
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
                      className="group relative flex h-24 sm:h-28 w-full max-w-[260px] sm:max-w-[300px] items-center justify-center rounded-2xl border border-[#262626] bg-[#121212] p-5 transition-all duration-base hover:border-accent/40 hover:bg-[#181818] hover:shadow-[0_0_25px_rgba(81,207,145,0.12)] hover:-translate-y-0.5"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={240}
                        height={90}
                        className="max-h-11 sm:max-h-12 w-auto object-contain transition-transform duration-base group-hover:scale-105"
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
                      className="group relative flex h-24 sm:h-28 w-full max-w-[240px] sm:max-w-[280px] items-center justify-center rounded-2xl border border-[#262626] bg-[#121212] p-5 transition-all duration-base hover:border-accent/40 hover:bg-[#181818] hover:shadow-[0_0_25px_rgba(81,207,145,0.12)] hover:-translate-y-0.5"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={240}
                        height={90}
                        className={`${
                          partner.id === "unifef"
                            ? "h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover shadow-sm"
                            : "max-h-10 sm:max-h-11 w-auto object-contain"
                        } transition-transform duration-base group-hover:scale-105`}
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
