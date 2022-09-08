// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
// import AboutPage from "./pages/AboutPage";
// import WorkPage from "./pages/WorkPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<MainPage />} exact />
          </Routes>
          {/* <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes> */}
        </div>
        <Socials/>
        <Copyright/>
      </div>
    </Router>
  );
}
export default App;
