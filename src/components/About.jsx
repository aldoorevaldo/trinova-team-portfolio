import Container from "./Container"
import SectionHeading from "./SectionHeading"

function About() {
  return (
    <section
      id="about"
      className="bg-trinova-surface py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-square overflow-hidden rounded-2xl border border-trinova-border bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
              <div className="flex h-full items-center justify-center p-8">
                <AboutGraphic />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="ABOUT TRINOVA"
              title="Who We Are"
              description="TriNova is a project team consisting of Aldo, Bagas, and Dimas, formed specifically for our Kerja Praktek and internship activities."
            />

            <div className="mt-8">
              <a
                href="#team"
                className="inline-flex items-center text-sm font-semibold text-trinova-accent transition hover:text-trinova-accent-hover"
              >
                Learn More About Us
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Values */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Value
                number="01"
                title="Learn"
                description="Continuous growth through exploration."
              />

              <Value
                number="02"
                title="Build"
                description="Turning ideas into functional solutions."
              />

              <Value
                number="03"
                title="Create"
                description="Designing technology with purpose."
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

function Value({ number, title, description }) {
  return (
    <div>
      <span className="text-sm font-semibold text-trinova-accent">
        {number}
      </span>

      <h3 className="mt-2 text-base font-semibold text-trinova-text">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-trinova-muted">
        {description}
      </p>
    </div>
  )
}

function AboutGraphic() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">

      {/* Main cube */}
      <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-white shadow-[0_20px_40px_rgba(15,23,42,0.10)]">

        <div className="absolute inset-4 rounded-xl border border-trinova-accent/20" />

        <span className="text-4xl font-bold text-trinova-accent">
          T
        </span>
      </div>

      {/* Supporting blocks */}
      <div className="absolute left-5 top-12 h-16 w-16 rounded-xl border border-trinova-border bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)]" />

      <div className="absolute bottom-10 right-5 h-16 w-16 rounded-xl border border-trinova-border bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)]" />

      {/* Decorative circles */}
      <div className="absolute inset-0 rounded-full border border-trinova-accent/10" />

      <div className="absolute h-2 w-2 rounded-full bg-trinova-accent/50 left-10 top-10" />

      <div className="absolute h-2 w-2 rounded-full bg-trinova-accent/50 bottom-10 right-10" />

    </div>
  )
}

export default About