import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage"
import AboutUs from '../AboutUs'
import NavBar from '../../components/NavBar'
import NotFound from '../NotFound'
import Footer from "../../components/Footer";

function AppRouter() {
  return (
    <React.StrictMode>
      <div>
      <NavBar/>
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />  
          <Route  path="/about" component={AboutUs} /> 
        </Switch>
      </Router>
      </div>
      <Footer />
      </div>
    </React.StrictMode>
  );
}
export default AppRouter;
