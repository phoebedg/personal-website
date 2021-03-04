import React from "react";
import { ContentWrap } from "../../components/ContentWrap.component";
import { ListLink } from "../../components/ListLink.component";
import assets from "../../static";

export const Projects: React.FC = () => (
  <ContentWrap title={"things i made"}>
    {assets.projectLinks.map((link, i) => (
      <ListLink title={link.title} href={link.href} key={i} />
    ))}
  </ContentWrap>
);
