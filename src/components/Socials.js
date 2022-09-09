import React from "react";
import linkedin from "../img/logos/linkedin.png";
import github from "../img/logos/github.png";

const Socials = () => (
  <div class="socials">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/ellenrchen/">
          <img class="icon" src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/ellenrchen">
        <img class="icon" src={github} alt="github" />
        </a>
      </li>
    </ul>
  </div>
);

export default Socials;
