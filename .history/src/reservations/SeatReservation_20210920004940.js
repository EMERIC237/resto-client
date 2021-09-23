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
  const tablesOptions = tables.map((table, index) => (
    <option key={index} value={table.table_id}>
      {table.table_name} - {table.capacity}
    </option>
  ));
  if (tablesError) {
    return <div>{tablesError.message}</div>;
  }

  return (
  );
}

export default SeatReservation;
