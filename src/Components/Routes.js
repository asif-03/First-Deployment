import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './History';
import HomePage from "./HomePage";
import Question from "./Question";
import Topic from "./Topic";
import LoginPage from "./LoginPage"

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/Topic" component={Topic} />
          <Route path="/Question" component={Question} />
          <Route path="/loginPage" component={LoginPage} />
        </Switch>
      </Router>
    )
  }
}
