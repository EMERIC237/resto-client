import React from "react";

function Reservation({ detailed, reservations }) {
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
      },
      index
    ) => (
      <tr key={index}>
        <td>{reservation_id}</td>
        <td>}</td>
        <td>{reservation_id}</td>
        <td>{reservation_id}</td>
        <td>{reservation_id}</td>
      </tr>
    )
  );
}

export default Reservation;
