import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ru: {
        translation: {
            nav: {
                about: "Обо мне",
                skills: "Навыки",
                projects: "Проекты",
                contact: "Контакты",
                contactBtn: "Связаться",
            },
            footer: {
                rights: "Все права защищены.",
            },
            hero: {
                openToOffers: "Открыт к предложениям",
                hello: "Привет, я",
                role: "Backend Developer",
                description:
                    "Разрабатываю надёжные backend-системы, REST API и сервисы с упором на безопасность, производительность и чистую архитектуру.",
                stack: "Стек:",
                projectsBtn: "Смотреть проекты",
                contactBtn: "Связаться",
                scroll: "Scroll",
            },
            about: {
                sectionTitle: "Обо мне",
                title: "Превращаю идеи в",
                titleAccent: "надёжные backend-системы",

                description1:
                    "Я backend-разработчик, который проектирует и реализует серверные приложения, API и сервисы. Люблю чистую архитектуру, безопасность и оптимизацию.",
                description2:
                    "Мой подход — это надёжность и масштабируемость. Я стараюсь писать понятный код, строить правильную структуру проекта и делать систему устойчивой под нагрузкой.",

                stats: {
                    experience: "Года опыта",
                    projects: "Проектов",
                    quality: "Работоспособность",
                },

                features: {
                    backend: {
                        title: "Backend",
                        description: "Node.js, Express/NestJS, REST API, GraphQL, микросервисы",
                    },
                    databases: {
                        title: "Базы данных",
                        description: "PostgreSQL, Prisma, SQL, оптимизация запросов, индексы",
                    },
                    devops: {
                        title: "Инфраструктура",
                        description: "Docker, Linux, Git, CI/CD, деплой и мониторинг",
                    },
                },
            },
            skills: {
                sectionTitle: "Навыки",
                title: "Технологии которыми",
                titleAccent: "владею",
                description:
                    "Постоянно совершенствую навыки в backend-разработке, API, работе с базами и инфраструктурой. Ниже представлен мой текущий технический стек.",
                categories: {
                    Backend: "Backend",
                    Databases: "Базы данных",
                    "DevOps & Infra": "DevOps & Инфраструктура",
                },
                allTech: "Все технологии",
            },
            contact: {
                sectionTitle: "Контакты",
                title: "Давайте работать",
                titleAccent: "вместе",
                description: "Есть интересный проект или просто хотите поговорить? Свяжитесь со мной удобным способом.",
                actions: {
                    mail: "Написать письмо",
                    telegram: "Написать в Telegram",
                    github: "Посмотреть проекты",
                    linkedin: "Связаться в LinkedIn",
                    default: "Связаться",
                }
            },
            projects: {
                title: "Проекты",
                subtitle: "работы",
                viewAll: "Смотреть все на GitHub",
                openProject: "Открыть проект",
                belarusShop: {
                    title: "Белорусские сувениры (E-Shop)",
                    description:
                        "Интернет-магазин сувениров с корзиной, авторизацией и управлением товарами. Дипломная работа с полным стэком MERN.",
                },
                classroomClone: {
                    title: "Аналог Google Classroom",
                    description:
                        "Сайт для онлайн-обучения с курсами, пользователями и системой заданий. Дипломная работа с PostgreSQL и Prisma.",
                },
                sudokuGame: {
                    title: "Sudoku Desktop Game",
                    description:
                        "Десктоп-приложение-игра Судоку с генерацией доски и проверкой решений. Проект на C++ и Qt, демонстрирует навыки алгоритмов и UI.",
                },
                pixelArt: {
                    title: "Pixel Art Drawing (Electron)",
                    description:
                        "Приложение для рисования в стиле Pixel Art на Electron. В разработке, использует Node.js и TypeScript.",
                },
                boomBot: {
                    title: "Boom Телеграм Бот",
                    description: "Музыкальный телеграм бот с подписочной системой",
                }
            },
        },
    },
    en: {
        translation: {
            nav: {
                about: "About",
                skills: "Skills",
                projects: "Projects",
                contact: "Contacts",
                contactBtn: "Contact",
            },
            footer: {
                rights: "All rights reserved.",
            },
            hero: {
                openToOffers: "Open to opportunities",
                hello: "Hi, I'm",
                role: "Backend Developer",
                description:
                    "I build reliable backend systems, REST APIs and services with a focus on security, performance and clean architecture.",
                stack: "Stack:",
                projectsBtn: "View projects",
                contactBtn: "Contact me",
                scroll: "Scroll",
            },
            about: {
                sectionTitle: "About me",
                title: "Turning ideas into",
                titleAccent: "reliable backend systems",

                description1:
                    "I'm a backend developer who designs and builds server-side applications, APIs and services. I enjoy clean architecture, security and optimization.",
                description2:
                    "My approach is reliability and scalability. I focus on writing readable code, building solid project structure, and making systems stable under load.",

                stats: {
                    experience: "Years of experience",
                    projects: "Projects",
                    quality: "Working capacity",
                },

                features: {
                    backend: {
                        title: "Backend",
                        description: "Node.js, Express/NestJS, REST API, GraphQL, microservices",
                    },
                    databases: {
                        title: "Databases",
                        description: "PostgreSQL, Prisma, SQL, query optimization, indexes",
                    },
                    devops: {
                        title: "Infrastructure",
                        description: "Docker, Linux, Git, CI/CD, deployment & monitoring",
                    },
                },
            },
            skills: {
                sectionTitle: "Skills",
                title: "Technologies I",
                titleAccent: "master",
                description:
                    "I constantly improve my skills in backend development, APIs, databases and infrastructure. Below is my current technical stack.",
                categories: {
                    Backend: "Backend",
                    Databases: "Databases",
                    "DevOps & Infra": "DevOps & Infrastructure",
                },
                allTech: "All technologies",
            },
            contact: {
                sectionTitle: "Contact",
                title: "Let's work",
                titleAccent: "together",
                description: "Have an interesting project or just want to chat? Contact me in a convenient way.",
                actions: {
                    mail: "Send email",
                    telegram: "Message on Telegram",
                    github: "View projects",
                    linkedin: "Connect on LinkedIn",
                    default: "Contact",
                }
            },
            projects: {
                title: "Projects",
                subtitle: "works",
                viewAll: "View all on GitHub",
                openProject: "Open project",
                belarusShop: {
                    title: "Belarusian Souvenirs E-Shop",
                    description:
                        "Online souvenir store with cart, authentication and product management. Diploma project using full MERN stack.",
                },
                classroomClone: {
                    title: "Google Classroom Clone",
                    description:
                        "Online learning platform with courses, users, and assignments. Diploma project with PostgreSQL and Prisma.",
                },
                sudokuGame: {
                    title: "Sudoku Desktop Game",
                    description:
                        "Desktop Sudoku game with board generation and solution checking. Built with C++ and Qt, demonstrating algorithm and UI skills.",
                },
                pixelArt: {
                    title: "Pixel Art Drawing (Electron)",
                    description:
                        "Pixel Art drawing app built with Electron. In development, uses Node.js and TypeScript for cross-platform support.",
                },
                boomBot: {
                    title: "Boom Telegram Bot",
                    description: "A music telegram bot with a subscription system",
                }
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("lang") || "ru",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
