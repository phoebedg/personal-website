import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { Navigation, navMenuItems } from "./Navigation.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(() => ({
    pathname: "/"
  }))
}));

test("renders Navigation icon", async () => {
  const { container, getByRole } = render(
    <Router>
      <Navigation />
    </Router>
  );
  expect(getByRole("img")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test("clicking nav icon opens nav modal menu", () => {
  const { getByRole, getAllByTestId } = render(
    <Router>
      <Navigation />
    </Router>
  );
  fireEvent.click(getByRole("img"));
  const navLinks = getAllByTestId("nav-link");
  expect(navLinks).toBeTruthy();
  expect(navLinks.map(l => l.innerHTML)).toEqual(navMenuItems.map(i => i));
  expect(navLinks[0].className).toEqual("navigation__link active");
});

test("renders nav modal menu", () => {
  const { container, getByRole } = render(
    <Router>
      <Navigation />
    </Router>
  );
  fireEvent.click(getByRole("img"));
  expect(container).toMatchSnapshot();
});

// TODO: fix test
test("clicking nav link closes nav modal menu", () => {
  (useLocation as jest.Mock).mockImplementation(() => ({
    pathname: "/personal"
  }));
  const { getByRole, getByText } = render(
    <Router>
      <Navigation />
    </Router>
  );
  fireEvent.click(getByRole("img"));
  expect(getByText("personal").className).toEqual("navigation__link active");
});
