import Support from "../schema/support-schema.js";

export const getSupport = async (request, response) => {
    try {
        const support = await Support.find();
        response.status(200).json(support);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};