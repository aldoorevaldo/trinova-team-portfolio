import { Link } from "react-router-dom"

import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"
import PageTitle from "../components/PageTitle"
import members from "../data/members"

function Contact() {
  return (
    <>
      <PageTitle title="Contact" />

      <section className="bg-trinova-background py-20 sm:py-24 lg:py-28">
        <Container>

          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="CONTACT"
              title="Let's Connect"
              description="Interested in our work, collaboration, or internship opportunities? Connect with any member of our team."
              align="center"
            />
          </div>

          {/* Team Contact Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col rounded-2xl border border-trinova-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-trinova-accent hover:shadow-lg hover:shadow-slate-200/50 sm:p-7"
              >
                {/* Member Info */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinova-accent">
                    Team Member
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-trinova-text">
                    {member.name}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-trinova-muted">
                    {member.role}
                  </p>

                  {member.location && (
                    <p className="mt-4 text-sm leading-6 text-trinova-muted">
                      {member.location}
                    </p>
                  )}
                </div>

                {/* Contact Links */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="inline-flex min-h-10 items-center justify-center rounded-[10px] border border-trinova-border bg-white px-4 py-2 text-sm font-medium text-trinova-text transition duration-200 hover:border-trinova-accent hover:text-trinova-accent"
                    >
                      GitHub
                    </a>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="inline-flex min-h-10 items-center justify-center rounded-[10px] border border-trinova-border bg-white px-4 py-2 text-sm font-medium text-trinova-text transition duration-200 hover:border-trinova-accent hover:text-trinova-accent"
                    >
                      LinkedIn
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="inline-flex min-h-10 items-center justify-center rounded-[10px] border border-trinova-border bg-white px-4 py-2 text-sm font-medium text-trinova-text transition duration-200 hover:border-trinova-accent hover:text-trinova-accent"
                    >
                      Email
                    </a>
                  )}
                </div>

                {/* Profile Link */}
                <div className="mt-auto pt-8">
                  <Link
                    to={`/profile/${member.id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-trinova-text transition hover:text-trinova-accent"
                  >
                    View Profile
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm leading-7 text-trinova-muted sm:text-base">
              TriNova is a project team formed for our Kerja Praktek and
              internship activities. For inquiries, feel free to connect
              directly with any member of our team.
            </p>
          </div>

        </Container>
      </section>
    </>
  )
}

export default Contact