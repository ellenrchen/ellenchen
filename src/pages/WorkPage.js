import React from "react";
import doordash from "../img/logos/doordash.png";
import microsoft from "../img/logos/microsoft.png";

const WorkPage = () => (
  <div class="work">
    <h1>Work</h1>
    <div class="work-item">
      <div class="company-header">
        <h3>DoorDash</h3>
        <img class="company-logo" src={doordash} alt="doordash" />
      </div>
      <p>Software Engineer, Mx Selection + Onboarding</p>
      {/* <ul>
        <li>
          Built React UI to display menu audit history for merchants and
          internal teams to reduce operational overhead
        </li>
        <li>
          Connect self-serve menu editor web app to GraphQL API in BFF to query
          menu audit history from Snowflake DB
        </li>
        <li>
          Build and conduct unit and snapshot tests using Jest to ensure proper
          functionality across different cases, improving menu reliability by 1%
        </li>
      </ul> */}
    </div>
    <div class="work-item">
      <div class="company-header">
        <h3>DoorDash</h3>
        <img class="company-logo" src={doordash} alt="doordash" />
      </div>
      <p>Software Engineer, Intern</p>
      <ul>
        <li>
          Built React UI to display menu audit history for merchants and
          internal teams to reduce operational overhead
        </li>
        <li>
          Connect self-serve menu editor web app to GraphQL API in BFF to query
          menu audit history from Snowflake DB
        </li>
        <li>
          Build and conduct unit and snapshot tests using Jest to ensure proper
          functionality across different cases, improving menu reliability by 1%
        </li>
      </ul>
    </div>

    <div class="work-item">
      <div class="company-header">
        <h3>Microsoft</h3>
        <img class="company-logo" src={microsoft} alt="microsoft" />
      </div>
      <p>Explore (SWE + PM) Intern</p>
      <ul>
        <li>
          Rebuilt OneDrive settings stack with React-Native framework
          (TypeScript) and modernize UI to minimize operating costs and replace
          current outdated version with more intuitive left-navigation layout to
          minimize user confusion
        </li>
        <li>
          Connected front-end TypeScript UI components with back-end C++ data
          layer to fetch/update live settings and user data
        </li>
        <li>
          Implemented right-to-left language compatibility and theming (Light,
          Dark, High Contrast modes) using React-Native to promote inclusivity
          via internationalization and accessibility features
        </li>
        <li>
          Built and conduced unit and snapshot tests using Jest, mocking
          functions to ensure functionality across different UI states
        </li>
        <li>
          Created wire-frame mockups with Balsamiq and collaborate with
          designers to create high-fidelity prototypes using Figma, signed off
          successfully by PM and Engineering team in design and engineering spec
          reviews
        </li>
      </ul>
    </div>
  </div>
);

export default WorkPage;
