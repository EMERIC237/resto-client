import React from "react";

function ReservationsList({ detailed, reservations }) {
  function seatHandler(reservation) {
    
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
