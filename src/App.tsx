import './App.css'
import MobileNav from './Components/MobileNav'
import Sidebar from './Components/Sidebar'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Skills from './sections/Skills'


function App() {


  return (
    <>

    <div className='flex'>
      <div className='hidden sm:flex'>
          <Sidebar />
      </div>
      <div className='flex sm:hidden'>
         <MobileNav/>
      </div>
        <main className="ml-0 sm:ml-64 w-full bg-(--bg) text-(--text) ">
      {/* <ThemeToggle/> */}
        
          <Hero/>

          <section id="about"  className="min-h-screen px-10 lg:px-5 py-20 border-b border-(--border)">
            <About/>
          </section>

          <section id="experience"  className="min-h-screen px-10 lg:px-5 py-20 border-b border-(--border)">
            <Experience/>
          </section>

          <section id="skills" border-b  className="min-h-screen px-10 lg:px-5 py-20 border-b border-(--border)">
            <Skills/>
          </section>

          <section id="projects" className="min-h-screen px-10 lg:px-20 py-20">
            Projects
          </section>

          <section id="contact" className="min-h-screen px-10 lg:px-20 py-20">
            Contact
          </section>

      </main>

   </div>
    </>
  )
}

export default App
