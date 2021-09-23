import React from "react";

function TableUnit({ table }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-text d-flex justify-content-between">
          <p className="text-start">table Name: {table.table_name}</p>
          <p className="text-end">Capacity: {table.capacity}</p>
        </h3>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary mr-2 ">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableUnit;
