import React from "react";
import { Link } from "react-router-dom";

function AddCouponTable() {
  return (
    <>
      <div className="row sharebox">
        <h3 className="my-3 mx-5 responsiveness">COUPON</h3>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="d-flex justify-content-between mobile-responsive">
            <h6>NEW COUPON</h6>
            <Link to="/coupon">
              <button className="btn btn-info">
                <i className="fa-solid fa-backward btnicon"></i>BACK TO COUPONS
              </button>
            </Link>
          </div>

          <br />
          <hr />
          <br />

          <div className="row my-2">
            <div className="col-md-3">
              <label htmlFor="namee">Name</label>
              <input
                className="form-control"
                id="namee"
                placeholder="Enter code name"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="type">Type</label>
              <input
                className="form-control"
                id="type"
                placeholder="Select Type"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="price">Price</label>
              <input
                className="form-control"
                id="price"
                placeholder="Enter Price here"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="percent">Price</label>
              <input
                className="form-control"
                id="percent"
                placeholder="Enter Percentage here"
              />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-3">
            <label htmlFor="fromdate">Active From</label>
              <input
                className="form-control"
                id="fromdate"
                placeholder="Active From"
              />
            </div>
            <div className="col-md-3">
            <label htmlFor="todate">Active To</label>
              <input
                className="form-control"
                id="todate"
                placeholder="Active To"
              />
            </div>
            <div className="col-md-3">
            <label htmlFor="limit">Limit Number</label>
              <input
                className="form-control"
                id="limit"
                placeholder="Limit number to use"
              />
            </div>
            <div className="col-md-3"></div>
          </div>

          <div className="row justify-content-end">
            <div col-md-12>
                <button className="btn btn-info">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCouponTable;
