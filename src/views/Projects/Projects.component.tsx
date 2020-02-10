import React from "react";
import { ListLink } from "../../components/ListLink.component";
import { projectLinks } from "./projectLinks";
import "../content.css";

export const Projects: React.FC = () => (
  <div id="main" className="content-page">
    <h2 className="content-page__title">projects</h2>
    <div className="content-page__body">
      {projectLinks.map((link, i) => (
        <ListLink title={link.title} href={link.href} key={i} />
      ))}
    </div>
  </div>
);
