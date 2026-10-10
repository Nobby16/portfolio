import SkillIcon from './SkillIcon.jsx'
import technologyIcons from '../data/technologyIcons.js'

function SkillItem({ name, icon }) {
  return (
    <li className="skill-item">
      <SkillIcon name={technologyIcons[name] ?? icon} />
      <span>{name}</span>
    </li>
  )
}

export default SkillItem
