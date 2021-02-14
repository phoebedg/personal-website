import React, { Fragment } from "react";
import assets from "../../static";

export const Poem: React.FC = () => {
  const content = assets.personalPoems.map(poem => {
    const lines = poem.lines.map(line => (<span>{line}</span>));
    return (
    <Fragment>
      <span style={{ fontWeight: 800 }}>{poem.title}</span>
      <span className="personal__citation" style={{ fontSize: "14px" }}>- {poem.author}</span>
      <br />
      {lines}
    </Fragment>
    );
  });
  return (
    <Fragment>
      {content}
    </Fragment>
  );
};
