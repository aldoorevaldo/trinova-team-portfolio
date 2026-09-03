import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Container from "./Container"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Team",
      to: "/team",
    },
    {
      label: "Projects",
      to: "/projects",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ]

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/"
    }

    return location.pathname.startsWith(path)
  }

  const handleNavigation = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-trinova-border bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavigation}
            className="text-lg font-bold tracking-tight text-trinova-text"
          >
            TRINOVA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition ${
                  isActive(item.to)
                    ? "text-trinova-accent"
                    : "text-trinova-muted hover:text-trinova-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-trinova-text md:hidden"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-trinova-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleNavigation}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive(item.to)
                      ? "bg-blue-50 text-trinova-accent"
                      : "text-trinova-muted hover:bg-trinova-surface hover:text-trinova-text"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar