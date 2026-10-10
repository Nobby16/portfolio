import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AboutSection from './sections/AboutSection.jsx'
import CertificationsSection from './sections/CertificationsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import HeroSection from './sections/HeroSection.jsx'
import LabsSection from './sections/LabsSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import TimelineSection from './sections/TimelineSection.jsx'
import useSectionReveal from './hooks/useSectionReveal.js'
import { SHOW_CYBERSECURITY_LABS } from './data/siteConfig.js'
import './App.css'

function App() {
  useSectionReveal()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        {SHOW_CYBERSECURITY_LABS && <LabsSection />}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
