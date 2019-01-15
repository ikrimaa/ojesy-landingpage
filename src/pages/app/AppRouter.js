import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../base/HomePage";

function AppRouter() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />     
        </Switch>
      </Router>
    </React.StrictMode>
  );
}
export default AppRouter;
