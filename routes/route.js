import express from "express";
import multer from "multer";
import { getUser, getUserDetails, deleteUser } from '../controller/user-controller.js';
import { getBooking } from "../controller/booking-controller.js";
import { getPackage } from "../controller/package-controller.js";
import { getSupport } from "../controller/support-controller.js";

import User from "../schema/user-schema.js";
import Support from "../schema/support-schema.js";
import Booking from "../schema/booking-schema.js";


const router = express.Router();

const storage = multer.diskStorage({
    diskStorage: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

router.post("/addUser", upload.single('image'), async (req, res) => {
    const user = new User();
    user.userEmail = req.body.userEmail;
    user.userName = req.body.userName;
    user.userPhn = req.body.userPhn;
    user.userPassword = req.body.userPassword;
    user.userConfirmPassword = req.body.userConfirmPassword;
    user.save();
    res.status(201).json("Success");
});

router.post("/bookPackage", upload.single("image"), async (req, res) => {
    const booking = new Booking();
    booking.name = req.body.name;
    booking.dob = req.body.dob;
    booking.mobile = req.body.mobile;
    booking.email = req.body.email;
    booking.image = req.file.originalname;
    booking.guests=req.body.guests;
    booking.state = req.body.state;
    booking.country = req.body.country;
    booking.pin = req.body.pin;
    booking.checkInDate = req.body.checkInDate;
    booking.amount = req.body.amount;
    booking.cardHolderName=req.body.cardHolderName;
    booking.cardNumber=req.body.cardNumber;
    booking.expiryMonth=req.body.expiryMonth;
    booking.expiryYear=req.body.expiryYear;
    booking.cvv=req.body.cvv;
    booking.destination=req.body.destination;
    booking.save();
    res.status(201).json("Booking done");
});

router.post("/addSupport", upload.single("image"), async (req, res) => {
    const support = new Support();
    support.name = req.body.name;
    support.email = req.body.email;
    support.msg = req.body.msg;
    support.save();
    res.status(201).json("Support submitted");
});

router.get('/allUsers', getUser);
router.get('/allPackages', getPackage);
router.get("/getBookings", getBooking);
router.get("/geSupport", getSupport);
router.post('/getUserDetails', getUserDetails);
router.post('/deleteUser', deleteUser);

export default router;