import React from "react";
import "./personal.css";

interface PersonalContentCardProps {
  children: string | JSX.Element;
}

export const PersonalContentCard = ({ children }: PersonalContentCardProps) => {
  return <div className="personal__content-card">{children}</div>;
};
