import React, { useState, useEffect } from "react";

function CreateTable() {
  const initialState = {
    table_name: "",
    capacity: "",
  };
  const [table, setTable] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setTable((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  function cancel() {
      history.go
  }
  
}

export default CreateTable;
