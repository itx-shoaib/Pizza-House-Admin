import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangePasswordTable() {
  const [password, setpassword] = useState("")
  const [new_password, setnew_password] = useState("")
  const [cpassword, setcpassword] = useState("")
  async function register(e) {
    if (new_password === cpassword) {
      const details = {
        customer_Id: JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id,
        email: JSON.parse(localStorage.getItem('currentuser'))[0].email,
        password,
        new_password
      }
      try {

        // setloading(true)
        const result = await axios.post("http://localhost:5000/api/admin/changepassword", details).data;
        toast.success("Password has been changed")
        // setloading(true)
        setInterval(() => {
          window.location.href = "/home"
        }, 2000);




        setnew_password('')
        setpassword('')
        setcpassword('')

      } catch (error) {
        console.log(error);
        toast.warn("Something went wrong!")
        e.preventDefault()
        // setloading(true)
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password and Confirm password are not matched!'
      })
      e.preventDefault()
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="row sharebox">
        <h1 className="my-3 mx-5 responsiveness">CHANGE PASSWORD</h1>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="container userprofileinfo">
            <h6>CHANGE PASSWORD</h6>
          </div>
          <br />
          <hr />
          <br />
          <input
            type="password"
            id="password"
            className="form-control mb-4 px-4 py-3"
            placeholder="Current Password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}

          />
          <input
            type="password"
            id="npassword"
            className="form-control mb-4 px-4 py-3"
            placeholder="New Password"
            value={new_password}
            onChange={(e) => { setnew_password(e.target.value) }}
          />
          <input
            type="password"
            id="cpassword"
            className="form-control mb-4 px-4 py-3"
            placeholder="Confirm New Password"
            value={cpassword}
            onChange={(e) => { setcpassword(e.target.value) }}
          />
          <button className="btn btn-primary" onClick={register}>
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordTable;
