import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const TamilNadu = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Tamil Nadu</h1>
            </div>
            <div className="heading">
                <h3>Spiritual Trip to Tirupati, Madurai & Rameshwaram</h3>
            </div>
            <div className="images">
                <img src="img/TN1.jpg" alt="This is the beauty of Tamil Nadu" height={"200px"} width={"200px"}></img>
                <img src="img/TN2.jpg" alt="This is the beauty of Tamil Nadu" height={"200px"} width={"200px"}></img>
                <img src="img/TN3.jpg" alt="This is the beauty of Tamil Nadu" height={"200px"} width={"200px"}></img>
                <img src="img/TN4.jpg" alt="This is the beauty of Tamil Nadu" height={"200px"} width={"200px"}></img>
                <img src="img/TN5.jpg" alt="This is the beauty of Tamil Nadu" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Kanyakumari</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Comorin Grand, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Kanyakumari</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Comorin Grand , Kanyakumari<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Kanyakumari</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Rameshwaram </b>- 1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Vel Residency, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Rameshwaram</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Rameshwaram </td>
                    </tr>
                    </tbody>
                    </table>
                <div className="box1">
                    <h4><b>Madurai</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Madurai Residency, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Madurai</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Madurai Residency , Madurai<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Madurai</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Tirupati</b>- 2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Mount View Comforts, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Mount View Comforts , Tirupati<br/><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Tirupati</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Mount View Comforts , Tirupati<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Tirupati</td>
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

export default TamilNadu;