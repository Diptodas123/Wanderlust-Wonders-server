import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Santorini = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Santorini</h1>
            </div>
            <div className="heading">
                <h3>Holiday in Greece Deluxe (Guided Tour)</h3>
            </div>
            <div className="images">
                <img src="img/Santorini1.jpg" alt="This is the beauty of Santorini" height={"200px"} width={"200px"}></img>
                <img src="img/Santorini2.jpg" alt="This is the beauty of Santorini" height={"200px"} width={"200px"}></img>
                <img src="img/Santorini3.jpg" alt="This is the beauty of Santorini" height={"200px"} width={"200px"}></img>
                <img src="img/Santorini4.jpg" alt="This is the beauty of Santorini" height={"200px"} width={"200px"}></img>
                <img src="img/Santorini5.jpg" alt="This is the beauty of Santorini" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Athens</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to The Stanley, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Guided Half Day Athens City Tour with Acropolis Museum & Parthenon<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Athens</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Athens<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> AC Taxi from Athens Hotel to Piraeus Port- Private Transfers<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Blue Star Ferry from Piraeus Port to Santorini</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Athens<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Athens</td>
                    </tr>
                    </tbody>
                    </table>
                    <div className="box1">
                    <h4><b>Santorini</b>-3 Nights Stay</h4>
                    </div>
                    <table class="table table-striped">
                    <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Imperial MED & SPA, 4 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> AC Coach from Santorini Hotel to Port- Shared Transfers</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in SantoriniDay Meals: Breakfast : Included in Santorini<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Santorini Full-Day Caldera Cruise (Hot Springs and Thirassia)</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Santorini<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> AC Coach from Santorini Hotel to Port- Shared Transfers<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Blue Star Ferry from Santorini to Piraeus Port- Shared Transfers<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Santorini</td>
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

export default Santorini;