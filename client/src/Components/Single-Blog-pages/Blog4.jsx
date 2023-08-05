import React from "react";
import "./Blog.css";
import Menu from "../Menu/Menu.jsx";
import Footer from "../Footer/Footer.jsx"
import { Link } from "react-router-dom";
const Blog4 = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu />
            <div className="container blog-conatiner" >
                <div className="pt-2 heading">
                    <h1 className="mb-5">The Ultimate Island Adventure: Must Visit Islands in Southeast Asia For Your Next Trip</h1>
                    <img src="img/card-img-16.jpg" alt="img/card-img-16.jpg" />
                </div>
                <div className="text-left blog-text">
                    <p>
                        Are you dreaming of a tropical getaway? Look no further than Southeast Asia,
                        home to some of the most stunning islands in the world. From the lush
                        jungles of Bali to the crystal-clear waters of Palawan, there's no shortage
                        of beauty to discover. In this blog,
                        we'll take a look at some of the must-visit islands in Southeast Asia, and what
                        makes them so special.
                    </p>
                    <hr></hr>
                    <h5 className="pt-5">Bali, Indonesia</h5>
                    <p>First on our list is Bali in Indonesia. Known for its stunning landscapes,
                        vibrant culture, and delicious cuisine, Bali has something for everyone.
                        From surfing in Canggu to exploring the rice paddies in Ubud, there's no shortage
                        of adventure to be had. And if you're looking to relax, Seminyak's golden sands are
                        the perfect place to soak up the sun.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic21.jpg" alt="img/blog_pic21.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Palawan, Philippines</h5>
                    <p>Next up, we have Palawan in the Philippines. With its crystal-clear waters and stunning
                        limestone cliffs, Palawan is a paradise for island lovers. Take a boat tour of Bacuit Bay,
                        swim in the turquoise lagoons of El Nido, or go island hopping in Coron. And if you're
                        feeling adventurous, don't miss the chance to discover the hidden coves and caves that dot
                        the coastline.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic22.jpg" alt="img/blog_pic22.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Koh Samui, Thailand</h5>
                    <p>If you're looking for luxury and relaxation,
                        Koh Samui in Thailand is the perfect destination. With its
                        luxurious resorts, pristine beaches, and bustling nightlife,
                        Koh Samui is the perfect place to unwind and have some fun.
                        Indulge in a traditional Thai massage, party the night away in Chaweng,
                        or explore the island's many waterfalls and temples.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic23.jpg" alt="img/blog_pic23.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Phu Quoc, Vietnam</h5>
                    <p>Another hidden gem in Southeast Asia is Phu Quoc in Vietnam.
                        Located off the southern coast of Vietnam, Phu Quoc boasts some of the
                        most stunning beaches and landscapes in the region. Explore the island's national parks,
                        swim in the clear waters of Bai Sao beach, or sample the local seafood delicacies at one of
                        the island's many restaurants. And if you're looking for a truly unique experience,
                        take a night squid fishing tour or go on a sunset cruise.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic24.jpg" alt="img/blog_pic24.jpg" />
                    <p className="pt-5">
                        But the beauty doesn't stop there. Here are five more stunning islands to explore in Southeast Asia:
                        <ul style={{ listStyleType: "disc" }}>
                            <li>Koh Rong, Cambodia</li>
                            <li>Langkawi, Malaysia</li>
                            <li>Koh Tao, Thailand</li>
                            <li>Bohol, Philippines</li>
                            <li>Gili Islands, Indonesia</li>

                        </ul>
                    </p>
                    <p className="pt-2 pb-5">
                        Whether you're looking for adventure, relaxation,
                        or a little bit of both, these islands are sure to deliver.
                        So grab your sunscreen, book your tickets, and get ready for the trip of a lifetime.
                    </p>
                    <hr />
                    <div className="share-links">
                        <ul className="list-unstyled d-flex align-content-center">
                            <li>
                                <p>Share:</p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-primary" to="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blog1" target="_blank">
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-primary" to="https://twitter.com/share?url=http://localhost:3000/blog1 &text=Best travel blog by Wonderlust Wonders" target="_blank">
                                        <i class="fa-brands fa-square-twitter"></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="https://www.instagram.com/WanderlustWWonders" target="_blank">
                                        <i class="fa-brands fa-instagram" style={{ color: "#f45252" }}></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-danger" to="https://www.pinterest.com/WanderlustWWonders" target="_blank">
                                        <i className="fa-brands fa-pinterest"></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="social-media-icons" to="https://www.linkedin.com/shareArticle?url=http://localhost:3000/blog1&title=Best Travel Blog &summary=<SUMMARY>&source=http://localhost:3000/blog1" target="_blank">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="container related-posts text-center mt-5">
                <h4>-------------------- Related Posts --------------------</h4>
                <div className="row m-5">
                    <div className="col-sm-12 col-md-4">
                        <div className="related-post-cards">
                            <Link to="/blog2" onClick={backToTop}>
                                <img src="img/card-img-14.jpg" alt="img/card-img-14.jpg" />
                            </Link>
                            <h6 className="text-center  p-3">The Ultimate Adventure: Buckle Up For The Best...</h6>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="related-post-cards">
                            <Link to="/blog3" onClick={backToTop}>
                                <img src="img/card-img-15.jpg" alt="img/card-img-15.jpg" />
                            </Link>
                            <h6 className="text-center  p-3">Discover Europe's Rich History: Must See Historical Sites...</h6>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="related-post-cards">
                            <Link to="/blog1" onClick={backToTop}>
                                <img src="img/card-img-13.jpg" alt="img/card-img-13.jpg" />
                            </Link>
                            <h6 className="text-center  p-3">The Ultimate Summer Adventure: Top Destinations To Add To Your 2023...</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog4;