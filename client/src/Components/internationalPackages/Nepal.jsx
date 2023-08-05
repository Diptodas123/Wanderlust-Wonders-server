import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Nepal = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Nepal</h1>
            </div>
            <div className="heading">
                <h3>Amazing Nepal - Group Tour (Deluxe)</h3>
            </div>
            <div className="images">
                <img src="img/Nepal1.jpg" alt="This is the beauty of Nepal" height={"200px"} width={"200px"}></img>
                <img src="img/Nepal2.jpg" alt="This is the beauty of Nepal" height={"200px"} width={"200px"}></img>
                <img src="img/Nepal3.jpg" alt="This is the beauty of Nepal" height={"200px"} width={"200px"}></img>
                <img src="img/Nepal4.jpg" alt="This is the beauty of Nepal" height={"200px"} width={"200px"}></img>
                <img src="img/Nepal5.jpg" alt="This is the beauty of Nepal" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Kathmandu</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Vaishali Kathmandu, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Kathmandu</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Kathmandu</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Kathmandu<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Kathmandu<br/></td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Pokhara</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Kuti Resort - Holidays Selections, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Pokhara</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Pokhara<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Pokhara</td>
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

export default Nepal;