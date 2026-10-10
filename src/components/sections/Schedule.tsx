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
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import scheduleData from "@/data/schedule.json";
import speakersData from "@/data/speakers.json";
import workshopsData from "@/data/workshops.json";
import { TICKET_URL } from "@/lib/constants";

interface ScheduleItem {
  id: string;
  shortTime: string;
  time: string;
  tabLabel: string;
  type: string;
  isConfirmed?: boolean;
  badge: string;
  stage: string;
  title: string;
  speaker: string;
  role: string;
  company?: string;
  photo?: string;
  photos?: string[];
  description: string;
  bio?: string;
  highlights?: string[];
  actionLabel: string;
  actionUrl: string;
}

export default function Schedule() {
  // Default to index 1 (Ubiratan Zakaib - 08:30)
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const [activeWorkshopIndex, setActiveWorkshopIndex] = useState(0);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // Mobile touch swipe handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const ubiratanSpeaker = speakersData.speakers.find(
    (s) => s.id === "ubiratan-zakaib"
  );
  const liszeilaSpeaker = speakersData.speakers.find(
    (s) => s.id === "liszeila-martingo"
  );
  const eustaquioSpeaker = speakersData.speakers.find(
    (s) => s.id === "eustaquio-rangel"
  );
  const henriqueSpeaker = speakersData.speakers.find(
    (s) => s.id === "henrique-amaral"
  );

  const scheduleItems: ScheduleItem[] = [
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
      id: "ubiratan-zakaib",
      shortTime: "08:30",
      time: "08:30 – 09:20",
      tabLabel: "Ubiratan Zakaib",
      type: "talk",
      isConfirmed: true,
      badge: "Palestra Magna · Confirmado",
      stage: "Palco Principal",
      title:
        ubiratanSpeaker?.talkTitle ||
        "Do Prompt à Exfiltração: Como Proteger Aplicações e Dados Corporativos na Era dos LLMs",
      speaker: ubiratanSpeaker?.name || "Ubiratan Zakaib do Nascimento",
      role: ubiratanSpeaker?.role || "Professor",
      company: ubiratanSpeaker?.company || "IFSP Campus Votuporanga",
      photo: ubiratanSpeaker?.photo || "/assets/UbiratanZakaib.jpeg",
      description:
        ubiratanSpeaker?.talkTopic ||
        "Uma abordagem prática sobre como identificar vulnerabilidades, prevenir riscos de exfiltração e proteger aplicações e dados corporativos na era dos LLMs.",
      bio:
        ubiratanSpeaker?.bio ||
        "Mestre em Ciências Ambientais pela Universidade Brasil (2020) e Engenheiro de Computação (2004). Analista SOC, Especialista em Redes e Desenvolvimento Web, além de Licenciado em Engenharia de Computação. Docente do Instituto Federal em Votuporanga, atuando com Arquitetura de Computadores, Segurança da Informação, Linux e Nuvem. Traz expressiva experiência em P&D voltada à gestão ambiental urbana, destacando-se pela autoria do Sistema de Informações Ambientais de Fernandópolis (SisFERGEO) e publicações aplicadas em SIGWEB. Sua expertise prática conta com mais de 18 anos com servidores, segurança da informação, infraestrutura e Linux. Palestrante em diversos eventos, sendo mais relevantes as participações no Latinoware 2013, 2020 (remoto) e 2024. Entusiasta de Software Livre que busca fazer uma mistura de tecnologia e educação.",
      highlights: ubiratanSpeaker?.credentials || [
        "Docente do IFSP Votuporanga e Mestre em Ciências Ambientais",
        "Mais de 18 anos de experiência com servidores, infraestrutura, segurança e Linux",
        "Analista SOC, autor do SisFERGEO e palestrante no Latinoware (2013, 2020 e 2024)",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
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
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
    },
    {
      id: "oficinas",
      shortTime: "13:30",
      time: "13:30 – 16:30",
      tabLabel: "Oficinas Práticas",
      type: "workshop",
      isConfirmed: true,
      badge: "Bloco Único · 3 Salas Simultâneas",
      stage: "Laboratórios Unifef",
      title: "Minicursos & Oficinas Mão na Massa",
      speaker: "Isabella Kobayachi · Tarsísio Xavier · Pedro Masson & Gabriel Garcia",
      role: "Facilitadores Convidados",
      company: "Laboratórios de Informática Unifef",
      photos: [
        "/assets/Isabela-Kobayachi.jpeg",
        "/assets/tarcisio-xavier.jpeg",
        "/assets/pedro-masson.jpeg",
        "/assets/gabriel-garcia.jpeg",
      ],
      description:
        "Bloco único de oficinas práticas nos laboratórios de informática da Unifef. Três minicursos imperdíveis acontecendo simultaneamente em paralelo durante a tarde: Machine Learning com Scikit-learn, Monitoramento com Grafana e Git & GitHub do caos ao commit.",
      highlights: [
        "Introdução a Machine Learning com Scikit-learn (Isabella Miki Kobayachi)",
        "Monitoramento com Grafana, Prometheus e Loki (Tarsísio Xavier)",
        "Do caos ao commit — Git e GitHub (Pedro Masson e Gabriel Garcia)",
      ],
      actionLabel: "Garantir Ingresso",
      actionUrl: TICKET_URL,
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

  // Mobile swipe gestures
  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
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
    <section id="schedule" className="relative overflow-hidden py-8 sm:py-12 md:py-14">
      {/* Ambient background lights */}
      <div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[rgba(94,23,235,0.16)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-[rgba(81,207,145,0.12)] blur-3xl"
        aria-hidden
      />

      <PageContainer className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            label={`Evento ${scheduleData.date}`}
            title="Programação Completa"
            align="center"
            className="mb-1.5 sm:mb-2"
          />
          <p className="text-body text-text-secondary text-center max-w-xl mx-auto mb-4 sm:mb-5 text-xs sm:text-sm">
            Navegue pelo cronograma do dia, confira as palestras em destaque e
            as oficinas práticas nos laboratórios.
          </p>
        </ScrollReveal>

        {/* Unified Schedule Component */}
        <div className="max-w-5xl mx-auto">
          {/* Top Bar: Counter, Active Time & Controls */}
          <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5 px-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-lg bg-accent/15 px-2.5 py-0.5 font-mono text-xs font-bold text-accent">
                {String(activeItemIndex + 1).padStart(2, "0")} / {String(scheduleItems.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs font-semibold text-text-secondary">
                {currentItem.time}
              </span>
            </div>

            {/* Hint & Prev/Next Arrows */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-text-muted hidden md:inline-block">
                Navegue pelas setas ou clique nos horários
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-text-muted md:hidden">
                Deslize o card ← →
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Atividade anterior"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-text-secondary transition-all hover:border-accent/40 hover:bg-[#202020] hover:text-accent active:scale-95 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próxima atividade"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-text-secondary transition-all hover:border-accent/40 hover:bg-[#202020] hover:text-accent active:scale-95 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Scrollable Tabs with Gradient Fade */}
          <div className="relative mb-3.5 sm:mb-4">
            <div className="pointer-events-none absolute left-0 top-0 bottom-1 w-5 sm:w-8 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-1 w-5 sm:w-8 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

            <div
              ref={tabsContainerRef}
              role="tablist"
              aria-label="Lista de horários da programação"
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 pt-0.5 px-3 sm:px-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:#333_transparent]"
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
                    className={`flex items-center gap-1.5 sm:gap-2 shrink-0 rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-semibold transition-all duration-base cursor-pointer select-none ${
                      isActive
                        ? "border border-accent/70 bg-[#1e1e1e] text-text-primary shadow-[0_0_14px_rgba(81,207,145,0.2)] ring-1 ring-accent/40"
                        : "border border-[#262626] bg-[#141414] text-text-muted hover:border-accent/30 hover:bg-[#181818] hover:text-text-secondary"
                    }`}
                  >
                    <span
                      className={`flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-md font-mono text-[10px] sm:text-[11px] font-bold ${
                        isActive
                          ? "bg-accent text-black"
                          : "bg-white/5 text-text-muted"
                      }`}
                    >
                      {item.shortTime}
                    </span>
                    <span className="whitespace-nowrap text-[11px] sm:text-xs">
                      {item.tabLabel}
                    </span>
                    {item.isConfirmed && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 animate-pulse"
                        title="Confirmado"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* The Schedule Card (Compact, Touch Swipe, Viewport Ergonomic) */}
          <ScrollReveal>
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative mx-auto w-full overflow-hidden rounded-2xl border border-[rgba(81,207,145,0.25)] bg-[#161616] shadow-xl"
            >
              {/* Background ambient radial glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[rgba(94,23,235,0.18)] blur-3xl"
                aria-hidden
              />

              {currentItem.type === "workshop" ? (
                <div>
                  {/* Workshop Top Header: Meta & 3-Tab Segmented Selector */}
                  <div className="border-b border-[#262626] bg-[rgba(255,255,255,0.015)] px-4 py-3 sm:px-6 sm:py-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-bold text-accent">
                          <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                          {currentItem.time}
                        </span>
                        <span className="rounded-full border border-[#262626] bg-[rgba(255,255,255,0.03)] px-2.5 py-0.5 font-mono text-xs text-text-muted">
                          {currentItem.stage}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                        Bloco Único · 3 Salas Simultâneas
                      </span>
                    </div>

                    {/* Compact 3-Tab Segmented Selector for the 3 Workshops */}
                    <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1 rounded-xl bg-black/40 border border-[#262626]">
                      {workshopsData.workshops.map((w, wIdx) => {
                        const isWActive = activeWorkshopIndex === wIdx;
                        return (
                          <button
                            key={w.id}
                            type="button"
                            onClick={() => setActiveWorkshopIndex(wIdx)}
                            className={`flex items-center justify-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-1 sm:px-3 rounded-lg text-center transition-all cursor-pointer select-none ${
                              isWActive
                                ? "bg-[#222222] text-accent border border-accent/50 shadow-sm font-bold"
                                : "text-text-muted hover:text-text-secondary hover:bg-white/[0.03] border border-transparent"
                            }`}
                          >
                            {/* Instructor avatar(s) */}
                            <div className="flex items-center gap-1 shrink-0 hidden xs:flex">
                              {w.instructors.map((inst, i) => (
                                <div
                                  key={i}
                                  className="relative h-5 w-5 rounded-full overflow-hidden border border-border"
                                  title={inst.name}
                                >
                                  <Image
                                    src={inst.photo}
                                    alt={inst.name}
                                    width={20}
                                    height={20}
                                    className="h-full w-full object-cover object-top"
                                  />
                                </div>
                              ))}
                            </div>
                            <span className="text-[11px] sm:text-xs truncate">
                              <span className="sm:hidden">
                                {wIdx === 0
                                  ? "Scikit-learn"
                                  : wIdx === 1
                                  ? "Grafana"
                                  : "Git & GitHub"}
                              </span>
                              <span className="hidden sm:inline">
                                {wIdx === 0
                                  ? "Machine Learning"
                                  : wIdx === 1
                                  ? "Monitoramento Grafana"
                                  : "Git & GitHub"}
                              </span>
                            </span>
                            {isWActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 hidden sm:inline-block" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Workshop Details: Clean 2-Column Grid */}
                  {(() => {
                    const activeWorkshop =
                      workshopsData.workshops[activeWorkshopIndex] ||
                      workshopsData.workshops[0];
                    return (
                      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                        {/* Left Column: Workshop Info */}
                        <div className="p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
                          <div>
                            {/* Facilitator Row */}
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                              {activeWorkshop.instructors.length > 1 ? (
                                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                                  {activeWorkshop.instructors.map((inst, i) => (
                                    <div
                                      key={i}
                                      className="relative h-13 w-13 sm:h-15 sm:w-15 rounded-xl border-2 border-accent/40 shadow-glow overflow-hidden bg-[#1a1a1a] shrink-0"
                                      title={inst.name}
                                    >
                                      <Image
                                        src={inst.photo}
                                        alt={inst.name}
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-cover object-top"
                                      />
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="relative h-13 w-13 sm:h-15 sm:w-15 shrink-0 overflow-hidden rounded-xl border-2 border-accent/40 shadow-glow bg-[#1a1a1a]">
                                  <Image
                                    src={activeWorkshop.instructors[0].photo}
                                    alt={activeWorkshop.instructors[0].name}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover object-top"
                                  />
                                </div>
                              )}

                              <div className="min-w-0 flex-1">
                                <h4 className="font-heading text-base sm:text-lg font-bold text-text-primary leading-tight">
                                  {activeWorkshop.instructors
                                    .map((i) => i.name)
                                    .join(" e ")}
                                </h4>
                                <p className="text-xs font-medium text-text-secondary mt-0.5">
                                  {activeWorkshop.instructors.length > 1
                                    ? "Facilitadores Convidados"
                                    : activeWorkshop.instructors[0].role}{" "}
                                  ·{" "}
                                  <span className="text-accent font-semibold">
                                    {activeWorkshop.type}
                                  </span>
                                </p>
                              </div>
                            </div>

                            {/* Badges & Title */}
                            <div className="mb-2 sm:mb-2.5">
                              <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                                <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-accent">
                                  {activeWorkshop.duration}
                                </span>
                                <span className="rounded-md border border-[#2b2b2b] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-text-muted">
                                  Nível: {activeWorkshop.level}
                                </span>
                              </div>
                              <h4 className="font-heading text-base sm:text-lg font-bold text-text-primary leading-snug">
                                {activeWorkshop.title}
                              </h4>
                            </div>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                              {activeWorkshop.description}
                            </p>

                            {/* Target Audience */}
                            <div className="flex items-start gap-2 rounded-lg border border-[#262626] bg-[rgba(255,255,255,0.015)] p-2.5 text-xs text-text-muted mb-3">
                              <FontAwesomeIcon
                                icon={faUsers}
                                className="h-3.5 w-3.5 text-accent/70 mt-0.5 shrink-0"
                              />
                              <div>
                                <span className="font-semibold text-text-secondary">
                                  Público-alvo:{" "}
                                </span>
                                <span>{activeWorkshop.targetAudience}</span>
                              </div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {activeWorkshop.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md border border-[#262626] bg-[#141414] px-2 py-0.5 font-mono text-[10px] text-text-muted"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Highlights & CTA */}
                        <aside className="flex flex-col justify-between border-t border-[#262626] bg-[rgba(255,255,255,0.015)] p-4 sm:p-6 lg:p-7 lg:border-l lg:border-t-0">
                          <div>
                            <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent font-bold flex items-center gap-2">
                              <FontAwesomeIcon
                                icon={faLightbulb}
                                className="text-accent"
                              />
                              Destaques Desta Oficina
                            </h4>

                            <ul className="space-y-2 mb-4">
                              {activeWorkshop.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-snug"
                                >
                                  <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0"
                                  />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="rounded-xl border border-[#262626] bg-[rgba(255,255,255,0.02)] p-3 text-xs text-text-muted leading-relaxed">
                              <p className="font-semibold text-text-secondary mb-0.5 flex items-center gap-1.5">
                                <FontAwesomeIcon
                                  icon={faChalkboardTeacher}
                                  className="text-accent"
                                />
                                Laboratórios de Informática Unifef
                              </p>
                              <p>
                                Salas climatizadas com computadores e estrutura completa. As 3 oficinas acontecem simultaneamente das 13:30 às 16:30. Vagas preenchidas por ordem de chegada no laboratório.
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-[#262626]">
                            <Button
                              href={TICKET_URL}
                              variant="primary"
                              className="w-full justify-center text-center text-xs sm:text-sm py-2.5 sm:py-3"
                            >
                              Garantir Ingresso
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                className="ml-2 w-3.5 h-3.5"
                              />
                            </Button>
                          </div>
                        </aside>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                  {/* Left Column: Speaker & Activity Info */}
                  <div className="p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
                    <div>
                      {/* Meta Badges */}
                      <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-bold text-accent">
                          <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                          {currentItem.time}
                        </span>
                        <span className="rounded-full border border-[#262626] bg-[rgba(255,255,255,0.03)] px-2.5 py-0.5 font-mono text-xs text-text-muted truncate max-w-[200px] sm:max-w-none">
                          {currentItem.stage}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold ml-auto">
                          {currentItem.badge}
                        </span>
                      </div>

                      {/* Speaker / Facilitator Info */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        {currentItem.photos && currentItem.photos.length > 0 ? (
                          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                            {currentItem.photos.map((src, idx) => (
                              <div
                                key={idx}
                                className="relative h-13 w-13 sm:h-15 sm:w-15 rounded-xl border-2 border-accent/40 shadow-glow overflow-hidden bg-[#1a1a1a] shrink-0"
                              >
                                <Image
                                  src={src}
                                  alt="Foto do facilitador"
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover object-top"
                                />
                              </div>
                            ))}
                          </div>
                        ) : currentItem.photo ? (
                          <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 shrink-0 overflow-hidden rounded-xl border-2 border-accent/40 shadow-glow bg-[#1a1a1a]">
                            <Image
                              src={currentItem.photo}
                              alt={`Foto de ${currentItem.speaker}`}
                              width={72}
                              height={72}
                              className="h-full w-full object-cover object-top"
                              priority
                            />
                          </div>
                        ) : (
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl border border-[#262626] bg-[rgba(255,255,255,0.03)] text-text-muted">
                            <FontAwesomeIcon
                              icon={getItemIcon(currentItem.type)}
                              className="h-5 w-5 sm:h-6 sm:w-6 text-accent/60"
                            />
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <h3 className="font-heading text-base sm:text-lg font-bold text-text-primary leading-tight break-words">
                            {currentItem.speaker}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-text-secondary mt-0.5">
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

                      {/* Activity Title */}
                      <div className="mb-2 sm:mb-2.5">
                        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent font-bold mb-0.5">
                          Atividade
                        </p>
                        <h4 className="font-heading text-base sm:text-lg font-bold text-text-primary leading-snug break-words">
                          {currentItem.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                        {currentItem.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Highlights, Bio & Action */}
                  <aside className="flex flex-col justify-between border-t border-[#262626] bg-[rgba(255,255,255,0.015)] p-4 sm:p-6 lg:p-7 lg:border-l lg:border-t-0">
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent font-bold flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={
                            currentItem.bio ? faGraduationCap : faCircleCheck
                          }
                          className="text-accent"
                        />
                        Destaques da Sessão
                      </h4>

                      {currentItem.highlights && (
                        <ul className="space-y-2 mb-4">
                          {currentItem.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-snug"
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

                      {/* Expandable Biography */}
                      {currentItem.bio && (
                        <div className="border-t border-[#262626] pt-3 mt-3">
                          <button
                            type="button"
                            onClick={() => setIsBioExpanded(!isBioExpanded)}
                            aria-expanded={isBioExpanded}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent transition-colors hover:text-accent-hover active:scale-95 cursor-pointer"
                          >
                            <span>
                              {isBioExpanded
                                ? "Ocultar minibiografia"
                                : "Ver biografia completa"}
                            </span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`h-2.5 w-2.5 transition-transform duration-base ${
                                isBioExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                              isBioExpanded
                                ? "grid-rows-[1fr] opacity-100 mt-2.5"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-xs leading-relaxed text-text-secondary bg-[rgba(255,255,255,0.02)] border border-[#262626] rounded-xl p-3 max-h-48 overflow-y-auto">
                                {currentItem.bio}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action CTA Button */}
                    <div className="pt-4 mt-4 border-t border-[#262626]">
                      <Button
                        href={currentItem.actionUrl}
                        variant={currentItem.isConfirmed ? "primary" : "secondary"}
                        className="w-full justify-center text-center text-xs sm:text-sm py-2.5 sm:py-3"
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
              )}

              {/* Mobile Quick Navigation Footer: Previous / Next buttons */}
              <div className="flex items-center justify-between border-t border-[#262626] bg-[#121212] px-4 py-2.5 sm:hidden">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary hover:text-accent active:scale-95 transition-all cursor-pointer"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3 text-accent" />
                  <span>Anterior</span>
                </button>

                <span className="font-mono text-[11px] text-text-muted">
                  {activeItemIndex + 1} de {scheduleItems.length}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover active:scale-95 transition-all cursor-pointer"
                >
                  <span>Próxima</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-accent" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
