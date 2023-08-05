import React, { useEffect, useState } from "react";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import "./Users.css";
import { getUser } from "../../../service/api";

const Users = () => {
    const [user, setUser] = useState([]);

    const getFetchData = async () => {
        let response = await getUser();
        setUser(response.data);
    };

    useEffect(() => {
        getFetchData()
    });

    
    return (
        <>
            <Sidebar />
            <div className="main-containering">
                <div className="Packages-main">
                    <h2 className="ml-2 mb-2">User Details</h2>
                    <hr></hr>
                </div>
                <div className="container mt-2 mb-2 table-container">

                    {/* button to add a new data to the database */}
                    {/* <button className="addpack" onClick={() => setAddSection(true)}>Add</button> */}


                    <div className="container ml-5">
                        <div className="package-table ml-5">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: "10px" }}>Sl.no</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Password</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map((element, key) => {
                                            return (
                                                <tr>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "10px" }}>{key += 1}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px" }}>{element.userEmail}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px" }}>{element.userName}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px" }}>{element.userPhn}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px" }}>{element.userPassword}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Users;