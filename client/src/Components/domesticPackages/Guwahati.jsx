import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Guwahati = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu />
            <div className="heading_Page">
                <h1> Welcome To Guwahati</h1>
            </div>
            <div className="heading">
                <h3>Weekend for Two - Guwahati and Shillong Getaway</h3>
            </div>
            <div className="images">
                <img src="img/guwahati1.jpg" alt="This is the beauty of Guwahati" height={"200px"} width={"200px"}></img>
                <img src="img/guwahati2.jpg" alt="This is the beauty of Guwahati" height={"200px"} width={"200px"}></img>
                <img src="img/guwahati3.jpg" alt="This is the beauty of Guwahati" height={"200px"} width={"200px"}></img>
                <img src="img/guwahati4.jpg" alt="This is the beauty of Guwahati" height={"200px"} width={"200px"}></img>
                <img src="img/guwahati5.jpg" alt="This is the beauty of Guwahati" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Guwahati</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Hotel D Courtyard, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Guwahati</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Guwahati</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Shillong</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to The Saad Hotel,Shillong, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Shillong<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Personal Photoshoot in Shillong</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC Sedan - Non AC for sightseeing in & around Shillong<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Shillong</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Shillong</td>
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

export default Guwahati;