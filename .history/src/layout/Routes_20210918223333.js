import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import CreateReservation from "../reservations/CreateReservation";
import CreateTable from "../tables/CreateTable";
import { today } from "../utils/date-time";

/**
 * Defines all the routes for the application.
 *
 *
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/tables/new">
        <CreateTable />
      </Route>
      <Route path={}`/reservations/:reservation_id/seat`>
        {" "}
        <CreateReservation />
      </Route>
      <Route path="/reservations/new">
        {" "}
        <CreateReservation />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={today()} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
