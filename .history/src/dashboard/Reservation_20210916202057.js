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
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{reservation_date}</td>
        <td>{reservation_time}</td>
        <td>{people}</td>
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
  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Reservation Date</th>
          <th>Reservation Time</th>
          <th>People</th>
        </tr>
      </thead>
      <tbody>{</tbody>
    </table>
  )
}

export default Reservation;
