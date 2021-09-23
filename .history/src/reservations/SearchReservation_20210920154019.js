import React, { useState, useEffect } from "react";

function SearchReservation() {
  const [searchValue, setSearchValue] = useState("");
  function changeHandler({ target: { name, value } }) {
    setSearchValue(value);
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
