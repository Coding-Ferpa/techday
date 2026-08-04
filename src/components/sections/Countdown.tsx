"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageContainer from "@/components/layout/PageContainer";

const EVENT_DATE = new Date("2026-10-24T08:00:00-03:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = EVENT_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  const timeUnits = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="py-10 sm:py-12 bg-bg-surface/40 backdrop-blur-sm">
      <PageContainer>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="font-mono text-caption text-accent uppercase tracking-widest block mb-1">
                Contagem Regressiva
              </span>
              <h3 className="text-heading-2 font-bold text-text-primary font-heading">
                O evento começa em
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full md:w-auto max-w-lg md:max-w-none mx-auto md:mx-0">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center p-2.5 sm:p-5 rounded-xl border border-accent/20 bg-bg-elevated/80 shadow-glow min-w-0"
                >
                  <span className="font-mono text-2xl sm:text-4xl md:text-5xl font-extrabold text-accent tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-caption text-text-muted font-mono uppercase text-[10px] sm:text-xs mt-1">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
