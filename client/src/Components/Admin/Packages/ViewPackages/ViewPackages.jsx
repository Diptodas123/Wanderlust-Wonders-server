import React, { useEffect, useState } from "react";
import "../../Shared_Container.css";
import Sidebar from "../../Sidebar/Sidebar";
import "./ViewPackages.css";
import { getPackage } from "../../../../service/api";

const ViewPackages = () => {

    const [datalist, setDataList] = useState([]);

    const getFetchData = async () => {
        let response = await getPackage();
        setDataList(response.data);
    };



    useEffect(() => {
        getFetchData()
    }, [])
    console.log(datalist)
    return (
        <>
            <Sidebar />
            <div className="main-containering">
                <div className="Packages-main">
                    <h2 className="ml-2 mb-2">Packages</h2>
                    <hr></hr>
                </div>
                <div className="container mt-2 mb-2 table-container">

                    {/* button to add a new data to the database */}
                    {/* <button className="addpack" onClick={() => setAddSection(true)}>Add</button> */}


                    <div className="container">
                        <div className="package-table ml-5">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: "auto" }}>Sl.no</th>
                                        <th style={{ minWidth: "auto" }}>Name</th>
                                        <th style={{ minWidth: "auto" }}>Price</th>
                                        <th style={{ minWidth: "auto" }}>Category</th>
                                        <th style={{ minWidth: "auto" }}>Living</th>
                                        <th style={{ minWidth: "auto" }}>Type</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datalist.map((el, key) => {
                                            return (
                                                <tr>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{key += 1}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{el.name}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{el.price}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{el.category}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{el.living}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{el.type}</td>
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

export default ViewPackages;