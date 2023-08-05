import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Andaman = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu /><br />
            <div className="heading_Page">
                <h1> Welcome To Andaman</h1>
            </div>
            <div className="heading">
                <h3>Best of Andaman - Standard</h3>
            </div>

            <div className="images">
                <img src="img/Andaman1.jpg" alt="This is the beauty of Andaman" height={"200px"} width={"200px"}></img>
                <img src="img/Andaman2.jpg" alt="This is the beauty of Andaman" height={"200px"} width={"200px"}></img>
                <img src="img/Andaman3.jpg" alt="This is the beauty of Andaman" height={"200px"} width={"200px"}></img>
                <img src="img/Andaman4.jpg" alt="This is the beauty of Andaman" height={"200px"} width={"200px"}></img>
                <img src="img/Andaman5.jpg" alt="This is the beauty of Andaman" height={"200px"} width={"200px"}></img>
            </div>
            <br /><br />
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Port Blair</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 1</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to TSG Emerald View Hotel and Spa, 3 Star<br /><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Port Blair<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Cellular Jail Visit- Ticket Only<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> On-Ground Assistance by Tour Manager</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 2</th>
                            <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Ferry from Port Blair to Havelock Island- Shared Transfers<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Day Meals: Breakfast : Included at TSG Emerald View Hotel and Spa , Port Blair<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Port Blair</td>
                        </tr>
                    </tbody>
                </table>
                <div className="box1">
                    <h4><b>Havelock</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 2</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to TSG Blue Resort and Spa, 3 Star<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Havelock</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 3</th>
                            <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Havelock<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Havelock<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Elephant Beach - Ticket Only<br /><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at TSG Blue Resort and Spa , Havelock</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 4</th>
                            <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Ferry from Havelock Island to Neil Island- Shared Transfers<br /><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at TSG Blue Resort and Spa , Havelock<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Havelock</td>
                        </tr>
                    </tbody>
                </table>
                <div className="box1">
                    <h4><b>Niel Island</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 4</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to TSG AURA, 3 Star</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 5</th>
                            <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Ferry from Neil Island to Port Blair- Shared Transfers<br /><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at TSG AURA , Niel Island<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Niel Island</td>
                        </tr>
                    </tbody>
                </table>
                <div className="box1">
                    <h4><b>Port Blair</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 5</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Hotel TSG Grand, 3 Star<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Port Blair<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sunset Picnic at Chidiya Tapu with Refreshments</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 6</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel TSG Grand , Port Blair<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Port Blair</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bt">
                <button type="submit" class="btn btn-warning"><Link to={'/form'} onClick={backToTop} className={'nav1'} style={{ textDecoration: "none" }}>BOOK NOW</Link></button>
            </div>
            <Footer />
        </>
    )
}

export default Andaman;