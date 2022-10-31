import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import axios from 'axios';

function ForgotPassword() {
  const [email, setemail] = useState("")

  async function save(){
    const details = {
      email
    }
    try {
      const result = await (
        await axios.post(
          "http://localhost:5000/api/superadmin/forgetpassword",
          details
        )
      ).data
      toast.success("Email is send.Please check your email")

    } catch (error) {
      console.log(error)
      toast.warn("Something went wrong! Please try again later")
    }
  }
  return (
    <>
      <ToastContainer />

      <div className="scrolling-off">
        <div className="row justify-content-center gx-0">


          <div className="col-md-4 text-center mt-2 responsiveness align-self-center">
            <Link to="/">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
            <h5 className="fw-bolder my-4 spaceWelcome">RECOVER PASSWORD</h5>
            <form>
              <div className="my-5 ms-5 text-start centeredItems responsiveness">
                <label htmlFor="emailad" className='mb-2'>Email Address</label>
                <input
                  id="emailad"
                  type="email"
                  className="form-control mb-4 inputWidth"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => { setemail(e.target.value) }}
                  required
                />
              </div>
              <div style={{marginTop: '-15px'}} className='container'>
                <div className="mb-5 row">
                  <div className='col-12'>
                  {/* <Link to="/resetpassword"> */}
                    <button
                      className="btn btnSignColor signinbtn"
                      onClick={save}
                    >
                      SEND PASSWORD RESET LINK
                    </button>
                    {/* </Link> */}
                    <p className="mt-3">Back to <Link to="/">Login</Link></p>
                  </div>

                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 responsiveness">
            <img
              className="signinimg"
              src="https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
