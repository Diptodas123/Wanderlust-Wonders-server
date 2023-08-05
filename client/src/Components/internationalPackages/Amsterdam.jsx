import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Amsterdam = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Amsterdam</h1>
            </div>
            <div className="heading">
                <h3>Amsterdam Swiss Paris Budget Special Group Departure</h3>
            </div>
            <div className="images">
                <img src="img/Amsterdam1.jpg" alt="This is the beauty of Amsterdam" height={"200px"} width={"200px"}></img>
                <img src="img/Amsterdam2.jpg" alt="This is the beauty of Amsterdam" height={"200px"} width={"200px"}></img>
                <img src="img/Amsterdam3.jpg" alt="This is the beauty of Amsterdam" height={"200px"} width={"200px"}></img>
                <img src="img/Amsterdam4.jpg" alt="This is the beauty of Amsterdam" height={"200px"} width={"200px"}></img>
                <img src="img/Amsterdam5.jpg" alt="This is the beauty of Amsterdam" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Amsterdam</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Ibis Airport-Holidays Selections Fd, 3 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Amsterdam</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included in Amsterdam</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Amsterdam<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Amsterdam<br/></td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Paris</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Ibis Roissy Cdg Paris Nord 2, 3 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Paris</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included in Paris</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Paris</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Paris<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Paris<br/></td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Zurich</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Novotel Airport Messe Holidays Selections Fd, 3 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Zurich</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included in Zurich</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 8</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included in Zurich</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 9</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Zurich<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Zurich<br/></td>
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

export default Amsterdam;