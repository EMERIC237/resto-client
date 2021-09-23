import React from 'react'

function TableUnit({table}) {
    return (
        <div className="card">
      <div className="card-body">
        <div className="card-text d-flex justify-content-between">
          <p className="text-start">{table.table_name}</p>
          <p className="text-end">{table.capacity}</p>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary mr-2 "
          >
            Finish
          </button>
          <button

        </div>
      </div>
    </div>
    )
}

export default TableUnit
