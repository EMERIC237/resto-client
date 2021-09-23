import React, { useState, useEffect } from "react";
import { listReservations } from "../utils/api";
import formatReservationDate from "../utils/format-reservation-date";
import formatReservationTime from "../utils/format-reservation-time";

function SearchReservation() {
  const [searchValue, setSearchValue] = useState("");
  const [foundReservations, setFoundReservations] = useState([]);
  function changeHandler({ target: { name, value } }) {
    setSearchValue(value);
  }
  console.log(searchValue);
  const onSubmit = (searchValue) => {
    listReservations(searchValue, true)
      .then(formatReservationDate)
      .then(formatReservationTime)
      .then(setFoundReservations)
      .catch(console.error());
  };
  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(searchValue);
  }

  return (
    <>
      <form class="d-flex">
        <input
          name="mobile-number"
          class="form-control me-2"
          type="search"
          placeholder="Enter a customer's phone number"
          aria-label="Search"
          value={searchValue}
          onChange={changeHandler}
        />
        <button class="btn btn-outline-success" type="submit">
          Find
        </button>
      </form>
    </>
  );
}

export default SearchReservation;
