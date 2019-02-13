import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../HomePage"
import AboutUs from '../AboutUs'
import NavBar from '../../components/NavBar'
import NotFound from '../NotFound'
import Footer from "../../components/Footer"
import DetailBlog from "../DetailBlog"
import BlogList from '../../components/BlogList';
import ContactUs from '../ContactUs';

function AppRouter() {
  const publicPath = '/ojesy-landingpage/';
  const routeCodes = {
    HOME : publicPath,
    ABOUT : `${ publicPath }about`,
    BLOG : `${ publicPath }blog`,
    CONTACT : `${ publicPath }contact`,
    DETAIL : `${ publicPath }detail/:detailId`,
    NOT : `${ publicPath }NotFound`,
  }
  return (
    <React.StrictMode>
      <div>
      <NavBar/>
      <div>
      <Router>
        <Switch>
          <Route exact path={routeCodes.HOME} component={HomePage} />  
          <Route  path={routeCodes.ABOUT} component={AboutUs} /> 
          <Route  path={routeCodes.DETAIL} component={DetailBlog} /> 
          <Route path={routeCodes.BLOG} component={BlogList}/>
          <Route path={routeCodes.NOT} component={NotFound} />
          <Route path={routeCodes.CONTACT} component={ContactUs}/>
          <Redirect from='*' to={routeCodes.NOT} />
        </Switch>
      </Router>
      </div>
      <Footer />
      </div>
    </React.StrictMode>
  );
}
export default AppRouter;
