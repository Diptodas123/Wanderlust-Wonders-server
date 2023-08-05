import "./international.css";
import Menu from "../Menu/Menu.jsx";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Inter from "./categoryInt";
import Footer from "../Footer/Footer.jsx";

const International = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const [data, setItem] = useState(Inter);
    const filterItem = (newelem) => {
        const updateItem = Inter.filter((currelem) => {
            return currelem.category === newelem;
        })
        setItem(updateItem);
    }
    return (
        <>
            <div>
                <Menu />



                {/* Header Image for International */}
                <div id="international-carousel" class="carousel slide mt-5" data-ride="carousel" style={{ objectFit: 'cover' }}>
                    <div class="carousel-inner slider-img">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="img/internal1.jpg" height={'300px'} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/internal2.jpg" height={'300px'} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/internal3.jpg" height={'300px'} alt="Third slide" />
                        </div>
                    </div>

                    {/* International Page Heading */}
                    <div className="interna">
                        <h1>International Packages</h1>
                        <p className="enjoy">The world is yours to explore!</p>
                    </div>

                    {/* Dropdown for category */}
                    <div class="dropdown-international">
                        <button class="btn btn-transparent btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </button>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item" type="button" onClick={() => setItem(Inter)}>All</button>
                            <button class="dropdown-item" type="button" onClick={() => filterItem('Family Pack')}>Family Pack</button>
                            <button class="dropdown-item" type="button" onClick={() => filterItem('Couples Pack')}>Couples Pack</button>
                            <button class="dropdown-item" type="button" onClick={() => filterItem('Solo Pack')}>Solo Pack</button>
                            <button class="dropdown-item" type="button" onClick={() => filterItem('Adventure Pack')}>Adventure Pack</button>


                        </div>
                    </div>
                </div>

                {/* Packages Card for International */}
                <div className="container mt-5 mb-5">
                    <div className="row ">
                        {
                            data.map((elem) => {
                                const { id, photo, duration, price, name, planeicon, planestat, hotelicon, hotelstat, personicon, personstat, caricon, carstat, category, living, going } = elem;
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="card1 mb-3">
                                            <img src={photo} alt="./card-img-1" />
                                            <p className="mt-2 p-3 mb-1">{duration}<span
                                                style={{ float: "right", color: "#007bff" }}>₹{price}/person</span></p>
                                            <h6 className="text-center m-1"><b>{name}</b></h6>
                                            <ul className="icons d-flex">
                                                <li className="includesWrapper">
                                                    <p className="plane">
                                                        <i class={planeicon}></i>
                                                    </p>
                                                    <p className="blackText">{planestat}</p>
                                                </li>
                                                <li className="includesWrapper ">
                                                    <p className="hotel">
                                                        <i class={hotelicon}></i>
                                                    </p>
                                                    <p className="blackText">{hotelstat}</p>
                                                </li>
                                                <li className="includesWrapper ">
                                                    <p className="activity">
                                                        <i class={personicon}></i>
                                                    </p>
                                                    <p className="blackText">{personstat}</p>
                                                </li>
                                                <li className="includesWrapper ">
                                                    <p className="transfer">
                                                        <i class={caricon}></i>
                                                    </p>
                                                    <p className="blackText">{carstat}</p>
                                                </li>
                                            </ul>

                                            {/* categories for filter dropdown */}
                                            <div className="category">
                                                <p style={{ marginTop: '90px', marginLeft: '10px', display: 'none' }}>{category}</p>
                                            </div>

                                            {/* Location of the place */}
                                            <div className="p-3">
                                                <i id="dot" className="fa-solid fa-location-dot text-primary "></i>
                                                <p className="location1">{living}</p>
                                                <Link to={going} onClick={backToTop}>
                                                    <input type="button" className="btn btn-outline-primary" value="View"></input>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default International;
