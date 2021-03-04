import React from "react";
import { ContentWrap } from "../../components/ContentWrap.component";
import { PersonalContentCard } from "./PersonalContentCard.component";
import { Poem } from "./Poem.component";
import { Quotes } from "./Quotes.component";
import { likes } from "./likes";
import { Mobile, NonMobile } from "../../components/Responsive";

export const Personal: React.FC = () => (
  <ContentWrap title={"things i like"}>
    <div className="personal__content-cards">
      <PersonalContentCard children={<Quotes />} />
      <PersonalContentCard children={<Poem />} />
    </div>
    <NonMobile>
      <div className="personal__content-cards">
        {likes.map((el, i) => (
          <div className="personal__content" key={i}>
            {el}
          </div>
        ))}
      </div>
    </NonMobile>
    <Mobile>
      <div className="personal__content">
        {likes}
      </div>
    </Mobile>
  </ContentWrap>
);
