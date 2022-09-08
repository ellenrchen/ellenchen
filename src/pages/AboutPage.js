import React from "react";
import ellen from "../img/ellen.jpg"

const AboutPage = () => (
  <div class="about">
    <div class="about-text">
    <h1>Hello!</h1>
    <p>
      I’m Ellen, a rising fourth year at the University of Chicago, studying
      computer science and economics. I first began coding the summer after my
      freshman year in high school and have loved it ever since. I'm especially
      passionate about writing code to address user-facing issues to best
      improve their experience.
    </p>

    <p>
      When I am not coding, you can find me at the gym trying to hit a new PR,
      on the volleyball court getting some touches, attempting to chef up a new
      recipe I found on TikTok, or following Duke basketball (gooo Blue
      Devils!).
    </p>
    </div>
    <div class="about-imgs">
        <img class="about-img" src={ellen} alt="ellen"/>
    </div>
  </div>
);

export default AboutPage;
