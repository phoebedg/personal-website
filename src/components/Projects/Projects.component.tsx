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
        <a className="link" href="https://github.com/TeamStrikeLevelUp/LevelUp" target="_blank" rel="noopener noreferrer">Bootcamp project: Level Up</a>
        <a className="link" href="https://github.com/TeamFunLingsLabs/lings-labs" target="_blank" rel="noopener noreferrer">Bootcamp project: Ling's Labs</a>
        <a className="link" href="https://github.com/phoebedg/react-cinema" target="_blank" rel="noopener noreferrer">Bootcamp project: React Cinema</a>
        <a className="link" href="https://github.com/phoebedg/react-quizmachine" target="_blank" rel="noopener noreferrer">Bootcamp project: React Quizmachine</a>
      </p>
    </div>
  );
};
