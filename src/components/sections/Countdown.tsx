"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
    <section className="py-12 bg-bg-surface/40 border-y border-border/60 backdrop-blur-sm">
      <div className="max-w-container mx-auto px-6 lg:px-10">
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

            <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full md:w-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl border border-accent/20 bg-bg-elevated/80 shadow-glow min-w-[70px] sm:min-w-[100px]"
                >
                  <span className="font-mono text-3xl sm:text-5xl font-extrabold text-accent">
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
      </div>
    </section>
  );
}
