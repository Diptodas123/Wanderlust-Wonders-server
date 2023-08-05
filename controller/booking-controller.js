import Bookings from "../schema/booking-schema.js";

export const getBooking = async (request, response) => {
    try {
        const booking = await Bookings.find();
        response.status(200).json(booking);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};