import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const {email} = useParams();
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  async function register(){
    if (password === cpassword) {
        const user = {
            email,
            password
        };

        try {

            // setloading(true)
            const result = await axios.post(`http://localhost:5000/api/superadmin/resetpassword/${email}`,user).data;
            console.log(result)
            toast.success("Password change Successfull")
            // setloading(true)
            setInterval(() => {
              window.location.href = "/"
            }, 2000);

        } catch (error) {
            console.log(error);
            toast.warn("Something went wrong!")
            // setloading(true)
        }
    }
    else{
        alert("Password is not matched");
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
                alt=".."
              />
            </Link>
            <h5 className="fw-bolder my-4 spaceWelcome">RESET PASSWORD</h5>
            <form>
              <div className="my-5 ms-5 text-start centeredItems responsiveness">
                <label htmlFor="emailad" className="mb-2">
                  Email Address
                </label>
                <input
                  id="emailad"
                  type="email"
                  className="form-control mb-4 inputWidth"
                  placeholder="Email"
                  value={email}
                  required
                />
                <label htmlFor="newpassword" className="mb-2">
                  New Password
                </label>
                <input
                  id="newpassword"
                  type="password"
                  className="form-control mb-4 inputWidth"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => { setpassword(e.target.value) }}
                  required
                />
                <label htmlFor="cnewpassword" className="mb-2">
                  Confirm Password
                </label>
                <input
                  id="cnewpassword"
                  type="password"
                  className="form-control mb-4 inputWidth"
                  placeholder="Confirm Password"
                  value={cpassword}
                  onChange={(e) => { setcpassword(e.target.value) }}
                  required
                />
              </div>
              <div style={{ marginTop: "-15px" }} className="container">
                <div className="mb-5 row">
                  <div className="col-12">
                    <button
                      className="btn btnSignColor signinbtn"
                      onClick={register}
                    >
                      RESET PASSWORD
                    </button>
                    <p className="mt-3">
                      Back to <Link to="/">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 responsiveness">
            <img
              className="signinimg"
              src="https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
