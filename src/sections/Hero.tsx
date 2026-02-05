import Container from "../components/ui/Container";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse delay-1000" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            <span className="text-sm text-muted-foreground">
              {t("hero.openToOffers")}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-balance">
            {t("hero.hello")}{" "}
            <span className="text-gradient">Korny,</span>
            <br />
            <span className="text-muted-foreground">{t("hero.role")}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{t("hero.stack")}</span>

            <div className="flex items-center gap-3">
              {["Node.js", "TypeScript", "Express", "PostgreSQL", "ORM"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-secondary/80 text-foreground text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-primary"
            >
              <span className="relative z-10">{t("hero.projectsBtn")}</span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-transparent text-foreground font-semibold transition-all duration-300 hover:bg-secondary hover:border-primary/50"
            >
              <span>{t("hero.contactBtn")}</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">
              {t("hero.scroll")}
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
