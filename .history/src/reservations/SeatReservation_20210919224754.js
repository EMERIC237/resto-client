import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { AssignTable, listTables } from "../utils/api";

function SeatReservation() {
  const history = useHistory();
  const [tables, setTables] = useState([]);
  const [tableChoice, setTableChoice] = useState({});
  const [tablesError, setTablesError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    listTables(abortController.signal).then(setTables).catch(setTablesError);
    return () => {
      abortController.abort();
    };
  }, []);
  function changeHandler({ target: { name, value } }) {
    setTableChoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    AssignTable(tableChoice.t)
  }
  function cancel() {
    history.goBack();
  }
  const tablesOptions = tables.map((table, index) => (
    <option key={index} value={table.table_id}>
      {table.table_name} - {table.capacity}
    </option>
  ));

  return (
    <section>
      <h1>Assign a table to the reservation</h1>
      <form onSubmit={submitHandler}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="Table Number">Table Number</label>
            <select
              className="form-control"
              id="table_id"
              name="table_id"
              value={tableChoice.table_id}
              required={true}
              onChange={changeHandler}
            >
              {tablesOptions}
            </select>
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={cancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default SeatReservation;
