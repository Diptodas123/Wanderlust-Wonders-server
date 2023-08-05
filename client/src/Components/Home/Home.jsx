import React, { useState } from "react";
import Menu from "../Menu/Menu.jsx";
import "../Menu/Menu.css";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import { toast, ToastContainer } from "react-toastify";
const Home = () => {
    const [user, setUser] = useState({
        newsletterEmail: "",
    });
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const onNewsletterSubmit = () => {
        if (document.getElementById("newsletter").value === "" || (document.getElementById("newsletter").value).slice(-10) !== "@gmail.com") {
            toast.error("Please enter a valid email!", {
                position: "top-center",
            });
        }
        else {
            toast.success("Thanks for your subscription!", {
                position: "top-center",
            })
        }
        setTimeout(() => {
            document.getElementById("newsletter").value = "";
        }, 6000);
    }
    return (
        <>
            <Menu />
            {/* slideshow */}

            <div id="carouselExampleCaptions" className="carousel slide carousel-fade slide-conatiner" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/pic1.jpg" className="d-block w-100" alt="img/pic1.jpg" />
                        <div className="carousel-caption d-none d-md-block caption">
                            <h1><b>Welcome to Wanderlust Wonders</b></h1>
                            <p><b>best platform to pave the way to your dream trip</b></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/pic2.jpg" className="d-block w-100" alt="img/pic2.jpg" />
                        <div className="carousel-caption d-none d-md-block caption">
                            <h1><b>Explore the incredible India with us</b></h1>
                            <p><b>through our domestic tour packages</b></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/pic3.jpg" className="d-block w-100" alt="img/pic3.jpg" />
                        <div className="carousel-caption d-none d-md-block caption">
                            <h1><b>Explore the beautiful world with us</b></h1>
                            <p ><b>through our international tour packages</b></p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>


            {/* covid-restrictions */}
            <div className="container mt-5">
                <div className="covid-alert">
                    <i className="fa-solid fa-triangle-exclamation " id="covid-alert-icon"></i>
                    Check the latest COVID-19 restrictions before you travel.
                    <Link id="covid-alert-link" to="https://www.mea.gov.in/guidelines-for-international-arrivals.htm" target="_blank" alt="covid-guidelines" >
                        Learn more
                    </Link>
                </div>
            </div>

            {/*best-packages */}
            <div id="best-packages">
                <div className="container mt-5">
                    <h3><b>Best packages for you</b></h3>
                    <p>plan and book our best trip packages with expert advice, destination information and inspiration from us</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div class="card mb-3">
                                <img src="img/card-img-1.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">6 days, 5 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹62,000/person</span></p>
                                <h6 className="text-center m-1"><b>Discover breathtaking landscapes of Ladakh</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                    <p className="location"> Ladakh, India</p>
                                    <Link to="/ladakh" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-2.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">4 days, 3 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹35,000/person</span></p>
                                <h6 class="text-center m-1"><b>Weekend gateway to Goa</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Goa, India</p>
                                    <Link to="/goa" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-3.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">7 days, 6 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹69,999/person</span></p>
                                <h6 className="text-center m-1"><b>Explore beautiful beaches of Bali</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Bali, Indonesia</p>
                                    <Link to="/bali" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-4.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">10 days, 9 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹4,95,825/person</span></p>
                                <h6 className="text-center m-1"><b>Japanese extravaganza</b></h6>
                                <div class="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Tokyo & Osaka, Japan</p>
                                    <Link to="/japan" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
            {/* domestic-packages */}
            <div id="domestic-packages">
                <div className="container mt-5">
                    <h3><b>Domestic packages for you</b></h3>
                    <p>book our best domestic packages to explore the incredible India with expert advice and tips</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-5.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">5 days, 4 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹29,999/person</span></p>
                                <h6 className="text-center m-1"><b>Discover Kerala aka the God's Own Country </b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                    <p className="location"> Kerala, India</p>
                                    <Link to="/kerala" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/guwahati.jpg" alt="img/guwahati.jpg" />
                                <p className="mt-2 p-3 mb-1">4 days, 3 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹33,869/person</span></p>
                                <h6 className="text-center m-1"><b>Experience the Cultures of Guwahati</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Assam, India</p>
                                    <Link to="/guwahati" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-7.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">6 days, 5 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹37,826/person</span></p>
                                <h6 className="text-center mt-1 ml-1"><b style={{ fontSize: "15px" }}>Experience island life of Andaman</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                    <p className="location"> Andaman, India</p>
                                    <Link to="/andaman" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-8.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">3 days, 2 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹19,629/person</span></p>
                                <h6 className="text-center m-1"><b>Explore Hyderabad aka the City of Pearls</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Hyderabad, India</p>
                                    <Link to="/hyderabad" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* to view more domestic-packages */}
                    <Link className="view-more" to="/domestic" onClick={backToTop}>
                        <input type="button" className="btn btn-outline-primary " value="View more →"></input>
                    </Link>
                    <hr></hr>
                </div>
            </div>
            {/* international-packages */}
            <div id="international-packages">
                <div className="container mt-5">
                    <h3><b>International packages for you</b></h3>
                    <p>book our best international packages to experience your dream foreign tour with expert advice and tips
                    </p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-9.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">5 days, 4 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹1,35,999/person</span></p>
                                <h6 className="text-center m-1"><b>Experience the luxurious life in Maldives</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                    <p className="location">Maldives</p>
                                    <Link to="/maldives" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-10.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">5 days, 4 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹45,999/person</span></p>
                                <h6 className="text-center m-1"><b>A short break to Sri Lanka</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Colombo, Sri Lanka</p>
                                    <Link to="/colombo" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-11.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">10 days, 9 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹1,99,927/person</span></p>
                                <h6 className="text-center mt-0"><b>Discover offbeat South Africa</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                    <p className="location"> South Africa</p>
                                    <Link to="/south_africa" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-3">
                                <img src="img/card-img-12.jpg" alt="./card-img-1" />
                                <p className="mt-2 p-3 mb-1">4 days, 3 nights<span
                                    style={{ float: "right", color: "#007bff" }}>₹49,629/person</span></p>
                                <h6 className="text-center m-1"><b>Explore the world's tallest buildings in Dubai</b></h6>
                                <div className="p-3">
                                    <i className="fa-solid fa-location-dot text-primary "></i>
                                    <p className="location"> Dubai, UAE</p>
                                    <Link to="/dubai" onClick={backToTop}>
                                        <input type="button" className="btn btn-outline-primary" value="View"></input>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* to view more international-packages */}
                    <Link className="view-more" to="/international" onClick={backToTop}>
                        <input type="button" className="btn btn-outline-primary " value="View more →"></input>
                    </Link>
                    <hr></hr>
                </div>
            </div>
            {/* Blogs */}
            <div id="Blogs">
                <div className="container mt-5">
                    <h3><b>Blogs</b></h3>
                    <p>browse our blogs and guides to discover which destination you should visit next!</p>
                    <div className="row blog-container">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card blog-card mb-3">
                                <img src="img/card-img-13.jpg" alt="img/card-img-13.jpg" />
                                <h6 className="text-left  m-2"><b>The Ultimate Summer Adventure: Top Destinations To Add To Your 2023 Travel Bucket List</b></h6>
                                <Link className="blog-button" to="/blog1" onClick={backToTop}>
                                    <input type="button" className="btn btn-outline-primary " value="View"></input>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card blog-card mb-3">
                                <img src="img/card-img-14.jpg" alt="img/card-img-14.jpg" />
                                <h6 className="text-left  m-2"><b>The Ultimate Adventure: Buckle Up For The Best Road Trips In The World</b></h6>
                                <Link className="blog-button" to="/blog2" onClick={backToTop}>
                                    <input type="button" className="btn btn-outline-primary " value="View"></input>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card blog-card mb-3">
                                <img src="img/card-img-15.jpg" alt="img/card-img-15.jpg" />
                                <h6 className="text-left  m-2"><b>Discover Europe's Rich History: Must See Historical Sites To Visit On Your Next Trip</b></h6>
                                <Link className="blog-button" to="/blog3" onClick={backToTop}>
                                    <input type="button" className="btn btn-outline-primary " value="View"></input>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card blog-card mb-3">
                                <img src="img/card-img-16.jpg" alt="img/card-img-16.jpg" />
                                <h6 className="text-left  m-2"><b>The Ultimate Island Adventure: Must Visit Islands in Southeast Asia For Your Next Trip</b></h6>
                                <Link className="blog-button" to="/blog4" onClick={backToTop}>
                                    <input type="button" className="btn btn-outline-primary " value="View"></input>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* to view more international-packages */}
                    <Link className="view-more" to="/blogs" onClick={backToTop}>
                        <input type="button" className="btn btn-outline-primary " value="View more →"></input>
                    </Link>
                    <hr></hr>
                </div>
            </div>

            {/* features of our company */}
            <div id="features">
                <div className="container mt-5">
                    <h3><b>Why Wanderlust Wonders?</b></h3>
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="features-card mb-3 " style={{ borderBottom: "10px solid #617A55" }}>
                                <div className="d-flex justify-content-center align-content-center">
                                    <div className="circle text-center mt-4 mb-2" style={{ backgroundColor: "#617A55" }}>
                                        <i className="fa-solid fa-handshake-simple features-icon mt-4" style={{ color: "white" }}></i>
                                    </div>
                                </div>
                                <div className="features-text">
                                    <h4 className="text-center">Ease</h4>
                                    <p className="p-2 text-center">Travel smooth and stress-free. That's how easy we make it because that's how your holiday should be.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="features-card mb-3 " style={{ borderBottom: "10px solid #245953" }}>
                                <div className="d-flex justify-content-center align-content-center">
                                    <div className="circle text-center mt-4 mb-2" style={{ backgroundColor: "#245953" }}>
                                        <i className="fa-solid fa-thumbs-up features-icon mt-4" style={{ color: "white" }}></i>
                                    </div>
                                </div>
                                <div >
                                    <h4 className="text-center">Trusted Advisor</h4>
                                    <p className="p-2 text-center">We'll answer your every question. Our experienced travel experts and real-time on field know-how gives us this advantage.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="features-card mb-3 " style={{ borderBottom: "10px solid #321E1E" }}>
                                <div className="d-flex justify-content-center align-content-center">
                                    <div className="circle text-center mt-4 mb-2" style={{ backgroundColor: "#321E1E" }}>
                                        <i class="fa-solid fa-ear-listen features-icon mt-4" style={{ color: "white" }}></i>
                                    </div>
                                </div>
                                <div >
                                    <h4 className="text-center">We Love Listening</h4>
                                    <p className="p-2 text-center">Your holiday, your terms. We'll fill in the blanks to plan the perfect trip in the blink of an eye.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="features-card mb-3 " style={{ borderBottom: "10px solid #001C30" }}>
                                <div className="d-flex justify-content-center align-content-center">
                                    <div className="circle text-center mt-4 mb-2" style={{ backgroundColor: "#001C30" }}>
                                        <i className="fa-solid fa-people-group features-icon mt-4" style={{ color: "white" }}></i>
                                    </div>
                                </div>
                                <div >
                                    <h4 className="text-center">Recognize & Connect</h4>
                                    <p className="p-2 text-center">An experienced team of over 1000 travel professionals across 160+ touch points In India & NRI markets to cater to your travel needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>

            {/*Testimonilas-section*/}
            <div id="testimonilas">
                <div className="container testimonilas-conatiner text-center mt-5 p-5 mb-5">
                    <h3 className="p-3"><b>Testimonials</b></h3>
                    <div id="carouselExampleControls" className="carousel slide mt-2" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        "I had an amazing time on my Japan Tour with Wanderlust Wonders.
                                        We created Wonderful memories together, from sightseeing to thrilling rides and enjoyed delicious meals throughout.
                                        This was my first international tour and it was truly excellent.
                                        I will undoubtedly choose Wanderlust Wonders for my next trip."
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Nasimun Khan</p>
                                    <img className="testimonilas-img" src="img/testimonials1.jpg" alt="img/testimonials1.jpg" />
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">“We have seen the vest of Ladakh on this tour, and the management was good and friendly.
                                        They helped and guided us in every possible way.
                                        Our dream tour was so smooth that we didn't even realise we were out of our hometown!”
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Rahul Sharma</p>
                                    <img className="testimonilas-img" src="img/testimonials2.jpg" alt="img/testimonials2.jpg" />
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        “We joined the Scandinavia Tour with Wanderlust Wonders. Initially, there were lots of issues regarding visas, etc.
                                        But once we met our tour expert we slowly and steadily realized that we were in safe hands.
                                        We would like to travel with Wanderlust Wonders on the next trip as well.
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Nick Archer</p>
                                    <img className="testimonilas-img" src="img/testimonials3.jpg" alt="img/testimonials3.jpg" />

                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="testimonilas-caption text-center">
                                    <div className="ml-5 mr-5 testimonilas-quotes">
                                        “Great behaviour, great management. We didn't have to worry about anything.
                                        Such sincere behaviour cannot really be expected in this professional age.”
                                    </div>
                                    <p className="mt-2" id="image-caption" style={{ fontSize: "17px", fontWeight: "10px" }}>━ Aneesha Williams</p>
                                    <img className="testimonilas-img" src="img/testimonials4.jpg" alt="img/testimonials4.jpg" />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center newsletter-conatiner pt-3 pb-3">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h2 ><b>Newsletter</b></h2>
                        <p style={{ fontSize: "17px" }}><i>Subscribe to our newsletter for the latest tour packages, tips, & travel guides. Let's stay updated!</i></p>
                        <div className="d-flex justify-content-center align-content-center">
                            <input name="newsletterEmail" onChange={onValueChange} id="newsletter" type="email" placeholder="demo@gmail.com" style={{ border: "1px solid #007bff", outline: "none" }}></input>
                            <input className="btn btn-outline-primary newsletter-btn ml-2" onClick={onNewsletterSubmit} type="submit" value={"Subscribe"}></input>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </>
    );

}

export default Home;