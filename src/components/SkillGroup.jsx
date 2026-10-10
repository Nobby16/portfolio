import SkillItem from './SkillItem.jsx'

function SkillGroup({ title, skills }) {
  const headingId = `skill-group-${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`

  return (
    <article className="skill-group surface" aria-labelledby={headingId}>
      <h3 id={headingId}>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill) => <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />)}
      </ul>
    </article>
  )
}

export default SkillGroup
