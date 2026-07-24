import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import locationData from "@/data/location.json";

export default function Location() {
  const { venue } = locationData;

  return (
    <section id="location" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <ScrollReveal>
            <div>
              <SectionHeading label="Localização" title={locationData.title} />

              <p className="text-body text-text-secondary mb-6 leading-relaxed">
                {venue.details}
              </p>
              <p className="text-body text-text-secondary mb-6">
                Esperamos por você em Fernandópolis para um dia inesquecível de muito código, conexão e inovação!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-xl border border-accent/30 bg-bg-surface/90 backdrop-blur-md p-8 shadow-lg flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <FontAwesomeIcon icon={faBuildingColumns} className="w-6 h-6" aria-hidden />
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-caption font-semibold font-mono">
                  Sede Oficial
                </span>
              </div>

              <h3 className="text-heading-2 font-bold text-text-primary mb-3">
                {venue.name}
              </h3>
              <address className="not-italic text-text-secondary text-body mb-8 leading-relaxed">
                {venue.address}
                <br />
                {venue.neighborhood}
                <br />
                {venue.city} — CEP: {venue.zip}
              </address>

              <Button
                href={venue.mapsUrl}
                external
                variant="secondary"
                icon={faMapLocationDot}
                className="w-full sm:w-auto"
                ariaLabel={`Como chegar a ${venue.name} no Google Maps`}
              >
                Como chegar
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
