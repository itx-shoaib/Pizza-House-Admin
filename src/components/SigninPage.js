import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./SigninPage.css";

function SigninPage() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  async function Login(e) {
    e.preventDefault()
    const user = {
      email,
      password
    }

    try {

      // setloading(true)
      const result = (await axios.post('http://localhost:5000/api/admin/loginadmin', user)).data;
      console.log(result.data)

      localStorage.setItem('currentuser', JSON.stringify(result.data));

      if (result.data[0].customer_Id != null) {

        localStorage.setItem('status', 'true');
      }
      else {


        localStorage.setItem('status', 'false');
      }


      toast.success("Login Successfull")
      setInterval(() => {
        window.location.href = "/home"
      }, 2000);
      // setloading(false)

      setemail('');
      setpassword('');

    }
    catch (error) {
      console.log(error);
      toast.warn("Invalid credentials")
      // setloading(false)
    }

  }
  return (
    <>
      <ToastContainer />

      <div className="scrolling-off">
        <div className="row justify-content-center gx-0">


          <div className="col-md-4 text-center mt-2 responsiveness">
            <Link to="/">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
            <h5 className="fw-bolder my-4 spaceWelcome">WELCOME BACK</h5>
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
                <div className='row mb-2'>
                  <div className='col-6'>
                    <label htmlFor="password">Password</label>

                  </div>
                  <div className='col-6 forgotText'>
                    <Link to="/forgotpassword" className='text-muted'>Forgot your password?</Link>
                  </div>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-control inputWidth"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => { setpassword(e.target.value) }}
                  required
                />
                <div className="form-check mt-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label className="form-check-label" htmlFor="checkbox">
                    Remember Me
                  </label>
                </div>
              </div>
              <div style={{marginTop: '-15px'}} className='container'>
                <div className="mb-5 row">
                  <div className='col-12'>
                    <button
                      className="btn btnSignColor signinbtn"
                      onClick={Login}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className='col-12 mt-4'>
                    <button className="btn btn-light signinbtn btnGoogle">
                      <i className="fa-brands fa-google text-danger fs-4"></i> GOOGLE
                    </button>
                  </div>
                  <div className='col-12 mt-4'><button className="btn btn-light signinbtn btnFb">
                    <i className="fa-brands fa-square-facebook text-primary fs-4"></i> FACEBOOK
                  </button></div>

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

export default SigninPage;
