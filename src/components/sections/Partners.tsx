import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import partnersData from "@/data/partners.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-bg-elevated/30">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            label="Apoio & Parcerias"
            title={partnersData.title}
            align="center"
            className="mb-4"
          />
          <p className="text-body text-text-secondary text-center max-w-xl mx-auto mb-12">
            {partnersData.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {partnersData.partners.map((partner, index) => (
            <ScrollReveal key={partner.id} delay={index * 100}>
              <div className="h-full rounded-xl border border-border bg-bg-surface/80 backdrop-blur-sm p-8 flex flex-col justify-between hover:border-accent/40 transition-all duration-base group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-caption font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                      {partner.category}
                    </span>
                    <FontAwesomeIcon icon={faHandshake} className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-heading-2 font-bold text-text-primary mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>

                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-caption font-semibold text-accent hover:text-accent-muted transition-colors mt-auto"
                  >
                    <span>Visitar parceiro</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" aria-hidden />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
