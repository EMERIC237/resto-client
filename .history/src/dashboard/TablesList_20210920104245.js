import React from "react";
import TableUnit from "./TableUnit";

function TablesList({ tables }) {
  const tablesList = tables.map((table, index) => (
    <TableUnit key={index} table={table} />
  ));
  return <div>{}</div>;
}

export default TablesList;
