import React from "react";
import "../HomePage/Home.css";
import "./Personal.css";
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
        <p>
          {sortLikes(likes)}
        </p>
      </div>
    </div>
  );
};
