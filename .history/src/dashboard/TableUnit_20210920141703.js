import React from "react";

function TableUnit({ table }) {
  return (
    <div className="card">
      <div className="card-header">{table.table_name}</div>
      <div className="card-body justify-content-between">
        <p className="text-start">{table.capacity}</p>
      </div>
      <div className="card-footer">
        {}
        <button type="button" className="btn btn-secondary mr-2 ">
          Finish
        </button>
      </div>
    </div>
  );
}

export default TableUnit;
