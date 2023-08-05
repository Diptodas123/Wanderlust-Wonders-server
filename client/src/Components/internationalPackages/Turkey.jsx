import React from 'react';
import '../domesticPackages/Page.css';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Turkey = () =>{
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <>
            <Menu /><br/>
            <div className="heading_Page">
                <h1> Welcome To Turkey</h1>
            </div>
            <div className="heading">
                <h3>Turkey - Serie Mediterranean (Europamundo)</h3>
            </div>
            <div className="images">
                <img src="img/Turkey1.jpg" alt="This is the beauty of Turkey" height={"200px"} width={"200px"}></img>
                <img src="img/Turkey2.jpg" alt="This is the beauty of Turkey" height={"200px"} width={"200px"}></img>
                <img src="img/Turkey3.jpg" alt="This is the beauty of Turkey" height={"200px"} width={"200px"}></img>
                <img src="img/Turkey4.jpg" alt="This is the beauty of Turkey" height={"200px"} width={"200px"}></img>
                <img src="img/Turkey5.jpg" alt="This is the beauty of Turkey" height={"200px"} width={"200px"}></img>
            </div>
            <br/><br/>
            <div className="package">
                <h3>Package Summary</h3>
            </div>
            <div className="box">
                <div className="box1">
                    <h4><b>Istanbul</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 1</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Elite World Istanbul Florya Hotel, 5 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 2</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Istanbul</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Istanbul<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Istanbul</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Ankara</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Bilkent Hotel & Conference Center Ankara, 5 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Ankara<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Ankara</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Cappadocia</b>-2 Nights Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Avrasya Hotel, 5 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Cappadocia</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 5</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast & Dinner : Included in Cappadocia</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Cappadocia<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Cappadocia</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Konya</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 6</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Novotel Konya, 5 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Konya</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Konya<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Konya</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Pamukkale</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 7</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Lycus River Thermal Hotel, 5 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Pamukkale</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 8</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Pamukkale<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Pamukkale</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Kusadasi</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 8</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Hotel Le Blue - Holidays Selections, 5 Star<br/><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Dinner : Included in Kusadasi</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 9</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Kusadasi<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Kusadasi</td>
                    </tr>
                </tbody>
                </table>
                <div className="box1">
                    <h4><b>Istanbul</b>-1 Night Stay</h4>
                </div>
                <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">Day 3</th>
                        <td><i class="fa-sharp fa-solid fa-hotel"></i> Check in to Elite World Istanbul Florya Hotel, 5 Star</td>
                    </tr>
                    <tr>
                        <th scope="row">Day 4</th>
                        <td><i class="fa-sharp fa-solid fa-utensils"></i> Day Meals: Breakfast : Included in Istanbul<br/><i class="fa-sharp fa-solid fa-hotel"></i> Checkout from Hotel in Istanbul</td>
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

export default Turkey;