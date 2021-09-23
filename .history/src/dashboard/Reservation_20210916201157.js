import React from "react";

function Reservation({ detailed, reservations }) {
  const reservationList = reservations.map((reservation, index) => (
    <li key={index}>
      {reservation.last_name},{reservation.reservation_date}
    </li>
  ));

}

export default Reservation;
