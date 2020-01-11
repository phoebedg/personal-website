import React from "react";
import "../HomePage/Home.css";
import "./Press.css";

export const Press = () => {
  return (
    <div className="content-page">
      <h2>press</h2>
      <div className="content-page__body">
        <a
          className="press__link"
          href="https://medium.com/@talent.io/after-a-complete-career-change-phoebe-becomes-an-expert-in-reactjs-f4d90b84b6eb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talent.io Medium Interview <i>2019</i>
        </a>
        <a
          className="press__link"
          href="https://team.pollen.co/engineering/engineering-internships-at-pollen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pollen Software Engineering Internship Interview <i>2019</i>
        </a>
        <a
          className="press__link"
          href="https://www.hercampus.com/school/bristol/campus-celeb-phoebe-drinkall-face-oxford-fashion-week"
          target="_blank"
          rel="noopener noreferrer"
        >
          Her Campus Bristol Interview <i>2014</i>
        </a>
        <a
          className="press__link"
          href="https://thetab.com/uk/brookes/2014/03/05/brookes-fresher-face-of-oxford-fashion-week-2481"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Tab Brookes Interview <i>2014</i>
        </a>
        <a
          className="press__link"
          href="https://www.oxfordmail.co.uk/news/11069028.oxford-fashion-week-face-oxford-model-cant-wait-next-catwalk-show-couture-show-video/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oxford Mail article 2 <i>2014</i>
        </a>
        <a
          className="press__link"
          href="https://www.oxfordmail.co.uk/news/11030885.face-oxford/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oxford Mail article <i>2014</i>
        </a>
      </div>
    </div>
  );
};
