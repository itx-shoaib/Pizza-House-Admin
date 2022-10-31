import React from "react"

function Sidebar() {
    return (
        <>
{/* <!-- Begin page --> */}
    <div id="layout-wrapper">

        <header id="page-topbar">
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO -->
                        <div className="navbar-brand-box horizontal-logo">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height="17"/>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="17"/>
                                </span>
                            </a>
                        </div> */}

                        <button type="button"
                            className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                            id="topnav-hamburger-icon">
                            <span className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>


                    </div>

                    <div className="d-flex align-items-center">

                        <div className="dropdown d-md-none topbar-head-dropdown header-item">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="bx bx-search fs-22"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..."
                                                aria-label="Recipient's username"/>
                                            <button className="btn btn-primary" type="submit"><i
                                                    className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>
        {/* <!-- ========== App Menu ========== --> */}
        <div className="app-menu navbar-menu">
            {/* <!-- LOGO --> */}
            <div className="navbar-brand-box">
                {/* <!-- Dark Logo--> */}
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="./assets/images/Logo.png" alt="" height="60"/>
                    </span>
                    <span className="logo-lg">
                        <img src="./assets/images/Logo.png" alt="" height="120"/>
                    </span>
                </a>
                {/* <!-- Light Logo--> */}
                <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="./assets/images/Logo.png" alt="" height="60"/>
                    </span>
                    <span className="logo-lg">
                        <img src="./assets/images/Logo.png" alt="" height="120"/>
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                    id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="index.html">
                                <i className="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
                                aria-expanded="false" aria-controls="sidebarApps">
                                <i className="mdi mdi-format-color-fill"></i> <span data-key="t-apps">Master</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarApps">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="create-package.html" className="nav-link"
                                            data-key="t-calendar">Packages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="create-fees-master.html" className="nav-link" data-key="t-fees">Fees</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button"
                                aria-expanded="false" aria-controls="sidebarLayouts">
                                <i className="ri-settings-2-line"></i> <span data-key="t-settings">Configuration</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarLayouts">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="About-us.html" className="nav-link" data-key="t-calendar">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="apps-chat.html" className="nav-link" data-key="t-chat">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="Privacy-Policy.html" className="nav-link" data-key="t-chat">Privacy
                                            Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="Terms-Conditions.html" className="nav-link" data-key="t-chat">Terms &
                                            Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Contest.html">
                                <i className="mdi mdi-seal"></i> <span data-key="t-dashboards">Contest</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Users-List.html">
                                <i className="ri-user-2-line"></i> <span data-key="t-Users">User</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Dummy-user.html">
                                <i className="ri-group-2-line"></i> <span data-key="t-Dummy">Dummy Users</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Withdraw-requests.html">
                                <i className="mdi mdi-wallet"></i> <span data-key="t-Withdraw">Withdraw Requests</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Transactions.html">
                                <i className="mdi mdi-cash"></i> <span data-key="t-dashboards">Transactions</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Send-Notifications.html">
                                <i className="mdi mdi-bell"></i> <span data-key="t-dashboards">Send Notification</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="Login.html">
                                <i className="mdi mdi-logout"></i> <span data-key="t-dashboards">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- Sidebar --> */}
            </div>

            <div className="sidebar-background"></div>
        </div>
        {/* <!-- Left Sidebar End -->
        <!-- Vertical Overlay--> */}
        <div className="vertical-overlay"></div>

        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Header Content --> */}
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row">
                        {/* <!-- Body Content --> */}
                    </div>
                    {/* <!-- end row --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}



        </>

    );
}

export default Sidebar;
