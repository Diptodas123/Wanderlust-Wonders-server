import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Maldives = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Maldives</h1>
            </div>
            <div className="heading">
                <h3>Medhufushi Maldives With Water Villa Stay</h3>
            </div>
            <div className="images">
                <img src="img/Maldives1.jpg" alt="This is the beauty of Maldives" height={"200px"} width={"200px"} ></img>
                <img src="img/Maldives2.jpg" alt="This is the beauty of Maldives" height={"200px"} width={"200px"}></img>
                <img src="img/Maldives3.jpg" alt="This is the beauty of Maldives" height={"200px"} width={"200px"}></img>
                <img src="img/Maldives4.jpg" alt="This is the beauty of Maldives" height={"200px"} width={"200px"}></img>
                <img src="img/Maldives5.jpg" alt="This is the beauty of Maldives" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Maldives</b>-4 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Medhufushi Island Resort - Holidays Selections, 4 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included at Medhufushi Island Resort - Holidays Selections , Maldives<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Speedboat from Velana International Airport to Medhufushi Island Resort- Shared Transfers</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included at Medhufushi Island Resort - Holidays Selections , Maldives<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Enjoy Free snorkelling trip at Medhufushi Island Resort</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included at Medhufushi Island Resort - Holidays Selections , Maldives</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included at Medhufushi Island Resort - Holidays Selections , Maldives</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included at Medhufushi Island Resort - Holidays Selections , Maldives<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Speedboat from Medhufushi Island Resort to Velana International Airport - Shared Transfers<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Maldives</td>
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

export default Maldives;