import Container from "../components/ui/Container";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next"; // <-- подключаем i18n

export default function Projects() {
  const { t } = useTranslation();

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
            {t("projects.title", "Проекты")} <span className="text-gradient">{t("projects.subtitle", "работы")}</span>
          </h2>

          <a
            href="https://github.com/UncleKorny?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>{t("projects.viewAll", "Смотреть все на GitHub")}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <a
              key={project.key}
              href={project.link}
              className={cn(
                "group relative flex flex-col p-8 rounded-2xl border border-border bg-secondary/20 overflow-hidden",
                "hover:border-primary/50 transition-all duration-500",
                "before:absolute before:inset-0 before:bg-linear-to-b before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
              )}
            >
              <div className="absolute top-6 right-6 text-7xl font-bold text-secondary/30 select-none">
                0{index + 1}
              </div>

              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Featured
                </div>

                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {t(`${project.key}.title`)}
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t(`${project.key}.description`)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-background/50 border border-border text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>{t("projects.openProject", "Открыть проект")}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <a
              key={project.key}
              href={project.link}
              className="group relative p-6 rounded-xl border border-border bg-secondary/10 hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <svg
                  className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>

                <svg
                  className="w-5 h-5 text-muted-foreground/50 -translate-y-1 translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>

              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {t(`${project.key}.title`)}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {t(`${project.key}.description`)}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground/70">
                    {tech}
                    {project.stack.indexOf(tech) < Math.min(project.stack.length, 3) - 1 && " •"}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
