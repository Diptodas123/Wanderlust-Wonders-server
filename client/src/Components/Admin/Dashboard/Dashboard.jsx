import React from "react";
import "./Dashboard.css";
import "../Shared_Container.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";

const data = [
    {
        name: 'January',
        total: 12000,
    },
    {
        name: 'February',
        total: 21000,
    },
    {
        name: 'March',
        total: 8000,
    },
    {
        name: 'April',
        total: 16000,
    },
    {
        name: 'May',
        total: 9000,
    },
    {
        name: 'June',
        total: 17000,
    },
];
const showNotification = () => {
    toast.success("Login successful", {
        toastId: 'success1',
    })
}
const Dashboard = () => {
    return (
        <>
            {showNotification()}
            <ToastContainer />
            <Sidebar />
            <div className="main-container">
                <div className="dashboard-main">
                    <h2 className="ml-2 mb-2">Dashboard</h2>
                    <hr></hr>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-3 dash-box ml-3 mr-5 mt-2 mb-2">
                                <ul className="p-2">
                                    <li>Total Traffic</li>
                                    <li><b style={{ fontSize: "20px" }}>3000</b></li>
                                    <li className="text-success">↑25.35% <span className="text-secondary"> Since last month</span></li>
                                </ul>
                                <div className="dash-box-circle">
                                    <i class="fa-solid fa-arrow-trend-up" style={{ color: "white" }}></i>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 dash-box ml-4 mr-5 mt-2 mb-2">
                                <ul className="p-2">
                                    <li>New Users</li>
                                    <li><b style={{ fontSize: "20px" }}>800</b></li>
                                    <li className="text-success">↑9.10% <span className="text-secondary"> Since last month</span></li>
                                </ul>
                                <div className="dash-box-circle">
                                    <i class="fa-solid fa-users" style={{ color: "white" }}></i>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 dash-box ml-4 mr-5 mt-2 mb-2">
                                <ul className="p-2">
                                    <li>Sales</li>
                                    <li><b style={{ fontSize: "20px" }}>100</b></li>
                                    <li className="text-danger">↓12.05% <span className="text-secondary"> Since last month</span></li>
                                </ul>
                                <div className="dash-box-circle">
                                    <i class="fa-solid fa-indian-rupee-sign" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle-conatiner ml-3 mr-3 mb-4">
                        <div className="left-box mr-3  p-3" >
                            <h5 className="text-secondary">Total Revenue</h5>
                            <div className="text-center">
                                <CircularProgressbar className="p-bar mb-1" value={70} text={`${70}%`} />
                                <p>Total sales made today</p>
                                <p style={{ fontSize: "25px" }}>₹4200</p>
                                <p style={{ fontSize: "15px" }}>Previous transactions processing , last payments may not be included</p>
                                <div className="desc">
                                    <p>Target
                                        <p className="text-danger"><i class="fa-sharp fa-solid fa-chevron-down mr-1"></i>₹35K</p>
                                    </p>
                                    <p>Last Week
                                        <p className="text-success"><i class="fa-sharp fa-solid fa-chevron-up mr-1"></i>₹12.4k</p>
                                    </p>
                                    <p>Last Month
                                        <p className="text-success"><i class="fa-sharp fa-solid fa-chevron-up mr-1"></i>₹40K</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right-box mr-2 p-3">
                            <h5 className="mb-4 text-secondary">Last 6 Months(Revenue)</h5>
                            <AreaChart width={730} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                            </AreaChart>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


export default Dashboard; 