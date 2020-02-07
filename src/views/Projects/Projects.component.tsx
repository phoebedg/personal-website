import React from "react";
import "../content.css";

export const Projects = () => {
  return (
    <div id="main" className="content-page">
      <h2 className="content-page__title">projects</h2>
      <div className="content-page__body">
        <a
          className="link"
          href="https://github.com/phoebedg/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Website
        </a>
        <a
          className="link"
          href="https://github.com/phoebedg/babysitters"
          target="_blank"
          rel="noopener noreferrer"
        >
          Babysitters
        </a>
        <a
          className="link"
          href="https://guarded-thicket-52656.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootcamp project: Delivereat
        </a>
        <a
          className="link"
          href="https://github.com/TeamStrikeLevelUp/LevelUp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootcamp project: Level Up
        </a>
        <a
          className="link"
          href="https://github.com/TeamFunLingsLabs/lings-labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootcamp project: Ling's Labs
        </a>
        <a
          className="link"
          href="https://github.com/phoebedg/react-cinema"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootcamp project: React Cinema
        </a>
        <a
          className="link"
          href="https://github.com/phoebedg/react-quizmachine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootcamp project: React Quizmachine
        </a>
      </div>
    </div>
  );
};
