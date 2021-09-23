import React, { useState } from "react";
import { useHistory } from "react-router";
import { createTable } from "../utils/api";

export default function CreateTable() {
  const [tableError, setTableError] = useState("");
  const history = useHistory();
  function submitHandler(table) {
    createTable(table).then(history.push(`/dashboard`)).catch(setTableError);
  }

  function cancel() {
      
  }
  return <div></div>;
}
)