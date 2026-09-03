import Container from "./Container"
import Button from "./Button"

function CTA() {
  return (
    <section className="bg-trinova-primary py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            TRINOVA
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something Great Together
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore our team, skills, and projects to discover what
            TriNova can build through technology.
          </p>

          <div className="mt-8">
            <Button href="#team">
              Explore Our Portfolio →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CTA