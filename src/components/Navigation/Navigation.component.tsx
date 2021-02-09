import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./Navigation.css";
import { NavIcon } from "./NavIcon.component";

export const navMenuItems = [
  "home",
  "professional",
  "projects",
  "personal",
  "press"
];

export const Navigation: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

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
    (link === "home" && location.pathname === "/")
      ? "navigation__link active"
      : "navigation__link";
  const getNavStyles = (): string =>
    visible ? "navigation navigation-mobile-open" : "navigation";
  const svgFill = visible ? "#d5621f" : hovered ? "#d5621f" : "#d1d7c9";

  return (
    <div className={getNavStyles()}>
      <div
        className="navigation__icon"
        aria-label="nav-icon"
        onMouseEnter={(e: React.MouseEvent) => setHovered(true)}
        onMouseLeave={(e: React.MouseEvent) => setHovered(false)}
        onClick={toggleNav}
      >
        <NavIcon fill={svgFill} />
      </div>
      {visible && (
        <div className="navigation__modal" onClick={closeNav}>
          <div className="navigation__menu">
            {navMenuItems.map(item => {
              return (
                <Link
                  data-testid="nav-link"
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
