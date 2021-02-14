import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import assets from "../../static";

const { portrait } = assets.images;

export const Main: React.FC = () => {
  const location = useLocation();
  return (
    <div className="main__header">
      <h1 className="main__title">phoebedg</h1>
      <div className="main__image-wrapper">
        <img className="main__image" src={portrait} alt="portrait" />
      </div>
      <div className="main__arrow-wrapper">
      <Link to={`${location.pathname}#main`} className="main__arrow">⇟⇟</Link>
      </div>
    </div>
  );
};