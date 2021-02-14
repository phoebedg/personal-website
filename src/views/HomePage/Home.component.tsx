import React, { useEffect } from "react";
import "../content.css";
import "./Home.css";
import { ContentWrap } from "../../components/ContentWrap.component";
import assets from "../../static";

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <ContentWrap title={"about me"} >
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
          {assets.homeLinks.map(link => {
            return (
              <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="home__social-icon" src={link.icon} alt={link.webpage} />
            </a>
            )
          })}
          <span></span>
        </div>
      </div>
    </ContentWrap>
  );
};
