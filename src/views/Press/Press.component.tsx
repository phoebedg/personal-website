import React from "react";
import "../content.css";
import { ListLink } from "../../components/ListLink.component";
import { pressLinks } from "./pressLinks";

export const Press = () => {
  return (
    <div id="main" className="content-page">
      <h2 className="content-page__title">press</h2>
      <div className="content-page__body">
        {pressLinks.map(link => (
          <ListLink title={link.title} href={link.href} />
        ))}
      </div>
    </div>
  );
};
