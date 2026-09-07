import { lazy } from "react"

const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"))
const AboutMeSection = lazy(() => import("../components/AboutMeSection/index"))
const SoftwareExperience = lazy(() => import("../components/softwareExperience"))
const WorkSection = lazy(() => import("../components/WorkSection/index"))
const CompaniesIworkedWith = lazy(() =>
  import("../components/CompaniesIworkedWith")
)
const GetInTouchSection = lazy(() => import("../components/GetInTouchSection"))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SoftwareExperience />
      <WorkSection isSticky title="LATEST WORK" />
      <CompaniesIworkedWith />
      <GetInTouchSection />
    </>
  )
}
