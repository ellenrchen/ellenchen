import React from "react";

const ProjectsPage = () => (
  <div class="projects">
    <h1>Projects</h1>
    <div class="project-item">
      <h3>compileHer</h3>
      <p>Web Developer</p>
      <ul>
        <li>
          Built website for a student organization founded at the University of
          Chicago that aims to engage young girls from all across the city of
          Chicago through computer science education, using HTML/CSS/JS
        </li>
        <li><a href="http://compileher.com/">http://compileher.com/</a></li>
      </ul>
    </div>

    <div class="project-item">
      <h3>Dormsurf</h3>
      <p>Co-Founder and Lead Developer</p>
      <ul>
        <li>
          Co-founded Dormsurf, a web-based platform for university students
          designed to simultaneously offer local and national reach via an
          intuitive check-the-box interface designed for launch
        </li>
        <li>
          Designed and built web portal using React (TypeScript) frontend and
          Node.js backend{" "}
        </li>
      </ul>
    </div>
  </div>
);

export default ProjectsPage;
