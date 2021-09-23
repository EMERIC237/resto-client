import React from "react";

function SeatReservation() {
  return (
    <section>
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="Table Number">Table Number</label>
            <select className="form-control" id="table_id">
              <option>...No option here yet</option>
            </select>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default SeatReservation;
