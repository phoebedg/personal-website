import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.component";
import { Home } from "./views/HomePage/Home.component";
import { Personal } from "./views/Personal/Personal.component";
import { Professional } from "./views/Professional/Professional.component";
import { Projects } from "./views/Projects/Projects.component";
import { Press } from "./views/Press/Press.component";
import phoebe from "./static/pInOx.jpg";
import "./app.css";

export const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <div className="app__container">
          <Navigation />
          <div className="app__header">
            <h1 className="app__title">phoebedg</h1>
            <div className="app__image-container">
              <img className="app__image" src={phoebe} alt="phoebe smiling" />
            </div>
            <p className="app__arrow">⇟⇟</p>
          </div>
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
      </Router>
    </Fragment>
  );
};
