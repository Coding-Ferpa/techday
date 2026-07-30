import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { PARTNERSHIP_EMAIL } from "@/lib/constants";

export default function PartnerCTA() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <PageContainer>
        <ScrollReveal>
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-bg-surface to-bg-elevated p-5 sm:p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-glow">
            <div className="absolute -right-10 -bottom-10 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl flex flex-col gap-3 sm:gap-4 z-10 text-center md:text-left">
              <span className="inline-flex items-center gap-2 font-mono text-caption text-accent uppercase tracking-widest self-center md:self-start">
                <FontAwesomeIcon icon={faRocket} className="w-4 h-4" />
                Patrocínio & Apoio
              </span>
              <h3 className="text-heading-3 sm:text-heading-2 font-bold text-text-primary font-heading text-balance">
                Quer ser nosso parceiro no Ferpa Tech Day?
              </h3>
              <p className="text-body text-text-secondary leading-relaxed">
                Associe sua marca ao maior evento de tecnologia e inovação de
                Fernandópolis e região. Fortaleça a comunidade tech local e
                conecte-se com novos talentos!
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 z-10 w-full md:w-auto items-stretch md:items-end">
              <Button
                href={`mailto:${PARTNERSHIP_EMAIL}`}
                variant="primary"
                className="w-full md:w-auto text-center justify-center py-3.5 px-6"
                ariaLabel="Enviar e-mail para parcerias"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                Quero ser Parceiro
              </Button>
              <p className="text-center md:text-right font-mono text-caption text-text-muted break-all">
                {PARTNERSHIP_EMAIL}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
