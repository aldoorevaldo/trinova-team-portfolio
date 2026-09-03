import { Link } from "react-router-dom"

function Button({
  children,
  variant = "primary",
  to,
  href,
}) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center rounded-[10px] px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinova-accent focus-visible:ring-offset-2"

  const variants = {
    primary:
      "bg-trinova-accent text-white hover:bg-trinova-accent-hover",
    secondary:
      "border border-trinova-border bg-white text-trinova-text hover:bg-trinova-surface",
  }

  const className = `${baseStyles} ${variants[variant]}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export default Button