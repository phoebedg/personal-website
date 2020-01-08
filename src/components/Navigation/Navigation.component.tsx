import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import threeLines from "../../static/threeLines.svg";
import "./Navigation.css";

const navMenuItems = ["home", "personal", "professional", "projects", "press"];

export const Navigation = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const toggleNav = (e: React.MouseEvent) => {
    e.preventDefault();
    setClicked(!clicked);
  };
  const closeNav = (e: React.MouseEvent) => {
    setClicked(false);
  };

  const location = useLocation();
  const getStyles = (link: string): string =>
    location.pathname === `/${link}`
      ? "navigation__link active"
      : "navigation__link";

  return (
    <div className="navigation">
      <img
        className="navigation__icon"
        src={threeLines}
        alt="nav icon"
        onClick={toggleNav}
      />
      {clicked && (
        <div className="navigation__modal" onClick={closeNav}>
          <div className="navigation__menu">
            {navMenuItems.map(item => {
              return (
                <Link
                  className={getStyles(item)}
                  onClick={closeNav}
                  to={`/${item}`}
                  key={item}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
