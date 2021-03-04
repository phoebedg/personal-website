import React from "react";
import { ContentWrap } from "../../components/ContentWrap.component";
import { ListLink } from "../../components/ListLink.component";
import assets from "../../static";

export const Press: React.FC = () => (
  <ContentWrap title={"press"}>
    {assets.pressLinks.map((link, i) => (
      <ListLink title={link.title} href={link.href} key={i} />
    ))}
  </ContentWrap>
);
