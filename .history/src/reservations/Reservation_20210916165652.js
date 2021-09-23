import React from "react";
import { useHistory } from "react-router-dom";
function Reservation({ reservation, setError, reservations, setReservations }) {
  const { push } = useHistory();

  return (
      <div>
          <span>{reservation.first}</span>
      </div>
  );
}

export default Reservation;
