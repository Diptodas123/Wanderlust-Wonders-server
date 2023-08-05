import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    name: String,
    dob: Date,
    mobile: Number,
    email: String,
    image: String,
    guests: Number,
    state: String,
    country: String,
    pin: Number,
    checkInDate: Date,
    amount: Number,
    cardHolderName: String,
    cardNumber: Number,
    expiryMonth: Date,
    expiryYear: Date,
    cvv: Number,
    destination:String
});

const booking = mongoose.model("booking", bookingSchema);
export default booking;