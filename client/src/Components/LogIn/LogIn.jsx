import React, { useContext, useEffect, useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getUser } from "../../service/api";
import { UserContext } from "../../App";

const LogIn = () => {

    const { state, dispatch } = useContext(UserContext);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const [users, setUser] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUser();
        setUser(response.data);
    }

    const onValueChange = async (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
    }
    const showPassword = () => {
        if (document.getElementsByName("password")[0].type === "password") {
            document.getElementsByName("password")[0].type = "text";
        } else {
            document.getElementsByName("password")[0].type = "password";
        }
    }

    const submitButton = async (e) => {
        e.preventDefault();
        const { email, password } = login;

        if (!email || email.slice(-10) !== "@gmail.com") {
            document.getElementsByClassName("mandatory-field")[0].style.display = "block";
            toast.error("Enter a valid email address!");
        } else if (!password) {
            document.getElementsByClassName("mandatory-field")[1].style.display = "block";
            toast.error("Enter valid password!");
        } else {
            for (let i = 0; i < users.length; i++) {
                if (users[i].userEmail === email && password === users[i].userPassword) {
                    dispatch({ type: "USER", payload: true });
                    window.location.href = "/";
                }
            }
            toast.error("Please enter valid username & password");
        }
    }

    return (
        <>
            <div className="main-body">
                <div className="login-container">
                    <div className="left-part">
                        <Link to="/">
                            <h1 className="msg">
                                <i className="fa-solid fa-globe mr-1" id="icon"></i>
                                Wanderlust Wonders</h1>
                        </Link>
                        <img src="img/login1.jpg" alt="img/login1.jpg"></img>
                    </div>
                    <div className="right-part">
                        <div className="container-fluid">
                            <h1 className="mb-5" style={{ borderBottom: "1px solid #007bff" }}>Log In</h1>
                            <form className="login-form">
                                <div className="row">
                                    <div className="login-group col-12">
                                        <label htmlFor="userEmail" className="login-label" >Email address<span style={{ color: "red" }}>*</span></label>
                                        <input name="email" type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" autoComplete="false" onChange={onValueChange} />
                                        <span className="mandatory-field"><i style={{ color: 'red' }}>enter your email *</i></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="login-group col-12">
                                        <label htmlFor="exampleInputPassword1" className="login-label">Password<span style={{ color: "red" }}>*</span></label>
                                        <input id="exampleInputPassword1" name="password" type="password" className="form-control" onChange={onValueChange} autoComplete="false" />
                                        <i style={{ cursor: "pointer" }} onClick={showPassword} className="fa-solid fa-eye eye-symbol-login"></i>
                                        <span className="mandatory-field"><i style={{ color: 'red' }}>enter your password *</i></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-center mt-4 col-12">
                                        <button type="submit" onClick={submitButton} className="btn btn-primary submit-button">Submit</button>
                                    </div>
                                </div>
                                <hr className="text-primary"></hr>
                                <div className="row">
                                    <div className="col-12 footer-text mt-3 d-flex align-conent-center justify-content-center">
                                        <label htmlFor="exampleInputEmail1" className="text">Don't have an account?</label>
                                        <Link to="/signup" className="ml-2 text" id={"sign-up-btn"} style={{ textDecoration: "underline" }}>Sign up</Link>
                                    </div>
                                    <ToastContainer position="top-center" />
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;