import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import locationData from "@/data/location.json";

export default function Location() {
  const { venue } = locationData;

  return (
    <section id="location" className="section-shell">
      <PageContainer>
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
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-accent/30 bg-bg-surface/90 backdrop-blur-md shadow-lg">
              <div className="relative aspect-[16/7] w-full">
                <Image
                  src="/assets/local.jpg"
                  alt="Campus da Unifef em Fernandópolis"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/70 to-transparent" />
              </div>

              <div className="p-5 sm:p-6">

                <h3 className="text-heading-3 font-bold text-text-primary mb-2">
                  {venue.name}
                </h3>
                <address className="not-italic text-text-secondary text-caption mb-5 leading-relaxed">
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
                  className="w-full sm:w-auto px-4 py-2 text-caption"
                  ariaLabel={`Como chegar a ${venue.name} no Google Maps`}
                >
                  Como chegar
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
