import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu.jsx";
import Footer from "../Footer/Footer";
import Pages from "./categoryBlog";
import "./Blogs.css";

const Blogs = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const [data] = useState(Pages);
    return (
        <>
            <div>

                <Menu />


                {/* Header Image for blogs page */}
                <div className="blog-page-pic mt-5">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="img/blog1.jpg" alt="img/blog1.jpg" width={'100%'} height={'400px'} style={{ objectFit: 'cover', zIndex: '0' }} />
                            </div>
                            <div className="blog-page">
                                <h1>Welcome to WanderLust Wonders Blogs</h1>
                                <p className="blog-quote">"Embark on Unforgettable Journeys with Our Expert Travel Guides"</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Picture behind the blog card text */}
                <div className="content mt-5">
                    <img src="img/blog2.jpg" alt="img/blog2.jpg"></img>
                    <div class="card card-blog">
                        <div class="card-body">
                            <h1 class="carding-title">Blog</h1>
                            <p class="card-texting">Discover the world with our travel blog. Wanderlust Wonders offers inspiring destination guides, insider tios, and captivating cultural experiences for adventurous travelers. Explore the world and create unforgettable memories with our resource and inspiration.</p>
                        </div>
                    </div>
                </div>

                {/* Cards for the blog  value taken from ./categoryBlog */}
                <div className="container mt-5">
                    <div className="row bloging-container">
                        {
                            data.map((elem) => {
                                // eslint-disable-next-line
                                const { id, pic, written, going } = elem;
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5">
                                        <div className="card blog-carding mb-3">
                                            <img src={pic} alt="img/card-img-13.jpg" />
                                            <h6 className="text-left m-2"><b>{written}</b></h6>
                                            <Link className="bloging-button" to={going} onClick={backToTop}>
                                                <input type="button" className="btn btn-link" style={{ textDecoration: 'none' }} value="Read more"></input>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )


}

export default Blogs;