import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/ellenchen#home">Home</Link>
      </li>
      <li>
        <Link to="/ellenchen#about">About</Link>
      </li>
      <li>
        <Link to="/ellenchen#projects">Projects</Link>
      </li>
      <li>
        <Link to="/ellenchen#contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
