import Container from "../components/ui/Container";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            title: t("about.features.backend.title"),
            description: t("about.features.backend.description"),
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            ),
            title: t("about.features.databases.title"),
            description: t("about.features.databases.description"),
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v5m0 0H8m4 0h4M4 4h16v8H4V4z" />
                </svg>
            ),
            title: t("about.features.devops.title"),
            description: t("about.features.devops.description"),
        },
    ];

    const stats = [
        { value: "2+", label: t("about.stats.experience") },
        { value: "15+", label: t("about.stats.projects") },
        { value: "24/7", label: t("about.stats.quality") },
    ];
    return (
        <section id="about" className="relative py-32">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <Container>
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 max-w-12 bg-primary" />
                    <span className="text-sm font-medium text-primary tracking-wider uppercase">
                        {t("about.sectionTitle")}
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
                            {t("about.title")}{" "}
                            <span className="text-gradient">{t("about.titleAccent")}</span>
                        </h2>

                        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                            {t("about.description1")}
                        </p>

                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            {t("about.description2")}
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group relative p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4 text-6xl font-bold text-secondary/50 select-none">
                                    0{index + 1}
                                </div>

                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold text-foreground">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
