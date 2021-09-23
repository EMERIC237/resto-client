import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { listTables } from "../utils/api";

function SeatReservation() {
  const history = useHistory();
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    listTables(abortController.signal).then(setTables).catch(setTablesError);
    return () => {
      abortController.abort();
    };
  }, []);

  console.log(tables);
  const tablesOptions = tables.map((table) => (
    <option k>
      `${table.table_name} - ${table.capacity}`
    </option>
  ));
  function submitHandler(p) {}
  function cancel() {
    history.goBack();
  }

  return (
    <section>
      <h1>Assign a table to the reservation</h1>
      <form onSubmit={submitHandler}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="Table Number">Table Number</label>
            <select className="form-control" id="table_id">
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