import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTranslation() {
  const [groupvalidation, setgroupvalidation] = useState("");
  const [keyinvalid, setkeyinvalid] = useState("");
  const [value, setvalue] = useState("");
  const [namespace, setnamespace] = useState("");

  async function save() {
    const details = {
      id: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID,
      groupvalidation,
      keyinvalid,
      value,
      namespace,
    };
    try {
      const result = await (
        await axios.post(
          "http://localhost:5000/api/superadmin/addtranslation",
          details
        )
      ).data;
      toast.success("Translation has been added");

      setgroupvalidation("");
      setkeyinvalid("");
      setvalue("");
      setnamespace("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong! Please try again later");
    }
  }

  function toggleNamespace() {
    var x = document.getElementById("toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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
              <h5>Add a New Translation</h5>
              <hr />
              <label htmlFor="group" className="mb-2">
                GROUP (OPTIONAL)
              </label>
              <input
                id="group"
                type="text"
                className="form-control mb-4"
                placeholder="e.g validation"
                value={groupvalidation}
                onChange={(e) => {
                  setgroupvalidation(e.target.value);
                }}
              />
              <label htmlFor="key" className="mb-2">
                KEY
              </label>
              <input
                id="key"
                type="text"
                className="form-control mb-4"
                placeholder="e.g invalid_key"
                value={keyinvalid}
                onChange={(e) => {
                  setkeyinvalid(e.target.value);
                }}
                required
              />
              <label htmlFor="value" className="mb-2">
                VALUE
              </label>
              <input
                id="value"
                type="text"
                className="form-control mb-4"
                placeholder="e.g keys must be single string"
                value={value}
                onChange={(e) => {
                  setvalue(e.target.value);
                }}
                required
              />
              <button className="btn btn-light" onClick={toggleNamespace}>
                Toggle advanced options
              </button>
              <br />
              <br />
              <div id="toggle" style={{ display: "block" }}>
                <label htmlFor="namespace" className="mb-2">
                  NAMESPACE (OPTIONAL)
                </label>
                <input
                  id="namespace"
                  type="text"
                  className="form-control mb-4"
                  placeholder="e.g my_package"
                  value={namespace}
                  onChange={(e) => {
                    setnamespace(e.target.value);
                  }}
                />
              </div>
              <hr />
              <button className="btn btnSignColor" onClick={save}>
                Save
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTranslation;
