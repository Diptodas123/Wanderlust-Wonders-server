import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Bangalore = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Bangalore</h1>
            </div>
            <div className="heading">
                <h3>Magical South Vacay</h3>
            </div>
            <div className="images">
                <img src="img/Bangalore1.jpg" alt="This is the beauty of Bangalore" height={"200px"} width={"200px"} ></img>
                <img src="img/Bangalore2.jpg" alt="This is the beauty of Bangalore" height={"200px"} width={"200px"}></img>
                <img src="img/Bangalore3.jpg" alt="This is the beauty of Bangalore" height={"200px"} width={"200px"}></img>
                <img src="img/Bangalore4.jpg" alt="This is the beauty of Bangalore" height={"200px"} width={"200px"}></img>
                <img src="img/Bangalore5.jpg" alt="This is the beauty of Bangalore" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Bangalore</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Starlit Suites, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Starlit Suites , Bangalore<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Bangalore</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Mysore</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to The Crystal Paark Inn, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Mysore</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at The Crystal Paark Inn , Mysore<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Mysore</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Ooty</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Vinayaga Inn by Poppys, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Ooty</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Ooty<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Vinayaga Inn by Poppys , Ooty<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Ooty</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Vinayaga Inn by Poppys , Ooty<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Ooty</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="bt">
                <button type="submit" class="btn btn-warning"><NavLink to={'/form'} onClick={backToTop} className={'nav1'} style={{ textDecoration: "none" }}>BOOK NOW</NavLink></button>
            </div>
            <Footer />
        </>
    )
}

export default Bangalore;