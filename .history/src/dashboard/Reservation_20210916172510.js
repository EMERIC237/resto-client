import React from "react";

function Reservation({ reservation }) {
  clg
  return (
    <div>
      <span>{reservation.first_name}</span>
      <span>{reservation.mobile_number}</span>
      <span>{reservation.last_name}</span>
      <span>{reservation.reservation_date}</span>
      <span>{reservation.reservation_time}</span>
    </div>
  );
}

export default Reservation;
