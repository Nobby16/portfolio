import SkillGroup from '../components/SkillGroup.jsx'
import skillGroups from '../data/skills.js'

function SkillsSection() {
  return (
    <section className="page-section section-reveal" id="skills" aria-labelledby="skills-title" data-section-reveal>
      <div className="section-inner">
        <h2 id="skills-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} skills={group.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
