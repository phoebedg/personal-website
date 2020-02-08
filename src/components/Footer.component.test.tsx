import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "./Footer.component";

test("renders ListLink", async () => {
  const { container, getByText } = render(<Footer />);
  expect(getByText("phoebedg 2020")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
