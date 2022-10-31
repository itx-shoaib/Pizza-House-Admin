import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import moment from "moment";

function OrderDetailTable() {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([])
  const [info, setInfo] = useState([])
  const {id} = useParams()
  const {cid} = useParams()

  async function add(id, status) {
    const user = {
      cart_Id: id,
      status: status,
    };
    // alert(id)

    console.log(user);

    try {
      const result = await axios.post(
        "http://localhost:5000/api/admin/acceptorder",
        user
      ).data;
      console.log(result);
    //   // update();
      update();
    } catch (error) {
      console.log(error);
    }
  }

  async function reject(id, status) {
    const user = {
      cart_Id: id,
    };

    console.log(user);

    try {
      const result = await axios.post(
        "http://localhost:5000/api/admin/rejectorder",
        user
      ).data;
      console.log(result);
      update();
    } catch (error) {
      console.log(error);
    }
  }

  async function update() {
    try {
      const data = await (
        await axios.get("http://localhost:5000/api/admin/getliveorders")
      ).data;
      setInfo(data.data);
      
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`http://localhost:5000/api/admin/getorderdetails/${id}/${cid}`)
        ).data;
        setOrders(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {

      const temp = {
        customer_Id:cid
      }
      try {

        const data = (await axios.post("http://localhost:5000/api/admin/getcartorderdetailitems",temp)).data;
        console.log(data.data)
        setItems(data.data)

      } catch (error) {
        console.log(error);

      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getliveorders")
        ).data;

        
        setInfo(data.data);
        
         
        
      
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h1 className="mt-5 mx-4 responsiveness text-start">Order Detail</h1>

          <div className="row">
            <div className="col-md-8 py-4 px-4">
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>ORDER INFO</h6>
                <hr />
                <p>Invoice ID: {orders.cart_Id}</p>
                <p>Delivery method: Delivery</p>
                <p>Time slot: 7:36 PM - 8:06 PM</p>
                <p>Payment method: STRIPE</p>
                <p>Payment status: Paid</p>
              </div>
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>ORDER DETAIL</h6>
                <hr />
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">PRODUCT</th>
                        <th scope="col">ITEMS</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items && items.map((item)=>{
                        return <>
                      <tr>
                        <th scope="row">
                          <img src={item.Image} className="orderdetailimg" style={{width:"20%",height:"auto"}} alt=".."/>
                          {item.Title}
                        </th>
                        <td>{item.Quantity}</td>
                        <td>${item.Price}</td>
                        <td>${item.totalp}</td>
                      </tr>
                        </>
                      })}


                      {/* <tr>
                        <th scope="row">
                          <img src="" className="orderdetailimg" />
                          FVZFNCDCSNVKSDCKJDZVKJLJVDVZSC
                        </th>
                        <td>1</td>
                        <td>$7.80</td>
                        <td>$7.80</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>CUSTOMER INFORMATION</h6>
                <hr />
                <p>Name: {orders.cname}</p>
                <p>Email: {orders.email}</p>
                <p>
                  Address: House No: {orders.house}, {orders.street}, {orders.postcode},
                  {orders.town}
                </p>
                <p>Flat: {orders.flat}</p>
              </div>
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>RESTAURANT INFORMATION</h6>
                <hr />
                <p>{orders.name}</p>
                <p>{orders.address}</p>
                <p>{orders.phone}</p>
              </div>
            </div>
            <div className="col-md-4 py-4 px-4">
                {info.map((item)=>{
                  return <>
                {item.Orderstatus === "1" ? (<>
                  <div className="orderdetailcards bs br my-5 px-3 py-4">
              <h6 className="mb-3">ACTIONS</h6>
                <hr />
                <button className="btn btn-primary me-2" onClick={() => {
                                                add(
                                                  item.cart_Id,
                                                  item.Orderstatus
                                                );
                                              }}>Accept</button>
                <button className="btn btn-primary" onClick={() => {
                                                reject(
                                                  item.cart_Id,
                                                  item.Orderstatus
                                                );
                                              }}>Reject</button>
                </div>
                </>): item.Orderstatus === "2" ? (<>
                  <div className="orderdetailcards bs br my-5 px-3 py-4">
              <h6 className="mb-3">ACTIONS</h6>
                <hr />
                <button className="btn btn-primary me-2" onClick={() => {
                                                add(
                                                  item.cart_Id,
                                                  item.Orderstatus
                                                );
                                              }}>Prepared</button>
                <button className="btn btn-primary"  onClick={() => {
                                                reject(
                                                  item.cart_Id,
                                                  item.Orderstatus
                                                );
                                              }}>Assign to deliver</button>
                                              </div>
                </>):(<>
                  
                </>)}
                  
                  </>
                })}
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>FINANCE</h6>
                <hr />
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td scope="row">SUB-TOTAL</td>
                        <td>${orders.total}</td>
                      </tr>
                      <tr>
                        <td scope="row">DELIVERY</td>
                        <td>${orders.total}</td>
                      </tr>
                      <tr>
                        <td scope="row">NET TOTAL</td>
                        <td colspan="2">${orders.total}</td>
                      </tr>
                      <tr>
                        <td scope="row">DISCOUNT</td>
                        <td colspan="2">${orders.total}</td>
                      </tr>
                      <tr>
                        <th scope="row">TOTAL</th>
                        <td colspan="2">${orders.total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>ORDER TRACKING</h6>
                <hr />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
                  width="250"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="orderdetailcards bs br my-5 px-3 py-4">
                <h6>STATUS HISTORY</h6>
                <hr />
                <div className="card-body">
                  <div className="card-body">
                    <div
                      className="timeline timeline-one-side"
                      id="status-history"
                      data-timeline-content="axis"
                      data-timeline-axis-style="dashed"
                    >
                      <div className="timeline-block">
                        <span className="timeline-step badge bg-success">
                          <i className="fa fa-regular fa-bell"></i>
                        </span>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between pt-1">
                            <div>
                              <span className="text-muted text-sm font-weight-bold">
                                Just created
                              </span>
                            </div>
                            <div className="text-right">
                              <small className="text-muted">
                                <i className="fas fa-clock me-1"></i>{moment(orders.DateTime).format('MMMM Do YYYY, h:mm:ss a')}
                              </small>
                            </div>
                          </div>
                          <h6 className="text-sm mt-1 mb-0">
                            Status from: {orders.cname}
                          </h6>
                        </div>
                      </div>
                      {orders.Orderstatus === "3" ? (<>
                        <div className="timeline-block">
                        <span className="timeline-step badge bg-success">
                          <i className="fa fa-regular fa-bell"></i>
                        </span>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between pt-1">
                            <div>
                              <span className="text-muted text-sm font-weight-bold">
                                Completed by resturant
                              </span>
                            </div>
                            {/* <div className="text-right">
                              <small className="text-muted">
                                <i className="fas fa-clock me-1"></i>02 Sep 2022
                                06:23 PM
                              </small>
                            </div> */}
                          </div>
                          <h6 className="text-sm mt-1 mb-0">
                            Status from: {orders.owner_name}
                          </h6>
                        </div>
                      </div>
                      </>): orders.Orderstatus === "1" ? (<>
                        <div className="timeline-block">
                        <span className="timeline-step badge bg-success">
                          <i className="fa fa-regular fa-bell"></i>
                        </span>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between pt-1">
                            <div>
                              <span className="text-muted text-sm font-weight-bold">
                                Pending
                              </span>
                            </div>
                            <div className="text-right">
                              <small className="text-muted">
                                <i className="fas fa-clock me-1"></i>{moment(orders.DateTime).format('MMMM Do YYYY, h:mm:ss a')}
                              </small>
                            </div>
                          </div>
                          {/* <h6 className="text-sm mt-1 mb-0">Status from: {orders.owner_name}</h6> */}
                        </div>
                      </div>
                      </>):  orders.Orderstatus === "2" ? (<>
                        <div className="timeline-block">
                        <span className="timeline-step badge bg-success">
                          <i className="fa fa-regular fa-bell"></i>
                        </span>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between pt-1">
                            <div>
                              <span className="text-muted text-sm font-weight-bold">
                                Accepted by resturant
                              </span>
                            </div>
                            {/* <div className="text-right">
                              <small className="text-muted">
                                <i className="fas fa-clock me-1"></i>{moment(orders.DateTime).format('MMMM Do YYYY, h:mm:ss a')}
                              </small>
                            </div> */}
                          </div>
                          <h6 className="text-sm mt-1 mb-0">Status from: {orders.owner_name}</h6>
                        </div>
                      </div>
                      </>):(<>
                        <div className="timeline-block">
                        <span className="timeline-step badge bg-success">
                          <i className="fa fa-regular fa-bell"></i>
                        </span>
                        <div className="timeline-content">
                          <div className="d-flex justify-content-between pt-1">
                            <div>
                              <span className="text-muted text-sm font-weight-bold">
                                Rejected by resturant
                              </span>
                            </div>
                            {/* <div className="text-right">
                              <small className="text-muted">
                                <i className="fas fa-clock me-1"></i>02 Sep 2022
                                06:23 PM
                              </small>
                            </div> */}
                          </div>
                          <h6 className="text-sm mt-1 mb-0">
                            Status from: {orders.owner_name}
                          </h6>
                        </div>
                      </div>
                      </>)}


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

export default OrderDetailTable;
