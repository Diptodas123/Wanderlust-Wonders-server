import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Darjeeling = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Darjeeling</h1>
            </div>
            <div className="heading">
                <h3>Cultural Darjeeling Holiday- MakeMyDay Special</h3>
            </div>
            <div className="images">
                <img src="img/Darjeeling1.jpg" alt="This is the beauty of Darjeeling" height={"200px"} width={"200px"}></img>
                <img src="img/Darjeeling2.jpg" alt="This is the beauty of Darjeeling" height={"200px"} width={"200px"}></img>
                <img src="img/Darjeeling3.jpg" alt="This is the beauty of Darjeeling" height={"200px"} width={"200px"}></img>
                <img src="img/Darjeeling4.jpg" alt="This is the beauty of Darjeeling" height={"200px"} width={"200px"}></img>
                <img src="img/Darjeeling5.jpg" alt="This is the beauty of Darjeeling" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Darjeeling</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Summit Grace Boutique Hotel & Spa, Darjeeling, 4 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Complimentary Brunch on Arrival at Lounge in Bagdogra.</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Grace Boutique Hotel & Spa, Darjeeling , Darjeeling</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Grace Boutique Hotel & Spa, Darjeeling , Darjeeling<br/><i class="fa-sharp fa-solid fa-car"></i> Private Non AC Mini Car - Non AC for sightseeing in & around Darjeeling<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Darjeeling<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Tea Tasting Session at Local Tea lounge</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Grace Boutique Hotel & Spa, Darjeeling , Darjeeling<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Darjeeling</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="bt">
                <button type="submit" class="btn btn-warning"><NavLink to={'/form'} onChange={backToTop} className={'nav1'} style={{ textDecoration: "none" }}>BOOK NOW</NavLink></button>
            </div>
            <Footer />
        </>
    )
}

export default Darjeeling;