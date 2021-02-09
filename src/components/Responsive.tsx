import React from "react";
import { useMediaQuery } from "react-responsive";

interface ResponsiveProps {
  children: any;
};
 
export const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

export const NonDesktop: React.FC<ResponsiveProps> = ({ children }) => {
    const isNotDesktop = useMediaQuery({ maxWidth: 991 });
    return isNotDesktop ? children : null;
  };

export const Tablet: React.FC<ResponsiveProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

export const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const NonMobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
