import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Kashmir = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Kashmir</h1>
            </div>
            <div className="heading">
                <h3>Fabulous Kashmir Vacation - With Houseboat Stay</h3>
            </div>
            <div className="images">
                <img src="img/Kashmir1.jpg" alt="This is the beauty of Kashmir" height={"200px"} width={"200px"} ></img>
                <img src="img/Kashmir2.jpg" alt="This is the beauty of Kashmir" height={"200px"} width={"200px"}></img>
                <img src="img/Kashmir3.jpg" alt="This is the beauty of Kashmir" height={"200px"} width={"200px"}></img>
                <img src="img/Kashmir4.jpg" alt="This is the beauty of Kashmir" height={"200px"} width={"200px"}></img>
                <img src="img/Kashmir5.jpg" alt="This is the beauty of Kashmir" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Srinagar Houseboat</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Deluxe Houseboats by Royal Group Holiday Selection, 4 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Exclusive Lounge for refreshment on arrivalExclusive Lounge for refreshment on arrival<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> On-Ground Assistance by Tour Manager</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Deluxe Houseboat by Meena Group , Srinagar Houseboat<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Srinagar Houseboat</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Gulmarg</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Heevan Retreat, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Gulmarg House , Gulmarg<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Gulmarg</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Pahalgam</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Premier, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC MUV (Standard) - Non AC for sightseeing in & around Pahalgam<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Premier, Pahalgam<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Pahalgam</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel Premier,Pahalgam<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Pahalgam</td>
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

export default Kashmir;