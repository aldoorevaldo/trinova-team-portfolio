import PageTitle from "../components/PageTitle"
import Hero from "../components/Hero"
import About from "../components/About"
import TeamSection from "../components/TeamSection"
import ProjectSection from "../components/ProjectSection"
import CapabilitiesSection from "../components/CapabilitiesSection"
import CTA from "../components/CTA"

function Home() {
  return (
    <>
      <PageTitle title="Team Portfolio" />

      <Hero />
      <About />
      <TeamSection />
      <ProjectSection />
      <CapabilitiesSection />
      <CTA />
    </>
  )
}

export default Home