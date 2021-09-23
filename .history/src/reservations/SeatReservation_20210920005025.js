import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { AssignTable, listTables } from "../utils/api";

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
    
    
  );
}

export default SeatReservation;
