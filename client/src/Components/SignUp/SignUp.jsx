import { useState } from "react";
import React from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addUser } from "../../service/api"

const SignUp = () => {
    const [user, setUser] = useState({
        userEmail: "",
        userName: "",
        userPhn: "",
        userPassword: "",
        userConfirmPassword: ""
    });

    const onValueChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const showPassword = () => {
        if (document.getElementById("userConfirmPassword").type === "password") {
            document.getElementById("userConfirmPassword").type = "text";
        } else {
            document.getElementById("userConfirmPassword").type = "password";
        }
    }

    const navigate = useNavigate();
    const submitButton = async (e) => {
        e.preventDefault();

        const { userEmail, userName, userPhn, userPassword, userConfirmPassword } = user;

        if (!userEmail) {
            toast.error("Enter a valid email address!");
        } else if (userEmail.slice(-10) !== "@gmail.com") {
            toast.error("Enter a valid email address!");
        } else if (!userName) {
            toast.error("Enter username!");
        } else if (!userPhn) {
            toast.error("Enter phone number!");
        } else if (userPhn.length !== 10) {
            toast.error("Enter a valid phone number!");
        } else if (!userPassword) {
            toast.error("Enter a password!");
        } else if (!userConfirmPassword) {
            toast.error("Enter the password again to confirm!");
        } else if (userPassword !== userConfirmPassword) {
            toast.error("Confirm password isn't same with password!");
        } else {
            const formData = new FormData();

            formData.append('userEmail', user.userEmail);
            formData.append('userName', user.userName);
            formData.append("userPhn", user.userPhn);
            formData.append("userPassword", user.userPassword);
            formData.append("userConfirmPassword", user.userConfirmPassword);

            const res = await addUser(formData);
            if (res.status === 201) {
                toast.success("Welcome to Wonderlust Wonders!");
                setTimeout(() => {
                    navigate("/login");
                }, 6000);
            }
            else {
                toast.error("Something went wrong, please try again later!");
            }
        }
    }

    return (
        <>
            <div className="main-body">
                <div className="signup-container">
                    <div className="left-part">
                        <Link to="/">
                            <h1 className="msg">
                                <i className="fa-solid fa-globe mr-1" id="icon"></i>
                                Wanderlust Wonders</h1>
                        </Link>
                        <img src="img/signup.jpg" alt="img/signup.jpg"></img>
                    </div>
                    <div className="right-part">
                        <div className="container-fluid">
                            <h1 className="mb-2" style={{ borderBottom: "1px solid #007bff" }}>Sign Up</h1>
                            <form className="signup-form">
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="" className="signup-label">Username<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" class="form-control user-mandatory-fields" name="userName" onChange={onValueChange} id="userName" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userEmail" className="signup-label" >Email address<span style={{ color: "red" }} >*</span></label>
                                        <input type="email" class="form-control user-mandatory-fields" name="userEmail" onChange={onValueChange} id="userEmail" placeholder="e.g. demo@gmail.com" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userPhn" className="signup-label">Phone No.<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" class="form-control" name="userPhn" onChange={onValueChange} id="userPhn" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userPassword" className="signup-label">Password<span style={{ color: "red" }}>*</span></label>
                                        <input type="password" class="form-control" name="userPassword" onChange={onValueChange} id="userPassword" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="signup-group col-12">
                                        <label htmlFor="userConfirmPassword" className="signup-label">Confirm Password<span style={{ color: "red" }}>*</span></label>
                                        <input id="userConfirmPassword" name="userConfirmPassword" onChange={onValueChange} type="password" class="form-control" />
                                        <i style={{ cursor: "pointer" }} onClick={showPassword} class="fa-solid fa-eye eye-symbol-signup"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center mt-2">
                                        <button type="submit" class="btn btn-primary submit-button" onClick={submitButton}>Submit</button>
                                    </div>
                                </div>
                                <ToastContainer position="top-center" />
                                <hr></hr>
                                <div className="row">
                                    <div className="col-12 footer-text d-flex align-conent-center justify-content-center">
                                        <label for="exampleInputEmail1" className="text">Already have an account?</label>
                                        <Link to="/login" className="ml-2 text" style={{ textDecoration: "underline" }}>Log in</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;