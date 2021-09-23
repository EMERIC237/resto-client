import React from "react";

function Reservation({ detailed, reservations }) {
  const reservationList = reservations.map((reservation, index) => (
    <li key={index}>
      {reservation.last_name},{reservation.reservation_date}
    </li>
  ));
  const reservationTable = reservations.map(({re}))
}

export default Reservation;
({first_name: "first",
last_name: "last",
mobile_number: "800-555-1212",
reservation_date: expect.stringContaining("2025-01-01"),
reservation_time: expect.stringContaining("17:30"),
people: 2,
})