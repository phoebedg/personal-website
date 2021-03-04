import React from "react";
import { ContentWrap } from "../../components/ContentWrap.component";

export const Professional: React.FC = () => (
  <ContentWrap title={"things i did"}>
    <h4>Tools, Technologies & Methodolgies</h4>
    <span>JavaScript, React, Redux, Typescript</span>
    <span>Webpack, SASS, CSS, HTML</span>
    <span>Golang, NodeJS, ExpressJS, Django, PostgreSQL</span>
    <span>
      Jest, Enzyme, react-testing-library, TestCafe, Pytest, PACT,
      BrowserStack, Chromatic, Storybook
    </span>
    <span>CircleCI, CI/CD, Heroku, Vercel</span>
    <span>AWS Cloudwatch, New Relic, Kibana, Postman</span>
    <span>Git, Jira, Zeplin, Figma</span>
    <span>Scrum, Kanban, Agile, TDD</span>
    <br />
    <span>~</span>
    <h4>Experience</h4>
    <span>
      Full stack developer (Associate Consultant) at <b>Infinity Works</b>
      <br />
      <i>March 2019 - present</i>
    </span>
    <span>
      Software engineer intern at <b>Pollen (formerly Verve)</b> <br />
      <i>October 2018 - January 2019</i>
    </span>
    <br />
    <span>~</span>
    <h4>Education</h4>
    <span>
      Full stack development with JavaScript at <b>Constructor Labs</b> <br />{" "}
      <i>May - August 2018</i>
    </span>
  </ContentWrap>
);
