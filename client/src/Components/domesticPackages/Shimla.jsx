import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Shimla = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Shimla</h1>
            </div>
            <div className="heading">
                <h3>Memorable Shimla & Manali Holiday</h3>
            </div>
            <div className="images">
                <img src="img/shimla1.jpg" alt="This is the beauty of Shimla" height={"200px"} width={"200px"}></img>
                <img src="img/shimla2.jpg" alt="This is the beauty of Shimla" height={"200px"} width={"200px"}></img>
                <img src="img/shimla3.jpg" alt="This is the beauty of Shimla" height={"200px"} width={"200px"}></img>
                <img src="img/shimla4.jpg" alt="This is the beauty of Shimla" height={"200px"} width={"200px"}></img>
                <img src="img/shimla5.jpg" alt="This is the beauty of Shimla" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Shimla</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Golden Oak, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Mid Way Customer Lounge for Himachal Travelers at Mannat Dhaba, Murthal NH-1</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private Non AC Sedan - Non AC for sightseeing in & around Shimla<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Golden Oak , Shimla<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Shimla</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Golden Oak , Shimla<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Shimla</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Manali</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Kapoor Resort by DLS Hotels, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i>  Private Non AC Sedan - Non AC for sightseeing in & around Manali<br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Kapoor Resort by DLS Hotels , Manali<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Manali</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i>  Private Non AC Sedan - Non AC for sightseeing in & around Manali<br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Kapoor Resort by DLS Hotels , Manali<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Manali</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Kapoor Resort by DLS Hotels , Manali<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Mid Way Customer Lounge for New Delhi Travelers at Sitara Dhaba, Nilokheri NH-1<br/><i class="fa-sharp fa-solid fa-hotel"></i>  Checkout from Hotel in Manali<br/></td>
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

export default Shimla;