import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Mauritius = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Mauritius</h1>
            </div>
            <div className="heading">
                <h3>Vibe in Mauritius - Makemyday Special</h3>
            </div>
            <div className="images">
                <img src="img/Mauritius1.jpg" alt="This is the beauty of Mauritius" height={"200px"} width={"200px"}></img>
                <img src="img/Mauritius2.jpg" alt="This is the beauty of Mauritius" height={"200px"} width={"200px"}></img>
                <img src="img/Mauritius3.jpg" alt="This is the beauty of Mauritius" height={"200px"} width={"200px"}></img>
                <img src="img/Mauritius4.jpg" alt="This is the beauty of Mauritius" height={"200px"} width={"200px"}></img>
                <img src="img/Mauritius5.jpg" alt="This is the beauty of Mauritius" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Mauritius</b>-6 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Recif Attitude Hotel(Adult Only) - Holidays Selections, 3 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>Day Meals: Breakfast & Dinner : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius </td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast & Dinner : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Catamaran Cruise with Lunch with Private Transfers</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast & Dinner : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast & Dinner : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Recif Attitude Hotel(Adult Only) - Holidays Selections , Mauritius<br/><i class="fa-sharp fa-solid fa-hotel"></i>  Checkout from Hotel in Mauritius<br/></td>
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

export default Mauritius;