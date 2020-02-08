import React from "react";
import { render } from "@testing-library/react";
import { ListLink } from "./ListLink.component";

test("renders ListLink", async () => {
  const { container, getByText } = render(
    <ListLink
      title={"Personal Website"}
      href={"https://github.com/phoebedg/personal-website"}
    />
  );
  expect(getByText("Personal Website")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
