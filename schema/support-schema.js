import mongoose from "mongoose";

const supportSchema=mongoose.Schema({
    name:String,
    email:String,
    msg:String
});

const support=mongoose.model("support",supportSchema);
export default support;