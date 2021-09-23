import React from "react";
import { useHistory } from "react-router-dom";
function Reservation({ reservation, setError, reservations, setReservations }) {
  const { push } = useHistory();

  return (
    <div>
      <span>{reservation.first_name}</span>
      <span>{reservation.mobile_number}</span>
      <span>{reservation.first_name}</span>
      <span>{reservation.first_name}</span>
      <span>{reservation.first_name}</span>
    </div>
  );
}

export default Reservation;
