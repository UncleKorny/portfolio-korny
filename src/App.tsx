import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <Header />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
