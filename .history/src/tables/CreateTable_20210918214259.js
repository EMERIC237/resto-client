import React from 'react'

function CreateTable() {
    function su(params) {
        
    }
    return (
        <>
          <form onSubmit={submitHandler}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="form-control"
                  value={reservation.first_name}
                  required={true}
                  placeholder="First name of the client"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="form-control"
                  value={reservation.last_name}
                  required={true}
                  placeholder="Last name of the client"
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
}

export default CreateTable
