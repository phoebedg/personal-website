import React from "react";
import "./Home.css";
import github from "../../static/github-logo.svg";
import linkedIn from "../../static/linkedin.svg";
import twitter from "../../static/twitter.svg";

export const Home = () => {
  return (
    <div className="content-page">
      <h2>about me</h2>
      <div className="content-page__body home__body">
        <p style={{ paddingBottom: "35px" }}>
          I am a full stack web developer with a passion for React. I started my
          career in development in 2018 when I quit my job in order to teach
          myself full-time. I joined a London-based JavaScript bootcamp in the
          summer of that year, and I now work as a consultant in central London,
          UK. I am currently on a project at a major supermarket, helping to
          build a new UI for their online groceries website. Aside from coding,
          my other interests include cooking, eating, watching Silicon Valley
          and spending time with my very large family.
        </p>
        <div className="home__social">
          <span></span>
          <a href="https://github.com/phoebedg" target="_blank" rel="noopener noreferrer"><img className="home__social-icon" src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/phoebe-dg-29b795113/" target="_blank" rel="noopener noreferrer"><img className="home__social-icon" src={linkedIn} alt="linkedin" /></a>
          <a href="https://twitter.com/DgPhoebe" target="_blank" rel="noopener noreferrer"><img className="home__social-icon" src={twitter} alt="twitter" /></a>
          <span></span>
        </div>
      </div>
    </div>
  );
};
