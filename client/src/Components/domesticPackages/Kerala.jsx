import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Kerala = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Kerala</h1>
            </div>
            <div className="heading">
                <h3>Premium 4N Kerala Vacay</h3>
            </div>
            <div className="images">
                <img src="img/kerela1.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/kerela2.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/kerela3.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/kerela4.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
                <img src="img/kerela5.jpg" alt="This is the beauty of Goa" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Munnar</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Broad Bean Resort & Spa, 5 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Munnar<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Traditional Meal of Kerala</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Munnar<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Broad Bean Resort & Spa , Munnar<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Munnar</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Munnar<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Broad Bean Resort & Spa , Munnar</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Thekkady</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to The Mountain Courtyard Thekkady, 5 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Thekkady</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Thekkady<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at The Mountain Courtyard Thekkady , Thekkady</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Alleppey</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Alleppey<br/><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Ramada Alleppey - Holidays Selection, 5 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Ramada Alleppey - Holidays Selection , Alleppey<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Alleppey</td>
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

export default Kerala;