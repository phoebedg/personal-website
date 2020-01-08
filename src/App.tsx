import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.component";
import { Home } from "./components/HomePage/Home.component";
import { Personal } from "./components/Personal/Personal.component";
import { Professional } from "./components/Professional/Professional.component";
import { Press } from "./components/Press/Press.component";
import phoebePassportPhoto from "./static/phoebePassportPhoto.jpeg";
import "./App.css";

export const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <div className="app__container">
          <Navigation />
          <div className="app__header">
            <h1 className="app__title">phoebedg</h1>
            <img
              className="app__image"
              src={phoebePassportPhoto}
              alt="passport"
            />
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
