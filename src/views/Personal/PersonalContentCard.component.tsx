import React from "react";
import "./Personal.css";

interface PersonalContentCardProps {
  children: string | JSX.Element;
}

export const PersonalContentCard: React.FC<PersonalContentCardProps> = ({
  children
}: PersonalContentCardProps) => (
  <div className="personal__content-card">{children}</div>
);
