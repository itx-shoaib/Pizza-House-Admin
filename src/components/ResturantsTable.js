import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import moment from "moment";

function ResturantsTable() {
  const [resturants, setresturants] = useState([]);
  const [resturants1, setresturants1] = useState([]);
  const [type, settype] = useState("-- Select an option --");
  const [show, setshow] = useState("-- Select an option --");
  const [duplicateresturants, setduplicateresturants] = useState([])
  const [duplicateresturants1, setduplicateresturants1] = useState([])
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % duplicateresturants.length;
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
    setresturants(duplicateresturants.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(duplicateresturants.length / 6));
  }, [itemOffset,resturants]);

  async function del(ID) {
    const info = {
      ID,
    };

    try {
      const data = (
        await axios.post(
          "http://localhost:5000/api/superadmin/deleteresturant",
          info
        )
      ).data;
      update();
    } catch (error) {
      console.log(error);
    }
  }


  async function deactivate(ID) {
    const info = {
      ID,
    };
    try {
      const data = (
        await axios.post(
          "http://localhost:5000/api/superadmin/deactivateresturant",
          info
        )
      ).data;
      update();
    } catch (error) {
      console.log(error);
    }
  }

  async function activate(ID) {
    const info = {
      ID,
    };
    try {
      const data = (
        await axios.post(
          "http://localhost:5000/api/superadmin/activateresturant",
          info
        )
      ).data;
      update();
    } catch (error) {
      console.log(error);
    }
  }

  async function update() {
    try {
      const data = await (
        await axios.get("http://localhost:5000/api/superadmin/getallresturants")
      ).data;
      setresturants(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Login as function
  async function loginas(id){
    const detail = {
      id
    }
    try {
      const data = await (
        await axios.post("http://localhost:5000/api/superadmin/loginas",detail)
      ).data;
      
      if(data.loginas === "false"){
      toast.warn(data.message)
      }

      if (data.loginas === "true") {
        localStorage.removeItem("currentuser");
        localStorage.removeItem("status");
        localStorage.setItem('currentuser', JSON.stringify(data.data));
        localStorage.setItem('status', 'true');

        window.location.href = "/home"

      }
      
    } catch (error) {
      console.log(error)
      toast.warn(error.response.data.message)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(
            "http://localhost:5000/api/superadmin/getallresturants"
          )
        ).data;
        setresturants(data.data);
        setresturants1(data.data);
        setduplicateresturants(data.data);
        setduplicateresturants1(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function filterByName(e) {
    settype(e);

    if (e !== "-- Select an option --") {
      // const temprooms = duplicateorders.filter(order=>order.ID===e)
      const tempresturants = duplicateresturants.filter(
        (resturants) =>resturants.ID === parseInt(e)
      );
      console.log(tempresturants);
      // setresturants(tempresturants);
    } else {
      setresturants(resturants1);
    }
  }

  function filterByType(e) {
    setshow(e);

    if (e === "false") {
      const tempresturants = duplicateresturants.filter(
        (resturants) =>resturants.status === e
      );
      setresturants(tempresturants);
    }
     else {
      setresturants(resturants1);
    }
  }
  return (
    <>
    <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <div className="container mt-5">
            <h1 className="responsiveness text-start">RESTURANTS</h1>
            <div className="accordion responsiveness" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    FILTER
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start my-3">
                    <div className="row text-start">
                      <div className="col-md-4">
                        <label htmlFor="daterange" className="me-1 my-1">
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
                          {resturants1.length > 0 && resturants1.map((resturant)=>{
                            return <>
                            <option key={resturant.ID} value={resturant.ID}>{resturant.name}</option>
                            </>
                          })}
                          
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="daterange" className="me-1 my-1">
                          Show
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue={"-- Select an option --"}
                          value={show}
                          onChange={(e)=>{filterByType(e.target.value)}}
                        >
                          <option >-- Select an option --</option>
                          <option value="true">All</option>
                          <option value="false">Pending</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        {" "}
                        <div style={{ marginTop: "29px" }}>
                          <button className="btn btn-primary my-1 mx-1">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bs mb-5">
              {/* 1st row  */}
              <div className="row my-5 mx-4">
                <div className="col-md-6 text-start mt-5">
                  <h4>RESTURANTS</h4>
                </div>
                <div className="col-md-6 text-end mt-5 resLeft">
                  <Link to="/addresturant">
                    <button className="btn btn-primary">Add Resturant</button>
                  </Link>
                </div>
                <hr style={{ padding: "2px" }} className="mt-4 text-muted"></hr>
              </div>

              {/* 2nd row for data  */}

              <div className="row ms-3">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table style={{ marginBottom: "180px" }} className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Logo</th>
                          <th scope="col">Owner</th>
                          <th scope="col">email</th>
                          <th scope="col">Creation Date</th>
                          <th scope="col">Active</th>
                          <th scope="col">Live</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resturants &&
                          resturants.map((item) => {
                            return (
                              <>
                                <tr key={item.name}>
                                  <th scope="row">{item.name}</th>

                                  <td style={{ width: "16%" }}>
                                    {/* <Link
                                    to={`/order-detail/${order.cart_Id}/${order.customer_Id}`}
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                  > */}
                                    <img
                                      style={{ width: "56%", height: "auto" }}
                                      src={item.image}
                                      alt="...."
                                    />
                                    {/* {item.image} */}
                                    {/* </Link> */}
                                  </td>
                                  <td>{item.owner_name}</td>
                                  <td>{item.owner_email}</td>
                                  <td>{moment(item.DateTime).format('MMMM Do YYYY, h:mm a')}</td>
                                  <td>
                                    <span className="badge bg-info primary">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    {item.status === "true" ? (
                                      <>
                                        <span className="badge bg-info primary">
                                          live
                                        </span>
                                      </>
                                    ) : (
                                      <>
                                        <span className="badge bg-danger primary">
                                          Not live
                                        </span>
                                      </>
                                    )}
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
                                        // data-bs-container="body"
                                        // data-bs-placement="bottom"
                                        // data-bs-content="Deactivate"
                                      >
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                      >
                                        <Link to={`/editrestuurant/${item.ID}`}>
                                        <li className="dropdown-item">
                                          <i className="far fa-edit"></i>
                                          Edit
                                        </li>
                                        </Link>
                                        <li className="dropdown-item" onClick={()=>{loginas(item.ID)}}>
                                          <i className="fas fa-sign-in-alt"></i>
                                          Login as
                                        </li>
                                      {item.status === "true" ? (
                                        <li
                                        className="dropdown-item"
                                        onClick={() => {
                                          deactivate(item.ID);
                                        }}
                                      >
                                        <i className="far fa-times-circle"></i>
                                        Deactivate
                                      </li>
                                      ):(
                                        <li
                                        className="dropdown-item"
                                        onClick={() => {
                                          activate(item.ID);
                                        }}
                                      >
                                        <i className="far fa-check-circle"></i>
                                        Activate
                                      </li>
                                      )}

                                      
                                        <li
                                          className="dropdown-item"
                                          onClick={() => {
                                            del(item.ID);
                                          }}
                                        >
                                          {/* <i className="fa-solid fa-ban btnicon"></i> */}
                                          <i className="fas fa-trash-alt"></i>Delete
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>

                  <div
                    style={{ marginTop: "-150px" }}
                    className="d-flex justify-content-end me-5"
                  >
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

export default ResturantsTable;
