import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";

export default function CreateReservation() {
  const [creationError, setCreationError] = useState(null);
  const history = useHistory();
  function submitHandler(reservation) {
    reservation.people = parseInt(reservation.people);
    createReservation(reservation)
      .then((savedReservation) =>
        history.push(`/dashboard?date=${savedReservation.reservation_date}`)
      )
      .catch(setCreationError);
  }
  function cancel() {
    history.goBack();
  }
  if (creationError) {
    console.log(typeof creationError, creationError);
  }
  return (
    <>
      <h1>Create a reservation</h1>
      <ReservationForm onCancel={cancel} onSubmit={submitHandler} />
      {creationError ? (
        <div className="alert alert-danger"> {creationError.message}</div>
      ) : null}
    </>
  );
}
