import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import RentalMap from "./pages/RentalMap/RentalMap";
import SubletMap from "./pages/SubletMap/SubletMap";
import Roommate from "./pages/Roommate/Roommate";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/maps/rent">
        <RentalMap />
      </Route>
      <Route exact path="/maps/sublet">
        <SubletMap />
      </Route>
      <Route exact path="/roommates">
        <Roommate />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routing;
