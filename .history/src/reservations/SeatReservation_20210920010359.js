import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { AssignTable, listTables } from "../utils/api";
import SeatForm from "./SeatForm";

function SeatReservation() {
  const { reservation_id } = useParams();
  const history = useHistory();
  const [choiceError, setChoiceError] = useState(null);

  function submitHandler(tableChoice) {
    AssignTable(tableChoice.table_id,reservation_id).
  }
  function cancel() {
    history.goBack();
  }

  return (
    <>
      <h1>Assign a table to the reservation</h1>
      <SeatForm
        onCancel={cancel}
        onSubmit={submitHandler}
        choiceError={choiceError}
      />
    </>
  );
}

export default SeatReservation;
