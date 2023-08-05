import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Uttarakhand = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Uttarakhand</h1>
            </div>
            <div className="heading">
                <h3>Romantic Nainital, Corbett & Mussoorie</h3>
            </div>
            <div className="images">
                <img src="img/UK1.jpg" alt="This is the beauty of Uttarakhand" height={"200px"} width={"200px"}></img>
                <img src="img/UK2.jpg" alt="This is the beauty of Uttarakhand" height={"200px"} width={"200px"}></img>
                <img src="img/UK3.jpg" alt="This is the beauty of Uttarakhand" height={"200px"} width={"200px"}></img>
                <img src="img/UK4.jpg" alt="This is the beauty of Uttarakhand" height={"200px"} width={"200px"}></img>
                <img src="img/UK5.jpg" alt="This is the beauty of Uttarakhand" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Nainital</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Swiss Cottage, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Swiss Cottage , Nainital<br/><i class="fa-sharp fa-solid fa-car"></i> Private Non AC Sedan - AC for sightseeing in & around NainitalPrivate Non AC Sedan - AC for sightseeing in & around Nainital<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Nainital</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Swiss Cottage , Nainital<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Nainital</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Corbett</b>- 1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Holiday Highlight By Howard, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Holiday Highlight By Howard , Corbett<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Corbett</td>
                    </tr>
                    </tbody>
                    </table>
                <div className="box1">
                    <h4><b>Mussoorie</b>- 2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to The Pearl By DLS Hotels and Resorts, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at The Pearl By DLS Hotels and Resorts , Mussoorie<br/><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Mussoorie<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Mussoorie<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Professional Photography in Mussoorie</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at The Pearl By DLS Hotels and Resorts , Mussoorie<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Mussoorie</td>
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

export default Uttarakhand;