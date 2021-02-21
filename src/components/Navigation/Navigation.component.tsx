import React, { ReactEventHandler, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Desktop, NonDesktop } from "../Responsive";
import { NavIcon } from "./NavIcon.component";

export const navMenuItems = [
  "home",
  "professional",
  "projects",
  "personal",
  "press"
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [lastEventFired, setLastEventFired] = useState<string>("");

  const handleOpenNav = () => {
    setHovered(true);
    setVisible(true);
  };

  const toggleNav = () => {
    setHovered(!hovered);
    setVisible(!visible);
  };

  const handleMobileEvent = (e: React.TouchEvent | React.MouseEvent) => {
    if (e.type === "touchstart" || lastEventFired !== "touchstart") {
      toggleNav();
    };
    setLastEventFired(e.type);
  };

  const getMenuItemStyles = (link: string): string =>
    location.pathname === `/${link}/` ||
    (link === "home" && location.pathname === "/")
      ? "navigation__link active"
      : "navigation__link";

  const getNavStyles = (): string =>
    visible ? "navigation navigation-mobile-open" : "navigation";

  const svgFill = hovered ? "#d5621f" : "#d1d7c9";
  const svgMobileFill = visible ? "#d5621f" : "#d1d7c9";

  return (
    <div className={getNavStyles()}>
      <Desktop>
        <Link
          className="navigation__icon"
          aria-label="nav-icon"
          onMouseEnter={handleOpenNav}
          onKeyPress={handleOpenNav}
          onMouseLeave={() => setHovered(false)}
          to={"/"}
          onClick={(e) => toggleNav}
        >
          <NavIcon fill={svgFill} />
        </Link>
      </Desktop>
      <NonDesktop>
        <div
          className="navigation__icon"
          aria-label="nav-icon"
          onClick={handleMobileEvent}
          onTouchStart={handleMobileEvent}
        >
          <NavIcon fill={svgMobileFill} />
        </div>
      </NonDesktop>
      {visible && (
        <div
          className="navigation__modal"
          onClick={() => setVisible(false)}
        >
          <div className="navigation__menu">
            {navMenuItems.map(item => {
              return (
                <Link
                  data-testid="nav-link"
                  className={getMenuItemStyles(item)}
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
