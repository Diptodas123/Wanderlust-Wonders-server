import React, { useEffect, useState } from "react";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import "./Support.css";
import { getSupport } from "../../../service/api";

const Support = () => {
    const [support, setSupport] = useState([]);

    const getFetchData = async () => {
        let response = await getSupport();
        setSupport(response.data);
    };

    useEffect(() => {
        getFetchData()
    });

    return (
        <>
            <Sidebar />
            <div className="main-containering">
                <div className="Packages-main">
                    <h2 className="ml-2 mb-2">Support Section</h2>
                    <hr></hr>
                </div>
                <div className="container mt-2 mb-2 table-container">

                    <div className="container">
                        <div className="package-table ml-5">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: "10px" }}>Sl.no</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Query</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        support.map((element, key) => {
                                            return (
                                                <tr>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "10px" }}>{key += 1}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px" }}>{element.name}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px" }}>{element.email}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", maxWidth:"500px" }}>{element.msg}</td>
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

export default Support;