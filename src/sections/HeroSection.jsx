import { useState } from 'react'
import SocialIcon from '../components/SocialIcon.jsx'

const profiles = [
  { name: 'GitHub', href: 'https://github.com/Nobby16' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kidus-admassu' },
]

function HeroSection() {
  const [photoAvailable, setPhotoAvailable] = useState(true)

  return (
    <section className="hero-section page-width" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Kidus Admassu</p>
        <h1 id="hero-title">
          <span className="headline-role">Information Systems Graduate</span>
          <span className="headline-role"><span className="headline-divider" aria-hidden="true">|</span> Cybersecurity</span>
          <span className="headline-role"><span className="headline-divider" aria-hidden="true">|</span> Junior Web Developer</span>
        </h1>
        <p className="hero-summary">
          I build practical software projects and develop hands-on skills across IT,
          cybersecurity, networking, and systems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects</a>
          <a className="button button-secondary" href="/Kidus_Admassu_CV.pdf" target="_blank" rel="noreferrer" aria-label="View CV PDF in a new tab">View CV</a>
        </div>
        <ul className="social-links" aria-label="Profile links">
          {profiles.map(({ name, href }) => (
            <li key={name}><a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={name}><SocialIcon name={name} /></a></li>
          ))}
        </ul>
      </div>
      <div className="hero-portrait" aria-label="Portrait of Kidus Admassu">
        {photoAvailable ? (
          <img src="/images/kidus-admassu.jpg" alt="Portrait of Kidus Admassu" onError={() => setPhotoAvailable(false)} />
        ) : (
          <span aria-hidden="true">KA</span>
        )}
      </div>
    </section>
  )
}

export default HeroSection
