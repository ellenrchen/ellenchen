import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/#home">Home</Link>
      </li>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/#work">Work</Link>
      </li>
      <li>
        <Link to="/#projects">Projects</Link>
      </li>
      <li>
        <Link to="/#contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
