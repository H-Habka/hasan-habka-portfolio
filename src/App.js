import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import "aos/dist/aos.css"
import Aos from "aos"
import Loader from "./components/Loader"
import NavbarV2 from "./components/NavBar/v2"
import ProjectPage from "./components/ProjectPage"
import ScrollToTop from "./components/scrollTop"
import SocialBar from "./components/SocialBar"
import HomePage from "./pages/HomePage"
import { publicUrl } from "./utils/publicUrl"

const OfficialDocs = lazy(() => import("./components/official-docs"))
const PDFPreviewPage = lazy(() =>
  import("./components/official-docs/PDFPreviewPage")
)

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    Aos.init({
      easing: "ease-in-out",
      once: true,
      duration: 700,
      disable: prefersReducedMotion,
    })
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <div className="site-shell">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.28]"
            style={{
              backgroundImage: `url(${publicUrl("images/bg.png")})`,
              backgroundSize: "240px 240px",
            }}
          />
          <div className="site-content">
            <NavbarV2 />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/official-docs" element={<OfficialDocs />} />
              <Route path="/preview" element={<PDFPreviewPage />} />
              <Route path="/projects/:projectName" element={<ProjectPage />} />
            </Routes>
          </div>
          <SocialBar />
        </div>
      </Router>
    </Suspense>
  )
}

export default App
