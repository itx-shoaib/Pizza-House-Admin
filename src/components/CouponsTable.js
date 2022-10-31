import React from "react";
import { Link } from "react-router-dom";

function CouponsTable() {
  return (
    <>
      <div className="row sharebox">
        <h3 className="my-3 mx-5 responsiveness">COUPON MANAGEMENT</h3>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="d-flex justify-content-between mobile-responsive">
            <h6>COUPONS</h6>
            <Link to="/coupon/create"><button className="btn btn-info">ADD NEW COUPON</button></Link>
          </div>
          <br />
          <hr />
          <br />
          <div className="table-responsive">
            <table className="table mb-5 mx-4 bs">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Price</th>
                  <th scope="col">Active From</th>
                  <th scope="col">Active To</th>
                  <th scope="col">Limit Number</th>
                  <th scope="col">Used From</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CouponsTable;
