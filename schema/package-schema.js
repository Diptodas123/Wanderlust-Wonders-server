import mongoose from "mongoose"
const packageSchema = mongoose.Schema({
    name: String,
    price: String,
    category: String,
    living: String,
    type:String
});

const packages = mongoose.model("AllPackages", packageSchema);
export default packages;