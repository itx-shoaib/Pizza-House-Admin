import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function RestaurantManagement() {
  const [name, setname] = useState("");
  const [updatename, setupdatename] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [charges, setcharges] = useState("");
  const [minimum_order, setminimum_order] = useState("");
  const [average_order, setaverage_order] = useState("");
  const [time, settime] = useState();
  const [owner_name, setowner_name] = useState("");
  const [updateowner_name, setupdateowner_name] = useState("");
  const [email, setemail] = useState("");
  const [updateowner_email, setupdateowner_email] = useState("");
  const [owner_phone, setowner_phone] = useState("");
  const [updateowner_phone, setupdateowner_phone] = useState("");
  const [updateowner_address, setupdateowner_address] = useState("")
  const [file, setfile] = useState("")
  const [cimage, setcimage] = useState("")
  const [rimage, setrimage] = useState("")
  const [cash, setcash] = useState(false)
  const [pickup, setpickup] = useState(false)
  const [delivery, setdelivery] = useState(false)
  const {id} = useParams();
  const getstatus = localStorage.getItem("status");



  async function register() {
    var formData = new FormData();
      formData.append("description",description);
      formData.append("id",id);
      formData.append("address",address);
      formData.append("phone",phone);
      formData.append("charges",charges);
      formData.append("minimum_order",minimum_order);
      formData.append("average_order",average_order);
      formData.append("time",time);
      formData.append("photo",file);
      formData.append("cimage",cimage);
      formData.append("rimage",rimage);
      formData.append("cash",cash);
      formData.append("pickup",pickup);
      formData.append("delivery",delivery);
   

    const config = {
      headers:{
          "Content-Type":"multipart/form-data"
      }
  }


    // const details = {
    //   id,
    //   description,
    //   address,
    //   phone,
    //   charges,
    //   minimum_order,
    //   average_order,
    //   time
    // };

    try {
      const result = await axios.post(
        "http://localhost:5000/api/setting/resturantmanagement",
        formData, config
      ).data;
      console.log(result);
      toast.success("Registration Successfull");
      // setInterval(() => {
      //   window.location.href = "/login"
      // }, 2000);


      setaddress("");
      setaverage_order("");
      setdescription("");
      setminimum_order("");
      settime("");
      setphone("");
      setcharges("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong!");
      // setloading(true)
    }
  }

  async function update(){
    try {
      const data = await (
        await axios.get(`http://localhost:5000/api/superadmin/geteditresturant/${id}`)
      ).data;
      setupdatename(data.data['name']);
      setupdateowner_name(data.data['owner_name']);
      setupdateowner_email(data.data['owner_email']);
      setupdateowner_phone(data.data['owner_phone']);
      setupdateowner_address(data.data['owner_address']);
      setminimum_order(data.data['minimum_order']);
      setaverage_order(data.data['average_order']);
      setdescription(data.data['description']);
      setaddress(data.data['address']);
      setphone(data.data['phone']);
      setcharges(data.data['charges']);
      settime(data.data['time']);
      setfile(data.data['image']);
      setcimage(data.data['cimage']);
      setrimage(data.data['rimage']);
      setcash(data.data['cash'] === 'true' ? (true):(false));
      setpickup(data.data['pickup'] === 'true' ? (true) :(false));
      setdelivery(data.data['delivery'] === 'true' ? (true):(false));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (getstatus === "true") {
      const cid = JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID;
      async function fetchData() {
        try {
          const data = await (
            await axios.get(`http://localhost:5000/api/superadmin/geteditresturant/${cid}`)
          ).data;
          update();
          setupdatename(data.data['name']);
          setupdateowner_name(data.data['owner_name']);
          setupdateowner_email(data.data['owner_email']);
          setupdateowner_phone(data.data['owner_phone']);
          setupdateowner_address(data.data['owner_address']);
          setminimum_order(data.data['minimum_order']);
          setaverage_order(data.data['average_order']);
          setdescription(data.data['description']);
          setaddress(data.data['address']);
          setphone(data.data['phone']);
          setcharges(data.data['charges']);
          settime(data.data['time']);
          
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    } else {
      async function fetchData() {
        try {
          const data = await (
            await axios.get(`http://localhost:5000/api/superadmin/geteditresturant/${id}`)
          ).data;
          update();
          setupdatename(data.data['name']);
          setupdateowner_name(data.data['owner_name']);
          setupdateowner_email(data.data['owner_email']);
          setupdateowner_phone(data.data['owner_phone']);
          setupdateowner_address(data.data['owner_address']);
          setminimum_order(data.data['minimum_order']);
          setaverage_order(data.data['average_order']);
          setdescription(data.data['description']);
          setaddress(data.data['address']);
          setphone(data.data['phone']);
          setcharges(data.data['charges']);
          settime(data.data['time']);
          
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }

  }, [])
  return (
    <>
      <ToastContainer />
      <h6 className="px-1">RESTAURANT MANAGEMENT</h6>
      <hr />
      <br />
      <form enctype="multipart/form-data">
      <div className="row">
      
        <div className="col-md-6 px-3">
          <label htmlFor="rstname" className="mt-3">
            Restaurant Name:
          </label>
          <input
            id="rstname"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Happy Pizza"
            value={updatename}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <label htmlFor="rstdescription" className="mt-3">
            Restaurant Description:
          </label>
          <input
            id="rstdescription"
            className="form-control my-2 py-2"
            type="text"
            placeholder="yummy, taco, fast food, wraps"
            name="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <label htmlFor="rstaddress" className="mt-3">
            Restaurant Address:
          </label>
          <input
            id="rstaddress"
            className="form-control my-2 py-2"
            type="text"
            placeholder="lahore, pakistan"
            name="address"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
          <label htmlFor="rstphone" className="mt-3">
            Restaurant Phone:
          </label>
          <input
            id="rstphone"
            className="form-control my-2 py-2"
            type="text"
            placeholder="xxxx-xxxxxxx"
            name="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <label htmlFor="servicecharges" className="mt-3">
            Service Charges:
          </label>
          <input
            id="servicecharges"
            className="form-control my-2 py-2"
            type="number"
            placeholder="0.00"
            name="charges"
            value={charges}
            onChange={(e) => {
              setcharges(e.target.value);
            }}
          />
          <div className="row mt-4">
            <div className="col-6">
              <label className="form-check-label" htmlFor="cod">
                Cash on Delivery
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input className="form-check-input" type="checkbox" id="cod" name="cash" value={cash} onChange={(e)=>{setcash(e.target.checked)}} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-check-label" htmlFor="pickup">
                Pickup
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input className="form-check-input" type="checkbox" id="pickup" name="pickup" value={pickup} onChange={(e)=>{setpickup(e.target.checked)}} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-check-label" htmlFor="delivery">
                Delivery
              </label>
            </div>
            <div className="col-6 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="delivery"
                name="delivery" value={delivery} onChange={(e)=>{setdelivery(e.target.checked)}}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-3">
          <label htmlFor="minimumorder" className="mt-3">
            Minimum Order:
          </label>
          <input
            id="minimumorder"
            className="form-control my-2 py-2"
            type="number"
            placeholder="10"
            name="minimum_order"
            value={minimum_order}
            onChange={(e) => {
              setminimum_order(e.target.value);
            }}
          />
          <label htmlFor="avgtime" className="mt-3">
            Average Order Prepare Time in minutes:
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="average_order"
            value={average_order}
            onChange={(e) => {
              setaverage_order(e.target.value);
            }}
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option selected value="25">
              25
            </option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="90">90</option>
            <option value="120">120</option>
          </select>
          <label htmlFor="timeslots" className="mt-3">
            Time Slots seperated in minutes:
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option selected value="30">
              30
            </option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="90"> 90</option>
            <option value="120">120</option>
          </select>
          <div className="my-3">
            <label htmlFor="formFile" className="form-label">
              Restaurant Image:
            </label>
            <input className="form-control" type="file" id="formFile" name="photo"
            onChange={(e)=>{
              setfile(e.target.files[0])
            }}
            />
            <img
              src={file}
              // src="http://restaurant.clicknfeed.co.uk/uploads/restorants/cfa8a36f-4267-4e67-8369-edfea654b59b_large.jpg"
              className="settingimg"
              alt="404 not found"
            />
          </div>
          <div className="my-3">
            <label htmlFor="formFile2" className="form-label">
              Restaurant Cover Image:
            </label>
            <input className="form-control" type="file" id="formFile2" name="cimage" 
            onChange={(e)=>{
              setcimage(e.target.files[0])
            }}
            />
          </div>
          <div className="my-3">
            <label htmlFor="formFile3" className="form-label">
              Restaurant Receipt Image:
            </label>
            <input className="form-control" type="file" id="formFile3" name="rimage" 
            onChange={(e)=>{
              setrimage(e.target.files[0])
            }}
            />
            <img
              src={rimage}
              // src="http://restaurant.clicknfeed.co.uk/uploads/restorants/cfa8a36f-4267-4e67-8369-edfea654b59b_large.jpg"
              className="settingimg"
              alt=".."
            />
          </div>
        </div>
        
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 px-3">
          <h5 className="boldtext">Owner Information</h5>
          <label htmlFor="ownname" className="mt-3">
            Own Name:
          </label>
          <input
            id="ownname"
            className="form-control my-2 py-2"
            type="text"
            placeholder="Owner"
            value={updateowner_name}
          />
          <label htmlFor="ownemail" className="mt-3">
            Owner Email :
          </label>
          <input
            id="ownemail"
            className="form-control my-2 py-2"
            type="email"
            placeholder="dakfal@dsfkal"
            value={updateowner_email}
          />
          <label htmlFor="ownphone" className="mt-3">
            Owner Phone:
          </label>
          <input
            id="ownphone"
            className="form-control my-2 py-2"
            type="text"
            placeholder="xxxx-xxxxxxx"
            value={updateowner_phone}
          />
          <input
          type="hidden"
          name="id"
          // value={JSON.parse(localStorage.getItem("currentuser"))[0].role === 2 ? (id) : (rid)} />
          value={id}/>
          <div className="container mt-5 text-center">
            <button className="btn btn-info py-2" onClick={register}>
              Save
            </button>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default RestaurantManagement;
