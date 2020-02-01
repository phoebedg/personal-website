import React from "react";
import "../HomePage/Home.css";
import "./Personal.css";
import { PersonalContentCard } from "./PersonalContentCard.component";
import { Poem } from "./Poem.component";
import { Quotes } from "./Quotes.component";
import { likes } from "./likes";

export const Personal = () => {

  const sortLikes = (likes: string[]): string[] => {
    return likes.sort().map((el, i) => (
      i % 2 === 0 ? `${el.toUpperCase()} ` : `${el} `
    ))
  }

  return (
    <div className="content-page">
      <h2>things i like</h2>
      <div className="personal__body" style={{ paddingTop: "16px" }}>
        <p className="personal__content">
          {sortLikes(likes)}
        </p>
        <div className="personal__content-cards">
          <PersonalContentCard children={<Poem/>} />
          <PersonalContentCard children={<Quotes/>} />
        </div>
      </div>
    </div>
  );
};
