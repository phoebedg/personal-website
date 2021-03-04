import React, { Fragment } from "react";
import assets from "../../static";

export const Poem: React.FC = () => {
  const content = assets.personalPoems.map(poem => {
    const lines = poem.lines.map(line => (<span key={line}>{line}</span>));
    return (
    <Fragment key={poem.title}>
      <span style={{ fontWeight: 800, marginBottom: "12px" }}>{poem.title}</span>
      {lines}
      <span className="personal__citation" style={{ fontSize: "14px", marginTop: "10px" }}>- {poem.author}</span>
    </Fragment>
    );
  });
  return (
    <Fragment>
      {content}
    </Fragment>
  );
};
