import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";
import formatReservationDate from "../utils/format-reservation-date";
import formatReservationTime from "../utils/format-reservation-time";
import { previous } from "../utils/date-time";

export default function CreateReservation() {
  const [creationError, setCreationError] = useState([]);
  const history = useHistory();
  function submitHandler(reservation) {
    reservation.people = parseInt(reservation.people);
    createReservation(reservation)
      .then(formatReservationDate)
      .then(formatReservationTime)
      .then((savedReservation) =>
        history.push(`/dashboard?date=${savedReservation.reservation_date}`)
      )
      .catch((error) => {
        if (error.message === "The restaurant is closed on Tuesdays") {
          setCreationError((prevError) => [...prevError, error]);
          const currentDate = new Date("2021-10-01");
          const previous = new Date(today);

          yesterday.setDate(yesterday.getDate() - 1);
          createReservation(reservation).then().catch();
        }
      });
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
      <ReservationForm
        onCancel={cancel}
        onSubmit={submitHandler}
        creationError={creationError}
      />
    </>
  );
}
