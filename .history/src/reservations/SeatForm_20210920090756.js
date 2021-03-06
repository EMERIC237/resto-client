import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { listTables } from "../utils/api";

function SeatForm({ onSubmit, onCancel, choiceError }) {
  const initialState = {
    table_id: 0,
  };
  const [tables, setTables] = useState([]);
  const [tableChoice, setTableChoice] = useState(initialState);
  const [tablesError, setTablesError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    let mounted = true
    listTables(abortController.signal).then((tab)setTables).catch(setTablesError);
    return () => {
      setTables([]);
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
    onSubmit(tableChoice);
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
    <>
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
          {choiceError ? (
            <div className="alert alert-danger"> {choiceError.message}</div>
          ) : null}
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default SeatForm;
