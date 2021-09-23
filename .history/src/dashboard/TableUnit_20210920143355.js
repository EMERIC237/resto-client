import React from "react";
import UnassignTable from "../utils/api"

function TableUnit({ table }) {
  function finishHandler() {
    if (window.confirm(`Is this table ready to seat new guests?`)) {
      unAssi
    }
  }
  return (
    <div className="card">
      <div className="card-header">{table.table_name}</div>
      <div className="card-body justify-content-between">
        <p className="text-start">{table.capacity}</p>
      </div>
      <div className="card-footer">
        {table.reservation_id ? (
          <button
            type="button"
            className="btn btn-secondary mr-2 "
            onClick={() => finishHandler()}
          >
            Finish
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default TableUnit;
