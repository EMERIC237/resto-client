import React from "react";
import { UnassignTable, updateReservationStatus } from "../utils/api";

function TableUnit({ table }) {
  function finishHandler() {
    if (window.confirm(`Is this table ready to seat new guests?`)) {
      updateReservationStatus(table.reservation_id, "finished");
      UnassignTable(table.table_id).then(window.location.reload());
    }
  }
  return (
    <li className="breadcrumb-item">
      {}
    </li>
    // <div className="card">
    //   <div className="card-header">{table.table_name}</div>
    //   <div className="card-body justify-content-between">
    //     <p className="text-start">{table.capacity}</p>
    //     <p className="text-end">
    //       {table.reservation_id ? (
    //         <span data-table-id-status={table.table_id}>Occupied</span>
    //       ) : (
    //         <span data-table-id-status={table.table_id}>Free</span>
    //       )}
    //     </p>
    //   </div>
    //   <div className="card-footer">
    //     {table.reservation_id ? (
    //       <button
    //         type="button"
    //         className="btn btn-secondary mr-2 "
    //         data-table-id-finish={table.table_id}
    //         onClick={() => finishHandler()}
    //       >
    //         Finish
    //       </button>
    //     ) : null}
    //   </div>
    // </div>
  );
}

export default TableUnit;
