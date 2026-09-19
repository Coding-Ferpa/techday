"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
  faMicrophone,
  faChalkboardTeacher,
  faMugHot,
  faFlagCheckered,
  faTicket,
  faCircleCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import scheduleData from "@/data/schedule.json";
import speakersData from "@/data/speakers.json";
import { TICKET_URL, WORKSHOP_FORM_URL } from "@/lib/constants";

export default function Schedule() {
  // Default to index 2 (Liszeila Martingo - 09:20)
  const [activeItemIndex, setActiveItemIndex] = useState(2);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const liszeilaSpeaker = speakersData.speakers.find(
    (s) => s.id === "liszeila-martingo"
  );
  const eustaquioSpeaker = speakersData.speakers.find(
    (s) => s.id === "eustaquio-rangel"
  );
  const henriqueSpeaker = speakersData.speakers.find(
    (s) => s.id === "henrique-amaral"
  );

  const scheduleItems = [
    {
      id: "credenciamento",
      shortTime: "07:30",
      time: "07:30 – 08:30",
      tabLabel: "Abertura Oficial",
      type: "opening",
      badge: "Recepção & Início",
      stage: "Hall de Entrada & Auditório",
      title: "Credenciamento e Abertura Oficial",
      speaker: "Organização Ferpa Tech Day",
      role: "Equipe Organizadora",
      company: "Coding Ferpa & Unifef",
      description:
        "Recepção de boas-vindas aos participantes com entrega de crachás, kits do participante e materiais exclusivos. Abertura solene do auditório principal com as diretrizes e avisos do evento.",
      highlights: [
        "Entrega de kits e crachás de acesso",
        "Abertura oficial do auditório",
        "Boas-vindas com a equipe organizadora",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
    },
    {
      id: "palestra-1",
      shortTime: "08:30",
      time: "08:30 – 09:20",
      tabLabel: "Palestra 1",
      type: "talk",
      badge: "Palestra 1 · Em Breve",
      stage: "Palco Principal",
      title: "Palestra Magna 1 — Abertura Técnica",
      speaker: "Palestrante Convidado",
      role: "Especialista em Tecnologia",
      company: "A divulgar",
      description:
        "Primeira palestra da manhã abrindo a trilha técnica no palco principal. Estamos concluindo os detalhes para anunciar em breve uma grande referência da área.",
      highlights: [
        "Abertura da trilha matutina de palestras",
        "Sessão de Perguntas & Respostas ao vivo",
        "Palco Principal",
      ],
      actionLabel: "Acompanhar no Instagram",
      actionUrl: "https://instagram.com/ferpatechday",
    },
    {
      id: "liszeila-martingo",
      shortTime: "09:20",
      time: "09:20 – 10:10",
      tabLabel: "Liszeila Martingo",
      type: "talk",
      isConfirmed: true,
      badge: "Palestra Magna · Confirmada",
      stage: "Palco Principal",
      title:
        liszeilaSpeaker?.talkTitle ||
        "Desmistificando a Inovação: A Visão Sistêmica da Inovação e os seus componentes",
      speaker: liszeilaSpeaker?.name || "Liszeila Martingo",
      role: liszeilaSpeaker?.role || "Docente & Gestora de Inovação",
      company: liszeilaSpeaker?.company || "Fatec Rio Preto / CPS",
      photo: liszeilaSpeaker?.photo || "/assets/liszeila.jpg",
      description:
        liszeilaSpeaker?.talkTopic ||
        "Na palestra, vamos explorar a visão sistêmica da inovação e os seus principais componentes, desmistificando conceitos e mostrando como aplicá-la na prática para gerar impacto real.",
      bio:
        liszeilaSpeaker?.bio ||
        "Com uma trajetória sólida em educação, gestão de conteúdo e ecossistemas de inovação, Liszeila Martingo é docente na Fatec Rio Preto, gestora de conteúdo e mentorias da Incubadora Virtual do Centro Paula Souza e diretora de Relações Acadêmicas, Startups e Inovação. Além disso, atua como conselheira do Parque Tecnológico de São José do Rio Preto e é mentora de programas de destaque nacional, como NEXUS, Inovativa Brasil, CIETEC e ABStartups. Sua experiência conecta a academia, o empreendedorismo e o desenvolvimento de novos negócios.",
      highlights: liszeilaSpeaker?.credentials || [
        "Docente na Fatec Rio Preto e gestora na Incubadora Virtual do Centro Paula Souza",
        "Conselheira do Parque Tecnológico de São José do Rio Preto",
        "Mentora de programas nacionais: NEXUS, Inovativa Brasil, CIETEC e ABStartups",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
    },
    {
      id: "coffee-break",
      shortTime: "10:10",
      time: "10:10 – 10:30",
      tabLabel: "Coffee Break",
      type: "break",
      badge: "Intervalo & Conexão",
      stage: "Área de Convivência & Estandes",
      title: "Coffee Break & Networking",
      speaker: "Todos os Participantes",
      role: "Comunidade & Parceiros",
      company: "Ferpa Tech Day",
      description:
        "Pausa revigorante para café, troca de experiências, networking entre profissionais, professores e acadêmicos, além de visitação aos estandes dos patrocinadores.",
      highlights: [
        "Café e lanches para recarregar as energias",
        "Visitação aos estandes de empresas parceiras",
        "Troca de contatos e networking livre",
      ],
      actionLabel: "Ver Patrocinadores",
      actionUrl: "#partners",
    },
    {
      id: "eustaquio-rangel",
      shortTime: "10:30",
      time: "10:30 – 11:20",
      tabLabel: "Eustáquio Rangel",
      type: "talk",
      isConfirmed: true,
      badge: "Palestra Magna · Confirmado",
      stage: "Palco Principal",
      title:
        eustaquioSpeaker?.talkTitle ||
        "Conhecendo Ruby e Rails",
      speaker: eustaquioSpeaker?.name || "Eustáquio Rangel",
      role: eustaquioSpeaker?.role || "Engenheiro de Software Sênior",
      company: eustaquioSpeaker?.company || "Bluefish",
      photo: eustaquioSpeaker?.photo || "/assets/eustaquio.jpg",
      description:
        eustaquioSpeaker?.talkTopic ||
        "Vamos conhecer um pouco da linguagem Ruby e do seu framework catalisador Rails, com hands-on, montando um pequeno app web com poucas linhas de código!",
      bio:
        eustaquioSpeaker?.bio ||
        "Com mais de 30 anos de experiência em desenvolvimento de software, Eustáquio Rangel trabalha com Ruby desde o início dos anos 2000 e é uma das referências da comunidade Ruby no Brasil. Entusiasta e defensor do Software Livre, é mantenedor de projetos de código aberto e autor de livros sobre Ruby, Rails e Git. Em 2006, publicou Ruby: Conhecendo a Linguagem, reconhecido como o primeiro livro de Ruby publicado no Brasil. Eustáquio também é fundador e desenvolvedor da Bluefish, empresa especializada em consultoria, desenvolvimento e treinamento utilizando soluções de Software Livre.",
      highlights: eustaquioSpeaker?.credentials || [
        "Mais de 30 anos de experiência em desenvolvimento de software",
        "Referência em Ruby no Brasil e autor do 1º livro de Ruby publicado no país",
        "Fundador e desenvolvedor da Bluefish & mantenedor Open Source",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
    },
    {
      id: "henrique-amaral",
      shortTime: "11:20",
      time: "11:20 – 12:30",
      tabLabel: "Henrique Amaral",
      type: "talk",
      isConfirmed: true,
      badge: "Palestra Magna · Confirmado",
      stage: "Palco Principal",
      title:
        henriqueSpeaker?.talkTitle ||
        "Informática em Saúde: Aplicações, Tecnologias e Perspectivas para o Futuro",
      speaker: henriqueSpeaker?.name || "Henrique Amaral",
      role: henriqueSpeaker?.role || "Consultor Técnico",
      company: henriqueSpeaker?.company || "Philips",
      photo: henriqueSpeaker?.photo || "/assets/HenriqueAmaral.jpeg",
      description:
        henriqueSpeaker?.talkTopic ||
        "A tecnologia aplicada à saúde promove processos e serviços mais seguros, eficientes e integrados, auxiliando os profissionais de saúde em seu trabalho diário e contribuindo para uma melhor experiência e jornada dos pacientes.",
      bio:
        henriqueSpeaker?.bio ||
        "Henrique Amaral é bacharel em Informática Biomédica e doutor em Processamento e Análise de Imagens Médicas pela USP de Ribeirão Preto. Realizou pós-doutorado na University of Washington e na UT Health, nos Estados Unidos. Profissionalmente, atuou na área de informática em saúde em instituições e empresas como Hospital A.C. Camargo, Dasa, Siemens, GE e Philips.",
      highlights: henriqueSpeaker?.credentials || [
        "Doutor pela USP de Ribeirão Preto",
        "Pós-doutorado pela University of Washington & UT Health",
        "Atuações: Hospital A.C. Camargo, Dasa, Siemens, GE e Philips",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
    },
    {
      id: "almoco",
      shortTime: "12:30",
      time: "12:30 – 13:30",
      tabLabel: "Almoço",
      type: "break",
      badge: "Intervalo Geral",
      stage: "Praça de Alimentação & Arredores",
      title: "Intervalo para Almoço",
      speaker: "Todos os Participantes",
      role: "Horário Livre",
      company: "Campus & Região",
      description:
        "Intervalo para almoço, descanso e recarga antes do início das oficinas práticas nos laboratórios de informática durante todo o período da tarde.",
      highlights: [
        "Opções de alimentação nos arredores do campus",
        "Tempo para descanso e socialização",
        "Retorno pontual às 13:30 para os workshops",
      ],
      actionLabel: "Ver Oficinas da Tarde",
      actionUrl: "#workshops",
    },
    {
      id: "oficinas-1",
      shortTime: "13:30",
      time: "13:30 – 15:00",
      tabLabel: "Oficinas – Bloco 1",
      type: "workshop",
      badge: "Workshops Práticos",
      stage: "Laboratórios Unifef",
      title: "Oficinas Mão na Massa — Bloco 1",
      speaker: "Facilitadores da Comunidade",
      role: "Workshops Técnicos",
      company: "Coding Ferpa & Convidados",
      description:
        "Primeiro bloco de oficinas técnicas nos laboratórios de informática com foco em programação, novas ferramentas e prática direta na máquina.",
      highlights: [
        "Salas equipadas com computadores e internet",
        "Atividades interativas mão na massa",
        "Submissão de oficinas práticas aberta",
      ],
      actionLabel: "Submeter Oficina",
      actionUrl: WORKSHOP_FORM_URL,
    },
    {
      id: "intervalo-tarde",
      shortTime: "15:00",
      time: "15:00 – 15:20",
      tabLabel: "Intervalo Salas",
      type: "break",
      badge: "Transição",
      stage: "Corredores & Laboratórios",
      title: "Intervalo & Troca de Salas",
      speaker: "Todos os Participantes",
      role: "Transição",
      company: "Unifef",
      description:
        "Breve intervalo para esticar as pernas, tomar água e trocar de laboratório para participar do segundo bloco de oficinas práticas da tarde.",
      highlights: [
        "Transição rápida entre laboratórios",
        "Hidratação e café rápido",
        "Início pontual do Bloco 2 às 15:20",
      ],
      actionLabel: "Ver Workshops",
      actionUrl: "#workshops",
    },
    {
      id: "oficinas-2",
      shortTime: "15:20",
      time: "15:20 – 16:50",
      tabLabel: "Oficinas – Bloco 2",
      type: "workshop",
      badge: "Workshops Práticos",
      stage: "Laboratórios Unifef",
      title: "Oficinas Mão na Massa — Bloco 2",
      speaker: "Facilitadores da Comunidade",
      role: "Workshops Técnicos",
      company: "Coding Ferpa & Convidados",
      description:
        "Segundo bloco de oficinas imersivas nos laboratórios com novos temas e desafios práticos conduzidos por profissionais experientes.",
      highlights: [
        "Segundo tema prático à sua escolha",
        "Resolução de exercícios e desafios em código",
        "Mentoria próxima com facilitadores",
      ],
      actionLabel: "Submeter Oficina",
      actionUrl: WORKSHOP_FORM_URL,
    },
    {
      id: "encerramento",
      shortTime: "17:00",
      time: "17:00 – 18:00",
      tabLabel: "Encerramento",
      type: "closing",
      badge: "Encerramento Oficial",
      stage: "Palco Principal",
      title: "Encerramento, Sorteios & Networking Final",
      speaker: "Organização Ferpa Tech Day",
      role: "Equipe Organizadora",
      company: "Coding Ferpa & Parceiros",
      description:
        "Agradecimentos finais aos participantes, palestrantes, oficineiros e patrocinadores, com sorteio de brindes oficiais exclusivos e networking de despedida.",
      highlights: [
        "Sorteio de brindes oficiais dos parceiros",
        "Fotos oficiais com toda a comunidade",
        "Agradecimentos e encerramento do evento",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
    },
  ];

  const currentItem = scheduleItems[activeItemIndex];

  // Auto-scroll the active tab pill into view strictly inside the tabs container
  useEffect(() => {
    const activeTabEl = tabRefs.current[activeItemIndex];
    const container = tabsContainerRef.current;
    if (activeTabEl && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTabEl.getBoundingClientRect();
      const offsetLeft = tabRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = offsetLeft - container.clientWidth / 2 + tabRect.width / 2;

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeItemIndex]);

  const handleNext = () => {
    setActiveItemIndex((prev) => (prev + 1) % scheduleItems.length);
    setIsBioExpanded(false);
  };

  const handlePrev = () => {
    setActiveItemIndex(
      (prev) => (prev - 1 + scheduleItems.length) % scheduleItems.length
    );
    setIsBioExpanded(false);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case "break":
        return faMugHot;
      case "opening":
        return faTicket;
      case "closing":
        return faFlagCheckered;
      case "workshop":
        return faChalkboardTeacher;
      default:
        return faMicrophone;
    }
  };

  return (
    <section id="schedule" className="section-shell relative overflow-hidden">
      {/* Ambient background lights */}
      <div
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[rgba(94,23,235,0.18)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-[rgba(81,207,145,0.14)] blur-3xl"
        aria-hidden
      />

      <PageContainer className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            label={`Evento ${scheduleData.date}`}
            title="Programação Completa"
            align="center"
            className="mb-4"
          />
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            Navegue pelo cronograma do dia, confira as palestras em destaque e
            as oficinas práticas nos laboratórios.
          </p>
        </ScrollReveal>

        {/* Unified Schedule Component (Top List + Big Responsive Card) */}
        <div className="max-w-5xl mx-auto">
          {/* Navigation Controls: Counter & Prev/Next Arrows */}
          <div className="flex items-center justify-between gap-3 mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-lg bg-accent/15 px-2.5 py-1 font-mono text-xs font-bold text-accent">
                {String(activeItemIndex + 1).padStart(2, "0")} /{" "}
                {String(scheduleItems.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs font-semibold text-text-muted hidden xs:inline-block">
                {currentItem.time}
              </span>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Atividade anterior"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-text-secondary transition-all hover:border-accent/40 hover:bg-[#202020] hover:text-accent active:scale-95"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima atividade"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-text-secondary transition-all hover:border-accent/40 hover:bg-[#202020] hover:text-accent active:scale-95"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Top Scrollable List of Schedule Items */}
          <div className="relative mb-6">
            <div
              ref={tabsContainerRef}
              role="tablist"
              aria-label="Lista de atividades da programação"
              className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:#333_transparent]"
            >
              {scheduleItems.map((item, index) => {
                const isActive = activeItemIndex === index;
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => {
                      setActiveItemIndex(index);
                      setIsBioExpanded(false);
                    }}
                    className={`flex items-center gap-2 shrink-0 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-base cursor-pointer select-none ${isActive
                      ? "border border-accent/60 bg-[#1e1e1e] text-text-primary shadow-[0_0_16px_rgba(81,207,145,0.2)] ring-1 ring-accent/40"
                      : "border border-[#262626] bg-[#141414] text-text-muted hover:border-[rgba(81,207,145,0.25)] hover:bg-[#181818] hover:text-text-secondary"
                      }`}
                  >
                    <span
                      className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-md font-mono text-[10px] sm:text-[11px] font-bold ${isActive
                        ? "bg-accent text-black"
                        : "bg-white/5 text-text-muted"
                        }`}
                    >
                      {item.shortTime}
                    </span>
                    <span className="whitespace-nowrap">{item.tabLabel}</span>
                    {item.isConfirmed && (
                      <span
                        className="h-2 w-2 rounded-full bg-accent shrink-0 animate-pulse"
                        title="Palestrante Confirmado"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* The Big Schedule Card - Solid, Responsive & Unified */}
          <ScrollReveal>
            <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-[rgba(81,207,145,0.25)] bg-[#161616] shadow-xl">
              {/* Background ambient radial glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[rgba(94,23,235,0.18)] blur-3xl"
                aria-hidden
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
                {/* Left Main Content */}
                <div className="p-5 sm:p-7 lg:p-9 flex flex-col justify-between">
                  <div>
                    {/* Meta Badges */}
                    <div className="mb-4 sm:mb-5 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-bold text-accent">
                        <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                        {currentItem.time}
                      </span>
                      <span className="rounded-full border border-[#262626] bg-[rgba(255,255,255,0.03)] px-3 py-1 font-mono text-xs text-text-muted truncate max-w-[200px] sm:max-w-none">
                        {currentItem.stage}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold ml-auto">
                        {currentItem.badge}
                      </span>
                    </div>

                    {/* Speaker / Facilitator Info */}
                    <div className="flex items-center gap-3.5 sm:gap-5 mb-5 sm:mb-6">
                      {currentItem.photo ? (
                        <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-accent/40 shadow-glow bg-[#1a1a1a]">
                          <Image
                            src={currentItem.photo}
                            alt={`Foto de ${currentItem.speaker}`}
                            width={160}
                            height={160}
                            className="h-full w-full object-cover object-top"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="flex h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl border border-[#262626] bg-[rgba(255,255,255,0.03)] text-text-muted">
                          <FontAwesomeIcon
                            icon={getItemIcon(currentItem.type)}
                            className="h-6 w-6 sm:h-8 sm:w-8 text-accent/60"
                          />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text-primary leading-tight truncate">
                          {currentItem.speaker}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-text-secondary mt-1">
                          {currentItem.role}
                          {currentItem.company && (
                            <>
                              {" "}
                              ·{" "}
                              <span className="text-accent font-semibold">
                                {currentItem.company}
                              </span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Activity / Talk Title */}
                    <div className="mb-4">
                      <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-accent font-bold mb-1">
                        Atividade
                      </p>
                      <h4 className="font-heading text-base sm:text-lg md:text-xl font-bold text-text-primary leading-snug break-words">
                        {currentItem.title}
                      </h4>
                    </div>

                    {/* Description Box */}
                    <div className="rounded-xl border border-[rgba(81,207,145,0.2)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-5 mb-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold mb-1">
                        Sobre a Atividade
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                        {currentItem.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column / Aside: Highlights & Biography */}
                <aside className="flex flex-col justify-between border-t border-[#262626] bg-[rgba(255,255,255,0.02)] p-5 sm:p-7 lg:p-8 lg:border-l lg:border-t-0">
                  <div>
                    <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={
                          currentItem.bio ? faGraduationCap : faCircleCheck
                        }
                        className="text-accent"
                      />
                      Destaques da Sessão
                    </h4>

                    {currentItem.highlights && (
                      <ul className="space-y-2.5 sm:space-y-3 mb-6">
                        {currentItem.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary"
                          >
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Expandable Biography (Shown if available) */}
                    {currentItem.bio && (
                      <div className="border-t border-[#262626] pt-4 mt-4">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setIsBioExpanded(!isBioExpanded)}
                            aria-expanded={isBioExpanded}
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-accent transition-colors hover:text-accent-hover active:scale-95 cursor-pointer"
                          >
                            <span>
                              {isBioExpanded
                                ? "Ocultar mini biografia"
                                : "Ver biografia completa"}
                            </span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`h-3 w-3 transition-transform duration-base ${isBioExpanded ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                        </div>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isBioExpanded
                            ? "grid-rows-[1fr] opacity-100 mt-3"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-xs sm:text-sm leading-relaxed text-text-secondary bg-[rgba(255,255,255,0.02)] border border-[#262626] rounded-xl p-3.5 sm:p-4">
                              {currentItem.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-5 mt-5 border-t border-[#262626]">
                    <Button
                      href={currentItem.actionUrl}
                      variant={currentItem.isConfirmed ? "primary" : "secondary"}
                      className="w-full justify-center text-center text-xs sm:text-sm py-3"
                    >
                      {currentItem.actionLabel}
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="ml-2 w-3.5 h-3.5"
                      />
                    </Button>
                  </div>
                </aside>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
