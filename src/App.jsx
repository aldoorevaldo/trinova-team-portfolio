import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import Team from "./pages/Team"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/team" element={<Team />} />

          <Route path="/projects" element={<Projects />} />

          <Route
            path="/projects/:id"
            element={<ProjectDetail />}
          />

          <Route
            path="/profile/:id"
            element={<Profile />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App