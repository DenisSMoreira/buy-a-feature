import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import PopularVotePage from "views/PopularVote/PopularVotePage.js";
import RewardPage from "views/Reward/RewardPage.js";
import SchedulePage from "views/Schedule/SchedulePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/popular-vote" component={PopularVotePage} />
      <Route path="/reward" component={RewardPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
