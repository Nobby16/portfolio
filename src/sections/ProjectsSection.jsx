import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import { SHOW_CYBERSECURITY_LABS } from '../data/siteConfig.js'

function ProjectsSection() {
  return (
    <section className="page-section section-reveal" id="projects" aria-labelledby="projects-title" data-section-reveal>
      <div className="section-inner">
        <h2 id="projects-title">Featured Projects</h2>
        <div className={`projects-grid${SHOW_CYBERSECURITY_LABS ? '' : ' projects-grid-two'}`}>
          {projects
            .filter((project) => SHOW_CYBERSECURITY_LABS || project.id !== 'cybersecurity-labs')
            .map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
