import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReferralScheme() {
  const [status, setStatus] = useState(false);
  const [new_customer, setnew_customer] = useState("");
  const [existing_customer, setexisting_customer] = useState("");
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");

  async function register() {
    if (getstatus === "true") {
      const details = {
        status,
        new_customer,
        existing_customer,
        id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      };
      try {
        const result = await axios.post(
          "http://localhost:5000/api/setting/referral",
          details
        ).data;
        console.log(result);
        toast.success("Data has been saved");
  
        setStatus(false);
        setnew_customer("");
        setexisting_customer("");
      } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!");
      }
    }
    else{
      const details = {
        status,
        new_customer,
        existing_customer,
        id
      };
      try {
        const result = await axios.post(
          "http://localhost:5000/api/setting/referral",
          details
        ).data;
        console.log(result);
        toast.success("Data has been saved");
  
        setStatus(false);
        setnew_customer("");
        setexisting_customer("");
      } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!");
      }
    }

  }
  return (
    <>
      <ToastContainer />
      <h6 className="px-1">REFERRAL SCHEME</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <p className="boldtext">Referral Scheme</p>

          <div className="row">
            <div className="col-6">
              <label className="form-check-label" htmlFor="referral">
                Referral Status
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="referral"
                value={status}
                checked={status}
                onChange={(e) => {
                  setStatus(e.target.checked);
                }}
              />
            </div>
          </div>
          <label htmlFor="referee" className="mt-3">
            Referee (New Customer):
          </label>
          <input
            id="referee"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="0"
            value={new_customer}
            onChange={(e) => {
              setnew_customer(e.target.value);
            }}
          />
          <label htmlFor="referrer" className="mt-3">
            Referrer (Existing Customer):
          </label>
          <input
            id="referrer"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="0"
            value={existing_customer}
            onChange={(e) => {
              setexisting_customer(e.target.value);
            }}
          />
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2" onClick={register}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralScheme;
