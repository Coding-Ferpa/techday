import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import scheduleData from "@/data/schedule.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMugHot, faMicrophone, faFlagCheckered, faTicket } from "@fortawesome/free-solid-svg-icons";

export default function Schedule() {
  const getIcon = (type: string) => {
    switch (type) {
      case "break":
        return faMugHot;
      case "opening":
        return faTicket;
      case "closing":
        return faFlagCheckered;
      default:
        return faMicrophone;
    }
  };

  return (
    <section id="schedule" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            label={`Evento ${scheduleData.date}`}
            title={scheduleData.title}
            align="center"
            className="mb-12"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {scheduleData.schedule.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 80}>
              <div className={`p-6 rounded-xl border transition-all duration-base flex flex-col md:flex-row gap-6 items-start md:items-center justify-between ${
                item.type === 'break' 
                  ? 'border-accent/40 bg-accent/5' 
                  : 'border-border bg-bg-elevated/70 backdrop-blur-sm hover:border-accent/30'
              }`}>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="p-3 rounded-lg bg-bg-surface text-accent font-mono text-body font-bold flex items-center gap-2 border border-border">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-accent-muted" aria-hidden />
                    {item.time}
                  </div>
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <FontAwesomeIcon icon={getIcon(item.type)} className="w-5 h-5" aria-hidden />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-heading-3 font-bold text-text-primary">
                      {item.title}
                    </h3>
                    {item.type === 'break' && (
                      <span className="px-2.5 py-0.5 rounded-full text-caption font-semibold bg-accent/20 text-accent">
                        Coffee Break
                      </span>
                    )}
                  </div>
                  <p className="text-caption font-mono text-accent-muted mb-2">
                    {item.speaker}
                  </p>
                  <p className="text-body text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
