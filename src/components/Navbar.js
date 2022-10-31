import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./Navbar.css"

function Navbar() {
  const getstatus = localStorage.getItem("status");
  function logout() {
    localStorage.setItem("status", "false");
    localStorage.removeItem("currentuser");
    window.location.href = "/";
  }
  async function closeshift(){
    const details = {
      id:JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
    }

    try {
      const data = await (
        await axios.post("http://localhost:5000/api/superadmin/closeshift",details)
      ).data;

      window.location.reload()

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <nav className="navbar-light justify-content-center mainnavbar">
        <div className="row menu responsiveness">
          <div className="col-md-4 menuitems text-start">
            <button
              className="btn sidemenu"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <h2>
                <i className="fa-solid fa-bars"></i>
              </h2>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 ? (<>
              <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                MENU
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
            <div className="row">
              <div className="col-md-12">
                <li className="nav-item">
                  <Link to="/home" className="nav-link align-middle sidemenuitems">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-5">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/liveorders"
                    className="nav-link align-middle sidemenuitems "
                  >
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="ms-5 ">
                      {" "}
                      Live Orders
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle sidemenuitems "
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-5 "> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/customers"
                    className="nav-link align-middle sidemenuitems "
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="ms-5 "> Customers</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link align-middle sidemenuitems ">
                    <i className="fa-solid fa-book"></i>
                    <span className="ms-5 "> Menu</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/setting/${JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID}`}
                    className="nav-link align-middle sidemenuitems "
                  >
                    <i className="fa-solid fa-gear"></i>
                    <span className="ms-5"> Setting</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={{border: 'none'}}>
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed boldtext align-middle "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{padding: '1rem'}}
                        >
                          <i className="fa-solid fa-arrows-to-dot"></i>
                          <span className="ms-5" style={{fontWeight: 'normal'}}>
                            Marketing
                          </span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/coupon"
                            >
                              <i className="fa-solid fa-tag btnicon"></i>
                              Discounts
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/bulksms"
                            >
                              <i className="fa-solid fa-message btnicon"></i>
                              Bulk SMS
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link align-middle sidemenuitems boldtext "
                              to="/share"
                            >
                              <i className="fa-solid fa-share btnicon"></i>
                              Share
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    to="/change-password"
                    className="nav-link align-middle sidemenuitems "
                  >
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-5 ">Password</span>
                  </Link>
                </li>
              </div>
            </div>
            </div>
            </>):(<>
              <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                MENU
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
            <div className="row">
              <div className="col-md-12">
              <>
                  <li className="nav-item">
                  <Link to="/home" className="nav-link align-middle sidemenuitems">
                    <i className="fa-solid fa-house"></i>
                    <span className="ms-5 ">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle sidemenuitems"
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-5 "> Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/resturant"
                    className="nav-link align-middle sidemenuitems"
                  >
                    <i className="fas fa-utensils"></i>
                    <span className="ms-5 "> Resturants</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pages"
                    className="nav-link align-middle sidemenuitems"
                  >
                    <i className="fas fa-file"></i>
                    <span className="ms-5 "> Pages</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/report"
                    className="nav-link align-middle sidemenuitems"
                  >
                    <i className="fas fa-chart-bar"></i>
                    <span className="ms-5 "> Report</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/change-password"
                    className="nav-link align-middle sidemenuitems"
                  >
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-5 ">Password</span>
                  </Link>
                </li>

                </>
              </div>
            </div>
            </div>
            </>)}

          </div>

          <div className="col-md-4 menuitems text-center">
            <Link to="/home">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
          </div>

          <div className="col-md-4 menuitems text-end">
            {getstatus === "true" ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle navbaruserbtn bs"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                  </button>
                  <ul
                    className="dropdown-menu userddmenu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="dropdown-item">
                      <p className="dropdown-item text-center boldtext">
                        {getstatus === "true" ? (
                          <>
                            {
                              JSON.parse(localStorage.getItem("currentuser"))[0]
                                .name
                            }
                          </>
                        ) : (
                          <>OWNER</>
                        )}
                      </p>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/profile">
                        <button className="btn btn-light userdditem dropdown-item">
                          My Profile
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <button className="btn btn-light userdditem dropdown-item">
                          Dashboard
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/liveorders">
                        <button className="btn btn-light userdditem dropdown-item">
                          Live Orders
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders">
                        <button className="btn btn-light userdditem dropdown-item">
                          Orders
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resturant">
                        <button className="btn btn-light userdditem dropdown-item">
                          Restaurant
                        </button>
                      </Link>
                    </li>
                    <li>

                      {getstatus === "true" && JSON.parse(localStorage.getItem("currentuser"))[0].role === 1 && (<>
                        {/* <Link to="/change-password"> */}
                        <Link to="/menu">
                        <button className="btn btn-light userdditem dropdown-item">
                          Menu
                        </button>
                      </Link>
                        <button className="btn btn-light userdditem dropdown-item pinkbg" onClick={closeshift}>
                          <i className="fa-solid fa-lock btnicon"></i>Close
                          Shift
                        </button>
                      {/* </Link> */}
                      </>)}

                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link to="/">
                      <button
                        className="btn btn-light userdditem dropdown-item"
                        onClick={logout}
                      >
                        LOG OUT
                      </button>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/">
                  <button className="btn btn-light">
                    <i className="fa-solid fa-user btnicon"></i>Sign in
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
