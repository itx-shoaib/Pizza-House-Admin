import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link,useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse, { attributesToProps } from 'html-react-parser';

function AddPage() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState(true);
  const [updatetitle, setupdatetitle] = useState()
  const [updatedescription, setupdatedescription] = useState()
  const getstatus = localStorage.getItem("status");

  const { ID } = useParams();
  const [data, setData] = React.useState('');
  const handleSubmit = (event) => {
      event.preventDefault();
      alert(title)
  };

  const inputHandler = (event, editor) => {
    setdescription(editor.getData());
    // alert(parse(editor.getData()).props.children);
      // Define your onSubmit function here
      // ...
      // for example, setData() here

  };

  async function add() {
    const details = {
      title,
      description,
      status
    }

    try {

      // setloading(true)
      const result = await axios.post("http://localhost:5000/api/superadmin/addpage",details).data;
      console.log(result)
      // toast.success("Registration Successfull")
      // setloading(true)
      setInterval(() => {
        window.location.href = "/pages"
      }, 2000);

      settitle('');
      setdescription('');



  } catch (error) {
      console.log(error);
      // toast.warn("Something went wrong!")
      // setloading(true)
  }
  }

  async function edit() {
    const details = {
      ID,
      updatetitle,
      updatedescription
    }
    alert(updatedescription)

    // try {
    //   const result = await axios.post("http://localhost:5000/api/superadmin/editpage",details).data; 
    // } catch (error) {
    //   console.log(error)
    // }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`http://localhost:5000/api/superadmin/editpageitem/${ID}`)
        ).data;
        setupdatetitle(data.data['title']);
        setupdatedescription(data.data['description']);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Navbar />
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
          {ID>0 ?(<>
            <div className="col-lg-9">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <h1>PAGES</h1>
                  </div>

                  <div className="container bs mb-5">
                    <div className="row">
                      <div className="col-6 mt-5">
                        <h6>PAGES INFORMATION</h6>
                      </div>
                      <div className="col-6 text-end mt-5">
                        <Link to='/pages'><button type="button" className="btn btn-primary">
                          BACK TO PAGES
                        </button></Link>
                      </div>
                      <hr style={{ padding: "0px" }} className="mt-4"></hr>
                    </div>

                    <div className="row">
                      <div className="col">
                        <input
                          style={{ padding: "20px" }}
                          type="text"
                          className="form-control"
                          placeholder="Title"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={updatetitle}
                          onChange={(e)=>{setupdatetitle(e.target.value)}}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mt-3 mb-5">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label text-muted"
                        >
                          Content
                        </label>
                        <CKEditor
                        id="inputText"
                        editor={ClassicEditor}
                        value={updatedescription}
                        
                        onChange={inputHandler}
                        // value={updatetitle}
                        //   onChange={(e)=>{setupdatetitle(e.target.value)}}
                        // value={parse(updatedescription).props.children}
                        
                        />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col text-end mb-4">
                        <button style={{ backgroundColor: '#4650DD', color: 'white' }} type="button" className="btn" onClick={edit}>Save</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>):(<>
            <div className="col-lg-9">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <h1>PAGES</h1>
                  </div>

                  <div className="container bs mb-5">
                    <div className="row">
                      <div className="col-6 mt-5">
                        <h6>PAGES INFORMATION</h6>
                      </div>
                      <div className="col-6 text-end mt-5">
                        <Link to='/pages'><button type="button" className="btn btn-primary">
                          BACK TO PAGES
                        </button></Link>
                      </div>
                      <hr style={{ padding: "0px" }} className="mt-4"></hr>
                    </div>

                    <div className="row">
                      <div className="col">
                        <input
                          style={{ padding: "20px" }}
                          type="text"
                          className="form-control"
                          placeholder="Title"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={title}
                          onChange={(e)=>{settitle(e.target.value)}}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mt-3 mb-5">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label text-muted"
                        >
                          Content
                        </label>
                        <CKEditor
                        id="inputText"
                        editor={ClassicEditor}
                        onChange={inputHandler}
                         />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col text-end mb-4">
                        <button style={{ backgroundColor: '#4650DD', color: 'white' }} type="button" className="btn" onClick={add}>Save</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>)}

        </div>
      </div>
    </>
  );
}

export default AddPage;
