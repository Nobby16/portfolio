import SkillIcon from './SkillIcon.jsx'
import technologyIcons, { topicIcons } from '../data/technologyIcons.js'

function ProjectCard({ project }) {
  const availableLinks = project.links.filter((link) => link.href)
  const pendingLinks = project.links.filter((link) => !link.href)
  const topics = project.topics ?? []

  return (
    <article className="project-card surface" aria-labelledby={`${project.id}-title`}>
      <p className="project-category">{project.category}</p>
      <h3 id={`${project.id}-title`}>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      {project.context && <p className="project-context">{project.context}</p>}

      {project.technologies && (
        <div className="project-detail">
          <h4>Technologies</h4>
          <ul className="tag-list">
            {project.technologies.map((technology) => (
              <li className="tag technology-tag" key={technology}>
                <SkillIcon name={technologyIcons[technology] ?? 'code'} />
                <span>{technology}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topics.length > 0 && (
        <div className="project-detail">
          <h4>Topics</h4>
          <ul className="tag-list">
            {topics.map((topic) => (
              <li className="tag technology-tag" key={topic}>
                <SkillIcon name={topicIcons[topic] ?? 'shield-lock'} />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(availableLinks.length > 0 || pendingLinks.length > 0) && (
        <ul className="project-actions" aria-label={`${project.name} links`}>
          {availableLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}<span className="visually-hidden"> for {project.name}</span>
              </a>
            </li>
          ))}
          {pendingLinks.map((link) => (
            <li className="project-link-pending" key={link.label}>
              {link.label} link to be provided
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ProjectCard
