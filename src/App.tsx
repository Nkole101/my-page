import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PageIndicator } from "./components/PageIndicator";
import { PageSection } from "./components/ui/PageSection";

export default function App() {
  return (
    <div className="relative h-dvh overflow-hidden bg-bg font-sans text-text antialiased">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <PageIndicator />

      <main id="main" className="scroll-root">
        <PageSection id="hero" theme="hero" className="relative">
          <Hero />
        </PageSection>

        <PageSection id="about" theme="lime">
          <About />
        </PageSection>

        <PageSection id="projects" theme="blue" scrollable>
          <Projects />
        </PageSection>

        <PageSection id="stack" theme="light">
          <TechStack />
        </PageSection>

        <PageSection id="experience" theme="forest" scrollable>
          <Experience />
        </PageSection>

        <PageSection id="skills" theme="lime">
          <Skills />
        </PageSection>

        <PageSection id="education" theme="light">
          <Education />
        </PageSection>

        <PageSection id="contact" theme="forest" center={false}>
          <Contact />
          <Footer />
        </PageSection>
      </main>
    </div>
  );
}
