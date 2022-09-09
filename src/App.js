import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
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
            <Route path="/ellenchen" element={<MainPage />} exact />
          </Routes>
        </div>
        <Socials/>
        <Copyright/>
      </div>
    </Router>
  );
}
export default App;
