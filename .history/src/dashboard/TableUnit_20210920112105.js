import React from "react";

function TableUnit({ table }) {
  return (
    <div className="card">
      <div className="card-header">{table.table_name}</div>
      <div className="card-body">
        <p className="text-start">Capacity:{table.capacity} </p>
        <p className="text-end"></p>
      </div>
    </div>
  );
}

export default TableUnit;
