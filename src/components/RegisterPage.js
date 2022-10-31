import React,{ useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./RegisterPage.css"
import 'react-toastify/dist/ReactToastify.css';
function RegisterPage() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  async function register(){
    if (password === cpassword) {
        const user = {
            name,
            email,
            number,
            password,
            cpassword
        };

        console.log(user)

        try {

            // setloading(true)
            const result = await axios.post("http://localhost:5000/api/admin/registeradmin",user).data;
            console.log(result)
            toast.success("Registration Successfull")
            // setloading(true)
            setInterval(() => {
              window.location.href = "/"
            }, 2000);

            


            setname('')
            setemail('')
            setnumber('')
            setpassword('')
            setcpassword('')

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
      <div className="scrolling-disable">
        <div className="row justify-content-center gx-0">
          <div className="col-md-4 text-center mt-2 responsiveness">
          <Link to="/">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
            <h3 className="boldtext my-3">SIGN UP</h3>
            <form>
              <div className="my-5 ms-5 me-2 text-start centeredRegItems">
                <label htmlFor="namee">Name</label>
                <input
                  id="namee"
                  type="text"
                  className="form-control mb-4"
                  placeholder="Name"
                  value={name} 
                  onChange={(e) => { setname(e.target.value) }}
                  required
                />
                <label htmlFor="emailad">Email Address</label>
                <input
                  id="emailad"
                  type="email"
                  className="form-control mb-4"
                  placeholder="Email"
                  value={email} 
              onChange={(e) => { setemail(e.target.value) }}
                  required
                />
                <label htmlFor="phoneno">Phone</label>
                <input
                  id="phoneno"
                  type="tel"
                  className="form-control mb-4"
                  placeholder="Phone"
                  value={number} 
              onChange={(e) => { setnumber(e.target.value) }}
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control mb-4"
                  placeholder="Password"
                  value={password} 
                  onChange={(e) => { setpassword(e.target.value) }}
                  required
                />
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  id="cpassword"
                  type="password"
                  className="form-control mb-4"
                  placeholder="Confirm Password"
                  value={cpassword} 
                  onChange={(e) => { setcpassword(e.target.value) }}
                  required
                />
                <div className="disablediv">
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdO4hceAAAAAKUC0dEVBc05Whup7eljef2r2Pno&amp;co=aHR0cHM6Ly93d3cuaGFwcHlzcGl6emFidXJnZXIuY28udWs6NDQz&amp;hl=en-GB&amp;v=mq0-U1BHZ5YTcoDC-CvsLPNc&amp;theme=light&amp;size=normal&amp;cb=3dyygsvgyiom"
                    width="304"
                    height="78"
                    role="presentation"
                    name="a-yjjttnpaq2gk"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                  ></iframe>
                </div>
              </div>

              <div className="mb-5">
                <button
                  className="btn btn-primary registerbtn"
                  // type="submit"
                  // formmethod="post"
                  onClick={register}
                >
                  SIGN IN
                </button>
                <button className="btn btn-light registerbtn">
                  <i className="fa-brands fa-google"></i> GOOGLE
                </button>
                <button className="btn btn-light registerbtn">
                  <i className="fa-brands fa-square-facebook"></i> FACEBOOK
                </button>
              </div>
            </form>

            <p className="mb-5">
              Already have an account yet? <Link to="/">Login</Link>
            </p>
          </div>
          <div className="col-md-8 disablediv responsiveness">
            <img
              className="registerimg"
              src="https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
