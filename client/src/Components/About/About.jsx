import React from 'react';
import Menu from '../Menu/Menu';
import './About.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Footer from '../Footer/Footer';

const AboutUs = () => {

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Menu />


      {/* For the Our Vision  */}
      <div className='container abouting d-flex'>
        <div className='aboutinside-left'>
          <div className='about-header'>
            <h3>Our Vision</h3>
          </div>
          <div className='about-insidecontent'>
            <p>With WonderLust Wonders, you don't need to worry about anything, just tell us your requirements and we will
              get customized and the best packages for you!</p>
            <p id='butonforabout'>
              <Link className='about-button' to='/'>
                <input type='button' className='btn view-destination btn-link' value='View Destinations' onClick={backToTop}></input>
              </Link>
            </p>
          </div>
        </div>
        <div className='aboutinside-right'>
          <img className='aboutheaderimage' src='img/aboutus1.jpg' alt='...' width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </div>
      </div>


      {/* Numbers and Percentage in page */}
      <div className='container scoring'>
        <div className='row'>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className='scores'>
              <h1><b>99%</b></h1>
              <p className='scorecon'><b>Travelers recommend us to friends and family</b></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className='scores'>
              <h1><b>1000+</b></h1>
              <p className='scorecon'><b>Successful Tours Completed</b></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className='scores'>
              <h1><b>24/7</b></h1>
              <p className='scorecon'><b>Service available</b></p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>


      <div className='story container d-flex pd-5'>
        <div className='story-leftarea'>
          <div className='story-header'>
            <h3>Our Story</h3>
          </div>
          <div className='story-insidecontent'>
            <p>Welcome to Wanderlust Wonders, your gateway to extraordinary journeys and unforgettable experiences. We are here to
              inspire your adventurous spirit and take you on a captivating voyage across the globe. Whether you seek breathtaking
              landscapes, cultural immersion, or thrilling escapades, our expertly crafted tours and travel packages cater to all your
              wanderlust desires. Immerse yourself in the vibrant tapestry of diverse cultures, delve into the hidden gems of ancient cities,
              and savor the flavors of exotic cuisines. With Wanderlust Wonders, embark on a journey of a lifetime, where every step unveils
              a new wonder and every moment creates cherished memories. Let us guide you to the extraordinary and ignite your passion
              for travel.</p>
          </div>
        </div>
        <div className='story-rightarea'>
          <img src='img/airplane.jpg' alt='...' height={'100%'} width={'100%'} style={{ objectFit: 'fill', zIndex: '0' }} />


        </div>
      </div>
      <div className='developer-heading'>
        <h1>Meet The Team</h1>
      </div>

      <div className='container developers text-center mt-5 mb-5'>
        <div className='row'>
          <div className="col-lg-3 col-md-4 mt-5 mb-5">
            <div className='developer-name'>
              <img className='developer-pic' src='img/dipto.jpg' alt='img/alt-about.jpg' />
              <p className='devloper-work' style={{ fontSize: "20px" }}><b>Dipto Das</b></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-5 mb-5">
            <div className='developer-name'>
              <img className='developer-pic' src='img/meena.jpg' alt='img/alt-about.jpg' />
              <p className='devloper-work' style={{ fontSize: "20px" }}><b>Meenakshi Sarkar</b></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-5 mb-5">
            <div className='developer-name'>
              <img className='developer-pic' src='img/swapnil.jpg' alt='img/alt-about.jpg' />
              <p className='devloper-work' style={{ fontSize: "20px" }}><b>Swapnil Bhattacharya</b></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-5 mb-5">
            <div className='developer-name'>
              <img className='developer-pic' src='img/shivam.jpg' alt='img/alt-about.jpg' />
              <p className='devloper-work' style={{ fontSize: "20px" }}><b>Shivam Talukdar</b></p>
            </div>
          </div>
        </div>
      </div>


      <div className='about-footer'>
        <Footer />
      </div>


    </>
  );
}



export default AboutUs;