"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCircleCheck,
  faArrowUpRightFromSquare,
  faUsers,
  faChalkboardTeacher,
  faLayerGroup,
  faLightbulb,
  faTicket,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import workshopsData from "@/data/workshops.json";
import { TICKET_URL } from "@/lib/constants";

export default function Workshops() {
  return (
    <section id="workshops" className="section-shell relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-[rgba(81,207,145,0.12)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[rgba(94,23,235,0.16)] blur-3xl"
        aria-hidden
      />

      <PageContainer className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="h-3.5 w-3.5" />
              {workshopsData.label}
            </div>
            <SectionHeading
              label=""
              title={workshopsData.title}
              align="center"
              className="mb-4"
            />
            <p className="text-body text-text-secondary leading-relaxed">
              {workshopsData.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {workshopsData.workshops.map((workshop, index) => {
            const isMultipleInstructors = workshop.instructors.length > 1;

            return (
              <ScrollReveal key={workshop.id} delay={index * 120} className="h-full">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[rgba(81,207,145,0.22)] bg-[#141414] p-5 sm:p-7 shadow-xl transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(81,207,145,0.14)] hover:-translate-y-1">
                  {/* Subtle top-right corner glow */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[rgba(81,207,145,0.1)] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />

                  {/* Top Part: Badges, Facilitators, Title & Description */}
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-bold text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        {workshop.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2b2b2b] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 font-mono text-[11px] text-text-muted">
                        <FontAwesomeIcon icon={faClock} className="h-3 w-3 text-accent/80" />
                        {workshop.duration}
                      </span>
                    </div>

                    {/* Facilitator(s) presentation */}
                    <div className="mb-5 rounded-xl border border-[#242424] bg-white/[0.02] p-3 transition-colors group-hover:border-accent/30">
                      {isMultipleInstructors ? (
                        <div className="flex items-center gap-3">
                          {/* Avatars Stack */}
                          <div className="flex -space-x-3 shrink-0">
                            {workshop.instructors.map((inst, idx) => (
                              <div
                                key={idx}
                                className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl border-2 border-[#161616] ring-2 ring-accent/40 bg-[#1a1a1a] shadow-md transition-transform group-hover:scale-105 aspect-square shrink-0"
                              >
                                <Image
                                  src={inst.photo}
                                  alt={`Foto de ${inst.name}`}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-heading text-sm sm:text-base font-bold text-text-primary leading-tight">
                              {workshop.instructors.map((i) => i.name).join(" e ")}
                            </h4>
                            <p className="mt-0.5 font-mono text-[11px] font-semibold text-accent">
                              Facilitadores Convidados
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border-2 border-accent/40 shadow-glow bg-[#1a1a1a] aspect-square">
                            <Image
                              src={workshop.instructors[0].photo}
                              alt={`Foto de ${workshop.instructors[0].name}`}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover object-top"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-heading text-sm sm:text-base font-bold text-text-primary leading-snug">
                              {workshop.instructors[0].name}
                            </h4>
                            <p className="mt-0.5 font-mono text-[11px] font-semibold text-accent">
                              {workshop.instructors[0].role}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Workshop Title */}
                    <h3 className="font-heading text-base sm:text-lg font-bold text-text-primary group-hover:text-accent transition-colors leading-snug mb-3">
                      {workshop.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                      {workshop.description}
                    </p>

                    {/* Highlights (O que será abordado) */}
                    <div className="mb-5 rounded-xl border border-[rgba(81,207,145,0.15)] bg-[rgba(255,255,255,0.015)] p-3.5 sm:p-4">
                      <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent font-bold">
                        <FontAwesomeIcon icon={faLightbulb} className="text-accent" />
                        Destaques da Oficina
                      </p>
                      <ul className="space-y-2">
                        {workshop.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-text-secondary leading-snug"
                          >
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience & Level Meta */}
                    <div className="space-y-2 mb-5 rounded-xl border border-[#242424] bg-white/[0.01] p-3 text-xs">
                      <div className="flex items-start gap-2 text-text-muted">
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="h-3.5 w-3.5 text-accent/70 mt-0.5 shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-text-secondary">Público-alvo: </span>
                          <span>{workshop.targetAudience}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-text-muted">
                        <FontAwesomeIcon
                          icon={faLayerGroup}
                          className="h-3.5 w-3.5 text-accent/70 mt-0.5 shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-text-secondary">Nível: </span>
                          <span>{workshop.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Part: Tags & Action Button */}
                  <div className="pt-4 border-t border-[#242424] mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {workshop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[#262626] bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] text-text-muted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      href={TICKET_URL}
                      external
                      variant="primary"
                      className="w-full justify-center text-xs sm:text-sm py-2.5"
                      ariaLabel={`Garantir ingresso para participar do workshop ${workshop.title}`}
                    >
                      <FontAwesomeIcon icon={faTicket} className="mr-1.5 h-3.5 w-3.5" />
                      Garantir Ingresso
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="ml-1.5 h-3 w-3"
                      />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Informative Bottom Card */}
        <ScrollReveal delay={350} className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[rgba(81,207,145,0.2)] bg-[#161616] p-5 sm:p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <FontAwesomeIcon icon={faCalendarCheck} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Acesso Total Incluso no Ingresso
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  Todas as oficinas acontecem nos laboratórios da Unifef durante a tarde (13:30 – 16:50). Vagas por ordem de chegada no laboratório!
                </p>
              </div>
            </div>

            <Button
              href="#schedule"
              variant="secondary"
              className="shrink-0 text-xs sm:text-sm py-2 px-4 whitespace-nowrap"
            >
              Ver Cronograma
            </Button>
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
