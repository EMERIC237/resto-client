import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { readReservation, updateReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";

function EditReservation() {
  const history = useHistory();
  const { reservation_id } = useParams();
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
    updateReservation(updatedReservation).then(history.goBack());
  }
  function cancel() {
    history.goBack();
  }
  const child = reservation_id ?
  return;
}

export default EditReservation;
