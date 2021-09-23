import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { AssignTable, listTables } from "../utils/api";
import SeatForm from "./SeatForm";

function SeatReservation() {
  const { reservation_id } = useParams();
  const history = useHistory();
  const [choiceError, setChoiceError] = useState(null);

  function submitHandler(tableChoice) {

  }
  function cancel() {
    history.goBack();
  }

  return (
    <h1>Assign a table to the reservation</h1>
    <SeatForm onCancel={cancel} onSubmit={submitHandler}/>
    
  );
}

export default SeatReservation;
