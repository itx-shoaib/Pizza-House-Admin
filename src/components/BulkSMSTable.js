import React from "react";
import { Link } from "react-router-dom";

function BulkSMSTable() {
  return (
    <>
      <div className="row sharebox">
        <h1 className="my-3 mx-5 responsiveness">Bulk SMS</h1>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="container">
            <h6>Bulk SMS</h6>
          </div>
          <br />
          <hr />
          <br />
          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              SELECT ALL
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div className="my-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Select Customers
            </label>
            <input
              type="email"
              className="form-control smscustomer"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="my-5">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="9"
              placeholder="Type Message Here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg mlauto">Send</button>
        </div>
      </div>
    </>
  );
}

export default BulkSMSTable;
