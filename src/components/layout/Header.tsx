import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };
  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-background/70 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#home" className="relative text-xl font-bold tracking-tight group">
          <span className="text-foreground">Korny</span>
          <span className="text-gradient">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* 🔥 Кнопка языка */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-xl cursor-pointer border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
          >
            {i18n.language === "ru" ? "RU" : "EN"}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>{t("nav.contactBtn")}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Открыть меню"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <Container className="py-4 flex flex-col gap-2">
          {/* 🔥 Язык в мобильном меню */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-3 border border-border rounded-lg text-left text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            {i18n.language === "ru" ? "Switch to English" : "Переключить на Русский"}
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-center font-semibold"
          >
            {t("nav.contactBtn")}
          </a>
        </Container>
      </div>
    </header>
  );
}