import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Rajasthan = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Rajasthan</h1>
            </div>
            <div className="heading">
                <h3>Magical 3 Nights in Udaipur</h3>
            </div>
            <div className="images">
                <img src="img/Udaipur1.jpg" alt="This is the beauty of Udaipur" height={"200px"} width={"200px"} ></img>
                <img src="img/Udaipur2.jpg" alt="This is the beauty of Udaipur" height={"200px"} width={"200px"}></img>
                <img src="img/Udaipur3.jpg" alt="This is the beauty of Udaipur" height={"200px"} width={"200px"}></img>
                <img src="img/Udaipur4.jpg" alt="This is the beauty of Udaipur" height={"200px"} width={"200px"}></img>
                <img src="img/Udaipur5.jpg" alt="This is the beauty of Udaipur" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Udaipur</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Hotel Royal Pratap Niwas, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Udaipur<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Royal Pratap Niwas , Udaipur<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Udaipur<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Photoshoot in Udaipur<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Boat Ride at Lake Pichola<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>Experiential Heritage Dinner (Lake View)</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Udaipur<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Royal Pratap Niwas , Udaipur<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Udaipur</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Udaipur<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Royal Pratap Niwas , Udaipur</td>
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

export default Rajasthan;