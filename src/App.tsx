import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.component";
import { Main } from "./components/Main/Main.component";
import { Home } from "./views/HomePage/Home.component";
import { Personal } from "./views/Personal/Personal.component";
import { Professional } from "./views/Professional/Professional.component";
import { Projects } from "./views/Projects/Projects.component";
import { Press } from "./views/Press/Press.component";
import { Footer } from "./components/Footer/Footer.component";

export const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <div className="app__container">
          <Navigation />
          <Main />
        </div>
        <Switch>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/press">
            <Press />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};
