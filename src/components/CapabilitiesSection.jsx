import Container from "./Container"
import SectionHeading from "./SectionHeading"

const capabilities = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive, functional, and scalable web applications.",
  },
  {
    number: "02",
    title: "Data & AI",
    description:
      "Exploring data analysis and machine learning to solve practical problems.",
  },
  {
    number: "03",
    title: "UI / UX",
    description:
      "Designing intuitive interfaces with a focus on clarity and usability.",
  },
  {
    number: "04",
    title: "IoT & Systems",
    description:
      "Connecting hardware and software to build practical technology solutions.",
  },
]

function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-trinova-background py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="WHAT WE BRING"
            title="Skills That Move Ideas Forward"
            description="Different strengths, shared curiosity, and a commitment to building meaningful solutions."
            align="center"
          />
        </div>

        {/* Capabilities */}
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group border-t border-trinova-border pt-6"
            >
              <div className="flex items-start gap-5">
                <span className="text-sm font-semibold text-trinova-accent">
                  {capability.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-trinova-text">
                    {capability.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-trinova-muted">
                    {capability.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CapabilitiesSection