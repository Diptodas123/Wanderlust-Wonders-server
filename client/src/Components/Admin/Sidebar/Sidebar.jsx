import { React } from "react";
import "./Sidebar.css"
import { Link, useNavigate } from "react-router-dom";
import { adminn } from "../../../App";

const Sidebar = () => {
    const navigate = useNavigate();
    const optionShow = () => {
        if (document.getElementById('submenu').style.display === 'block') {
            document.getElementById('submenu').style.display = 'none';
        } else {
            document.getElementById('submenu').style.display = 'block';
        }
    }
    const logOut = () => {
        adminn(false);
        navigate("/adminlogin");
    }
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>

            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link class="navbar-brand admin-navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/adminhome">
                    <i className="fa-solid fa-globe mr-1" id="icon"></i>
                    <strong>Wanderlust Wonders</strong>
                </Link>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <Link className="nav-link" to="/adminhome" onClick={backToTop}>
                                        <i className="fa-solid fa-house m-2"></i>Dashboard
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/users" onClick={backToTop}>
                                        <i className="fa-solid fa-user m-2"></i>Users
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="" onClick={optionShow}><i class="fa-solid fa-layer-group m-2"></i>Tour Packages</Link>
                                    <div id="submenu">
                                        <Link to="/viewpackages" className="nav-link" onClick={backToTop}><i class="fa-regular fa-eye ml-4 mr-2"></i>View packages</Link>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/bookings" onClick={backToTop}>
                                        <i class="fa-sharp fa-solid fa-cart-shopping m-2"></i>Bookings
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/support" onClick={backToTop}>
                                        <i class="fa-solid fa-envelope m-2"></i>Support
                                    </Link>
                                </li>
                                <li class="nav-item" onClick={logOut}>
                                    <Link class="nav-link" to="">
                                        <i class="fa-solid fa-right-from-bracket m-2"></i>Log out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Sidebar;