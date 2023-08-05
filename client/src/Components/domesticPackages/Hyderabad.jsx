import React from 'react';
import './Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Hyderabad = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br />
            <div className="heading_Page">
                <h1> Welcome To Hyderabad</h1>
            </div>
            <div className="heading">
                <h3>Taj Krishna, Hyderabad 2N - With flights</h3>
            </div>
            <div className="images">
                <img src="img/Hyderabad1.jpg" alt="This is the beauty of Hyderabad" height={"200px"} width={"200px"}></img>
                <img src="img/Hyderabad2.jpg" alt="This is the beauty of Hyderabad" height={"200px"} width={"200px"}></img>
                <img src="img/Hyderabad3.jpeg" alt="This is the beauty of Hyderabad" height={"200px"} width={"200px"}></img>
                <img src="img/Hyderabad4.jpg" alt="This is the beauty of Hyderabad" height={"200px"} width={"200px"}></img>
                <img src="img/Hyderabad5.jpg" alt="This is the beauty of Hyderabad" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Hyderabad</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Taj Krishna, Hyderabad, 5 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Taj Krishna, Hyderabad , Hyderabad</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included at Taj Krishna, Hyderabad , Hyderabad<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Hyderabad</td>
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

export default Hyderabad;