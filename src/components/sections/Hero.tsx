import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHATSAPP_URL } from "@/lib/constants";
import logo from "@/app/assets/logo.png";
import heroData from "@/data/hero.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-var(--header-height))] flex flex-col justify-between overflow-hidden py-10"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10 w-full flex-grow flex flex-col justify-center gap-12">
        {/* Top Header / Branding */}
        <ScrollReveal>
          <div className="flex flex-col items-start gap-4">
            <h1 className="sr-only">Ferpa Tech Day — {heroData.eventDate}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src={logo}
                alt="Ferpa Tech Day"
                width={320}
                height={120}
                className="w-auto h-16 md:h-20 object-contain"
                priority
              />
              <span className="font-mono text-caption text-accent-muted px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
                {heroData.badge}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Central Display Banner: pré-LOTE */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-6 my-4 select-none">
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-text-primary uppercase font-heading">
              pré-
            </span>
            <span className="text-7xl md:text-9xl lg:text-[11rem] font-extrabold tracking-widest text-text-primary uppercase font-display drop-shadow-[0_0_25px_rgba(81,207,145,0.3)]">
              LOTE
            </span>
          </div>
        </ScrollReveal>

        {/* Bottom Info Card + Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-6">
              <p className="text-text-secondary text-body max-w-lg">
                O maior encontro de tecnologia, inovação e desenvolvimento de Fernandópolis e região. Garanta seu ingresso no pré-lote!
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={heroData.ticketUrl}
                  external
                  variant="primary"
                  ariaLabel="Garantir ingresso pré-lote"
                >
                  Garantir Ingressos
                </Button>
                <SocialLinks size="md" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="rounded-xl border border-accent/30 bg-bg-surface/80 backdrop-blur-md p-6 md:p-8 shadow-glow flex items-center gap-6 max-w-md ml-auto w-full">
              <div className="p-4 rounded-lg bg-accent/10 text-accent text-3xl flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faCalendarDays} className="w-8 h-8" aria-hidden />
              </div>
              <div className="flex flex-col font-mono">
                <span className="text-body font-semibold text-text-primary">
                  {heroData.lotInfo.label}
                </span>
                <span className="text-caption text-text-muted mb-1">
                  {heroData.lotInfo.untilDate}
                </span>
                <span className="text-heading-2 font-bold text-accent">
                  por: {heroData.lotInfo.price}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Code/Terminal style Footer Banner */}
      <div className="max-w-container mx-auto px-6 lg:px-10 w-full mt-12">
        <div className="p-3 rounded-lg border border-border bg-black/60 backdrop-blur-sm text-center font-mono text-caption text-text-muted overflow-x-auto">
          {heroData.ctaText}
        </div>
      </div>
    </section>
  );
}
