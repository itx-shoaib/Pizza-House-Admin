import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AddResturant() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("this is a temporary desc");
  const [address, setaddress] = useState("this is a temporary address");
  const [phone, setphone] = useState("this is a tempoarary phone");
  const [charges, setcharges] = useState("23");
  const [minimum_order, setminimum_order] = useState("10");
  const [average_order, setaverage_order] = useState("10");
  const [time, settime] = useState("20")
  const [owner_name, setowner_name] = useState("");
  const [owner_email, setowner_email] = useState("");
  const [owner_address, setowner_address] = useState("");
  const [owner_phone, setowner_phone] = useState("");
  const [domain, setdomain] = useState("");
  const [primary_color, setprimary_color] = useState("");
  const [secondary_color, setsecondary_color] = useState("");
  const [app_name, setapp_name] = useState("");
  const [delivery_min, setdelivery_min] = useState("23");
  const [location_search, setlocation_search] = useState("This is a temporary location search");
  const [stripe_connect, setstripe_connect] = useState("");
  const [enable_stripe, setenable_stripe] = useState("");
  const [stripe_key, setstripe_key] = useState("");
  const [stripe_secret, setstripe_secret] = useState("");
  const [map_api, setmap_api] = useState("");
  const [analytics, setanalytics] = useState("");
  const [client_id, setclient_id] = useState("");
  const [client_secret, setclient_secret] = useState("");
  const [redirect, setredirect] = useState("");
  const [fclient_id, setfclient_id] = useState("");
  const [fclient_secret, setfclient_secret] = useState("");
  const [fclient_redirect, setfclient_redirect] = useState("");
  const [app_id, setapp_id] = useState("");
  const [rapi_key, setrapi_key] = useState("Rapi key");
  const [sms, setsms] = useState("This is a temporary sms");
  const [optomany_enabled, setoptomany_enabled] = useState("");
  const [oclient_id, setoclient_id] = useState("");
  const [oclient_secret, setoclient_secret] = useState("");
  const [oterminal_id, setoterminal_id] = useState("");
  const [otest_mode, setotest_mode] = useState("");
  const getstatus = localStorage.getItem("status");

  async function register(){
    const details = {
      name,
      // description,
      // address,
      // phone,
      // charges,
      // minimum_order,
      // average_order,
      // time,
      owner_name,
      owner_email,
      owner_address,
      owner_phone,
      domain,
      primary_color,
      secondary_color,
      app_name,
      delivery_min,
      // location_search,
      stripe_connect,
      enable_stripe,
      stripe_key,
      stripe_secret,
      map_api,
      analytics,
      client_id,
      client_secret,
      redirect,
      fclient_id,
      fclient_secret,
      fclient_redirect,
      app_id,
      rapi_key,
      sms,
      optomany_enabled,
      oclient_id,
      oclient_secret,
      oterminal_id,
      otest_mode
    }


    try {

      // setloading(true)
      const result = await axios.post("http://localhost:5000/api/setting/addresturant",details).data;
      console.log(result)
      // toast.success("Registration Successfull")
      // setloading(true)
      // setInterval(() => {
      //   window.location.href = "/resturant"
      // }, 2000);

      // alert("data has been entered")

      setname("");
      setdescription("");
      setaddress("");
      setphone("");
      setcharges("");
      setminimum_order("");
      setaverage_order("");
      settime("");
      setowner_name("");
      setowner_email("");
      setowner_address("");
      setowner_phone("");
      setdomain("");
      setprimary_color("");
      setsecondary_color("");
      setapp_name("");
       setdelivery_min("");
       setlocation_search("");
       setstripe_connect("");
      setenable_stripe("");
      setstripe_key("");
      setstripe_secret("");
      setmap_api("");
      setanalytics("");
      setclient_id("");
      setclient_secret("");
      setredirect("");
      setfclient_id("");
      setfclient_secret("");
      setfclient_redirect("");
      setapp_id("");
      setrapi_key("");
      setsms("");
      setoptomany_enabled("");
      setoclient_id("");
      setoclient_secret("");
      setoterminal_id("");
      setotest_mode("");


  } catch (error) {
      alert(error);
      // toast.warn("Something went wrong!")
      // setloading(true)
  }
  } 

  return (
    <>
      <Navbar />

      {/* side Dashboard menu  */}

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">
                {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : JSON.parse(localStorage.getItem("currentuser"))[0].role === 2 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ): (<>
                Owner
                </>)}
              </h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (<>
                  <li className="nav-item">
                  <Link to="/home" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/liveorders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      {" "}
                      Live Orders
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/customers"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="ms-1 d-none d-sm-inline"> Customers</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-book"></i>
                    <span className="ms-1 d-none d-sm-inline"> Menu</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/setting"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-gear"></i>
                    <span className="ms-1 d-none d-sm-inline"> Setting</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={{ border: "none" }}>
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed boldtext align-middle "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{ padding: "1rem" }}
                        >
                          <i className="fa-solid fa-arrows-to-dot"></i>
                          <span className="ms-1">Marketing</span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/coupon"
                            >
                              <i className="fa-solid fa-tag btnicon"></i>
                              Discounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/bulksms"
                            >
                              <i className="fa-solid fa-message btnicon"></i>
                              Bulk SMS
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/share"
                            >
                              <i className="fa-solid fa-share btnicon"></i>
                              Share
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    to="/change-password"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>
                </>):(<>
                  <li className="nav-item">
                  <Link to="/home" className="nav-link align-middle sidebartag">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/resturant"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fas fa-utensils"></i>
                    <span className="ms-1 d-none d-sm-inline"> Resturants</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pages"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fas fa-file"></i>
                    <span className="ms-1 d-none d-sm-inline"> Pages</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/report"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fas fa-chart-bar"></i>
                    <span className="ms-1 d-none d-sm-inline"> Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/change-password"
                    className="nav-link align-middle sidebartag"
                  >
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>

                </>)}
                
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="container">
              <div className="row mt-5">
                <h1>RESTAURANT MANAGEMENT</h1>

                <div className="ms-3 bs">
                  {/* 1st row  */}
                  <div className="row my-5 mx-4">
                    <div className="col-md-6 text-start mt-2">
                      <h4>RESTAURANT MANAGEMENT</h4>
                    </div>
                    <div className="col-md-6 text-end mt-2 resLeft">
                      <Link to="/resturant">
                        <button className="btn btn-primary">
                          Back to list
                        </button>
                      </Link>
                    </div>
                    <hr
                      style={{ padding: "1px" }}
                      className="mt-4 text-muted"
                    ></hr>

                    {/* form start here  */}
                    <form className="needs-validation" novalidate>
                      <div className="col-12">
                        <label htmlFor="validationCustom01" className="form-label">
                          Restaurant Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="Restaurant Name here..."
                          value={name}
                          onChange={(e)=>{setname(e.target.value)}}
                          required
                        />
                        
                        <hr
                          style={{ padding: "1px" }}
                          className="mt-4 text-muted"
                        ></hr>

                        <p className="boldtext">Owner information</p>

                        <label htmlFor="validationCustom02" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Owner Name here..."
                          value={owner_name}
                          onChange={(e)=>{setowner_name(e.target.value)}}
                          required
                        />

                        <label
                          htmlFor="validationCustom03"
                          className="form-label mt-3"
                        >
                          Owner Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="Owner Email here..."
                          value={owner_email}
                          onChange={(e)=>{setowner_email(e.target.value)}}
                          required
                        />

                        <label
                          htmlFor="validationCustom04"
                          className="form-label mt-3"
                        >
                          Owner Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom04"
                          placeholder="Owner Address here..."
                          value={owner_address}
                          onChange={(e)=>{setowner_address(e.target.value)}}
                          required
                        />

                        <label
                          htmlFor="validationCustom05"
                          className="form-label mt-3"
                        >
                          Owner Phone
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="validationCustom05"
                          placeholder="Owner Phone here..."
                          value={owner_phone}
                          onChange={(e)=>{setowner_phone(e.target.value)}}
                          required
                        />

                        <p className="boldtext mt-3">
                          Restaurant Configurations
                        </p>

                        <div className="row">
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom06"
                              className="form-label"
                            >
                              Restaurant Domain
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom06"
                              placeholder="Restaurant Domain here..."
                              value={domain}
                              onChange={(e)=>{setdomain(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom07"
                              className="form-label"
                            >
                              Facebook Client ID
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom07"
                              placeholder="149191290511851"
                              value={fclient_id}
                              onChange={(e)=>{setfclient_id(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom08"
                              className="form-label"
                            >
                              Primary Color
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom08"
                              placeholder="#ed1c24"
                              value={primary_color}
                              onChange={(e)=>{setprimary_color(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom09"
                              className="form-label"
                            >
                              Facebook Client Secret
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom09"
                              placeholder="b462f5140b8899e7e30f7088507b5d6e"
                              value={fclient_secret}
                              onChange={(e)=>{setfclient_secret(e.target.value)}}
                              required
                            />
                          </div>

                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom10"
                              className="form-label"
                            >
                              Secondary Color
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom10"
                              placeholder="#ed1c24"
                              value={secondary_color}
                              onChange={(e)=>{setsecondary_color(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom11"
                              className="form-label"
                            >
                              Facebook Redirect
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom11"
                              placeholder="https://demo.clicknfeed.co.uk/login/facebook/redirect"
                              value={fclient_redirect}
                              onChange={(e)=>{setfclient_redirect(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom12"
                              className="form-label"
                            >
                              App Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom12"
                              placeholder="App Name"
                              value={app_name}
                              onChange={(e)=>{setapp_name(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom13"
                              className="form-label"
                            >
                              Onesignal App ID
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom13"
                              placeholder="7bdddb53-1951-48e5-9eea-a3a742ee34f5"
                              value={app_id}
                              onChange={(e)=>{setapp_id(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom14"
                              className="form-label"
                            >
                              Deleivery Intervals in Mins
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom14"
                              placeholder="30"
                              value={delivery_min}
                              onChange={(e)=>{setdelivery_min(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom15"
                              className="form-label"
                            >
                              Onesignal Rest API Key
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom15"
                              placeholder="MjgwMzZiNzktZmE4Yy00NTAxLWIzYWEtYjljNjlkZWZlNzNh"
                              value={rapi_key}
                              onChange={(e)=>{setrapi_key(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom16"
                              className="form-label"
                            >
                              Enable Stripe Connect
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom16"
                              placeholder="1"
                              value={stripe_connect}
                              onChange={(e)=>{setstripe_connect(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom17"
                              className="form-label"
                            >
                              Optomany Enabled
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom17"
                              placeholder="Optomany Enabled"
                              value={optomany_enabled}
                              onChange={(e)=>{setoptomany_enabled(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom18"
                              className="form-label"
                            >
                              Enable Stripe
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom18"
                              placeholder="1"
                              value={enable_stripe}
                              onChange={(e)=>{setenable_stripe(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom19"
                              className="form-label"
                            >
                              Optomany Client ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom19"
                              placeholder="optomany_test_integrations"
                              value={oclient_id}
                              onChange={(e)=>{setoclient_id(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom20"
                              className="form-label"
                            >
                              Stripe Key
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom20"
                              placeholder="pk_live_51KSou6DrZLAAclh0SJwdqtHiZEwuN6hHE5sZakppRuylPfiJPnAfaD5ENyuzS0GvjodOt0Zwb6mW1TfeHUxluGt300WwhoY3Dp"
                              value={stripe_key}
                              onChange={(e)=>{setstripe_key(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom21"
                              className="form-label"
                            >
                              Optomany Client Secret
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom21"
                              placeholder="t*8s=AaNQMPQYGcJpXaU3mn-u7t=vS3cek7hh2LCbQDcj2BLgngH*7jv0$Eh7bjI"
                              value={oclient_secret}
                              onChange={(e)=>{setoclient_secret(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom22"
                              className="form-label"
                            >
                              Stripe Secret
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom22"
                              placeholder="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"
                              value={stripe_secret}
                              onChange={(e)=>{setstripe_secret(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom23"
                              className="form-label"
                            >
                              Optomany Terminal ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom23"
                              placeholder="eb4528f5-4304-474b-be8a-99997d9036d5"
                              value={oterminal_id}
                              onChange={(e)=>{setoterminal_id(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom24"
                              className="form-label"
                            >
                              Google Maps API Key
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom24"
                              placeholder="AIzaSyAKwIV-6y31LwzBieBhJqAztrZL9C76T7Y"
                              value={map_api}
                              onChange={(e)=>{setmap_api(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom25"
                              className="form-label"
                            >
                              Optomany Test Mode
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom25"
                              placeholder="1"
                              value={otest_mode}
                              onChange={(e)=>{setotest_mode(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom26"
                              className="form-label"
                            >
                              Google Analytics
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom26"
                              placeholder="297699884"
                              value={analytics}
                              onChange={(e)=>{setanalytics(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom27"
                              className="form-label"
                            >
                              Google Client ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom27"
                              placeholder="308457639432-6vp4qfabdbusdv2hep3etcc5dobvra7j.apps.googleusercontent.com"
                              value={client_id}
                              onChange={(e)=>{setclient_id(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom28"
                              className="form-label"
                            >
                              Google Client Secret
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom28"
                              placeholder="0mkZQNb7833xqrMpEVpfLZN3"
                              value={client_secret}
                              onChange={(e)=>{setclient_secret(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label
                              htmlFor="validationCustom29"
                              className="form-label"
                            >
                              Google Redirect
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom29"
                              placeholder="https://demo.clicknfeed.co.uk/login/google/redirect"
                              value={redirect}
                              onChange={(e)=>{setredirect(e.target.value)}}
                              required
                            />
                          </div>
                          <div className="col-12 text-end mt-3">
                            <button className="btn btn-primary" type="submit" onClick={register}>
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddResturant;
