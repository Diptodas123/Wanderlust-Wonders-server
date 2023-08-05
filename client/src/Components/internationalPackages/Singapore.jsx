import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Singapore = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Singapore</h1>
            </div>
            <div className="heading">
                <h3>Simply Singapore</h3>
            </div>
            <div className="images">
                <img src="img/Singapore1.jpg" alt="This is the beauty of Singapore" height={"200px"} width={"200px"}></img>
                <img src="img/Singapore2.jpg" alt="This is the beauty of Singapore" height={"200px"} width={"200px"}></img>
                <img src="img/Singapore3.jpg" alt="This is the beauty of Singapore" height={"200px"} width={"200px"}></img>
                <img src="img/Singapore4.jpg" alt="This is the beauty of Singapore" height={"200px"} width={"200px"}></img>
                <img src="img/Singapore5.jpg" alt="This is the beauty of Singapore" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Singapore</b>-5 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to DASH LIVING ROCHER (Previously Aqueen Heritage Little India) Holidays Selections, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at DASH LIVING ROCHER (Previously Aqueen Heritage Little India) Holidays Selections , Singapore</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at DASH LIVING ROCHER (Previously Aqueen Heritage Little India) Holidays Selections , Singapore</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at DASH LIVING ROCHER (Previously Aqueen Heritage Little India) Holidays Selections , Singapore</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included at DASH LIVING ROCHER (Previously Aqueen Heritage Little India) Holidays Selections , Singapore</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at DASH LIVING ROCHER (Previously Aqueen Heritage Little India) Holidays Selections , Singapore<br/><i class="fa-sharp fa-solid fa-hotel"></i>  Checkout from Hotel in Singapore<br/></td>
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

export default Singapore;