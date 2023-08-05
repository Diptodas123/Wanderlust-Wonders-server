import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Ladakh = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu /><br />
            <div className="heading_Page">
                <h1> Welcome To Ladakh</h1>
            </div>
            <div className="heading">
                <h3>Ladakh Getaway With Nubra Stay</h3>
            </div>
            <div className="images">
                <img src="img/ladakh.jpg" alt="This is the beauty of Ladakh" height={"200px"} width={"200px"} ></img>
                <img src="img/ladakh1.jpg" alt="This is the beauty of Ladakh" height={"200px"} width={"200px"}></img>
                <img src="img/ladakh2.jpg" alt="This is the beauty of Ladakh" height={"200px"} width={"200px"}></img>
                <img src="img/ladakh3.jpg" alt="This is the beauty of Ladakh" height={"200px"} width={"200px"}></img>
                <img src="img/ladakh4.jpg" alt="This is the beauty of Ladakh" height={"200px"} width={"200px"}></img>
            </div>
            <br /><br />
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Leh</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 1</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Royal Holiday Hotel, 3 Star<br /><i class="fa-sharp fa-solid fa-person-hiking"></i>  Innerline Permits and Environment Fee<br /><i class="fa-sharp fa-solid fa-person-hiking"></i>  Tour Manager Assistance</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 2</th>
                            <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Leh<br /><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Royal Holiday Hotel , Leh<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Leh</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 3</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Leh<br /><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Royal Holiday Hotel , Leh<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Leh</td>
                        </tr>
                    </tbody>
                </table>
                <div className="box1">
                    <h4><b>Nubra Valley</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 3</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Nubra Boutique Camp | Rooms & Caretaker, 3 Star</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 4</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Nubra Valley<br /><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Nubra Boutique Camp | Rooms & Caretaker , Nubra Valley</td>
                        </tr>
                    </tbody>
                </table>
                <div className="box1">
                    <h4><b>Leh</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 4</th>
                            <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Leh<br /><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Royal Holiday Hotel, 3 Star</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 5</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Royal Holiday Hotel , Leh<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Leh</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bt">
                <button type="submit" class="btn btn-warning" ><NavLink to={'/form'} onClick={backToTop} className={'nav1'} style={{ textDecoration: "none" }}>BOOK NOW</NavLink></button>
            </div>
            <Footer />
        </>
    )
}

export default Ladakh;