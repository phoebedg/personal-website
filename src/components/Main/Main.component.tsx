import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import phoebe from "../../static/pInOx.jpg";
import "./Main.css";

export const Main: React.FC = () => {
  const location = useLocation();
  return (
    <div className="main__header">
      <h1 className="main__title">phoebedg</h1>
      <div className="main__image-container">
        <img className="main__image" src={phoebe} alt="portrait" />
      </div>
      <Link to={`${location.pathname}#main`} className="main__arrow">⇟⇟</Link>
    </div>
  );
};