import React from "react";
import "../HomePage/Home.css";
import "../Press/Press.css"

export const Projects = () => {
  return (
    <div className="content-page">
      <h2>projects</h2>
      <p className="content-page__body">
        <a className="link" href="https://github.com/phoebedg/personal-website" target="_blank" rel="noopener noreferrer">Personal Website</a>
        <a className="link" href="https://github.com/phoebedg/babysitters" target="_blank" rel="noopener noreferrer">Babysitters</a>
        <a className="link" href="https://guarded-thicket-52656.herokuapp.com/" target="_blank" rel="noopener noreferrer">Bootcamp project: Delivereat</a>
      </p>
    </div>
  );
};
