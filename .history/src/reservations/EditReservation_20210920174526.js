import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import ReservationForm from "./ReservationForm";

function EditReservation() {
  const history = useHistory();
  const { reservation_id } = useParams();
  const [d, setd] = useState(initialState)
  return <div></div>;
}

export default EditReservation;
