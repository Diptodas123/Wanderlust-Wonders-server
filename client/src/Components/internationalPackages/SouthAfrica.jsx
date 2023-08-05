import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SouthAfrica = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To South Africa</h1>
            </div>
            <div className="heading">
                <h3>Splendid South Africa with Helicopter Flip</h3>
            </div>
            <div className="images">
                <img src="img/SA1.jpg" alt="This is the beauty of South Africa" height={"200px"} width={"200px"} ></img>
                <img src="img/SA2.jpg" alt="This is the beauty of South Africa" height={"200px"} width={"200px"}></img>
                <img src="img/SA3.jpg" alt="This is the beauty of South Africa" height={"200px"} width={"200px"}></img>
                <img src="img/SA4.jpg" alt="This is the beauty of South Africa" height={"200px"} width={"200px"}></img>
                <img src="img/SA5.jpg" alt="This is the beauty of South Africa" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Cape Town</b>-5 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>Check in to Park Inn by Radisson Cape Town Foreshore, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Park Inn by Radisson Cape Town Foreshore , Cape Town<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Helicopter Flip with transfer from Cape Town</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>Day Meals: Breakfast : Included at Park Inn by Radisson Cape Town Foreshore , Cape Town <br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Wine Tasting and Chocolate Pairing Tour with Transfer - Half Day Wine Tasting Tour</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Park Inn by Radisson Cape Town Foreshore , Cape Town<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sailing in the Bay Cruise-V&A Waterfront including transfers - weather permitting</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Park Inn by Radisson Cape Town Foreshore , Cape Town<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Cape Town</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Johannesburg</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Holiday Inn Express Sandton Woodmead, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Holiday Inn Express Sandton Woodmead , Johannesburg<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Gold Reef City Heritage Tour and Theme Park with Transfer</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Holiday Inn Express Sandton Woodmead , Johannesburg<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Johannesburg</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Kruger National Park</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Nelspruit Lodge, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 8</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Full Day Game Drive inside the Kruger National Park on SIC basis</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 9</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Kruger National Park</td>
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

export default SouthAfrica;