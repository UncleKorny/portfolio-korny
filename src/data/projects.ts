import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    key: "projects.belarusShop",
    stack: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    link: "https://github.com/UncleKorny/KornyshonShop",
    featured: true,
  },
  {
    key: "projects.classroomClone",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    link: "https://github.com/UncleKorny/VitRoom",
    featured: true,
  },
  {
    key: "projects.sudokuGame",
    stack: ["C++", "Qt"],
    link: "https://github.com/UncleKorny/sudokubymkorny",
    featured: false,
  },
  {
    key: "projects.pixelArt",
    stack: ["React", "Node.js", "TypeScript", "Electron"],
    link: "https://github.com/UncleKorny/pixel-art-electron",
    featured: false,
  },
  {
    key: "projects.boomBot",
    stack: ["Node.js", "Telegram"],
    link: "#",
    featured: false,
  },
];
