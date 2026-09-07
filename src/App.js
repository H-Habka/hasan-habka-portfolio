import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import "aos/dist/aos.css"
import Aos from "aos"
import Loader from "./components/Loader"
import NavbarV2 from "./components/NavBar/v2"
import ProjectPage from "./components/ProjectPage"
import ScrollToTop from "./components/scrollTop"

const OfficialDocs = lazy(() => import("./components/official-docs"))
const SoftwareExperience = lazy(() => import("./components/softwareExperience"))
const CompaniesIworkedWith = lazy(() =>
  import("./components/CompaniesIworkedWith")
)
const PDFPreviewPage = lazy(() =>
  import("./components/official-docs/PDFPreviewPage")
)
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"))
const AboutMeSection = lazy(() => import("./components/AboutMeSection/index"))
const WorkSection = lazy(() => import("./components/WorkSection/index"))
const GetInTouchSection = lazy(() => import("./components/GetInTouchSection"))

function App() {
  Aos.init({
    easing: "ease-in-out",
  })
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ScrollToTop />
        <div
          className="bg-one"
          style={{ backgroundImage: `url(/images/bg.png)` }}
        >
          <NavbarV2 />
          <Routes>
            <Route
              path="/"
              Component={() => (
                <>
                  <HeroSection />
                  <AboutMeSection />
                  <SoftwareExperience />
                  <WorkSection isSticky title="LATEST WORK" />
                  <CompaniesIworkedWith />
                  <GetInTouchSection />
                </>
              )}
            />
            <Route
              path="/official-docs"
              Component={() => (
                <>
                  <OfficialDocs />
                </>
              )}
            />
            <Route path="/preview" Component={() => <PDFPreviewPage />} />
            <Route
              path="/projects/:projectName"
              Component={() => <ProjectPage />}
            />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}

export default App
