import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const HimachalPradesh = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Himachal Pradesh</h1>
            </div>
            <div className="heading">
                <h3>Best of Holiday in Himachal from Amritsar</h3>
            </div>
            <div className="images">
                <img src="img/HP1.jpg" alt="This is the beauty of Himachal Pradesh" height={"200px"} width={"200px"}></img>
                <img src="img/HP2.jpg" alt="This is the beauty of Himachal Pradesh" height={"200px"} width={"200px"}></img>
                <img src="img/HP3.jpg" alt="This is the beauty of Himachal Pradesh" height={"200px"} width={"200px"}></img>
                <img src="img/HP4.jpg" alt="This is the beauty of Himachal Pradesh" height={"200px"} width={"200px"}></img>
                <img src="img/HP5.jpg" alt="This is the beauty of Himachal Pradesh" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Manali</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Kapoor Resort by DLS Hotels, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i>  Private Non AC Sedan - Non AC for sightseeing in & around Manali<br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Kapoor Resort by DLS Hotels , Manali<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Manali</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i>  Private Non AC Sedan - Non AC for sightseeing in & around Manali<br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Kapoor Resort by DLS Hotels , Manali<br/><i class="fa-sharp fa-solid fa-person-hiking"></i>  Sightseeing In Manali</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Kapoor Resort by DLS Hotels , Manali<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Mid Way Customer Lounge for New Delhi Travelers at Sitara Dhaba, Nilokheri NH-1<br/><i class="fa-sharp fa-solid fa-hotel"></i>  Checkout from Hotel in Manali<br/></td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Dalhousie</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Dalhousie Valley by DLS Group of Hotels, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Dalhousie</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Dalhousie <br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Dalhousie Valley by DLS Group of Hotels , Dalhousie<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Dalhousie </td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Dalhousie Valley by DLS Group of Hotels , Dalhousie <br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Dalhousie</td>
                    </tr>
                    </tbody>
                    </table>
                    <div className="box1">
                    <h4><b>Dharamshala</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel BobsnBarley, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Dharamshala <br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel BobsnBarley , Dharamshala<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Dharamshala</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 8</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel BobsnBarley , Dharamshala <br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Dharamshala</td>
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

export default HimachalPradesh;