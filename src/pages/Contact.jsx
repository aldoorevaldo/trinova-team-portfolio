import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"

const contactItems = [
  {
    label: "Email",
    value: "hello@trinova.dev",
    href: "mailto:hello@trinova.dev",
  },
  {
    label: "GitHub",
    value: "github.com/trinova",
    href: "https://github.com/trinova",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/trinova",
    href: "https://linkedin.com/company/trinova",
  },
]

function Contact() {
  return (
    <section className="bg-trinova-background py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's Connect"
            description="Whether you're interested in our work, collaboration, or internship opportunities, we'd love to hear from you."
            align="center"
          />
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-trinova-border bg-trinova-surface p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-trinova-accent">
              Get In Touch
            </p>

            <h2 className="mt-3 text-2xl font-bold text-trinova-text">
              Connect with TriNova
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-trinova-muted">
              Find us through our social platforms or reach out directly
              through email.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="group block rounded-xl border border-trinova-border bg-white p-5 transition hover:border-trinova-accent"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-trinova-muted">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-trinova-text transition group-hover:text-trinova-accent">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Message Form */}
          <div className="rounded-2xl border border-trinova-border bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-trinova-accent">
              Message
            </p>

            <h2 className="mt-3 text-2xl font-bold text-trinova-text">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-trinova-text"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-trinova-border bg-white px-4 py-3 text-sm text-trinova-text outline-none transition placeholder:text-trinova-muted focus:border-trinova-accent"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-trinova-text"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-trinova-border bg-white px-4 py-3 text-sm text-trinova-text outline-none transition placeholder:text-trinova-muted focus:border-trinova-accent"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-trinova-text"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you'd like to discuss..."
                  className="mt-2 w-full resize-none rounded-xl border border-trinova-border bg-white px-4 py-3 text-sm text-trinova-text outline-none transition placeholder:text-trinova-muted focus:border-trinova-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-[10px] bg-trinova-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-trinova-accent-hover"
              >
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Contact