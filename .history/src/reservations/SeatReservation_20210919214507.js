import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { listTables } from "../utils/api";

function SeatReservation() {
  const history = useHistory();
  const [tables, setTables] = useState([]);
  const [tablesError, settablesError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    listTables(abortController).then(setTables).catch(settablesError);
    return () => {
      abortController.abort();
    };
  }, []);

  const tablesOptions = tables.map((table) => (
    <option>
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
              <option>...No option here yet</option>
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
