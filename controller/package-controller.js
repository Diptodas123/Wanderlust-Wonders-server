import Packages from "../schema/package-schema.js";

export const getPackage = async (request, response) => {
    try {
        const pack = await Packages.find();
        response.status(200).json(pack);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};