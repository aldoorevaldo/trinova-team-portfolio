import { useParams } from "react-router-dom"
import PageTitle from "../components/PageTitle"
import Container from "../components/Container"
import members from "../data/members"
import BackLink from "../components/BackLink"

function Profile() {
  const { id } = useParams()

  const member = members.find(
    (member) => member.id === id
  )

  if (!member) {
    return (
      <>
        <PageTitle title="Member Not Found — TriNova" />

        <section className="bg-trinova-background py-24">
          <Container>
            <h1 className="text-3xl font-bold text-trinova-text">
              Member Not Found
            </h1>

            <p className="mt-4 text-trinova-muted">
              The profile you are looking for does not exist.
            </p>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      <PageTitle
        title={`${member.name} - ${member.role} | TriNova`}
      />
    <div className="bg-trinova-background">

      {/* Profile Header */}
      <section className="border-b border-trinova-border bg-trinova-surface py-16 sm:py-20">
        <Container>
          <BackLink to="/team">
            Back to Team
          </BackLink>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-3">

            {/* Image */}
            <div className="mx-auto w-full max-w-sm lg:mx-0">
              <div className="aspect-square overflow-hidden rounded-2xl border border-trinova-border bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Identity */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinova-accent">
                TRINOVA MEMBER
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-trinova-text sm:text-5xl">
                {member.name}
              </h1>

              <p className="mt-3 text-xl font-medium text-trinova-accent">
                {member.role}
              </p>

              <p className="mt-2 text-sm text-trinova-muted">
                {member.location}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-trinova-muted sm:text-lg">
                {member.shortBio}
              </p>

              {/* Social */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[10px] border border-trinova-border bg-white px-4 py-2.5 text-sm font-medium text-trinova-text transition hover:border-trinova-accent hover:text-trinova-accent"
                >
                  GitHub
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[10px] border border-trinova-border bg-white px-4 py-2.5 text-sm font-medium text-trinova-text transition hover:border-trinova-accent hover:text-trinova-accent"
                >
                  LinkedIn
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="rounded-[10px] bg-trinova-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-trinova-accent-hover"
                >
                  Email
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* About */}
      <ProfileSection title="About Me">
        <p className="max-w-3xl text-base leading-8 text-trinova-muted">
          {member.about}
        </p>
      </ProfileSection>

      {/* Education */}
      <ProfileSection title="Education" muted>
        <div className="space-y-6">
          {member.education.map((item, index) => (
            <div
              key={`${item.institution}-${index}`}
              className="border-l-2 border-trinova-accent/30 pl-6"
            >
              <p className="text-sm font-semibold text-trinova-accent">
                {item.period}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-trinova-text">
                {item.degree}
              </h3>

              <p className="mt-1 font-medium text-trinova-text">
                {item.institution}
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-trinova-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ProfileSection>

      {/* Skills */}
      <ProfileSection title="Technical Skills">
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(member.skills).map(
            ([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-trinova-text">
                  {formatCategory(category)}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </ProfileSection>

      {/* Experience */}
      <ProfileSection title="Experience" muted>
        <div className="space-y-8">
          {member.experience.map((item, index) => (
            <div key={`${item.organization}-${index}`}>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-lg font-semibold text-trinova-text">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-trinova-accent">
                    {item.organization}
                  </p>
                </div>

                <span className="text-sm text-trinova-muted">
                  {item.period}
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-trinova-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ProfileSection>

      {/* Projects */}
      <ProfileSection title="Selected Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {member.projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-trinova-border bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-trinova-text">
                {project.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-trinova-accent">
                {project.role}
              </p>

              <p className="mt-4 text-sm leading-6 text-trinova-muted">
                {project.description}
              </p>

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
            </article>
          ))}
        </div>
      </ProfileSection>

      {/* Certifications */}
      <ProfileSection title="Certifications" muted>
        <div className="grid gap-5 sm:grid-cols-2">
          {member.certifications.map((certificate) => (
            <div
              key={certificate.name}
              className="rounded-xl border border-trinova-border bg-white p-5"
            >
              <h3 className="font-semibold text-trinova-text">
                {certificate.name}
              </h3>

              <p className="mt-2 text-sm text-trinova-muted">
                {certificate.issuer} · {certificate.year}
              </p>
            </div>
          ))}
        </div>
      </ProfileSection>

      {/* Documents */}
      <ProfileSection title="Documents">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {member.documents.map((document) => (
            <a
              key={document.name}
              href={document.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-trinova-border bg-white p-5 transition hover:border-trinova-accent"
            >
              <p className="text-sm font-medium text-trinova-muted">
                {document.type}
              </p>

              <h3 className="mt-2 font-semibold text-trinova-text group-hover:text-trinova-accent">
                {document.name}
              </h3>

              <p className="mt-4 text-sm font-semibold text-trinova-accent">
                View Document →
              </p>
            </a>
          ))}
        </div>
      </ProfileSection>

    </div>
    </>
  )
}

function ProfileSection({ title, children, muted = false }) {
  return (
    <section
      className={`py-16 sm:py-20 ${
        muted
          ? "bg-trinova-surface"
          : "bg-trinova-background"
      }`}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-4">

          <h2 className="text-2xl font-bold text-trinova-text sm:text-3xl">
            {title}
          </h2>

          <div className="lg:col-span-3">
            {children}
          </div>

        </div>
      </Container>
    </section>
  )
}

function formatCategory(category) {
  const labels = {
    machineLearning: "Machine Learning",
    uiux: "UI / UX",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    programming: "Programming",
    data: "Data",
    tools: "Tools",
  }

  return labels[category] || category
}

export default Profile