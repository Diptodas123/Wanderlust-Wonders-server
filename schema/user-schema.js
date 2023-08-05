import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userEmail:String,
    userName:String,
    userPhn:Number,
    userPassword:String,
    userConfirmPassword:String
});

const user=mongoose.model("user",userSchema);

export default user;