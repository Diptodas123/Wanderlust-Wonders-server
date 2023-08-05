import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Goa = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Goa</h1>
            </div>
            <div className="heading">
                <h3>All-Inclusive 5N Holiday - Flights, Sightseeing & Transfers</h3>
            </div>
            <div className="images">
                <img src="img/goa1.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/goa2.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/goa3.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/goa4.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/goa5.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Goa</b>-5 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Evoke Lifestyle Candolim, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> North Goa Sightseeing (Private Transfers)<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Evoke Lifestyle Candolim , Goa<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Photoshoot in North Goa</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Evoke Lifestyle Candolim , Goa</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i>  Evening Mandovi River Cruise<br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Evoke Lifestyle Candolim , Goa<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  South Goa Sightseeing (Private Transfers)</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Evoke Lifestyle Candolim , Goa</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Evoke Lifestyle Candolim , Goa<br/><i class="fa-sharp fa-solid fa-hotel"></i>  Checkout from Hotel in Goa<br/></td>
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

export default Goa;