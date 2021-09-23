import React from "react";

function TableUnit({ table }) {
  return (
    <div className="card">
      <div className="card-header">{table.table_name}</div>
      <div className="card-body justify-content-between">
        <p className="text-start">{table.capacity}</p>
      </div>
      <div className="card-footer">
        {table.reservation_id ? }
        
      </div>
    </div>
  );
}

export default TableUnit;
