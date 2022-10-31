import React,{useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function SettingsApp() {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [api_key, setapi_key] = useState("")
  const [main_printer, setmain_printer] = useState("")
  const [standard_printer, setstandard_printer] = useState("")
  const [kitchen_printer, setkitchen_printer] = useState("")
  const [standard_print, setstandard_print] = useState("On order received")
  const [main_print, setmain_print] = useState("We accept the order")
  const [kitchen_print, setkitchen_print] = useState("We accept the order")
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");

  async function register() {
    if(getstatus === "true"){
      const details = {
        title,
        description,
        api_key,
        main_printer,
        standard_printer,
        kitchen_printer,
        standard_print,
        main_print,
        kitchen_print,
        id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      }
      try {

        const result = await axios.post("http://localhost:5000/api/setting/apps",details).data;
        console.log(result)
        toast.success("Data has been saved")
  
        settitle("");
        setdescription("");
        setapi_key("");
        setmain_printer("");
        setstandard_printer("");
        setkitchen_printer("");
        setstandard_print("On order received");
        setmain_print("We accept the order");
        setkitchen_print("We accept the order")
  
  
  
    } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
  
    }
    }
    else{
      const details = {
        title,
        description,
        api_key,
        main_printer,
        standard_printer,
        kitchen_printer,
        standard_print,
        main_print,
        kitchen_print,
        id
      }
      try {

        const result = await axios.post("http://localhost:5000/api/setting/apps",details).data;
        console.log(result)
        toast.success("Data has been saved")
  
        settitle("");
        setdescription("");
        setapi_key("");
        setmain_printer("");
        setstandard_printer("");
        setkitchen_printer("");
        setstandard_print("On order received");
        setmain_print("We accept the order");
        setkitchen_print("We accept the order")
  
  
  
    } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
  
    }
    }

  }
  return (
    <>
    <ToastContainer />
      <h6 className="px-1">APPS</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <h1 className="boldtext">Impressum</h1>
          <hr />
          <label htmlFor="titleimpress" className="mt-3">
            Title of Impressum:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Impressum"
            value={title}
            onChange={(e)=>{settitle(e.target.value)}}
          />
          <label htmlFor="impressum" className="mt-3">
            Impressum:
          </label>
          <textarea
            id="impressum"
            className="form-control my-2 py-2"
            type="text"
            rows="5"
            value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
          />
          <h1 className="boldtext mt-5">Print Node</h1>
          <hr />
          <label htmlFor="titleimpress" className="mt-3">
            Print Node API Key:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode.com api key"
            value={api_key}
            onChange={(e)=>{setapi_key(e.target.value)}}
          />
          <label htmlFor="titleimpress" className="mt-3">
            Main Thermal Printer ID:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode printer  ID"
            value={main_printer}
            onChange={(e)=>{setmain_printer(e.target.value)}}
          />
          <label htmlFor="titleimpress" className="mt-3">
            Kitchen Thermal Printer ID:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode printer ID"
            value={kitchen_printer}
            onChange={(e)=>{setkitchen_printer(e.target.value)}}
          />
          <label htmlFor="titleimpress" className="mt-3">
            Standard Printer ID:
          </label>
          <input
            id="titleimpress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Enter printnode printer ID for A4 Invoice printing"
            value={standard_printer}
            onChange={(e)=>{setstandard_printer(e.target.value)}}
          />
          <label htmlFor="titleimpress" className="mt-3">
            Print A4 Standard order when:
          </label>
          <select className="form-select" aria-label="Default select example" value={standard_print} onChange={(e)=>{setstandard_print(e.target.value)}}>
            <option value="We accept the order">We accept the order</option>
            <option value="On order received" selected>
              On order received
            </option>
          </select>
          <label htmlFor="titleimpress" className="mt-3">
            Print on main thermal printer when:
          </label>
          <select className="form-select" aria-label="Default select example" value={main_print} onChange={(e)=>{setmain_print(e.target.value)}}>
            <option value="We accept the order" selected>
              We accept the order
            </option>
            <option value="On order received">On order received</option>
          </select>
          <label htmlFor="titleimpress" className="mt-3">
            Print on kitchen thermal printer when:
          </label>
          <select className="form-select" aria-label="Default select example" value={kitchen_print} onChange={(e)=>{setkitchen_print(e.target.value)}}>
            <option value="We accept the order" selected>
              We accept the order
            </option>
            <option value="On order received">On order received</option>
          </select>
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2" onClick={register} >Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsApp;
