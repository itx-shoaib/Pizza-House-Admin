import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import ReactPaginate from 'react-paginate';
const { RangePicker } = DatePicker;

function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [orders1, setOrders1] = useState([]);
  const [orderHistory, setorderHistory] = useState([]);
  const [orderHistory1, setorderHistory1] = useState([]);
  const [duplicateorders, setduplicateorders] = useState([]);
  const [duplicateorderHistory, setduplicateorderHistory] = useState([]);
  const [type, settype] = useState("-- Select an option --");
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  // const [filter,setFilter]=React.useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const getstatus = localStorage.getItem("status");

  async function searchByName() {
    // alert("you have searched")
  }
  console.log(duplicateorderHistory.length)


  // for orderHistory pagination
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % duplicateorderHistory.length;
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
    setorderHistory(duplicateorderHistory.slice(itemOffset, endOffset));
    console.log(10, orderHistory);
    setPageCount(Math.ceil(duplicateorderHistory.length / 6));
    console.log(10, orderHistory.length / 6);
  }, [itemOffset, orders]);

  // For order pagination
  const handlePageClick1 = (event) => {
    const newOffset = (event.selected * 6) % duplicateorders.length;
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
    setOrders(duplicateorders.slice(itemOffset, endOffset));
    console.log(10, orderHistory);
    setPageCount(Math.ceil(duplicateorders.length / 6));
    console.log(10, orderHistory.length / 6);
  }, [itemOffset, orders]);
  function filterByDate(dates) {

    if (dates) {


      setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
      settodate(moment(dates[1]).format("DD-MM-YYYY"));

      if (dates[0] && dates[1]) {
        const temporders = duplicateorderHistory.filter(
          (order) => {
            console.log(Date.parse(dates[0]._d)
              , Date.parse(order.DateTime), Date.parse(dates[1]._d)
            )
            return Date.parse(dates[0]._d) < Date.parse(order.DateTime) && Date.parse(dates[1]._d) > Date.parse(order.DateTime)
          }
        );
        setorderHistory(temporders);


        // setOrders(temporders);
      }
      else {
        const endOffset = itemOffset + 6;
        console.log(`Loading orderHistory from ${itemOffset} to ${endOffset}`);
        setorderHistory(duplicateorderHistory.slice(itemOffset, endOffset));

      }
    } else {
      console.log(dates)
      const endOffset = itemOffset + 6;
      console.log(`Loading orderHistory from ${itemOffset} to ${endOffset}`);
      setorderHistory(duplicateorderHistory.slice(itemOffset, endOffset));
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


  function filterByDate2(dates) {
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
    settodate(moment(dates[1]).format("DD-MM-YYYY"));

    if (dates[0] && dates[1]) {
      const temporders = duplicateorders.filter(
        (order) => {
          console.log(Date.parse(dates[0]._d)
            , Date.parse(order.DateTime), Date.parse(dates[1]._d)
          )
          return Date.parse(dates[0]._d) < Date.parse(order.DateTime) && Date.parse(dates[1]._d) > Date.parse(order.DateTime)
        }
      );
      setOrders(temporders);


      // setOrders(temporders);
    }
    else {
      setOrders(orders)
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

  function filterByName(e) {
    settype(e);

    if (e !== "-- Select an option --") {
      // const temprooms = duplicateorders.filter(order=>order.ID===e)
      const temporders = duplicateorders.filter(
        (order) => order.cart_Id === parseInt(e)
      );
      setOrders(temporders);
    } else {
      setOrders(orders1);
    }
  }

  function filterByRestaurant(e) {
    settype(e);

    if (e !== "-- Select an option --") {
      const tempresturants = duplicateorderHistory.filter(
        (order) => order.cart_Id === parseInt(e)
      );
      setorderHistory(tempresturants);
    } else {
      setorderHistory(orderHistory1);
    }
  }


  useEffect(() => {
    async function fetchData() {
      const detail = {
        id: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      }
      try {
        const data = await (
          await axios.post("http://localhost:5000/api/admin/getallorders", detail)
        ).data;

        const resturant = await (
          await axios.get("http://localhost:5000/api/superadmin/orderreport")
        ).data;
        setOrders(data.data);
        setduplicateorders(data.data);
        setOrders1(data.data)
        setorderHistory(resturant.data);
        setorderHistory1(resturant.data);
        setduplicateorderHistory(resturant.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // var orderHistory = [
  //   {
  //     id: "1338-1664486773-004",
  //     logo: "https://bit.ly/3ClJBPI",
  //     restaurant: "Happys Pizza & Burger",
  //     created: "29 Sep 2022 10:26 PM",
  //     method: "Delivery",
  //     status: "Accept",
  //     payment: "cod (unpaid)",
  //     total: 22.0,
  //   },
  //   {
  //     id: "1338-1664486773-004",
  //     logo: "https://bit.ly/3ClJBPI",
  //     restaurant: "Happys Pizza & Burger",
  //     created: "29 Sep 2022 10:26 PM",
  //     method: "Delivery",
  //     status: "Accept",
  //     payment: "cod (unpaid)",
  //     total: 22,
  //   },
  // ];
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h1 className="my-5 mx-4 responsiveness text-start">ORDERS</h1>
          <div
            className="accordion my-2 mx-4 bs responsiveness"
            id="accordionExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button boldtext"
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
                  <div className="row">
                    {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (<>
                      <div className="col-md-4">
                        <label htmlFor="daterange" className="me-1 my-1 boldtext">
                          Date Range
                        </label>
                        {/* <input
                    id="daterange"
                    className="me-1 my-1 py-1"
                    placeholder="Start Date"
                  /> */}
                        <RangePicker
                          format="DD-MM-YYYY"
                          onChange={filterByDate2}
                        />
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="customerfilter"
                          className="boldtext ms-2 my-1"
                        >
                          Filter by Customer:
                        </label>
                        {/* <input
                    id="customerfilter"
                    className="mx-1 py-1"
                    placeholder="Select an option"
                  /> */}
                        <select
                          id="customerfilter"
                          className="form-select mx-1 py-1"
                          aria-label="Default select example"
                          value={type}
                          onChange={(e) => {
                            filterByName(e.target.value);
                          }}
                        >
                          <option value="-- Select an option --" selected>
                            -- Select an option --
                          </option>
                          {orders1.length > 0 &&
                            orders1.map((order) => {

                              return (
                                <>
                                  <option key={order.cart_Id} value={order.cart_Id}>{order.name}</option>
                                </>
                              );
                            })}

                          {/* <option value="2">Two</option>
  <option value="3">Three</option> */}
                        </select>
                      </div>
                    </>) : (<>
                      <div className="col-md-4">
                        <label htmlFor="daterange" className="me-1 my-1 boldtext">
                          Date Range
                        </label>
                        {/* <input
                    id="daterange"
                    className="me-1 my-1 py-1"
                    placeholder="Start Date"
                  /> */}
                        <RangePicker
                          format="DD-MM-YYYY"
                          onChange={filterByDate}
                        />
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="customerfilter"
                          className="boldtext ms-2 my-1"
                        >
                          Filter by Restaurant:
                        </label>
                        <select
                          id="customerfilter"
                          className="form-select mx-1 py-1"
                          aria-label="Default select example"
                          defaultValue={"-- Select an option --"}
                          value={type}
                          onChange={(e) => {
                            filterByRestaurant(e.target.value);
                          }}
                        >
                          <option value="-- Select an option --">
                            -- Select an option --
                          </option>
                          {orderHistory1.length > 0 &&
                            orderHistory1.map((order) => {

                              return (
                                <>
                                  <option key={order.cart_Id} value={order.cart_Id}>{order.name}</option>
                                </>
                              );
                            })}

                          {/* <option value="2">Two</option>
  <option value="3">Three</option> */}
                        </select>
                      </div>
                    </>)}

                    <div className="col-md-4 pt-4">
                      <button className="btn btn-primary my-1 mx-1">
                        Export
                      </button>
                      <button
                        className="btn btn-primary my-1 mx-1"
                        onClick={() => { searchByName() }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (<>
            <div className="table-responsive">
              <table className="table my-5 mx-4 bs">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Address/Phone</th>
                    <th scope="col">Created</th>
                    <th scope="col">Method</th>
                    <th scope="col">Last Status</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => {
                      return (
                        <>
                          <tr key={order.cart_Id}>
                            <th scope="row">
                              <span className="badge text-bg-info info">
                                {order.cart_Id}
                              </span>
                            </th>

                            <td>
                              <Link
                                to={`/order-detail/${order.cart_Id}/${order.customer_Id}`}
                                style={{ textDecoration: "none", color: "black" }}
                              >
                                {order.house},Flat:{order.flat},{order.street},
                                {order.postcode},{order.town}
                              </Link>
                            </td>
                            <td>{moment(order.DateTime).format('MMMM Do YYYY, h:mm a')}</td>
                            <td>
                              <span className="badge text-bg-primary primary">
                                collection
                              </span>
                            </td>
                            <td>
                              <span className="badge text-bg-info info">
                                {order.Orderstatus === "1" ? (
                                  <>Pending</>
                                ) : order.Orderstatus === "2" ? (
                                  <>In Process</>
                                ) : order.Orderstatus === "3" ? (
                                  <>Completed</>
                                ) : (
                                  <>Rejected</>
                                )}
                              </span>
                            </td>
                            <td>
                              <span className="badge text-bg-primary primary">
                                cod(unpaid)
                              </span>
                            </td>
                            <td>${order.total}</td>
                          </tr>
                        </>
                      );
                    })}

                </tbody>
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel="Next >"
                      onPageChange={handlePageClick1}
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
              </table>


            </div>
          </>) : (<>
            <div className="mx-4 bs ps-4 pt-4 mb-5">
              <h6>ORDERS HISTORY</h6>
              <hr></hr>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Restaurant</th>
                      <th scope="col">Created</th>
                      <th scope="col">Method</th>
                      <th scope="col">Last status</th>
                      <th scope="col">Payment status</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((history) => {
                      return (

                        <tr key={history.cart_Id}>
                          <th scope="row">
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span className="badge bg-primary idHover">{history.cart_Id}</span>
                            </Link>
                          </th>
                          <th>
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span>
                                <img src={history.image} alt="logo" height="45" />
                              </span>
                              <span className="text-dark">{history.name}</span>
                            </Link>
                          </th>
                          <td >
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span className="text-dark">{moment(history.DateTime).format('MMMM Do YYYY, h:mm:ss a')}</span>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span className="badge bg-primary">
                                Delivery
                              </span>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span className="badge bg-info">
                                {history.Orderstatus === "1" ? (
                                  <>Pending</>
                                ) : history.Orderstatus === "2" ? (
                                  <>In Process</>
                                ) : history.Orderstatus === "3" ? (
                                  <>Completed</>
                                ) : (
                                  <>Rejected</>
                                )}
                              </span>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span className="badge bg-primary">
                                cod(unpaid)
                              </span>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail/${history.cart_Id}/${history.customer_Id}`}>
                              <span className="text-dark">${history.total}</span>
                            </Link>
                          </td>
                        </tr>

                      );
                    })}
                  </tbody>
                  {/* <hr /> */}
                  {/* <tfoot> */}
                  {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              /> */}
                  {/* </tfoot> */}
                </table>
              </div>
              <hr />
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


              {/* <div className="d-flex justify-content-end mt-4 me-5 pb-4">
              <nav aria-label="Page navigation example">
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
              </nav>
            </div> */}

            </div>
          </>)}

        </div>
      </div>
    </>
  );
}

export default OrdersTable;
