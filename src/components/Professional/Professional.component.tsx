import React from "react";
import "../HomePage/Home.css";

export const Professional = () => {
  return (
    <div className="content-page">
      <h2>career</h2>
      <div className="content-page__body">
        <h4>Tools, Technologies & Methodolgies</h4>
        <span>JavaScript, ReactJS, Redux, Typescript</span>
        <span>Webpack, SASS, CSS, HTML, Storybook</span>
        <span>Golang, NodeJS, ExpressJS, Django, PostgreSQL</span>
        <span>Jest, Enzyme, TestCafe, Pytest, PACT, BrowserStack</span>
        <span>CircleCI, CI/CD, Heroku</span>
        <span>Git, Jira</span>
        <span>Scrum, Agile, TDD</span>
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
          Full stack development with JavaScript at <b>Constructor Labs</b>{" "}
          <br /> <i>May - August 2018</i>
        </span>
      </div>
    </div>
  );
};
