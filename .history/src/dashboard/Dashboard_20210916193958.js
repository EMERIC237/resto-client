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
  console.log(date)
  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations(dateForUrl, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  if (reservationsError) {
    return <div>NO RESERVATIONS HERE</div>;
  }
  // console.log(reservations[0]);
  const listForReservations = reservations.map((reservation) => (
    <Reservation key={reservation.reservation_id} reservation={reservation} />
  ));
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <div>{listForReservations}</div>
    </main>
  );
}

export default Dashboard;
