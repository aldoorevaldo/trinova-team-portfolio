import Container from "./Container"
import SectionHeading from "./SectionHeading"
import MemberCard from "./MemberCard"
import members from "../data/members"
import { Link } from "react-router-dom"

function TeamSection({ showHeading = true }) {
  return (
    <section id="team" className="bg-trinova-background py-20 sm:py-24 lg:py-28">
      <Container>

        {/* Heading */}
        {showHeading && (
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="OUR TEAM"
            title="Meet Our Project Team"
            description="Three students with different strengths, working together through our Kerja Praktek journey."
            align="center"
          />
        </div>
        )}

        {/* Team Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

        {/* View All */}
        {/* <div className="mt-10 text-center">
          <Link
            to="/team"
            className="inline-flex items-center text-sm font-semibold text-trinova-accent transition hover:text-trinova-accent-hover"
          >
            View All Team Members
            <span className="ml-2">→</span>    
          </Link>
        </div> */}

      </Container>
    </section>
  )
}

export default TeamSection