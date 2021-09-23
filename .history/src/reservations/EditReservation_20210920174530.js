import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import ReservationForm from "./ReservationForm";

function EditReservation() {
  const history = useHistory();
  const { reservation_id } = useParams();
  const [de, setde] = useState(initialState)
  return <div></div>;
}

export default EditReservation;
