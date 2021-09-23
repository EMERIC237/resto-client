import React from "react";

function SearchReservation() {
  return (
    <>
      <form class="d-flex">
        <input
        name=""
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchReservation;
