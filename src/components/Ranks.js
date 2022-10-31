import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Ranks() {
  const getstatus = localStorage.getItem("status");
  const [rank, setrank] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const details = {
          id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
        }
        const data = await (
          await axios.post(
            "http://localhost:5000/api/superadmin/getranks",
            details
          )
        ).data;

        setrank(data.data)
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
        <div className="col-auto col-lg-3 col-xl-2 px-sm-2 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">
                {getstatus === "true" &&
                JSON.parse(localStorage.getItem("currentuser"))[0].role ===
                  1 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : JSON.parse(localStorage.getItem("currentuser"))[0].role ===
                  2 ? (
                  <>{JSON.parse(localStorage.getItem("currentuser"))[0].name}</>
                ) : (
                  <>Owner</>
                )}
              </h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {getstatus === "true" &&
                JSON.parse(localStorage.getItem("currentuser"))[0].role ===
                  1 ? (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/home"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-house"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/liveorders"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span className="ms-1 d-none d-sm-inline">
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
                        <span className="ms-1 d-none d-sm-inline">
                          {" "}
                          Customers
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/menu"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-book"></i>
                        <span className="ms-1 d-none d-sm-inline"> Menu</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={`/setting/${
                          JSON.parse(localStorage.getItem("currentuser"))[0]
                            .resturant_ID
                        }`}
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-gear"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          {" "}
                          Setting
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div className="accordion" id="accordionExample">
                        <div
                          className="accordion-item"
                          style={{ border: "none" }}
                        >
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
                        <span className="ms-1 d-none d-sm-inline">
                          Password
                        </span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/home"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-house"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Dashboard
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
                        to="/ranks"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-star"></i>
                        <span className="ms-1 d-none d-sm-inline"> Ranks</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/resturant"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fas fa-utensils"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Resturants
                        </span>
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
                      <Link
                        to="/translations"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-hourglass-end"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Translations
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/change-password"
                        className="nav-link align-middle sidebartag"
                      >
                        <i className="fa-solid fa-lock-open"></i>
                        <span className="ms-1 d-none d-sm-inline">
                          Password
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <h1>RANKS</h1>
                  </div>

                  <div className="container bs mb-5 pb-5">
                    <div className="row">
                      <div className="col-6 mt-5">
                        <h6>RANKS</h6>
                      </div>
                      <div className="col-6 text-end mt-5">
                        <Link to="/addrank">
                          <button
                            type="button"
                            className="btn btn-primary btnSignColor"
                          >
                            <i className="fa-solid fa-plus me-2"></i> Create
                            Rank
                          </button>
                        </Link>
                      </div>
                      <hr style={{ padding: "0px" }} className="mt-4"></hr>
                    </div>

                    <div className="table-responsive mt-5">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Default Value</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rank.map((type)=>{
                            return <>
                          <tr>
                            <th scope="row">{type.ID}</th>
                            <td>{type.name}</td>
                            <td>{type.value1}</td>
                            <td>
                              {type.status1 === "true" ? (<span className="badge text-bg-info info">
                                Active
                              </span>
                              ):(
                                <span className="badge bg-danger info">
                               Not Active
                              </span>
                              )}
                              
                            </td>
                            <td>
                              <Link to={`/editrank/${type.ID}`}><button
                                className="btn btn-info btn-sm"
                                style={{ color: "white" }}
                              >
                                Edit
                              </button></Link>
                            </td>
                          </tr>
                           
                            </>
                          })}
                          
                        </tbody>
                      </table>
                    </div>
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

export default Ranks;
