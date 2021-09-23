import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { readReservation, updateReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";

function EditReservation() {
  const history = useHistory();
  const { reservation_id } = useParams();
  const [editError, setEditError] = useState(null);
  const [reservation, setReservation] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
  });
  useEffect(() => {
    readReservation(reservation_id).then(setReservation);
  }, [reservation_id]);

  function submitHandler(updatedReservation) {
    if (reservation.status !== "booked") {
      return (
        <div className="alert alert-danger">
          Only reservations with the status "booked" can be edited
        </div>
      );
    } else {
      updateReservation(updatedReservation)
        .then(history.goBack())
        .catch(setEditError);
    }
  }
  function cancel() {
    history.goBack();
  }
  const  {created_at,ireservation_id,status,updated_at, ...test} = reservation
  const child = reservation_id ? (
    <ReservationForm
      onSubmit={submitHandler}
      onCancel={cancel}
      Error={editError}
      initialState={reservation}
    />
  ) : (
    <p>Loading...</p>
  );
  return (
    <>
      <h1>Edit the Reservation</h1>
      {child}
    </>
  );
}

export default EditReservation;
