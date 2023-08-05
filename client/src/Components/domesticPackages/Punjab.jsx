import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';



const Punjab = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Punjab</h1>
            </div>
            <div className="heading">
                <h3>Fun Week in Himachal with Amritsar</h3>
            </div>
            <div className="images">
                <img src="img/Punjab1.jpg" alt="This is the beauty of Punjab" height={"200px"} width={"200px"}></img>
                <img src="img/Punjab2.jpg" alt="This is the beauty of Punjab" height={"200px"} width={"200px"}></img>
                <img src="img/Punjab3.jpg" alt="This is the beauty of Punjab" height={"200px"} width={"200px"}></img>
                <img src="img/Punjab4.jpg" alt="This is the beauty of Punjab" height={"200px"} width={"200px"}></img>
                <img src="img/Punjab5.jpg" alt="This is the beauty of Punjab" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Amritsar</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Dewdrop Shankh, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Amritsar</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Amritsar<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Dewdrop Shankh , Amritsar<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Amritsar</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Dewdrop Shankh , Amritsar<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Amritsar</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Dalhousie</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Dalhousie Valley by DLS Group of Hotels, 3 Star<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Dalhousie</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Dalhousie <br/><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at Dalhousie Valley by DLS Group of Hotels , Dalhousie<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Dalhousie </td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
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
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel BobsnBarley, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-car"></i> Private AC Sedan - AC for sightseeing in & around Dharamshala <br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Hotel BobsnBarley , Dharamshala<br/><i class="fa-sharp fa-solid fa-person-hiking"></i> Sightseeing In Dharamshala</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
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

export default Punjab;