import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../container/app/App";
import Recipe from "./Recipe";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

import PublicGaragePage from "../container/garagePage/PublicGaragePage";
import UserGaragePage from "../container/garagePage/UserGaragePage";
import Header from "../components/Header";

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
        {/*give the property for login user  */}
        <GaragePageRoute path="/page/:id" loginUser={"loginuser"} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  </BrowserRouter>
);

const GaragePageRoute = ({ path, loginUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loginUser === "loginuse" ? ( // Make logic for login user  access their own page  it get more detail then public user
        <UserGaragePage {...props} />
      ) : (
        <PublicGaragePage {...props} />
      )
    }
  />
);
export default Router;
