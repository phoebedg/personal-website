import React from "react";
import "./Personal.css";
import { PersonalContentCardProps } from "./personal.types";

export const PersonalContentCard = ({
  children
}: PersonalContentCardProps) => {
  return (
    <div className="personal__content-card">
      {children}
    </div>
  );
};
