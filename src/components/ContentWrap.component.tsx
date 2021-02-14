import React, { ReactNode } from "react";

interface ContentWrapProps {
    children: ReactNode;
    title: string;
}

export const ContentWrap: React.FC<ContentWrapProps> = ({children, title}) => (
  <div id="main" className="content-page">
    <h2 className="content-page__title">{title}</h2>
    <div className={title === "things i like" ? "personal__body" : "content-page__body"}>
      {children}
    </div>
  </div>
);
