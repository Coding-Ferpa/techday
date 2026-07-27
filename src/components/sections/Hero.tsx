import Image from "next/image";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import ScrollReveal from "@/components/ui/ScrollReveal";
import heroData from "@/data/hero.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDay,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-var(--header-height))] flex items-center overflow-hidden py-12 md:py-20"
    >
      <div className="absolute -top-36 right-[-10%] h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-48 left-[-8%] h-96 w-96 rounded-full bg-accent-secondary/20 blur-3xl" />

      <div className="max-w-container mx-auto px-6 lg:px-10 w-full relative">
        <h1 className="sr-only">Ferpa Tech Day — {heroData.eventDate}</h1>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2.5 font-mono text-caption text-accent-muted px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span>{heroData.badge}</span>
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary font-heading leading-[1.02] tracking-tight">
                O primeiro evento{" "}
                <span className="gradient-text">tech</span> de Fernandópolis
              </h2>

              <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Um dia de palestras, experiências e conexões para quem cria,
                estuda e transforma o futuro com tecnologia.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button
                  href={heroData.ticketUrl}
                  external
                  variant="primary"
                  className="px-5 py-2.5 text-caption"
                  ariaLabel="Garantir ingresso"
                >
                  Garantir meu ingresso
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </Button>
                <Button
                  href="#schedule"
                  variant="secondary"
                  className="px-5 py-2.5 text-caption"
                  ariaLabel="Ver programação do evento"
                >
                  Ver programação
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-caption text-text-secondary">
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarDay} className="w-4 h-4 text-accent" />
                  24 de outubro de 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-accent" />
                  Fernandópolis, SP
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/assets/logo-site.png"
                  alt="Ferpa Tech Day 2026, por Coding Ferpa"
                  width={1000}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
                  priority
                />
                <div className="mt-3 flex justify-end">
                  <SocialLinks size="sm" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
