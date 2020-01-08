import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import threeLines from "../../static/threeLines.svg";
import "./Navigation.css";

const navMenuItems = ["home", "personal", "professional", "projects", "press"];

export const Navigation = () => {
  const prevScrollY = useRef(0);

  const [visible, setVisible] = useState<boolean>(false);
  const [scrollPosition, setscrollPosition] = useState<number>(
    prevScrollY.current
  );

  useEffect(() => {
    const handleScroll = (): any => {
      const currentScrollPosition = window.scrollY;
      if (visible && scrollPosition > currentScrollPosition) {
        setVisible(true);
      }
      if (visible && scrollPosition < currentScrollPosition) {
        setVisible(false);
      }
      setscrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, scrollPosition]);

  const toggleNav = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(!visible);
  };
  const closeNav = (e: React.MouseEvent) => {
    setVisible(false);
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
      {visible && (
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
