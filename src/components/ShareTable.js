import React from "react";
import { Link } from "react-router-dom";

function ShareTable() {
  return (
    <>
      <div className="row sharebox">
        <h1 className="my-3 mx-5 responsiveness">SHARE MENU</h1>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="container">
            <h6>SHARE MENU WITH YOUR AUDIENCE</h6>
          </div>
          <br />
          <hr />
          <br />
          <img className="qrcode" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=http://restaurant.clicknfeed.co.uk/menu/golden-fry-sedgley"/>
          <button className="btn btn-info btn-lg boldtext qrcode">Download QR Code</button>
        </div>
      </div>
    </>
  );
}

export default ShareTable;
