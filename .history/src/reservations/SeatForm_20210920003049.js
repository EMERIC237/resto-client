import React from 'react'

function SeatForm() {
    return (
        <section>
          <h1>Assign a table to the reservation</h1>
          <form onSubmit={submitHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="Table Number">Table Number</label>
                <select
                  className="form-control"
                  id="table_id"
                  name="table_id"
                  value={tableChoice.table_id}
                  required={true}
                  onChange={changeHandler}
                >
                  {tablesOptions}
                </select>
              </div>
              {choiceError ? (
                <div className="alert alert-danger"> {choiceError.message}</div>
              ) : null}
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={cancel}
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

export default SeatForm
