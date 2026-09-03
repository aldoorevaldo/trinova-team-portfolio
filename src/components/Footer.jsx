import Container from "./Container"

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-trinova-primary">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-white"
            >
              TRINOVA
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A project team formed for Kerja Praktek and internship,
              learning, building, and creating through technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#team"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Team
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Connect
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Instagram
              </a>
            </nav>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-slate-800 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 TriNova. All rights reserved.
          </p>

          <p>
            Build · Learn · Create
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer