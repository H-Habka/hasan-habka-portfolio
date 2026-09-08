import SceneBackdrop from "../experience/SceneBackdrop"
import HeroSection from "../components/HeroSection/HeroSection"
import StatsBand from "../components/home/StatsBand"
import AboutMeSection from "../components/AboutMeSection/index"
import CapabilitiesSection from "../components/home/CapabilitiesSection"
import ProcessSection from "../components/home/ProcessSection"
import SoftwareExperience from "../components/softwareExperience"
import FeaturedVessel from "../components/home/FeaturedVessel"
import WorkSection from "../components/WorkSection/index"
import CompaniesIworkedWith from "../components/CompaniesIworkedWith"
import StudioNotes from "../components/home/StudioNotes"
import CtaBand from "../components/home/CtaBand"
import GetInTouchSection from "../components/GetInTouchSection"

export default function HomePage() {
  return (
    <main className="home-page">
      <div id="home-experience" className="home-experience">
        <SceneBackdrop />
        <HeroSection />
        <StatsBand />
        <AboutMeSection />
      </div>
      <CapabilitiesSection />
      <ProcessSection />
      <SoftwareExperience />
      <FeaturedVessel />
      <WorkSection title="Latest work" />
      <CompaniesIworkedWith />
      <StudioNotes />
      <CtaBand />
      <GetInTouchSection />
    </main>
  )
}
