import React, { useContext } from "react";
import "./Menu.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Menu = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: "USER", payload: false });
        navigate("/");
    };

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-main">
                <Link className="navbar-brand" to="/" onClick={backToTop}>
                    <i className="fa-solid fa-globe" id="icon"></i>
                    <strong className="brand-name">Wanderlust Wonders</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={backToTop}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Discover
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/domestic" onClick={backToTop}>
                                    Domestic tour packages
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link
                                    className="dropdown-item"
                                    to="/international"
                                    onClick={backToTop}
                                >
                                    International tour packages
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" onClick={backToTop}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={backToTop}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={backToTop}>
                                Contact us
                            </Link>
                        </li>
                    </ul>

                    {state ? (
                        <form className="nav-bar-form">
                            <li className="nav-item dropdown" style={{ listStyleType: "none" }}>
                                <div
                                    className="dropdown-toggle"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    <b>Welcome Back!!</b><i className="fa-regular fa-user" style={{ marginLeft: "10px" }}></i>
                                </div>
                                <div className="dropdown-menu">
                                    <button type="button" className="btn" onClick={logout}>
                                        <i class="fa-solid fa-right-from-bracket"></i>Logout
                                    </button>
                                </div>
                            </li>

                        </form>

                    ) : (


                        <div>
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-primary">
                                    Log in
                                </button>
                            </Link>
                            <Link className="ml-3 mr-2" to="/signup">
                                <button type="button" className="btn btn-outline-primary">
                                    Sign up
                                </button>
                            </Link>
                        </div>

                    )}

                </div>
            </nav>
        </>
    );
};

export default Menu;
