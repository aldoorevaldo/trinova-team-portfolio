import Container from "./Container"
import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects"
import { Link } from "react-router-dom"

function ProjectSection() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  return (
    <section
      id="projects"
      className="bg-trinova-surface py-20 sm:py-24 lg:py-28"
    >
      <Container>

        {/* Heading */}
        <div className="flex items-end justify-between gap-8">
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title="Our Selected Works"
            description="A selection of projects that reflect our skills, ideas, and collaborative work."
          />

          <a
            href="/projects"
            className="hidden shrink-0 text-sm font-semibold text-trinova-accent transition hover:text-trinova-accent-hover sm:inline-flex"
          >
            View All Projects →
          </a>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/projects"
            className="..."
          >
            View All Projects →
          </Link>
        </div>

      </Container>
    </section>
  )
}

export default ProjectSection