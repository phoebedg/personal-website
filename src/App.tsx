import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./HomePage/Home.component";
import phoebepassportphoto from "./static/phoebepassportphoto.jpeg";
import "./App.css";

export const App: React.FC = () => {
  return (
    <Fragment>
      <div className="app__header">
        <h1 className="app__title">phoebedg</h1>
        <img className="app__image" src={phoebepassportphoto} alt="passport" />
        <p className="app__arrow">⇟⇟</p>
      </div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};
