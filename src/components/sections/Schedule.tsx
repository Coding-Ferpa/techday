import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
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
    <section id="schedule" className="section-shell">
      <PageContainer>
        <ScrollReveal>
          <SectionHeading
            label={`Evento ${scheduleData.date}`}
            title={scheduleData.title}
            align="center"
            className="mb-12"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-[calc(-1*var(--container-padding-inline))] sm:mx-auto max-w-none sm:max-w-5xl overflow-hidden rounded-none sm:rounded-2xl border-y sm:border border-border bg-bg-elevated/70 shadow-xl backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Cronograma do Ferpa Tech Day em 24 de outubro de 2026
                </caption>
                <thead>
                  <tr className="border-b border-border bg-bg-surface/80 font-mono text-xs uppercase tracking-widest text-text-muted">
                    <th scope="col" className="w-28 sm:w-36 px-3 sm:px-6 py-4 font-medium">Horário</th>
                    <th scope="col" className="px-3 sm:px-6 py-4 font-medium">Atividade</th>
                    <th scope="col" className="w-48 sm:w-64 px-3 sm:px-6 py-4 font-medium">Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.schedule.map((item) => (
                    <tr
                      key={item.id}
                      className={`border-b border-border/80 last:border-0 transition-colors hover:bg-white/[0.025] ${
                        item.type === "break" ? "bg-accent/[0.06]" : ""
                      }`}
                    >
                      <th scope="row" className="px-3 sm:px-6 py-4 sm:py-6 align-top">
                        <span className="inline-flex items-center gap-2 font-mono text-base font-bold text-accent">
                          <FontAwesomeIcon icon={faClock} className="w-4 h-4" aria-hidden />
                          {item.time}
                        </span>
                      </th>
                      <td className="px-3 sm:px-6 py-4 sm:py-6">
                        <div className="flex items-start gap-4">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <FontAwesomeIcon icon={getIcon(item.type)} className="w-4 h-4" aria-hidden />
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-bold text-text-primary">
                                {item.title}
                              </h3>
                              {item.type === "break" && (
                                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                                  Intervalo
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-caption leading-relaxed text-text-secondary">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 sm:py-6 align-top text-caption font-medium text-accent-muted">
                        {item.speaker}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-border bg-bg-surface/40 px-page py-3 text-center font-mono text-xs text-text-muted md:hidden">
              Deslize para o lado para ver todos os detalhes
            </p>
          </div>
          <p className="mt-4 text-center text-caption text-text-muted">
            * O cronograma está sujeito a alterações.
          </p>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
