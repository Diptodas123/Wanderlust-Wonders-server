import axios from "axios";

const URL = "http://localhost:8000/";

//API for users
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}addUser`, data);
    } catch (error) {
        console.log("Error while calling the addUser API", error);
    }
}
export const getUser = async () => {
    try {
        return await axios.get(`${URL}allUsers`);
    } catch (error) {
        console.log("Error while fetching user data", error);
    }
}
export const getUserDetails = async (data) => {
    try {
        return await axios.post(`${URL}getUserDetails`, data);
    } catch (error) {
        console.log("Error while fetching user data", error);
    }
}
export const deleteUser = async (data) => {
    try {
        return await axios.post(`${URL}deleteUser`, data)
    } catch (error) {
        console.log("Error while deleting user data", error)
    }
}

// API for packages
export const addPackage = async (data) => {
    try {
        return await axios.post(`${URL}addPackage`, data);
    } catch (error) {
        console.log("Error while calling addPackage API", error);
    }
}
export const getPackage = async () => {
    try {
        return await axios.get(`${URL}allPackages`);
    } catch (error) {
        console.log("Error while fetching package data", error);
    }
}
export const getPackageDetails = async (data) => {
    try {
        return await axios.post(`${URL}getPackageDetials`, data);
    } catch (error) {
        console.log("Error while fetching package data", error);
    }
}

//API for bookings
export const bookPackage = async (data) => {
    try {
        return await axios.post(`${URL}bookPackage`, data);
    } catch (error) {
        console.log("Error while calling bookPackage API", error);
    }
}
export const getBooking = async () => {
    try {
        return await axios.get(`${URL}getBookings`);
    } catch (error) {
        console.log("Error while fetching booking data", error);
    }
}
export const getBookingDetails = async (data) => {
    try {
        return await axios.get(`${URL}getBookingsDetails`, data);
    } catch (error) {
        console.log("Error while fetching booking data", error);
    }
}

//API for support
export const addSupport = async (data) => {
    try {
        return await axios.post(`${URL}addSupport`, data);
    } catch (error) {
        console.log("Error while calling addSupport API", error);
    }
}
export const getSupport = async () => {
    try {
        return await axios.get(`${URL}geSupport`);
    } catch (error) {
        console.log("Error while fetching support data", error);
    }
}