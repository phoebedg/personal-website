import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import assets from "../../static";

const { portrait } = assets.images;

export const Main: React.FC = () => {
  const location = useLocation();
  return (
    <div className="main__header">
      <div>
        <Link to={"/#main"}>
          <h1 className="main__title">phoebedg</h1>
        </Link>
      </div>
      <div className="main__image-wrapper">
        <Link to={"/#main"}>
          <img className="main__image" src={portrait} alt="portrait" />
        </Link>
      </div>
      <div className="main__arrow-wrapper">
      <Link to={`${location.pathname}#main`}>⇟⇟</Link>
      </div>
    </div>
  );
};