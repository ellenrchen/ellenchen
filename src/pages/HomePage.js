import React from "react";
import ellen_chicago from "../img/ellen_chicago.jpg";

const HomePage = () => (
  <div class="homepage">
    <div>
      <img class="header-img" src={ellen_chicago} alt="profile-pic" />
    </div>
    <div class="header">
      <h1>ELLEN CHEN</h1>
      <h2>Software Engineer.</h2>
    </div>
  </div>
);

export default HomePage;
