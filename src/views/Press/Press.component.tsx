import React from "react";
import "../content.css";
import { ContentWrap } from "../../components/ContentWrap.component";
import { ListLink } from "../../components/ListLink.component";
import { pressLinks } from "./pressLinks";

export const Press: React.FC = () => (
  <ContentWrap title={"press"}>
    <div className="content-page__body">
      {pressLinks.map((link, i) => (
        <ListLink title={link.title} href={link.href} key={i} />
      ))}
    </div>
  </ContentWrap>
);
