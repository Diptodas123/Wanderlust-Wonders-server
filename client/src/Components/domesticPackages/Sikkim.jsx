import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Sikkim = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Sikkim</h1>
            </div>
            <div className="heading">
                <h3>Mesmerising Part of North East</h3>
            </div>
            <div className="images">
                <img src="img/Sikkim1.jpg" alt="This is the beauty of Sikkim" height={"200px"} width={"200px"} ></img>
                <img src="img/Sikkim2.jpg" alt="This is the beauty of Sikkim" height={"200px"} width={"200px"}></img>
                <img src="img/Sikkim3.jpg" alt="This is the beauty of Sikkim" height={"200px"} width={"200px"}></img>
                <img src="img/Sikkim4.jpg" alt="This is the beauty of Sikkim" height={"200px"} width={"200px"}></img>
                <img src="img/Sikkim5.jpg" alt="This is the beauty of Sikkim" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Gangtok</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Summit Namnang-400 Mts From The Mall Road, 4 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Complimentary Refreshments on Arrival Lounge</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Gangtok<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Namnang-400 Mts From The Mall Road , Gangtok<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Gangtok<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Candle Light Dinner at Summit Namnang Courtyard and Spa Gangtok</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Gangtok<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Namnang-400 Mts From The Mall Road , Gangtok<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Gangtok</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Udaipur<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Namnang-400 Mts From The Mall Road , Gangtok<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Gangtok</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Pelling</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Summit Newa Regency, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Pelling<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Summit Newa Regency , Pelling<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Pelling<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Pelling</td>
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

export default Sikkim;