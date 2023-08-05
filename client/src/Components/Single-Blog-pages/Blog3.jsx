import React from "react";
import "./Blog.css";
import Menu from "../Menu/Menu.jsx";
import Footer from "../Footer/Footer.jsx"
import { Link } from "react-router-dom";
const Blog3 = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu />
            <div className="container blog-conatiner" >
                <div className="pt-2 heading">
                    <h1 className="mb-5">Discover Europe's Rich History: Must See Historical Sites To Visit On Your Next Trip</h1>
                    <img src="img/card-img-15.jpg" alt="img/card-img-15.jpg" />
                </div>
                <div className="text-left blog-text">
                    <p>Europe is a continent that is steeped in history, culture, and tradition. From the iconic Colosseum in Rome to the stunning
                        Sagrada Familia in Spain, there are countless historical sites to explore and marvel at. We are excited to take you on a journey
                        through some of Europe's must-see historical sites.
                    </p>
                    <hr></hr>
                    <h5 className="pt-5">Colosseum - Rome, Italy</h5>
                    <p>First on our list is the Colosseum in Rome, Italy. This ancient amphitheatre was built almost 2000 years ago and was used to
                        host gladiator games and other public spectacles. Today, it remains a symbol of ancient Rome's engineering prowess and is a
                        must-see for anyone interested in history.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic25.jpg" alt="img/blog_pic25.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Parthenon Temple - Athens, Greece</h5>
                    <p>Our next stop takes us to Athens, Greece, where the Parthenon stands atop the Acropolis. This iconic structure is a
                        testament to the incredible skill of the Greek architects and builders of the time and is considered one of the most
                        important surviving examples of classical Greek architecture.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic26.jpg" alt="img/blog_pic26.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Alhambra - Granada, Spain</h5>
                    <p>Next up, we have the Alhambra in Granada, Spain. Built by the Moors during their rule in Spain, the Alhambra is a
                        masterpiece of Islamic architecture, featuring intricate tile work, beautiful gardens, and stunning views
                        of the surrounding countryside.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic27.jpg" alt="img/blog_pic27.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Eiffel Tower - Paris, France</h5>
                    <p>Moving on to France, we have the Eiffel Tower in Paris, a towering symbol of the city of love. This masterpiece
                        of engineering was completed in 1889 and served as the entrance arch to the World's Fair. Today, it is one of the most
                        visited landmarks in the world, attracting millions of tourists every year.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic28.jpg" alt="img/blog_pic28.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Stonehenge - Wiltshire, England</h5>
                    <p>Heading north to England, we come across the enigmatic Stonehenge, a prehistoric monument that dates back to around
                        3000 BCE. No one knows for sure why these massive stones were erected or how they were transported to their current
                        location, but they remain a fascinating and mysterious attraction to this day.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic29.jpg" alt="img/blog_pic29.jpg" />
                    <h5 className="pt-5">Berlin Wall - Berlin, Germany</h5>
                    <p>Our next stop takes us to Berlin, Germany, where we have the Berlin Wall, a
                        stark reminder of the Cold War era. This concrete barrier, which divided the city
                        into two during the 1960s, is now a popular tourist attraction and a symbol of the
                        triumph of democracy over oppression.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic30.jpg" alt="img/blog_pic30.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Sagrada Familia - Barcelona, Spain</h5>
                    <p>In Barcelona, Spain, we have the Sagrada Familia, an unfinished masterpiece by the
                        legendary architect Antoni Gaudi. Work on this stunning cathedral began in 1882 and is
                        still ongoing today, with an estimated completion date of 2026. The cathedral's intricate
                        design and stunning stained glass windows make it one of the most visited attractions in Spain.

                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic31.jpg" alt="img/blog_pic31.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Tower of Belém - Lisbon, Portugal</h5>
                    <p>The Tower of Belém is a historic site in the city of Lisbon, Portugal, built in the early 16th century as a fortress to protect
                        the city's harbor. This tower is considered one of the most important examples of the Portuguese Manueline style of architecture,
                        which features intricate stone carvings that incorporate maritime themes and symbols.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic32.jpg" alt="img/blog_pic32.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Tower of London - London, England </h5>
                    <p>In Barcelona, Spain, we have the Sagrada Familia, an unfinished masterpiece by the legendary architect Antoni Gaudi.
                        Work on this stunning cathedral began in 1882 and is still ongoing today, with an estimated completion date of 2026.
                        The cathedral's intricate design and stunning stained glass windows make it one of the most visited attractions in Spain.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic33.jpg" alt="img/blog_pic33.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Buda Castle - Budapest, Hungary  </h5>
                    <p>Last but not least, one of the most famous historical sites in Hungary is
                        the Buda Castle in Budapest. Located on Castle Hill, it is a massive complex
                        that was built over several centuries, with parts of the palace dating back
                        to the 14th century. The palace has played a significant role in Hungarian
                        history, serving as the residence of kings and queens for centuries, as well as
                        the site of battles and wars.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic34.jpg" alt="img/blog_pic34.jpg" />
                    <hr />
                    <p className="pt-2 pb-5">So, pack your bags and get ready for an adventure of a lifetime.
                        Whether you're planning a trip to Europe or just want to
                        learn more about its history, these must-see historical sites are sure to captivate
                        and inspire you. Remember to take lots of photos and
                        soak in the rich history and culture of this incredible continent. </p>
                    <hr />
                    <div className="share-links">
                        <ul className="list-unstyled d-flex align-content-center">
                            <li>
                                <p>Share:</p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-primary" to="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blog3" target="_blank">
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-primary" to="https://twitter.com/share?url=http://localhost:3000/blog3 &text=Best travel blog by Wonderlust Wonders" target="_blank">
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
                                    <Link className="social-media-icons" to="https://www.linkedin.com/shareArticle?url=http://localhost:3000/blog3&title=Best Travel Blog &summary=<SUMMARY>&source=http://localhost:3000/blog3" target="_blank">
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
                            <Link to="/blog1" onClick={backToTop}>
                                <img src="img/card-img-13.jpg" alt="img/card-img-13.jpg" />
                            </Link>
                            <h6 className="text-center  p-3">The Ultimate Summer Adventure: Top Destinations To...</h6>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="related-post-cards">
                            <Link to="/blog4" onClick={backToTop}>
                                <img src="img/card-img-16.jpg" alt="img/card-img-16.jpg" />
                            </Link>
                            <h6 className="text-center  p-3">The Ultimate Island Adventure: Must Visit Islands in Southeast Asia...</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog3;