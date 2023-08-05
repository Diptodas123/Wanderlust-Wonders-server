import User from "../schema/user-schema.js";

export const getUser = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

export const getUserDetails = async (req, res) => {
    try {
        const data = await User.findById({ _id: req.body.id })
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        // console.log(req.body)
        await User.deleteOne({ _id: req.body.id })
        res.status(201).json('success')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};