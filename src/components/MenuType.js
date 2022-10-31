import React,{useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function MenuType() {
  const [lowercase, setlowercase] = useState(false)
  const [uppercase, setuppercase] = useState(false)
  const [capitalized, setcapitalized] = useState(false)
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");

  async function register(){
    if(getstatus === "true"){
      const details = {
        lowercase,
        uppercase,
        capitalized,
        id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      }
      try {
        
        const result = await axios.post("http://localhost:5000/api/setting/menutype",details).data;
        console.log(result)
        toast.success("Data has been saved")
  
        setlowercase(false)
        setuppercase(false)
        setcapitalized(false)
  
  
  
    } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
  
    }
    }
    else{
      const details = {
        lowercase,
        uppercase,
        capitalized,
        id
      }
      try {
        
        const result = await axios.post("http://localhost:5000/api/setting/menutype",details).data;
        console.log(result)
        toast.success("Data has been saved")
  
        setlowercase(false)
        setuppercase(false)
        setcapitalized(true)
  
  
  
    } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
  
    }
    }

  }
  return (
    <>
    <ToastContainer />
      <h6 className="px-1">MENU TYPE</h6>
      <hr />
      <br />
      <div className="container d-flex menutypesetting">
        <div className="form-check my-2 mx-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault0"
            id="flexRadioDefault1"
            checked={uppercase}
            onChange={(e)=>{setuppercase(e.target.checked)}}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Uppercase
          </label>
        </div>
        <div className="form-check my-2 mx-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault0"
            id="flexRadioDefault3"
            checked={lowercase}
            onChange={(e)=>{setlowercase(e.target.checked)}}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Lowercase
          </label>
        </div>
        <div className="form-check my-2 mx-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault0"
            id="flexRadioDefault2"
            checked={capitalized}
            onChange={(e)=>{setcapitalized(e.target.checked)
            
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Capitalized
          </label>
        </div>
      </div>
      <div className="container mt-5 text-center">
        <button className="btn btn-info py-2" onClick={register} >Save</button>
      </div>
    </>
  );
}

export default MenuType;
