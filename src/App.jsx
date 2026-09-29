import { useState, useCallback } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SkillTree from './components/SkillTree'
import Contact from './components/Contact'

import LoadingScreen from './components/LoadingScreen'
import AmbientBackground from './components/AmbientBackground'

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <LoadingScreen onFinish={handleLoadingComplete} />
  }

  return (
    <div className="relative min-h-screen bg-[#070B12] text-white">

      {/* Background stays completely independent of page layout */}
      <AmbientBackground />

      {/* Portfolio */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <div className="hidden lg:block lg:h-24 min-[1440px]:h-32" />
          <Experience />
          <div className="hidden lg:block lg:h-24 min-[1440px]:h-32" />
          <Projects />
          <div className="hidden lg:block lg:h-24 min-[1440px]:h-32" />
          <SkillTree />
          <div className="hidden lg:block lg:h-24 min-[1440px]:h-32" />
          <Contact />
        </main>
      </div>

    </div>
  )
}

export default App