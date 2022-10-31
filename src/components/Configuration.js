import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Configuration() {
  const [order_time, setorder_time] = useState("");
  const [otp, setotp] = useState("")
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");

  async function register(){
    if (getstatus === "true") {
      const details = {
        order_time,
        otp,
        id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      }
      try {
  
        const result = await axios.post("http://localhost:5000/api/setting/config",details).data;
        console.log(result)
        toast.success("Data has been saved")
  
        setorder_time("")
        setotp("")
  
  
  
    } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
  
    }
    }
    else{
      const details = {
        order_time,
        otp,
        id
      }
      try {
  
        const result = await axios.post("http://localhost:5000/api/setting/config",details).data;
        console.log(result)
        toast.success("Data has been saved")
  
        setorder_time("")
        setotp("")
  
  
  
    } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
  
    }
    }

  }
  return (
    <>
           <ToastContainer />
      <h6 className="px-1">CONFIGURATION</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="pre-order">Pre Order Time (in mins)</label>
          <input
            id="pre-order"
            className="form-control my-2 py-2 w-50"
            type="number"
            placeholder="1000"
            value={order_time}
            onChange={(e)=>{setorder_time(e.target.value)}}
            required
          />
          <label htmlFor="otp" className="boldtext mt-4">
            Customer OTP Verification
          </label>
          <input
            id="otp"
            className="form-control my-2 py-2 w-50"
            type="text"
            placeholder="No"
            value={otp}
            onChange={(e)=>{setotp(e.target.value)}}
            required
          />
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2" onClick={register} >Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Configuration;
