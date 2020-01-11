import React from "react";
import "../HomePage/Home.css";
import { likes } from "./likes";

export const Personal = () => {
  return (
    <div className="content-page">
      <h2>things i like</h2>
      <div className="content-page__body">
        {likes.sort().map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </div>
    </div>
  );
};
