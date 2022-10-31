import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Translations() {
  const [translation, settranslation] = useState([]);
  const [translation2, settranslation2] = useState([])
  const [type, settype] = useState("-----");

  function filterByGroup(e) {
    settype(e);

    if (e !== "-----") {
      // const temprooms = duplicateorders.filter(order=>order.ID===e)
      const temporders = translation.filter(
        (order) => order.ID === parseInt(e)
      );
      settranslation(temporders);
    } else {
      settranslation(translation2);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const details = {
          id: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
        };
        const data = await (
          await axios.post(
            "http://localhost:5000/api/superadmin/gettranslation",
            details
          )
        ).data;

        settranslation(data.data);
        settranslation2(data.data);
      } catch (error) {
        console.log(error, "err");
      }
    }
    fetchData();
  }, []);
  return (
    <>
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

      <div className="row mt-5 px-5 responsiveness">
        <div className="col-md-2">
          <h5>Translation</h5>
        </div>
        <div className="col-md-4">
          <form className="d-flex">
            <input
              className="form-control w-100"
              type="search"
              placeholder="Search all transactions"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="col-md-2">
          <select name="language" value={type} id="language" className="w-100" style={{height: '100%'}}>
            <option value="-----">-----</option>
            <option value="en">EN</option>
          </select>
        </div>
        <div className="col-md-3">
          <select name="---" id="---" value={type}
                          onChange={(e) => {
                            filterByGroup(e.target.value);
                          }} className="w-100" style={{height: '100%'}}>
            <option value="---">---</option>
            {translation2.map((type)=>{
              return <>
              <option value={type.ID}>{type.groupvalidation}</option>
              </>
            })}
            
          </select>
        </div>
        <div className="col-md-1">
          <Link to="/addtranslation">
            <button className="btn btn-light w-100">
              <i className="fa-solid fa-plus me-2"></i>Add
            </button>
          </Link>
        </div>
      </div>

      <div className="table-responsive mt-5">
        <table className="table mt-2 mb-5 mx-4 bs">
          <thead>
            <tr>
              <th scope="col">GROUP/SINGLE</th>
              <th scope="col">KEY</th>
              <th scope="col">EN</th>
              <th scope="col">EN</th>
            </tr>
          </thead>
          <tbody>
            {translation &&
              translation.map((type) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{type.groupvalidation}</th>
                      <td>{type.keyinvalid}</td>
                      <td>"{type.value}"</td>
                      <td>
                        <Link to="/translations" style={{ color: "black" }}>
                          <i className="fa-solid fa-pencil me-2"></i>
                        </Link>{" "}
                        "{type.value}"
                      </td>
                    </tr>
                  </>
                );
              })}

            {/* <tr>
              <th scope="row">auth</th>
              <td>failed</td>
              <td>"These credentials do not match our records"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "These
                credentials do not match our records"
              </td>
            </tr>
            <tr>
              <th scope="row">auth</th>
              <td>failed</td>
              <td>"These credentials do not match our records"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "These
                credentials do not match our records"
              </td>
            </tr>
            <tr>
              <th scope="row">auth</th>
              <td>failed</td>
              <td>"These credentials do not match our records"</td>
              <td>
                <Link to="/translations" style={{color: "black"}}><i className="fa-solid fa-pencil me-2"></i></Link> "These
                credentials do not match our records"
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Translations;
