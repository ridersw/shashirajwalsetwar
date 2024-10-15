import React from "react";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  return (
    <div className="App relative min-h-screen bg-gray-100">
      <BackgroundAnimation />
      <Navigation />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="home">
          <Introduction />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-indigo-800 text-white py-4 text-center relative z-10">
        <p>&copy; 2024 Shashiraj Walsetwar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
