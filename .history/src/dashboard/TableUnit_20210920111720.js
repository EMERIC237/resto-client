import React from "react";

function TableUnit({ table }) {
  return (
    <div className="card">
      <div className="card-header">
          {table.table_name}
    </div>
    <div className = "card-body">
        
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
