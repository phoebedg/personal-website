import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import threeLines from "../../static/threeLines.svg";
import "./Navigation.css";

const navMenuItems = ["home", "professional", "personal", "projects", "press"];

export const Navigation = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleNav = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(!visible);
  };
  const closeNav = (e: React.MouseEvent) => {
    setVisible(false);
  };

  const location = useLocation();
  const getMenuItemStyles = (link: string): string =>
    location.pathname === `/${link}/` ||
    (link === 'home' && location.pathname === '/')
      ? "navigation__link active"
      : "navigation__link";
  const getNavStyles = (): string =>
  visible ? "navigation navigation-mobile-open" : "navigation";

  return (
    <div className={getNavStyles()}>
      <img
        className="navigation__icon"
        src={threeLines}
        alt="nav icon"
        onClick={toggleNav}
      />
      {visible && (
        <div className="navigation__modal" onClick={closeNav}>
          <div className="navigation__menu">
            {navMenuItems.map(item => {
              return (
                <Link
                  className={getMenuItemStyles(item)}
                  onClick={closeNav}
                  to={item === "home" ? "/" : `/${item}/#main`}
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
