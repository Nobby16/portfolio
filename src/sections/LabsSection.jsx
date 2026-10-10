import labTopics from '../data/labTopics.js'
import SkillIcon from '../components/SkillIcon.jsx'

function LabsSection() {
  return (
    <section className="page-section section-reveal" id="labs" aria-labelledby="labs-title" data-section-reveal>
      <div className="section-inner">
        <p className="eyebrow">Hands-on learning</p>
        <h2 id="labs-title">Cybersecurity Labs</h2>
        <p className="labs-intro">
          A collection of hands-on cybersecurity and systems labs used to build practical
          understanding of Linux, networking, web security, and security tooling.
        </p>
        <ul className="lab-topic-grid" aria-label="Areas explored in hands-on labs">
          {labTopics.map(({ name, icon }) => (
            <li className="lab-topic surface" key={name}>
              <SkillIcon name={icon} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default LabsSection
