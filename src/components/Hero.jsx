import Container from "./Container"
import Button from "./Button"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-trinova-background">
      <Container>
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          
          {/* Hero Content */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinova-accent">
              TRINOVA
            </p>

            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-trinova-text sm:text-6xl lg:text-7xl">
              Three Minds.
              <br />
              <span className="text-trinova-accent">
                One Vision.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-trinova-muted sm:text-lg">
              A three-member project team formed for our Kerja Praktek
              and internship journey, bringing different skills,
              ideas, and perspectives together through technology.
            </p>

            <p className="mt-5 text-sm font-medium text-trinova-text">
              Build
              <span className="mx-2 text-trinova-accent">·</span>
              Learn
              <span className="mx-2 text-trinova-accent">·</span>
              Create
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/team">
                    Meet Our Team →
                </Button>

                <Button to="/projects" variant="secondary">
                    View Projects →
                </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[500px]">
            <HeroGraphic />
          </div>

        </div>
      </Container>
    </section>
  )
}

function HeroGraphic() {
  return (
    <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">

      {/* Decorative circles */}
      <div className="absolute inset-0 rounded-full border border-trinova-accent/10" />
      
      <div className="absolute inset-8 rounded-full border border-trinova-accent/10" />

      {/* Connecting lines */}
      <div className="absolute left-1/2 top-[27%] h-[46%] w-px -translate-x-1/2 rotate-[55deg] bg-trinova-accent/30 origin-top" />

      <div className="absolute left-[28%] top-[68%] h-px w-[46%] bg-trinova-accent/30" />

      <div className="absolute right-[25%] top-[31%] h-[46%] w-px -translate-x-1/2 -rotate-[55deg] bg-trinova-accent/30 origin-top" />

      {/* Top node */}
      <div className="absolute left-1/2 top-[15%] h-16 w-16 -translate-x-1/2 rounded-full bg-trinova-accent shadow-[0_12px_30px_rgba(59,130,246,0.25)] sm:h-20 sm:w-20">
        <div className="absolute inset-2 rounded-full border border-white/30" />
      </div>

      {/* Left node */}
      <div className="absolute bottom-[16%] left-[14%] h-14 w-14 rounded-full border-4 border-trinova-accent/20 bg-trinova-primary sm:h-16 sm:w-16">
        <div className="absolute inset-2 rounded-full border border-white/10" />
      </div>

      {/* Right node */}
      <div className="absolute bottom-[16%] right-[14%] h-14 w-14 rounded-full border-4 border-trinova-accent/20 bg-trinova-primary sm:h-16 sm:w-16">
        <div className="absolute inset-2 rounded-full border border-white/10" />
      </div>

      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-trinova-accent/5 blur-2xl" />

      {/* Decorative dots */}
      <span className="absolute left-[18%] top-[20%] h-2 w-2 rounded-full bg-trinova-accent/50" />
      <span className="absolute right-[13%] top-[23%] h-1.5 w-1.5 rounded-full bg-trinova-accent/40" />
      <span className="absolute bottom-[27%] left-[48%] h-2 w-2 rounded-full bg-trinova-accent/60" />
    </div>
  )
}

export default Hero