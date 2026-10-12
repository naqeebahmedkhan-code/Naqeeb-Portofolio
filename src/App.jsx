import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <ScrollProgress progress={scrollProgress} />
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main id="main-content" className="pt-16">
        <AnimatePresence mode="wait">
          <Hero key="hero" id="home" />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <About key="about" id="about" />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <Experience key="experience" id="experience" />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <Skills key="skills" id="skills" />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <Projects key="projects" id="projects" />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <Education key="education" id="education" />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <Contact key="contact" id="contact" />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App