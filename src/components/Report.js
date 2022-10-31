import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import ReactPaginate from 'react-paginate';
const { RangePicker } = DatePicker;

function Report() {
  const [orderReport, setorderReport] = useState([])
  const [orderReport1, setorderReport1] = useState([])
  const [type, settype] = useState("-- Select an option --");
  const [duplicateorderReport, setduplicateorderReport] = useState([])
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const getstatus = localStorage.getItem("status");
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % duplicateorderReport.length;
    console.log(`event selected ${event.selected * 6}`)
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  useEffect(() => {
    // Fetch orderHistory from another resources.
    const endOffset = itemOffset + 6;
    console.log(`Loading orderHistory from ${itemOffset} to ${endOffset}`);
    setorderReport(duplicateorderReport.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(duplicateorderReport.length / 6));
  }, [itemOffset,orderReport]);

  var orderData = [
    {
      name: "ORDERS",
      value: 1768,
    },
    {
      name: "PLATFORM",
      value: 1083.8,
    },
    {
      name: "PROCESSOR",
      value: 1137.02,
    },
    {
      name: "NET",
      value: 38974.79,
    },
    {
      name: "TOTAL",
      value: 41195.61,
    },
  ];

  function filterByName(e) {
    settype(e);

    if (e !== "-- Select an option --") {

      const tempresturants = duplicateorderReport.filter(
        (Report) =>Report.ID === parseInt(e)
      );
      setorderReport(tempresturants);
    } else {
      setorderReport(orderReport1);
    }
  }

  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
    settodate(moment(dates[1]).format("DD-MM-YYYY"));
   
    if(dates[0] && dates[1]){
      const temporders = duplicateorderReport.filter(
        (order) => {
          console.log(Date.parse(dates[0]._d)
            ,Date.parse(order.datetime),Date.parse(dates[1]._d)
            )
          return Date.parse(dates[0]._d)<Date.parse(order.datetime)&&Date.parse(dates[1]._d)>Date.parse(order.datetime)}
      );
      setorderReport(temporders);
      // setOrders(temporders);
    }
    else{
      setorderReport(orderReport)
    }

    // alert(fromdate)
    

    // var temp = []
    // var availablity = false;
    // for (let i = 0; i < orderHistory.length; i++) {
    //   if (orderHistory.length < 0) {
    //     if(moment(orderHistory[i].DateTime).format('MMMM Do YYYY').isBetween(fromdate , todate)){
    //       alert("Yes there are some")
    //     }
    //     else{
    //       alert("testing fail")
    //     }
    //   }
    //   else{
    //     alert("In the else")
    //   }
      
    // }
 
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(
            "http://localhost:5000/api/superadmin/orderreport"
          )
        ).data;
        setorderReport(data.data);
        setorderReport1(data.data);
        setduplicateorderReport(data.data);
      } catch (error) {
        console.log(error, "err");
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
                <div className="col">
                  <h1>ORDERS REPORT</h1>
                </div>
              </div>

              <div className="container bs">
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Filter by Restaurant
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={"-- Select an option --"}
                      value={type}
                      onChange={(e) => {
                        filterByName(e.target.value);
                      }}
                    >
                      <option>-- Select an option --</option>
                      {orderReport1.length > 0 && orderReport1.map((report)=>{
                        return <>
                          <option key={report.ID} value={report.ID}>{report.name}</option>
                        </>
                      })}
                    </select>
                  </div>
                  <div className="col-md-4 mt-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Payment Method
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={"-- Select an option --"}
                    >
                      <option >-- Select an option --</option>
                      <option value="1">All</option>
                      <option value="2">COD</option>
                      <option value="3">STRIPE</option>
                    </select>
                  </div>
                  <div className="col-md-4 mt-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Date Range
                    </label>
                    <div className="row g-0">
                      <div className="col-10">
                        {/* <input
                          type="date"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                        /> */}
                        <RangePicker
                        format="DD-MM-YYYY"
                        onChange={filterByDate}
                      />
                      </div>
                      {/* <div className="col-2 text-center mt-2">
                        <span>To</span>
                      </div>
                      <div className="col-5">
                        {" "}
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Server"
                          aria-label="Server"
                        />
                      </div> */}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col mt-3 mb-5">
                      <button
                        style={{ backgroundColor: "#4650DD", color: "white" }}
                        type="button"
                        className="btn"
                      >
                        Export
                      </button>
                      <button
                        style={{ backgroundColor: "#4650DD", color: "white" }}
                        type="button"
                        className="btn ms-2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {orderData.map((data) => {
                  return (
                    <div key={data.value} className="col">
                      <Link
                        to="/"
                        style={{ textDecoration: "none" }}
                        className="cardslink"
                      >
                        <div className="col bs responsiveness mt-4">
                          <div className="text-center">
                            <h5 style={{ paddingTop: "10px" }}>{data.name}</h5>
                            <hr
                              style={{ padding: "0px" }}
                              className="text-muted"
                            ></hr>
                            <h4
                              style={{ paddingBottom: "15px" }}
                              className="boldtext"
                            >
                              ${data.value}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="container bs mb-5">
                <div className="row">
                  <div className="col mt-5">
                    <h6>ORDERS REPORT</h6>
                  </div>
                  <div className="col d-flex justify-content-end text-end mt-5">
                    <h3
                      style={{
                        backgroundColor: "#4650DD",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      £41,195.61
                    </h3>
                  </div>
                  <hr style={{ padding: "0" }}></hr>
                </div>

                <div className="row">
                  <div className="table-responsive">
                  <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        #
                      </th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Creation Date</th>
                      <th scope="col">Method</th>
                      <th scope="col">Status</th>
                      <th scope="col">PLATFORM FEE</th>
                      <th scope="col">PROCESSOR FEE</th>
                      <th scope="col">NET</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  {orderReport.map((report) => {
                    return (
                      <tbody>
                        <tr key={report.cart_Id}>
                          <th scope="row">{report.cart_Id}</th>
                          <td>{report.cname}</td>
                          <td>{moment(report.datetime).format('MMMM Do YYYY, h:mm a')}</td>
                          <td>stripe</td>
                          <td>
                          {report.Orderstatus === "1" ? (
                                  <>Pending</>
                                ) : report.Orderstatus === "2" ? (
                                  <>In Process</>
                                ) : report.Orderstatus === "3" ? (
                                  <>Completed</>
                                ) : (
                                  <>Rejected</>
                                )}
                          </td>
                          <td>£ 0.25</td>
                          <td>£ 9</td>
                          <td>£{report.total}</td>
                          <td>£{report.total}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                  </div>
                </div>
                

                <div className="row">
                  <div className="col d-flex justify-content-end mt-4 mb-4">
                    {/* <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav> */}
                                                    <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
         
                marginPagesDisplayed={2}
          
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
             
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
             
              />
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

export default Report;
