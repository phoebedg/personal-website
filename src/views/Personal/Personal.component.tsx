import React from "react";
import "../content.css";
import "./personal.css";
import { PersonalContentCard } from "./PersonalContentCard.component";
import { Poem } from "./Poem.component";
import { Quotes } from "./Quotes.component";
import { likes } from "./likes";

export const Personal = () => {
  return (
    <div id="main" className="content-page">
      <h2 className="content-page__title">things i like</h2>
      <div className="personal__body" style={{ paddingTop: "16px" }}>
        <div className="personal__content-cards">
          <PersonalContentCard children={<Poem />} />
          <PersonalContentCard children={<Quotes />} />
        </div>
        <div className="personal__content">{likes}</div>
      </div>
    </div>
  );
};
