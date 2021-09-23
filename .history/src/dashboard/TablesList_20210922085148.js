import React from "react";
import TableUnit from "./TableUnit";

function TablesList({ tables }) {
  const tablesList = tables.map((table, index) => (
    <TableUnit key={index} table={table} />
  ));
  return <>
  <h1></h1>
  {tablesList}</>;
}

export default TablesList;
