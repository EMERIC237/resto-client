import React from "react";

function SearchReservation() {
  "Enter a customer's phone number"
  return (
    <>
      <form class="d-flex">
        <input
        name="mobile-number"
          class="form-control me-2"
          type="search"
          placeholder="Enter a customer's phone number"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Find
        </button>
      </form>
    </>
  );
}

export default SearchReservation;
