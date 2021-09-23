import React from "react";

function SeatReservation() {
    function submitHandler(p) {
        
    }
function cancel() {
    
}
  return (
    <section>
      <form onSubmit={submitHandler}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="Table Number">Table Number</label>
            <select className="form-control" id="table_id">
              <option>...No option here yet</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={Cancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default SeatReservation;
