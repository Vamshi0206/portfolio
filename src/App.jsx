import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans relative">
      <Navbar />
      <ParticlesBackground />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
