import React, { useState } from "react";
import './Form.css';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { bookPackage } from "../../service/api"

const Form = () => {


    const [user, setUser] = useState({
        name: '',
        dob: '',
        mobile: '',
        email: '',
        image: '',
        guests: "",
        state: '',
        country: '',
        pin: '',
        checkInDate: "",
        amount: "",
        cardHolderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        destination: "",
    })

    const fileData = (e) => {
        setUser({ ...user, image: e.target.files[0] });
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        const { name, dob, mobile, email, guests, state, country, pin, checkInDate, amount, cardHolderName, cardNumber, expiryMonth, expiryYear, cvv, destination } = user;

        if (!name) {
            toast.warn("Enter your name!");
        } else if (!dob) {
            toast.warn("Enter Date Of Birth!");
        } else if (!mobile) {
            toast.warn("Enter Your Mobile!");
        } else if (!email) {
            toast.warn("Enter Your Email!");
        } else if (!guests) {
            toast.warn("Enter The no. of guests!");
        } else if (!state) {
            toast.warn("Enter Your State!");
        } else if (!country) {
            toast.warn("Enter Your Country!");
        } else if (!pin) {
            toast.warn("Enter Your Pin Code!");
        } else if (!checkInDate) {
            toast.warn("Enter check-in date!");
        } else if (!amount) {
            toast.warn("Enter the payable amount!");
        } else if (!cardHolderName) {
            toast.warn("Enter the card-holder name!");
        } else if (!cardNumber) {
            toast.warn("Enter card number!");
        } else if (!expiryMonth) {
            toast.warn("Enter the expiry month!");
        } else if (!expiryYear) {
            toast.warn("Enter the expiry year!");
        } else if (!cvv) {
            toast.warn("Enter the cvv!");
        } else if (!destination) {
            toast.warn("Enter Destination!")
        }
        else {
            const formData = new FormData();

            formData.append('image', user.image, user.image.name);
            formData.append('name', user.name);
            formData.append('dob', user.dob);
            formData.append('mobile', user.mobile);
            formData.append('email', user.email);
            formData.append('guests', user.guests);
            formData.append('state', user.state);
            formData.append('country', user.country);
            formData.append('pin', user.pin);
            formData.append('checkInDate', user.checkInDate);
            formData.append('amount', user.amount);
            formData.append("cardHolderName", user.cardHolderName);
            formData.append("cardNumber", user.cardNumber);
            formData.append("expiryMonth", user.expiryMonth);
            formData.append("expiryYear", user.expiryYear);
            formData.append("cvv", user.cvv);
            formData.append("destination", user.destination);

            const res = await bookPackage(formData);
            if (res.status === 201) {
                toast.success("Thanks for booking and choosing us!", {
                    position: "top-center",
                });
                setTimeout(() => {
                    navigate("/");
                }, 6000);
            }
            else {
                toast.error("Something went wrong try again later!", {
                    position: "top-center",
                });
            }
        }
    }

    return (
        <>
            <div className="container-fluid mb-5">
                <ToastContainer />
                <form>
                    <h4 className="text-center pt-3">Book Your Wonderful Holiday Now!</h4><hr></hr>

                    <div className="container form_book pb-4">
                        <h5 className="pt-3">Personal Details</h5><hr></hr>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="name">Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="name" onChange={onValueChange} class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="dob">Date Of Birth <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" name="dob" onChange={onValueChange} class="form-control" id="dob" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="mobile">Mobile Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="mobile" onChange={onValueChange} class="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Your Mobile" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="email">Email Id <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="email" onChange={onValueChange} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Eg: demo@gmail.com" />
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="image">Image <span style={{ color: 'red' }}>*</span></label>
                                    <input type="file" name="image" onChange={fileData} class="form-control" id="image" aria-describedby="emailHelp" placeholder="Eg: demo@gmail.com" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="guests">Number of Guests <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number" name="guests" onChange={onValueChange} class="form-control" id="guests" aria-describedby="emailHelp" min={1} placeholder="No." />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Address Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="state">State <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="state" onChange={onValueChange} class="form-control" id="state" aria-describedby="emailHelp" placeholder="Enter Your State" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="country">Country <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="country" onChange={onValueChange} class="form-control" id="country" aria-describedby="emailHelp" placeholder="Enter Your Country" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="pin">Pin Code <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="pin" onChange={onValueChange} class="form-control" id="pin" aria-describedby="emailHelp" placeholder="Enter Your 6 Digit Pin" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Trip Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label htmlFor="checkInDate">Check-in Date<span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" name="checkInDate" onChange={onValueChange} class="form-control" id="checkInDate" max={`2024-12-31`} min="2024-07-26" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="destination">Destination<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="destination" onChange={onValueChange} class="form-control" id="destination" aria-describedby="emailHelp" placeholder="Enter Your Destination" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Payment Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label htmlFor="amount">Trip Payment<span style={{ color: 'red' }}>*</span></label>
                                    <input type="number" name="amount" onChange={onValueChange} class="form-control" id="amount " aria-describedby="emailHelp" placeholder="Enter Payable Amount" /><br />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="cardHolderName"> Cardholder Name<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="cardHolderName" onChange={onValueChange} class="form-control" id="cardHolderName" aria-describedby="emailHelp" placeholder="Enter Cardholder Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="cardNumber"> Card Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="cardNumber" onChange={onValueChange} class="form-control" id="cardNumber" aria-describedby="emailHelp" placeholder="1234-5678-9012-3456" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="expiryMonth"> Expiry Month<span style={{ color: 'red' }}>*</span></label>
                                    <input type="month" name="expiryMonth" onChange={onValueChange} class="form-control" id="expiryMonth" aria-describedby="emailHelp" placeholder="Enter Expiry Month" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="expiryYear"> Expiry Year<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="expiryYear" onChange={onValueChange} class="form-control" id="expiryYear" aria-describedby="emailHelp" placeholder="Enter Expiry Year" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label htmlFor="cvv"> CVV<span style={{ color: 'red' }}>*</span></label>
                                    <input type="password" name="cvv" onChange={onValueChange} class="form-control" id="cvv" aria-describedby="emailHelp" placeholder="Enter CVV" />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12">
                                <div className="submit-btn">
                                    <input type="reset" value={'Reset'} className="mr-3"></input>
                                    <NavLink to={''} className={'btn-submit'} onClick={submitForm}>Submit</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;