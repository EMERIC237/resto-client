imrs

import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import CreateReservation from "../reservations/CreateReservation";
import { today } from "../utils/date-time";

/**
 * Defines all the routes for the application.
 *
 *
 * @returns {JSX.Element}
 */
function Routes() {
  const search = useLocation().search;
  const dateFromQuery = new URLSearchParams(search).get("date");
  const [date, setDate] = useState(today());
  if (dateFromQuery) {
    setDate(dateFromQuery);
  }
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/reservations/new">
        {" "}
        <CreateReservation />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/dashboard">
        <Dashboard date={date} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
