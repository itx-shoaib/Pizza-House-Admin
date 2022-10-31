import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

function Pages() {
  const [page, setpage] = useState([]);
  const [duplicatepage, setduplicatepage] = useState([]);
  const getstatus = localStorage.getItem("status");
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % duplicatepage.length;
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
    setpage(duplicatepage.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(duplicatepage.length / 6));
  }, [itemOffset,page]);
  // const [status, setstatus] = useState("");

  // const [status2, setstatus2] = useState(true);

  async function del(ID){
    const details = {
      ID
    }

    try {
      const result = await axios.post(
        `http://localhost:5000/api/superadmin/deletepage`,
        details
      ).data;
      setpage(result.data)
      update()
      // toast.success("Item has been updated")
      // setInterval(() => {
      //   window.location.href="/menu"
      // }, 2000);

    } catch (error) {
      console.log(error);
      // toast.warn("Something went wrong try again!")
    }
  }

  async function update(){
    try {
      const data = await (await axios.get('http://localhost:5000/api/superadmin/getallpages')).data
      setpage(data.data)
       setduplicatepage(data.data);

    } catch (error) {
      console.log(error);
    }
  }

  async function change(ID,status) {

    const details = {
      ID,
      status
    }

    try {
        const data = await (
          await axios.post(
            "http://localhost:5000/api/superadmin/updatepagestatus",details
          )
        ).data;
        setpage(data.data);
       
        update()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(
            "http://localhost:5000/api/superadmin/getallpages"
          )
        ).data;
        setpage(data.data);
        setduplicatepage(data.data);
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
                    <h1>PAGES</h1>
                  </div>

                  <div className="container bs mb-5">
                    <div className="row">
                      <div className="col-6 mt-5">
                        <h6>PAGES</h6>
                      </div>
                      <div className="col-6 text-end mt-5">
                        <Link to='/addpage'><button type="button" className="btn btn-primary">
                          ADD PAGE
                        </button></Link>
                      </div>
                      <hr style={{ padding: "0px" }} className="mt-4"></hr>
                    </div>

                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: "50%" }} scope="col">
                            Title
                          </th>
                          <th style={{ width: "20%" }} scope="col">
                            Content
                          </th>
                          <th style={{ width: "20%" }} scope="col">
                            Show as link
                          </th>
                          <th style={{ width: "20%" }} scope="col">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      {page && page.map((pages) => {
                        return (
                          <tbody>
                            <tr key={pages.ID}>
                              <td >{pages.title}</td>
                              <td>
                                <Link to={`/addpage/${pages.ID}`}>Click for details</Link>
                              </td>
                              <td>
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckChecked"
                                    checked={pages.status === "true" ? (true):(false)}
                                    onChange={(e)=>{setpage(page.map((item)=>( {...item,status:JSON.stringify(e.target.checked)})));change(pages.ID,JSON.stringify(e.target.checked))}}
                                    // onChange={(e)=>{change(pages.ID,e)}}
                                    // onClick={()=>{change(pages.ID)}}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary deactivatebtn blueclrname"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li className="dropdown-item" onClick={()=>{del(pages.ID)}}>
                                      <i className="fa-solid fa-ban btnicon"></i>
                                      Delete
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>

                    <div className="row">
                      <div className="col mb-4 mt-4 d-flex justify-content-end">
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
        </div>
      </div>
    </>
  );
}

export default Pages;
