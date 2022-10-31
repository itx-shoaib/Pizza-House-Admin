import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddLanguage() {
  const [name, setname] = useState("");
  const [locale, setlocale] = useState("")

  async function save(){
    const details = {
      id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID,
      name,
      locale
    }
    try {
      const result = await (
        await axios.post(
          "http://localhost:5000/api/superadmin/addlanguage",
          details
        )
      ).data
      toast.success("Language has been added")
      setname("");
      setlocale("");
      
    } catch (error) {
      console.log(error)
      toast.warn("Something went wrong! Please try again later")
    }
  }
  return (
    <>
    <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary responsiveness">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/languages">
                  <i className="fa-solid fa-globe me-2"></i>
                  Languages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/translations"
                >
                  <i className="fa-solid fa-hourglass-end me-2"></i>
                  Translations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row my-5 mx-3 responsiveness justify-content-center">
        <div className="col-md-8">
        <div className="row bs px-5 py-5">
            <div className="col-md-12">
            <h5>Add a New Language</h5>
          <hr />
          <label htmlFor="namelang" className="mb-2">
            NAME
          </label>
          <input
            id="namelang"
            type="text"
            className="form-control mb-4"
            placeholder=""
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            required
          />
          <label htmlFor="localelang" className="mb-2">
            LOCALE
          </label>
          <input
            id="localelang"
            type="text"
            className="form-control mb-4"
            placeholder=""
            value={locale}
            onChange={(e)=>{setlocale(e.target.value)}}
            required
          />
          <hr />
          <button className="btn btnSignColor" onClick={save}>Save</button>
          <hr/>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default AddLanguage;
