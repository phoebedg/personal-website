import React, { Fragment } from "react";
import "./Personal.css";
import assets from "../../static";

export const Quotes: React.FC = () => {
  const content = assets.personalQuotes.map(quote => {
    const lines = quote.lines.map(line => (<span>{line}</span>));
    return (
    <Fragment>
      {lines}
      <span className="personal__citation">- {quote.author}</span>
      <br />
    </Fragment>
    );
  });
  return (
    <Fragment>
      {content}
    </Fragment>
  );
};
