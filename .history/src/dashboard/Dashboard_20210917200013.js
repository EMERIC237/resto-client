import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { listReservations } from "../utils/api";
import Reservation from "./Reservation";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const search = useLocation().search;
  const dateFromQuery = new URLSearchParams(search).get("date");
  const dateForUrl = dateFromQuery ? dateFromQuery : date;
  useEffect(loadDashboard, [dateForUrl]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations(dateForUrl, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  if (reservationsError) {
    console.log(typeof reservationsError, reservationsError.message);
    return (
      <main>
        <div>Something went wrong</div>
        <p>{reservationsError.message}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for the date :{dateForUrl}</h4>
      </div>
      {reservations.length === 0 ? (
        <div>No Reservations For this date</div>
      ) : (
        <div>
          <Reservation detailed={true} reservations={reservations} />
        </div>
      )}
    </main>
  );
}

export default Dashboard;
