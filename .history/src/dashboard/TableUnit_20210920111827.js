import React from "react";

function TableUnit({ table }) {
  return (
    <div className="card">
      <div className="card-header">{table.table_name}</div>
      <div className="card-body"><p>Capacity: </p></div>
    </div>
  );
}

export default TableUnit;
