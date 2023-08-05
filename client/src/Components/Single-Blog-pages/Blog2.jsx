import React from "react";
import "./Blog.css";
import Menu from "../Menu/Menu.jsx";
import Footer from "../Footer/Footer.jsx"
import { Link } from "react-router-dom";
const Blog2 = () => {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <Menu />
            <div className="container blog-conatiner" >
                <div className="pt-2 heading">
                    <h1 className="mb-5">The Ultimate Adventure: Buckle Up For The Best Road Trips In The World</h1>
                    <img src="img/card-img-14.jpg" alt="img/card-img-14.jpg" />
                </div>
                <div className="text-left blog-text">
                    <p>Are you ready to hit the road and explore the world's most stunning destinations?
                        If you're a nature lover, then road tripping is the perfect way to experience some of the world's
                        most breath taking landscapes.
                        From the rugged coastlines of California to the majestic mountains of Pakistan,
                        here are our top 10 picks for the best road trips in the world.
                    </p>
                    <hr></hr>
                    <h5 className="pt-5">Great Ocean Road, Australia</h5>
                    <p>The Great Ocean Road in Australia is a paradise for nature lovers.
                        This 243-kilometer stretch of road along the south-eastern coast of
                        Australia offers stunning views of the ocean, rainforests, and beaches.
                        The Twelve Apostles, a collection of limestone stacks that rise out of the ocean, is a must-see attraction.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic11.jpg" alt="img/blog_pic11.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">The Swiss Alps, Switzerland </h5>
                    <p>Embarking on a road trip through the Swiss Alps is an unforgettable adventure that
                        offers something for everyone. From stunning natural vistas to charming mountain villages,
                        the Swiss Alps are a treasure trove of beauty and excitement.
                        As you make your way through the winding roads and mountain passes,
                        you'll discover hidden gems and breathtaking views that will leave you awe-inspired.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic12.jpg" alt="img/blog_pic12.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Amalfi Coast, Italy</h5>
                    <p>
                        The Amalfi Coast in Italy is a road trip that should be on everyone's bucket list.
                        This 50-kilometer stretch of road along the Italian coast is famous for its beautiful villages,
                        stunning beaches, and crystal-clear waters.
                        Positano, a colorful village perched on the cliffs above the sea, is a must-see attraction.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic13.jpg" alt="img/blog_pic13.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Trollstigen Road, Norway</h5>
                    <p>The Trollstigen Road in Norway is a winding mountain road that offers
                        breathtaking views of the Norwegian fjords and mountains.
                        The Trollstigen Visitor Center is a great place to learn about the history and geology of the area.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic14.jpg" alt="img/blog_pic14.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Carretera Austral, Chile</h5>
                    <p>The Carretera Austral in Chile is a road trip that takes you through Chilean Patagonia,
                        offering stunning views of glaciers, mountains, and lakes.
                        The Marble Caves, a series of stunning natural caves carved out of the rock by the water,
                        is a must-see attraction.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic15.jpg" alt="img/blog_pic15.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Garden Route, South Africa</h5>
                    <p>The Garden Route in South Africa takes you along the coast of South Africa,
                        offering stunning views of the ocean and surrounding mountains. Tsitsikamma National Park,
                        a coastal reserve that offers hiking, kayaking, and bungee jumping opportunities, is a must-visit attraction.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic16.jpg" alt="img/blog_pic16.jpg" />
                    <h5 className="pt-5">Mae Hong Son Loop, Thailand</h5>
                    <p>The Mae Hong Son Loop in Thailand takes you through lush forests, rice paddies,
                        and traditional Thai villages. Pai Canyon, a series of narrow,
                        winding canyons that offer stunning views of the surrounding countryside, is a must-see attraction.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic17.jpg" alt="img/blog_pic17.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Karakoram Highway, Pakistan</h5>
                    <p>The Karakoram Highway in Pakistan takes you through the stunning mountain scenery of the
                        Karakoram Range, offering views of glaciers, lakes, and towering peaks. The Hunza Valley,
                        a beautiful valley that's home to traditional villages and stunning scenery, is a must-visit attraction.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic18.jpg" alt="img/blog_pic18.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Ring Road, Iceland</h5>
                    <p>The Ring Road in Iceland is a road trip that takes you through some of the
                        country's most stunning landscapes, including glaciers, volcanoes, and waterfalls.
                        Don't forget to visit the Blue Lagoon,
                        a geothermal spa with warm, mineral-rich waters that are said to have healing properties.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic19.jpg" alt="img/blog_pic19.jpg" />
                    <hr></hr>
                    <h5 className="pt-5">Sahara Desert Circuit, Morocco</h5>
                    <p>The Sahara Desert Circuit in Morocco takes you on a 1,200 kilometer road trip through the
                        stunning scenery of the Sahara Desert. Don't miss the chance to visit the Tassili n'Ajjer National Park,
                        a UNESCO World Heritage site that's home to ancient rock art and stunning geological formations.
                    </p>
                    <img className="pt-2" style={{ height: "10%", width: "50%" }} src="img/blog_pic20.jpg" alt="img/blog_pic20.jpg" />
                    <hr></hr>
                    <p className="pt-5">In conclusion, road tripping is one of the best ways to experience the
                        world's most stunning landscapes. Whether you're exploring the beautiful city of Amalfi Coast
                        or the majestic mountains of Pakistan, there's something for everyone on our list of the top 10
                        road trips in the world.
                        So pack your bags, hit the road, and prepare to be amazed by the natural wonders of our world.</p>
                    <p className="pt-2 pb-5">
                        Remember, when embarking on a road trip,
                        always prioritize safety and make sure your vehicle is in good condition.
                        It's also important to respect the local culture and environment by
                        following local laws and leaving no trace. With that said,
                        we hope you feel inspired to hit the road and explore the world.
                    </p>
                    <hr />
                    <div className="share-links">
                        <ul className="list-unstyled d-flex align-content-center">
                            <li>
                                <p>Share:</p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-primary" to="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blog2" target="_blank">
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="text-primary" to="https://twitter.com/share?url=http://localhost:3000/blog2 &text=Best travel blog by Wonderlust Wonders" target="_blank">
                                        <i class="fa-brands fa-square-twitter"></i>
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="https://www.facebook.com/WanderlustWWonders" target="_blank">
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
                                    <Link className="social-media-icons" to="https://www.linkedin.com/shareArticle?url=http://localhost:3000/blog2&title=Best Travel Blog &summary=<SUMMARY>&source=http://localhost:3000/blog1" target="_blank">
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
                            <Link to="/blog1" onClick={backToTop}>
                                <img src="img/card-img-13.jpg" alt="img/card-img-13.jpg" />
                            </Link>
                            <h6 className="text-center  p-3">The Ultimate Summer Adventure: Top Destinations To Add To Your 2023...</h6>
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

export default Blog2;