import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Hawaii = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Hawaii</h1>
            </div>
            <div className="heading">
                <h3>Hawaiian Escape</h3>
            </div>
            <div className="images">
                <img src="img/Hawaii1.jpg" alt="This is the beauty of Hawaii" height={"200px"} width={"200px"}></img>
                <img src="img/Hawaii2.jpg" alt="This is the beauty of Hawaii" height={"200px"} width={"200px"}></img>
                <img src="img/Hawaii3.jpg" alt="This is the beauty of Hawaii" height={"200px"} width={"200px"}></img>
                <img src="img/Hawaii4.jpg" alt="This is the beauty of Hawaii" height={"200px"} width={"200px"}></img>
                <img src="img/Hawaii5.jpg" alt="This is the beauty of Hawaii" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
            <div className="box1">
                    <h4><b>Honolulu</b>-6 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to The Surfjack Hotel & Swim Club, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Arrival Private Transfer: Honolulu Airport HNL to Beach Resorts by Executive SUV</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Diamond Head Hiking Experience with Roundtrip Transportation</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Diamond Head Hiking Experience with Roundtrip Transportation</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at The Surfjack Hotel & Swim Club, Honolulu</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td>Day at Leisure</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at The Surfjack Hotel & Swim Club, Honolulu<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Honolulu<br/></td>
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

export default Hawaii;