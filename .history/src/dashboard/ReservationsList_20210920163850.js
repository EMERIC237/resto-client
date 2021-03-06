import React from "react";
import { updateReservationStatus } from "../utils/api";

function ReservationsList({ detailed, reservations }) {
  function cancelHandler() {
    if (
      window.confirm(
        "Do you want to cancel this reservation? This cannot be undone."
      )
    ) {
      updateReservationStatus(table.reservation_id, "finished");
    }
  }
  function seatHandler(reservation_id) {
    updateReservationStatus(reservation_id, "seated");
  }
  const reservationList = reservations.map((reservation, index) => (
    <li key={index}>
      {reservation.last_name},{reservation.reservation_date}
    </li>
  ));
  const reservationTable = reservations.map(
    (
      {
        reservation_id,
        first_name,
        last_name,
        reservation_date,
        reservation_time,
        people,
        status,
      },
      index
    ) => (
      <tr key={index}>
        <td>{reservation_id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{reservation_date}</td>
        <td>{reservation_time}</td>
        <td>{people}</td>
        <td>{status}</td>
        {status === "booked" ? (
          <td>
            <a
              className="btn btn-primary"
              href={`/reservations/${reservation_id}/seat`}
              role="button"
              onClick={() => seatHandler()}
            >
              Seat
            </a>
          </td>
        ) : null}
        <td>
          <a
            className="btn btn-primary"
            href={`/reservations/${reservation_id}/edit`}
            role="button"
            onClick={() => seatHandler()}
          >
            Edit
          </a>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => cancelHandler()}>
            Cancel
          </button>
        </td>
      </tr>
    )
  );
  if (!detailed) {
    return (
      <div>
        <ol>{reservationList}</ol>
      </div>
    );
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Reservation Date</th>
          <th scope="col">Reservation Time</th>
          <th scope="col">Number of People</th>
        </tr>
      </thead>
      <tbody>{reservationTable}</tbody>
    </table>
  );
}

export default ReservationsList;
