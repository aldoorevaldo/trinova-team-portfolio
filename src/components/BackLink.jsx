import { Link } from "react-router-dom"

function BackLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-sm font-medium text-trinova-muted transition hover:text-trinova-accent"
    >
      <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
        ←
      </span>

      {children}
    </Link>
  )
}

export default BackLink