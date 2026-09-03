import { Link, useParams } from "react-router-dom"
import Container from "../components/Container"
import projects from "../data/projects"
import BackLink from "../components/BackLink"

function ProjectDetail() {
  const { id } = useParams()

  const project = projects.find(
    (project) => project.id === id
  )

  if (!project) {
    return (
      <section className="bg-trinova-background py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-trinova-accent">
            404
          </p>

          <h1 className="mt-3 text-4xl font-bold text-trinova-text">
            Project Not Found
          </h1>

          <p className="mt-4 max-w-lg text-trinova-muted">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex rounded-[10px] bg-trinova-accent px-5 py-3 text-sm font-medium text-white hover:bg-trinova-accent-hover"
          >
            Back to Projects
          </Link>
        </Container>
      </section>
    )
  }

  return (
    <div className="bg-trinova-background">

      {/* Hero */}
      <section className="border-b border-trinova-border bg-trinova-surface py-16 sm:py-20 lg:py-24">
        <Container>

          <BackLink to="/projects">
            Back to Projects
          </BackLink>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinova-accent">
                {project.category}
              </p>

              <h1 className="mt-4 max-w-full break-words text-4xl font-bold leading-[1.05] tracking-tight text-trinova-text sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-trinova-muted sm:text-lg">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[10px] bg-trinova-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-trinova-accent-hover"
                  >
                    GitHub →
                  </a>
                )}

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[10px] border border-trinova-border bg-white px-5 py-3 text-sm font-medium text-trinova-text transition hover:bg-trinova-surface"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-trinova-border bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Overview */}
      <ProjectSection title="Overview">
        <p className="max-w-3xl text-base leading-8 text-trinova-muted">
          {project.overview}
        </p>
      </ProjectSection>

      {/* Problem & Solution */}
      <section className="bg-trinova-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-trinova-accent">
                The Problem
              </p>

              <h2 className="mt-3 text-2xl font-bold text-trinova-text sm:text-3xl">
                What We Wanted to Solve
              </h2>

              <p className="mt-5 text-base leading-8 text-trinova-muted">
                {project.problem}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-trinova-accent">
                The Solution
              </p>

              <h2 className="mt-3 text-2xl font-bold text-trinova-text sm:text-3xl">
                How We Approached It
              </h2>

              <p className="mt-5 text-base leading-8 text-trinova-muted">
                {project.solution}
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Features */}
      <ProjectSection title="Key Features">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <div
              key={feature}
              className="rounded-2xl border border-trinova-border bg-white p-6"
            >
              <span className="text-sm font-semibold text-trinova-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-trinova-text">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Technology */}
      <ProjectSection title="Technology Stack" muted>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-xl border border-trinova-border bg-white px-4 py-3 text-sm font-medium text-trinova-text"
            >
              {technology}
            </span>
          ))}
        </div>
      </ProjectSection>

      {/* Contribution */}
      <ProjectSection title="Team Contribution">
        <p className="max-w-3xl text-base leading-8 text-trinova-muted">
          {project.contribution}
        </p>
      </ProjectSection>

      {/* Screenshots */}
      <ProjectSection title="Screenshots" muted>
        <div className="grid gap-6 md:grid-cols-2">
          {project.screenshots.map((screenshot) => (
            <div
              key={screenshot}
              className="overflow-hidden rounded-2xl border border-trinova-border bg-white"
            >
              <img
                src={screenshot}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Bottom CTA */}
      <section className="bg-trinova-primary py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              MORE FROM TRINOVA
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Explore More Projects
            </h2>

            <Link
              to="/projects"
              className="mt-7 rounded-[10px] bg-white px-5 py-3 text-sm font-medium text-trinova-primary transition hover:bg-slate-100"
            >
              View All Projects →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  )
}

function ProjectSection({ title, children, muted = false }) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${
        muted
          ? "bg-trinova-surface"
          : "bg-trinova-background"
      }`}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-4">

          <h2 className="text-2xl font-bold text-trinova-text sm:text-3xl">
            {title}
          </h2>

          <div className="lg:col-span-3">
            {children}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ProjectDetail