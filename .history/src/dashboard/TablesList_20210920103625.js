import React from "react";

function TablesList({ tables }) {
    const tablesList = tables.map((table, index)=>(
        <li key={index}>
            <div className="card">
      <div className="card-body">
        <div className="card-text d-flex justify-content-between">
          <p className="text-start">{table.table_name}</p>
          <p className="text-end">{table.ca}</p>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary mr-2 "
            onClick={() => {
              history.push(`/decks/${deckId}/cards/${card.id}/edit`);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger mr-2"
            onClick={deleteClickHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
        </li>
    ))
  return <div></div>;
}

export default TablesList;
