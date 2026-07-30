"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import { NAV_LINKS, TICKET_URL } from "@/lib/constants";

function resolveNavHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  const panelRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.overflow = "hidden";
    style.width = "100%";

    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }, 120);

    return () => {
      window.clearTimeout(timer);
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.overflow = "";
      style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`lg:hidden fixed inset-0 z-[100] transition-[visibility] duration-300 ${
        open ? "visible" : "invisible pointer-events-none delay-300"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Fechar menu de navegação"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`absolute top-0 right-0 flex h-full w-[min(100%,20.5rem)] flex-col border-l border-accent/20 bg-bg-primary/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          paddingTop: "var(--header-height)",
          paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-accent-secondary/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
          aria-hidden
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 pt-4">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Navegação
          </p>
          <p className="mb-6 text-lg font-bold text-text-primary font-heading">
            Ferpa Tech Day
          </p>

          <nav aria-label="Links principais">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => {
                const href = resolveNavHref(link.href, pathname);
                const useNativeAnchor =
                  link.href.startsWith("#") || href.startsWith("/#");
                const linkClass =
                  "group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3.5 transition-all duration-fast hover:border-accent/25 hover:bg-bg-elevated/90 active:scale-[0.99]";

                const content = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bg-surface font-mono text-xs font-bold text-accent/90 ring-1 ring-accent/20 transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </>
                );

                return (
                  <li
                    key={link.href}
                    className="animate-[mobileNavItem_0.45s_ease-out_both]"
                    style={{ animationDelay: open ? `${index * 45 + 80}ms` : "0ms" }}
                  >
                    {useNativeAnchor ? (
                      <a
                        href={href}
                        className={linkClass}
                        onClick={onClose}
                        tabIndex={open ? 0 : -1}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className={linkClass}
                        onClick={onClose}
                        tabIndex={open ? 0 : -1}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <Button
              href={TICKET_URL}
              external
              variant="primary"
              className="w-full justify-center py-3.5 text-caption shadow-glow"
              ariaLabel="Comprar ingresso para o Ferpa Tech Day"
            >
              <FontAwesomeIcon icon={faTicket} className="w-4 h-4" />
              Garantir Ingressos
            </Button>

            <Link
              href="/apresentacao"
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-bg-elevated/80 px-4 py-3 text-caption font-semibold text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              Apresentação institucional
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3.5 h-3.5 text-accent"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
