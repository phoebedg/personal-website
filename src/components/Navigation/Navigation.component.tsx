import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import threeLines from "../../static/threeLines.svg";
import "./Navigation.css";
import { routes } from "../../routes";

export const Navigation = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const openNav = (e: React.MouseEvent) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <div className="navigation">
      <img
        className="navigation__icon"
        src={threeLines}
        alt="nav icon"
        onClick={openNav}
      />
      {clicked && (
        <Fragment>
          <div className="navigation__menu">
            <span className="navigation__item">
              <Link to={routes.home}>home</Link>
            </span>
            <span className="navigation__item">
              <Link to={routes.personal}>personal</Link>
            </span>
            <span className="navigation__item">
              <Link to={routes.professional}>professional</Link>
            </span>
            <span className="navigation__item">
              <Link to={routes.press}>press</Link>
            </span>
          </div>
        </Fragment>
      )}
    </div>
  );
};
