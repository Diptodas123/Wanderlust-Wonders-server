import React, { useState } from 'react';
import './Contact.css';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addSupport } from "../../service/api"
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [support, setSupport] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const onValueChange = (e) => {
    setSupport({ ...support, [e.target.name]: e.target.value });
    console.log(support);
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, msg } = support;
    if (!name) {
      toast.warn("Enter your name!");
    } else if (!email) {
      toast.warn("Enter your email!");
    } else if (!msg) {
      toast.warn("Enter your query!");
    } else {
      const formData = new FormData();

      formData.append("name", support.name);
      formData.append("email", support.email);
      formData.append("msg", support.msg);

      const res = await addSupport(formData);
      if (res.status === 201) {
        toast.success("Thanks for contacting us, We'll get back to you shortly!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate(0);
        }, 6000);

      }
      else {
        toast.error("Something went wrong, please try again later!", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <Menu />
      <ToastContainer />
      <div className='contact-page container'>
        <div className='contactpage-leftside'>
          <div className='contactpage-header'>
            <h1>Contact Us</h1>
            <div className='contactpage-texts'>
              <h6>We're open for any suggestion or just to have a chat</h6>
            </div>
            <div className='contactpage-content'>
              <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor="name-contact">Name:</label>
                <input onChange={onValueChange} name='name' type="text" id="name-contact" />

                <label htmlFor="email-contact">Email:</label>
                <input onChange={onValueChange} name='email' type="email" id="email-contact" placeholder="demo@gmail.com" />

                <label htmlFor="message-contact">Message:</label>
                <textarea onChange={onValueChange} name='msg' id="message-contact" maxLength={350} style={{ height: '167px', resize: 'none' }} ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>


        <div className='contactpage-rightside'>

          <img src='img/contact.jpg' height={'100%'} width={'100%'} alt='img/contact.jpg' style={{ objectFit: 'cover' }} />
        </div>
      </div>

      <div className='g-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.4251936172323!2d88.36571119999999!3d22.4882249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715cedc0252b%3A0xa626fd25de368075!2sWANDERLUST!5e0!3m2!1sen!2sin!4v1690290720289!5m2!1sen!2sin"
          width="100%" title='g-map' height="410" style={{ border: 0 }} allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='forfooter'>
        <Footer />
      </div>

    </>
  );


}

export default Contact;
