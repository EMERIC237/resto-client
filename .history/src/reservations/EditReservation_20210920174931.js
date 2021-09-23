import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { readReservation } from "../utils/api";
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

  function submitHandler(updatedReservation){
      updatedReservation
  }
  return <div></div>;
}

export default EditReservation;
