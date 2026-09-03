import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"
import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <>
      <section className="bg-trinova-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="OUR PROJECTS"
            title="Selected Works"
            description="Explore projects we have built, designed, and developed through collaboration."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-trinova-background py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Projects