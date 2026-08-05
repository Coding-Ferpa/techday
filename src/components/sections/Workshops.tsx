import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import workshopsData from "@/data/workshops.json";
import { WORKSHOP_FORM_URL } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChalkboardTeacher,
  faArrowUpRightFromSquare,
  faClock,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const highlightIcons = [faClock, faCalendarDays, faTicket];

export default function Workshops() {
  return (
    <section id="workshops" className="section-shell relative overflow-hidden">
      <PageContainer>
        <ScrollReveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[rgba(81,207,145,0.25)] bg-[#161616] shadow-lg">
            <div
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[rgba(94,23,235,0.18)] blur-3xl"
              aria-hidden
            />

            <div className="relative grid lg:grid-cols-[1.25fr_0.75fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(81,207,145,0.25)] bg-[rgba(81,207,145,0.08)] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="h-3.5 w-3.5"
                    aria-hidden
                  />
                  {workshopsData.label}
                </div>

                <h2 className="max-w-xl font-heading text-heading-3 font-bold text-text-primary sm:text-heading-2">
                  {workshopsData.title}
                </h2>
                <p className="mt-3 max-w-2xl text-body leading-relaxed text-text-secondary">
                  {workshopsData.intro}
                </p>
                <p className="mt-4 max-w-2xl text-caption leading-relaxed text-text-muted">
                  <span className="font-semibold text-accent-muted">Temas: </span>
                  {workshopsData.topics}
                </p>
              </div>

              <aside className="flex flex-col justify-between gap-6 border-t border-border bg-[rgba(255,255,255,0.02)] p-6 sm:p-8 lg:border-l lg:border-t-0">
                <ul className="space-y-4">
                  {workshopsData.highlights.map((item, index) => (
                    <li key={item.title} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(81,207,145,0.1)] text-accent">
                        <FontAwesomeIcon
                          icon={highlightIcons[index]}
                          className="h-4 w-4"
                          aria-hidden
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          {item.title}
                        </p>
                        <p className="text-caption text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="mb-3 text-caption font-semibold text-accent-muted">
                    {workshopsData.cta}
                  </p>
                  <Button
                    href={WORKSHOP_FORM_URL}
                    external
                    variant="primary"
                    className="w-full justify-center"
                    ariaLabel="Abrir formulário de submissão de workshops"
                  >
                    {workshopsData.buttonLabel}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="h-3.5 w-3.5"
                      aria-hidden
                    />
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
