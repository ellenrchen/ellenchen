import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../img/logos/linkedin.png";
import github from "../img/logos/github.png";

const Socials = () => (
  <div class="socials">
    <ul>
      <li>
        <Link to="https://www.linkedin.com/in/ellenrchen/">
          <img class="icon" src={linkedin} alt="linkedin" />
        </Link>
      </li>
      <li>
        <Link to="https://github.com/ellenrchen">
        <img class="icon" src={github} alt="github" />
        </Link>
      </li>
    </ul>
  </div>
);

export default Socials;
