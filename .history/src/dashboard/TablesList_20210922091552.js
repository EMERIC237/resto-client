import React from "react";
import TableUnit from "./TableUnit";
/**
 * Defines the list of reservations in a table
 * @param detailed
 * Boolean to defines the view type of the reservations list
 * @param reservations
 * The list of reservations
 * @returns {JSX.Element}
 */
function TablesList({ tables }) {
  const tablesList = tables.map((table, index) => (
    <TableUnit key={index} table={table} />
  ));
  return (
    <>
      <h1>Tables List :</h1>
      {tablesList}
    </>
  );
}

export default TablesList;
