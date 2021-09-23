import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { AssignTable, listTables } from "../utils/api";

function SeatReservation() {
  const { reservation_id } = useParams();
  const history = useHistory();
  const [choiceError, setChoiceError] = useState(null);
  
  function changeHandler({ target: { name, value } }) {
    setTableChoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  console.log(tableChoice.table_id);
  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    AssignTable(tableChoice.table_id, reservation_id)
      .then(history.push(`/dashboard`))
      .catch(setChoiceError);
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
