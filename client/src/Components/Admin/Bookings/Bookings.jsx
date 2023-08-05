import React, { useEffect, useState } from "react";
import "../Shared_Container.css";
import Sidebar from "../Sidebar/Sidebar";
import "./Bookings.css";
import { getBooking } from "../../../service/api";

const Bookings = () => {
    const [booking, setBooking] = useState([]);

    const getFetchData = async () => {
        let response = await getBooking();
        setBooking(response.data);
    };

    useEffect(() => {
        getFetchData()
    }, []);

    return (
        <>
            <Sidebar />
            <div className="main-containering">
                <div className="Packages-main">
                    <h2 className="ml-2 mb-2">Booking Details</h2>
                    <hr></hr>
                </div>
                <div className="container mt-2 mb-2 table-container">

                    <div className="container">
                        <div className="package-table ml-5">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: "auto" }}>Sl.no</th>
                                        <th style={{ minWidth: "auto" }}>Name</th>
                                        <th style={{ minWidth: "auto" }}>Email</th>
                                        <th style={{ minWidth: "auto" }}>State</th>
                                        <th style={{ minWidth: "auto" }}>Country</th>
                                        <th style={{ minWidth: "auto" }}>Pin Code</th>
                                        <th style={{ minWidth: "auto" }}>Destination</th>
                                        <th style={{ minWidth: "auto" }}>Guests</th>
                                        <th style={{ minWidth: "auto" }}>Phn No.</th>
                                        <th style={{ minWidth: "auto" }}>Check-in Date</th>
                                        <th style={{ minWidth: "auto" }}>Amount(₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        booking.map((element, key) => {
                                            return (
                                                <tr>
                                                    <td style={{ textAlign: 'center', fontSize: "15px", minWidth: "auto" }}>{key += 1}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto" }}>{element.name}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.email}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.state}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.country}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.pin}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.destination}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.guests}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.mobile}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.checkInDate.toString().slice(0,10)}</td>
                                                    <td style={{ textAlign: 'center', fontSize: "15px",minWidth: "auto"  }}>{element.amount}</td>
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

export default Bookings;