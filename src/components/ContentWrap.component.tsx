import React, { ReactNode } from "react";
import "../views/content.css";

interface ContentWrapProps {
    children: ReactNode;
    title: string;
}

export const ContentWrap: React.FC<ContentWrapProps> = ({children, title}) => (
  <div id="main" className="content-page">
    <h2 className="content-page__title">{title}</h2>
    {children}
  </div>
);
