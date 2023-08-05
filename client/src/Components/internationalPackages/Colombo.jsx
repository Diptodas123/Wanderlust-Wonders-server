import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Colombo = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Sri Lanka</h1>
            </div>
            <div className="heading">
                <h3>5 Days in Bentota & Colombo</h3>
            </div>
            <div className="images">
                <img src="img/Colombo1.jpg" alt="This is the beauty of Colombo" height={"200px"} width={"200px"} ></img>
                <img src="img/Colombo2.jpg" alt="This is the beauty of Colombo" height={"200px"} width={"200px"}></img>
                <img src="img/Colombo3.jpg" alt="This is the beauty of Colombo" height={"200px"} width={"200px"}></img>
                <img src="img/Colombo4.jpg" alt="This is the beauty of Colombo" height={"200px"} width={"200px"}></img>
                <img src="img/Colombo5.jpg" alt="This is the beauty of Colombo" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Bentota</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hibiscus Beach Hotel (Holidays Selections), 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Bentota</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hibiscus Beach Hotel (Holidays Selections) , Bentota</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hibiscus Beach Hotel (Holidays Selections) , Bentota<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Bentota</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Colombo</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Grand Oriental Hotel(Holidays Selections),Colombo, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Colombo<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Grand Oriental Hotel(Holidays Selections),Colombo , Colombo<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Colombo</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Grand Oriental Hotel(Holidays Selections),Colombo , Colombo<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Colombo</td>
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

export default Colombo;