import Container from "../components/ui/Container";
import { skills, skillCategories } from "../data/skills";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";


export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <Container>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            {t("skills.sectionTitle")}
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
              {t("skills.title")}{" "}
              <span className="text-gradient">{t("skills.titleAccent")}</span>
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t("skills.description")}
            </p>
          </div>

          <div className="lg:col-span-3 grid gap-8">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {t(`skills.categories.${category.name}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            {t("skills.allTech")}
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className={cn(
                  "px-4 py-2 rounded-full border text-sm transition-all duration-300 cursor-default border-border bg-secondary/30 text-muted-foreground hover:text-foreground hover:border-primary/30",
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}