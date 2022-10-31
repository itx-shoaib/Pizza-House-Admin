import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoyaltyScheme() {
  const [status, setStatus] = useState(false);
  const [redeem, setredeem] = useState("");
  const [points, setpoints] = useState("");
  const [currency_points, setCurrency_points] = useState("");
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");

  async function register() {
    if (getstatus === "true") {
      const details = {
        status,
        redeem,
        points,
        currency_points,
        id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      };
      try {
        const result = await axios.post(
          "http://localhost:5000/api/setting/loyality",
          details
        ).data;
        console.log(result);
        toast.success("Data has been saved");
  
        setStatus(false);
        setCurrency_points("");
        setpoints("");
        setredeem("");
      } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!");
      }
    }
    else{
      const details = {
        status,
        redeem,
        points,
        currency_points,
        id
      };
      try {
        const result = await axios.post(
          "http://localhost:5000/api/setting/loyality",
          details
        ).data;
        console.log(result);
        toast.success("Data has been saved");
  
        setStatus(false);
        setCurrency_points("");
        setpoints("");
        setredeem("");
      } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!");
      }
    }

  }
  return (
    <>
      <ToastContainer />
      <h6 className="px-1">LOYALTY SCHEME</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <p className="boldtext">Loyalty Scheme</p>
          <div className="row">
            <div className="col-6">
              <label className="form-check-label" htmlFor="loyalty">
                Loyalty Status
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="loyalty"
                value={status}
                checked={status}
                onChange={(e) => {
                  setStatus(e.target.checked);
                }}
              />
            </div>
          </div>
          <label htmlFor="redeem" className="mt-3">
            Redeem At:
          </label>
          <input
            id="redeem"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="0"
            value={redeem}
            onChange={(e) => {
              setredeem(e.target.value);
            }}
          />
          <label htmlFor="currency" className="mt-3">
            Points Per Unit Currency:
          </label>
          <input
            id="currency"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="i.e 5points for 1$ spending"
            value={points}
            onChange={(e) => {
              setpoints(e.target.value);
            }}
          />
          <label htmlFor="perunit" className="mt-3">
            Per Unit Currency Points:
          </label>
          <input
            id="perunit"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="i.e give 1$ for every 10 points"
            value={currency_points}
            onChange={(e) => {
              setCurrency_points(e.target.value);
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

export default LoyaltyScheme;
