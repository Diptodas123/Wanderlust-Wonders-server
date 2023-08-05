import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Australia = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu /><br />
            <div className="heading_Page">
                <h1> Welcome To Australia</h1>
            </div>
            <div className="heading">
                <h3>Superdeal Australia - 6N</h3>
            </div>
            <div className="images">
                <img src="img/Aus1.jpg" alt="This is the beauty of Australia" height={"200px"} width={"200px"} ></img>
                <img src="img/Aus2.jpg" alt="This is the beauty of Australia" height={"200px"} width={"200px"}></img>
                <img src="img/Aus3.jpg" alt="This is the beauty of Australia" height={"200px"} width={"200px"}></img>
                <img src="img/Aus4.jpg" alt="This is the beauty of Australia" height={"200px"} width={"200px"}></img>
                <img src="img/Aus5.jpg" alt="This is the beauty of Australia" height={"200px"} width={"200px"}></img>
            </div>
            <br /><br />
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Sydney</b>-4 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 1</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to ibis Sydney World Square, 3 Star</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 2</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at ibis Sydney World Square , Sydney<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Big Bus Sydney Deluxe - 24hrs- Bus + Opera House Guided Tour in Afternoon</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 3</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at ibis Sydney World Square , Sydney<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Sydney Showboat with Indian Menu </td>
                        </tr>
                        <tr>
                            <th scope="row">Day 4</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at ibis Sydney World Square , Sydney<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Sydney</td>
                        </tr>
                    </tbody>
                </table>
                <div className="box1">
                    <h4><b>Melbourne</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Day 4</th>
                            <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to ibis Melbourne Central, 3 Star</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 5</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at ibis Melbourne Central , Melbourne<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Melbourne Half Day City Tour<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> Melbourne Cricket Ground Tour</td>
                        </tr>
                        <tr>
                            <th scope="row">Day 6</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at ibis Melbourne Central , Melbourne<br /><i class="fa-sharp fa-solid fa-person-hiking"></i> SIC Oceania 24 - Phillip Island Day Tour with Moonlite Sanctuary & Penguin Parade General Viewing - PI24 </td>
                        </tr>
                        <tr>
                            <th scope="row">Day 7</th>
                            <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at ibis Melbourne Central , Melbourne<br /><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Melbourne </td>
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

export default Australia;