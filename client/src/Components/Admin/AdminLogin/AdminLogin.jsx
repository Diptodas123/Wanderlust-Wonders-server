import React, { useState } from "react";
import "./AdminLogin.css"
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminn } from "../../../App";
const AdminLogin = () => {
    const [admin, setAdmin] = useState({
        adminUsername: "",
        adminPassword: "",
    });
    const onValueChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
        console.log(admin);
    }
    const showPassword = () => {
        if (document.getElementById("adminPassword").type === "password") {
            document.getElementById("adminPassword").type = "text";
        } else {
            document.getElementById("adminPassword").type = "password";
        }
    }
    const validate = () => {
        if (admin.adminUsername === "admin" && admin.adminPassword === "D@d22112211") {
            adminn(true);
            window.location.href = "/adminhome";
        } else {
            toast.error("Enter valid username and password", {
                duration: "6000",
            });
            setTimeout(() => {
                window.location.reload();
            }, 6000);
        }
    }
    return (
        <>
            <div className="admin-login">

                <h1 className="log-in-title ">
                    <i className="fa-solid fa-globe mr-2" id="icon"></i>
                    Wanderlust Wonders</h1>
                <div className="login-box p-3">
                    <h4 className="font-weight-bold">Admin Panel</h4>
                    <hr></hr>
                    <p>Log in to access the admin panel</p>
                    <form className="admin-login-form">
                        <label for="adminUsername"><i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i></label>
                        <input id="adminUsername" onChange={onValueChange} name="adminUsername" type="text" placeholder="Username"></input>
                        <br></br>
                        <label for="adminPassword"><i className="fa-solid fa-key" style={{ fontSize: "20px" }}></i></label>
                        <input id="adminPassword" onChange={onValueChange} name="adminPassword" type="password" placeholder="Password" className="mt-3" ></input>
                        <i style={{ cursor: "pointer" }} onClick={showPassword} class="fa-solid fa-eye eye-symbol"></i>
                        <Link to="" onClick={validate}>
                            <button className="btn btn-primary mt-4" style={{ width: "150px", height: "50px", borderRadius: "20px" }}>Login</button>
                        </Link>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminLogin;