import React from "react";
import "../HomePage/Home.css";

export const Professional = () => {
  return (
    <div className="content-page">
      <h2 className="content-page__title">Professional</h2>
      <div className="content-page__body">
        <h4>Technologies</h4>
        <span>JavaScript, Go, Python</span>
        <span>React, react-redux, node.js, Django</span>
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
