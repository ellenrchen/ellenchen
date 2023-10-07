import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
// import WorkPage from "./WorkPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

const MainPage = () => (
  <div class="main">
    <div id="home"><HomePage/></div>
    <div id="about"><AboutPage/></div>
    {/* <div id="work"><WorkPage/></div> */}
    <div id="projects"><ProjectsPage/></div>
    <div id="contact"><ContactPage/></div>
  </div>
);

export default MainPage;
