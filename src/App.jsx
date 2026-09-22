import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SkillTree from './components/SkillTree'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#070B12] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillTree />
        <Contact />
      </main>
    </div>
  )
}

export default App