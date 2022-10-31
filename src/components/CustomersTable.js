import React,{useState,useEffect} from "react";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomersTable() {
  const [customers, setCustomers] = useState([])

  async function del(ID) {
    const info = {
      ID
    }

    try {
      const data = (await axios.post('http://localhost:5000/api/user/deletecustomer', info)).data
      update()
      toast.success("Customer has been deleted");
      // window.location.reload();
      // console.log(data.data)


    } catch (error) {
      console.log(error)
      toast.warn("Something went wrong");
    }
  }


  async function update(){
      try {
        const data = await (await axios.get('http://localhost:5000/api/admin/getcustomers')).data
        setCustomers(data.data)

      } catch (error) {
        console.log(error);
      }
    }
  useEffect(() => {
    async function fetchData() {

      try {
        const data = await (await axios.get('http://localhost:5000/api/admin/getcustomers')).data
        setCustomers(data.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  
  return (
    <>
    <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h1 className="my-5 mx-4 responsiveness text-start">CUSTOMERS</h1>

          <div className="table-responsive">
            <table className="table mt-2 mb-5 mx-4 bs">
              <thead>
                <tr>
                  <th scope="col">CLIENTS DATA</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Creation Date</th>
                  <th scope="col">Referral Balance</th>
                  <th scope="col">Rank</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {customers && customers.map((customer)=>{
                  return <>
                  <tr>
                  <th scope="row" className="blueclrname">{customer.name}</th>
                  <td className="blueclrname">{customer.email}</td>
                  <td>{moment(customer.DateTime).format('MMMM Do YYYY, h:mm a')}</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-primary deactivatebtn blueclrname"
                      id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                      // data-bs-container="body"
                      // data-bs-placement="bottom"
                      // data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li className="dropdown-item" onClick={()=>{del(customer.customer_Id)}}><i className="fa-solid fa-ban btnicon"></i>Delete</li>
  </ul>
  </div>
                  </td>
                </tr>
                  </>
                })}
                
                {/* <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Chloe NIcklin</th>
                  <td>chloe.nicklin.1993@gmail.com</td>
                  <td>26 Sep 2021 05:50 PM</td>
                  <td>£0.00</td>
                  <td>---</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark deactivatebtn"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-placement="bottom"
                      data-bs-content="Deactivate"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>{" "}
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
              }

export default CustomersTable;
