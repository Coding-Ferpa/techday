import Image from "next/image";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import ScrollReveal from "@/components/ui/ScrollReveal";
import heroData from "@/data/hero.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-var(--header-height))] flex flex-col justify-between overflow-hidden py-10"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10 w-full flex-grow flex flex-col justify-center gap-12">
        <h1 className="sr-only">Ferpa Tech Day — {heroData.eventDate}</h1>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-4">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 items-start">
              <span className="inline-flex items-center gap-2.5 font-mono text-caption text-accent-muted px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10">
                <Image
                  src="/assets/icon.png"
                  alt="Coding Ferpa Icon"
                  width={20}
                  height={20}
                  className="h-5 w-auto object-contain"
                />
                <span>{heroData.badge}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary font-heading leading-tight">
                Primeiro evento de tecnologia de Fernandópolis desenvolvido pelo Coding Ferpa.
              </h2>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                1 dia de imersão com palestras técnicas na área de tecnologia, networking e muito mais.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Button
                  href={heroData.ticketUrl}
                  external
                  variant="primary"
                  ariaLabel="Garantir ingresso"
                >
                  Garantir Ingressos
                </Button>
                <SocialLinks size="md" />
              </div>
            </div>

            {/* Right Logo Column (Symbol without text) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-sm lg:max-w-md flex justify-center p-4">
                <Image
                  src="/assets/logo-fundo-roxo.png"
                  alt="Ferpa Tech Day Icon"
                  width={600}
                  height={600}
                  className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_0_40px_rgba(81,207,145,0.4)] hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
