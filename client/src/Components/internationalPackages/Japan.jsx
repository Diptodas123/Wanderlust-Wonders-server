import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Japan = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Japan</h1>
            </div>
            <div className="heading">
                <h3>Japanese Extravaganza</h3>
            </div>
            <div className="images">
                <img src="img/Japan1.jpg" alt="This is the beauty of Japan" height={"200px"} width={"200px"}></img>
                <img src="img/Japan2.jpg" alt="This is the beauty of Japan" height={"200px"} width={"200px"}></img>
                <img src="img/Japan3.jpg" alt="This is the beauty of Japan" height={"200px"} width={"200px"}></img>
                <img src="img/Japan4.jpg" alt="This is the beauty of Japan" height={"200px"} width={"200px"}></img>
                <img src="img/Japan5.jpg" alt="This is the beauty of Japan" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Tokyo</b>-5 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Comfort Hotel Tokyo Kiyosumi Shirakawa, 3 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Tokyo</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Tokyo</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Tokyo</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in TokyoCheckout from Hotel in Tokyo<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Tokyo</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Osaka</b>-5 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i>  Check in to Candeo Hotels Osaka Namba, 4 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Osaka</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Osaka</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 8</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Osaka</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 9</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included in Osaka</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 10</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i>  Day Meals: Breakfast : Included in OsakaCheckout from Hotel in Osaka<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Osaka</td>
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

export default Japan;