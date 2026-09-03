import PageTitle from "../components/PageTitle"
import Container from "../components/Container"
import SectionHeading from "../components/SectionHeading"
import TeamSection from "../components/TeamSection"

function Team() {
  return (
    <>
      <PageTitle title="Our Team" />

      <section className="bg-trinova-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="OUR TEAM"
            title="Meet Our Project Team"
            description="Three students, different strengths, and one shared learning journey through Kerja Praktek."
            align="center"
          />
        </Container>
      </section>

      <TeamSection showHeading={false} />
    </>
  )
}

export default Team