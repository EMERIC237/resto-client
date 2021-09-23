import React from 'react'

function TableForm() {
    
    return (
        <>
          <form onSubmit={submitHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="table_name">Table name</label>
                <input
                  type="text"
                  id="table_name"
                  name="table_name"
                  className="form-control"
                  value={table.table_name}
                  required={true}
                  placeholder="First name of the client"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="capacity">Capacity</label>
                <input
                  type="text"
                  id="capacity"
                  name="capacity"
                  className="form-control"
                  value={table.capacity}
                  required={true}
                  placeholder="Number of people to be seated at the table"
                  onChange={changeHandler}
                />
              </div>
    
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </>
      );

export default TableForm