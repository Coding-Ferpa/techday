"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import MobileNav from "@/components/layout/MobileNav";
import { NAV_LINKS, TICKET_URL } from "@/lib/constants";

function resolveNavHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, closeMenu]);

  const showBarBackground = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-base ${
          showBarBackground
            ? "bg-bg-primary/95 backdrop-blur-xl border-b border-[#262626] shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          height: "var(--header-height)",
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        <PageContainer className="h-full flex items-center justify-between gap-3">
          <Link
            href="/"
            className="relative z-[1] flex items-center gap-2 shrink-0 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Ferpa Tech Day — página inicial"
            onClick={closeMenu}
          >
            <Image
              src="/assets/logo-site.png"
              alt="Logo Ferpa Tech Day"
              width={160}
              height={80}
              className="h-8 sm:h-9 w-auto max-w-[9.5rem] sm:max-w-none"
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => {
              const href = resolveNavHref(link.href, pathname);
              const className =
                "text-caption font-medium text-text-secondary hover:text-text-primary px-3 py-2 rounded-md hover:bg-bg-elevated/80 transition-colors duration-fast";

              return link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link key={link.href} href={href} className={className}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={href} className={className}>
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="relative z-[1] flex items-center gap-2 shrink-0">
            <Button
              href={TICKET_URL}
              external
              variant="primary"
              className="hidden lg:inline-flex text-caption px-4 py-2"
              ariaLabel="Comprar ingresso para o Ferpa Tech Day"
            >
              Garantir Ingressos
            </Button>

            <button
              type="button"
              className={`lg:hidden menu-toggle relative flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-base outline-none ring-0 focus:outline-none focus-visible:!outline-none focus-visible:ring-0 [-webkit-tap-highlight-color:transparent] ${
                menuOpen
                  ? "bg-accent/15 text-accent"
                  : "bg-transparent text-text-primary hover:bg-bg-elevated/80 active:bg-bg-elevated"
              }`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                className={`w-5 h-5 transition-transform duration-base ${menuOpen ? "rotate-90 scale-110" : ""}`}
              />
            </button>
          </div>
        </PageContainer>
      </header>

      <MobileNav open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
