import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Dubai = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu />
            <div className="heading_Page">
                <h1> Welcome To Dubai</h1>
            </div>
            <div className="heading">
                <h3>Super Saver Dubai Vacay</h3>
            </div>
            <div className="images">
                <img src="img/Dubai1.jpg" alt="This is the beauty of Dubai" height={"200px"} width={"200px"}></img>
                <img src="img/Dubai2.jpg" alt="This is the beauty of Dubai" height={"200px"} width={"200px"}></img>
                <img src="img/Dubai3.jpg" alt="This is the beauty of Dubai" height={"200px"} width={"200px"}></img>
                <img src="img/Dubai4.jpg" alt="This is the beauty of Dubai" height={"200px"} width={"200px"}></img>
                <img src="img/Dubai5.jpg" alt="This is the beauty of Dubai" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Dubai</b>-3 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Excelsior Hotel Downtown Al Rigga - Holidays Selections, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Excelsior Hotel Downtown Al Rigga - Holidays Selections , Dubai</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Excelsior Hotel Downtown Al Rigga - Holidays Selections , Dubai </td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>Day Meals: Breakfast : Included at Excelsior Hotel Downtown Al Rigga - Holidays Selections , Dubai <br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Dubai</td>
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

export default Dubai;