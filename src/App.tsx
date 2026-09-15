import Contact  from "./sections/Contact"
import './App.css'
import MobileNav from './Components/MobileNav'
import Sidebar from './Components/Sidebar'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { useState, useEffect } from "react"


function App() {
const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.1,
      
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <>

    <div className='flex'>
      <div className='hidden sm:flex'>
          <Sidebar activeSection={activeSection}  />
      </div>
      <div className='flex sm:hidden'>
         <MobileNav activeSection={activeSection}/>
      </div>
        <main className=" overflow-hidden ml-0 sm:ml-64 w-full bg-(--bg) text-(--text) ">
        
          <Hero/>

          <section id="about"  className="min-h-screen px-10 lg:px-5 py-20 border-b border-(--border)">
            <About/>
          </section>

          <section id="experience"  className="min-h-screen px-10 lg:px-5 py-20 border-b border-(--border)">
            <Experience/>
          </section>

          <section id="skills" className="min-h-screen px-10 lg:px-5 py-20 border-b border-(--border)">
            <Skills/>
          </section>

          <section id="projects" className="min-h-screen px-10 lg:px-5 py-20">
            <Projects/>
          </section>

          <section id="contact" className="min-h-screen px-10  pb-20">
            <Contact/>
          </section>

      </main>

   </div>
    </>
  )
}

export default App
