import './App.css'
import Sidebar from './Components/Sidebar'
import Hero from './sections/Hero'


function App() {


  return (
    <>

    <div className='flex'>
     <Sidebar />

        <main className="ml-64 w-full bg-(--bg) text-(--text)">
        
          <Hero/>

          <section id="about" className="min-h-screen px-10 lg:px-20 py-20">
            About
          </section>

          <section id="skills" className="min-h-screen px-10 lg:px-20 py-20">
            Skills
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
