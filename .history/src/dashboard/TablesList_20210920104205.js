import React from "react";
import TableUnit from "./TableUnit";

function TablesList({ tables }) {
    const tablesList = tables.map((table, index)=>(
        <TableUnit k/>
    ))
  return <div></div>;
}

export default TablesList;
