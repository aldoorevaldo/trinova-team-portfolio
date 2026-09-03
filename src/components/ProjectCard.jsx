import { Link } from "react-router-dom"

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-trinova-border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]">

      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-trinova-surface">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trinova-accent">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-trinova-text">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-trinova-muted">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-trinova-accent transition hover:text-trinova-accent-hover"
        >
          View Project
          <span className="ml-2">→</span>
        </Link>

      </div>
    </article>
  )
}

export default ProjectCard