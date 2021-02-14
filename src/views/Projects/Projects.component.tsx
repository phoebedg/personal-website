import React from "react";
import { ContentWrap } from "../../components/ContentWrap.component";
import { ListLink } from "../../components/ListLink.component";
import assets from "../../static";
import "../content.css";

export const Projects: React.FC = () => (
  <ContentWrap title={"projects"}>
    <div className="content-page__body">
      {assets.projectLinks.map((link, i) => (
        <ListLink title={link.title} href={link.href} key={i} />
      ))}
    </div>
  </ContentWrap>
);
